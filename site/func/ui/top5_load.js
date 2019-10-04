

var providers = prv_on_first_page;

function top5_loadTopProviderContent(prvIndex) {
    var strImg = "";
    var strProvName = "";
    if (value[prvIndex]["prv_image"] !== undefined && value[prvIndex]["prv_image"] !== null && value[prvIndex]["prv_image"] != '' ) {
        strImg = value[prvIndex]["prv_image"];
    }
    else {
        //strProvName = value[prvIndex]["prv_name"];
        strProvName = getProviderText(prvIndex, sLocale);        
    }
    
    var sContent =
        '<div style="width:100px; height:100px; text-align:center; background-image:url('+strImg+'); background-repeat: no-repeat; position: relative; top: -7px;">'+
            '<table cellpadding="0" cellspacing="0" border="0" width="100%" height="100">'+
                '<tr>'+
                    '<td style="font-family:Arial, FreeSans, Helvetica, Tahoma, sans-serif; font-size:15px; text-transform:uppercase; color:#000;" align="center" valign="middle" width=146 height=74>'+strProvName+
                    '</td>'+
                '</tr>'+
            '</table>'+
        '</div>';
            

    return sContent;
}

function load_top5() {
	var sixthBtn = '';
	var width = '200';
	try 
	{
	    sixthBtn = prv_on_six_button
	}
	catch(e)
	{
	    sixthBtn = '0'
	};
	
	if (value[sixthBtn] && value[sixthBtn]["prv_page"] && value[sixthBtn]["prv_image"])
	    width = '16%';
	
	addExtraPrvToValues();
      	
	var content = '<table style="display:block; background:url(./img/ui/top8_panel.gif) no-repeat; width:100%; height:172px;" cellpadding="0" cellspacing="0" width="100%" border="0" height="172"><tr>';
	
        providers = prv_on_first_page_static.concat(providers);
	for (x=0; x < providers.length; x++)
	{
                //prvIndex = getIndexOfPrv(providers[x]);

                //************* для увеличения быстродействия ***********************
                prvIndex = providers[x];
		try {
                    var a = value[prvIndex]["prv_is_extra"];
		}
		catch (e) {
                    prvIndex = 8888;
		}
                //*******************************************************************
					
		if (value[prvIndex]["prv_is_extra"]==1)
		{
			content +=
			'<td align="center" valign="middle" onclick=redirect("'+prvIndex+'","","",""); width="' + width + '">'+
			'<img src='+value[prvIndex]["prv_top_image"]+' height=100></img><br>'+
			'<font weight=bold>'+value[prvIndex]["prv_name"]+'</font>';
			
		}
		else
		{                    
                    content +=
                    '<td align="center" width="' + width + '">'+
                        '<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">'+
                            '<tr><td align="center" valign="bottom" style="background-image:url(img/ui/grp_panel/bg_tp.gif); background-position:bottom; background-repeat:no-repeat;" onclick=redirect("'+prvIndex+'","","","");>'+
                                top5_loadTopProviderContent(prvIndex) +
                            '</td></tr>'+                                
                            '<tr><td height="40" align="center" valign="top">'+
                                '<span style="overflow:hidden;width:155px; height:40px; font-family:Arial, FreeSans, Helvetica, Tahoma, sans-serif; color:#fff; font-size:15px; text-transform:uppercase;">'+getProviderText(prvIndex, sLocale)/*value[prvIndex]["prv_name"]*/+'</span>'+
                            '</td></tr>'+
                        '</table>'+
                    '</td>';
			
		}
	}
	
	if (value[sixthBtn] && value[sixthBtn]["prv_page"] && value[sixthBtn]["prv_top_image"])
    	content +=
	    '<td align="center" valign="middle" onclick="document.location.href = \'' + value[sixthBtn]["prv_page"] + '\';">'+
	    '<img src='+value[sixthBtn]["prv_top_image"]+'></img></td>';
	
	content += '</tr></table>'

	document.getElementById('top5place').innerHTML=content;
        getTextById("biggest_providers", sLocale);
}


