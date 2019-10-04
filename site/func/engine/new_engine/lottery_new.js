var sLocale = "ru_ru";
var count = 1;
var array = [];

function init() {
	new CInnerShadow($('btn_left').getElementsByTagName('img')[0], { color: 30 });
	new CInnerShadow($('btn_center').getElementsByTagName('img')[0], { saturation: 1, brightness: 200 });
	new CInnerShadow($('btn_right').getElementsByTagName('img')[0], { color: 30 });	
	
	processTranslate();
	$("btn_right").style.display = "none";
	$("id_loto_success").style.display = "none";
}

function processTranslate() {
	sLocale = getcookie('locale');
	getTextById("button_back", sLocale);
	getTextById("button_forward", sLocale);
	getTextById("button_menu", sLocale);
	getTextById("id_loto_success", sLocale);
	getTextById("clrBtn", sLocale);
	getTextById("loto_news_line", sLocale);
}

function buttonPress(sender) {
	$(sender).className = "updownBtnCl";
	$(sender).disabled = true;
	$("t"+count).innerHTML=sender.split('d')[1];
	array.push(sender);
	if ((sender.split('d')[1]).length == 1)
		$("t"+count).innerHTML="0"+sender.split('d')[1];
	count++;
	setTimeout(function () {
		$(sender).className = "disabledBtn";
	}, 150);
	if (count>5) allDisabled()
}

function clBtnCl() {
	$("clrBtn").className = "pressCL";
	setTimeout(function () {
	$("clrBtn").className = "normCL";
	}, 150);
	count--;
	if (count != 0) {
		var c = count - 1;
		var pos = array[c];
		$(pos).disabled=false;
		$(pos).className = "enableBtnCl";
		array.splice(c,1);
		$("t"+count).innerHTML = "";
		allEnabled();
	}
	else
	{
		count++;
	}
}

function allDisabled(){
	for (var i = 1; i < 51; i++) {
		$("td"+i).disabled=true;
	}
	$("btn_right").style.display = "";
	$("id_loto_success").style.display = "";
}

function allEnabled(){
	for (var i = 1; i < 51; i++) {
		if ("td"+i != array[0] && "td"+i != array[1] &&
			"td"+i != array[2] && "td"+i != array[3] &&
			"td"+i != array[4])
		$("td"+i).disabled=false;
	}
	$("btn_right").style.display = "none";
	$("id_loto_success").style.display = "none";
}

function onMenuBtnClick(sBtn) {
	switch (sBtn) {
		case "BACKWARD":
			document.location = 'index.html';
			storage.put("pay_info", null);
			break;
		case "MENU":
			document.location = 'index.html';
			storage.put("pay_info", null);
			break;
		case "FORWARD":
			var accountPay = "";
			for (var i = 1; i < 6; i++) {
				accountPay = accountPay + $("t"+i).innerHTML + ",";
			}

			var oProvider = {};
			oProvider.prvId = '11255';
			oProvider.prvName = storage.get("prv_name");
			oProvider.prvLogo = "../"+storage.get("prv_image");
			oProvider.account = accountPay.substring(0,14);
			oProvider.minCashSum = "10";
			oProvider.minSum = "50";
			oProvider.maxSum = "50";

			storage.put("pay_info", oProvider.serialize());
			storage.put("locale", sLocale, true);
			document.location = "lottery_validate_confirm.html";     
			break;
	}

}