// Тащим из куков нужные для нас данные и обозначаем переменные
var prv_value = getcookie('prv_value');
var sPrvId = getcookie("prv_id");
var sPrvName = getcookie("prv_name");
var sPrvLogo = getcookie("prv_image");
var sPrvAlert = getcookie("prv_alert");
var sForward = value[prv_value]["prv_page_kbid"];
var sLocaleLanguage = getcookie('locale');
var typeClient = null;
var client = "";

// Запускается сразу при загрузке старницы
function initPage() {

    // Запрет на выделение текста.
    disableSelection(document.body);
    
    //Заполняем страницу данными
    $('.prv_logo').css("background", "url('./" + sPrvLogo + "') no-repeat");
    $('.prv_name_text').text(sPrvName);
    if (sPrvAlert !== 'null') {
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
            case "forward": { putParams(); parent.location = sForward; break; }
            //Выбор типа пакета
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
    if (stage === "add") {
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
    cook.setCookie("kbid_client_type", client, false);
}