
// Тащим из куков нужные для нас данные и обозначаем переменные
var cook = new CookieClass();
var prv_value = getcookie('prv_value');
var sPrvId = getcookie("prv_id");
var sPrvName = getcookie("prv_name");
var sPrvLogo = getcookie("prv_image");
var sPrvAlert = getcookie("prv_alert");
var sForward = value[prv_value]["prv_page_conf"];
var sBackward = value[prv_value]["prv_page_back_num"];
var sLocaleLanguage = getcookie('locale');
var inputString = "";
var arr = new Array();
var otherRegExp = null;

var typeAmountForPay = false;
var typeRes = 1;
var nameRes = "";

function typeAmountForSeverElectro(id) {
    if (id === 0) {
        typeAmountForPay = true;
        $('#getSvet').addClass("active");
        $('#getPeni').removeClass("active");
    } else {
        typeAmountForPay = false;
        $('#getSvet').removeClass("active");
        $('#getPeni').addClass("active");
    }
    testForSEAccount();
}

// Запускается сразу при загрузке старницы
function initPageKeyboard() {

    // Переводим текст на странице
    processTranslate();

   // Запрет на выделение текста.
    disableSelection(document.body);

    //Заполняем страницу данными
    $('.prv_logo').css("background", "url('./" + sPrvLogo + "') no-repeat");
    if (sPrvAlert != 'null') {
        $('.container-alert-text').css("border-left", "1px solid #FF6821");
        $('.alert-text').html(sPrvAlert);
    }
    $('#button_forward').hide();
}

function pressSymbol(key, id) {

    // Добавляем эффект нажатия
    animation(id, 'add');
    setTimeout(function () {
        
        // Переход назад
        if (key == "back") {
            resetParams();
            parent.location = sBackward;
            return;
        }
        //Переход на следующую страницу
        else if (key == "forward") {
            putParams();
            parent.location = sForward;
        }
        // Удаляем последний символ
        else if (key == "kill") {
            if (inputString.length > 0) {
                inputString = inputString.substring(0, inputString.length - 1);
                $('#account_input').val(inputString);
            }
        }
        // пишем в инпут выбранные данные с экрана
        else {
            inputString += key;
            $('#account_input').val(inputString);
        }
        
        testForSEAccount();
        // Убираем эффект нажатия
        animation(id, 'kill');
      
    }, 80);
}

function animation(id, stage) {
    if (stage == "add") {
        $("#" + id).addClass('click');
    } else {
        $("#" + id).removeClass('click');
    }
}

SeverElectroSvet = new function() {
    this.initService = function(prvId) {
        switch (prvId) {
            case 2800:
                $('.prv_name_text').text("Северэлектро - Аламединский РЭС");
                nameRes = "Северэлектро - Аламединский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5170 : 5201; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 2200:
                $('.prv_name_text').text("Северэлектро - Кеминский РЭС");
                nameRes = "Северэлектро - Кеминский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5164 : 5194; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 2113:
                $('.prv_name_text').text("Северэлектро - Чуйский РЭС");
                nameRes = "Северэлектро - Чуйский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5173 : 5204; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 2600:
                $('.prv_name_text').text("Северэлектро - Токмокский РЭС");
                nameRes = "Северэлектро - Токмокский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5168 : 5198; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 2900:
                $('.prv_name_text').text("Северэлектро - Ысыкатинский РЭС");
                nameRes = "Северэлектро - Ысыкатинский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5171 : 5202; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 2400:
                $('.prv_name_text').text("Северэлектро - Кантский РЭС");
                nameRes = "Северэлектро - Кантский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5166 : 5196; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 2110:
                $('.prv_name_text').text("Северэлектро - Сокулукский РЭС");
                nameRes = "Северэлектро - Сокулукский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5172 : 5203; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 2300:
                $('.prv_name_text').text("Северэлектро - Московский РЭС");
                nameRes = "Северэлектро - Московский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5165 : 5195; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 2700:
                $('.prv_name_text').text("Северэлектро - Жайылский РЭС");
                nameRes = "Северэлектро - Жайылский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5169 : 5199; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 2500:
                $('.prv_name_text').text("Северэлектро - Панфиловский РЭС");
                nameRes = "Северэлектро - Панфиловский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5167 : 5197; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 211:
                $('.prv_name_text').text("Северэлектро - Таласский РЭС");
                nameRes = "Северэлектро - Таласский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 15512 : 15551; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 212:
                $('.prv_name_text').text("Северэлектро - Горсеть");
                nameRes = "Северэлектро - Горсеть - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 15511 : 15550; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 213:
                $('.prv_name_text').text("Северэлектро - Манасский РЭС");
                nameRes = "Северэлектро - Манасский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 15515 : 15554; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 214:
                $('.prv_name_text').text("Северэлектро - Бакайатинский РЭС");
                nameRes = "Северэлектро - Бакайатинский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 15513 : 15552; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 215:
                $('.prv_name_text').text("Северэлектро - Карабууринский РЭС");
                nameRes = "Северэлектро - Карабууринский РЭС - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 15514 : 15553; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            case 300:
                $('.prv_name_text').text("Северэлектро - Бишкекский энергосбыт");
                nameRes = "Северэлектро - Бишкекский энергосбыт - " + (typeAmountForPay === true ? "Свет" : "Пеня");
                typeRes = typeAmountForPay === true ? 5174 : 5205; // Тип оплаты (Свет, пеня)
                $('#button_forward').show();
                //$('.container-alert-text').css("border-left", "1px solid #FF6821");
                //$('.alert-text').html(sPrvAlert);
                break;
            default:
                $('.prv_name_text').text("");
                $('#button_forward').hide();
                break;
        }
    };
};

function testForSEAccount() {
    var sub = "";
    if (inputString.length >= 1)
        sub = inputString.substring(0, 2);

    switch (sub) {
        case "34": case "36" : case "37" :
            SeverElectroSvet.initService(2800);
            break;

        case "41":
            SeverElectroSvet.initService(2200);
            break;

        case "42":
            SeverElectroSvet.initService(2113);
            break;

        case "43":
            SeverElectroSvet.initService(2600);
            break;

        case "44":
            SeverElectroSvet.initService(2900);
            break;

        case "45":
            SeverElectroSvet.initService(2400);
            break;

        case "38": case "39": case "40":
            SeverElectroSvet.initService(2110);
            break;

        case "46":
            SeverElectroSvet.initService(2300);
            break;

        case "48": case "49":
            SeverElectroSvet.initService(2700);
            break;

        case "47":
            SeverElectroSvet.initService(2500);
            break;

        case "52":
            SeverElectroSvet.initService(211);
            break;

        case "50":
            SeverElectroSvet.initService(212);
            break;

        case "53":
            SeverElectroSvet.initService(213);
            break;

        case "54":
            SeverElectroSvet.initService(214);
            break;

        case "55":
            SeverElectroSvet.initService(215);
            break;

        case "31": case "32": case "33": case "35": case "66":
            SeverElectroSvet.initService(300);
            break;

        default:
            SeverElectroSvet.initService();
            break;
    }
}

function processTranslate() {
    var s = getcookie("prv_invitation");
    $(".cellular_title_text").text(getText(s, sLocaleLanguage));
    //getTextById("prov_enter_code", sLocaleLanguage);
}

function putParams() {
    var suka = typeRes;
    cook.setCookie("account_result", inputString, false);
    cook.setCookie("name_res", suka + "_" + nameRes, false);
    cook.setCookie("prv_online_check", true, false);
}

function resetParams() {
}