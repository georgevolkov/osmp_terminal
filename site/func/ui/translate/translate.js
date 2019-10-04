var oFrases= {};
var oImages= {};
var oTextProps= {};

//utf8 to 1251 converter (1 byte format, RU/EN support only + any other symbols) by drgluck
        function utf8_decode (aa) {
            var bb = '', c = 0;
            for (var i = 0; i < aa.length; i++) {
                c = aa.charCodeAt(i);
                if (c > 127) {
                    if (c > 1024) {
                        if (c == 1025) {
                            c = 1016;
                        } else if (c == 1105) {
                            c = 1032;
                        }
                        bb += String.fromCharCode(c - 848);
                    }
                } else {
                    bb += aa.charAt(i);
                }
            }
            return bb;
        }
       

 function convertToMaratlLanguage(sInterfaceLocale) {
                switch (sInterfaceLocale) {
                    case "ru_ru": return "RU";
                    case "en_en": return "ZA";
                    case "kg": return "KG";
                }
            }

function getTextProp(sBlockId, sLocale)
{	
    var oBlockPlace = document.getElementById(sBlockId);
    if (oBlockPlace == null || oBlockPlace == undefined) {
	
        return;
    }
	
	
    if (oImages !== null && oImages !== undefined) {
        oTextProp = oTextProps[sBlockId];
        var direction = sCollase(oTextProp[sLocale].direction, oTextProp.direction);
        //var height = sCollase(oTextProp[sLocale].height, oTextProp.height);
        //var backgroundImage = sCollase(oTextProp[sLocale].backgroundImage, oTextProp.backgroundImage);
        //var left = sCollase(oTextProp[sLocale].left, oTextProp.left);
		
			
		
        if (direction !== null && direction !== undefined) {
            oBlockPlace.style.direction=direction;
        }
			

    /*	if (height !== null && height !== undefined) {
			oBlockPlace.style.height=height;
		}
		if (backgroundImage !== null && backgroundImage !== undefined) {
			oBlockPlace.style.backgroundImage = backgroundImage;
		}
		
		if (left !== null && left !== undefined) {
			oBlockPlace.style.left=left;
		}
		*/
    }
}

function getImageProp(sImageId, sLocale)
{
    var oImagePlace = document.getElementById(sImageId);
    if (oImagePlace == null || oImagePlace == undefined) {
	
        return;
    }
	
    if (oImages !== null && oImages !== undefined) {
        oImage = oImages[sImageId];

        var width = sCollase(oImage[sLocale].width, oImage.width);
        var height = sCollase(oImage[sLocale].height, oImage.height);
        var backgroundImage = sCollase(oImage[sLocale].backgroundImage, oImage.backgroundImage);
        var backgroundPosition = sCollase(oImage[sLocale].backgroundPosition, oImage.backgroundPosition);
		
        var left = sCollase(oImage[sLocale].left, oImage.left);
		
        if (width !== null && width !== undefined) {
            oImagePlace.style.width=width;
        }

        if (height !== null && height !== undefined) {
            oImagePlace.style.height=height;
        }
        if (backgroundImage !== null && backgroundImage !== undefined) {
            oImagePlace.style.backgroundImage = backgroundImage;
        }
        if (backgroundPosition !== null && backgroundPosition !== undefined) {
            oImagePlace.style.backgroundPosition = backgroundPosition;
        }
        if (left !== null && left !== undefined) {
            oImagePlace.style.left=left;
        }
    }
}

function getTextById(sTextId, sLocale)
{    
    var oTextPlace = document.getElementById(sTextId);
    if (oTextPlace == null || oTextPlace == undefined) {
	
        return;
    }
    if (oFrases !== null && oFrases !== undefined) {		
        oFrase = oFrases[sTextId];
        oTextPlace.innerHTML = oFrase[sLocale].text;
		
        var left = sCollase(oFrase[sLocale].left, oFrase.left);
        var top = sCollase(oFrase[sLocale].top, oFrase.top);
        var color = sCollase(oFrase[sLocale].color, oFrase.color);
        var font1 = sCollase(oFrase[sLocale].font, oFrase.font);
        var direction = sCollase(oFrase[sLocale].direction, oFrase.direction);
		
        var marginLeft = sCollase(oFrase[sLocale].marginLeft, oFrase.marginLeft);
        var marginTop = sCollase(oFrase[sLocale].marginTop, oFrase.marginTop);
		
        if (left !== null && left !== undefined) {
            oTextPlace.style.left=left;
        }
        if (top !== null && top !== undefined) {
            oTextPlace.style.top=top;
        }
        if (color !== null && color !== undefined) {
            oTextPlace.style.color = color;
        }
        if (font1 !== null && font1 !== undefined) {
            oTextPlace.style.font = font1;
        }
        if (direction !== null && direction !== undefined) {
            oTextPlace.style.direction = direction;
        }
		
        if (marginLeft !== null && marginLeft !== undefined) {
            oTextPlace.style.marginLeft = marginLeft;
        }
        if (marginTop !== null && marginTop !== undefined) {
            oTextPlace.style.marginTop = marginTop;
        }
    }
	
}

function getText(sTextId, sLocale)
{
    if (oFrases !== null && oFrases !== undefined) {
        oFrase = oFrases[sTextId];
        return oFrase[sLocale].text;
    }
    return undefined;
}

function getProviderText(sTextId, sLocale)
{
    if (oFrases !== null && oFrases !== undefined && oFrases[sTextId] && oFrases[sTextId] !== null && oFrases[sTextId] !== undefined) {
        var oFrase = oFrases[sTextId];        
        return oFrase[sLocale].text;
    }
    else {
        return value[sTextId]["prv_name"];
    }
}

function getProviderGroup(sTextId, sLocale)
{
    if (oFrases !== null && oFrases !== undefined && oFrases[sTextId] && oFrases[sTextId] !== null && oFrases[sTextId] !== undefined && oFrases[sTextId].groupText !== undefined) {
        var oFrase = oFrases[sTextId]; 
        return oFrase[sLocale].groupText;
    }
    else {        
        return value[sTextId]["prv_group"];
    }
}

function getTextWithoutBR(sTextId, sLocale) {
    if (oFrases !== null && oFrases !== undefined) {
        oFrase = oFrases[sTextId];
        var txt = oFrase[sLocale].text;
        while (txt.search("-<br>") != -1) {
            txt = txt.replace("-<br>", "");
        }
        while (txt.search("<br>") != -1) {
            txt = txt.replace("<br>", " ");
        }
        return txt;
    }
    return undefined;
}

function sCollase(sFirst, sSecond)
{	
    if(sFirst !== undefined && sFirst !== null ) return sFirst;	
    if(sSecond !==null && sSecond !== undefined) return sSecond;
	
    return null;
}
