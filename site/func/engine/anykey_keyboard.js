
// Тащим из куков нужные для нас данные и обозначаем переменные
var cook = new CookieClass();
var prv_value = getcookie('prv_value');
var sPrvId = getcookie("prv_id");
var sPrvName = getcookie("prv_name");
var sPrvLogo = getcookie("prv_image");
var minLength = value[prv_value]["prv_surmask"].split('$')[0];
var maxLength = value[prv_value]["prv_surmask"].split('$')[1];
var sForward = value[prv_value]["prv_page_conf"];
var sBackward = value[prv_value]["prv_page_back_any"];
var sLocaleLanguage = getcookie('locale');
var inputString = "";
var langKeyboard = value[prv_value]["prv_lang_any_keyboard"];
var typeKeyboard = value[prv_value]["prv_type_any_keyboard"];
var disableKeyword = new Array;
var otherRegExp = null;

// Запускается сразу при загрузке старницы
function initPageKeyboard() {

    // Переводим текст на странице
    processTranslate();

    customOption();

    // Запрет на выделение текста.
    disableSelection(document.body);

    //Заполняем страницу данными
    $('.prv_logo').css("background", "url('./" + sPrvLogo + "') no-repeat");
    $('.prv_name_text').text(sPrvName);
    if (otherRegExp != null)
        testRegExpOther(inputString, otherRegExp);
    else
        testRegExp(inputString);

    // Назначаем отсуп для названия провайдера 
    if (sPrvName.length <= 15) $('.prv_name_text').css("margin-top", "45px");
    else if (sPrvName.length > 15 && sPrvName.length < 35) $('.prv_name_text').css("margin-top", "35px");
    else if (sPrvName.length >= 35) $('.prv_name_text').css("margin-top", "15px");
    
    // Генерируем клавиатуру
    generateKeyboard(langKeyboard, typeKeyboard);
    disableKey();
}

