var debugCalls = 0;
var warnings = false;
var BWR_UNKNOWN = 0;
var BWR_IE = 1;
var BWR_FF = 2;
var $browser = detectBrowser();

//function startAdvert(){};

window.loaded = false;
var log = {
	pull: [],
	obj: document.createElement('div'),
	add: function(mess){
		var d = +(new Date()),
		    ld = log.pull.length ? log.pull[log.pull.length - 1] : d;
		
		log.pull.push(d);
		log.obj.innerHTML += (d - ld) + ' ' + mess + '<br />';
	},
	create: function(){
		window.loaded = true;
		log.obj.className = 'logger';
		document.getElementsByTagName('body')[0].appendChild(log.obj);
		log.add('window load');
		if(!$isNoU(window['waitShadows']))
		{
			while(waitShadows.length)
			{
				var prop = waitShadows.shift();
				new CInnerShadow(prop[0], prop[1]);
			}
			log.add('Shadows');
		}
		log.obj.innerHTML += '<b>' + (+(new Date()) - log.pull[0]) + ' Full time</b><br />';
	}
};

window.loaded = true;
window.lastAction = new Date();

function onLoadEvents()
{
	var body = document.getElementsByTagName('body');
	if(body.length)
	{
		attachEventListener(body[0], 'mousedown', function(){
			window.lastAction = new Date();
		});
		disableSelection(body[0]);
	}
	else
	{
		setTimeout(onLoadEvents, 12);
	}
	
};
onLoadEvents();

function checkUsage()
{
	setInterval(function(){
		var now = +(new Date());
		var diff = Math.round((now - window.lastAction) / 1000);
		if(diff > 180) top.location.href = './index.html';
	}, 5000);
};

/*
if($browser.agent != BWR_IE)
{
	window.addEventListener('load', log.create, false);
	attachEventListener(document, 'DOMContentLoaded', function(){
		log.add('DOMContentLoaded');
	}, false);
	log.add('Utils start');
}
else
{
	window.loaded = true;
}
*/
//Расширение базовых типов/////////////////////////////////////////////////////////////////////////////////////////////

// Расширение типа 'Object'
Object.prototype._typeName = "Object";
Object.prototype.getType = function() {
    return this._typeName;
}
Object.prototype.is = function(type) {
    if (typeof (type) == "undefined" || type == null) {
        return false;
    }
    if (!(type instanceof Function)) {
        return false;
    }
    return (this instanceof type);
}
Object.prototype.clone = function() {
    var oResult = {};
    fcopy(this, oResult);
    return oResult;
}
Object.isNullOrUndefined = function(value) {
    return (value == undefined || value == null);
}
Object.prototype.serialize = function() {
    var sResult = "{";

    for (var field in this) {
        if (this.hasOwnProperty(field) && this[field] && 
            this != this[field] && !this[field].is(Function)) {
            sResult += "\"" + field + "\" : " + this[field].serialize() + ",";
        }
    }
    if (sResult.length > 1) {
        sResult = sResult.substr(0, sResult.length - 1);
    }

    sResult += "}";
    return sResult;
}
Object.deserialize = function(sSerializedObj) {
    if ($isNoU(sSerializedObj) ||
        !(sSerializedObj.is(String) &&
        sSerializedObj.length)) {
        return null;
    }
    var o = null;
    try {
        eval("o = (" + sSerializedObj + ")");
    }
    catch (e) {
        return null;
    }
    return o;
}
Object.prototype.foreach = function(func, onlyNames) {
    if (!$isNoU(func) && func.is(Function)) {
        for (var f in this) {
            if (this.hasOwnProperty(f)) {
                if ($bool(onlyNames)) {
                    func.apply(f, arguments);
                }
                else {
                    func.apply(this[f], arguments);
                }
            }
        }
    }
}

// Расширение типа 'Number'
Number.prototype._typeName = "Number";
Number.prototype.serialize = function() {
    return this.toString();
}

