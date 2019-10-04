var debugCalls = 0;
var warnings = false;

// this function is taken from http://dklab.ru/chicken/nablas/40.html
function newClass(parent, prop) {
	// Dynamically create class constructor.
	var clazz = function() {
		// Stupid JS need exactly one "operator new" calling for parent
		// constructor just after class definition.
		if (clazz.preparing) return delete(clazz.preparing);
		// Call custom constructor.
		if (clazz.constr) {
			this.constructor = clazz; // we need it!
			clazz.constr.apply(this, arguments);
		}
	}
	clazz.prototype = {}; // no prototype by default
	if (parent) {
		parent.preparing = true;
		clazz.prototype = new parent;
		clazz.prototype.constructor = parent;
		clazz.constr = parent; // BY DEFAULT - parent constructor
	}
	if (prop) {
		var cname = "constructor";
		for (var k in prop) {
			if (k != cname) clazz.prototype[k] = prop[k];
		}
		if (prop[cname] && prop[cname] != Object) clazz.constr = prop[cname];
	}
	return clazz;
}

// base component class definition
componentBase = newClass
(
	null,
	{
		constructor: function(parent, instance)
		{ 
			this.constructor.prototype.constructor.call(this);
			this.parentInstance = parent;
			this.instance = ((parent) ? parent+'.' : '' )+instance;
			this.listeners = new Array();
			this.suspendPreviousPage = false;
		},
		
		attachListener: function (eventType,eventListener) 
		{ 
			if (!this.listeners[eventType]) this.listeners[eventType] = new Array();
			this.listeners[eventType].push(eventListener);
		},
		
		dettachListener: function (eventType,eventListener) 
		{ 
			function getListenerNumber(listeners, evntListener)
			{
			    if (listeners)
			        for (var i=0; i<listeners.length; i++)
			            if (listeners[i] == evntListener)
			                return i;
			    return -1;
			}
			
			if (!this.listeners[eventType]) return;
			var listenerNum = getListenerNumber(this.listeners[eventType], eventListener);
			if (listenerNum > -1)
			    this.listeners[eventType].splice(listenerNum, 1);
		},
		
		notify: function(eventType,parameter)
		{
			if (!this.listeners[eventType]) return;
			for (var i=0; i<this.listeners[eventType].length; i++)
			{
				try
				{
					eval(this.listeners[eventType][i]+'("'+ parameter +'")');
				}
				catch(e)
				{
					al('Exception in '+this.instance+'.notify("' + eventType +'") calling listener '+this.listeners[eventType][i] + ' fails \n'+e.description);
				}
			}
		}		
	}
);

// form post helper
var formClass = function()
{
	var formValueType = function(name,value,dispValue)
	{
		this.name = name;
		this.value = value;
		this.dispValue = dispValue;
	}
	
	var formValues = new Array();
	
	this.add = function(name,postValue,dispValue)
	{
		for(var i=0; i<formValues.length; i++)
		{
			if(formValues[i].name == name)
			{
				formValues[i].value=postValue;
				formValues[i].dispValue=dispValue;
				return;
			}
		}
		formValues.push(new formValueType(name,postValue,dispValue));
	}

	this.get = function(name,getDispValue)
	{
		for(var i=0; i<formValues.length; i++)
		{
			if(formValues[i].name == name)
			{
				return (getDispValue) ? formValues[i].dispValue : formValues[i].value;
			}
		}
		return false;
	}
	
	this.post = function(action)
	{		
		if (!action) action = '#'
		var form = document.createElement('form');
		form.name = 'postValuesForm';
		form.action = action;
		form.method = 'POST';
		for(var i=0; i<formValues.length; i++)
		{
			var input = document.createElement('input');
			input.type = 'hidden';
			input.name = formValues[i].name;
			input.value = formValues[i].value;
			al(formValues[i].name + ' = ' + formValues[i].value);
			form.appendChild(input);
		}
		document.body.appendChild(form);
		form.submit();
	}
}

function $(element)
{
	var res = document.getElementById(element);
	if (!res) al('Element "'+element+'" not found !');
	return res;
}

function al(msg)
{
	debugCalls++;
	if (!msg) msg = 'called !';
	msg = (debugCalls+': '+msg);
	if (warnings) alert(msg);
}

// get string after specified char
function getStrAfterChar(v,c)
{
	var cp = v.indexOf(c);
	if (cp < 0) 
		return '';
	else 
		return v.substring(cp+1);
}

// inserts content into object
// placeId - id of object
// content - string with HTML content
function insertContent(placeId,content)
{
	var place = $(placeId);
	if(place == null) 
	{
		if (warnings) alert('Element [' + placeId + '] not found !');
		return;
	}
	place.innerHTML = content;	
}

function uiNavigationButton(placeId, btnType, callEvent)
{
	var buttonWidth = 250;
	var res = '<table height=70 border=0 cellspacing=0 cellpadding=0><tr>';
	switch (btnType)
	{
		case 'NONE':
			insertContent(placeId,'');
			return;
			break;
		case 'LEFT_ENABLED':
			res +=
				'<td><img src="./img/ui/b_left.gif" /></td>'+
				'<td width='+buttonWidth+' background="./img/ui/b_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick='+callEvent) + ' ><img border="0" src="./img/ui/b_la.gif"></td>'+
				'<td><img src="./img/ui/b_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
		case 'LEFT_DISABLED':
			res +=
				'<td><img src="./img/ui/b_inactive_left.gif" /></td>'+
				'<td width='+buttonWidth+' background="./img/ui/b_inactive_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick='+callEvent) + ' ><img border="0" src="./img/ui/b_inactive_la.gif"></td>'+
				'<td><img src="./img/ui/b_inactive_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
		case 'RIGHT_ENABLED':
			res +=
				'<td><img src="./img/ui/b_left.gif" /></td>'+
				'<td width='+buttonWidth+' background="./img/ui/b_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick='+callEvent) + ' ><img border="0" src="./img/ui/b_ra.gif"></td>'+
				'<td><img src="./img/ui/b_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
		case 'RIGHT_DISABLED':
			res +=
				'<td><img src="./img/ui/b_inactive_left.gif" /></td>'+
				'<td width='+buttonWidth+' background="./img/ui/b_inactive_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick='+callEvent) + ' ><img border="0" src="./img/ui/b_inactive_ra.gif"></td>'+
				'<td><img src="./img/ui/b_inactive_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
		case 'MENU_ENABLED':
			res +=
				'<td><img src="./img/ui/b_menu_left.gif" /></td>'+
				'<td width='+buttonWidth+' background="./img/ui/b_menu_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick='+callEvent) + ' ><img border="0" src="./img/ui/b_menu_center.gif"></td>'+
				'<td><img src="./img/ui/b_menu_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
		case 'MENU_DISABLED':
			res +=
				'<td><img src="./img/ui/b_inactive_left.gif" /></td>'+
				'<td width='+buttonWidth+' background="./img/ui/b_inactive_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick='+callEvent) + ' ><img border="0" src="./img/ui/b_menu_inactive_center.gif"></td>'+
				'<td><img src="./img/ui/b_inactive_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
	}
	res +=
	'</tr></table>';
	insertContent(placeId,res);
}