function showFlash(o){
	var bg,q,s,v;
	if(o.bgcolor){bg=o.bgcolor;}else{bg="#FFFFFF";}
	if(o.quality){q=o.quality;}else{q="high";}
	if(o.scale){s=o.scale;}else{s="noscale";}
	if(o.ver){v=o.ver;}else{v=6;}
	var str='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+v+',0,0,0" ';
	str+='id="'+o.id+'" ';
	if(o.base){str+='base="'+o.base+'" ';}
	if(o.align){str+='align="'+o.align+'" ';}
	str+='width="'+o.width+'" height="'+o.height+'"><param name="movie" value="'+o.name+'"/><param name="bgcolor" value="'+bg+'"/><param name="quality" value="'+q+'"/>';
	if(o.flashvars){str+='<param name="flashvars" value="'+o.flashvars+'"/>';}
	if(o.allowScriptAccess){str+='<param name="allowScriptAccess" value="'+o.allowScriptAccess+'"/>';}
	if(o.salign){str+='<param name="salign" value="'+o.salign+'"/>';}
	if(o.wmode){str+='<param name="wmode" value="'+o.wmode+'"/>';}
	str+='<param name="scale" value="'+s+'"/><embed type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" id="'+o.id+'-embed" src="'+o.name+'" bgcolor="'+bg+'" ';
	if(o.flashvars){str+='flashvars="'+o.flashvars+'" ';}
	if(o.swLiveConnect){str+='swLiveConnect="'+o.swLiveConnect+'" ';}
	if(o.allowScriptAccess){str+='allowScriptAccess="'+o.allowScriptAccess+'" ';}
	str+='quality="'+q+'" ';
	if(o.base){str+='base="'+o.base+'" ';}
	if(o.wmode){str+='base="'+o.wmode+'" ';}
	if(o.salign){str+='salign="'+o.salign+'" ';}
	str+='scale="'+s+'" width="'+o.width+'" height="'+o.height+'"></embed></object>';
document.writeln(str);
}

//"благотворительность"
function button_charity(){
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="413" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_menu_left.gif"></td>');
	document.write('<td align="center" valign="middle" width="353" background="./img/ui/charity.gif"></td>');
	document.write('<td width="30" background="./img/ui/b_menu_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');
}

function button_charity_inactive(){
	document.write('<table cellpadding="0" cellspacing="0" border="0" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_menu_left.gif"></td>');
	document.write('<td align="center" valign="middle"><img border="0" src="./img/ui/charity.gif"></td>');
	document.write('<td width="30" background="./img/ui/b_menu_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');
}

//"назад"
function button_back(){
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	//document.write('<td width="30" background="./img/ui/b_left.gif"></td>');
	//document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><div id="b_la" style="position:relative"/></td>');
	//document.write('<td width="30" background="./img/ui/b_right.gif"></td>');
	document.write('<td><div style="width:100%; height:121px; background-image:url(./img/ui/navigation/back_empty_page.gif); background-repeat: no-repeat;"><div id="button_back_page"></div></div></td>');
	document.write('</tr>');
	document.write('</table>');
}

//"Next Page"
function button_forward() {
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	//document.write('<td width="30" background="./img/ui/b_left.gif"></td>');
	//document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><div id="b_ra" style="position:relative"/></td>');
	//document.write('<td width="30" background="./img/ui/b_right.gif"></td>');        
	document.write('<td><div style="width:100%; height:121px; background-image:url(./img/ui/navigation/next_empty_page.gif); background-repeat: no-repeat;"><div id="button_next_page"></div></div></td>');
	
	document.write('</tr>');
	document.write('</table>');

}

function button_pay() {
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_left.gif"></td>');
	document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_pay.gif"></td>');
	document.write('<td width="30" background="./img/ui/b_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');
}