// Тут можно указывать параметры для определенной услуги
function customOption() {
    switch (sPrvId) {
        // ГНС - Оплата налога 4 группы 
        case "11144":
            {
                disableKeyword = ["en_lang", "eb_lang", "en_space", "eb_space"];
                minLength = 6;
                maxLength = 15;
                otherRegExp = "11144_GosNumber";
                break;
            }

        // ЭкоИсламикБанк-первоначальный гарантийный взнос
        case "22053":
            {
                var type = cook.getCookie("prv_type_page");
                if (type == null) type = "1";
                if (type == "2") {
                minLength = 3;
                maxLength = 30;
                sPrvMask = "******************************";
                sPrvAlert = "";
                otherRegExp = "22053_2";
                langKeyboard = "ru";
                $(".cellular_title_text").text(getText("FIO", sLocaleLanguage));
                sBackward = "./num_keyboard.html";
                sForward = "./anykey_keyboard.html";
                }
                if (type == "3") {
                    minLength = 5;
                    maxLength = 19;
                    sPrvMask = "*******************";
                    sPrvAlert = "";
                    otherRegExp = "22053_3";
                    langKeyboard = "en";
                    $(".cellular_title_text").text(getText("dogovor", sLocaleLanguage));
                    sBackward = "./anykey_keyboard.html";
                    sForward = "./eco_validate_confirm.html";
                }
            break;
        }

        // ГАИ
        case "11859":
        {
            var type = cook.getCookie("prv_type_page");
            if (type == null) type = "1";
           
            //Номер нагрудного знака -  Серии
            if (type == "1") {
                minLength = 4; maxLength = 5; otherRegExp = "11859_1"; 
                $(".cellular_title_text").text(getText("validate_ptt_protocol_text", sLocaleLanguage));
                sBackward = "./pages.html";
                sForward = "./anykey_keyboard.html";
            }
            //Номер протокола - Серии
            if (type == "2") {
                minLength = 7; maxLength = 10; otherRegExp = "11859_2";
                $(".cellular_title_text").text(getText("validate_ptt_number_text", sLocaleLanguage));
                sBackward = "./anykey_keyboard.html";
                sForward = "./anykey_keyboard.html";
            }
            //Ф.И.О правонарушителя
            if (type == "4") {
                minLength = 5; maxLength = 50; otherRegExp = "11859_4";
                $(".cellular_title_text").text(getText("validate_ptt_fam_text", sLocaleLanguage));
                sBackward = "./anykey_keyboard.html";
                sForward = "./num_keyboard.html";
            }
            break;
        }
        // NativePay
        case "13915": case "11325": case "6410": case "12463": case "11318":
        case "12457": case "12456": case "6411": case "6412": case "6414":
        case "6413": case "11322": case "12732": case "12733": case "16213":
        case "22015": case "16214": case "16216": case "22016": case "11319":
        case "13914": case "6463": case "12459": case "12458": case "6465":
        case "14255": case "11323": case "13916": case "16210": case "16198":
        case "16199": case "6464": case "22079": case "22080": case "22081":
        case "22082": case "22083": case "22084": case "22085": case "22086":
        case "22087": case "22088": case "22089": case "22090": case "22091":
        case "22092": case "22093": case "22094": case "22096": case "22097":
        case "22098": case "22099": case "22100": case "22101": case "22102":
		case "22115": case "22114": case "22113": case "22112": case "22111":
		case "22110": case "22108": case "6432": case "12734": case "6428": 
		case "6454": case "6430": case "12735": case "6452": case "6419": 
        case "6442": case "6415": case "6459": case "22138": case "22139":
        case "22140": case "22141": case "22142": case "22143": case "22134":
        case "22131": case "22129": case "22130": case "22132": case "22133":
        case "22135": case "22136": case "22137": case "22157":
            {
                var type = cook.getCookie("prv_type_page");
                if (type == null) type = "1";

                if (type == "1") {

                    minLength = 2;
                    maxLength = 30;
                    otherRegExp = sPrvId;
                    sBackward = "./pages.html";
                    sForward = "./anykey_keyboard.html";
                }

                if (type == "2") {
                    minLength = 10;
                    maxLength = 50;
                    otherRegExp = "13915_1";
                    $(".cellular_title_text").text(getText("validate_fio", sLocaleLanguage));
                    sBackward = "./anykey_keyboard.html";
                    sForward = "./num_keyboard.html";

                    if (sPrvId == "12463" || sPrvId == "11318" || sPrvId == "12457" || sPrvId == "12456" ||
                         sPrvId == "6463" || sPrvId == "12459" || sPrvId == "12458" ||
                        sPrvId == "14255" || sPrvId == "11323" || sPrvId == "13916" || sPrvId == "16210" ||
                        sPrvId == "16198" || sPrvId == "16199" || sPrvId == "22079" || sPrvId == "22080" ||
                        sPrvId == "22081" || sPrvId == "22082" || sPrvId == "22083" || sPrvId == "22084" ||
                        sPrvId == "22085" || sPrvId == "22086" || sPrvId == "22087" || sPrvId == "22088" ||
                        sPrvId == "22089" || sPrvId == "22090" || sPrvId == "22091" || sPrvId == "22092" ||
                        sPrvId == "22093" || sPrvId == "22094" || sPrvId == "22096" || sPrvId == "22097" ||
                        sPrvId == "22098" || sPrvId == "22099" || sPrvId == "22100" || sPrvId == "22101" ||
                        sPrvId == "22102" || sPrvId == "22138" || sPrvId == "22139" || sPrvId == "22140" ||
                        sPrvId == "22141" || sPrvId == "22142" || sPrvId == "22143" || sPrvId == "22134" ||
                        sPrvId == "22131" || sPrvId == "22157") {
                        sBackward = "./num_keyboard.html";
                    }
                }
                break;
            }


            // эльпэй
        case "22033":
            {
                var type = cook.getCookie("prv_type_page");
                if (type == null) type = "1";

                if (type == "1") {

                    minLength = 2;
                    maxLength = 30;
                    otherRegExp = sPrvId;
                    sBackward = "./pages.html";
                    sForward = "./anykey_keyboard.html";
                }

                if (type == "2") {
                    minLength = 10;
                    maxLength = 50;
                    otherRegExp = "13915_1";
                    $(".cellular_title_text").text(getText("validate_fio", sLocaleLanguage));
                    sBackward = "./anykey_keyboard.html";
                    sForward = "./num_keyboard.html";

                    if (sPrvId == "22033") {
                        sBackward = "./num_keyboard.html";
                    }
                }
                break;
            }

        case "22161":
            {
                var type = cook.getCookie("prv_type_page");
                if (type == null) type = "1";

                if (type == "1") {

                    minLength = 1;
                    maxLength = 30;
                    otherRegExp = sPrvId;
                    sBackward = "./pages.html";                   
                }                
                break;
            }

            
        default:
            break;
    }
}

