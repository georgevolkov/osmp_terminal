var ST_COOKIE = 0;
var ST_SESSION = 1;
var ST_FF_STORAGE = 2;


function createStorage(nStrorageType) {
    switch (nStrorageType) {
        case ST_COOKIE:
            return new CCookie();
        case ST_SESSION:
            return new CSession();
        default:
            return null;
    }
}

IStorage = createClass
(
	null,
	{
	    put: function(sName, sValue, bIsGlobal) {
	        //NOTIMPLEMENTED
	    },

	    remove: function(sName, bIsGlobal) {
	        //NOTIMPLEMENTED
	    },

	    get: function(sName) {
	        return null;
	    },

	    clear: function(bIsGlobal) {
	        //NOTIMPLEMENTED
	    },

	    clearOnly: function(sNames, bIsGlobal) {
	        //NOTIMPLEMENTED
	    },

	    clearExcept: function(sNames, bIsGlobal) {
	        //NOTIMPLEMENTED
	    },

	    show: function() {
	        //NOTIMPLEMENTED
	    }
	}
);

CCookie = createClass
(
	IStorage,
	{
	    put: function(sName, sValue, bIsGlobal) {
	        if (!$isNoU(sName) && sName.is(String)) {
	            if ($isNoU(sValue) || !sValue.is(String)) {
	                value = "null";
	            }
	            document.cookie = escape(sName) + "=" + escape(sValue) +
	                (($bool(bIsGlobal)) ? "; path=/" : "");
	        }
	    },

	    remove: function(sName, bIsGlobal) {
	        if (!$isNoU(sName) && sName.is(String)) {
	            document.cookie = escape(sName) + "=; expires=" + (new Date(0)).toGMTString() +
	            (($bool(bIsGlobal)) ? "; path=/" : "");
	        }
	    },

	    get: function(sName) {
	        var sResult = null;
	        var aCookies = [];
	        if (!$isNoU(sName) && sName.is(String)) {
	            aCookies = document.cookie.split("; ");
	            for (var i = 0; i < aCookies.length; i++) {
	                if (aCookies[i].indexOf(escape(sName) + "=") > -1) {
	                    sResult = unescape(aCookies[i].substr(aCookies[i].indexOf("=") + 1));
	                    if ($isNoU(sResult) || sResult === "null" || !sResult.length) {
	                        sResult = null;
	                    }
	                    break;
	                }
	            }
	        }
	        return sResult;
	    },

	    clear: function(bIsGlobal) {
	        var aCookies = document.cookie.split("; ");
	        for (var i = 0; i < aCookies.length; i++) {
	            this.remove(aCookies[i].substring(0, aCookies[i].indexOf("=")), bIsGlobal);
	        }
	    },

	    clearOnly: function(sNames, bIsGlobal) {
	        var aCookies = [];
	        var aNames = [];
	        var sName = "";
	        if (!$isNoU(sNames) && sNames.is(String)) {
	            aCookies = document.cookie.split("; ");
	            aNames = sNames.split("; ");
	            for (var i = 0; i < aCookies.length; i++) {
	                sName = aCookies[i].substring(0, aCookies[i].indexOf("="));
	                for (var j = 0; j < aNames.length; j++) {
	                    if (sName.indexOf(aNames[j]) > -1) {
	                        this.remove(sName, bIsGlobal);
	                        break;
	                    }
	                }
	            }
	        }
	    },

	    clearExcept: function(sNames, bIsGlobal) {
	        var aCookies = [];
	        var aNames = [];
	        var sName = "";
	        var bFlag = true;
	        if (!$isNoU(sNames) && sNames.is(String)) {
	            aCookies = document.cookie.split("; ");
	            aNames = sNames.split("; ");
	            for (var i = 0; i < aCookies.length; i++) {
	                bFlag = true;
	                sName = aCookies[i].substring(0, aCookies[i].indexOf("="));
	                for (var j = 0; j < aNames.length; j++) {
	                    if (sName.indexOf(aNames[j]) > -1) {
	                        bFlag = false;
	                        break;
	                    }
	                }
	                if (bFlag) {
	                    this.remove(sName, bIsGlobal);
	                }
	            }
	        }
	    },

	    show: function() {
	        var sResult = "Cookie info:\n\n";
	        var aCookies = document.cookie.split("; ");
	        for (var i = 0; i < aCookies.length; i++) {
	            sResult += aCookies[i].replace("=", ": ") + "\n";
	        }
	        alert(sResult);
	    }
	}
);

	CSession = createClass
