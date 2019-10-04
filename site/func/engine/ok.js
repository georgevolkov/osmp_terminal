function ok() {

	var tmp = document.cookie;

	var tmp2 = tmp.split("; ");

	for (var i = 0; i < tmp2.length; i++){

		var j = tmp2[i].split("=");

		if(j[0]=="Phone_Number")	ff.phoneNumber.value=j[1];

		if(j[0]=="Phone_Number2")	ff.phoneNumber.value+=j[1];

		if(j[0]=="Sum")			ff.Sum.value=j[1];

		if(j[0]=="provider")		type_provider=j[1];

	}

	return true;

}
