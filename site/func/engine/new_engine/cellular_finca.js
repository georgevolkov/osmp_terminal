﻿log.add('Cellular start');
var Phone_Number = '',
sLogoContent = './img/ui/cellular.gif',
flag = true,
sNumber = '',
nPrvId = 0,
sPrv = "",
sPrvImage,
oInfo = {},
js = null,
head = null,
oProv = null,
parser = new phoneParser(),
number,
realnumber = false,
r1 = RegExp('^8[( ]{2}[0-9]{2}[) ]{3}$'),
r2 = RegExp('^8[( ]{2}[0-9][) ]{5}$'),
nTest = /^\d{9}$/,
nClean = new RegExp('[ ()-]', 'g'),
providerButton = {},
sLocale = "ru_ru",
sPrvAlert = "",
sPrvRecMsg = "",
sPrvMask = "",
aResult = null,
sPrintMethod = "",
sMinSum = '0', sMaxSum = '0', minCashSum = '0',
nSelectedProvider = undefined,
providersList = value; // value - массив из файла prv_values.js


function initPage() {
    sPrvAlert = getcookie("prv_alert");
    sPrvMask = getcookie("prv_mask");
    sPrvRecMsg = getcookie("prv_receipt_extra_message");
    aResult = _parseMask(sPrvMask);    
    
    if (sPrvAlert == 'null') sPrvAlert = '';    
    nPrvId = getcookie("prv_id");	

    if (nPrvId == 'null') {
        sPrintMethod = "cellular";
       // $("number").value = '0';
    }
    else {
        nSelectedProvider = getProviderInfo();
        if (isCellularProvider(nPrvId)) {
            sPrintMethod = "cellular";
            $("number").value = '0';
        }
        else {
            sPrintMethod = "other";
            $("number").value = '';
        }
    }

    processTranslate("ru_ru");

    start();

    loadPrvImage(sPrintMethod);

    number.value = getMaskString("");

startActionIfBeeline(nPrvId);

    /*if (nPrvId != 5132) {
        drawImage('advert_2', "img/ui_item/pharaoh2.gif");
    }*/
	 if (nPrvId == '9868'){
	     $("btn_forward").style.display = 'block';
		 processProvider('');
	 }
}

var aChunks = [], aResult = null;

function getMinValueCharCount() {
    var nCount = 0;
    for (var i = 0; i < aResult.length; i++) {
        var field = aResult[i][0];
        if (field.type == "DYNAMIC") {
            nCount += field.minLength;
        }
    }
    return nCount;
}

function getMaxValueCharCount() {
    var nCount = 0;
    for (var i = 0; i < aResult.length; i++) {
        var field = aResult[i][0];
        if (field.type == "DYNAMIC") {
            nCount += field.maxLength;
        }
    }
    return nCount;
}

function getMaskString(snum)
{
    var str = "";    
    var numIdx = 0;   

    $('cellular_input').innerHTML = "";

    for (var i = 0; i < aResult.length; i++) {
        var field = aResult[i][0];
        if (field.type == "DYNAMIC") {
            for (var j = 0; j < field.maxLength; j++) {
                var placeChar = (numIdx < snum.length) ? snum.charAt(numIdx++) : "  ";
                str += placeChar;

                var span = document.createElement("span");
                span.innerText = placeChar;
                span.style.width = '39px';
                $('cellular_input').appendChild(span);
            }
        }
        else if (field.type == "STATIC") {
            str += field.value;

            var span = document.createElement("span");            
            span.innerText = field.value;
            span.style.color = "#FF0000";
            $('cellular_input').appendChild(span);
        }
    }    
    return str;
}

function _isCorrectChunk(sChunk) {
    return (/^<!\^.+\${(?:\d+|\d+,\d+)}>$/.test(sChunk));
}

function _isVariableLength(aChunks) {
    for (var i = 0; i < aChunks.length; i++) {
        if (!$isNoU(aChunks[i]) &&
            aChunks[i].type == "DYNAMIC" &&
            aChunks[i].minLength < aChunks[i].maxLength) {
            return true;
        }
    }
    return false;
}

function startActionIfBeeline(prvId) {
    if (prvId != 7778) return;

    var asoExtra = document.createElement('input');
    asoExtra.name = asoExtra.id = '_extra_ev_aso';
    asoExtra.type = 'hidden';
    asoExtra.value = '1';

    var bonusExtra = document.createElement('input');
    bonusExtra.name = bonusExtra.id = '_extra_ev_bonus';
    bonusExtra.type = 'hidden';
    bonusExtra.value = '1';

    var ff = document.forms['ff'];
    ff.appendChild(asoExtra);
    ff.appendChild(bonusExtra);
}

