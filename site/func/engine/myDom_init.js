
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

var typeRes = 0;
var nameRes = "";


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
    this.initService = function (prvId) {
        switch (prvId) {
            case 1400:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Кошун");
                nameRes = "ТСЖ Кошун - техническое обслуживание";
                typeRes = 22183;
                $('#button_forward').show();
                break;
            case 1401:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Керимбеков 5");
                nameRes = "ТСЖ Керимбеков 5 - техническое обслуживание";
                typeRes = 22184;
                $('#button_forward').show();
                break;
            case 1402:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Керимбекова");
                nameRes = "ТСЖ Керимбекова - техническое обслуживание";
                typeRes = 22185;
                $('#button_forward').show();
                break;
            case 1403:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Малдыбаева 54");
                nameRes = "ТСЖ Малдыбаева 54 - техническое обслуживание";
                typeRes = 22198;
                $('#button_forward').show();
                break;
            case 1404:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Сары-Челек");
                nameRes = "ТСЖ Сары-Челек - техническое обслуживание";
                typeRes = 22199;
                $('#button_forward').show();
                break;
            case 1405:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Сириус");
                nameRes = "ТСЖ Сириус - техническое обслуживание";
                typeRes = 22202;
                $('#button_forward').show();
                break;
            case 1406:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Салкын");
                nameRes = "ТСЖ Салкын - техническое обслуживание";
                typeRes = 22203;
                $('#button_forward').show();
                break;
            case 1407:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Бристоль");
                nameRes = "ТСЖ Бристоль - техническое обслуживание";
                typeRes = 22204;
                $('#button_forward').show();
                break;
            case 1408:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Парк Сити");
                nameRes = "ТСЖ Парк Сити - техническое обслуживание";
                typeRes = 22207;
                $('#button_forward').show();
                break;
            case 1409:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Ахунбаева 186");
                nameRes = "ТСЖ Ахунбаева 186 - техническое обслуживание";
                typeRes = 22275;
                $('#button_forward').show();
                break;
            case 1412:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Фрунзе 430");
                nameRes = "ТСЖ Фрунзе 430 - техническое обслуживание";
                typeRes = 22278;
                $('#button_forward').show();
                break;
            case 1410:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Бай Коломто");
                nameRes = "ТСЖ Бай Коломто - техническое обслуживание";
                typeRes = 22276;
                $('#button_forward').show();
                break;
            case 1411:
                $('.prv_name_text').text("Mydom.kg - ОсОО ALFA GROUP");
                nameRes = "ОсОО ALFA GROUP - техническое обслуживание";
                typeRes = 22277;
                $('#button_forward').show();
                break;
            case 1413:
                $('.prv_name_text').text("Mydom.kg - ОсОО Солих НУР");
                nameRes = "ОсОО Солих НУР - техническое обслуживание";
                typeRes = 22353;
                $('#button_forward').show();
                break;
            case 1414:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Мега-Асанбай");
                nameRes = "ТСЖ Мега-Асанбай - техническое обслуживание";
                typeRes = 22360;
                $('#button_forward').show();
                break;
            case 1415:
                $('.prv_name_text').text("Mydom.kg - ТСЖ Чолпон-Атинская 2/2");
                nameRes = "ТСЖ Чолпон-Атинская 2/2 - техническое обслуживание";
                typeRes = 22368;
                $('#button_forward').show();
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
    if (inputString.length >= 3)
        sub = inputString.substring(0, 3);

    switch (sub) {
        case "110":
            SeverElectroSvet.initService(1400);
            break;

        case "104":
            SeverElectroSvet.initService(1401);
            break;

        case "114":
            SeverElectroSvet.initService(1402);
            break;

        case "117":
            SeverElectroSvet.initService(1403);
            break;

        case "119":
            SeverElectroSvet.initService(1404);
            break;

        case "121":
            SeverElectroSvet.initService(1405);
            break;

        case "118":
            SeverElectroSvet.initService(1406);
            break;

        case "120":
            SeverElectroSvet.initService(1407);
            break;

        case "109":
            SeverElectroSvet.initService(1408);
            break;

        case "122":
            SeverElectroSvet.initService(1409);
            break;

        case "123":
            SeverElectroSvet.initService(1412);
            break;

        case "124":
            SeverElectroSvet.initService(1410);
            break;

        case "125":
            SeverElectroSvet.initService(1411);
            break;

        case "127":
            SeverElectroSvet.initService(1413);
            break;

        case "129":
            SeverElectroSvet.initService(1414);
            break;

        case "130":
            SeverElectroSvet.initService(1415);
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