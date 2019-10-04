
// Тащим из куков нужные для нас данные и обозначаем переменные
var cook = new CookieClass();
var prv_value = getcookie('prv_value');
var sPrvId = getcookie("prv_id");
var sPrvName = getcookie("prv_name");
var sPrvLogo = getcookie("prv_image");
var sPrvAlert = getcookie("prv_alert");
var minLength = value[prv_value]["prv_surmask"].split('$')[0];
var maxLength = value[prv_value]["prv_surmask"].split('$')[1];
var sPrvMask = value[prv_value]["prv_surmask"].split('$')[2];
var sForward = value[prv_value]["prv_forward_num_keyboard"];
var sBackward = value[prv_value]["prv_page_back_num"];
var sLocaleLanguage = getcookie('locale');
var inputString = "";
var accountValue = "";
var arr = new Array();
var otherRegExp = null;

// Запускается сразу при загрузке старницы
function initPageKeyboard() {

    // Переводим текст на странице
    processTranslate();

    // Конкретные свойства для определенных провайдеров
    customOption();
    
    // Запрет на выделение текста.
    disableSelection(document.body);

    //Заполняем страницу данными
    $('.prv_logo').css("background", "url('./" + sPrvLogo + "') no-repeat");
    $('.prv_name_text').text(sPrvName);
    if (sPrvAlert != 'null') {
        if (sPrvId == 11859) {
            $('.alert-text').css("color", "#ff0000");
        }
        $('.container-alert-text').css("border-left", "1px solid #FF6821");
        $('.alert-text').html(sPrvAlert);
    }
    
    // Готовим маску
    accountValue = sPrvMask;
    sPrvMask = sPrvMask.split('');

    if (otherRegExp != null)
        testRegExpOther(inputString, otherRegExp);
    else
        testRegExp(inputString);
    

    var count = 0;
    for (var i = 0; i < sPrvMask.length; i++) {
        
        if (sPrvMask[i] == "*") {
            arr[count] = i;
            count++;
        }
    }
    $('#account_input').val(accountValue);
}

