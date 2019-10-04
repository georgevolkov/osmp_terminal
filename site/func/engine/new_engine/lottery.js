var sLocale = "ru_ru";
var lineOne = 0;
var lineTwo = 0;
var lineThree = 0;
var totalLine = 0;
var total = 0;
var numberCountTrue = false;
var acc = "";

function init() {

	new CInnerShadow($('btn_left').getElementsByTagName('img')[0], { color: 30 });
	new CInnerShadow($('btn_center').getElementsByTagName('img')[0], { saturation: 1, brightness: 200 });
	new CInnerShadow($('btn_right').getElementsByTagName('img')[0], { color: 30 });	
	
	processTranslate();
	document.getElementById("btn_right").style.display = "none";
	writeTable();			
}

function storRead(acc, numId){
	storage.put(numId, acc);
	readTable();
}

function writeTable(){ 
	var oNumbersInfo = Object.deserialize(storage.get("pay_info"));	
	var elemPos = storage.get("loto_button_press");	
	activeWeek(storage.get("PrvWeekId"));	
	if (oNumbersInfo.account != null){
	switch (elemPos) {
		case "td1" :
			storRead(oNumbersInfo.account, "td1");			
			break;
		case "td2" :
			storRead(oNumbersInfo.account, "td2");
			break;
		case "td3" :
			storRead(oNumbersInfo.account, "td3");
			break;
		case "td4" :
			storRead(oNumbersInfo.account, "td4");
			break;		
		case "td5" :
			storRead(oNumbersInfo.account, "td5");
			break;		
		case "td6" :
			storRead(oNumbersInfo.account, "td6");
			break;		
		case "td7" :
			storRead(oNumbersInfo.account, "td7");
			break;		
		case "td8" :
			storRead(oNumbersInfo.account, "td8");
			break;		
		case "td9" :
			storRead(oNumbersInfo.account, "td9");
			break;		
		case "td10" :
			storRead(oNumbersInfo.account, "td10");
			break;	
		case "td11" :
			storRead(oNumbersInfo.account, "td11");
			break;
		case "td12" :
			storRead(oNumbersInfo.account, "td12");
			break;
		case "td13" :
			storRead(oNumbersInfo.account, "td13");
			break;
		case "td14" :
			storRead(oNumbersInfo.account, "td14");
			break;
		case "td15" :
			storRead(oNumbersInfo.account, "td15");
			break;			
	}		
	}	
}

