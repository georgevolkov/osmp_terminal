var xPageSize = 0;
var yPageSize = 0;
var xBoxSize = 0;
var yBoxSize = 0;
var cellSpacing = 0;
var currentPage = 0;

var xBoxCount = 0;
var yBoxCount = 0;
var boxesPerPage = 0;
var pagesCount = 0;
var arrayIndex = 0;

var currentDiv = '';

function isArray(obj) {
    if ((!obj) || (obj.constructor.toString().indexOf("Array") == -1))
        return false;
    else
        return true;
}

function go_folder(folder, img) {    
    pushFolder(folder);

    document.cookie = 'prv_folder='+folder;
    document.cookie = "prv_grp_old_image="+img;
    parent.location = './pages.html';
}

function initPageControl(xbSize,ybSize,cSpacing){

    //	xPageSize = xpSize;
    //	yPageSize = ypSize;

    try{
        var stDisp = advert_1.style.display;
    } catch (e) {
        var stDisp = 'none';
    }

    xPageSize = screen.width;
    yPageSize = screen.height - 400;

    if (stDisp != 'none') {
        yPageSize -= 200
        };


    xBoxSize = xbSize;
    yBoxSize = ybSize;
    cellSpacing = cSpacing;
    currentPage = 0;
    xBoxCount = Math.floor(xPageSize / (xBoxSize + cellSpacing));
    yBoxCount = Math.floor(yPageSize / (yBoxSize + cellSpacing));
    boxesPerPage = xBoxCount * yBoxCount;
    pagesCount = Math.ceil(providers.length / boxesPerPage);
    currentDiv = '';
}

function formContentText(sProviderName, sProviderImage, arrayIndex) {
    var sLocale = getcookie('locale');

    var providerButtonText = "";
    if (value[arrayIndex]["prv_button_text"] !== undefined && value[arrayIndex]["prv_button_text"] != "") {
        providerButtonText = " - " + value[arrayIndex]["prv_button_text"];
    }

    var text = "";
    if (sProviderImage) {
        text =
            '<div style="float:left; width:110px; height:110px; left:0px; top:0px; margin-left:10px; margin-top:5px; background-repeat: no-repeat; background-image:url('+sProviderImage+');"></div>'+            
            '<div style="height:114px; position:relative; left:0px; top:0px;"><table cellpadding="0" cellspacing="0" border="0" height="100%" width="100%"><tr><td valign="middle" style="line-height:24px; text-transform:uppercase; font-family: Century Gothic,Arial,FreeSans,Helvetica,Tahoma,sans-serif; font-weight:bold; font-size:16px; ">'+getProviderText(arrayIndex, sLocale)+providerButtonText+'</td></tr></table></div>';
    }
    else {        
        text =
            '<div style="width:100%; height:100%;">'+
                '<table width="100%" height="100%">'+
                    '<tr>'+
                        '<td align="center" valign="middle">'+
                            '<div style="line-height:24px; text-transform:uppercase; font-family:Arial,FreeSans,Helvetica,Tahoma,sans-serif; font-weight:bold; font-size:16px;">' + getProviderText(arrayIndex, sLocale)+providerButtonText+ '</div>' +
                        '</td>'+
                    '</tr>'+
                '</table>'+
            '</div>';
    }

    return text;
}

