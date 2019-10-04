function prv_image()
{
	var prv_value = getcookie('prv_value');

	if (prv_value != 'null')
	{
	  document.prv_image.src = value[prv_value]["prv_image"];
	}

	if (prv_value.length == 0) 
	{
	  document.prv_image.src = "./img/ui/null.gif";

	}
}