function readTable(){
	if (storage.get("td1") != null) 
		{ document.getElementById("td1").innerHTML = storage.get("td1"); lineOne = 50; count1 = 1;} else
		{ document.getElementById("td1").innerHTML = ""; count1 = 0;};
	if (storage.get("td2") != null) 
		{ document.getElementById("td2").innerHTML = storage.get("td2"); lineOne = 50; count2 = 1;} else
		{ document.getElementById("td2").innerHTML = ""; count2 = 0;};
	if (storage.get("td3") != null) 
		{ document.getElementById("td3").innerHTML = storage.get("td3"); lineOne = 50; count3 = 1;} else
		{ document.getElementById("td3").innerHTML = ""; count3 = 0;};
	if (storage.get("td4") != null) 
		{ document.getElementById("td4").innerHTML = storage.get("td4"); lineOne = 50; count4 = 1;} else
		{ document.getElementById("td4").innerHTML = ""; count4 = 0;};
	if (storage.get("td5") != null) 
		{ document.getElementById("td5").innerHTML = storage.get("td5"); lineOne = 50; count5 = 1;} else
		{ document.getElementById("td5").innerHTML = ""; count5 = 0;};
	if (storage.get("td6") != null) 
		{ document.getElementById("td6").innerHTML = storage.get("td6"); lineTwo = 50; count6 = 1;} else
		{ document.getElementById("td6").innerHTML = ""; count6 = 0;};
	if (storage.get("td7") != null) 
		{ document.getElementById("td7").innerHTML = storage.get("td7"); lineTwo = 50; count7 = 1;} else
		{ document.getElementById("td7").innerHTML = ""; count7 = 0;};
	if (storage.get("td8")  != null) 
		{ document.getElementById("td8").innerHTML = storage.get("td8"); lineTwo = 50; count8 = 1;} else
		{ document.getElementById("td8").innerHTML = ""; count8 = 0;};
	if (storage.get("td9")  != null) 
		{ document.getElementById("td9").innerHTML = storage.get("td9"); lineTwo = 50; count9 = 1;} else
		{ document.getElementById("td9").innerHTML = ""; count9 = 0;};
	if (storage.get("td10")  != null) 
		{ document.getElementById("td10").innerHTML = storage.get("td10"); lineTwo = 50; count10 = 1;} else
		{ document.getElementById("td10").innerHTML = ""; count10 = 0;};
	if (storage.get("td11")  != null) 
		{ document.getElementById("td11").innerHTML = storage.get("td11"); lineThree = 50; count11 = 1;} else
		{ document.getElementById("td11").innerHTML = ""; count11 = 0;};
	if (storage.get("td12")  != null) 
		{ document.getElementById("td12").innerHTML = storage.get("td12"); lineThree = 50; count12 = 1;} else
		{ document.getElementById("td12").innerHTML = ""; count12 = 0;};
	if (storage.get("td13")  != null) 
		{ document.getElementById("td13").innerHTML = storage.get("td13"); lineThree = 50; count13 = 1;} else
		{ document.getElementById("td13").innerHTML = ""; count13 = 0;};
	if (storage.get("td14")  != null) 
		{ document.getElementById("td14").innerHTML = storage.get("td14"); lineThree = 50; count14 = 1;} else
		{ document.getElementById("td14").innerHTML = ""; count14 = 0;};
	if (storage.get("td15")  != null) 
		{ document.getElementById("td15").innerHTML = storage.get("td15"); lineThree = 50; count15 = 1;} else
		{ document.getElementById("td15").innerHTML = ""; count15 = 0;};
	
	numCountLine1 = count1 + count2 + count3 + count4 + count5;
	numCountLine2 = count6 + count7 + count8 + count9 + count10;
	numCountLine3 = count11 + count12 + count13 + count14 + count15;
	numberCount(numCountLine1, numCountLine2, numCountLine3);
	
	var ist1 = duplicate(storage.get("td1"),storage.get("td2"),storage.get("td3"),storage.get("td4"),storage.get("td5"), "td1", "td2", "td3", "td4", "td5");
	var ist2 = duplicate(storage.get("td6"),storage.get("td7"),storage.get("td8"),storage.get("td9"),storage.get("td10"), "td6", "td7", "td8", "td9", "td10");
	var ist3 = duplicate(storage.get("td11"),storage.get("td12"),storage.get("td13"),storage.get("td14"),storage.get("td15"), "td11", "td12", "td13", "td14", "td15");
	
	if (ist1 && ist2 && ist3) document.getElementById("btn_right").style.display = "block";
	
	totalLineAmount(lineOne, lineTwo, lineThree);
}

function duplicate(an1, an2, an3, an4, an5, anid1, anid2, anid3, anid4, anid5){
	var ird = true;	
	if (an1 == an2 && an1 !="" && an1 !=null) ird = errorColor(anid1, anid2);
	if (an1 == an3 && an1 !="" && an1 !=null) ird = errorColor(anid1, anid3);
	if (an1 == an4 && an1 !="" && an1 !=null) ird = errorColor(anid1, anid4);
	if (an1 == an5 && an1 !="" && an1 !=null) ird = errorColor(anid1, anid5);
	if (an2 == an3 && an2 !="" && an2 !=null) ird = errorColor(anid2, anid3);
	if (an2 == an4 && an2 !="" && an2 !=null) ird = errorColor(anid2, anid4);
	if (an2 == an5 && an2 !="" && an2 !=null) ird = errorColor(anid2, anid5);
	if (an3 == an4 && an3 !="" && an3 !=null) ird = errorColor(anid3, anid4);
	if (an3 == an5 && an3 !="" && an3 !=null) ird = errorColor(anid3, anid5);
	if (an4 == an5 && an4 !="" && an4 !=null) ird = errorColor(anid4, anid5);
	return ird;
}

function errorColor(num1, num2){
	document.getElementById(num1).style.color ="red";
	document.getElementById(num2).style.color ="red";
	document.getElementById("btn_right").style.display = "none";
	return false;
}

function numberCount(numClh1, numClh2, numClh3) {	
	if (numClh1 == 5 || numClh2 == 5 || numClh3 == 5) 		
		numberCountTrue = true; 
	else 
		numberCountTrue = false;
		
		if (numberCountTrue) document.getElementById("btn_right").style.display = "block"; else 
							 document.getElementById("btn_right").style.display = "none";
}

function totalLineAmount(line1, line2, line3) {
	totalLine = line1 + line2 + line3;
	totalAmount();
}

function totalAmount() {
	var sumWeek = storage.get("PrvWeekCh");
	total = totalLine * parseInt(sumWeek, 10);
	document.getElementById("totalAmount_text").innerHTML = total + " c";
	if (total == 0) document.getElementById("btn_right").style.display = "none";
}

