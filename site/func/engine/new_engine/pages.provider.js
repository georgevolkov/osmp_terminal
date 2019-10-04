    CProviderPage = createClass
(
	CPage,
	{
	    ctor: function(oParent, sInstance, sCtrlPlace, oProvider) {
	        var args = { "0": arguments[3] };
	        Function.validateParams(args, [
                { name: "oProvider", type: Object }
            ]);
	        if (!this._isValidProvider(oProvider)) {
	            document.location.href = "./index.html";
	        }                
	        CProviderPage.base.ctor.call(this, oParent, sInstance, sCtrlPlace);
	        this._oProvider = oProvider;
	        this.aTabs = [];
	        this.oTab = null;
	        this._aPagesId = [];
	        this._aTabsMap = [];
	        this._nCurrentTab = 0;
	        if (storage.get("CurrentTab") != null)
	            this._nCurrentTab = parseInt(storage.get("CurrentTab"), 10) + 1;
	        if(this._nCurrentTab == 0)
	        	storage.remove("pay_info");
	        this._nPostData = 0;
	        if (storage.get("nPostData") != null)
	            this._nPostData = parseInt(storage.get("nPostData"), 10) + 1;
	        this._bIsOnline = false;
	        this._bStrongOnline = false;
	        this._bIsBtnChoice = false;
	        this._sPageNew = '';
	        this._sPageId = '';
	        this._oPostData = {};
	        this._aPostDataAll = [];

                this._sLocale = "ru_ru";
                this._sLocale = getcookie('locale');

	        if (storage.get("aPostDataAll") != null)
	            this._aPostDataAll = Object.deserialize(storage.get("aPostDataAll"));
	    },

	    _paint: function() {
	        CProviderPage.base._paint.call(this);
	        startAdvert("Provider");
	    },

	    _addExtras: function() {
	        if (!($isNoU(this._oProvider.constParams) || $isNoU(this._oPostData))) {
	            for (var f in this._oProvider.constParams) {
	                if (this._oProvider.constParams.hasOwnProperty(f)) {
	                    this._oPostData[f] = "";
	                    if (!$isNoU(this._oProvider.constParams[f])) {
	                        this._oPostData[f] = this._oProvider.constParams[f].toString();
	                    }
	                }
	            }
	        }
	    },

	    _createContent: function(sPlace) {
	        this._sContentPlace = sPlace;
	        $(sPlace).innerHTML =
                '<table cellpadding="0" cellspacing="0" border="1" style="width: 100%; height: 100%;">' +
                '  <tr>' +
                '    <td id="' + this._sInstance + '_content" align="center" valign="middle" style="width: 100%; height: 100%;">Provider page content place</td>' +
                '  </tr>' +
                '</table>';
		this._getPagesId();
		this._analitic(this._aPagesId[0] ,this._sContentPlace);
        	//this._nextTab();
	    },

	    _createBottomMenu: function(sPlace) {
	        CProviderPage.base._createBottomMenu.apply(this, arguments);
	        /*this._oLeftBtmBtn = new CBtmMenuButton(this, "left_btn", "btn_left", "back.gif", "back_press.gif");
	        this._oCenterBtmBtn = new CBtmMenuButton(this, "center_btn", "btn_center", "menu.gif", "menu_press.gif");
	        this._oRightBtmBtn = new CBtmMenuButton(this, "right_btn", "btn_right", "forward.gif", "forward_press.gif");*/
                this._oLeftBtmBtn = new CBtmMenuButton(this, "left_btn", "btn_left", "back_empty.gif", "back_press.gif", {id: "button_back", locale: this._sLocale});
	        this._oCenterBtmBtn = new CBtmMenuButton(this, "center_btn", "btn_center", "menu_empty.gif", "menu_press.gif", {id: "button_menu", locale: this._sLocale});
	        this._oRightBtmBtn = new CBtmMenuButton(this, "right_btn", "btn_right", "next_empty.gif", "next_press.gif", {id: "button_provider_next", locale: this._sLocale});

	        this._oLeftBtmBtn.render();
	        this._oCenterBtmBtn.render();
	        this._oRightBtmBtn.render();
	        this._oLeftBtmBtn.attachListener("onClick", $delegate(this, this._backButtonClick));
	        this._oCenterBtmBtn.attachListener("onClick", $delegate(this, this._menuButtonClick));
	        this._oRightBtmBtn.attachListener("onClick", $delegate(this, this._forwardButtonClick));
	        this._oRightBtmBtn.setEnabled(false);
	    },
	    
	    _getPagesId: function () {
            for (var i = 0; i < this._oProvider.pages.length; i++)
                this._aPagesId.push(this._oProvider.pages[i].pageId);
	    },

	    _getFields: function(aControls) {
	        var aResult = [];
	        if ($is(aControls, Array)) {
	            for (var i = 0; i < aControls.length; i++) {
	                if (!$isNoU(aControls[i])) {
	                    if (aControls[i]["type"] == "text_input") {
	                        aResult.push(aControls[i]);
	                    }
	                }
	            }
	        }
	        return aResult;
	    },

	    _getKeyboard: function(aControls) {
	        var sResult = "";
	        if ($is(aControls, Array)) {
	            for (var i = 0; i < aControls.length; i++) {
	                if (!$isNoU(aControls[i])) {
	                    if (aControls[i]["type"] == "keyboard") {
	                        if ($is(aControls[i]["layout"], String)) {
	                            sResult = aControls[i]["layout"];
	                            break;
	                        }
	                    }
	                }
	            }
	        }
	        return sResult;
	    },
	    
	    _getDispInput: function(aControls) {
	        var aResult = [];
	        if ($is(aControls, Array)) {
	            for (var i = 0; i < aControls.length; i++) {
	                if (!$isNoU(aControls[i])) {
	                    if (aControls[i]["type"] == "disp_input") {
	                        aResult.push(aControls[i]);
	                    }
	                }
	            }
	        }
	        return aResult;
	    },
	    
	    _getDispButton: function(aControls) {
	        var aResult = [];
	        if ($is(aControls, Array)) {
	            for (var i = 0; i < aControls.length; i++) {
	                if (!$isNoU(aControls[i])) {
	                    if (aControls[i]["type"] == "disp_button") {
	                        aResult.push(aControls[i]);
	                    }
	                }
	            }
	        }
	        return aResult;
	    },
	    
	    _getDispCombined: function(aControls) {
	        var aResult = [];
	        if ($is(aControls, Array)) {
	            for (var i = 0; i < aControls.length; i++) {
	                if (!$isNoU(aControls[i])) {
	                    if (aControls[i]["type"] == "disp_button" || aControls[i]["type"] == "disp_input") {
	                        aResult.push(aControls[i]);
	                    }
	                }
	            }
	        }
	        return aResult;
	    },
	    
	    _convertGroupSId: function (nId) {
	        if (nId != null) {
	            var sId = 0; 
	            for (var i = 0; i < this._oProvider.pages.length; i++)
	                if (nId == i)
	                    sId = this._oProvider.pages[i].pageId;
	            return sId;
	        }
	        else
	          return  nId;
	    },
	    
	    _convertGroupNId: function (sId) {
	        if (sId != null) {
	            var nIndex = 0; 
	            for (var i = 0; i < this._oProvider.pages.length; i++)
	                if (sId == this._oProvider.pages[i].pageId)
	                    nIndex = i;
	            return nIndex;
	        }
	        else
	          return  sId;
	    },
	    
	    _analitic: function (sIdx, sPlace) {
	        var Idx = this._convertGroupNId(storage.get("pageId"));
            if (Idx == null)
                Idx = this._convertGroupNId(sIdx);
            $(this._sContentPlace).innerHTML = "";
            storage.put("CurrentTab", Idx.toString(10));
	        if (!$isNoU(this._oProvider) && !$isNoU(this._oProvider["pages"]) &&
                this._oProvider["pages"].is(Array))
                if (!$isNoU(this._oProvider.pages[Idx].useOnline) && this._oProvider.pages[Idx].useOnline == "true") {
                    this._bIsOnline = true;          
                    this._sPageNew = 'validate_confirm.html';
                    if (Idx != this._oProvider.pages.length - 1) {
                        storage.put("pageId", this._oProvider.pages[Idx+1].pageId);
                        this._bStrongOnline = true;
                        this._sPageNew = 'provider.html';
                    }
                }
                else {
                    this._bIsOnline = false;
                    this._bStrongOnline = false;
                    storage.remove("pageId");
                }
            this._createTab(Idx, sPlace);	        
	    },

	    _createTab: function(nIdx, sPlace) {
	        var sDiv = "";
	        var page = null;
	        var nTabIdx = 0;
	        var oTab = null;
	        var sKeyboard = "";
	        var aFields = [];
	        var aDispInput = [];
	        var aDispButton = [];
	        var aDispCombined = [];
	        var o = {};
	        var s = '';
	        if (!$isNoU(this._oProvider) && !$isNoU(this._oProvider["pages"]) &&
                this._oProvider["pages"].is(Array)) {    
	            sDiv = sPlace + "_tab";
	            page = this._oProvider.pages[nIdx];
	            this.oTab = null;
	            if (!$isNoU(page)) {
	                if ($is(page["__objects"], Array)) {
	                    for (var i = 0; i < page["__objects"].length; i++) {
	                        if (!$isNoU(page["__objects"][i])) {
	                            if (page["__objects"][i]["__type"] == "controls") {
	                                sKeyboard = this._getKeyboard(page["__objects"][i]["__objects"]);
	                                aFields = this._getFields(page["__objects"][i]["__objects"]);
	                                aDispInput = this._getDispInput(page["__objects"][i]["__objects"]);
	                                aDispButton = this._getDispButton(page["__objects"][i]["__objects"]);
	                                aDispCombined = this._getDispCombined(page["__objects"][i]["__objects"]);
	                            }
	                        }
	                    }
	                }
	                var oDiv = document.createElement("DIV");
	                oDiv.id = sDiv;
	                oDiv.style.width = oDiv.style.height = "100%";
	                $(sPlace).appendChild(oDiv);
	                if (!$isNoU(page["buttons"]) && page["buttons"].is(Array)) {
	                    this.oTab = new CBtnTab(this, "tab_", sDiv, page["pageId"], page["buttons"]);
	                    this.oTab.attachListener("onClick", $delegate(this, this._btnClicked));
	                    this.oTab.attachListener("onBtmMenuClick", $delegate(this, this._btmMenuClicked));
	                }
	                else if (aFields.length && sKeyboard.length) {
	                    if (sKeyboard.indexOf("DG") > -1) {
	                        this.oTab = new CDGInputTab(this, "tab_", sDiv, page["pageId"],
                                        this._oProvider.buttonName || this._oProvider["sName"], this._oProvider["logo"],
                                        sKeyboard, aFields);
	                    }
	                    else if (sKeyboard.indexOf("AL") > -1) {
	                        this.oTab = new CALInputTab(this, "tab_", sDiv, page["pageId"],
                                        this._oProvider.buttonName || this._oProvider["sName"], this._oProvider["logo"],
                                        sKeyboard, aFields);
	                    }
	                }
	                else if (aDispButton.length && aDispInput.length == 0) {
	                    this.oTab = new CButtonTab(this, "tab_", sDiv, page["pageId"], page["title"], aDispButton);
	                    this.oTab.attachListener("onClick", $delegate(this, this._dispButtonClick));
	                }
	                else if (aDispInput.length && aDispButton.length == 0) {
	                    this.oTab = new CDispInputTab(this, "tab_", sDiv, page["pageId"], aDispInput);
	                }
	                else if (aDispInput.length && aDispButton.length && aDispCombined.length) {
	                    this.oTab = new CDispCombined(this, "tab_", sDiv, page["pageId"], aDispCombined);
	                    this.oTab.attachListener("onClick", $delegate(this, this._dispButtonClick));
	                }
	                if (!$isNoU(this.oTab)) {
	                    this.oTab.attachListener("onStateChange", $delegate(this, this._onTabStateChange));
	                    this.aTabs.push(this.oTab);
	                }
	            }
	            
	            if (this.oTab)
	                this.oTab.render();
	            else {
	                document.location.href = "./index.html";
                    }
	        }
	    },
	    
	    _dispButtonClick: function () {
	        storage.remove("pageId");
	        this._nCurrentTab = parseInt(storage.get("CurrentTab"), 10);
	        this._nextTab();
	    },

	    _destroyTab: function(sTabId) {
	        var oTabDiv = $(sTabId);
	        if (!$isNoU(oTabDiv)) {
	            oTabDiv.parentNode.removeChild(oTabDiv);
	        }
	    },

	    _nextTab: function() {
	        if (this._nCurrentTab < this._oProvider.pages.length - 1) {
                this._nCurrentTab++;
                this._prepareFieldData();
                if (this._bIsOnline) {
                    this._destroyTab(this._sContentPlace);
	                this._submitOnline();
	            }
	            else
	                this._analitic(this._aPagesId[this._nCurrentTab], this._sContentPlace);
	        }
	        else {
	            this._destroyTab(this._sContentPlace);
	            storage.remove("pageId");
	            storage.remove("CurrentTab");
	            storage.remove("nPostData");
	            this._submit();
	        }
	    },

	    _prevTab: function() {
	        storage.remove("pageId");
	        storage.remove("CurrentTab");
	        storage.remove("nPostData");
	        this._bIsOnline = false; 
	        this._bStrongOnline = false;
	        if (this._nCurrentTab > 0) {
	            this._nCurrentTab--;
	            this._clearField();
	            this._analitic(this._aPagesId[this._nCurrentTab], this._sContentPlace);
	            if (!$isNoU(this._oProvider.pages[this._nCurrentTab].useOnline) && 
	                this._oProvider.pages[this._nCurrentTab].useOnline == "true") {
	                this._nPostData--;
	                this._fillPostData();
	            }
	        }
	        else
	        {
	            this._destroyTab(this._sContentPlace);
	            storage.remove("provider");
				document.location.href = storage.get("last_page");
	        }
	    },
	    
	    _fillPostData: function () {
	            this._oPostData = this._aPostDataAll[this._nPostData];
	    },

	    _isValidProvider: function(oProvider) {
	        return (!$isNoU(oProvider) &&
                    oProvider.hasOwnProperty("id") &&
                    oProvider.hasOwnProperty("sName") &&
                    oProvider.hasOwnProperty("pages") &&
                    !$isNoU(oProvider["pages"]) &&
                    oProvider["pages"] &&
                    $bool($sizeOf(oProvider["pages"])));
	    },

	    _onTabStateChange: function(sender, eargs)
	    {
	        if (eargs.isValid)
	        {
	            this._aTabsMap[this._nCurrentTab] = true;
	        }
	        else
	        {
	            this._aTabsMap[this._nCurrentTab] = false;
	        }
	        this._correctBtmMenu();
	    },

	    _correctBtmMenu: function()
	    {
		if (this._aTabsMap[this._nCurrentTab])
		{
			this._oRightBtmBtn.setEnabled(true);
		}
		else
		{
			this._oRightBtmBtn.setEnabled(false);
		}
	    },

	    _prepareFieldData: function () {
	        var aFields = [];
	        var sName = "";
	        if ($isNoU(this.oTab["_aFields"]))
	            return;
            aFields = this.oTab.getFields();
            for (var i = 0; i < aFields.length; i++) {   
                sName = aFields[i].getName();
                if (sName.length) {
                    if (sName == "getAccountNumber")
                        storage.put("accountNumber", aFields[i].getValue());
                    if (this.oTab._aFields[i].type != "disp_input")
                        this._oPostData[sName] = aFields[i].getValue();
                    sName = "";
                }
            }
	    },
	    
	    _clearField: function () {
	        var sPostData = '';
	        var sPostDataAll = '';
	        for (var key in this._oPostData)
	            sPostData = key;
	
            delete this._oPostData[sPostData];
	    },

	    _prepareSendData: function() {
	        var aFields = [];
	        var sName = "";
	        
	        if (this._nPostData == 0) {
	            this._oPostData["prv_id"] = this._oProvider.id;
	            this._oPostData["prv_name"] = this._oProvider.sName.replace(/<br \/>|\n/g, " ");
	        }
	        
	        if (!$isNoU(this._oProvider["maxSum"])) {
	            this._oPostData["MaxCashLimit"] = this._oProvider["maxSum"];
	        }
	        if (!$isNoU(this._oProvider["minSum"])) {
	            this._oPostData["komissiya"] = this._oProvider["minSum"];
	        }
	        else
	            this._oPostData["komissiya"] = "1";
	        this._addExtras();
	        for (var i = 0; i < this.aTabs.length; i++) {
	            if (this.aTabs[i].is(CInputTab)) {
	                aFields = this.aTabs[i].getFields();
	                for (var j = 0; j < aFields.length; j++) {
	                    sName = aFields[j].getName();
	                    if (sName.length) {
	                        this._oPostData[sName] = aFields[j].getValue();
	                        sName = "";
	                    }
	                }
	            }
	        }
	    },

	    _postData: function() {
	        var sAction = "./validate_confirm.html";
	        var aFields = [];
	        var sName = "";
	        var sExtraType = "";
	        var sExtraDesc = "";
	        
	        if (this._oProvider.id == "4246" || this._oProvider.id == "4308") {
	            sAction = "./menu.html";
	            if (this._sPageNew == "validate_confirm.html")
	                this._sPageNew = "menu.html";
	        }
	        
	        if (this._bIsOnline) {
	            sAction = "./online_auth.html";
	        }
	        
	        if (this._nPostData == 0) {
	            this._oPostData["prv_id"] = this._oProvider.id;
	            this._oPostData["prv_name"] = this._oProvider.sName.replace(/<br \/>|\n/g, " ");
	        }
	        
	        for (var i = 0; i < this.aTabs.length; i++) {
	            if (this.aTabs[i].is(CInputTab)) {
	                aFields = this.aTabs[i].getFields();
	                for (var j = 0; j < aFields.length; j++) {
	                    sExtraType = "";
	                    sExtraDesc = "";
	                    sName = "";
	                    sName = aFields[j].getName();
	                    sExtraType = aFields[j].getExtra();
	                    sExtraDesc = aFields[j].getDesc();
	                    
	                    if (sExtraType.length != 0 && aFields[j].getType() == "text_input") {
	                        if (sExtraType.indexOf('fixedsum') != -1)
	                            this._oPostData["_extra_fixed_int_summ"] = aFields[j].getValue();
	                        if (sExtraType.indexOf('extra') != -1 && sName.length != 0 && sName.indexOf('_extra_') == -1)
	                            this._oPostData["_extra_" + sName] = aFields[j].getValue();
	                        if (sExtraType.indexOf('receipt') != -1)
	                            if (sExtraDesc.length != 0)
	                                this._oPostData["_receipt_" + sExtraDesc] = aFields[j].getValue();
	                            else
	                                this._oPostData["_receipt_"] = aFields[j].getValue();
	                    }
	                    if (sName == 'getAccountNumber')
	                        this._oPostData[sName] = aFields[j].getValue();
	                    if (sName.indexOf('_extra_') != -1)
	                        this._oPostData[sName] = aFields[j].getValue();
	                }
	            }
	        }
	        
	        var oForm = new CForm(this, "oForm", sAction);
	        for (var f in this._oPostData) {
	            if (this._oPostData.hasOwnProperty(f)) {
	                if (!$isNoU(this._oPostData[f]) && this._oPostData[f].is(String)) {
	                    oForm.put(f, this._oPostData[f]);
	                }
	            }
	        }
	        if (this._bIsOnline) {
	            oForm.put("_extra_auth_page", "online_auth.html");
	            oForm.put("_extra_auth_success", this._sPageNew);
	            oForm.put("_extra_auth_fail", "online_auth_error.html");
	        }
	        this._bIsOnline = false;
	        this._aPostDataAll.push(this._oPostData);
	        storage.put("aPostDataAll", this._aPostDataAll.serialize());
	        storage.put("nPostData", this._nPostData.toString(10));
	        oForm.submit();
	    },

	    _createPayInfo: function() {
	        var oPaymentInfo = {};
	        oPaymentInfo.prvId = this._oProvider.id;
	        oPaymentInfo.buttonName = this._oProvider.buttonName || this._oProvider.sName;
	        oPaymentInfo.prvName = this._oProvider.sName;

                oPaymentInfo.isOther = 'true';

                if (!$isNoU(this._oProvider.minSum)) {
                    oPaymentInfo.minSum = this._oProvider.minSum;
                }
                else
                    oPaymentInfo.minSum = '0';

                if (!$isNoU(this._oProvider.maxSum)) {
                    oPaymentInfo.maxSum = this._oProvider.maxSum;
                }
                else
                    oPaymentInfo.maxSum = '0';

	        if (!$isNoU(this._oProvider.lName)) {
	            oPaymentInfo.prvNameL = this._oProvider.lName;
	        }
	        if (!$isNoU(this._oProvider.inn)) {
	            oPaymentInfo.prvInn = this._oProvider.inn;
	        }
	        if (!$isNoU(this._oProvider.phone)) {
	            oPaymentInfo.prvPhone = this._oProvider.phone;
	        }
	        oPaymentInfo.prvLogo = this._oProvider.logo;
            if (!$isNoU(this._oPostData["getAccountNumber"]))
                oPaymentInfo.account = this._oPostData["getAccountNumber"];
            else
                oPaymentInfo.account = storage.get("accountNumber");
	        oPaymentInfo.isCellular = "false";
	        storage.put("pay_info", oPaymentInfo.serialize());
	    },

	    _submit: function() {
	        this._prepareSendData();
	        this._createPayInfo();
	        this._postData();                
	    },
	    
	    _submitOnline: function() {
	        this._addExtras();
	        this._postData();
	    },

	    _btnClicked: function(sender, eargs) {
	        var bIsSearchComplete = false;
	        for (var i = 0; i < this._oProvider.pages.length; i++) {
	            if (this._oProvider.pages[i].pageId == eargs.pageId) {
	                bIsSearchComplete = true;
	                this._bIsBtnChoice = true;
	                this.aTabs[this._nCurrentTab].show(false);
	                this._nPrevTab = this._nCurrentTab;
	                this._nCurrentTab = i;
	                this._analitic(this._nCurrentTab, this._sContentPlace);
	                if (!$isNoU(eargs.constParams)) {
	                    for (var e in eargs.constParams) {
	                        if (eargs.constParams.hasOwnProperty(e)) {
	                            this._oPostData[e] = eargs.constParams[e];
	                        }
	                    }
	                }
	                this._oLeftBtmBtn.setEnabled(true);
	                return;
	            }
	        }
	        if (!bIsSearchComplete) {
	            document.location.href = "./index.html";
	        }
	    },

	    _btmMenuClicked: function(sender, eargs) {
	        switch (eargs.value) {
	            case "BACK":
	                this._backButtonClick(eargs.sender, eargs.eargs);
	                break;
	            case "MENU":
	                this._menuButtonClick(eargs.sender, eargs.eargs);
	                break;
	            case "FORWARD":
	                this._forwardButtonClick(eargs.sender, eargs.eargs);
	                break;
	        }
	    },

	    _backButtonClick: function (sender, eargs) {
	        if (this._oProvider.id == "11859" || this._oProvider.id == "16244") { this._nextTab(); } else
	        this._prevTab();
	    },

	    _menuButtonClick: function(sender, eargs) {
	        document.location.href = "./index.html";
	    },

	    _forwardButtonClick: function(sender, eargs) {
	        this._nextTab();
	    }
	}
);