//"вперёд"
function button_forward_inactive() {
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	//document.write('<td width="30" background="./img/ui/b_inactive_left.gif"></td>');
	//document.write('<td background="./img/ui/b_inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_inactive_ra.gif"></td>');
	//document.write('<td width="30" background="./img/ui/b_inactive_right.gif"></td>');

        
	//document.write('<td style="display:none; background-image:url(./img/ui/navigation/forward_inactive.gif); background-repeat: no-repeat;" align="center" valign="middle"></td>');
	
	document.write('</tr>');
	document.write('</table>');

}

function button_back_inactive() {
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_inactive_left.gif"></td>');
	document.write('<td background="./img/ui/b_inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_inactive_la.gif"></td>');
	document.write('<td width="30" background="./img/ui/b_inactive_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');
}


//"в меню"
function button_menu() {
    
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	//document.write('<td width="30" background="./img/ui/b_menu_left.gif"></td>');
	//document.write('<td background="./img/ui/b_menu_bg.gif" align="center" valign="middle"><div id="b_menu_center" style="position:relative"/></td>');
	//document.write('<td width="30" background="./img/ui/b_menu_right.gif"></td>');
	
	document.write('<td><div style="height:121px; width:100%; background-repeat: no-repeat; background-image:url(img/ui/navigation/menu_empty.gif);"><div id="button_menu"></div></div></td>');
	
	document.write('</tr>');
	document.write('</table>');
}


//"поиск"
function button_search() {
    
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	//document.write('<td width="30" background="./img/ui/b_menu_left.gif"></td>');
	//document.write('<td background="./img/ui/b_menu_bg.gif" align="center" valign="middle"><div id="b_menu_center" style="position:relative"/></td>');
	//document.write('<td width="30" background="./img/ui/b_menu_right.gif"></td>');
	
	//document.write('<td style="background-image:url(./img/ui/navigation/search_anim.gif); background-repeat: no-repeat;"></td>');
        document.write('<td><div style="width:100%; height:121px; background-image:url(./img/ui/navigation/search_empty.gif); background-repeat: no-repeat;"><div id="button_search"></div></div></td>');
	
	document.write('</tr>');
	document.write('</table>');
}

//"в меню"
function button_menu_inactive() {
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_inactive_left.gif"></td>');
	document.write('<td background="./img/ui/b_inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_menu_inactive_center.gif"></td>');
	document.write('<td width="30" background="./img/ui/b_inactive_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');
}


//"завершить"
function button_fin() {
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="51">');
	document.write('<tr>');
	document.write('<td width="18" background="./img/ui/b_menu_left.gif"></td>');
	document.write('<td background="./img/ui/b_menu_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_fin.gif"></td>');
	document.write('<td width="18" background="./img/ui/b_menu_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');
}


function get_advert() {
	document.write('<div id="advert" style="display: ;">');
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="100%">');
	document.write('<tr>');
	document.write('<td width="70%" id="advert_image" name="advert_image" background="./img/ui/advert_bg.gif">');
	document.write('</tr>');
	document.write('<tr><td bgcolor="#cfcfcf" height="1"></td></tr>');
	document.write('<tr><td bgcolor="#ffffff" height="1"></td></tr>');
	document.write('</table>');
	document.write('</div>');
}

function ui_item_left() {
	var left = '<table cellpadding="0" cellspacing="0" border="0" width="100%" height="140"><tr><td width="25" background="./img/ui/ui_item_left.gif"></td><td background="./img/ui/ui_item_bg.gif" align="center" valign="middle">';
	document.write(left);
}

function ui_item_right() {
	var right = '</td><td width="25" background="./img/ui/ui_item_right.gif"></td></tr>' + '</table>';
	document.write(right);
}