function _parseMask(sMask) {
    var aResult = [];
    var aTemp = [];
    var sTemp = "";
    var nIdx = sMask.indexOf("$$");
    if (nIdx == -1) {
        aTemp = _parseBlock(sMask);
        for (var i = 0; i < aTemp.length; i++) {
            aResult.push([aTemp[i]]);
        }
    }
    else {
        while (nIdx > -1) {
            if (nIdx > 0) {
                aTemp = _parseBlock(sMask.substring(0, nIdx));
                for (var i = 0; i < aTemp.length; i++) {
                    aResult.push([aTemp[i]]);
                }
                sMask = sMask.substr(nIdx);
            }
            sMask = sMask.replace("$$", "");
            nIdx = sMask.indexOf("$$");
            if (nIdx > -1) {
                aTemp = _parseBlock(sMask.substring(0, nIdx));
                if (_isVariableLength(aTemp)) {
                    for (var i = 0; i < aTemp.length; i++) {
                        aResult.push([aTemp[i]]);
                    }
                }
                else {
                    aResult.push(aTemp);
                    if (aResult.last().length == 1 &&
                        aResult.last().first().type == "STATIC") {
                        aResult.last().first().type = "STATIC_FRAMED";
                    }
                }
                sMask = sMask.substr(nIdx);
                if (sMask.length > 2) {
                    sMask = sMask.substr(2);
                }
                else {
                    sMask = "";
                }
            }
            nIdx = sMask.indexOf("$$");
        }
        if (sMask.length) {
            aTemp = _parseBlock(sMask);
            for (var i = 0; i < aTemp.length; i++) {
                aResult.push([aTemp[i]]);
            }
        }
    }	
    return aResult;
}

function _parseBlock(sBlock) {
    var aResult = [];
    var aTemp = [];
    var sTemp = "";
    var sRegExp = "";
    var sLength = "";
    var nMinLength = 0;
    var nMaxLength = 0;
    var nIdx = sBlock.indexOf("<!");
    while (nIdx > -1) {
        if (nIdx > 0) {
            aResult.push({
                type: "STATIC",
                value: sBlock.substr(0, nIdx)
            });
        }
        sBlock = sBlock.substr(nIdx);
        nIdx = sBlock.indexOf("}>");
        if (nIdx > -1) {
            sTemp = sBlock.substr(0, nIdx + 2);
            if (_isCorrectChunk(sTemp)) {
                sRegExp =
                sTemp.substring(sTemp.indexOf("^"),
                    sTemp.indexOf("$") + 1);
                sLength =
                sTemp.substring(sTemp.indexOf("${") + 2,
                    sTemp.indexOf("}"));
                if (/^\d+$/.test(sLength)) {
                    nMaxLength = nMinLength = parseInt(sLength, 10);
                }
                else if (/^\d+,\d+$/.test(sLength)) {
                    aTemp = sLength.split(",");
                    nMinLength = parseInt(aTemp[0], 10);
                    nMaxLength = parseInt(aTemp[1], 10);
                }
                aResult.push({
                    type: "DYNAMIC",
                    regExp: sRegExp,
                    minLength: nMinLength,
                    maxLength: (nMaxLength < 25 ? nMaxLength : 25)
                });
            }
            sBlock = sBlock.substr(nIdx + 2);
        }
        else {
            break;
        }
        nIdx = sBlock.indexOf("<!");
    }
    if (sBlock.length) {
        aResult.push({
            type: "STATIC",
            value: sBlock
        });
    }
    return aResult;
}


function loadPrvImage(sPrintMethod) {
    if (nPrvId == 'null') return;

    var oProv = getProviderInfo();
    providerButton.logo.backgroundImage = 'url(' + oProv.providerImage + ')';        
    providerButton.text.innerText = oProv.providerName;
}

function isCellularProvider(providerId) {
    for (var i in providersList) {
        if (!providersList.hasOwnProperty(i)) continue;
        if (providersList[i]["prv_id"] === providerId)
            return (providersList[i]["prv_is_cellular"] === true);       
    }

    return false;
}

function selectProviderSound() {    
    nPrvId = getcookie("prv_id");
    if (isCellularProvider(nPrvId)) {
        //cellular
        var snd = document.createElement('bgsound');
        snd.src = 'sound/enter_number.wav';
        snd.loop = '1';
        var e = document.getElementById('soundContainer');
        e.appendChild(snd);
    }
    else {
    }    
}