// Расширение типа 'Array'
Array.prototype._typeName = "Array";
Array.prototype.serialize = function() {
    var sResult = "[";
    for (var i = 0; i < this.length; i++) {
        if (this[i]) {
            sResult += this[i].serialize() + ",";
        }
    }
    if (sResult.length > 1) {
        sResult = sResult.substr(0, sResult.length - 1);
    }
    sResult += "]";
    return sResult;
}
Array.prototype.first = function() {
    if (this.length > 0) {
        return this[0];
    }
    return null;
}
Array.prototype.last = function() {
    if (this.length > 0) {
        return this[this.length - 1];
    }
    return null;
}
Array.prototype.foreach = function(func) {
    if (!$isNoU(func) && func.is(Function)) {
        for (var i = 0; i < this.length;  i++) {
            func.apply(this[i], arguments);
        }
    }
}

// Расширение типа 'Boolean'
Boolean.prototype._typeName = "Boolean";
Boolean.prototype.serialize = function() {
    return this.toString();
}
Boolean.parse = function(value) {
    if (Object.isNullOrUndefined(value)) {
        return false;
    }

    switch (value._typeName) {
        case "Boolean":
            return value;
            break;
        case "String":
            if (value.toLowerCase() == 'true' || value == "1") {
                return true;
            }
            break;
        case "Number":
            if (value == 0) {
                return false;
            }
            else {
                return true;
            }
            break;
    }

    return false;
}

// Расширение типа 'String'
String.prototype._typeName = "String";
String.prototype.serialize = function() {
    return "\"" + this.replace(/\\/g, "\\\\").replace(new RegExp("\"", "g"), "\\\"") + "\"";
}
String.prototype.clone = function() {
    var sRes = "";
    for (var i = 0; i < this.length; i++)
        sRes += this.charAt(i);
    return sRes;
}
String.prototype.toFormat = function(sFormat) {
    return '<span style="' + sFormat + '">' + this + '</span>';
}

// Расширение типа 'Date'
Date.prototype._typeName = "Date";
Date.prototype.serialize = function() {
    return "new Date(\"" + this.toString() + "\")";
}

// Расширение типа 'Function'
Function.prototype._typeName = "Function";
Function.validateParams = function(params, expectedParams) {
    if (Object.isNullOrUndefined(params)) {
        al("<params> - is null or undefined");
        return false;
    }
    if (Object.isNullOrUndefined(expectedParams)) {
        al("<expectedParams> - is null or undefined");
        return false;
    }
    if (params._typeName != "Object") {
        al("type <params> is not <Object>");
        return false;
    }
    if (expectedParams._typeName != "Array") {
        al("type <expectedParams> is not <Array>");
        return false;
    }
    if (params.length > expectedParams.length) {
        al("length <params> doesn't match length <expectedParams>");
        return false;
    }
    if (params.length < expectedParams.length) {
        var difference = expectedParams.length - params.length;
        for (var i = 0; i < difference; i++) {
            if (!Boolean.parse(expectedParams[params.length + i].canBeEmpty)) {
                al("length <params> doesn't match length <expectedParams>");
                return false;
            }
        }
    }
    for (var i = 0; i < params.length; i++) {
        if (Object.isNullOrUndefined(params[i])) {
            if (!Boolean.parse(expectedParams[i].canBeNull)) {
                al("<" + expectedParams[i].name + "> is null");
                return false;
            }
        }
        else if (!params[i].is(expectedParams[i].type)) {
        al("type <" + expectedParams[i].name + "> mismatch");
            return false;
        }
    }

    return true;
}
Function.createCallback = function(fMethod, oContext) {
    if (!$isNoU(fMethod) && fMethod.is(Function)) {
        return function() {
            var nArgsLength = arguments.length;
            if (nArgsLength > 0) {
                var aArgs = [];
                for (var i = 0; i < nArgsLength; i++) {
                    aArgs[i] = arguments[i];
                }
                aArgs[nArgsLength] = oContext;
                return fMethod.apply(this, aArgs);
            }
            return fMethod.call(this, oContext);
        }
    }
}
Function.createDelegate = function(instance, method) {
    Function.validateParams(arguments, [
        { name: "instance", type: Object, canBeNull: true },
        { name: "method", type: Function }
    ]);
    return function() {
        try
        {
		return method.apply(instance, arguments);
        }
        catch (e) {




            var sMethod = method.toString();
            al("Exception in " +
                sMethod.substring(sMethod.indexOf(" ") + 1, sMethod.indexOf("(")).replace("$", ".") +
                ((!$isNoU(e.description)) ? "\nDescription: " + e.description : ""));
        }
    }
}