function bottom_menu() {        
	document.write('<tr style="direction:ltr"><td align="center" height="70">');
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%">');
	document.write('<tr>');
	document.write('<td width="20%">');	
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%">');
	document.write('<tr bgcolor="#f5f5f5">');
	document.write('<td width="25%" bgcolor="#f5f5f5">');
	document.write('<div id="backward_yes" name="forward_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=backward()><script>button_back();</script></td></tr></table></div>');
	document.write('<div id="backward_no" name="forward_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_back_inactive();</script></td></tr></table></div>');
	document.write('</td>');
	document.write('<td>&nbsp;</td>	');
	document.write('<td width="317" bgcolor="#f5f5f5">');
	document.write('<div id="menu_yes" name="menu_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=menu();><script>button_menu();</script></td></tr></table></div>');
	document.write('<div id="menu_no" name="menu_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_menu_inactive();</script></td></tr></table></div>');
	document.write('</td>');
	document.write('<td>&nbsp;</td>	');
	document.write('<td width="25%" bgcolor="#f5f5f5">');
	document.write('<div id="forward_yes" name="forward_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=forward();><script>button_forward();</script></td></tr></table></div>');
	document.write('<div id="forward_no" name="forward_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_forward_inactive();</script></td></tr></table></div>');
	document.write('<div id="pay" name="pay" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=forward();><script>button_pay();</script></td></tr></table></div>');
	document.write('<div id="fin" name="fin" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=forward();><script>button_fin();</script></td></tr></table></div>');
	document.write('<div id="search" name="search" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=search_provider();><script>button_search();</script></td></tr></table></div>');
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
	document.write('</td></tr>');
}

function bottom_menu_inactive() {        
	document.write('<tr style="direction:ltr"><td align="center" height="70">');
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="200px">');
	document.write('<tr>');
	document.write('<td width="20%">');	
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%">');
	document.write('<tr bgcolor="#f5f5f5">');
	document.write('<td width="25%" bgcolor="#f5f5f5">');
	document.write('<div id="backward_yes" name="forward_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=backward()><script>button_back();</script></td></tr></table></div>');
	document.write('<div id="backward_no" name="forward_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_back_inactive();</script></td></tr></table></div>');
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
	document.write('</td></tr>');
}

function bottom_menu_charity() {
	document.write('<tr><td align="center" height="70">');
	document.write('<table cellpadding="10" cellspacing="0" border="0" width="100%">');
	document.write('<tr>');
	document.write('<td width="20%">');	
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%">');
	document.write('<tr>');
	document.write('<td width="30%" bgcolor="#dedede">');
	document.write('<div id="charity_yes" name="charity_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=charity();><script>button_charity();</script></td></tr></table></div>');
	document.write('<div id="charity_no" name="charity_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_charity_inactive();</script></td></tr></table></div>');
	document.write('</td>');
	document.write('<td>&nbsp;</td>	');
	document.write('<td width="25%" bgcolor="#dedede">');
	document.write('<div id="forward_yes" name="forward_yes" style="display:none"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=forward();><script>button_forward();</script></td></tr></table></div>');
	document.write('<div id="forward_no" name="forward_no" style="display:"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_forward_inactive();</script></td></tr></table></div>');
	document.write('<div id="pay" name="pay" style="display:none"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=forward();><script>button_pay();</script></td></tr></table></div>');
	document.write('<div id="fin" name="fin" style="display:none"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=forward();><script>button_fin();</script></td></tr></table></div>');
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
	document.write('</td></tr>');
}







//устройства ввода

//цифровая клавиатура, обычная

