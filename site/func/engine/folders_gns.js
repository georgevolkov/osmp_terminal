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
var tAyil = "EMPTY_0";
var tAyilText = "";


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
            else if (typeFolder == "aimak") {
                generateFolders(tOblast);
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
    if (param == "oblast") {
        $(".atention").text(getText("prov_enter_district", sLocaleLanguage));
    }
    else if (param == "rayon") {
        $(".atention").text(getText("prov_enter_rayon", sLocaleLanguage));
    }
    else if (param == "aimak") {
        $(".atention").text(getText("prov_enter_aimak", sLocaleLanguage));
    }
}

function disableFolders() {
    if (sPrvId == "11140") {
        $("#004_gnsRayon").attr('disabled', 'disabled');
        $("#001_gnsRayon").attr('disabled', 'disabled');
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
        if (type.split('_')[1] == "gnsOblast") {
            tOblast = type;
            tOblastText = $('#' + type).text();
            $('#folders').html(rayon(type.split('_')[0]));
            processTranslate("rayon");
            typeFolder = "rayon";
            disableFolders();
        }
        else
            // Выводит Айыльные Аймаки
            if (type.split('_')[1] == "gnsRayon") {

                tRayon = type;
                tRayonText = $('#' + type).text();
                // Проверяем, есть ли Аймаки для данного района
                if (aimak(type.split('_')[0]) == "Empty") {
                    // Если аймаков нет, запоминаем выбранный район и переходим на след. страницу
                    finish();
                }
                else {
                    // если есть, то рисуем
                    $('#folders').html(aimak(type.split('_')[0]));
                    processTranslate("aimak");
                    typeFolder = "aimak";
                }
            }
            else
                // Аймак это финал, запоминаем выбранный аймак и переходим на след. страницу
                if (type.split('_')[1] == "gnsAimak") {
                    tAyil = type;
                    tAyilText = $('#' + type).text();
                    finish();
                }
    
}

function oblast() {
    folders
        = addFolder("01_gnsOblast", "г. Бишкек")
        + addFolder("02_gnsOblast", "Чуйская область")
        + addFolder("03_gnsOblast", "Ыссык-Кульская область")
        + addFolder("04_gnsOblast", "Ошская область")
        + addFolder("05_gnsOblast", "Нарынская область")
        + addFolder("06_gnsOblast", "Джалал-Абадская область")
        + addFolder("07_gnsOblast", "Таласская область")
        + addFolder("08_gnsOblast", "Баткенская область")
        + addFolder("09_gnsOblast", "г. Ош");
    return folders;
}

function rayon(type) {
    switch (type) {
        case "01":
            return addFolder("001_gnsRayon", "Октябрьский район")
                + addFolder("002_gnsRayon", "Ленинский район")
                + addFolder("003_gnsRayon", "Свердловский район")
                + addFolder("004_gnsRayon", "Первомайский район");
        case "02":
            return addFolder("005_gnsRayon", "Аламудунский район")
                + addFolder("007_gnsRayon", "Кеминский район")
                + addFolder("008_gnsRayon", "Иссык-Атинский район")
                + addFolder("009_gnsRayon", "Жайылский район")
                + addFolder("010_gnsRayon", "Московский район")
                + addFolder("011_gnsRayon", "Панфиловский район")
                + addFolder("012_gnsRayon", "Сокулукский район")
                + addFolder("013_gnsRayon", "Чуйский район")
                + addFolder("058_gnsRayon", "г. Чуй-Токмок");
        case "03":
            return addFolder("014_gnsRayon", "Иссык-Кульский район")
                + addFolder("015_gnsRayon", "Ак-Суйский район")
                + addFolder("016_gnsRayon", "Тонский район")
                + addFolder("017_gnsRayon", "Жети-Огузский район")
                + addFolder("018_gnsRayon", "Тюпский район")
                + addFolder("019_gnsRayon", "г.Каракол")
                + addFolder("020_gnsRayon", "г.Балыкчы");
        case "04":
            return addFolder("021_gnsRayon", "Алайский район")
                + addFolder("022_gnsRayon", "Чон-Алайский район")
                + addFolder("023_gnsRayon", "Араванский район")
                + addFolder("025_gnsRayon", "Кара-Сууйский район")
                + addFolder("027_gnsRayon", "Ноокатский район")
                + addFolder("028_gnsRayon", "Кара-Кульджинский район")
                + addFolder("029_gnsRayon", "Узгенский район");
        case "05":
            return addFolder("034_gnsRayon", "Ак-Талинский район")
                + addFolder("035_gnsRayon", "Ат-Башинский район")
                + addFolder("036_gnsRayon", "Кочкорский район")
                + addFolder("037_gnsRayon", "Жумгальский район")
                + addFolder("038_gnsRayon", "Нарынский район")
                + addFolder("059_gnsRayon", "г. Нарын");
        case "06":
            return addFolder("039_gnsRayon", "Сузакский район")
                + addFolder("040_gnsRayon", "Ноокенский район")
                + addFolder("041_gnsRayon", "Ала-Букинский район")
                + addFolder("042_gnsRayon", "Токтогульский район")
                + addFolder("043_gnsRayon", "Аксыйский район")
                + addFolder("044_gnsRayon", "Тогуз-Тороузский район")
                + addFolder("045_gnsRayon", "Базар-Курганский район")
                + addFolder("047_gnsRayon", "Чаткальский район")
                + addFolder("048_gnsRayon", "г.Джалал-Абад")
                + addFolder("049_gnsRayon", "г.Таш-Кумыр")
                + addFolder("050_gnsRayon", "г.Майлы-Суу")
                + addFolder("052_gnsRayon", "г.Кара-Куль");
        case "07":
            return addFolder("053_gnsRayon", "Таласский район")
                + addFolder("054_gnsRayon", "Бакай-Атинский район")
                + addFolder("055_gnsRayon", "Кара-Буринский район")
                + addFolder("056_gnsRayon", "Манасский район")
                + addFolder("057_gnsRayon", "г.Талас");
        case "08":
            return addFolder("024_gnsRayon", "Баткенский район")
                + addFolder("026_gnsRayon", "Ляйлякский район")
                + addFolder("030_gnsRayon", "Кадамжайский район")
                + addFolder("031_gnsRayon", "г.Кызыл-Кия")
                + addFolder("033_gnsRayon", "г.Сулюкта")
                + addFolder("060_gnsRayon", "г. Баткен");
        case "09":
            return addFolder("032_gnsRayon", "г. Ош");

    }
    return "";
}

function aimak(type) {
    switch (type) {
        case "005":
            return iPage("005_1", "",
                      addFolder("41708203803000_gnsAimak", "Ак-Дебенский айылный аймак")
                    + addFolder("41708203805000_gnsAimak", "Ала-Арчинский айылный аймак")
                    + addFolder("41708203807000_gnsAimak", "Аламудунский айылный аймак")
                    + addFolder("41708203809000_gnsAimak", "Арашанский айылный аймак")
                    + addFolder("41708203814000_gnsAimak", "Васильевский айылный аймак")
                    + addFolder("41708203819000_gnsAimak", "Грозденский айылный аймак")
                    + addFolder("41708203826000_gnsAimak", "Кара-Джыгачский айылный аймак")
                    + addFolder("41708203828000_gnsAimak", "Кек-Джарский айылный аймак")
                    + addFolder("41708203831000_gnsAimak", "Лебединовский айылный аймак")
                    + addFolder("41708203834000_gnsAimak", "Ленинский айылный аймак")
                    + addFolder("41708203838000_gnsAimak", "Маевский айылный аймак")
                    + addFolder("41708203845000_gnsAimak", "Нижнеаларчинский айылный аймак")
                    + addFolder("41708203852000_gnsAimak", "Октябрьский айылный аймак")
                    + addFolder("41708203855000_gnsAimak", "Айылный аймак Байтик")
                    + addFolder("41708203859000_gnsAimak", "Пригородный айылный аймак")
                    + iPageButtom("005_2", "005_1", "Следующая страница"))
                 + iPage("005_2", "hiddenPage",
                      iPageButtom("005_1", "005_2", "Предыдущая страница")
                    + addFolder("41708203864000_gnsAimak", "Таш-Дебенский айылный аймак")
                    + addFolder("41708203866000_gnsAimak", "Таш-Мойнокский айылный аймак"));
        case "007":
            return addFolder("41708213600010_gnsAimak", "Орловка")
                    + addFolder("41708213600020_gnsAimak", "Кемин")
                    + addFolder("41708213530020_gnsAimak", "Бордунский")
                    + addFolder("41708213804000_gnsAimak", "Алмалинский айылный аймак")
                    + addFolder("41708213808000_gnsAimak", "Боролдойский айылный аймак")
                    + addFolder("41708213813000_gnsAimak", "Джаны-Алышский айылный аймак")
                    + addFolder("41708213817000_gnsAimak", "Ильичевский айылный аймак")
                    + addFolder("41708213820000_gnsAimak", "Кара-Булакский айылный аймак")
                    + addFolder("41708213823000_gnsAimak", "Кек-Ойрокский айылный аймак")
                    + addFolder("41708213826000_gnsAimak", "А.Дуйшеевский айылный аймак")
                    + addFolder("41708213830000_gnsAimak", "Кызыл-Октябрьский айылный аймак")
                    + addFolder("41708213839000_gnsAimak", "Чым-Коргонский айылный аймак")
                    + addFolder("41708213842000_gnsAimak", "Чон-Кеминский айылный аймак")
                    + addFolder("41708213845000_gnsAimak", "Ак-Тюзский айылный аймак");
        case "008":
            return iPage("008_1", "",
                      addFolder("41708206600010_gnsAimak", "Кант")
                    + addFolder("41708206803000_gnsAimak", "Ак-Кудукский айылный аймак")
                    + addFolder("41708206810000_gnsAimak", "Бирдикский айылный аймак")
                    + addFolder("41708206812000_gnsAimak", "Ивановский айылный аймак")
                    + addFolder("41708206816000_gnsAimak", "Нурманбетский айылный аймак")
                    + addFolder("41708206818000_gnsAimak", "Джээкский айылный аймак")
                    + addFolder("41708206820000_gnsAimak", "Кен-Булунский айылный аймак")
                    + addFolder("41708206821000_gnsAimak", "Интернациональный айылный аймак")
                    + addFolder("41708206822000_gnsAimak", "Иссык-Атинский айылный аймак")
                    + addFolder("41708206823000_gnsAimak", "Краснореченский айылный аймак")
                    + addFolder("41708206836000_gnsAimak", "Логвиненковский айылный аймак")
                    + addFolder("41708206838000_gnsAimak", "Кочкорбаевский айылный аймак")
                    + addFolder("41708206839000_gnsAimak", "Люксембургский айылный аймак")
                    + addFolder("41708206842000_gnsAimak", "Милянфанский айылный аймак")
                    + addFolder("41708206846000_gnsAimak", "Сын-Ташский айылный аймак")
                    + iPageButtom("008_2", "008_1", "Следующая страница"))
                + iPage("008_2", "hiddenPage",
                      iPageButtom("008_1", "008_2", "Предыдущая страница")
                    + addFolder("41708206848000_gnsAimak", "Новопокровский айылный аймак")
                    + addFolder("41708206852000_gnsAimak", "Юрьевский айылный аймак")
                    + addFolder("41708206870000_gnsAimak", "Тузский айылный аймак")
                    + addFolder("41708206873000_gnsAimak", "Узун-Кырский айылный аймак"));
        case "009":
            return addFolder("41708209600010_gnsAimak", "Кара-Балта")
                    + addFolder("41708209811000_gnsAimak", "Жайылский айылный аймак")
                    + addFolder("41708209812000_gnsAimak", "Кара-Сууский айылный аймак")
                    + addFolder("41708209814000_gnsAimak", "Красновосточный айылный аймак")
                    + addFolder("41708209817000_gnsAimak", "Кызыл-Дыйканский айылный аймак")
                    + addFolder("41708209822000_gnsAimak", "Ак-Башатский айылный аймак")
                    + addFolder("41708209829000_gnsAimak", "Полтавский айылный аймак")
                    + addFolder("41708209830000_gnsAimak", "Суусамырский айылный аймак")
                    + addFolder("41708209838000_gnsAimak", "Сары-Кооский айылный аймак")
                    + addFolder("41708209840000_gnsAimak", "Сары-Булакский айылный аймак")
                    + addFolder("41708209844000_gnsAimak", "Сосновский айылный аймак")
                    + addFolder("41708209848000_gnsAimak", "Степнинский айылный аймак")
                    + addFolder("41708209857000_gnsAimak", "Талды-Булакский айылный аймак");
        case "010":
            return addFolder("41708217804000_gnsAimak", "Ак-Сууский айылный аймак")
                    + addFolder("41708217809000_gnsAimak", "Александровский айылный аймак")
                    + addFolder("41708217811000_gnsAimak", "Беш-Терекский айылный аймак")
                    + addFolder("41708217813000_gnsAimak", "Беловодский айылный аймак")
                    + addFolder("41708217824000_gnsAimak", "Петровский айылный аймак")
                    + addFolder("41708217828000_gnsAimak", "Первомайский айылный аймак")
                    + addFolder("41708217832000_gnsAimak", "Предтеченский айылный аймак")
                    + addFolder("41708217837000_gnsAimak", "Садовский айылный аймак")
                    + addFolder("41708217840000_gnsAimak", "Сретенский айылный аймак")
                    + addFolder("41708217842000_gnsAimak", "Телекский айылный аймак")
                    + addFolder("41708217845000_gnsAimak", "Целинный айылный аймак")
                    + addFolder("41708217849000_gnsAimak", "Чапаевский айылный аймак");
        case "011":
            return addFolder("41708219600010_gnsAimak", "Каинды")
                    + addFolder("41708219811000_gnsAimak", "Вознесеновский айылный аймак")
                    + addFolder("41708219820000_gnsAimak", "Кюрпюльдекский айылный аймак")
                    + addFolder("41708219830000_gnsAimak", "Ортоевский айылный аймак")
                    + addFolder("41708219836000_gnsAimak", "Айылный аймак Курама")
                    + addFolder("41708219849000_gnsAimak", "Фрунзенский айылный аймак")
                    + addFolder("41708219855000_gnsAimak", "Чалдыбарский айылный аймак");
        case "012":
            return iPage("012_1", "", 
                      addFolder("41708222600010_gnsAimak", "Шопоков")
                    + addFolder("41708222805000_gnsAimak", "Ат-Башынский айылный аймак")
                    + addFolder("41708222809000_gnsAimak", "Тош-Булакский айылный аймак")
                    + addFolder("41708222813000_gnsAimak", "Военно-Антоновский айылный аймак")
                    + addFolder("41708222817000_gnsAimak", "Гавриловский айылный аймак")
                    + addFolder("41708222822000_gnsAimak", "Джаны-Джерский айылный аймак")
                    + addFolder("41708222826000_gnsAimak", "Джаны-Пахтинский айылный аймак")
                    + addFolder("41708222828000_gnsAimak", "Камышановский айылный аймак")
                    + addFolder("41708222829000_gnsAimak", "Асылбашский айылный аймак")
                    + addFolder("41708222832000_gnsAimak", "Кунтууский айылный аймак")
                    + addFolder("41708222834000_gnsAimak", "Айылный аймак им Крупской")
                    + addFolder("41708222838000_gnsAimak", "Кызыл-Тууский айылный аймак")
                    + addFolder("41708222846000_gnsAimak", "Нижнечуйский айылный аймак")
                    + addFolder("41708222849000_gnsAimak", "Новопавловский айылный аймак")
                    + addFolder("41708222852000_gnsAimak", "Сазский айылный аймак")
                    + iPageButtom("012_2", "012_1", "Следующая страница"))
                + iPage("012_2", "hiddenPage",
                      iPageButtom("012_1", "012_2", "Предыдущая страница")
                    + addFolder("41708222856000_gnsAimak", "Орокский айылный аймак")
                    + addFolder("41708222860000_gnsAimak", "Первомайский айылный аймак")
                    + addFolder("41708222865000_gnsAimak", "Сокулукский айылный аймак")
                    + addFolder("41708222869000_gnsAimak", "Фрунзенский айылный аймак")
                    + addFolder("41708222872000_gnsAimak", "Айылный аймак им. Кайназаровой"));
        case "013":
            return addFolder("41708223804000_gnsAimak", "Ак-Бешимский айылный аймак")
                + addFolder("41708223809000_gnsAimak", "Буранинский айылный аймак")
                + addFolder("41708223812000_gnsAimak", "Искринский айылный аймак")
                + addFolder("41708223815000_gnsAimak", "Ибраимовский айылный аймак")
                + addFolder("41708223820000_gnsAimak", "Кегетинский айылный аймак")
                + addFolder("41708223825000_gnsAimak", "Кош-Коргонский айылный аймак")
                + addFolder("41708223840000_gnsAimak", "Онбир-Джылгинский айылный аймак")
                + addFolder("41708223845000_gnsAimak", "Сайлыкский айылный аймак")
                + addFolder("41708223863000_gnsAimak", "Чуйский айылный аймак")
                + addFolder("41708223868000_gnsAimak", "Шамшынский айылный аймак");
        case "014":
            return addFolder("41702215600010_gnsAimak", "Чолпон-Ата")
                + addFolder("41702215805000_gnsAimak", "Ананьевский айылный аймак")
                + addFolder("41702215808000_gnsAimak", "Бостеринский айылный аймак")
                + addFolder("41702215810000_gnsAimak", "Айылный аймак Садыр аке")
                + addFolder("41702215815000_gnsAimak", "Кара-Ойский айылный аймак")
                + addFolder("41702215820000_gnsAimak", "Кум-Бельский айылный аймак")
                + addFolder("41702215825000_gnsAimak", "Семеновский айылный аймак")
                + addFolder("41702215830000_gnsAimak", "Тамчынский айылный аймак")
                + addFolder("41702215835000_gnsAimak", "Абдрахмановский айылный аймак")
                + addFolder("41702215840000_gnsAimak", "Темировский айылный аймак")
                + addFolder("41702215845000_gnsAimak", "Тору-Айгырский айылный аймак")
                + addFolder("41702215850000_gnsAimak", "Орюктинский айылный аймак")
                + addFolder("41702215855000_gnsAimak", "Чон-Сары-Ойский айылный аймак");
        case "015":
            return addFolder("41702205805000_gnsAimak", "Ак-Булунский айылный аймак")
                + addFolder("41702205807000_gnsAimak", "Берю-Башский айылный аймак")
                + addFolder("41702205812000_gnsAimak", "Кара-Джалский айылный аймак")
                + addFolder("41702205813000_gnsAimak", "Караколский айылный аймак")
                + addFolder("41702205818000_gnsAimak", "Кереге-Ташский айылный аймак")
                + addFolder("41702205825000_gnsAimak", "Нововознесеновский айылный аймак")
                + addFolder("41702205832000_gnsAimak", "Октябрьский айылный аймак")
                + addFolder("41702205835000_gnsAimak", "Отрадненский айылный аймак")
                + addFolder("41702205840000_gnsAimak", "Ак-Чийский айылный аймак")
                + addFolder("41702205844000_gnsAimak", "Тепкенский айылный аймак")
                + addFolder("41702205848000_gnsAimak", "Теплоключенский айылный аймак")
                + addFolder("41702205850000_gnsAimak", "Челпекский айылный аймак")
                + addFolder("41702205852000_gnsAimak", "Энильчекский айылный аймак")
                + addFolder("41702205855000_gnsAimak", "Жыргаланский айылный аймак");
        case "016":
            return addFolder("41702220805000_gnsAimak", "Ак-Терекский айылный аймак")
                + addFolder("41702220806000_gnsAimak", "Кель-Терский айылный аймак")
                + addFolder("41702220807000_gnsAimak", "Кек-Мойнокский айылный аймак")
                + addFolder("41702220808000_gnsAimak", "Болот Мамбетовский айылный аймак")
                + addFolder("41702220810000_gnsAimak", "Кюн-Чыгышский айылный аймак")
                + addFolder("41702220815000_gnsAimak", "Тонский айылный аймак")
                + addFolder("41702220820000_gnsAimak", "Терт-Кульский айылный аймак")
                + addFolder("41702220825000_gnsAimak", "Улаколский айылный аймак")
                + addFolder("41702220828000_gnsAimak", "Каджи-Сайский айылный аймак");
        case "017":
            return addFolder("41702210805000_gnsAimak", "Ак-Дебенский айылный аймак")
                + addFolder("41702210810000_gnsAimak", "Ак-Шыйракский айылный аймак")
                + addFolder("41702210815000_gnsAimak", "Барскоонский айылный аймак")
                + addFolder("41702210820000_gnsAimak", "Дарканский айылный аймак")
                + addFolder("41702210825000_gnsAimak", "Джаргылчакский айылный аймак")
                + addFolder("41702210830000_gnsAimak", "Джети-Огузский айылный аймак")
                + addFolder("41702210835000_gnsAimak", "Ырдыкский айылный аймак")
                + addFolder("41702210840000_gnsAimak", "Липенский айылный аймак")
                + addFolder("41702210845000_gnsAimak", "Оргочорский айылный аймак")
                + addFolder("41702210850000_gnsAimak", "Кызыл-Сууский айылный аймак")
                + addFolder("41702210855000_gnsAimak", "Алдашевский айылный аймак")
                + addFolder("41702210860000_gnsAimak", "Светлополянский айылный аймак")
                + addFolder("41702210862000_gnsAimak", "Тамгинский айылный аймак");
        case "018":
            return addFolder("41702225810000_gnsAimak", "Аралский айылный аймак")
                + addFolder("41702225815000_gnsAimak", "Иссык-Кельский айылный аймак")
                + addFolder("41702225835000_gnsAimak", "Кутургинский айылный аймак")
                + addFolder("41702225841000_gnsAimak", "Михайловский айылный аймак")
                + addFolder("41702225847000_gnsAimak", "Тогуз-Булакский айылный аймак")
                + addFolder("41702225865000_gnsAimak", "Сан-Ташский айылный аймак")
                + addFolder("41702225870000_gnsAimak", "Сары-Булакский айылный аймак")
                + addFolder("41702225873000_gnsAimak", "Ак-Булунский айылный аймак")
                + addFolder("41702225876000_gnsAimak", "Талды-Сууский айылный аймак")
                + addFolder("41702225883000_gnsAimak", "Карасаевский айылный аймак")
                + addFolder("41702225889000_gnsAimak", "Тюпский айылный аймак")
                + addFolder("41702225893000_gnsAimak", "Чон-Ташский айылный аймак")
                + addFolder("41702225896000_gnsAimak", "Ак-Булакский айылный аймак");
        case "021":
            return addFolder("41706207804000_gnsAimak", "Алайский айылный аймак имени К.Белекбаева")
                + addFolder("41706207809000_gnsAimak", "Будалыкский айылный аймак")
                + addFolder("41706207811000_gnsAimak", "Бюлелинский айылный аймак")
                + addFolder("41706207814000_gnsAimak", "Гульчинский айылный аймак")
                + addFolder("41706207818000_gnsAimak", "Джошолунский айылный аймак")
                + addFolder("41706207822000_gnsAimak", "Конур-Добонский айылный аймак")
                + addFolder("41706207823000_gnsAimak", "Кабылан-Колский айылный аймак")
                + addFolder("41706207825000_gnsAimak", "Корульский айылный аймак")
                + addFolder("41706207830000_gnsAimak", "Ленинский айылный аймак")
                + addFolder("41706207838000_gnsAimak", "Талды-Сууский айылный аймак")
                + addFolder("41706207839000_gnsAimak", "Сары-Моголский айылный аймак")
                + addFolder("41706207840000_gnsAimak", "Уч-Дебенский айылный аймак")
                + addFolder("41706207841000_gnsAimak", "Жаны-Алайский айылный аймак")
                + addFolder("41706207844000_gnsAimak", "Сары-Ташский айылный аймак");
        case "022":
            return addFolder("41706259816000_gnsAimak", "Жекендинский айылный аймак")
                + addFolder("41706259824000_gnsAimak", "Кашка-Сууский айылный аймак")
                + addFolder("41706259851000_gnsAimak", "Чон-Алайский айылный аймак");
        case "023":
            return addFolder("41706211807000_gnsAimak", "Алля Анаровский айылный аймак")
                + addFolder("41706211809000_gnsAimak", "С.Юсуповский айылный аймак")
                + addFolder("41706211812000_gnsAimak", "Мангытский айылный аймак")
                + addFolder("41706211815000_gnsAimak", "Керме-Тооский айылный аймак")
                + addFolder("41706211823000_gnsAimak", "Тепе-Коргонский айылный аймак")
                + addFolder("41706211824000_gnsAimak", "Нурабадский айылный аймак")
                + addFolder("41706211829000_gnsAimak", "Тео-Моюнский айылный аймак")
                + addFolder("41706211835000_gnsAimak", "Чек-Абадский айылный аймак");
        case "024":
            return addFolder("41705214812000_gnsAimak", "Дарыинский айылный аймак")
                + addFolder("41705214814000_gnsAimak", "Терт-Гюльский айылный аймак")
                + addFolder("41705214823000_gnsAimak", "Кара-Бакский айылный аймак")
                + addFolder("41705214824000_gnsAimak", "Кара-Булакский айылный аймак")
                + addFolder("41705214835000_gnsAimak", "Кыштутский айылный аймак")
                + addFolder("41705214846000_gnsAimak", "Самаркандекский айылный аймак")
                + addFolder("41705214848000_gnsAimak", "Ак-Сайский айылный аймак")
                + addFolder("41705214849000_gnsAimak", "Ак-Татырский айылный аймак")
                + addFolder("41705214852000_gnsAimak", "Суу-Башынский айылный аймак");
        case "025":
            return iPage("025_1", "",
                      addFolder("41706226600010_gnsAimak", "Кара-Суу")
                    + addFolder("41706226804000_gnsAimak", "Ак-Ташский айылный аймак")
                    + addFolder("41706226806000_gnsAimak", "Джаны-Арыкский айылный аймак")
                    + addFolder("41706226807000_gnsAimak", "Жоошский айылный аймак")
                    + addFolder("41706226812000_gnsAimak", "Катта-Талдыкский айылный аймак")
                    + addFolder("41706226816000_gnsAimak", "Кашгар-Кыштакский айылный аймак")
                    + addFolder("41706226819000_gnsAimak", "Кызыл-Кыштакский айылный аймак")
                    + addFolder("41706226822000_gnsAimak", "Кызыл-Сууский айылный аймак")
                    + addFolder("41706226826000_gnsAimak", "Мадынский айылный аймак")
                    + addFolder("41706226830000_gnsAimak", "Наримановский айылный аймак")
                    + addFolder("41706226838000_gnsAimak", "Отуз-Адырский айылный аймак")
                    + addFolder("41706226840000_gnsAimak", "Сары-Колотский айылный аймак")
                    + addFolder("41706226842000_gnsAimak", "Папанский айылный аймак")
                    + addFolder("41706226850000_gnsAimak", "Савайский айылный аймак")
                    + addFolder("41706226854000_gnsAimak", "Сарайский айылный аймак")
                    + iPageButtom("025_2", "025_1", "Следующая страница"))
                + iPage("025_2", "hiddenPage",
                      iPageButtom("025_1", "025_2", "Предыдущая страница")
                    + addFolder("41706226862000_gnsAimak", "Телейкенский айылный аймак")
                    + addFolder("41706226868000_gnsAimak", "Шаркский айылный аймак"));
        case "026":
                return addFolder("41705236610010_gnsAimak", "Исфана")
                    + addFolder("41705236802000_gnsAimak", "Ак-Сууский айылный аймак")
                    + addFolder("41705236804000_gnsAimak", "Бешкентский айылный аймак")
                    + addFolder("41705236806000_gnsAimak", "Маргунский айылный аймак")
                    + addFolder("41705236808000_gnsAimak", "Джаны-Джерский айылный аймак")
                    + addFolder("41705236816000_gnsAimak", "Лейлекский айылный аймак")
                    + addFolder("41705236818000_gnsAimak", "Катранский айылный аймак")
                    + addFolder("41705236825000_gnsAimak", "Кулундинский айылный аймак")
                    + addFolder("41705236836000_gnsAimak", "Сумбулинский айылный аймак")
                    + addFolder("41705236842000_gnsAimak", "Тогуз-Булакский айылный аймак");
        case "027":
            return iPage("027_1", "",
                      addFolder("41706242600010_gnsAimak", "Ноокат")
                    + addFolder("41706242808000_gnsAimak", "Бельский айылный аймак")
                    + addFolder("41706242811000_gnsAimak", "Гюльстанский айылный аймак")
                    + addFolder("41706242812000_gnsAimak", "Кара-Ташский айылный аймак")
                    + addFolder("41706242813000_gnsAimak", "Кулатовский айылный аймак")
                    + addFolder("41706242814000_gnsAimak", "Джаны-Ноокатский айылный аймак")
                    + addFolder("41706242825000_gnsAimak", "Кенешский айылный аймак")
                    + addFolder("41706242829000_gnsAimak", "Кыргыз-Атинский айылный аймак")
                    + addFolder("41706242832000_gnsAimak", "Айылный аймак им. Токтомата Зулпуева")
                    + addFolder("41706242836000_gnsAimak", "Исановский айылный аймак")
                    + addFolder("41706242838000_gnsAimak", "Кок-Бельский айылный аймак")
                    + addFolder("41706242839000_gnsAimak", "Кызыл-Октябрьский айылный аймак")
                    + addFolder("41706242845000_gnsAimak", "Он Эки-Бельски айылный аймак")
                    + addFolder("41706242850000_gnsAimak", "Теелес айылный аймак")
                    + addFolder("41706242856000_gnsAimak", "Мирмахмудовский айылный аймак")
                    + iPageButtom("027_2", "027_1", "Следующая страница"))
                + iPage("027_2", "hiddenPage",
                      iPageButtom("027_1", "027_2", "Предыдущая страница")
                    + addFolder("41706242862000_gnsAimak", "Ынтымакский айылный аймак")
                    + addFolder("41706242865000_gnsAimak", "Найманский айылный аймак"));
        case "028":
            return addFolder("41706246804000_gnsAimak", "Алайкууский айылный аймак")
                    + addFolder("41706246812000_gnsAimak", "Капчыгайский айылный аймак")
                    + addFolder("41706246815000_gnsAimak", "Кенешский айылный аймак")
                    + addFolder("41706246816000_gnsAimak", "Карагузский айылный аймак")
                    + addFolder("41706246818000_gnsAimak", "Кара-Кочкорский айылный аймак")
                    + addFolder("41706246820000_gnsAimak", "Кара-Кульджинский айылный аймак")
                    + addFolder("41706246826000_gnsAimak", "Кызыл-Жарский айылный аймак")
                    + addFolder("41706246834000_gnsAimak", "Ылай-Талинский айылный аймак")
                    + addFolder("41706246838000_gnsAimak", "Ой-Талский айылный аймак")
                    + addFolder("41706246849000_gnsAimak", "Сары-Булакский айылный аймак")
                    + addFolder("41706246860000_gnsAimak", "Чалминский айылный аймак")
                    + addFolder("41706246861000_gnsAimak", "Кашка-Жолский айылный аймак");
        case "029":
            return iPage("029_1", "",
                      addFolder("41706255600010_gnsAimak", "Узген")
                    + addFolder("41706255804000_gnsAimak", "Ак-Джарский айылный аймак")
                    + addFolder("41706255808000_gnsAimak", "Баш-Дебенский айылный аймак")
                    + addFolder("41706255813000_gnsAimak", "Джалпак-Ташский айылный аймак")
                    + addFolder("41706255815000_gnsAimak", "Джыландынский айылный аймак")
                    + addFolder("41706255817000_gnsAimak", "Ден-Булакский айылный аймак")
                    + addFolder("41706255822000_gnsAimak", "Заргерский айылный аймак")
                    + addFolder("41706255824000_gnsAimak", "Жазыский айылный аймак")
                    + addFolder("41706255826000_gnsAimak", "Ийри-Сууский айылный аймак")
                    + addFolder("41706255828000_gnsAimak", "Чангетский айылный аймак")
                    + addFolder("41706255830000_gnsAimak", "Кара-Ташский айылный аймак")
                    + addFolder("41706255832000_gnsAimak", "Кароолский айылный аймак")
                    + addFolder("41706255840000_gnsAimak", "Кельдюкский айылный аймак")
                    + addFolder("41706255844000_gnsAimak", "Кызыл-Октябрьский айылный аймак")
                    + addFolder("41706255847000_gnsAimak", "Кызыл-Тооский айылный аймак")
                    + iPageButtom("029_2", "029_1", "Следующая страница"))
                + iPage("029_2", "hiddenPage",
                      iPageButtom("029_1", "029_2", "Предыдущая страница")
                    + addFolder("41706255853000_gnsAimak", "Куршабский айылный аймак")
                    + addFolder("41706255859000_gnsAimak", "Мырза-Акинский айылный аймак")
                    + addFolder("41706255860000_gnsAimak", "Алтын-Булакский айылный аймак")
                    + addFolder("41706255865000_gnsAimak", "Саламаликский айылный аймак")
                    + addFolder("41706255876000_gnsAimak", "Терт-Кельский айылный аймак"));
        case "030":
            return addFolder("41705258600010_gnsAimak", "Айдаркен")
                    + addFolder("41705258610020_gnsAimak", "Кадамжай")
                    + addFolder("41705258804000_gnsAimak", "Ак-Турпакский айылный аймак")
                    + addFolder("41705258808000_gnsAimak", "Алгинский айылный аймак")
                    + addFolder("41705258812000_gnsAimak", "Бирликский айылный аймак")
                    + addFolder("41705258819000_gnsAimak", "Абсамат Мсалиевский айылный аймак")
                    + addFolder("41705258825000_gnsAimak", "Котормоский айылный аймак")
                    + addFolder("41705258830000_gnsAimak", "Майданский айылный аймак")
                    + addFolder("41705258834000_gnsAimak", "Марказский айылный аймак")
                    + addFolder("41705258842000_gnsAimak", "Орозбековский айылный аймак")
                    + addFolder("41705258849000_gnsAimak", "Уч-Коргонский айылный аймак")
                    + addFolder("41705258860000_gnsAimak", "Халмионский айылный аймак")
                    + addFolder("41705258861000_gnsAimak", "Кыргыз-Кыштакский айылный аймак")
                    + addFolder("41705258864000_gnsAimak", "Советский айылный аймак")
                    + addFolder("41705258867000_gnsAimak", "Чаувайский айылный аймак");
        case "034":
            return addFolder("41704210806000_gnsAimak", "Ак-Талский айылный аймак")
                    + addFolder("41704210808000_gnsAimak", "Ак-Чийский айылный аймак")
                    + addFolder("41704210809000_gnsAimak", "Баетовский айылный аймак")
                    + addFolder("41704210811000_gnsAimak", "Терекский айылный аймак")
                    + addFolder("41704210816000_gnsAimak", "Кара-Бюргенский айылный аймак")
                    + addFolder("41704210818000_gnsAimak", "Конорчокский айылный аймак")
                    + addFolder("41704210819000_gnsAimak", "Жерге-Тальский айылный аймак")
                    + addFolder("41704210820000_gnsAimak", "Кош-Дебенский айылный аймак")
                    + addFolder("41704210822000_gnsAimak", "Кызыл-Белесский айылный аймак")
                    + addFolder("41704210825000_gnsAimak", "Джаны-Талапский айылный аймак")
                    + addFolder("41704210828000_gnsAimak", "Тоголок-Молдоский айылный аймак")
                    + addFolder("41704210830000_gnsAimak", "Кек - Джарский айылный аймак")
                    + addFolder("41704210840000_gnsAimak", "Угутский айылный аймак");
        case "035":
            return addFolder("41704220803000_gnsAimak", "Ак-Джарский айылный аймак")
                    + addFolder("41704220806000_gnsAimak", "Ак-Моюнский айылный аймак")
                    + addFolder("41704220807000_gnsAimak", "Ак-Музский айылный аймак")
                    + addFolder("41704220808000_gnsAimak", "Ак-Талинский айылный аймак")
                    + addFolder("41704220812000_gnsAimak", "Ат-Башынский айылный аймак")
                    + addFolder("41704220813000_gnsAimak", "Ача-Каиндинский айылный аймак")
                    + addFolder("41704220817000_gnsAimak", "Баш-Каиндинский айылный аймак")
                    + addFolder("41704220830000_gnsAimak", "Казыбекский айылный аймак")
                    + addFolder("41704220832000_gnsAimak", "Кара-Коюнский айылный аймак")
                    + addFolder("41704220836000_gnsAimak", "Кара-Сууский айылный аймак")
                    + addFolder("41704220845000_gnsAimak", "Талды-Сууский айылный аймак");
        case "036":
            return addFolder("41704235806000_gnsAimak", "Ак-Кыянский айылный аймак")
                    + addFolder("41704235812000_gnsAimak", "Кара-Сууский айылный аймак")
                    + addFolder("41704235816000_gnsAimak", "Кочкорский айылный аймак")
                    + addFolder("41704235819000_gnsAimak", "Кош-Дебенский айылный аймак")
                    + addFolder("41704235825000_gnsAimak", "Кум-Дебенский айылный аймак")
                    + addFolder("41704235830000_gnsAimak", "Сары-Булакский айылный аймак")
                    + addFolder("41704235832000_gnsAimak", "Семиз-Бельский айылный аймак")
                    + addFolder("41704235835000_gnsAimak", "Талаа-Булакский айылный аймак")
                    + addFolder("41704235837000_gnsAimak", "Кок-Жарский айылный аймак")
                    + addFolder("41704235842000_gnsAimak", "Чолпонский айылный аймак")
                    + addFolder("41704235843000_gnsAimak", "Сон-Кульский айылный аймак");
        case "037":
            return addFolder("41704230804000_gnsAimak", "Баш-Куугандынский айылный аймак")
                    + addFolder("41704230806000_gnsAimak", "Джаны-Арыкский айылный аймак")
                    + addFolder("41704230809000_gnsAimak", "Джумгальский айылный аймак")
                    + addFolder("41704230813000_gnsAimak", "Кабакский айылный аймак")
                    + addFolder("41704230815000_gnsAimak", "Кек-Ойский айылный аймак")
                    + addFolder("41704230817000_gnsAimak", "Байзаковский айылный аймак")
                    + addFolder("41704230825000_gnsAimak", "Куйручукский айылный аймак")
                    + addFolder("41704230826000_gnsAimak", "Чон-Добонский айылный аймак")
                    + addFolder("41704230834000_gnsAimak", "Тугол-Сайский айылный аймак")
                    + addFolder("41704230835000_gnsAimak", "Суюмбаевский айылный аймак")
                    + addFolder("41704230836000_gnsAimak", "Чаекский айылный аймак")
                    + addFolder("41704230837000_gnsAimak", "Кызыл-Жылдызский айылный аймак")
                    + addFolder("41704230840000_gnsAimak", "Мин-Кушский айылный аймак");
        case "038":
            return addFolder("41704245806000_gnsAimak", "Ак-Кудукский айылный аймак")
                    + addFolder("41704245812000_gnsAimak", "Дебелинский айылный аймак")
                    + addFolder("41704245815000_gnsAimak", "Джан-Булакский айылный аймак")
                    + addFolder("41704245818000_gnsAimak", "Джергеталский айылный аймак")
                    + addFolder("41704245825000_gnsAimak", "Казан-Куйганский айылный аймак")
                    + addFolder("41704245829000_gnsAimak", "Кара-Куджурский айылный аймак")
                    + addFolder("41704245832000_gnsAimak", "Эмгекчильский айылный аймак")
                    + addFolder("41704245835000_gnsAimak", "Мин-Булакский айылный аймак")
                    + addFolder("41704245840000_gnsAimak", "Он-Арчинский айылный аймак")
                    + addFolder("41704245844000_gnsAimak", "Ортокский айылный аймак")
                    + addFolder("41704245845000_gnsAimak", "Учкунский айылный аймак")
                    + addFolder("41704245850000_gnsAimak", "Чет-Нуринский айылный аймак")
                    + addFolder("41704245855000_gnsAimak", "Эмгек-Талинский айылный аймак")
                    + addFolder("41704245860000_gnsAimak", "Сары-Ойский айылный аймак")
                    + addFolder("41704245863000_gnsAimak", "Достукский айылный аймак");
        case "039":
            return addFolder("41703220400010_gnsAimak", "Кок-Жангак")
                    + addFolder("41703220805000_gnsAimak", "Курманбекский айылный аймак")
                    + addFolder("41703220812000_gnsAimak", "Барпынский айылный аймак")
                    + addFolder("41703220825000_gnsAimak", "Кара-Алминский айылный аймак")
                    + addFolder("41703220828000_gnsAimak", "Кара-Дарыянский айылный аймак")
                    + addFolder("41703220834000_gnsAimak", "Кегартский айылный аймак")
                    + addFolder("41703220838000_gnsAimak", "Кыз-Кельский айылный аймак")
                    + addFolder("41703220842000_gnsAimak", "Кызыл-Тууский айылный аймак")
                    + addFolder("41703220846000_gnsAimak", "Ленинский айылный аймак")
                    + addFolder("41703220851000_gnsAimak", "Багышский айылный аймак")
                    + addFolder("41703220854000_gnsAimak", "Сайпидин-Атабековский айылный аймак")
                    + addFolder("41703220856000_gnsAimak", "Сузакский айылный аймак")
                    + addFolder("41703220863000_gnsAimak", "Таш-Булакский айылный аймак")
                    + addFolder("41703220874000_gnsAimak", "Ырысский айылный аймак");
        case "040":
            return addFolder("41703215600010_gnsAimak", "Кочкор-Ата")
                    + addFolder("41703215804000_gnsAimak", "Аралский айылный аймак")
                    + addFolder("41703215819000_gnsAimak", "Бюргендинский айылный аймак")
                    + addFolder("41703215821000_gnsAimak", "Достукский айылный аймак")
                    + addFolder("41703215836000_gnsAimak", "Массынский айылный аймак")
                    + addFolder("41703215840000_gnsAimak", "Момбековский айылный аймак")
                    + addFolder("41703215846000_gnsAimak", "Ноокатский айылный аймак")
                    + addFolder("41703215851000_gnsAimak", "Сакалдинский айылный аймак")
                    + addFolder("41703215876000_gnsAimak", "Шайданский айылный аймак");
        case "041":
            return addFolder("41703204804000_gnsAimak", "Ак-Коргонский айылный аймак")
                    + addFolder("41703204806000_gnsAimak", "Ак-Тамский айылный аймак")
                    + addFolder("41703204808000_gnsAimak", "Ала-Букинский айылный аймак")
                    + addFolder("41703204827000_gnsAimak", "Кек-Серекский айылный аймак")
                    + addFolder("41703204847000_gnsAimak", "Оруктунский айылный аймак")
                    + addFolder("41703204850000_gnsAimak", "Первомайский айылный аймак")
                    + addFolder("41703204855000_gnsAimak", "Торогелди Балтагуловский айылный аймак")
                    + addFolder("41703204856000_gnsAimak", "Кек-Ташский айылный аймак");
        case "042":
            return addFolder("41703225600010_gnsAimak", "Токтогул")
                    + addFolder("41703225807000_gnsAimak", "Бель-Алдынский айылный аймак")
                    + addFolder("41703225815000_gnsAimak", "Джаны-Джольский айылный аймак")
                    + addFolder("41703225820000_gnsAimak", "Кызыл-Озгорушский айылный аймак")
                    + addFolder("41703225821000_gnsAimak", "Ничке-Сайский айылный аймак")
                    + addFolder("41703225825000_gnsAimak", "Кетмень-Дебенский айылный аймак")
                    + addFolder("41703225835000_gnsAimak", "Сары-Камышский айылный аймак")
                    + addFolder("41703225836000_gnsAimak", "Уч-Терекский айылный аймак")
                    + addFolder("41703225840000_gnsAimak", "Аралбаевский айылный аймак")
                    + addFolder("41703225843000_gnsAimak", "Абды Суеркуловский айылный аймак")
                    + addFolder("41703225853000_gnsAimak", "Чолпон-Атинский айылный аймак");
        case "043":
            return addFolder("41703211610010_gnsAimak", "Кербен")
                    + addFolder("41703211804000_gnsAimak", "Ак-Жолский айылный аймак")
                    + addFolder("41703211808000_gnsAimak", "Авлетимский айылный аймак")
                    + addFolder("41703211813000_gnsAimak", "Джаны-Джольский айылный аймак")
                    + addFolder("41703211824000_gnsAimak", "Ак-Сууский айылный аймак")
                    + addFolder("41703211832000_gnsAimak", "Кара-Жыгачский айылный аймак")
                    + addFolder("41703211836000_gnsAimak", "Кашка-Сууский айылный аймак")
                    + addFolder("41703211842000_gnsAimak", "Мавляновский айылный аймак")
                    + addFolder("41703211849000_gnsAimak", "Кызыл-Тууский айылный аймак")
                    + addFolder("41703211857000_gnsAimak", "Кара-Сууский айылный аймак")
                    + addFolder("41703211860000_gnsAimak", "Джерге-Талский айылный аймак")
                    + addFolder("41703211863000_gnsAimak", "Назаралиевский айылный аймак");
        case "044":
            return addFolder("41703223805000_gnsAimak", "Атайский айылный аймак")
                    + addFolder("41703223806000_gnsAimak", "Кок-Иримский айылный аймак")
                    + addFolder("41703223812000_gnsAimak", "Каргалыкский айылный аймак")
                    + addFolder("41703223820000_gnsAimak", "Сары-Булунский айылный аймак")
                    + addFolder("41703223825000_gnsAimak", "Тогуз-Тороуский айылный аймак");
        case "045":
            return addFolder("41703207808000_gnsAimak", "Акманский айылный аймак")
                    + addFolder("41703207812000_gnsAimak", "Базар-Коргонский айылный аймак")
                    + addFolder("41703207815000_gnsAimak", "Бешик-Жонский айылный аймак")
                    + addFolder("41703207826000_gnsAimak", "Арстанбапский айылный аймак")
                    + addFolder("41703207832000_gnsAimak", "Кызыл-Ункюрский айылный аймак")
                    + addFolder("41703207842000_gnsAimak", "Моголский айылный аймак")
                    + addFolder("41703207856000_gnsAimak", "Сайдыкумский айылный аймак")
                    + addFolder("41703207857000_gnsAimak", "Талдуу-Булакский айылный аймак")
                    + addFolder("41703207859000_gnsAimak", "Кенешский айылный аймак");
        case "047":
            return addFolder("41703230822000_gnsAimak", "Каныш-Кыянский айылный аймак")
                    + addFolder("41703230841000_gnsAimak", "Чаткальский айылный аймак")
                    + addFolder("41703230844000_gnsAimak", "Сумсарский айылный аймак")
                    + addFolder("41703230847000_gnsAimak", "Терек-Сайский айылный аймак");
        case "053":
            return addFolder("41707232804000_gnsAimak", "Аралский айылный аймак")
                    + addFolder("41707232810000_gnsAimak", "Джергеталский айылный аймак")
                    + addFolder("41707232813000_gnsAimak", "Долонский айылный аймак")
                    + addFolder("41707232820000_gnsAimak", "Кок-Ойский айылный аймак")
                    + addFolder("41707232825000_gnsAimak", "Бекмолдоевский айылный аймак")
                    + addFolder("41707232829000_gnsAimak", "Айдаралиевский айылный аймак")
                    + addFolder("41707232832000_gnsAimak", "Нуржановский айылный аймак")
                    + addFolder("41707232843000_gnsAimak", "Айылный аймак Бердике Баатыра")
                    + addFolder("41707232847000_gnsAimak", "Осмонкуловский айылный аймак")
                    + addFolder("41707232859000_gnsAimak", "Омуралиевский айылный аймак")
                    + addFolder("41707232860000_gnsAimak", "Куугандинский айылный аймак")
                    + addFolder("41707232861000_gnsAimak", "Кара-Суйский айылный аймак")
                    + addFolder("41707232862000_gnsAimak", "Калбинский айылный аймак");
        case "054":
            return addFolder("41707220808000_gnsAimak", "Шадыканский айылный аймак")
                    + addFolder("41707220823000_gnsAimak", "Боо-Терекский айылный аймак")
                    + addFolder("41707220826000_gnsAimak", "Акназаровский айылный аймак")
                    + addFolder("41707220828000_gnsAimak", "Кен-Аралский айылный аймак")
                    + addFolder("41707220830000_gnsAimak", "Ленинпольский айылный аймак")
                    + addFolder("41707220833000_gnsAimak", "Мин-Булакский айылный аймак")
                    + addFolder("41707220835000_gnsAimak", "Озгерюшский айылный аймак")
                    + addFolder("41707220840000_gnsAimak", "Ак-Дебенский айылный аймак")
                    + addFolder("41707220843000_gnsAimak", "Ороский айылный аймак");
        case "055":
            return addFolder("41707215804000_gnsAimak", "Ак-Чийский айылный аймак")
                    + addFolder("41707215805000_gnsAimak", "Бейшекенский айылный аймак")
                    + addFolder("41707215806000_gnsAimak", "Бакыянский айылный аймак")
                    + addFolder("41707215807000_gnsAimak", "Аманбаевский айылный аймак")
                    + addFolder("41707215815000_gnsAimak", "Бакайырский айылный аймак")
                    + addFolder("41707215818000_gnsAimak", "Кара-Бууринский айылный аймак")
                    + addFolder("41707215821000_gnsAimak", "Кек-Сайский айылный аймак")
                    + addFolder("41707215840000_gnsAimak", "Чолпонбайский айылный аймак")
                    + addFolder("41707215843000_gnsAimak", "Шекерский айылный аймак")
                    + addFolder("41707215846000_gnsAimak", "Маймакский айылный аймак");
        case "056":
            return addFolder("41707225818000_gnsAimak", "Каиндинский айылный аймак")
                    + addFolder("41707225820000_gnsAimak", "Киргизия айылный аймак")
                    + addFolder("41707225826000_gnsAimak", "Майский айылный аймак")
                    + addFolder("41707225833000_gnsAimak", "Покровский айылный аймак")
                    + addFolder("41707225845000_gnsAimak", "Уч-Коргонский айылный аймак");

            // Если аймаков нет, вернем пустоту
        default :
            return "Empty";
    }
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
   
    cook.setCookie("tOblast_GNS", tOblast.split('_')[0], false);
    cook.setCookie("tRayon_GNS", tRayon.split('_')[0], false);
    cook.setCookie("tAyil_GNS", tAyil.split('_')[0], false);

    cook.setCookie("tOblastText_GNS", tOblastText, false);
    cook.setCookie("tRayonText_GNS", tRayonText, false);
    cook.setCookie("tAyilText_GNS", tAyilText, false);

    if (sPrvId == "11144") {
        cook.setCookie("prv_invitation", "prov_enter_gosnumber", false);
        sForward = "./anykey_keyboard_gns.html";
    }
    
    parent.location = sForward;
}