function processTranslate(sLang) {
    sLocale = getcookie('locale');
    getTextById("button_back", sLocale);
    getTextById("button_forward", sLocale);
    getTextById("button_delete", sLocale);    
	if (nPrvId == "11823")
	{
		getTextById("text_finca_txt_1", sLocale);
		getTextById("text_finca_txt_2", sLocale);
		getTextById("text_finca_txt_3", sLocale);
		getTextById("num_info_txt_finca", sLocale);
		getTextById("num_info_txt_finca2", sLocale);
	}
    ////для услуги финка банк
	if (nPrvId == "22008") {
	    getTextById("text_finca_txt_1_bank", sLocale);
	    getTextById("text_finca_txt_2_bank", sLocale);
	    getTextById("text_finca_txt_3_bank", sLocale);
	   // getTextById("num_info_txt_finca", sLocale);
	    getTextById("num_info_txt_finca2_bank", sLocale);
	}
    getTextById("cellular_title_text", sLocale);     

    if (sPrintMethod == 'cellular') {
        if (nPrvId == "5132") {
            getTextById("cellular_notice_text", sLocale);
            var s = getText("cellular_notice_text_money_nt", sLocale);            
            $("cellular_notice_text").innerHTML = s;
        }
        else {
            getTextById("cellular_notice_text", sLocale);
            var s = getText("cellular_notice_text_money", sLocale);            
            $("cellular_notice_text").innerHTML = s;
        }
    }
    else if (nPrvId == "5138") {
        getTextById("cellular_notice_text", sLocale);
        var s = getText("cellular_notice_text2", sLocale);
        $("cellular_notice_text").innerHTML = s;
    }    
    else
        $('cellular_notice_text').innerHtml = "";

    if (nPrvId == "5176" || nPrvId == "5177") {
        $('cellular_notice_text').style.font = "bold 19px 'Myriad Pro',Arial,sans-serif";
        $('cellular_notice_text').style.color = "#ff0000";
    }

    var prvAlert = providersList[nPrvId]["prv_alert"];
    if (!$isNoU(prvAlert)) {
        try {
            var newAlert = getText(prvAlert, sLocale);
            $("cellular_notice_text").innerHTML = newAlert;
        }
        catch (e) {
            $("cellular_notice_text").innerHTML = prvAlert;
        }
    }   

    var s = storage.get("prv_invitation");    
    $("cellular_title_text").innerHTML = getText(s, sLocale);    
	
		 if (nPrvId == '9765'){
	     $("cellular_title_text").innerHTML = "Номер абонента";	 
	 }
}

function start()
{
    log.add('Start start');

    new CInnerShadow($('btn_del').getElementsByTagName('img')[0], {
        color: 30
    }); 
    new CInnerShadow($('btn_back').getElementsByTagName('img')[0], {
        color: 30
    });
    keyboard();

    number = $("number");
    realnumber = number.value.replace(nClean, '').substr(1);

    providerButton.logo = $('logo').getElementsByTagName('div')[0].style;
    providerButton.text = $('logo').getElementsByTagName('p')[0];

    var oPrv = oProv;
    providerButton.logo.backgroundImage = 'url(' + (oPrv != null ? './img/ui_item/' + getFileName(oPrv.logo) : sLogoContent) + ')';
    providerButton.text.innerHTML = oPrv ? (oPrv.buttonName || oPrv.sName) : '';
    vAlignP();    
    startAdvert("Adv_Cellular");
    
    bdef();
    insertLocaleBar(sLocale);
    log.add('Start finish');
};

function bdef(){
            backward_no.innerHTML = "";
            //backward_no.style.backgroundImage="url('img/ui_item/button_to4ka_qiwi.gif')";
            //backward_no.innerHTML = getDownLeftFlash('mainb.swf');
            //backward_no.style.display='none';
            backward_no.style.width = "310px";
            backward_no.style.height = "124px";
           
        }
        
function insertLocaleBar(currentLocale) {
            var html = '<div style="text-align: center; margin-top: 10px;">'+
            '<div id="lang_invitation1" style="display: inline; text-align: center; font-family: Arial, FreeSans, Helvetica, Tahoma, sans-serif; font-size: 14px; color: #666; text-align: center; text-transform: uppercase; width: 115px; height: 17px;" style="text-align: center;"></div>' +
            '<div id="lang_invitation2" style="display: inline; text-align: center; margin-left: 25px; font-family: Arial, FreeSans, Helvetica, Tahoma, sans-serif; font-size: 14px; color: #666; text-transform: uppercase; width: 115px; height: 17px;"></div>' +
            '<div id="kg" style="display: inline; width: 115px; height: 73px; background-image: url(\'./img/ui/flag_kg.gif\'); background-repeat: no-repeat;" onclick="changeLocale(\'kg\');"></div>' +
            '<div id="ru_ru" style="display: inline; margin-left: 0px; width: 115px; height: 73px; background-image: url(\'./img/ui/flag_rus.gif\'); background-repeat: no-repeat;" onclick="changeLocale(\'ru_ru\');"></div>' +
            '<div id="en_en" style="display: inline; margin-left: 0px; width: 115px; height: 73px; background-image: url(\'./img/ui/flag_eng.gif\'); background-repeat: no-repeat;" onclick="changeLocale(\'en_en\');"></div>' +
    '</div>';
            backward_no.style.backgroundImage = "url(img/ui/gray.gif)";
            backward_no.style.backgroundRepeat = "no-repeat";
            backward_no.innerHTML = html;

            changeLocale(currentLocale);
}
var langArray = {};
function changeLocale(sLocale)
{            
    document.cookie="locale="+sLocale;
    storage.put('locale', sLocale, true);

    langArray.kg = false;
    langArray.ru_ru = false;
    langArray.en_en = false;
    langArray[sLocale] = true;

    processTranslate(sLocale)
    switchEnRus(sLocale);
}

