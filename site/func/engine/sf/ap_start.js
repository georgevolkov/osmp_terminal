// Тащим из куков нужные для нас данные и обозначаем переменные
var prv_value = getcookie('prv_value');
var sPrvId = getcookie("prv_id");
var sPrvName = getcookie("prv_name");
var sPrvLogo = getcookie("prv_image");
var sPrvAlert = getcookie("prv_alert");
var minLength = value[prv_value]["prv_surmask"].split('$')[0];
var maxLength = value[prv_value]["prv_surmask"].split('$')[1];
var sPrvMask = value[prv_value]["prv_surmask"].split('$')[2];
var sForward = value[prv_value]["prv_page_sf_pin"];
var sLocaleLanguage = getcookie('locale');
var typeClient = null;
var client = "";
// Запускается сразу при загрузке старницы
function initPage() {

    //pressSymbol("IP", "sf-b-2");
   
    
    //Заполняем страницу данными
    $('.prv_logo').css("background", "url('./" + sPrvLogo + "') no-repeat");
    $('.prv_name_text').text(sPrvName);
    if (sPrvAlert != 'null') {
        $('.container-alert-text').css("border-left", "1px solid #FF6821");
        $('.alert-text').html(sPrvAlert);
    }
    $('#button_forward').css("display", "none");
    
    // Переводим текст на странице
    //processTranslate();
}


function pressSymbol(key, id) {

    // Добавляем эффект нажатия
    animation(id, 'add');
    
    setTimeout(function () {

        switch (key) {
            // Переход назад
            case "back": { parent.location = "./pages.html"; break; }
            // Переход в главное меню
            case "menu": { parent.location = "./index.html"; break; }
            //Переход на следующую страницу
            case "forward": { putParams(); parent.location = "./num_keyboard.html"; break; }
            //Выбор типа клиента
            default:
                {
                    if (id !== typeClient) {
                        if (typeClient != null) animation(typeClient, 'kill');
                        client = key;
                        typeClient = id;
                        succesType();
                    }
                    break;
                }
        }
    }, 50);
}
function animation(id, stage) {
    if (stage == "add") {
        $("#" + id).addClass('click');
    } else {
        $("#" + id).removeClass('click');
    }
}
function processTranslate() {
    //var s = getcookie("prv_invitation");
    //$(".cellular_title_text").text(getText(s, sLocaleLanguage));
    //getTextById("prov_enter_code", sLocaleLanguage);
}
function succesType() {

    var sTxt = getText("sf_start_page_success", sLocaleLanguage);
    
    $('.result-text').html(sTxt);
    $('.result-text').css('color', 'green');

    $('#button_forward').css("display", "block");
}
function rejectType() {
    $('.result-text').html('');
    $('#button_forward').css("display", "none");
}
function putParams() {
    var cook = new CookieClass();
    cook.setCookie("sf_client_type", client, false);
    cook.setCookie("sf_client_text", $('#' + typeClient).text(), false);
}