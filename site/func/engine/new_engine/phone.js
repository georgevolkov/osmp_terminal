log.add('Cellular start');
var Phone_Number = '',
    sLogoContent = './img/ui/cellular.gif',
    flag = true,
    sNumber = '',
    nPrvId = 0,
    sPrv = "",
    oInfo = {},
    js = null,
    head = null,
    oProv = null,
    parser = new phoneParser(),
    number,
    realnumber = false,
    r1 = RegExp('^8[( ]{2}[0-9]{2}[) ]{3}$'),
    r2 = RegExp('^8[( ]{2}[0-9][) ]{5}$'),
    nTest = /^\d{10}$/,
    nClean = new RegExp('[ ()-]', 'g'),
    providerButton = {};

function start()
{
	log.add('Start start');

	new CInnerShadow($('btn_del').getElementsByTagName('img')[0], { color: 30 });
	new CInnerShadow($('btn_back').getElementsByTagName('img')[0], { color: 30 });
	keyboard();
	$("banner").innerHTML = getFlashDef("./swf/banner.swf");

	number = $("number");
	realnumber = number.value.replace(nClean, '').substr(1);

	providerButton.logo = $('logo').getElementsByTagName('div')[0].style;
	providerButton.text = $('logo').getElementsByTagName('p')[0];

	var oPrv = oProv;
	providerButton.logo.backgroundImage = 'url(' + sLogoContent + ')';
	providerButton.text.innerHTML = '';
	vAlignP();
	
	log.add('Start finish');
};

function initProvider(provider) {
	log.add('initProvider start');
	if(!provider || provider == 'null')
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
    if(digit == 'c')
    {
        flag = true;
        clearProviderButton();
        realnumber = realnumber.substr(0, realnumber.length - 1);
    }
    else if(realnumber !== false && realnumber.length < 10)
    {
    	if(!(
    		(realnumber == '7' || realnumber == '8') && digit == '9'
    	)) realnumber += digit;
    }
    if(printTimer) clearTimeout(printTimer);
    printTimer = setTimeout(print, 50);
};
function clearProviderButton()
{
	$("btn_forward").style.display = 'none';
	$("num_info").style.display = "none";
	providerButton.logo.backgroundImage = 'url(' + sLogoContent + ')';
	providerButton.text.innerHTML = '';
	vAlignP();
};
function print()
{
    if(printTimer) clearTimeout(printTimer);
    var s = parser.spliceNumber(realnumber),
        r = ['8'];
    if(s.str.prefix != '')
    {
	r.push(' (', s.str.prefix, parser.nulls(s.str.prefix, 3, '  '), ')');
	if(s.str.pre != '')
	{
		r.push(' ', s.str.pre);
		if(s.str.number1 != '')
		{
			r.push('-', s.str.number1);
			if(s.str.number2 != '')
			{
				r.push('-', s.str.number2);
			}
		}
	}
    }
    number.value = r.join('');
    
    preTest();
};
function preTest()
{
    // проверка    
    if(realnumber !== false && realnumber.length == 10)
    {
        if(flag)
        {
		flag = false;
		$("btn_forward").style.display = 'block';
		if(!$("btn_forward").shadowed)
		{
			new CInnerShadow($('btn_forward').getElementsByTagName('img')[0], { color: 30 });
		}
		$("btn_forward").shadowed = true;
		test(realnumber);
        }
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
    nPrvId = 0;
    window.sNumber = sNumber;
    if(nTest.test(sNumber))
    {
    	parser.get(sNumber, process);    
    }
    else
    {
    	process();
    }

}

function process(result)
{
    var sLogoContent2 = sLogoContent;
    var BEELINE_INTERNET_VALUE = 50;
    var nPrefix = 0;
    var oProvider = {};
    var sRegion = "";
    var sTxt = "На данный телефонный номер не возможно перечислить сдачу";
    var sNoPrv = "На данный телефонный номер не возможно перечислить сдачу";
    var sNoRegion = "Регион не определен";
    var sCellularProvider = "Сотовая связь";
    var bIsFoundProvider = false;

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

    $("num_info").style.marginTop = "55px";
    $("num_info").style.display = "block";    
    $("num_info_txt").innerHTML = sTxt;
    if (sTxt == sNoPrv)
        $("btn_forward").style.display = 'none';
};

function backward()
{   
    window.history.back(-1);
}

function getMinSumm(sPrvId) {
    switch (sPrvId.toString()) {
        case '2'    : return '2'; 	//Билайн
        case '4'    : return '30'; 	//Сонет
        case '36'   : return '10'; 	//Мотив Екатеринбург
        case '42'   : return '2'; 	//TELE2
        case '60'   : return '10'; 	//ИНТРА
        case '79'   : return '100'; //SIPNET
        case '84'   : return '5'; 	//СМАРТС Самара
        case '96'   : return '10'; 	//Интервейв
        case '279'  : return '10'; 	//Енисейтелеком
        case '303'  : return '5'; 	//НТС Саратов
        case '329'  : return '5'; 	//Интерлан
        case '352'  : return '5'; 	//Ринет
        case '358'  : return '10'; 	//КОМКОР
        case '383'  : return '50'; 	//ГудЛайн
        case '881'  : return '5'; 	//Скайлинк Кировская
        default: return '1';
    }
}

function forward()
{
	ff.PrvId2.value = nPrvId;
	ff.PrvName2.value = sPrv;
	ff.AccNum2.value = sNumber;
	ff.MinCashLimit2.value = getMinSumm(nPrvId);
	ff.action = './validate_confirm.html';
	ff.submit();
};

function keyboard()
{
	var imgs = $('keyboard').getElementsByTagName('img');
	for(var i = 0, l = imgs.length; i < l; i++)
	{
		var isLast = (i + 1 == l);
		new CInnerShadow(imgs[i], isLast ? { height: 95 } : null);
	}
};

function vAlignP()
{
	providerButton.text.style.marginTop = (providerButton.text.parentNode.clientHeight - providerButton.text.clientHeight) / 2 + 'px';
};

log.add('Cellular finish');