function processTranslate(sLang) {
	sLocale = getcookie('locale');
	getTextById("button_back", sLocale);
	getTextById("button_forward", sLocale);
	getTextById("button_menu", sLocale);
	getTextById("button_delete", sLocale);
}

function buttonPress(sender) {	
	document.getElementById(sender).className = "updownBtnCl";
	storage.put("loto_button_press", sender);
	setTimeout(function () {
		document.getElementById(sender).className = "enableBtnCl";	
		parent.location = "./loto-cellular.html";
	}, 150);
}

function clBtnCl(line) {
	switch (line) {
		case 1: {
			document.getElementById("cl1").className = "pressCL";										
			storage.put("td1", "");
			storage.put("td2", "");
			storage.put("td3", "");
			storage.put("td4", "");
			storage.put("td5", "");
			setTimeout(function () {	
				document.getElementById("cl1").className = "normCL";
				lineOne = 0;
				readTable();
			}, 150);
			break;
		}
		case 2: {
			document.getElementById("cl2").className = "pressCL";										
			storage.put("td6", "");
			storage.put("td7", "");
			storage.put("td8", "");
			storage.put("td9", "");
			storage.put("td10", "");
			setTimeout(function () {	
				document.getElementById("cl2").className = "normCL";
				lineTwo = 0;
				readTable();
			}, 150);
			break;
		}
		case 3: {
			document.getElementById("cl3").className = "pressCL";										
			storage.put("td11", "");
			storage.put("td12", "");
			storage.put("td13", "");
			storage.put("td14", "");
			storage.put("td15", "");
			setTimeout(function () {	
				document.getElementById("cl3").className = "normCL";
				lineThree = 0;
				readTable();
			}, 150);
			break;
		}
	}
}

function buttonPressWeek(week, ch) {			
	refreshWeeks();
	document.getElementById(week.id).className = "pressedWeek";							
	storage.put("PrvWeekId", week.id);
	storage.put("PrvWeekCh", ch);
	setTimeout(function () {	
		activeWeek(week.id); 	
		totalAmount();
	}, 150);				
}		

function activeWeek(button){
	document.getElementById(button).className = "activeWeek";
}

function refreshWeeks() {
	document.getElementById("wd_1").className = "";
	document.getElementById("wd_2").className = "";
	document.getElementById("wd_3").className = "";
	document.getElementById("wd_4").className = "";
}

function sNull(td) {
	var storageTd = storage.get(td);
	
	if (storageTd == null) 
		return "";
	else 
		return storage.get(td);
}

function onMenuBtnClick(sBtn) {
	switch (sBtn) {
		case "BACKWARD":
			document.location = 'index.html';
			break;
		case "MENU":
			document.location = 'index.html';
			break;
		case "FORWARD":
			storage.put("pay_info", null);	
			
			var minTotalSum = 0;
			var lineOneParsing = sNull("td1")+","+sNull("td2")+","+sNull("td3")+","+sNull("td4")+","+sNull("td5")+";";
			var lineTwoParsing = sNull("td6")+","+sNull("td7")+","+sNull("td8")+","+sNull("td9")+","+sNull("td10")+";";
			var lineThreeParsing = sNull("td11")+","+sNull("td12")+","+sNull("td13")+","+sNull("td14")+","+sNull("td15")+";";			
			
			if (sNull("td1") == "" || sNull("td2") == "" || sNull("td3") == "" || sNull("td4") == "" || sNull("td5") == "") {
				lineOneParsing = ""; lineOne = 0;}
			if (sNull("td6") == "" || sNull("td7") == "" || sNull("td8") == "" || sNull("td9") == "" || sNull("td10") == "") {
				lineTwoParsing = ""; lineTwo = 0;}
			if (sNull("td11") == "" || sNull("td12") == "" || sNull("td13") == "" || sNull("td14") == "" || sNull("td15") == "") {
				lineThreeParsing = "";lineThree = 0;}
			
			totalLineAmount(lineOne, lineTwo, lineThree);
					
			var accountPay = lineOneParsing + lineTwoParsing + lineThreeParsing + storage.get("PrvWeekId").substring(3);
			
			
			var oProvider = {};	
			
			oProvider.prvId = 11255;
			oProvider.prvName = "Супер Лото";
			oProvider.prvLogo = "img/ui_item/lottery.gif";
			oProvider.account = accountPay;
			oProvider.minCashSum = "10";        
			oProvider.minSum = total;
			oProvider.maxSum = "600";        		       		
			
			storage.put("pay_info", oProvider.serialize());			
			storage.put("prv_online_check", true);
			storage.put("locale", sLocale, true);
			
			document.location = "validate_confirm.html";     
			
			break;
	}

}