Math.fact = function Math$fact(x) {
    var nRes = 0;
    if (x.is(Number)) {
        nRes = 1;
        for (var i = 1; i <= x; i++) {
            nRes *= i;
        }
    }
    return nRes;
}

Math.C = function Math$C(n, m) {
    var nRes = 0;
    if (n.is(Number) && m.is(Number)) {
        if (m > n) {
            n = n + m;
            m = n - m;
            n = n - m;
        }
        return (Math.fact(n) / (Math.fact(m) * Math.fact(n - m)));
    }
}

///////////////////////////////////////////////////////////////////////////////////////

function detectBrowser() {
    var oResult = {};
    oResult.agent = BWR_UNKNOWN;
    oResult.version = parseFloat(navigator.appVersion);
    oResult.documentMode = 0;
    oResult.name = navigator.appName;

    if(!$isNoU(window.ActiveXObject) || /\w*MSIE\w*/.test(navigator.userAgent)) {
        oResult.agent = BWR_IE;
        oResult.name = "MSIE";
        oResult.version = parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]);
        if (oResult.version >= 8) {
            if (document.documentMode >= 7) {
                oResult.documentMode = document.documentMode;
            }
        }
    }
    else if(/\w*Firefox\w*/.test(navigator.userAgent))
    {
        oResult.agent = BWR_FF;
    }
    return oResult;
}

function detectScreen() {
    var nClientWidth = (window.innerWidth ? window.innerWidth :
                       (document.body.clientWidth ? document.body.clientWidth :
                       (document.documentElement.clientWidth ? document.documentElement.clientWidth :
                       document.body.offsetWidth)));
    var nClientHeight = (window.innerHeight ? window.innerHeight :
                        (document.body.clientHeight ? document.body.clientHeight :
                        (document.documentElement.clientHeight ? document.documentElement.clientHeight :
                        document.body.offsetHeight)));
    var nWidth = 1280;
    var nHeight = 1024;
    var nLeft = Math.round((nClientWidth - nWidth) / 2);
    var nTop = Math.round((nClientHeight - nHeight) / 2);
    if (nLeft < 0) nLeft = 0;
    if (nTop < 0) nTop = 0;
    var oRes = {
        left: nLeft,
        top: nTop,
        width: nWidth,
        height: nHeight
    };
    return oRes;
}

function fcopy(oSrc, oDst) {
    for (var f in oSrc) if (oSrc.hasOwnProperty(f)) {
        oDst[f] = oSrc[f];
    }
}

function createClass(fParent, oProp) {
    if (!Function.validateParams(arguments, [
	                { name: "fParent", type: Function, canBeNull: true },
	                { name: "oProp", type: Object }
            ])) {
        throw new Error();
    }
    var fResult = function() {
        this.ctor && this.ctor.apply(this, arguments);
    }
    fResult.prototype = {};
    if (fParent != null) {
        var fTemp = new Function();
        fTemp.prototype = fParent.prototype;
        fResult.prototype = new fTemp();
        fResult.base = fParent.prototype;
    }
    fResult.prototype.constructor = fResult;
    fcopy(oProp, fResult.prototype);

    return fResult;
}