function renderPage(place){    
    arrayIndex = boxesPerPage * (currentPage - 1);
    var content = '';
    for (var y=1;y<=yBoxCount;y++)
    {        
        content += '<tr>';
        for (var x=1;x<=xBoxCount;x++)
        {
            if (arrayIndex >= providers.length) {
                content += '<td align="center" valign="middle" width='+xBoxSize+' height='+yBoxSize+'><img border="0" src="./img/ui/null.gif" width="'+yBoxSize+'" height="120"></td>';
            } else {
                if (isArray(providers[arrayIndex]) && providers[arrayIndex].length > 1 &&
                    value[providers[arrayIndex][0]] && value[providers[arrayIndex][0]]["autorotate"] == "true") {
                    var counter = parseInt(cookie.getCookie(providers[arrayIndex][0] + "_group_rotator"), 10);
                    var aPrv = getFolder(providers[arrayIndex][1]);
                    if (!(aPrv instanceof Array)) {
                        aPrv = [];
                    }
                    if (!aPrv.length) {
                        arrayIndex++;
                    }
                    else {
                        if (isNaN(counter) || counter > aPrv.length - 1) {
                            counter = 0;
                        }
                        cookie.setCookie(providers[arrayIndex][0] + "_group_rotator", (counter + 1).toString(10));
                        providers[arrayIndex] = aPrv[counter];
                    }
                }

                        var providerButtonText = "";
                if (isArray(providers[arrayIndex])) {
                    providerButtonText = value[providers[arrayIndex][0]]["prv_name"];
                    if (value[providers[arrayIndex][0]]["prv_button_text"] !== undefined && value[providers[arrayIndex][0]]["prv_button_text"] != "")
                        providerButtonText += " - " + value[providers[arrayIndex][0]]["prv_button_text"];

                   content +=
                        '<td bgcolor="#f5f5f5" width='+xBoxSize+' height='+yBoxSize+' onclick=go_folder("'+providers[arrayIndex][1]+'")>'+
                        '<table cellpadding="0" cellspacing="0" border="0" width="100%" height="'+yBoxSize+'">'+
                        '<tr>'+
                        '<td valign="middle">'+
                        '<div style="margin:0; padding:0; background-image:url(./img/ui/vc/logo2.gif); background-repeat:no-repeat; width:100%; height:114px;">'+
                            formContentText(providerButtonText, value[providers[arrayIndex][0]]["prv_image"], providers[arrayIndex][0])+
                        '</div>'+
                        '</td>'+
                        '</tr>'+
                        '</table>'+
                        '</td>';               
                }
                else
                {                                       
                    
                    if (value[providers[arrayIndex]]["prv_is_extra"]==1)
                    {
                        content +=
                        '<td bgcolor="#f5f5f5" width='+xBoxSize+' height='+yBoxSize+' onclick=redirect("'+providers[arrayIndex]+'","","",""); >'+
                        '<table cellpadding="0" cellspacing="0" border="0" width="100%" height='+yBoxSize+'>'+
                        '<tr><td width="25" background="./img/ui/ui_item_left.gif"></td>'+
                        '<td background="./img/ui/ui_item_bg.gif" align="center" valign="middle">'+
                        '<img src='+value[providers[arrayIndex]]["prv_image"]+' height=100></img><br>'+
                        '<font weight=bold>'+providerButtonText+'</font></td>'+
                        '<td width="25" background="./img/ui/ui_item_right.gif"></td></tr>'+
                        '</table>'+
                        '</td>';
                    }
                    else
                    {                        
                        content +=
                        '<td bgcolor="#f5f5f5" width="'+xBoxSize+'" height="'+yBoxSize+'" onclick=redirect("'+providers[arrayIndex]+'","","",""); >'+
                        '<table cellpadding="0" cellspacing="0" border="0" width="100%" height="'+yBoxSize+'">'+
                        '<tr>'+
                        '<td valign="middle">'+
                        '<div style="margin:0 0 0 5px; padding:0; background-image:url(./img/ui/vc/logo2.gif); background-repeat:no-repeat; width:100%; height:114px;">'+
                            formContentText(providerButtonText, value[providers[arrayIndex]]["prv_image"], providers[arrayIndex])+
                        '</div>'+
                        '</td>'+                        
                        '</tr>'+
                        '</table>'+
                        '</td>';
                    }
                }
                arrayIndex += 1;
            }
        }
        content += '</tr>';
    }
    
    //content = '<table border="0" width='+((xBoxSize+cellSpacing)*xBoxCount)+' height='+((yBoxSize+cellSpacing)*yBoxCount)+' border="0" cellpadding="0" cellspacing="0">'+content+'</table>';
	
    content = '<table border="0" border="0" width="100%" cellpadding="0" cellspacing="0">'+content+'</table>';

    document.getElementById(place).innerHTML=content;

}