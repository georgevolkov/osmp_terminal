function getDownLeftFlash(content)
        {
           html =
	                    '<table cellpadding="0" cellspacing="0" border="0" width="100%" height="100%">' +
	                    '   <tr>' +
	                    '       <td align="center" valign="middle" class="on_page_title">' +
	                    '           <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="100%" height="100%">' +
                        '               <param name="allowScriptAccess" value="sameDomain" />' +
                        '               <param name="movie" value="../adv/' + content + '" />' +
                        '               <param name="quality" value="best" />' +
                        '               <param name="wmode" value="transparent" />' +
                        '           </object>' +
	                    '       </td>' +
	                    '   </tr>' +
	                    '</table>';
                        return html;
        }

function drawFlash(el, path) {
    var html =
                '<table cellpadding="0" cellspacing="0" border="0" width="100%" height="100%">' +
                '   <tr>' +
                '       <td align="center" valign="middle" class="on_page_title">' +
                '           <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="100%" height="100%">' +
            '               <param name="allowScriptAccess" value="sameDomain" />' +
            '               <param name="movie" value="' + path + '" />' +
            '               <param name="quality" value="best" />' +
            '               <param name="wmode" value="transparent" />' +
            '           </object>' +
                '       </td>' +
                '   </tr>' +
                '</table>';

    document.getElementById(el).innerHTML = html;
}

function drawImage(el, path)
{
     html =
        '<table cellpadding="0" cellspacing="0" border="0" width="100%" height="100%">' +
        '   <tr>' +
        '       <td align="center" valign="middle" class="on_page_title">' +
        '           <img src="' +path + '">' +
        '       </td>' +
        '   </tr>' +
        '</table>';

     document.getElementById(el).innerHTML = html;
}