function dispose(obj) {
    if (Function.validateParams(arguments, [
	                { name: "obj", type: Object }
            ])) {
        if (obj.destructor && obj.destructor.getType() == "Function") {
            obj.destructor();
            obj = null;
            return true;
        }
        obj = null;
    }
    return false;
}

function newObject(fClass, fCreateCallback, fDestroyCallback) {
    var oResult = null;
    var args = [];
    if (arguments.length > 3) {
        for (var i = 3; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
    }
    oResult = fClass.prototype;
    fClass.apply(oResult, args);
    if (fCreateCallback) {
        oResult.attachListener("onCreate", fCreateCallback);
    }
    if (fDestroyCallback) {
        oResult.attachListener("onDestroy", fDestroyCallback);
    }
    oResult.create();
    return oResult;
}

///////////////////////////////////////////////////////////////////////////////////////

function attachEventListener(sElementId, sEventType, fCallBack) {
    var oElement = typeof sElementId == 'string' ? $(sElementId) : sElementId;
    if (!$isNoU(oElement)) {
        if ($browser.agent == BWR_IE)
        {
            oElement.attachEvent("on" + sEventType, fCallBack);
        }
        else
        {
            oElement.addEventListener(sEventType, fCallBack, false);
        }
    }
}

function detachEventListener(sElementId, sEventType, fCallBack) {
    var oElement = $(sElementId);
    if (!$isNoU(oElement)) {
        if ($browser.agent == BWR_IE) {
            oElement.detachEvent("on" + sEventType, fCallBack);
        }
        else
        {
            oElement.removeEventListener(sEventType, fCallBack, false);
        }
    }
}

var webkitListenElements = {};
function webkitListener(){
	for(var id in webkitListenElements)
	{
		if(webkitListenElements[id] && webkitListenElements[id]._typeName == 'Array')
		{
			var el = webkitListenElements[id][0],
			    run = false;
			if(!el.hasAttribute('olderValue'))
			{
				el.setAttribute('olderValue', el.value);
				if(el.value && el.value != '') run = true;
			}
			else if(el.getAttribute('olderValue') !== el.value)
			{
				el.setAttribute('olderValue', el.value);
				run = true;
			}
			if(run)
			{
				for(var i = 1, l = webkitListenElements[id].length; i < l; i++)
				{
					if(webkitListenElements[id][i]) webkitListenElements[id][i]();
				}
			}
		}
	}
	setTimeout(webkitListener, 100);
};
if($browser.agent == BWR_UNKNOWN) webkitListener();


function attachPropertyChangeListener(sElementId, fCallBack) {
    if ($browser.agent == BWR_IE) {
        attachEventListener(sElementId, "propertychange", fCallBack);
    }
    else if($browser.agent == BWR_FF)
    {
        attachEventListener(sElementId, "DOMAttrModified", fCallBack);
        attachEventListener(sElementId, "input", fCallBack);
    }
    else
    {
    	if(!webkitListenElements[sElementId]) webkitListenElements[sElementId] = [$(sElementId)];
    	webkitListenElements[sElementId].push(fCallBack);
    }
};

function detachPropertyChangeListener(sElementId, fCallBack) {
    if ($browser.agent == BWR_IE) {
        detachEventListener(sElementId, "propertychange", fCallBack);
    }
    else if($browser.agent == BWR_FF)
    {
        detachEventListener(sElementId, "DOMAttrModified", fCallBack);
        detachEventListener(sElementId, "input", fCallBack);
    }
    else
    {
	if(!webkitListenElements[sElementId])
	{
		for(var i = 1, l = webkitListenElements[sElementId].length; i < l; i++)
		{
			if(webkitListenElements[sElementId][i] == fCallBack) webkitListenElements[sElementId][i] = null;
		}
	}
    }
};

function fireEvent(element,event){
    if (document.createEventObject){
        // dispatch for IE
        var evt = document.createEventObject();
        return element.fireEvent('on'+event,evt)
    }
    else
    {
        // dispatch for firefox + others
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true ); // event type,bubbling,cancelable
        return !element.dispatchEvent(evt);
    }
}