/// KEYS
function addKey(id, symbol) {
    return "<div class='keyword' id='" + id + "' onclick='pressSymbol(\"" + symbol + "\", this.id)'>" + symbol + "</div>";
}

function addKeyColor(id, word) {
    return "<div class='color-keyword' id='" + id + "' onclick='pressSymbol(\"" + word + "\", this.id)'>" + word + "</div>";
}

function addKeyLarge(id, word, style) {
    return "<div class='large-keyword " + style + "' id='" + id + "' onclick='pressSymbol(\"" + word + "\", this.id)'>" + word + "</div>";
}

function addKeyBigLarge(id, word, style) {
    return "<div class='big-large-keyword " + style + "' id='" + id + "' onclick='pressSymbol(\"" + word + "\", this.id)'>" + word + "</div>";
}

function addKeySpace(id, word) {
    return "<div class='space-keyword' id='" + id + "' onclick='pressSymbol(\"" + word + "\", this.id)'></div>";
}

function addClearFix() {
    return "<div class='clearfix'></div>";
}
/// END KEYS

/// GENERATE KEYBOARD
function generateKeyboard(lang, type) {
    if (lang == "ru") {
        if (type == "BIG") $('#keyboard_area').html(rb_key());
        if (type == "NORM") $('#keyboard_area').html(rn_key());
    }

    if (lang == "en") {
        if (type == "BIG") $('#keyboard_area').html(eb_key());
        if (type == "NORM") $('#keyboard_area').html(en_key());
    }
}

function en_key() {
    return addKey("en_1", "1")
        + addKey("en_2", "2")
        + addKey("en_3", "3")
        + addKey("en_4", "4")
        + addKey("en_5", "5")
        + addKey("en_6", "6")
        + addKey("en_7", "7")
        + addKey("en_8", "8")
        + addKey("en_9", "9")
        + addKey("en_0", "0")
        + addKey("en_10", "-")
        + addKeyLarge("en_delete", "< Удалить", "")
        + addKey("en_q", "q")
        + addKey("en_w", "w")
        + addKey("en_e", "e")
        + addKey("en_r", "r")
        + addKey("en_t", "t")
        + addKey("en_y", "y")
        + addKey("en_u", "u")
        + addKey("en_i", "i")
        + addKey("en_o", "o")
        + addKey("en_p", "p")
        + addKey("en_11", "[")
        + addKey("en_12", "]")
        + addKey("en_13", "@")
        + addKey("en_a", "a")
        + addKey("en_s", "s")
        + addKey("en_d", "d")
        + addKey("en_f", "f")
        + addKey("en_g", "g")
        + addKey("en_h", "h")
        + addKey("en_j", "j")
        + addKey("en_k", "k")
        + addKey("en_l", "l")
        + addKey("en_14", ";")
        + addKey("en_15", "*")
        + addKey("en_16", "=")
        + addKey("en_17", "|")
        + addKey("en_z", "z")
        + addKey("en_x", "x")
        + addKey("en_c", "c")
        + addKey("en_v", "v")
        + addKey("en_b", "b")
        + addKey("en_n", "n")
        + addKey("en_m", "m")
        + addKey("en_18", ",")
        + addKey("en_19", ".")
        + addKey("en_20", "/")
        + addKeyBigLarge("en_lang", "Русский", "")
        + addClearFix()
        + addKeyBigLarge("en_capslockoff", "Caps Lock", "")
        + addKeySpace("en_space", "Space")
        + addKeyBigLarge("en_clear", "Стереть все", "");
}