function switchEnRus(sLang) {
    var x = 0;
    var langIndex = 1;
    $(sLang).style.display = 'none';
    for (var e in langArray) if (langArray.hasOwnProperty(e)) {
        if (langArray[e] ==  false) {
            $(e).style.display = 'inline';
            $(e).style.marginLeft = x + 'px';
            getTextById("lang_invitation" + langIndex, e);
            x = 25;
            langIndex = 2;
        }
    }
}
function initProvider(provider) {   
    log.add('initProvider start');
    if(!provider || provider == 'null' || provider == 0)
    {
        oProv = null;
        start();
    }
    else
    {
        getScript("./config/" + provider + ".js", loadProvider);
    }
    log.add('initProvider finish');
}

function loadProvider() {
    try {
        oProv = window.UIProvider.clone();
    }
    catch (e) {
    }
    start();
}

var printTimer;
function press(digit)
{	
    // удаление
    if(digit == 'c')
    {
        flag = true;
        clearProviderButton();
        realnumber = realnumber.substr(0, realnumber.length - 1);
    }
    // добавление
    else if(realnumber !== false)
    {        
        /*if (sPrintMethod == 'cellular') {
            if (realnumber.length < 9)
                realnumber += digit;
        }
        else {        */
            if (realnumber.length < getMaxValueCharCount())
                realnumber += digit;
        //}
    }
    if(printTimer) clearTimeout(printTimer);
    printTimer = setTimeout(print, 50);   
};

function clearProviderButton()
{
    this;
    $("btn_forward").style.display = 'none';
    $("num_info").style.display = "none";
    //$('container404').style.visibility = 'hidden';
    $('container7').className = 'init_l';
    $("provider_not_found").style.display = "none";

    //providerButton.logo.backgroundImage = 'url(' + sLogoContent + ')';
    //providerButton.text.innerHTML = '';
        
    providerButton.logo.backgroundImage = 'url(' + nSelectedProvider.providerImage + ')';
    providerButton.text.innerHTML = nSelectedProvider.providerName;

    vAlignP();
};

function print()
{    
    if(printTimer) clearTimeout(printTimer);
    
    number.value = getMaskString(""+realnumber);

    /*if (sPrintMethod == 'cellular') {
        // форматирование
        var s = parser.spliceNumber(realnumber),
        r = ['0'];
        if(s.str.prefix != '')
        {
            r.push(' (', s.str.prefix, parser.nulls(s.str.prefix, 3, '  '), ')');
            if(s.str.pre != '')
            {
                //r.push(' ', s.str.pre);
                if(s.str.number1 != '')
                {
                    r.push(' ', s.str.number1);
                    if(s.str.number2 != '')
                    {
                        r.push('-', s.str.number2);
                        if(s.str.number3 != '') {
                            r.push('-', s.str.number3);
                        }
                    }
                }
            }
        }
        number.value = r.join('');
    }
    else {       
        number.value = realnumber;
    }*/
    
    preTest();
};
function preTest()
{    
    // проверка    
    if(realnumber !== false)
    {        
        /*if (sPrintMethod == 'cellular') {
            if (realnumber.length == 9) {
                if(flag) {
                    flag = false;
                    if(!$("btn_forward").shadowed)
                    {
                        $("btn_forward").style.display = 'block';
                        new CInnerShadow($('btn_forward').getElementsByTagName('img')[0], {
                            color: 30
                        });
                        $("btn_forward").shadowed = true;
                        $("btn_forward").style.display = 'none';
                    }
                    test(realnumber);
                }
            }
        }
        else {*/
            
            if (realnumber.length >= getMinValueCharCount() && realnumber.length <= getMaxValueCharCount()) {
             if(flag) {
                    if (realnumber.length == getMaxValueCharCount())
                        flag = false;
                    
                    if(!$("btn_forward").shadowed)
                    {
                        $("btn_forward").style.display = 'block';						
                        new CInnerShadow($('btn_forward').getElementsByTagName('img')[0], {
                            color: 30
                        });
                        $("btn_forward").shadowed = true;
                        $("btn_forward").style.display = 'none';												
                    }						
                    test(realnumber);
                }
            }
       // }
    }
}