function getFileName(sPath) {
    var sRes = "";
    if ($is(sPath, String)) {
        var aPath = sPath.split("/");
        if (aPath.length) {
            sRes = aPath.last();
        }
    }
    return sRes;
}

function getElementRect(sElementId) {
    var oResult = null;
    var oElement = $(sElementId);
    if (!$isNoU(oElement)) {
        oResult = { left: 0, top: 0, width: 0, height: 0 };
        oResult.width = oElement.offsetWidth;
        oResult.height = oElement.offsetHeight;
        while (oElement) {
            oResult.left += oElement.offsetLeft;
            oResult.top += oElement.offsetTop;
            oElement = oElement.offsetParent;
        }
    }
    return oResult;
}

function setCssClass(sElement, sClass) {
    var oElement = $(sElement);
    if (!($isNoU(oElement) ||
          $isNoU(oElement.className) ||
          $isNoU(sClass)) &&
          sClass.length) {
        oElement.className = sClass;
    }
}

function getCssClass(sElement) {
    var oElement = $(sElement);
    var sResult = null;
    if (!(Object.isNullOrUndefined(oElement) ||
          Object.isNullOrUndefined(oElement.className))) {
        sResult = oElement.className;
    }
    return sResult;
}

function al(msg) {
    debugCalls++;
    if (!msg) msg = 'called !';
    msg = (debugCalls + ':\n' + msg);
    if (warnings) alert(msg);
}

function insertContent(placeId, content) {
    var place = $(placeId);
    if (place == null) {
        if (warnings) alert('Element [' + placeId + '] not found !');
        return;
    }
    place.innerHTML = content;
}

function setOpacity(sElementId, nOpacity) {
    if (!$isNoU($(sElementId))) {
        if ($browser.agent == BWR_IE) {
            $(sElementId).style.filter = 'alpha(opacity: ' + nOpacity.toString(10) + ')';
        }
        else
        {
            $(sElementId).style.opacity = (nOpacity / 100).toString(10);
        }
    }
}

function getOpacityText(nOpacity) {
    var sResult = '';
    if ($browser.agent == BWR_IE) {
        sResult = 'filter: alpha(opacity: ' + nOpacity.toString(10) + ');';
    }
    else
    {
        sResult = 'opacity: ' + (nOpacity / 100).toString(10) + ';';
    }
    return sResult;
}

function $(element) {
    if(typeof element === 'object')
    {
    	return element;
    }
    else
    {
	var res = document.getElementById(element);
	if (!res) al('Element "' + element + '" not found !');
	return res;
    }
}

function $delegate(instance, method) {
    return Function.createDelegate(instance, method);
}

function $callback(fMethod, oContext) {
    return Function.createCallback(fMethod, oContext);    
}


function $sizeOf(obj) {
    var counter = 0;
    if (!Object.isNullOrUndefined(obj)) {
        for (var f in obj) {
            if (obj.hasOwnProperty(f)) {
                counter++;
            }
        }
    }
    return counter;
}

function $isNoU(value) {
    return !Object.isNullOrUndefined || Object.isNullOrUndefined(value);
}

function $bool(value) {
    return Boolean.parse(value);
}

function $is(o, f) {
    return (!$isNoU(o) && !$isNoU(f) && !$isNoU(o.is) && o.is(f));
}

function $clearEvents(domObj, bClearChildren) {
    if ($isNoU(domObj))
        return;
    for (var f in domObj) {
        if (/^on\w+/.test(f)) {
            if (!$isNoU(domObj[f])) {
//                alert(domObj.id);
                domObj[f] = null;
            }
        }
    }
    if ($bool(bClearChildren)) {
        var children = domObj.childNodes;
        for (var i = 0; i < children.length; i++) {
            $clearEvents(children[i], bClearChildren);    
        }
    }
}