function eb_key() {
    return addKey("eb_1", "1")
        + addKey("eb_2", "2")
        + addKey("eb_3", "3")
        + addKey("eb_4", "4")
        + addKey("eb_5", "5")
        + addKey("eb_6", "6")
        + addKey("eb_7", "7")
        + addKey("eb_8", "8")
        + addKey("eb_9", "(")
        + addKey("eb_0", ")")
        + addKey("eb_10", "_")
        + addKeyLarge("eb_delete", "< Удалить", "")
        + addKey("eb_q", "Q")
        + addKey("eb_w", "W")
        + addKey("eb_e", "E")
        + addKey("eb_r", "R")
        + addKey("eb_t", "T")
        + addKey("eb_y", "Y")
        + addKey("eb_u", "U")
        + addKey("eb_i", "I")
        + addKey("eb_o", "O")
        + addKey("eb_p", "P")
        + addKey("eb_11", "{")
        + addKey("eb_12", "}")
        + addKey("eb_13", "~")
        + addKey("eb_a", "A")
        + addKey("eb_s", "S")
        + addKey("eb_d", "D")
        + addKey("eb_f", "F")
        + addKey("eb_g", "G")
        + addKey("eb_h", "H")
        + addKey("eb_j", "J")
        + addKey("eb_k", "K")
        + addKey("eb_l", "L")
        + addKey("eb_14", ":")
        + addKey("eb_15", "*")
        + addKey("eb_16", "+")
        + addKey("eb_17", "/")
        + addKey("eb_z", "Z")
        + addKey("eb_x", "X")
        + addKey("eb_c", "C")
        + addKey("eb_v", "V")
        + addKey("eb_b", "B")
        + addKey("eb_n", "N")
        + addKey("eb_m", "M")
        + addKey("eb_18", "<")
        + addKey("eb_19", ">")
        + addKey("eb_20", "?")
        + addKeyBigLarge("eb_lang", "Русский", "")
        + addClearFix()
        + addKeyBigLarge("eb_capslockon", "Caps Lock", "active")
        + addKeySpace("eb_space", "Space")
        + addKeyBigLarge("eb_clear", "Стереть все", "");
}

function rn_key() {
    return addKey("rn_1", "1")
        + addKey("rn_2", "2")
        + addKey("rn_3", "3")
        + addKey("rn_4", "4")
        + addKey("rn_5", "5")
        + addKey("rn_6", "6")
        + addKey("rn_7", "7")
        + addKey("rn_8", "8")
        + addKey("rn_9", "9")
        + addKey("rn_0", "0")
        + addKey("rn_10", "-")
        + addKeyLarge("rn_delete", "< Удалить", "")
        + addKey("rn_q", "й")
        + addKey("rn_w", "ц")
        + addKey("rn_e", "у")
        + addKey("rn_r", "к")
        + addKey("rn_t", "е")
        + addKey("rn_y", "н")
        + addKey("rn_u", "г")
        + addKey("rn_i", "ш")
        + addKey("rn_o", "щ")
        + addKey("rn_p", "з")
        + addKey("rn_11", "х")
        + addKey("rn_12", "ъ")
        + addKey("rn_13", "@")
        + addKey("rn_a", "ф")
        + addKey("rn_s", "ы")
        + addKey("rn_d", "в")
        + addKey("rn_f", "а")
        + addKey("rn_g", "п")
        + addKey("rn_h", "р")
        + addKey("rn_j", "о")
        + addKey("rn_k", "л")
        + addKey("rn_l", "д")
        + addKey("rn_14", "ж")
        + addKey("rn_15", "э")
        + addKey("rn_16", "=")
        + addKey("rn_17", "|")
        + addKey("rn_z", "я")
        + addKey("rn_x", "ч")
        + addKey("rn_c", "с")
        + addKey("rn_v", "м")
        + addKey("rn_b", "и")
        + addKey("rn_n", "т")
        + addKey("rn_m", "ь")
        + addKey("rn_18", "б")
        + addKey("rn_19", "ю")
        + addKey("rn_20", ".")
        + addKeyBigLarge("rn_lang", "English", "")
        + addClearFix()
        + addKeyBigLarge("rn_capslockoff", "Caps Lock", "")
        + addKeySpace("rn_space", "Space")
        + addKeyBigLarge("rn_clear", "Стереть все", "");
}