(
	IStorage,
	{
	    put: function(sName, sValue, bIsGlobal) {
	        var oStorage = Object.deserialize(window.name);
	        if ($isNoU(oStorage)) {
	            oStorage = {};
	        }
	        if (!$isNoU(sName) && sName.is(String)) {
	            if ($isNoU(sValue) || !sValue.is(String)) {
	                value = "null";
	            }
	            oStorage[sName] = sValue;
	            window.name = oStorage.serialize();
	        }
	    },

	    remove: function(sName, bIsGlobal) {
	        var oStorage = Object.deserialize(window.name);
	        if (!$isNoU(oStorage)) {
	            if (!$isNoU(sName) && sName.is(String)) {
	                delete oStorage[escape(sName)];
	                if ($sizeOf(oStorage)) {
	                    window.name = oStorage.serialize();
	                }
	                else {
	                    window.name = "";
	                }
	            }
	        }
	    },

	    get: function(sName) {
	        var sResult = null;
	        var oStorage = Object.deserialize(window.name);
	        if (!$isNoU(oStorage)) {
	            if (!$isNoU(sName) && sName.is(String)) {
	                sName = escape(sName);
	                if (!$isNoU(oStorage[sName]) && oStorage[sName].is(String)) {
	                    sResult = oStorage[sName];
	                }
	            }
	        }
	        return sResult;
	    },

	    clear: function(bIsGlobal) {
	        window.name = "";
	    },

	    clearOnly: function(sNames, bIsGlobal) {
	        var oStorage = Object.deserialize(window.name);
	        var aNames = [];
	        if (!$isNoU(oStorage)) {
	            if (!$isNoU(sNames) && sNames.is(String) && sNames.length) {
	                aNames = sNames.split("; ");
	                for (var f in oStorage) {
	                    for (var i = 0; i < aNames.length; i++) {
	                        if (unescape(f).indexOf(aNames[i]) > -1) {
	                            delete oStorage[f];
	                            break;
	                        }
	                    }
	                }
	                if ($sizeOf(oStorage)) {
	                    window.name = oStorage.serialize();
	                }
	                else {
	                    window.name = "";
	                }
	            }
	        }
	    },

	    clearExcept: function(sNames, bIsGlobal) {
	        var oStorage = Object.deserialize(window.name);
	        var aNames = [];
	        var bFlag = true;
	        if (!$isNoU(oStorage)) {
	            if (!$isNoU(sNames) && sNames.is(String) && sNames.length) {
	                aNames = sNames.split("; ");
	                for (var f in oStorage) {
	                    if (oStorage.hasOwnProperty(f)) {
	                        bFlag = true;
	                        for (var i = 0; i < aNames.length; i++) {
	                            if (f.indexOf(aNames[i]) > -1) {
	                                bFlag = false;
	                                break;
	                            }
	                        }
	                        if (bFlag) {
	                            delete oStorage[f];
	                        }
	                    }
	                }
	                if ($sizeOf(oStorage)) {
	                    window.name = oStorage.serialize();
	                }
	                else {
	                    window.name = "";
	                }
	            }
	        }
	    },

	    show: function() {
	        var sResult = "Session info:\n\n";
	        var oStorage = Object.deserialize(window.name);
	        if (!$isNoU(oStorage)) {
	            for (var f in oStorage) {
	                if (oStorage.hasOwnProperty(f)) {
	                    sResult += f + ": " + oStorage[f] + "\n\n";
	                }
	            }
	        }
	        alert(sResult);
	    }
	}
);

//CFFStorage = createClass
//(
//	IStorage,
//	{
//	    _init: function(bIsGlobal) {
//	        var domain = document.location.hostname;
//	        var oResult = null;
//	        if ($bool(bIsGlobal)) {
//	            domain = "";
//	        }
//	        try {
//	            oResult = globalStorage[domain];
//	        } catch (e) {
//	            al("DOM Storage not available.")
//	        }
//	        return oResult;
//	    },

//	    put: function(sName, sValue, bIsGlobal) {
//	        var storage = null;
//	        if (!$isNoU(sName) && sName.is(String)) {
//	            if ($isNoU(sValue) || !sValue.is(String)) {
//	                value = "null";
//	            }
//	            storage = this._init(bIsGlobal);
//	            if (!$isNoU(storage)) {
//	                storage[sName] = sValue;
//	            }
//	        }
//	    },

//	    remove: function(sName, bIsGlobal) {
//	        var storage = null;
//	        if (!$isNoU(sName) && sName.is(String)) {
//	            storage = this._init(bIsGlobal);
//	            if (!$isNoU(storage)) {
//	                delete storage[sName];
//	            }
//	        }
//	    },

//	    get: function(sName) {
//	        var sResult = null;
//	        var storage = null;
//	        if (!$isNoU(sName) && sName.is(String)) {
//	            storage = this._init(true);
//	            if (!$isNoU(storage)) {
//	                sResult = storage[sName];
//	            }
//	            if ($isNoU(sResult)) {
//	                sResult = null;
//	            }
//	        }
//	        return sResult;
//	    },

//	    clear: function(bIsGlobal) {
//	        var storage = this._init(bIsGlobal);
//	        if (!$isNoU(storage)) {
//	            for (var k in storage) {
//	                delete storage[k];
//	            }
//	        }
//	    },

//	    clearOnly: function(sNames, bIsGlobal) {
//	        var storage = null;
//	        var aNames = [];
//	        if (!$isNoU(sNames) && sNames.is(String)) {
//	            storage = this._init(bIsGlobal);
//	            if (!$isNoU(storage)) {
//	                aNames = sNames.split("; ");
//	                for (var k in storage) {
//	                    for (var j = 0; j < aNames.length; j++) {
//	                        if (k.indexOf(aNames[j]) > -1) {
//	                            delete storage[k];
//	                            break;
//	                        }
//	                    }
//	                }
//	            }
//	        }
//	    },

//	    clearExcept: function(sNames, bIsGlobal) {
//	        var storage = null;
//	        var aNames = [];
//	        var bFlag = true;
//	        if (!$isNoU(sNames) && sNames.is(String)) {
//	            storage = this._init(bIsGlobal);
//	            if (!$isNoU(storage)) {
//	                aNames = sNames.split("; ");
//	                for (var k in storage) {
//	                    for (var j = 0; j < aNames.length; j++) {
//	                        if (k.indexOf(aNames[j]) > -1) {
//	                            delete storage[k];
//	                            break;
//	                        }
//	                    }
//	                }
//	            }
//	        }
//	    },

//	    show: function() {
//	        var sResult = "Storage info:\n\n";
//	        var storage = this._init(bIsGlobal);
//	        if (!$isNoU(storage)) {
//	            for (var k in storage) {
//	                sResult += k + ": " + storage[k] + "\n";
//	            }
//	        }
//	        alert(sResult);
//	    }
//	}
//);

	var storage = createStorage(ST_COOKIE);