function isCorrectPrvInfo(oInfo) 
{
    return (!$isNoU(oInfo) &&
        oInfo.hasOwnProperty("from") &&
        oInfo.hasOwnProperty("to"));
}


function test(sNumber)
{    
    //nPrvId = 0;    
    window.sNumber = sNumber;
    processProvider(sNumber);
    /*if(nTest.test(sNumber))
    {     
        parser.get(sNumber, process);
    }
    else
    {        
        process();
    }
*/
}

function formProviderObject(index) {
    return {
        providerId: providersList[index]["prv_id"],
        providerName: providersList[index]["prv_name"],
        providerImage: providersList[index]["prv_image"]
    }
}

function getProviderInfo() {
    var prvValue = getcookie("prv_value");
    return {
        providerId: getcookie("prv_id"),
        providerName: getProviderText(prvValue, sLocale),  //getcookie("prv_name"),
        providerImage: getcookie("prv_image")
    }
}

function getCellularProviderByPrefix(prefix) {
    for (var i in providersList) {
        if (!providersList.hasOwnProperty(i) && (providersList[i]["prv_is_cellular"] === true)) continue;
        if (providersList[i]["prv_tag"]) {
            for (var p in providersList[i]["prv_tag"]) {
                if (!providersList[i]["prv_tag"].hasOwnProperty(p)) continue;
                if (prefix == providersList[i]["prv_tag"][p])
                    return formProviderObject(i);
            }
        }
    }
    return false;
}

function getProviderInfoByPrvId(providerId) {
    for (var i in providersList) if (providersList.hasOwnProperty(i)) {
        if (providersList[i]["prv_id"] == providerId) 
            return formProviderObject(i);
    }

    return false;
}

function processProvider(sNumber) { 
      
    var sTxt = getText("cellular_successful_notice", sLocale);    
    var sNoPrv = getText("cellular_unsuccessful_notice", sLocale);
    var sBadFormat = getText("cellular_bad_format", sLocale);
    var prov = null;            

    var bIsFoundProvider = false;

    /*if (sPrintMethod == 'cellular') {
        //var n = parser.spliceNumber(sNumber);
        //prov = getCellularProviderByPrefix(n.prefix);
        prov = getProviderInfoByPrvId(testCapacity(sNumber))
        if (nSelectedProvider.providerId != prov.providerId) prov = false;
    }
    else {
        prov = getProviderInfoByPrvId(nPrvId);
    }*/

    /*if (sPrintMethod == 'cellular') {
        sNumber = '0' + sNumber;
    }*/   
    
    //prov = getProviderInfoByPrvId(nPrvId);
    prov = getProviderInfo();

    window.sNumber = sNumber = accConvert(prov.providerId, sNumber);
	
    bIsFoundProvider = (prov === false ? false : true);
    clearProviderButton();

    if (bIsFoundProvider) {
        var oMinMax = getMinAndMaxSummForProvider(prov.providerId);
        nPrvId	= prov.providerId;
        sPrv = prov.providerName;
        sPrvImage = prov.providerImage;
        sMinSum = oMinMax.minSum;
        sMaxSum = oMinMax.maxSum;
        minCashSum = oMinMax.minCashSum;
        $('container7').className = 'init_l';
        $("btn_forward").style.display = "";
        $("num_info_txt_finca").style.display = "";
        if (nPrvId == "11823") {
            $("num_info_txt_finca2").style.display = "";
        }
        if (nPrvId == "22008") {
            $("num_info_txt_finca2_bank").style.display = "";
        }
        $("provider_not_found").style.display = "none";
        loadPrvImage(sPrintMethod);
		
		
        if (!testProviderByMask(prov.providerId, sNumber)) {
            sTxt = sBadFormat;
            $("btn_forward").style.display = 'none';			
            $("num_info_txt_finca").style.display = 'none';
        }
    }
    else {        
        nPrvId = 0;
        sPrv = sPrvImage = "";

        providerButton.logo.backgroundImage = '';
        providerButton.text.innerHTML = '';

        $('container7').className = 'init_l undefined';
        $("provider_not_found").style.display = "";
        getTextById("provider_not_found", sLocale);        
        sTxt = sNoPrv;
        $("btn_forward").style.display = 'none';		
        $("num_info_txt_finca").style.display = 'none';
    }

    $("num_info_txt").innerHTML = sTxt;

    $("num_info").style.marginTop = (bIsFoundProvider) ? "25px" : "10px";
    if (nPrvId != "5176")
        $("num_info").style.display = "block";
    storage.put("provider", nPrvId.toString(10));
    /*setTimeout(function(){
        startAdvert("Adv_Cellular");
    }, 100);*/
}