function rb_key() {
    return addKey("rb_1", "1")
        + addKey("rb_2", "@")
        + addKey("rb_3", "?")
        + addKey("rb_4", ";")
        + addKey("rb_5", "*")
        + addKey("rb_6", ":")
        + addKey("rb_7", "[")
        + addKey("rb_8", "]")
        + addKey("rb_9", "(")
        + addKey("rb_0", ")")
        + addKey("rb_10", "-")
        + addKeyLarge("rb_delete", "< Удалить", "")
        + addKey("rb_q", "Й")
        + addKey("rb_w", "Ц")
        + addKey("rb_e", "У")
        + addKey("rb_r", "К")
        + addKey("rb_t", "Е")
        + addKey("rb_y", "Н")
        + addKey("rb_u", "Г")
        + addKey("rb_i", "Ш")
        + addKey("rb_o", "Щ")
        + addKey("rb_p", "З")
        + addKey("rb_11", "Х")
        + addKey("rb_12", "Ъ")
        + addKey("rb_13", "~")
        + addKey("rb_a", "Ф")
        + addKey("rb_s", "Ы")
        + addKey("rb_d", "В")
        + addKey("rb_f", "А")
        + addKey("rb_g", "П")
        + addKey("rb_h", "Р")
        + addKey("rb_j", "О")
        + addKey("rb_k", "Л")
        + addKey("rb_l", "Д")
        + addKey("rb_14", "Ж")
        + addKey("rb_15", "Э")
        + addKey("rb_16", "+")
        + addKey("rb_17", "/")
        + addKey("rb_z", "Я")
        + addKey("rb_x", "Ч")
        + addKey("rb_c", "С")
        + addKey("rb_v", "М")
        + addKey("rb_b", "И")
        + addKey("rb_n", "Т")
        + addKey("rb_m", "Ь")
        + addKey("rb_18", "Б")
        + addKey("rb_19", "Ю")
        + addKey("rb_20", ",")
        + addKeyBigLarge("rb_lang", "English", "")
        + addClearFix()
        + addKeyBigLarge("rb_capslockon", "Caps Lock", "active")
        + addKeySpace("rb_space", "Space")
        + addKeyBigLarge("rb_clear", "Стереть все", "");
}

function disableKey() {
    for (var i = 0; i < disableKeyword.length; i++) {
        $('#' + disableKeyword[i]).attr('disabled', 'disabled');
        $('#' + disableKeyword[i]).addClass('click');
    }
}
/// END GENERATE KEYBOARD

function pressSymbol(key, id) {
    
    // Добавляем эффект нажатия
    animation(id, 'add');

    setTimeout(function () {

        switch (id.split('_')[1]) {

            // Переход на главную страницу
            case "index":
            {
                var cook = new CookieClass();
                cook.clear();
                parent.location = "./index.html";
                return;
            }

            // Переход назад
            case "back":
            {
                resetParams();
                parent.location = sBackward;
                return;
            }

            //Переход на следующую страницу
            case "forward":
            {
                putParams();
                parent.location = sForward;
                break;
            }

            // Удаляем последний символ
            case "delete":
            {
                if (inputString.length > 0) {
                    inputString = inputString.substring(0, inputString.length - 1);
                    $('#account_input').val(inputString);
                }
                break;
            }

            // стираем все
            case "clear":
            {
                inputString = "";
                $('#account_input').val(inputString);
                break;
            }

            // Переключаем язык
            case "lang":
            {
                if (key == "Русский") {
                    langKeyboard = "ru";
                    generateKeyboard(langKeyboard, typeKeyboard);
                }

                if (key == "English") {
                    langKeyboard = "en";
                    generateKeyboard(langKeyboard, typeKeyboard);
                }

                break;
            }

            // Caps Lock включить
            case "capslockoff":
            {
                typeKeyboard = "BIG";
                generateKeyboard(langKeyboard, typeKeyboard);
                break;
            }

            // Caps Lock выключить
            case "capslockon":
            {
                typeKeyboard = "NORM";
                generateKeyboard(langKeyboard, typeKeyboard);
                break;
            }
                
            // Space
            case "space":
            {
                if (inputString.length < maxLength) {
                    inputString += " ";
                    $('#account_input').val(inputString);
                }
                break;
            }

            // пишем в инпут выбранные данные с экрана
            default:
            {
                if (inputString.length < maxLength) {
                    inputString += key;
                    $('#account_input').val(inputString);
                }
                break;
            }
        }

        // Убираем эффект нажатия
        animation(id, 'kill');

        // Отключаем кнопки не нужные
        disableKey();
        
        // Проверяем по RegExp
        if (otherRegExp != null)
            testRegExpOther(inputString, otherRegExp);
        else
            testRegExp(inputString);

    }, 100);
}

