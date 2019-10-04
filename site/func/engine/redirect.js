var q2MediaServices = [9336, 9337, 9338, 9339, 9342, 9343, 9344, 9345, 9347, 9348, 9350, 9351, 9352, 9354, 9355, 9356, 9362,
    9365, 9367, 9370, 9371, 9373, 9376, 9378, 9379, 9385, 9386];

function elementExists(arr, elem) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == elem) return true;
    return false;
}

function redirect(prv_value,account,form_account,prv_folder) {    
    if(prv_value==0)
    {
        document.cookie="prv_folder="+prv_folder;
        parent.location = "./pages.html";
        return;
    }

    try {
        if (form_account=='')
        {
            form_account=getcookie("Phone_Number");
            beval = getcookie("bevalValue");
        }
    }
    catch (e) {}
	
    try { var prv_folder = value[prv_value]["prv_folder"]; } catch(e){ prv_folder = ''; }
    try { var prv_alert = value[prv_value]["prv_alert"]; } catch(e){ prv_alert = '';}
    try { var prv_image = value[prv_value]["prv_image"]; } catch(e){ prv_image = ''; }
    try { var prv_id = value[prv_value]["prv_id"]; } catch(e){ prv_id = ''; }
    try { var prv_name = value[prv_value]["prv_name"]; } catch(e){ prv_name = ''; }
    try { var prv_invitation = value[prv_value]["prv_invitation"]; } catch(e){ prv_invitation = ''; }
    try { var prv_group = value[prv_value]["prv_group"]; } catch(e){ prv_group = ''; }
    try { var prv_mask = value[prv_value]["prv_mask"]; } catch(e){ prv_mask = ''; }
    try { var prv_online_check = value[prv_value]["prv_online_check"]; } catch(e){ prv_online_check = ''; }
    try { var prv_rec_msg = value[prv_value]["prv_receipt_extra_message"]; } catch(e){ prv_rec_msg = ''; }
    try { var prv_tag = value[prv_value]["tag"]; } catch(e) { prv_tag = ''; }

    if (prv_id == 0) return;

	if (prv_alert == '') prv_alert='null';

    prv_params = (value[prv_value] && value[prv_value]["prv_eparams"]) ? value[prv_value]["prv_eparams"] : '';
    
    var needOnlineAuth = false;

    var sLocale = getcookie('locale');

    if (elementExists(q2MediaServices, prv_id))
        prv_id = "9031";

    document.cookie="Phone_Number="+form_account;
    document.cookie="prv_folder="+prv_folder;
    document.cookie="prv_value="+prv_value;		
    document.cookie="prv_alert="+prv_alert;
    document.cookie="prv_image="+prv_image;
    document.cookie="prv_id="+ prv_id;    
    document.cookie="prv_mask="+ prv_mask;
    document.cookie="prv_receipt_extra_message="+ prv_rec_msg;
    document.cookie="prv_name="+ prv_name;//getProviderText(prv_value, sLocale);    
    storage.put("prv_invitation", prv_invitation, true);
    storage.put("prv_group", prv_group, true);
    storage.put("prv_online_check", prv_online_check, true);

    if (!$isNoU(prv_tag))
        storage.put("prv_tag", prv_tag.serialize());

	storage.put("provider", prv_id)
	document.cookie="provider="+ prv_id;        

    ff.prv_id.value = prv_id;
    ff.prv_name.value = prv_name;
    ff.EmbedParams.value = prv_params;
    ff.Language.value = convertToMaratlLanguage(sLocale);
	
    if (account!='')
    {
        try
        {
            ff.getAccountNumber.value = account;
        } catch (e)
        {
            document.getElementById('hiddens').innerHTML = '<input type="hidden" name="getAccountNumber" value="'+account+'">';
        };
    }
    else
    {
        try
        {
            if (authOnlineCellular==true)
            {
                needOnlineAuth = true;
            }
        }
        catch(e)
        {
            // may be authOnlineCellular does not exists. when so - do nothing
        }
    }
        
    var advert = new AdvertClass();
    try
    {
        ff._receipt_prt_top_reklama.value = advert.getadvcontent('receipt_header_text');
        ff._receipt_prt_bottom_reklama.value = advert.getadvcontent('receipt_footer_text');

    } 
    catch(e)
    {
        var hid = document.getElementById('hiddens');
                
        hid.innerHTML += 
            '<input type="hidden" name="_receipt_prt_top_reklama" value="' + advert.getadvcontent('receipt_header_text')+ '">'+
            '<input type="hidden" name="_receipt_prt_bottom_reklama" value="' + advert.getadvcontent('receipt_footer_text') + '">';
    };

    document.ff.action = value[prv_value]["prv_page"];    
    ff.submit();
    return;
}

