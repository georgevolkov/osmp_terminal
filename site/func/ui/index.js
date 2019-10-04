var advImg = "";
var advUrl = "";

var oHolidays = {
    "30.8"   : { name: "День независимости", img: "./img/ui_item/holidays/31_8.gif" },
    "31.8"   : { name: "День независимости", img: "./img/ui_item/holidays/31_8.gif" }
}

function getBtmContent(sContentPlace) {
    var oHoliday = null;
    var oDate = new Date();
    var sDate = oDate.getDate().toString(10) + "." + (oDate.getMonth() + 1).toString(10);
    var oContentPlace = document.getElementById(sContentPlace);
    if (oContentPlace == null || oContentPlace == "undefined") {
        return;
    }

    if (oHolidays !== null && oHolidays !== "undefined") {
        if (oHolidays.hasOwnProperty(sDate)) {
            oHoliday = oHolidays[sDate];
            if (oHoliday !== null && oHoliday !== "undefined" &&
                oHoliday.img !== null && oHoliday.img !== "undefined" &&
                oHoliday.img.toString().length > 0) {
                oContentPlace.innerHTML = '<img alt="" src="' + oHoliday.img + '" />';
                return;    
            }    
        }
    }
    if (advImg.length > 0) {
        oContentPlace.innerHTML =
            '<img alt="" src="' + advImg + '"' + ((advUrl.length > 0) ? ' onclick="document.location.href = \'' + advUrl + '\'"' : '') + ' />';
    }
}