function animation(id, stage) {
    if (stage == "add") {
        $("#" + id).addClass('click');
    } else {
        $("#" + id).removeClass('click');
    }
}

function processTranslate() {
    var s = getcookie("prv_invitation");
    $(".cellular_title_text").text(getText(s, sLocaleLanguage));
    //getTextById("prov_enter_code", sLocaleLanguage);
}

function testRegExp(sNumber) {
    processProvider(sNumber);
}

function testRegExpOther(sNumber, other) {
    if (testProviderByMask(other, sNumber)) {
        $("#button_forward").css("display", "block");
        $('.input_text').css("background", "#c7fcbb");
        $('.image_l_a').css("background", "url(./img/ui/field/l_a_ok.gif)");
        $('.image_r_a').css("background", "url(./img/ui/field/r_a_ok.gif)");
        $('.vvod').css("background", "url(./img/ui/field/c_a_ok.gif) repeat-x");
    } else {
        $("#button_forward").css("display", "none");

        if (sNumber.length >= minLength) {
            $('.input_text').css("background", "#fbcaac");
            $('.image_l_a').css("background", "url(./img/ui/field/l_a_nok.gif)");
            $('.image_r_a').css("background", "url(./img/ui/field/r_a_nok.gif)");
            $('.vvod').css("background", "url(./img/ui/field/c_a_nok.gif) repeat-x");
        } else {
            $('.input_text').css("background", "#fff");
            $('.image_l_a').css("background", "url(./img/ui/field/l_a.gif)");
            $('.image_r_a').css("background", "url(./img/ui/field/r_a.gif)");
            $('.vvod').css("background", "url(./img/ui/field/c_a.gif) repeat-x");
        }
    }
}

function processProvider(sNumber) {
    if (testProviderByMask(sPrvId, sNumber)) {
        $("#button_forward").css("display", "block");
        $('.input_text').css("background", "#c7fcbb");
        $('.image_l_a').css("background", "url(./img/ui/field/l_a_ok.gif)");
        $('.image_r_a').css("background", "url(./img/ui/field/r_a_ok.gif)");
        $('.vvod').css("background", "url(./img/ui/field/c_a_ok.gif) repeat-x");
    } else {
        $("#button_forward").css("display", "none");

        if (sNumber.length >= minLength) {
            $('.input_text').css("background", "#fbcaac");
            $('.image_l_a').css("background", "url(./img/ui/field/l_a_nok.gif)");
            $('.image_r_a').css("background", "url(./img/ui/field/r_a_nok.gif)");
            $('.vvod').css("background", "url(./img/ui/field/c_a_nok.gif) repeat-x");
        } else {
            $('.input_text').css("background", "#fff");
            $('.image_l_a').css("background", "url(./img/ui/field/l_a.gif)");
            $('.image_r_a').css("background", "url(./img/ui/field/r_a.gif)");
            $('.vvod').css("background", "url(./img/ui/field/c_a.gif) repeat-x");
        }
    }
}

