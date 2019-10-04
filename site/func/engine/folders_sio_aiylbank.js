var cook = new CookieClass();

var prv_value = getcookie('prv_value');
var sPrvId = getcookie("prv_id");
var sPrvName = getcookie("prv_name");
var sPrvLogo = getcookie("prv_image");
var sPrvAlert = getcookie("prv_alert");
var sLocaleLanguage = getcookie('locale');
var sPrvAccount = cook.getCookie("account_result");
var sPrvAccountString = cook.getCookie("account_input");
var sForward = value[prv_value]["prv_page_conf"];
var typeFolder;
var folders = "";

var tRegionName = "";


function loadPages() {

    // Запрет на выделение текста.
    disableSelection(document.body);

    // создаем размету
    generateFolders("regions");

    // Переводим текст
    processTranslate();

    //Мигалка
    setInterval(changeWarnColor, 1000);

    // Заполняем инфу о провайдере
    $('.prv_logo').css("background", "url('./" + sPrvLogo + "') no-repeat");
    $('.prv_name_text').text(sPrvName);
}

function pressSymbol(key, id) {

    // Добавляем эффект нажатия
    animation(id, 'add');

    setTimeout(function () {

        // Переход назад
        if (key == "back") {
            if (typeFolder == "regions") {
                parent.location = "./num_keyboard.html";
                return;
            }
        }
        // возвращаемся в главное меню
        else if (key == "menu") {
            parent.location = "./index.html";
            return;
        }
        // Строим стурктуру папок
        else {
            tRegionName = id;
            finish();
        }

        // Убираем эффект нажатия
        animation(id, 'kill');
    }, 100);
}

function press(id) {
    pressSymbol(id, id);
}

function animation(id, stage) {
    if (stage == "add") {
        $("#" + id).addClass('click');
    } else {
        $("#" + id).removeClass('click');
    }
}

var changeFlag = false;
function changeWarnColor() {
    if (changeFlag == true) {
        $(".atention").addClass('inverse');
    }
    else {
        $(".atention").removeClass('inverse');
    }
    changeFlag = !changeFlag;
}

function processTranslate(param) {
    if (param == "regions") {
        $(".atention").text(getText("prov_enter_district", sLocaleLanguage));
    }
}

function generateFolders(type) {

    // Выводит области
    if (type == "regions") {
        $('#folders').html(getRegions());
        processTranslate("regions");
        typeFolder = "regions";
    }
}

function getRegions() {
    folders = addFolder("001", "г. Бишкек") +
        addFolder("002", "Чуйская область") +
        addFolder("003", "Ошская область") +
        addFolder("004", "Ыссык-Кульская область") +
        addFolder("005", "Жалал-Абадская область") +
        addFolder("006", "Баткенская область") +
        addFolder("007", "Таласская область") +
        addFolder("008", "Таласская область");
    return folders;
}


function addFolder(id, text) {
    return "<div class='buttom_key' id='" + id + "' onclick='press(this.id)'><p class='buttom_key_name'>" + text + "</p></div>";
}

function iPage(idFolder, styleClass, folders) {
    return "<div id='" + idFolder + "' class='" + styleClass + "'>" + folders + "</div>";
}

function iPageButtom(view, hidden, text) {
    return "<div class='buttom_key color' onclick='iPageClick(\"" + view + "\", \"" + hidden + "\")'><p class='buttom_key_name'>" + text + "</p></div>";
}

function iPageClick(view, hidden) {
    $('#' + view).removeClass('hiddenPage');
    $('#' + hidden).addClass('hiddenPage');
}

function finish() {
    cook.setCookie("tRegion_SIO", tRegionName, false);
    parent.location = sForward;
}