function customOption() {
    switch (sPrvId) {
        // Социальный фонд
        case "22028": 
        {
            sPrvAlert = cook.getCookie("sf_alert");
            break;
        }

        case "22119":
            {
                sPrvAlert = "Уважаемый  пользователь!  Уведомляем  Вас о том, что номер указанного телефона будет опубликован на сайте www.apake.kg,будут скрыты некоторые цифры в целях  конфиденциальности.С подробностями проектов можно ознакомиться на указанном сайте";
                sForward = "./apake_validate_confirm.html";
            break;
        }
        // ГАИ
        case "11859":
            {
            var type = cook.getCookie("prv_type_page");
            
            //Статья
            if (type == "3") {
                minLength = 4; maxLength = 4; otherRegExp = "11859_3"; sPrvMask = "Статья ***, часть *";
                $(".cellular_title_text").text(getText("validate_ptt_statya_text", sLocaleLanguage));
                sBackward = "./anykey_keyboard.html";
                sForward = "./ttp_validate_confirm.html";
                sPrvAlert = "Внимание: сумму штрафа необходимо вводить с учетом комиссии 20 сом, в противном случае квитанция об оплате сотрудником ГУПМ не будет принята";
            }
            break;
        }
            
        // NativePay
        case "13915": case "11325": case "6410": case "12463":
        case "11318": case "12457": case "12456": case "6411":
        case "6412": case "6414": case "6413": case "11322":
        case "12732": case "12733": case "16213": case "22015":
        case "16214": case "16216": case "22016": case "11319":
        case "13914": case "6463": case "12459": case "6465":
        case "12458": case "14255": case "11323": case "13916":
        case "16210": case "16198": case "16199": case "6464":
        case "22079": case "22080": case "22081": case "22082":
        case "22083": case "22084": case "22085": case "22086":
        case "22087": case "22088": case "22089": case "22090":
        case "22091": case "22092": case "22093": case "22094":
        case "22096": case "22097": case "22098": case "22099":
        case "22100": case "22101": case "22102": case "22115":
		case "22114": case "22113": case "22112": case "22111":
		case "22110": case "22108": case "6432": case "12734":
		case "6428": case "6454": case "6430": case "12735":
		case "6452": case "6419": case "6442": case "6415":
        case "6459": case "22138": case "22139": case "22140":
        case "22141": case "22142": case "22143": case "22134":
        case "22131": case "22129": case "22130": case "22132":
        case "22133": case "22135": case "22136": case "22137":
        case "22157":
        {
            var type = cook.getCookie("prv_type_page");
            if (type == null) type = "1";
            
            if (type == "1") {
                otherRegExp = sPrvId;
                sBackward = "./pages.html";
                sForward = "./anykey_keyboard.html";

                if (sPrvId == "12463" || sPrvId == "11318" || sPrvId == "12457" || sPrvId == "12456"
                     || sPrvId == "6463" || sPrvId == "12459" || sPrvId == "12458"
                    || sPrvId == "14255" || sPrvId == "11323" || sPrvId == "13916" || sPrvId == "16210"
                    || sPrvId == "16198" || sPrvId == "16199")
                    sPrvAlert = "Минимальная сумма<br>разового платежа: 100 сом.<br><br>Максимальная сумма<br>разового платежа: 10 000 сом.";
            }

            if (type == "3") {
                minLength = 14;
                maxLength = 14;
                sPrvMask = "**************";
                sPrvAlert = "Ответственность за достоверность введённых данных несет клиент";
                otherRegExp = "11144";
                $(".cellular_title_text").text(getText("prov_enter_inn", sLocaleLanguage));
                sBackward = "./anykey_keyboard.html";
                sForward = "./np_validate_confirm.html";
            }
            break;
        }

            // эльпэй
        case "22033":
            {
                var type = cook.getCookie("prv_type_page");
                if (type == null) type = "1";

                if (type == "1") {
                    otherRegExp = sPrvId;
                    sBackward = "./pages.html";
                    sForward = "./anykey_keyboard.html";

                    if (sPrvId == "22033")
                        sPrvAlert = "";
                }

                if (type == "3") {
                    minLength = 14;
                    maxLength = 14;
                    sPrvMask = "**************";
                    sPrvAlert = "Ответственность за достоверность введённых данных несет клиент";
                    otherRegExp = "11144";
                    $(".cellular_title_text").text(getText("prov_enter_inn", sLocaleLanguage));
                    sBackward = "./anykey_keyboard.html";
                    sForward = "./lp_validate_confirm.html";
                }
                break;
            }


            // AVN
        case "22052":
            {
                var type = cook.getCookie("prv_type_page");
                if (type == null) type = "1";

                if (type == "1") {
                    otherRegExp = sPrvId;
                    sBackward = "./pages.html";
                    sForward = "./num_keyboard.html";
                    }

                if (type == "2") {
                    minLength = 9;
                    maxLength = 18;
                    sPrvMask = "+(***)************";
                    sPrvAlert = "Номер вводиться с учетом кода страны,например,996554556080";
                    otherRegExp = "22052_1";
                    $(".cellular_title_text").text(getText("prov_enter_phone", sLocaleLanguage));
                    sBackward = "./num_keyboard.html";
                    sForward = "./avn_validate_confirm.html";
                }
                break;
            }


       


         //Административный штраф за нарушение ПДД(фото-видео фиксация)
        case "22054":
            {
                var type = cook.getCookie("prv_type_page");
                if (type == null) type = "1";

                if (type == "1") {
                    otherRegExp = sPrvId;
                    sBackward = "./pages.html";
                    sForward = "./pdd_validate_confirm.html";
                }

                //if (type == "2") {
                //    minLength = 0;
                //    maxLength = 14;
                //    sPrvMask = "**************";
                //    sPrvAlert = "";
                //    otherRegExp = "22054_1";
                //    $(".cellular_title_text").text(getText("prov_enter_inn", sLocaleLanguage));
                //    sBackward = "./num_keyboard.html";
                //    sForward = "./pdd_validate_confirm.html";
                //}
                break;
            }



        //Административный штраф за нарушение ПДД(фото-видео фиксация)
        case "515111":
            {
                var type = cook.getCookie("prv_type_page");
                if (type == null) type = "1";

                if (type == "1") {
                    otherRegExp = sPrvId;
                    sBackward = "./pages.html";
                    sForward = "./pdd_validate_confirm.html";
                }

                //if (type == "2") {
                //    minLength = 0;
                //    maxLength = 14;
                //    sPrvMask = "**************";
                //    sPrvAlert = "";
                //    otherRegExp = "22054_1";
                //    $(".cellular_title_text").text(getText("prov_enter_inn", sLocaleLanguage));
                //    sBackward = "./num_keyboard.html";
                //    sForward = "./pdd_validate_confirm.html";
                //}
                break;
            }

        // ЭкоИсламикБанк-первоначальный гарантийный взнос
        case "22053":
            {
                var type = cook.getCookie("prv_type_page");
                if (type == null) type = "1";
                if (type == "1") {
                    otherRegExp = sPrvId;
                    sBackward = "./pages.html";
                    sForward = "./anykey_keyboard.html";

                }
               break;
            }

           
        default:
            break;
    }
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
                for (var j = arr.length - 1; j >= 0; j--) {
                    if (sPrvMask[arr[j]] != "*") {
                        accountValue = setCharAt(accountValue, arr[j], "*");
                        sPrvMask[arr[j]] = "*";
                        break;
                    }
                }
                inputString = inputString.substring(0, inputString.length - 1);
                $('#account_input').val(accountValue);
            }
        }
        // пишем в инпут выбранные данные с экрана
        else {
            if (inputString.length < maxLength) {
                for (var i = 0; i < arr.length; i++) {
                    if (sPrvMask[arr[i]] == "*") {
                        accountValue = setCharAt(accountValue, arr[i], key);
                        sPrvMask[arr[i]] = key;
                        break;
                    }
                }
                inputString += key;
                $('#account_input').val(accountValue);
            }
        }

        // Убираем эффект нажатия
        animation(id, 'kill');
        
        // Проверяем по RegExp
        if (otherRegExp != null)
            testRegExpOther(inputString, otherRegExp);
        else
            testRegExp(inputString);
    }, 80);
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

    var sTxt = getText(value[prv_value]["prv_success_sign"], sLocaleLanguage);
    var sBadFormat = getText(value[prv_value]["prv_error_sign"], sLocaleLanguage);

    if (testProviderByMask(other, sNumber)) {
        $("#button_forward").css("display", "block");
        $('.result-text').html(sTxt);
        $('.result-text').css('color','green');
        
    } else {
        $("#button_forward").css("display", "none");
        if (sNumber.length < minLength) {
            $('.result-text').html("");
        }
        else {
            $('.result-text').html(sBadFormat);
            $('.result-text').css('color', 'red');
        }
    }
}

