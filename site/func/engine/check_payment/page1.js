var cook = new CookieClass();
var inputString = "";

function init() {
    // todo Временная мера, дабы нехуй зырить сюда
    var cook = new CookieClass();
    //cook.clear();
    //parent.location = "./index.html";
    //return;

    disableSelection(document.body);
    $('#forward').css('display', 'none');
}


function pressSymbol(key, id) {

    // Добавляем эффект нажатия
    animation(id, 'add');

    setTimeout(function () {

        switch (id) {

            // Переход на главную страницу
            case "menu":
                {
                    var cook = new CookieClass();
                    cook.clear();
                    parent.location = "./index.html";
                    return;
                }

                // Переход назад
            case "back":
                {
                    parent.location = './main_ru_ru.html';
                    return;
                }

                //Переход на следующую страницу
            case "forward":
            {
                put();
                parent.location = "./check_payment_page_validate_confirm.html";
                break;
            }

                // Удаляем последний символ
            case "bs":
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

                // пишем в инпут выбранные данные с экрана
            default:
                {
                    inputString += key;
                    $('#account_input').val(inputString);
                    break;
                }
        }

        // Убираем эффект нажатия
        animation(id, 'kill');

        if (inputString.length > 0) $('#forward').css('display', 'block');
        if (inputString.length == 0) $('#forward').css('display', 'none');
        
    }, 100);
}

function animation(id, stage) {
    if (stage == "add") {
        $("#" + id).addClass('click');
    } else {
        $("#" + id).removeClass('click');
    }
}

function put() {
    cook.setCookie("prv_id", "22031", false);
    cook.setCookie("prv_name", "Проверка статуса платежа", false);
    cook.setCookie("prv_online_check", "true", false);
    cook.setCookie("code_operation", inputString, false);
}