function get_keypad() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#dedede">');

	document.write('<tr>');

	document.write('<td style=\'padding: 0 1 1 0;\'><img src="./img/ui/kpad/button_keypad_1_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_1_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_1_off.gif\'" onclick="press(\'1\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 0;\'><img src="./img/ui/kpad/button_keypad_2_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_2_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_2_off.gif\'" onclick="press(\'2\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 1;\'><img src="./img/ui/kpad/button_keypad_3_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_3_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_3_off.gif\'" onclick="press(\'3\');" border="0"></td>');

	document.write('</tr>');

	document.write('<tr>');

	document.write('<td style=\'padding: 0 1 1 0;\'><img src="./img/ui/kpad/button_keypad_4_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_4_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_4_off.gif\'" onclick="press(\'4\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 0;\'><img src="./img/ui/kpad/button_keypad_5_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_5_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_5_off.gif\'" onclick="press(\'5\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 1;\'><img src="./img/ui/kpad/button_keypad_6_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_6_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_6_off.gif\'" onclick="press(\'6\');" border="0"></td>');

	document.write('</tr>');

	document.write('<tr>');

	document.write('<td style=\'padding: 0 1 1 0;\'><img src="./img/ui/kpad/button_keypad_7_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_7_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_7_off.gif\'" onclick="press(\'7\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 0;\'><img src="./img/ui/kpad/button_keypad_8_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_8_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_8_off.gif\'" onclick="press(\'8\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 1;\'><img src="./img/ui/kpad/button_keypad_9_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_9_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_9_off.gif\'" onclick="press(\'9\');" border="0"></td>');

	document.write('</tr>');

	document.write('<tr>');

	document.write('<td style=\'padding: 0 1 1 0;\'><img src="./img/ui/kpad/button_keypad_c_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_c_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_c_off.gif\'" onclick="press(\'c\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 0;\'><img src="./img/ui/kpad/button_keypad_0_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_0_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_0_off.gif\'" onclick="press(\'0\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 1;\'><img src="./img/ui/kpad/button_keypad_bs_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_bs_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_bs_off.gif\'" onclick="press(\'bs\');" border="0"></td>');

	document.write('</tr>');

	document.write('</table>');

}


//буквенная клавиатура, обычная