/*function process(result)
{
	
    var sLogoContent2 = sLogoContent;
    var BEELINE_INTERNET_VALUE = 50;
    var nPrefix = 0;
    var oProvider = {};
    var sRegion = "";
    var sTxt =
    "Проверьте, не ошиблись ли Вы при вводе номера<br /><br />" +
    "Если номер набран верно, нажмите \"Вперед\" для выбора оператора";
    var sNoPrv = "Невозможно оплатить данного провайдера";
    var sNoRegion = "Регион не определен";
    var sCellularProvider = "Сотовая связь";
    var bIsFoundProvider = false;

    $("btn_forward").style.display = 'block';

    providerButton.logo.backgroundImage = 'url('+sLogoContent+')';
    providerButton.text.innerHTML = '';
    vAlignP();

    if(!$isNoU(result) && !$isNoU(result.provider) && !$isNoU(result.provider.sName))
    {
        bIsFoundProvider = true;
        nPrvId = result.provider.id;
        if (nPrvId == 2 && result.priority == BEELINE_INTERNET_VALUE)
        {
            sPrv = "Билайн Интернет";
        }
        else
        {
            sPrv = result.provider.sName;
        }
        if(!$isNoU(result) && !$isNoU(result.region))
        {
            sRegion = result.region;
        }
    }
	
    if(bIsFoundProvider)
    {
        sTxt = sPrv + "<br />" + sRegion;
        //initProvider(nPrvId.toString(10));

        if (!$isNoU(result) && !$isNoU(result.provider))
        {
            oProv = result.provider;
            if(
                result.provider.hasOwnProperty("logo") &&
                !$isNoU(result.provider.logo) &&
                result.provider.logo.is(String)
                )
                {
                providerButton.logo.backgroundImage = 'url(./img/ui_item/' + getFileName(result.provider.logo) + ')';
            }
			
            providerButton.text.innerHTML = result.provider.buttonName || result.provider.sName;
            vAlignP();
        }
        else
        {
            result.provider.id = nPrvId.toString(10);
            result.provider.sName = sPrv != sNoPrv ? sPrv : sCellularProvider;
            oProv = {};
		   	
        }
    }
	
	
    //$('container404').style.visibility = bIsFoundProvider ? 'hidden' : 'visible';
    $('container7').className = 'init_l' + (bIsFoundProvider ? '' : ' undefined');

    $("num_info").style.marginTop = (bIsFoundProvider || !$isNoU(result)) ? "55px" : "10px";
    $("num_info").style.display = "block";
    if (!$isNoU(result) && !$isNoU(result.provider))
    {
        if (result.provider == "false")
        {
            sTxt = sNoPrv;
            $("btn_forward").style.display = 'none';
        }
    }
    
    $("num_info_txt").innerHTML = sTxt;

    storage.put("provider", nPrvId.toString(10));
    setTimeout(function(){
        startAdvert("Adv_Cellular");
    }, 100);
};
*/

function backward()
{    
    storage.put("pay_info", "null");   
    location = storage.get("last_page");
}