function $al(o) {
    var str = "Object members:\n\n";
    for (var f in o) {
        if (o.hasOwnProperty(f)) {
            str += f + ": " + o[f] + "\n";
        }
    }
    alert(str);
}

function getFlashDef(sUrl, bTransparent, sWidth, sHeight) {
    if ($isNoU(sUrl) || sUrl._typeName != "String") {
        return ""; 
    }
    if ($isNoU(bTransparent) || bTransparent._typeName != "Boolean") {
        bTransparent = false;
    }
    if ($isNoU(sWidth) || !sWidth.is(String) || !/^\d{1,3}(?:px|%)$/.test(sWidth)) {
        sWidth = "100%";
    }
    if ($isNoU(sHeight) || !sHeight.is(String) || !/^\d{1,3}(?:px|%)$/.test(sHeight)) {
        sHeight = "100%";
    }
    var sRes = "";
    sRes += "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" width=\"" + sWidth + "\" height=\"" + sHeight + "\" style=\"margin: 0; padding: 0;\">" +
            "   <param name=\"allowScriptAccess\" value=\"sameDomain\" />" +
            "   <param name=\"movie\" value=\"" + sUrl + "\" />" +
            "   <param name=\"quality\" value=\"medium\" />" +
            ((bTransparent) ? "<param name=\"wmode\" value=\"transparent\" />" : "") +
            "   <embed src=\"" + sUrl + "\" width=\"" + sWidth + "\" height=\"" + sHeight + "\"" + ((bTransparent) ? " wmode=\"transparent\"" : "") + " quality=\"medium\" style=\"margin: 0; padding: 0;\"></embed>" +
            "</object>";
    return sRes;
}

function drawNavBtn(placeId, btnType, callback) {
    var sResult = '';
    var sImgUrl = '';
    switch (btnType) {
        case 'NONE':
            insertContent(placeId, '');
            return;
            break;
        case 'LEFT_ENABLED':
            sImgUrl = './img/ui/navigation/back.gif';
            break;
        case 'LEFT_DISABLED':
            sImgUrl = './img/ui/navigation/back_inactive.gif';
            break;
        case 'RIGHT_ENABLED':
            sImgUrl = './img/ui/navigation/forward.gif';
            break;
        case 'RIGHT_DISABLED':
            sImgUrl = './img/ui/navigation/forward_inactive.gif';
            break;
        case 'MENU_ENABLED':
            sImgUrl = './img/ui/navigation/menu.gif';
            break;
        case 'MENU_DISABLED':
            sImgUrl = './img/ui/navigation/menu_inactive.gif';
            break;
    }
    sResult += '<img alt="" src="' + sImgUrl + '" />';
    insertContent(placeId, sResult);
    $(placeId).childNodes[0].onclick = callback;
}

function drawNavBtn_old(placeId, btnType, callback) {
    var buttonWidth = 250;
    var res = '<table id="' + (placeId + '_' + btnType) + '" height="70" border="0" cellspacing="0" cellpadding="0"><tr>';
    switch (btnType) {
        case 'NONE':
            insertContent(placeId, '');
            return;
            break;
        case 'LEFT_ENABLED':
            res +=
				'<td><img src="./img/ui/navigation/left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/navigation/back.gif"></td>' +
				'<td><img src="./img/ui/navigation/right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
        case 'LEFT_DISABLED':
            res +=
				'<td><img src="./img/ui/navigation/inactive_left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/navigation/inactive.gif"></td>' +
				'<td><img src="./img/ui/navigation/inactive_right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
        case 'RIGHT_ENABLED':
            res +=
				'<td><img src="./img/ui/navigation/left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/navigation/forward.gif"></td>' +
				'<td><img src="./img/ui/navigation/right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
        case 'RIGHT_DISABLED':
            res +=
				'<td><img src="./img/ui/navigation/inactive_left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/navigation/inactive.gif"></td>' +
				'<td><img src="./img/ui/navigation/inactive_right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
        case 'MENU_ENABLED':
            res +=



				'<td><img src="./img/ui/navigation/menu_left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/menu_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/navigation/menu.gif"></td>' +
				'<td><img src="./img/ui/navigation/menu_right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
        case 'MENU_DISABLED':
            res +=
				'<td><img src="./img/ui/navigation/inactive_left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/navigation/inactive.gif"></td>' +
				'<td><img src="./img/ui/navigation/inactive_right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
    }
    res +=
	'</tr></table>';
    insertContent(placeId, res);
    $(placeId + '_' + btnType).onclick = callback;
}