function processProvider(sNumber) {

    var sTxt = getText(value[prv_value]["prv_success_sign"], sLocaleLanguage);
    var sBadFormat = getText(value[prv_value]["prv_error_sign"], sLocaleLanguage);

    if (testProviderByMask(sPrvId, sNumber)) {
        $("#button_forward").css("display", "block");
        $('.result-text').html(sTxt);
        $('.result-text').css('color','green');
        
    } else {
        $("#button_forward").css("display", "none");
        if (sNumber.length < minLength) {
            $('.result-text').html("");
        }
        else {
            $('.result-text').html(sBadFormat);
            $('.result-text').css('color', 'red');
        }
    }
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function putParams() {
    cook.setCookie("account_result", inputString, false);
    cook.setCookie("account_input", accountValue, false);

    if (sPrvId === "515111") {
        parent.location = "./apake_validate_confirm.html";
    }

    // ГАИ
    if (sPrvId == "11859") {

        var type = cook.getCookie("prv_type_page");
        
        if (type == "3") {
            cook.setCookie("number_ttp_3", inputString, false);
            cook.setCookie("number_ttp_3_field", accountValue, false);
        }
    }

    // NativePay
    if (sPrvId == "12463" || sPrvId == "11318" || sPrvId == "12457" || sPrvId == "12456" ||
         sPrvId == "6463" || sPrvId == "12459" || sPrvId == "12458" || sPrvId == "6465" ||
        sPrvId == "14255" || sPrvId == "11323" || sPrvId == "13916" || sPrvId == "16210" ||
        sPrvId == "16198" || sPrvId == "16199" || sPrvId == "6464" || sPrvId == "13915" ||
        sPrvId == "6410" || sPrvId == "11325" || sPrvId == "13915" || sPrvId == "22079" ||
        sPrvId == "22080" || sPrvId == "22081" || sPrvId == "22082" || sPrvId == "22083" ||
        sPrvId == "22084" || sPrvId == "22085" || sPrvId == "22086" || sPrvId == "22087" ||
        sPrvId == "22088" || sPrvId == "22089" || sPrvId == "22090" || sPrvId == "22091" ||
        sPrvId == "22092" || sPrvId == "22093" || sPrvId == "22094" || sPrvId == "22096" ||
        sPrvId == "22097" || sPrvId == "22098" || sPrvId == "22099" || sPrvId == "22100" ||
        sPrvId == "22101" || sPrvId == "22102" || sPrvId =="22115" || sPrvId =="22114" || 
		sPrvId =="22113" || sPrvId =="22112" || sPrvId =="22111" || sPrvId =="22110" || 
		sPrvId =="22108" || sPrvId =="6432" || sPrvId =="12734"	|| sPrvId =="6428" || 
		sPrvId =="6454" || sPrvId =="6430" || sPrvId =="12735" || sPrvId =="6452" || 
		sPrvId =="6419" || sPrvId =="6442" || sPrvId =="6415" || sPrvId =="6459" ||
        sPrvId == "22138" || sPrvId == "22139" || sPrvId == "22140" || sPrvId == "22141" ||
        sPrvId == "22142" || sPrvId == "22143" || sPrvId == "22134" || sPrvId == "22131" ||
        sPrvId == "22129" || sPrvId == "22130" || sPrvId == "22132" || sPrvId == "22133" ||
        sPrvId == "22135" || sPrvId == "22136" || sPrvId == "22137" || sPrvId == "22157")
    {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            if (sPrvId == "11318" || sPrvId == "12457" || sPrvId == "12456" ) {
                cook.setCookie("number_np_1", accountValue, false);
            }
            else {
                cook.setCookie("number_np_1", inputString, false);
            }
            cook.setCookie("prv_type_page", "2", false);
        }
        if (type == "3") {
            cook.setCookie("number_np_3", inputString, false);
        }
    }



    // эльпэй
    if (sPrvId == "22033") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            if (sPrvId == "22033") {
                cook.setCookie("number_np_1", accountValue, false);
            }
            else {
                cook.setCookie("number_np_1", inputString, false);
            }
            cook.setCookie("prv_type_page", "2", false);
        }
        if (type == "3") {
            cook.setCookie("number_np_3", inputString, false);
        }
    }
    
    // AVN
    if (sPrvId == "22052") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.setCookie("number_avn_1", inputString, false);
            cook.setCookie("prv_type_page", "2", false);
        }

        if (type == "2") {
            cook.setCookie("number_avn_2",inputString, false);
            cook.setCookie("prv_type_page", "2", false);
        }
    }


    


    // Административный штраф за нарушение ПДД(фото-видео фиксация)
    if (sPrvId == "22054") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.setCookie("number_pdd_1", inputString, false);
            cook.setCookie("prv_type_page", "1", false);
        }

        //if (type == "2") {
        //    cook.setCookie("number_pdd_2", inputString, false);
        //    cook.setCookie("prv_type_page", "2", false);
        //}
    }


    // Административный штраф за нарушение ПДД(фото-видео фиксация)
    if (sPrvId == "515111") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.setCookie("number_pdd_1", inputString, false);
            cook.setCookie("prv_type_page", "1", false);
        }

        //if (type == "2") {
        //    cook.setCookie("number_pdd_2", inputString, false);
        //    cook.setCookie("prv_type_page", "2", false);
        //}
    }

    // ЭкоИсламикБанк-первоначальный гарантийный взнос
    if (sPrvId == "22053") {
        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";
        if (type == "1") {
            cook.setCookie("number_ekb_1", inputString, false);
            cook.setCookie("prv_type_page", "2", false);
        }
        }

    
}

