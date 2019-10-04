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

var tOblast;
var tOblastText = "";
var tRayon;
var tRayonText = "";

function loadPages() {

    // Запрет на выделение текста.
    disableSelection(document.body);

    // создаем размету
    generateFolders("oblast");

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
            if (typeFolder == "oblast") {
                parent.location = "./num_keyboard.html";
                return;
            }
            else if (typeFolder == "rayon") {
                generateFolders("oblast");
            }
        }
            // возвращаемся в главное меню
        else if (key == "menu") {
            parent.location = "./index.html";
            return;
        }
            // Строим стурктуру папок
        else {
            generateFolders(id);
        }

        // Убираем эффект нажатия
        animation(id, 'kill');
    }, 50);
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
    if (param == "oblast") {
        $(".atention").text(getText("prov_enter_district", sLocaleLanguage));
    }
    else if (param == "rayon") {
        $(".atention").text(getText("prov_enter_rayon", sLocaleLanguage));
    }
}

function generateFolders(type) {

    // Выводит области
    if (type == "oblast") {
        $('#folders').html(oblast());
        processTranslate("oblast");
        typeFolder = "oblast";
    }
    else
        // Выводит районы
        if (type.split('_')[1] == "Oblast") {
            tOblast = type;
            tOblastText = $('#' + type).text();
            $('#folders').html(rayon(type.split('_')[0]));
            processTranslate("rayon");
            typeFolder = "rayon";
        }
        else
            // Переходим далее
            if (type.split('_')[1] == "Rayon") {
                tRayon = type;
                tRayonText = $('#' + type).text();
                finish();
            }
}

function oblast() {
    folders =
          addFolder("01_Oblast", "г. Бишкек")
        + addFolder("02_Oblast", "Чуйская область")
        + addFolder("03_Oblast", "Ыссык-Кульская область")
        + addFolder("04_Oblast", "Ошская область")
        + addFolder("05_Oblast", "Нарынская область")
        + addFolder("06_Oblast", "Джалал-Абадская область")
        + addFolder("07_Oblast", "Таласская область")
        + addFolder("08_Oblast", "Баткенская область");
    return folders;
}

function rayon(type) {
    switch (type) {
        case "01": // г. Бишкек
            return addFolder("101_Rayon", "Первомайское РУСФ")
                + addFolder("102_Rayon", "Ленинское РУСФ")
                + addFolder("103_Rayon", "Свердловское РУСФ");
                //+ addFolder("104_Rayon", "Октябрьское РУСФ");
        case "02": // Чуйская область
            return addFolder("201_Rayon", "Аламединское  РУСФ")
                + addFolder("202_Rayon", "Иссык-Атинское РУСФ")
                + addFolder("203_Rayon", "Жайыльское РУСФ")
                + addFolder("205_Rayon", "Кеминское РУСФ")
                + addFolder("206_Rayon", "Московское РУСФ")
                + addFolder("207_Rayon", "Панфиловское РУСФ")
                //+ addFolder("208_Rayon", "Сокулукское РУСФ")
                + addFolder("209_Rayon", "Чуй-Токмокское РУСФ");
        case "03": // Ыссык-Кульская область
            return addFolder("501_Rayon", "Ак-Сууйское РУСФ")
                + addFolder("502_Rayon", "Джети-Огузское РУСФ")
                + addFolder("503_Rayon", "Иссык-Кулькое РУСФ")
                + addFolder("504_Rayon", "Тонское РУСФ")
                + addFolder("505_Rayon", "Тюпское РУСФ")
                + addFolder("550_Rayon", "Каракольское РУСФ")
                + addFolder("551_Rayon", "Балыкчинское РУСФ");
        case "04": // Ошская область
            return addFolder("301_Rayon", "Алайское РУСФ")
                + addFolder("302_Rayon", "Араванское РУСФ")
                + addFolder("304_Rayon", "Кара-Суйское РУСФ")
                + addFolder("306_Rayon", "Ноокатское РУСФ")
                + addFolder("307_Rayon", "Кара-Кульджинское РУСФ")
                + addFolder("308_Rayon", "Узгенское РУСФ")
                + addFolder("310_Rayon", "Чон-Алайское РУСФ")
                + addFolder("350_Rayon", "Ошское РУСФ");
        case "05": // Нарынская область
            return addFolder("601_Rayon", "Ак-Талинское РУСФ")
                + addFolder("602_Rayon", "Ат-Башинское РУСФ")
                + addFolder("603_Rayon", "Жумгальское РУСФ")
                + addFolder("604_Rayon", "Кочкорское РУСФ")
                + addFolder("605_Rayon", "Нарынское РУСФ");
        case "06": // Джалал-Абадская область
            return addFolder("401_Rayon", "Ала-Букинское РУСФ")
                + addFolder("402_Rayon", "Базар-Коргонское РУСФ")
                + addFolder("403_Rayon", "Аксыйское РУСФ")
                + addFolder("404_Rayon", "Ноокенское РУСФ")
                + addFolder("405_Rayon", "Сузакское РУСФ")
                + addFolder("406_Rayon", "Тогуз-Тороузское РУСФ")
                + addFolder("407_Rayon", "Токтогульское РУСФ")
                + addFolder("409_Rayon", "Чаткальское РУСФ")
                + addFolder("450_Rayon", "Жалалабадское РУСФ")
                + addFolder("453_Rayon", "Майлуу-Суйское РУСФ")
                + addFolder("454_Rayon", "Таш-Кумырское РУСФ")
                + addFolder("455_Rayon", "Кара-Кульское РУСФ");
        case "07": // Таласская область
            return addFolder("701_Rayon", "Кара-Бууринское РУСФ")
                + addFolder("702_Rayon", "Бакай-Атинское РУСФ")
                + addFolder("703_Rayon", "Манасское РУСФ")
                + addFolder("704_Rayon", "Таласское РУСФ");
        case "08": // Баткенская область
            return addFolder("801_Rayon", "Лейлекское РУСФ")
                + addFolder("802_Rayon", "Баткенское РУСФ")
                + addFolder("803_Rayon", "Кадамжайское РУСФ")
                + addFolder("851_Rayon", "Сулюктинское РУСФ")
                + addFolder("852_Rayon", "Кызыл-Кийское РУСФ");
    }
    return "";
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
    cook.setCookie("sf_oblast_text", tOblastText, false);

    cook.setCookie("sf_rayon_id", tRayon.split('_')[0], false);
    cook.setCookie("sf_rayon_text", tRayonText, false);
    
    parent.location = sForward;
}