function putParams() {
    cook.setCookie("account_string_result", inputString, false);

    // ГАИ
    if (sPrvId == "11859") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.setCookie("number_ttp_1", inputString, false);
            cook.setCookie("prv_type_page", "2", false);
        }
        if (type == "2") {
            cook.setCookie("number_ttp_2", inputString, false);
            cook.setCookie("prv_type_page", "4", false);
        }
        if (type == "4") {
            cook.setCookie("number_ttp_4", inputString, false);
            cook.setCookie("prv_type_page", "3", false);
        }
    }

    // ЭкоИсламикБанк-первоначальный гарантийный взнос
    if (sPrvId == "22053") {
        var type = cook.getCookie("prv_type_page");
        //if (type == null) type = "1";
        if (type =="2") {
            cook.setCookie("number_ekb_2", inputString, false);
            cook.setCookie("prv_type_page", "3", false);
        }
        if (type == "3") {
            cook.setCookie("number_ekb_3", inputString, false);
        }
        }

    // NativePay
    if (sPrvId == "13915" || sPrvId == "11325" || sPrvId == "6410" || sPrvId == "12463" ||
        sPrvId == "11318" || sPrvId == "12457" || sPrvId == "12456" || sPrvId == "6411" ||
        sPrvId == "6412" || sPrvId == "6414" || sPrvId == "6413" || sPrvId == "11322" ||
        sPrvId == "12732" || sPrvId == "12733" || sPrvId == "16213" || sPrvId == "22015" ||
        sPrvId == "16214" || sPrvId == "16216" || sPrvId == "22016" || sPrvId == "11319" ||
        sPrvId == "13914" || sPrvId == "6463" || sPrvId == "12459" || sPrvId == "6465" ||
        sPrvId == "12458" || sPrvId == "14255" || sPrvId == "11323" || sPrvId == "13916" ||
        sPrvId == "16210" || sPrvId == "16198" || sPrvId == "16199" || sPrvId == "6464" ||
        sPrvId == "22079" || sPrvId == "22080" || sPrvId == "22081" || sPrvId == "22082" ||
        sPrvId == "22083" || sPrvId == "22084" || sPrvId == "22085" || sPrvId == "22086" ||
        sPrvId == "22087" || sPrvId == "22088" || sPrvId == "22089" || sPrvId == "22090" ||
        sPrvId == "22091" || sPrvId == "22092" || sPrvId == "22093" || sPrvId == "22094" ||
        sPrvId == "22096" || sPrvId == "22097" || sPrvId == "22098" || sPrvId == "22099" ||
        sPrvId == "22100" || sPrvId == "22101" || sPrvId == "22102" || sPrvId == "22115" ||
		sPrvId == "22114" || sPrvId == "22113" || sPrvId == "22112" || sPrvId == "22111" ||
		sPrvId == "22110" || sPrvId == "22108" || sPrvId == "6432" || sPrvId == "12734" ||
		sPrvId == "6428" || sPrvId == "6454" || sPrvId == "6430" || sPrvId == "12735" || 
		sPrvId == "6452" || sPrvId == "6419" || sPrvId == "6442" || sPrvId == "6415" || 
		sPrvId == "6459" || sPrvId == "22138" || sPrvId == "22139" || sPrvId == "22140" ||
        sPrvId == "22141" || sPrvId == "22142" || sPrvId == "22143" || sPrvId == "22134" ||
        sPrvId == "22131" || sPrvId == "22129" || sPrvId == "22130" || sPrvId == "22132" ||
        sPrvId == "22133" || sPrvId == "22135" || sPrvId == "22136" || sPrvId == "22137" ||
        sPrvId == "22157") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.setCookie("number_np_1", inputString, false);
            cook.setCookie("prv_type_page", "2", false);
        }
        if (type == "2") {
            cook.setCookie("number_np_2", inputString, false);
            cook.setCookie("prv_type_page", "3", false);
        }
    }

    // эльпэй
    if (sPrvId == "22033") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.setCookie("number_np_1", inputString, false);
            cook.setCookie("prv_type_page", "2", false);
        }
        if (type == "2") {
            cook.setCookie("number_np_2", inputString, false);
            cook.setCookie("prv_type_page", "3", false);
        }
    }


    // Ю-Мода - интернет магазин
    if (sPrvId == "22161") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.setCookie("number_np_1", inputString, false);
            cook.setCookie("prv_type_page", "2", false);
        }
    }

}