function resetParams() {


    // ГАИ
    if (sPrvId == "11859") {

        var type = cook.getCookie("prv_type_page");
        
        if (type == "3") {
            cook.deleteCookie("number_ttp_3");
            cook.setCookie("prv_type_page", "4", false);
        }
    }
    
    // NativePay
    if (sPrvId == "12463" || sPrvId == "11318" || sPrvId == "12457" ||
        sPrvId == "12456" || sPrvId == "6463" || sPrvId == "6465" ||
        sPrvId == "12459" || sPrvId == "12458" || sPrvId == "14255" ||
        sPrvId == "11323" || sPrvId == "13916" || sPrvId == "16210" ||
        sPrvId == "16198" || sPrvId == "16199" || sPrvId == "6464" ||
        sPrvId == "6410" || sPrvId == "13915" || sPrvId == "11325" ||
        sPrvId == "13915" || sPrvId == "22079" || sPrvId == "22080" ||
        sPrvId == "22081" || sPrvId == "22082" || sPrvId == "22083" ||
        sPrvId == "22084" || sPrvId == "22085" || sPrvId == "22086" ||
        sPrvId == "22087" || sPrvId == "22088" || sPrvId == "22089" ||
        sPrvId == "22090" || sPrvId == "22091" || sPrvId == "22092" ||
        sPrvId == "22093" || sPrvId == "22094" || sPrvId == "22096" ||
        sPrvId == "22097" || sPrvId == "22098" || sPrvId == "22099" ||
        sPrvId == "22100" || sPrvId == "22101" || sPrvId == "22102" || 
		sPrvId =="22115" || sPrvId =="22114" || sPrvId =="22113" || 
		sPrvId =="22112" || sPrvId =="22111" || sPrvId =="22110" || 
		sPrvId =="22108" || sPrvId =="6432" || sPrvId =="12734" || 
		sPrvId =="6428" || sPrvId =="6454" || sPrvId =="6430" || 
		sPrvId =="12735" || sPrvId =="6452" || sPrvId =="6419" || 
		sPrvId == "6442" || sPrvId == "6415" || sPrvId == "6459" ||
        sPrvId == "22138" || sPrvId == "22139" || sPrvId == "22140" ||
        sPrvId == "22141" || sPrvId == "22142" || sPrvId == "22143" ||
        sPrvId == "22134" || sPrvId == "22131" || sPrvId == "22129" ||
        sPrvId == "22130" || sPrvId == "22132" || sPrvId == "22133" ||
        sPrvId == "22135" || sPrvId == "22136" || sPrvId == "22137" ||
        sPrvId == "22157")
    {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.deleteCookie("number_np_1");
            cook.setCookie("prv_type_page", "1", false);
        }
        if (type == "3") {
            cook.deleteCookie("number_np_3");
            cook.setCookie("prv_type_page", "2", false);
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
        if (type == "3") {
            cook.deleteCookie("number_np_3");
            cook.setCookie("prv_type_page", "2", false);
        }
    }

    // AVN
    if (sPrvId == "22052") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.deleteCookie("number_avn_1");
            cook.setCookie("prv_type_page", "1", false);
        }

        if (type == "2") {
            cook.deleteCookie("number_avn_2");
            cook.setCookie("prv_type_page", "1", false);
        }
    }



   


    // Административный штраф за нарушение ПДД(фото-видео фиксация)
    if (sPrvId == "22054") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.deleteCookie("number_pdd_1");
            cook.setCookie("prv_type_page", "1", false);
        }

        //if (type == "2") {
        //    cook.deleteCookie("number_pdd_2");
        //    cook.setCookie("prv_type_page", "1", false);
        //}
    }

    // Административный штраф за нарушение ПДД(фото-видео фиксация)
    if (sPrvId == "515111") {

        var type = cook.getCookie("prv_type_page");
        if (type == null) type = "1";

        if (type == "1") {
            cook.deleteCookie("number_pdd_1");
            cook.setCookie("prv_type_page", "1", false);
        }

        //if (type == "2") {
        //    cook.deleteCookie("number_pdd_2");
        //    cook.setCookie("prv_type_page", "1", false);
        //}
    }

}