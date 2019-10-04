function set_top5(num){

	var ppp = document.getElementById('prov_'+num).value;

	document.cookie="prv_value=" + ppp;

	var prv_value = getcookie('prv_value');

	var folder = value[prv_value]["prv_folder"];

	document.cookie = "prv_folder=" + folder;	

	document.fftop5.prv_id.value = ppp;

	document.fftop5.action = value[prv_value]["prv_page"]

	document.fftop5.submit();

	return true;

}