function getPosition(el){
	if(el)
	{
		var result = {
			left: 0,
			top: 0,
			width: el.clientWidth,
			height: el.clientHeight
		};
		do
		{
			result.left += el.offsetLeft;
			result.top += el.offsetTop;
			el = el.offsetParent;
		}
		while(el && el.nodeName != 'BODY');
	}
	else
	{
		var result = {
			left: 0,
			top: 0,
			width: 0,
			height: 0
		};
	}
	
	return result;
};

function addClass(el, cl){
	if(el) return (el.className = removeClass(el, cl) + ' ' + cl);
};
function removeClass(el, cl){
	if(el) return (el.className = el.className.split(cl).join(''));
};

function pagevis(on)
{
	window[on ? 'removeClass' : 'addClass']($('page_content'), 'none');
};

function getScript(url, fn, params, scope, errfn)
{
	var head = document.getElementsByTagName("head")[0] || document.documentElement,
	    script = document.createElement("script"),
	    params = params || [],
	    scope = scope || window;
	script.src = url;// + '?r=' + Math.random();
	
	var done = false;

	// Attach handlers for all browsers
	script.onerror = function()
	{
		if(errfn) errfn.apply(scope, params);
		if(script) script.removeSelf();
	};
	script.removeSelf = function(){
		// Handle memory leak in IE
		if(script.timer) clearTimeout(script.timer);
		script.onload = script.onreadystatechange = null;
		if(head && script.parentNode)
		{
			head.removeChild( script );
		}
		
		head = null;
		script.onload = null;
		script.onerror = null;
		script.timer = null;
		script = null;
	};
	script.onload = script.onreadystatechange = function()
	{
		if( !done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete"))
		{
			done = true;
			if(fn) fn.apply(scope, params);
		}
		if(script.timer) clearTimeout(script.timer);
		script.timer = setTimeout(script.onerror, 100);
		
		if(done && script) script.removeSelf();
	};

	// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
	// This arises when a base node is used (#2709 and #4378).
	head.insertBefore( script, head.firstChild );
};
function getHash()
{
	return document.location.hash.match(/(\-[0-9]+)(\:([0-9]+))?$/);
};

function addInputToForm(formId, inputId, inputValue, bIsHidden)
{
	var form = $(formId);
	
	if ($isNoU(form))
		return;
	
	var input = document.createElement("input");
	
	if ($isNoU(input))
		return;
	
	input.id = input.name = inputId;
	input.type = $bool(bIsHidden) ? "hidden" : "text";
	input.value = $is(inputValue, String) ? inputValue : "";
	
	form.appendChild(input);
};

function disableSelection(target)
{
	if (typeof target.onselectstart!="undefined") //IE route
		target.onselectstart=function(){return false}
	else if (typeof target.style.MozUserSelect!="undefined") //Firefox route
		target.style.MozUserSelect="none"
	else //All other route (ie: Opera)
		target.onmousedown=function(){return false}
	target.style.cursor = "pointer";
}


log.add('Utils finish');