function forward()
{
    var vall = $("number").value;
	press('c');
    if (nPrvId == '9989' && vall == '-')alert('fd');    
	var oProvider = {};	
	
	if (nPrvId == 9244)
	{	
		var oPayInfoNew = Object.deserialize(storage.get("pay_info"));
		
	    oProvider.prvId = nPrvId;
        oProvider.prvName = sPrv;
        oProvider.prvLogo = sPrvImage;
        oProvider.account = "0"+sNumber+";"+oPayInfoNew.Account;
        oProvider.minCashSum = minCashSum;        
        oProvider.minSum = sMinSum;
        oProvider.maxSum = sMaxSum;        
        oProvider.alert = sPrvAlert;
        oProvider.sPrvRecMsg = sPrvRecMsg;        
        oProvider.prvGroup = storage.get("prv_group");
        oProvider.isCellular = (sPrintMethod == 'cellular' ? 'true' : 'false');
        storage.put("pay_info", oProvider.serialize());
        storage.put("Phone_Number", $("number").value);
        storage.put("locale", sLocale, true);
        ff.prv_id.value = nPrvId;
        ff.prv_name.value = sPrv;
        ff.Language.value = convertToMaratlLanguage(sLocale);

        ff.action = "validate_confirm.html";        
        ff.submit();
	} 	else
	if(nPrvId == 0)
    {
        //storage.put("last_page", document.location.href);
        oProvider.prvId = 0;
        oProvider.prvName = 'cellular';
        oProvider.prvLogo = 'null.gif';        
        oProvider.account = sNumber;
        oProvider.isCellular = 'true';
        oProvider.minSum = '0';
        oProvider.maxSum = '0';
        storage.put("pay_info", oProvider.serialize());
        storage.put("Phone_Number", $("number").value);
        storage.put("bevalValue", "cellular");
        storage.put("group", "-20");
        storage.put("flag_cel", "true");
        ff.prv_id.value = '0';
        ff.prv_name.value = 'cellular';
        ff.getAccountNumber.value = sNumber;
        ff.action = './pages.html';
        ff.Language.value = convertToMaratlLanguage(sLocale);
        ff.submit();
    }
    else	 
    if (nPrvId == 11823) 
	{      
        oProvider.prvId = nPrvId;
        oProvider.prvName = sPrv;
        oProvider.prvLogo = sPrvImage;
        oProvider.account = sNumber;
        oProvider.minCashSum = minCashSum;        
        oProvider.minSum = sMinSum;
        oProvider.maxSum = sMaxSum;        
        oProvider.alert = sPrvAlert;
        oProvider.sPrvRecMsg = sPrvRecMsg;        
        oProvider.prvGroup = storage.get("prv_group");
        oProvider.isCellular = (sPrintMethod == 'cellular' ? 'true' : 'false');
        storage.put("pay_info", oProvider.serialize());
        storage.put("Phone_Number", $("number").value);
        storage.put("locale", sLocale, true);
        ff.prv_id.value = nPrvId;
        ff.prv_name.value = sPrv;
        //ff.getAccountNumber.value = sNumber;
        ff.Language.value = convertToMaratlLanguage(sLocale);

        /*var needOnlineCheck = storage.get("prv_online_check");
        var action = "validate.html";
        if (needOnlineCheck == "true") {
            ff._extra_auth_page.value = 'online_auth.html';
            ff._extra_auth_success.value = 'validate.html';
            ff._extra_auth_fail.value = 'online_auth_error.html';
            action = "online_auth.html";
        }
        ff.action = action;*/
		if (sNumber.length == 14)
		{
			ff.action = "validate_confirm_finca.html";        
		}
		else
		{
			ff.action = "validate_confirm.html";        
		}
        ff.submit();
    }

    else
        if (nPrvId == 22008) {
            oProvider.prvId = nPrvId;
            oProvider.prvName = sPrv;
            oProvider.prvLogo = sPrvImage;
            oProvider.account = sNumber;
            oProvider.minCashSum = minCashSum;
            oProvider.minSum = sMinSum;
            oProvider.maxSum = sMaxSum;
            oProvider.alert = sPrvAlert;
            oProvider.sPrvRecMsg = sPrvRecMsg;
            oProvider.prvGroup = storage.get("prv_group");
            oProvider.isCellular = (sPrintMethod == 'cellular' ? 'true' : 'false');
            storage.put("pay_info", oProvider.serialize());
            storage.put("Phone_Number", $("number").value);
            storage.put("locale", sLocale, true);
            ff.prv_id.value = nPrvId;
            ff.prv_name.value = sPrv;
            //ff.getAccountNumber.value = sNumber;
            ff.Language.value = convertToMaratlLanguage(sLocale);

            /*var needOnlineCheck = storage.get("prv_online_check");
            var action = "validate.html";
            if (needOnlineCheck == "true") {
                ff._extra_auth_page.value = 'online_auth.html';
                ff._extra_auth_success.value = 'validate.html';
                ff._extra_auth_fail.value = 'online_auth_error.html';
                action = "online_auth.html";
            }
            ff.action = action;*/
            if (sNumber.length == 16) {
                ff.action = "validate_confirm_finca.html";
            }
            else {
                ff.action = "validate_confirm.html";
            }
            ff.submit();
        }

	else
    {        
        oProvider.prvId = nPrvId;
        oProvider.prvName = sPrv;
        oProvider.prvLogo = sPrvImage;
        oProvider.account = sNumber;
        oProvider.minCashSum = minCashSum;        
        oProvider.minSum = sMinSum;
        oProvider.maxSum = sMaxSum;        
        oProvider.alert = sPrvAlert;
        oProvider.sPrvRecMsg = sPrvRecMsg;        
        oProvider.prvGroup = storage.get("prv_group");
        oProvider.isCellular = (sPrintMethod == 'cellular' ? 'true' : 'false');
        storage.put("pay_info", oProvider.serialize());
        storage.put("Phone_Number", $("number").value);
        storage.put("locale", sLocale, true);
        ff.prv_id.value = nPrvId;
        ff.prv_name.value = sPrv;
        //ff.getAccountNumber.value = sNumber;
        ff.Language.value = convertToMaratlLanguage(sLocale);

        /*var needOnlineCheck = storage.get("prv_online_check");
        var action = "validate.html";
        if (needOnlineCheck == "true") {
            ff._extra_auth_page.value = 'online_auth.html';
            ff._extra_auth_success.value = 'validate.html';
            ff._extra_auth_fail.value = 'online_auth_error.html';
            action = "online_auth.html";
        }
        ff.action = action;*/

        ff.action = "validate_confirm.html";        
        ff.submit();
    }
};