function get_keyboard() {
	document.write('<table cellpadding="0" cellspacing="0" border="0">');
	document.write('<tr>');
	document.write('<td align="left" style="padding: 0 0 0 0;">');
		document.write('<table width="990" height="49" border="0" background="./img/ui/kboard/up_bg.gif">');
		document.write('<tr>');
		document.write('<td width="220"><img name="raskl" src="./img/ui/kboard/latin-raskl.gif" border="0"></td>');
		document.write('<td  width="10">|</td>');
		document.write('<td>&nbsp;</td>');
		document.write('</tr>');
		document.write('</table>');
	document.write('</td></tr><tr><td>');
		document.write('<table cellpadding="1" cellspacing="0" width="916">');
		document.write('<tr>');
		document.write('<td><img src="./img/ui/kboard/b_00.gif"  onClick="press(\'`~ёЁ\');" width="64" height="64" border="0"><img src="./img/ui/null.gif" alt="" width="2" height="1" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b_1.gif"  onClick="press(\'1!1!\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b_2.gif"  onClick="press(\'2@2@\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b_3.gif"  onClick="press(\'3#3№\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b_4.gif"  onClick="press(\'4$4;\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b_5.gif"  onClick="press(\'5%5%\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b_6.gif"  onClick="press(\'6^6:\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b_7.gif"  onClick="press(\'7&7?\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b_8.gif"  onClick="press(\'8*8*\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b_9.gif"  onClick="press(\'9(9(\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b_0.gif"  onClick="press(\'0)0)\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b__.gif"  onClick="press(\'-_-_\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b__2.gif"  onClick="press(\'=+=+\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b__3.gif"  onClick="press(\'|/\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b__4.gif"  onClick="press(\'b4\');" width="64" height="64" border="0"></td>');
		document.write('</tr>');
		document.write('</table>');
	document.write('</td></tr><tr><td>');
		document.write('<table cellpadding="1" cellspacing="0" width="919">');
		document.write('<tr>');
		document.write('<td><img src="./img/ui/kboard/b2_empty.gif" border="0" onClick="tabs(\'1111\');"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_q.gif" onClick="press(\'qQйЙ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_w.gif"  onClick="press(\'wWцЦ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_e.gif"  onClick="press(\'eEуУ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_r.gif"  onClick="press(\'rRкК\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_t.gif"  onClick="press(\'tTеЕ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_y.gif"  onClick="press(\'yYнН\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_u.gif"  onClick="press(\'uUгГ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_i.gif"  onClick="press(\'iIшШ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_o.gif"  onClick="press(\'oOщЩ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_p.gif"  onClick="press(\'pPзЗ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b2_00.gif"  onClick="press(\'[{хХ\');" width="64" height="64" border="0"></td>');
		document.write('<td ><img src="./img/ui/kboard/b2_01.gif"  onClick="press(\']}ъЪ\');" width="64" height="64" border="0"></td>');
		document.write('<td align="left"><img onClick="press(\'enter\');" src="./img/ui/kboard/enter2.gif" border="0"></td>');
		document.write('</tr>');
		document.write('</table>');
	document.write('</td></tr><tr><td>');
		document.write('<table cellpadding="1" cellspacing="0"  width="920">');
		document.write('<tr>');
		document.write('<td><img src="./img/ui/kboard/b3_caps_lock.gif" name="shift" onClick="press(\'shift\');" border="0"><img src="./img/ui/null.gif" width="2" height="1" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b3_a.gif"  onClick="press(\'aAфФ\');" width="64" height="64" border="0"></td>');
	document.write('<td><img src="./img/ui/kboard/b3_s.gif"  onClick="press(\'sSыЫ\');" width="64" height="64" border="0"></td>');
	document.write('<td><img src="./img/ui/kboard/b3_d.gif"  onClick="press(\'dDвВ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b3_f.gif"  onClick="press(\'fFаА\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b3_g.gif"  onClick="press(\'gGпП\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b3_h.gif"  onClick="press(\'hHрР\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b3_j.gif"  onClick="press(\'jJоО\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b3_k.gif"  onClick="press(\'kKлЛ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b3_l.gif"  onClick="press(\'lLдД\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b3_00.gif"  onClick="press(\';:жЖ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b3_01.gif"  onClick="press(\'эЭэЭ\');" width="64" height="64" border="0"></td>');
		document.write('<td align="left"><img src="./img/ui/kboard/enter.gif"  onClick="press(\'enter\');" border="0"></td>');
		document.write('</tr>');
		document.write('</table>');
	document.write('</td></tr><tr><td>');
		document.write('<table cellpadding="1" cellspacing="0"  width="915">');
		document.write('<tr>');
		document.write('<td><img src="./img/ui/kboard/b4_shift.gif" name="shiftflagn" onClick="shiftflag(\'1\');" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b4_z.gif"  onClick="press(\'zZяЯ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b4_x.gif"  onClick="press(\'xXчЧ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b4_c.gif"  onClick="press(\'cCсС\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b4_v.gif"  onClick="press(\'vVмМ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b4_b.gif"  onClick="press(\'bBиИ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b4_n.gif"  onClick="press(\'nNтТ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b4_m.gif"  onClick="press(\'mMьЬ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b4_00.gif"  onClick="press(\',<бБ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b4_01.gif"  onClick="press(\'.>юЮ\');" width="64" height="64" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b4_02.gif"  onClick="press(\'/?.,\');" width="64" height="64" border="0"></td>');
		document.write('<td align="right"><img src="./img/ui/kboard/b4_empty.gif" border="0"></td>');
		document.write('</tr>');
		document.write('</table>');
	document.write('</td></tr><tr><td>');
		document.write('<table cellpadding="1" cellspacing="1" border="0">');
		document.write('<tr>');
		document.write('<td><img src="./img/ui/kboard/b5_engrus.gif" onClick="press(\'engrus\');" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b5_probel.gif" onClick="press(\'    \');" alt="" border="0"></td>');
		document.write('<td><img src="./img/ui/kboard/b5_ochistit.gif" onClick="press(\'ochistit\');" border="0"></td>');
		document.write('</tr>');
		document.write('</table>');
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
}