function resetParams() {
    
    // ГАИ
    if (sPrvId == "11859") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";
        
        if (type == "1") {
            cook.deleteCookie("number_ttp_1");
            cook.setCookie("prv_type_page", "1", false);
        }
        if (type == "2") {
            cook.deleteCookie("number_ttp_2");
            cook.setCookie("prv_type_page", "1", false);
        }
        if (type == "4") {
            cook.deleteCookie("number_ttp_4");
            cook.setCookie("prv_type_page", "2", false);
        }
    }

   
    // ЭкоИсламикБанк-первоначальный гарантийный взнос
    if (sPrvId == "22053") {

        var type = cook.getCookie("prv_type_page");

        if (type == "3") {
            cook.deleteCookie("number_ekb_3");
            cook.setCookie("prv_type_page", "2", false);
        }
        if (type == "2") {
            cook.deleteCookie("number_ekb_2");
            cook.setCookie("prv_type_page", "1", false);
        }
    }

    // NativePay
    if (sPrvId == "13915" || sPrvId == "11325" || sPrvId == "6410" || sPrvId == "12463" ||
        sPrvId == "11318" || sPrvId == "12457" || sPrvId == "12456" || sPrvId == "6411" ||
        sPrvId == "6412" || sPrvId == "6414" || sPrvId == "6413" || sPrvId == "11322" ||
        sPrvId == "12732" || sPrvId == "12733" || sPrvId == "16213" || sPrvId == "22015" ||
        sPrvId == "16214" || sPrvId == "16216" || sPrvId == "22016" || sPrvId == "11319" ||
        sPrvId == "13914" || sPrvId == "6463" || sPrvId == "12459" || sPrvId == "6465" ||
        sPrvId == "12458" || sPrvId == "14255" || sPrvId == "11323" || sPrvId == "13916" ||
        sPrvId == "16210" || sPrvId == "16198" || sPrvId == "16199" || sPrvId == "6464" ||
        sPrvId == "22079" || sPrvId == "22080" || sPrvId == "22081" || sPrvId == "22082" ||
        sPrvId == "22083" || sPrvId == "22084" || sPrvId == "22085" || sPrvId == "22086" ||
        sPrvId == "22087" || sPrvId == "22088" || sPrvId == "22089" || sPrvId == "22090" ||
        sPrvId == "22091" || sPrvId == "22092" || sPrvId == "22093" || sPrvId == "22094" ||
        sPrvId == "22096" || sPrvId == "22097" || sPrvId == "22098" || sPrvId == "22099" ||
        sPrvId == "22100" || sPrvId == "22101" || sPrvId == "22102" || sPrvId == "22115" ||
		sPrvId == "22114" || sPrvId == "22113" || sPrvId == "22112" || sPrvId == "22111" ||
		sPrvId == "22110" || sPrvId == "22108" || sPrvId == "6432" || sPrvId == "12734" ||
		sPrvId == "6428" || sPrvId == "6454" || sPrvId == "6430" || sPrvId == "12735" || 
		sPrvId == "6452" || sPrvId == "6419" || sPrvId == "6442" || sPrvId == "6415" || 
		sPrvId == "6459" || sPrvId == "22138" || sPrvId == "22139" || sPrvId == "22140" ||
        sPrvId == "22141" || sPrvId == "22142" || sPrvId == "22143" || sPrvId == "22134" ||
        sPrvId == "22131" || sPrvId == "22129" || sPrvId == "22130" || sPrvId == "22132" ||
        sPrvId == "22133" || sPrvId == "22135" || sPrvId == "22136" || sPrvId == "22137" ||
        sPrvId == "22157")
    {
        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.deleteCookie("number_np_1");
            cook.setCookie("prv_type_page", "1", false);
        }

        if (type == "2") {
            cook.deleteCookie("number_np_2");
            cook.setCookie("prv_type_page", "1", false);
        }
    }

    // эльпэй
    if (sPrvId == "22033") {
        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.deleteCookie("number_np_1");
            cook.setCookie("prv_type_page", "1", false);
        }

        if (type == "2") {
            cook.deleteCookie("number_np_2");
            cook.setCookie("prv_type_page", "1", false);
        }
    }

    // Ю-Мода - интернет магазин
    if (sPrvId == "22161") {
        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.deleteCookie("number_np_1");
            cook.setCookie("prv_type_page", "1", false);
        }
    }
}