function keyboard()
{
    var imgs = $('keyboard').getElementsByTagName('img');
    for(var i = 0, l = imgs.length; i < l; i++)
    {
        var isLast = (i + 1 == l);
        new CInnerShadow(imgs[i], isLast ? {
            height: 95
        } : null);
    }
};

function vAlignP()
{
    var top = (providerButton.text.parentNode.clientHeight - providerButton.text.clientHeight) / 2;
    if (nSelectedProvider.providerName.length > 14)
        top -= 25;
    providerButton.text.style.marginTop = top + 'px';
};

function insertString(sDest, sSrc, iIndex) {    
    if (iIndex > sDest.length) return;
    return sDest.substr(0, iIndex) + sSrc + sDest.substr(iIndex);
}

function replaceString(sDest, sSrc, iIndex) {
    if (iIndex > sDest.length) return;        
    return sDest.substr(0, iIndex) + sSrc + sDest.substr(iIndex + sDest.length);
}

function accConvert(prvId, account) {
    switch (prvId) {
        //cellular
        case "5131": // megacom
            return insertString(account, "99655", 0);
            break;
			
        case "5132": // O!
            return insertString(account, "99670", 0);
            break;

        case "5134": // Fonex
            return insertString(account, "99654", 0);
            break;

        case "5135"/* "14166"*/: // Beeline
            return insertString(account, "99677", 0);
            break;
		
        case "5177": // SapatMobile
            return insertString(account, "99656", 0);
            break;

        case "5133": case "5136":
            return insertString(account.substr(1), "996", 0);
            break;

        /*//Тазалык
        case "5157":
            if (account.length == 9 && account.charAt(7) == "-") return account;
            return insertString(account, "-", 7);
            break;*/

        //TezTelecom
        case "5137":
            return insertString(account, "0", 0);
            break;

         //Saimatelecom
        /*case "5139":
            return insertString(account, "1", 0);
            break;

        case "5141":
            return insertString(account, "1", 0);
            break;*/

        //Sapatcom
        case "5176":
            return insertString(account, "996312", 0);
            break;

            //sava
        case "5154":
            return insertString(account, "0", 0);
            break;

        // Ак-Бата
        case "5184":
            return insertString(account, "996", 0);
            break;

          //ala tv
        case "5183":
            return insertString(account, "/0", account.length);
            break;

        // Бишкекгаз
        case "5158": case "5193":
            return insertString(account, "0", 0);
            break;

        //Бишкектеплоэнерго, Бишкектеплосеть, БишкекВодоканал
        case "5162": case "5163": case "5185":
            return insertString(account, "-", 7);
            break;

         //Кемин
        case "5164": case "5194":
            return insertString(account, "41", 0);
            break;

        // Московский
        case "5165": case "5195":
            return insertString(account, "46", 0);
            break;
        // Кантский
            case "5166": case "5196":
            return insertString(account, "45", 0);
            break;
        // Панфиловский
            case "5167": case "5197":
            return insertString(account, "47", 0);
            break;
        // Токмокский
            case "5168": case "5198":
            return insertString(account, "43", 0);
            break;
        // Жаильский
            case "5169": case "5199":
            return insertString(account, "48", 0);
            break;
        // Аламединский
            case "5170": case "5201":
            return insertString(account, "3", 0);
            break;
        // Ысык-Атинский энергосбыт
            case "5171": case "5202":
            return insertString(account, "44", 0);
            break;        
        // Чуйский
            case "5173": case "5204":
            return insertString(account, "42", 0);
            break;

            // Join.KG
            case "6408":
            return insertString(account, "0", 0);
            break;

            // От сердца к сердцу
            case "7321":
            return insertString(account, "0", 0);
            break;
			
			// Ресурсный центр для пожилых
            case "8786":
            return insertString(account, "0", 0);
            break;

            // Помощь детям
            case "7323":
            return insertString(account, "0", 0);
            break;
			
			// WebMoney
            case "8728":
            return insertString(account, "Z", 0);
            break;
			
			// Демократическая партия
            case "9868":
            return insertString(account, "-", 0);
            break;
			
			// Ай-спейс
            case "10288":
            return insertString(account, "0", 0);
            break;
			
			// Sapatcom Internet
            case "10688":
            return insertString(account, "996", 0);
            break;
			
			//GeoPay
			case "10852":
			return insertString(account, "996", 0);
			break;
			
			//VKontakte
			case "6466":
			return insertString(account, "ID", 0);
			break;
			
			//WebMoney
			case "11318":
			return insertString(account, "Z", 0);
			break;
						
			//Мегафон КФЦ Россия
			case "10578":
			return insertString(account, "9", 0);
			break;
			

        default:return account;
    }
}

log.add('Cellular finish');













