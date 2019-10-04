// simple screen keyboard
UIKeyboardClass = newClass
(
	componentBase,
	{
	    constructor: function(parent, instance, place, type, picFolder) {
	        this.type = (type || 'DG');
	        this.constructor.prototype.constructor.call(this, parent, instance);
	        this.capsLock = this.shift = false;
	        this.eng = true;
	        this.picFolder = picFolder;
	        this.buttonValues = ['@~ёЁ', '1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999', '0000', '-_-_', '=+=+', '|/|/', 'qQйЙ', 'wWцЦ', 'eEуУ', 'rRкК', 'tTеЕ', 'yYнН', 'uUгГ', 'iIшШ', 'oOщЩ', 'pPзЗ', '[{хХ', ']}ъЪ', 'aAфФ', 'sSыЫ', 'dDвВ', 'fFаА', 'gGпП', 'hHрР', 'jJоО', 'kKлЛ', 'lLдД', ';:жЖ', '**эЭ', 'zZяЯ', 'xXчЧ', 'cCсС', 'vVмМ', 'bBиИ', 'nNтТ', 'mMьЬ', ',<бБ', '.>юЮ', '/?.,'];
	        if (this.type == 'ALC') this.capsLock = true;
	        if (this.type == 'ALS') this.shift = true;
	        if (this.type == 'ALR') this.eng = false;
	        if (this.type == 'ALRC') { this.eng = false; this.capsLock = true; };
	        if (this.type == 'ALRS') { this.eng = false; this.shift = true; };

	        var ins = this.instance;
	        if (this.type.substring(0, 2) == 'DG') {
	            var res =
				'<table cellpadding=2 cellspacing=0 width=0 border=0>' +
				'<tr>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_1_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_1_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_1_off.gif" onclick=' + ins + '.dkeyPress("1")></td>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_2_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_2_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_2_off.gif" onclick=' + ins + '.dkeyPress("2")></td>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_3_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_3_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_3_off.gif" onclick=' + ins + '.dkeyPress("3")></td>' +
				'</tr><tr>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_4_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_4_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_4_off.gif" onclick=' + ins + '.dkeyPress("4")></td>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_5_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_5_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_5_off.gif" onclick=' + ins + '.dkeyPress("5")></td>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_6_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_6_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_6_off.gif" onclick=' + ins + '.dkeyPress("6")></td>' +
				'</tr><tr>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_7_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_7_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_7_off.gif" onclick=' + ins + '.dkeyPress("7")></td>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_8_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_8_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_8_off.gif" onclick=' + ins + '.dkeyPress("8")></td>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_9_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_9_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_9_off.gif" onclick=' + ins + '.dkeyPress("9")></td>' +
				'</tr><tr>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_c_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_c_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_c_off.gif" onclick=' + ins + '.dkeyPress("CLEAR")></td>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_0_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_0_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_0_off.gif" onclick=' + ins + '.dkeyPress("0")></td>' +
				'<td><img src="' + this.picFolder + '/kpad/button_keypad_bs_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_bs_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_bs_off.gif" onclick=' + ins + '.dkeyPress("BACKSPACE")></td>' +
				'</tr>' +
				(((this.type == 'DGT')) ? '<tr><td colspan=3><img src="' + this.picFolder + '/kpad/button_keypad_sw_on.gif" onclick=' + ins + '.dkeyPress("TAB")></td></tr>' : '') +
				(((this.type == 'DGD')) ? '<tr><td colspan=3><img src="' + this.picFolder + '/button_nukta_on.gif" onclick=' + ins + '.dkeyPress(".")></td></tr>' : '') +
				(((this.type == 'DGDT') || (this.type == 'DGTD')) ? '<tr><td colspan=0><img src="' + this.picFolder + '/button_keypad_nukta_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_keypad_nukta_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_keypad_nukta_off.gif" onclick=' + ins + '.dkeyPress(".")></td><td colspan=3><img src="' + this.picFolder + '/kpad/button_switch_small_off.gif" onMouseOver=this.src="' + this.picFolder + '/kpad/button_switch_small_on.gif" onMouseOut=this.src="' + this.picFolder + '/kpad/button_switch_small_off.gif" onclick=' + ins + '.dkeyPress("TAB")></td></tr>' : '') +
				'</table>';
	        }
	        else {
	            var res =
				'<table cellpadding=0 cellspacing=0 border=0 width=0>' +
				'<tr><td align=left height=50px background="' + this.picFolder + '/kboard/up_bg.gif">&nbsp<img id="engrus" src="' + ((this.eng) ? '' + this.picFolder + '/kboard/latin-raskl.gif' : '' + this.picFolder + '/kboard/russian-raskl.gif') + '" onClick=' + ins + '.akeyPress("ENGRUS")></td></tr>' +
				'<tr><td>' +
				'<table cellpadding=1 cellspacing=0 width=100%><tr>' +
				'<td id="btn_1" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'@~ёЁ\')></td>' +
				'<td id="btn_2" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'1111\')></td>' +
				'<td id="btn_3" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'2222\')></td>' +
				'<td id="btn_4" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'3333\')></td>' +
				'<td id="btn_5" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'4444\')></td>' +
				'<td id="btn_6" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'5555\')></td>' +
				'<td id="btn_7" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'6666\')></td>' +
				'<td id="btn_8" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'7777\')></td>' +
				'<td id="btn_9" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'8888\')></td>' +
				'<td id="btn_10" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'9999\')></td>' +
				'<td id="btn_11" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'0000\')></td>' +
				'<td id="btn_12" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'-_-_\')></td>' +
				'<td id="btn_13" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'=+=+\')></td>' +
				'<td id="btn_14" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'|/\')></td>' +
				'<td><img src="' + this.picFolder + '/kboard/b__4.gif" onClick=' + ins + '.akeyPress(\'BACKSPACE\')></td>' +
				'</tr></table>' +
				'</td></tr><tr><td>' +
				'<table cellpadding=1 cellspacing=0 width=100%><tr>' +
				'<td><img src="' + this.picFolder + '/kboard/b2_empty.gif" border="0" onClick=' + ins + '.akeyPress("TAB")></td>' +
				'<td id="btn_15" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'qQйЙ\')></td>' +
				'<td id="btn_16" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'wWцЦ\')></td>' +
				'<td id="btn_17" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'eEуУ\')></td>' +
				'<td id="btn_18" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'rRкК\')></td>' +
				'<td id="btn_19" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'tTеЕ\')></td>' +
				'<td id="btn_20" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'yYнН\')></td>' +
				'<td id="btn_21" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'uUгГ\')></td>' +
				'<td id="btn_22" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'iIшШ\')></td>' +
				'<td id="btn_23" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'oOщЩ\')></td>' +
				'<td id="btn_24" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'pPзЗ\')></td>' +
				'<td id="btn_25" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'[{хХ\')></td>' +
				'<td id="btn_26" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\']}ъЪ\')></td>' +
				'<td align=right><img onClick=' + ins + '.akeyPress("ENTER") src="' + this.picFolder + '/kboard/enter2.gif"></td>' +
				'</tr></table>' +
				'</td></tr><tr><td>' +
				'<table cellpadding=1 cellspacing=0 width=100%><tr>' +
				'<td><img src="' + ((this.capsLock) ? '' + this.picFolder + '/kboard/b3_caps_lock_on.gif' : '' + this.picFolder + '/kboard/b3_caps_lock.gif') + '" id="caps" onClick=' + ins + '.akeyPress("CAPS")></td>' +
				'<td id="btn_27" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'aAфФ\')></td>' +
				'<td id="btn_28" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'sSыЫ\')></td>' +
				'<td id="btn_29" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'dDвВ\')></td>' +
				'<td id="btn_30" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'fFаА\')></td>' +
				'<td id="btn_31" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'gGпП\')></td>' +
				'<td id="btn_32" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'hHрР\')></td>' +
				'<td id="btn_33" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'jJоО\')></td>' +
				'<td id="btn_34" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'kKлЛ\')></td>' +
				'<td id="btn_35" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'lLдД\')></td>' +
				'<td id="btn_36" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\';:жЖ\')></td>' +
				'<td id="btn_37" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'**эЭ\')></td>' +
				'<td align=right><img src="' + this.picFolder + '/kboard/enter.gif" onClick=' + ins + '.akeyPress("ENTER")></td>' +
				'</tr></table>' +
				'</td></tr><tr><td>' +
				'<table cellpadding=1 cellspacing=0 width=100%><tr>' +
				'<td><img src="' + ((this.shift) ? '' + this.picFolder + '/kboard/b4_shift_on.gif' : '' + this.picFolder + '/kboard/b4_shift.gif') + '" id="shift" onClick=' + ins + '.akeyPress("SHIFT")></td>' +
				'<td id="btn_38" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'zZяЯ\')></td>' +
				'<td id="btn_39" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'xXчЧ\')></td>' +
				'<td id="btn_40" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'cCсС\')></td>' +
				'<td id="btn_41" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'vVмМ\')></td>' +
				'<td id="btn_42" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'bBиИ\')></td>' +
				'<td id="btn_43" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'nNтТ\')></td>' +
				'<td id="btn_44" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'mMьЬ\')></td>' +
				'<td id="btn_45" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick="' + ins + '.akeyPress(\',<бБ\')"></td>' +
				'<td id="btn_46" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick="' + ins + '.akeyPress(\'.>юЮ\')"></td>' +
				'<td id="btn_47" align="center" valign="middle" style="width: 64px; height: 64px; font-size: 30px; font-weigth: bold; background: url(\'' + this.picFolder + '/kboard/button.gif\');" onClick=' + ins + '.akeyPress(\'/?.,\')></td>' +
				'<td align=right><img src="' + this.picFolder + '/kboard/b4_empty.gif"></td>' +
				'</tr></table>' +
				'</td></tr><tr><td>' +
				'<table cellpadding=1 cellspacing=1 width=100%><tr>' +
				'<td><img src="' + this.picFolder + '/kboard/b5_engrus.gif" onClick=' + ins + '.akeyPress("ENGRUS")></td>' +
				'<td><img src="' + this.picFolder + '/kboard/b5_probel.gif" onClick="' + ins + '.akeyPress(\'    \')"></td>' +
				'<td><img src="' + this.picFolder + '/kboard/b5_ochistit.gif" onClick=' + ins + '.akeyPress("CLEAR")></td>' +
				'</tr></table>' +


				'</td></tr></table>';
	        }
	        insertContent(place, res);
	        this.fillButtons();
	    },

	    fillButtons: function() {
	        if (this.type.indexOf("DG") > -1)
	            return;

	        for (var i = 1; i <= 47; i++) {
	            $("btn_" + i).innerHTML = this.fixSymb(this.decode(this.buttonValues[i - 1]));
	        }
	    },

	    setStates: function() {
	        if (this.eng)
	            $("engrus").src = '' + this.picFolder + '/kboard/latin-raskl.gif'
	        else
	            $("engrus").src = '' + this.picFolder + '/kboard/russian-raskl.gif';

	        if (this.capsLock)
	            $("caps").src = '' + this.picFolder + '/kboard/b3_caps_lock_on.gif'
	        else
	            $("caps").src = '' + this.picFolder + '/kboard/b3_caps_lock.gif';

	        if (this.shift)
	            $("shift").src = '' + this.picFolder + '/kboard/b4_shift_on.gif'
	        else
	            $("shift").src = '' + this.picFolder + '/kboard/b4_shift.gif';

	        this.fillButtons();
	    },

	    setLanguage: function(language) {
	        if (((this.eng) && (language == "r")) || ((!this.eng) && (language == "e")))
	            this.akeyPress("ENGRUS");
	    },

	    akeyPress: function(key) {
	        switch (key) {
	            case 'BACKSPACE':
	                break;
	            case 'TAB':
	                break;
	            case 'CAPS':
	                this.capsLock = (!this.capsLock);
	                this.setStates();
	                return;
	                break;
	            case 'SHIFT':
	                this.shift = (!this.shift);
	                this.setStates();
	                return;
	                break;
	            case 'ENTER':
	                key = 'TAB';
	                break;
	            case 'ENGRUS':
	                this.eng = (!this.eng);
	                this.setStates();
	                return;
	                break;
	            case 'CLEAR':
	                break;
	            default:
	                key = this.decode(key);
	                break;
	        }
	        this.notify('eventKeyPress', key);
	        if (this.shift) this.akeyPress('SHIFT');
	    },

	    fixSymb: function(c) {
	        switch (c) {
	            case '&'    : return '&amp';
	            case '<'    : return '&lt';
	            default: return c;
	        }
	    },

	    decode: function(c) {
	        var pos = 0;

	        if (this.shift)
	            pos = (this.capsLock) ? 0 : 1
	        else
	            pos = (this.capsLock) ? 1 : 0;

	        if (!this.eng) pos += 2;

	        if (pos > c.length) {
	            return c.charAt(0);
	        }
	        else {
	            return c.charAt(pos);
	        }
	    },

	    dkeyPress: function(key) {
	        this.notify('eventKeyPress', key);
	    }
	}
);
