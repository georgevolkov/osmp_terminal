	CPagesPage = createClass
(
    CPage,
    {
        ctor: function(oParent, sInstance, sCtrlPlace, sGroup, aGroups) {
            CPagesPage.base.ctor.call(this, oParent, sInstance, sCtrlPlace);
            if(sGroup == "-161")
            {
            	top.location.href = 'bank.html';
            	return;
            }
            this._dataProvider = new CJsDataProvider(this, "_dataProvider");
            this._dataProvider._aGroups = aGroups;
            if (this._dataProvider.isEmptyGroup(sGroup)) {
                top.location.href = "./index.html";
                return;
            }
            this._js = null;
            this._sEntranceGroup = sGroup;
            this._sGroup = sGroup;
            this._aStek = new Array();
            this._bIsDataLoaded = true;
            this._aGroup = this._dataProvider.getElementsByGroup(this._sGroup);
            //console.debug(this._aGroup);
            this._nCurrentStr = 1;
            this._nFinalStr = Math.ceil(this._aGroup.length / 16);
            if (/^\d+$/.test(this._aGroup.length / 16))
                this._nFinalStr--;
        },

        _paint: function() {
            var oPlace = $(this.getPlaceId());
            if (!Object.isNullOrUndefined(oPlace)) {
                var oSound = document.createElement('bgsound');
                oSound.src = './sound/choose_operators.wav';
                oSound.loop = '1';
                oPlace.appendChild(oSound);
                oPlace.innerHTML =
                        '<div style="height: 18px"></div><table cellpadding="0" cellspacing="0" border="0" width="100%" height="180">' +
                        '  <tr valign="middle">' +
                        '    <td width="162" height="180">' +
                        '        <div style="width: 86px; height: 140px; margin: 8px 0px 0px 51px;"><img alt="" src="./img/ui/qiwicel.gif" /></div>' +
                        '    </td>' +
                        '    <td width="1090" height="180">' +
                        '        <div id="advert_1" style="width: 1090px; height: 180px; margin-left: 5px; overflow: hidden;"></div>' +
                        '    </td>' +
                        '  </tr>' +
                        '</table>' +
                        '<div id="' + this._sInstance + '_page_body" class="page_body"></div>' +
    	                '<div id="' + this._sInstance + '_bottom_menu">';
                startAdvert("Pages");
                this._createBottomMenu(this._sInstance + "_bottom_menu");
                this._createContent(this._sInstance + "_page_body");
            }
        },

        _createBottomMenu: function(sPlace) {
            CPagesPage.base._createBottomMenu.apply(this, arguments);
            this._oRightBtmBtn = new CBtmMenuButton(this, "right_btn", "btn_right", "next.gif", "next_press.gif");
            this._oLeftBtmBtn = new CBtmMenuButton(this, "left_btn", "btn_left", "back.gif", "back_press.gif");
            this._oCenterBtmBtn = new CBtmMenuButton(this, "center_btn", "btn_center", "menu.gif", "menu_press.gif");
            //            this._oLeftBtmBtn.setKeyCode("left4");
            this._oLeftBtmBtn.render();
            this._oCenterBtmBtn.render();
            this._oRightBtmBtn.render();
            this._oLeftBtmBtn.attachListener("onClick", $delegate(this, this._backButtonClick));
            this._oCenterBtmBtn.attachListener("onClick", $delegate(this, this._menuButtonClick));
            this._oRightBtmBtn.attachListener("onClick", $delegate(this, this._nextButtonClick));
        },

        _createContent: function(sPlace) {
            if (!this._bIsDataLoaded) {
                $(sPlace).innerHTML =
                '<table cellpadding="0" cellspacing="0" border="0" style="width: 100%; height: 100%;">' +
                '  <tr>' +
                '    <td id="' + (this._sInstance + "_content") + '" align="center" valign="middle" style="width: 100%; height: 100%;">Идет загрузка данных</td>' +
                '  </tr>' +
                '</table>';
            }
            else {
                $(sPlace).vAlign = "top";
                $(sPlace).innerHTML =
	                '<div style="height: 18px"></div><div style="width: 1241px; height: 121px; margin: 0; position: relative; left: 20px">' +
	                '   <div id="' + this._sInstance + '_groups" style="width: 930px; height: 121px; float: right;"></div>' +
	                '   <div id="' + this._sInstance + '_search" style="width: 301px; height: 121px; float: left;">' +
	                '   </div>' +
	                '</div>' +
    	            '<div id="' + this._sInstance + '_elements" style="width: 1241px; height: 495px; margin: 15px 0 0; position: relative; left: 20px"></div>';
                this._drawSearchButton(this._sInstance + "_search");
                this._contentManagement('group');
            }
        },

        _drawSearchButton: function(sPlace) {
            var oBtn = new CImageButton(this, "search_btn", sPlace, "SEARCH", "./img/ui/navigation/search_press.gif", "./img/ui/navigation/search_anim.gif");
            oBtn.attachListener("onClick", $delegate(this, this._searchButtonClick));
            oBtn.create();
            oBtn.render();
        },

        _searchButtonClick: function() {
		var path = document.location.pathname.match(/([^\\^//]+)$/)[1];
		top.location.href = "./search_providers.html#" + path + document.location.hash;
        },

        _contentManagement: function(sComand) {
            switch (sComand) {
                case 'group':
                    this._aGroup = this._dataProvider.getElementsByGroup(this._sGroup);
                    this._nFinalStr = Math.ceil(this._aGroup.length / 16);
                    this._nCurrentStr = 1;
                    if (this._nCurrentStr == this._nFinalStr)
                        this._oRightBtmBtn.setEnabled(false);
                    break;
                case 'forward':
                    if (this._nCurrentStr >= this._nFinalStr)
                        this._oRightBtmBtn.setEnabled(false);
                    break;
                case 'backward':
                    if (this._nCurrentStr > 1) {
                        this._nCurrentStr--;
                        if (this._nCurrentStr < this._nFinalStr)
                            this._oRightBtmBtn.setEnabled(true);
                    }
                    else {
                        this._sGroup = this._aStek.pop();
                        this._aGroup = this._dataProvider.getElementsByGroup(this._sGroup);
                        this._nFinalStr = Math.ceil(this._aGroup.length / 16);
                        if (this._nCurrentStr < this._nFinalStr)
                            this._oRightBtmBtn.setEnabled(true);
                        if (/^\d+$/.test(this._aGroup.length / 16))
                            this._nFinalStr--;
                        this._nCurrentStr = 1;
                    }
                    break;
            }
            this._drawGroup(this._sInstance + "_groups");
            this._drawElements(this._sInstance + "_elements");

		var hash = getHash();
		if(!$isNoU(hash) && this._sGroup != hash[1]) return;

            document.location.hash = '#' + this._sGroup + ':' + this._nCurrentStr;
        },

        _drawElements: function(sPlace) {
            var inst = this._sInstance,
                sPlace = $(sPlace);
            for(var i = sPlace.childNodes.length; i > 0; i--)
            {
            	sPlace.removeChild(sPlace.childNodes[i - 1]);
            }
            for(var i = (this._nCurrentStr - 1) * 16, l = (this._nCurrentStr - 1) * 16 + 16; i < l; i++)
            {
                if(i < this._aGroup.length)
                {
                    var oTemp = this._aGroup[i].elementValue,
                        oDiv = document.createElement('div');
                    oDiv.className = 'element-place';
                    oDiv.innerHTML = '<div id="' + inst + "_element_" + (i + 1) + '"></div>';
                    sPlace.appendChild(oDiv);
                }
            }
            this._createElements();
        },

        _createElements: function() {
            var oPlace = null;
            var oElement = null;
            for (var i = (this._nCurrentStr - 1) * 16; i < (this._nCurrentStr - 1) * 16 + 16; i++) {
                oPlace = $(this._sInstance + "_element_" + (i + 1));
                if (oPlace) {
                    oElement = new CElementButton(this, "el" + (i + 1),
	                            oPlace.id,
	                            ((this._aGroup[i].elementType == "GROUP") ?
	                            (this._aGroup[i].elementValue.id) :
	                            this._aGroup[i].elementValue.id),
	                            ((this._aGroup[i].elementType == "PROVIDER") ?
	                            (this._aGroup[i].elementValue.buttonName || this._aGroup[i].elementValue.sName) :
	                            this._aGroup[i].elementValue.name),
	                            this._aGroup[i].elementValue.logo);
                    oElement.attachListener("onClick", $delegate(this, this._elementClick));
                    oElement.render();
                }
            }
        },

        _drawGroup: function(sPlace) {
            var sContent = '';
            var sId = this._dataProvider.getHighLevelGroup(this._sGroup);
            var oTemp = this._dataProvider.getGroupById(sId == '' ? this._sGroup : sId);

            sContent = '<table cellpadding="0" cellspacing="0" border="0">' +
	                   '    <tr>' +
	                   '        <td class="section-holder">' +
	                   '            <div class="section-icon" style="background: url(\'./img/ui_item/' + oTemp.logo + '\') no-repeat;"></div>' +
	                   '            <div class="section-title">' + this._dataProvider.getGroupById(this._sGroup).name + '</div>';
            if ((this._nFinalStr != 1) &&
                (this._nCurrentStr <= this._nFinalStr)) {
                sContent +=
	                '<div class="page-status">' + this._nCurrentStr + '<big>-я страница из </big>' + this._nFinalStr + '</div>';
            }
            sContent += '       </td>' +
	                    '   </tr>' +
	                    '</table>';
            $(sPlace).innerHTML = sContent;
        },

        _menuButtonClick: function(sender, eargs) {
            top.location.href = "./index.html";
        },

        _backButtonClick: function(sender, eargs)
        {
            if(this._nCurrentStr == 1 && this._aStek.length == 0)
            {
                if(this._dataProvider.isCellularGroup(this._sGroup))
                {
                    top.storage.put("provider", "null");
                    top.location.href = "./cellular.html";
                }
                else
                {
                    document.location.hash = '#';
                    var page = newObject(CMainPage, null, null, null, "page", "content");
                    page.render();
                }
            }
            else
                this._contentManagement('backward');
        },

        _nextButtonClick: function() {
            this._nCurrentStr++;
            this._contentManagement('forward');
        },

        _elementClick: function(sender, eargs) {
            if (/^-\d+$/.test(eargs.value)) {
                this._aStek.push(this._sGroup);
                this._sGroup = eargs.value;
                this._nCurrentStr = 0;
                this._contentManagement('group');
            }
            else
                if (/^\d+$/.test(eargs.value)) {
                    this._clickProvider(eargs.value);
                }
        },

        _clickProvider: function(sId) {
            if ($is(sId, String)) {
                getScript("./config/" + sId + ".js", this._prvLoaded, [], this);
                /*var _this = this;
                this._js = document.createElement("script");
                this._js.language = "javascript";
                this._js.src = "./config/" + sId + ".js";
                this._js.onreadystatechange = function () {
                    if (_this._js.readyState == "loaded" || _this._js.readyState == "complete")
                        _this._prvLoaded();
                }
                this._js.onload = $delegate(this, this._prvLoaded);
                document.body.appendChild(this._js);*/
            }
        },
        
        _prvLoaded: function() {
            var oRes = null;
            try {
                oRes = window.UIProvider.clone();
                this._dataProvider.modifyProvider(oRes);
            }
            catch (e) {
                oRes = null;
            }
            if (!$isNoU(this._js)) {
                document.body.removeChild(this._js);
            }
            this._processProvider(oRes);
        },
        
        _processProvider: function(oProvider) {
            if (!$isNoU(oProvider)) {
                top.storage.put("provider", oProvider["id"]);
                var oPayInfo = Object.deserialize(storage.get("pay_info"));

                if (!$isNoU(oPayInfo)) {
                    oPayInfo.prvId = oProvider.id;
                    oPayInfo.prvName = oProvider.buttonName || oProvider.sName;
                    oPayInfo.prvLogo = oProvider.logo;
                    var oForm = new CForm(this, "oForm", "./validate_confirm.html");
                    oForm.put("prv_id", oPayInfo.prvId);
                    oForm.put("prv_name", oPayInfo.prvName);
                    oForm.put("getAccountNumber", oPayInfo.account);
                    if (!$isNoU(oProvider["maxSum"])) {
                        oForm.put("MaxCashLimit", oProvider["maxSum"]);
                    }
                    if (!$isNoU(oProvider["minSum"])) {
                        oForm.put("komissiya", oProvider["minSum"]);
                    }
                    else
                        oForm.put("komissiya", "1");
                    top.storage.put("pay_info", oPayInfo.serialize());
                    top.storage.put("last_page", "main.html");
                    oForm.submit();
                }
                else if (this._dataProvider.isCellularGroup(
                        this._dataProvider.getHighLevelGroup(oProvider["id"]))) {
                    top.storage.put("last_page", document.location.href);
                    top.location.href = "./cellular.html";
                }
                else if (!$isNoU(oProvider["prvPage"]) &&
                    oProvider["prvPage"].is(String) &&
                    oProvider["prvPage"].length > 0) {
                    top.storage.put("last_page", document.location.href);
                    this._postData(oProvider["prvPage"], oProvider);
                }
                else if(oProvider.tag && oProvider.tag.indexOf('charity') > -1)
                {
                    top.storage.put("last_page", document.location.href);
                    top.location.href = "./charity.html";
                }
                else {
                    top.storage.put("last_page", document.location.href);
                    top.location.href = "./provider.html";
                }
            }
        },

        _postData: function(sUrl, oPrv) {
            var oForm = new CForm(this, "oForm", sUrl);
            if (!$isNoU(oPrv)) {
                if (!$isNoU(oPrv["id"])) {
                    oForm.put("prv_id", oPrv["id"]);
                }
                if (!$isNoU(oPrv["sName"])) {
                    oForm.put("prv_name", oPrv["sName"]);
                }
                for (var f in oPrv["constParams"]) {
                    if (oPrv["constParams"].hasOwnProperty(f)) {
                        if ($is(oPrv["constParams"][f], String)) {
                            oForm.put(f, oPrv["constParams"][f]);
                        }
                    }
                }
            }
            oForm.submit();
        }
    }
);
