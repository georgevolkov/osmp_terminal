var cook = new CookieClass();

var prv_value = getcookie('prv_value');
var sPrvId = getcookie("prv_id");
var sPrvName = getcookie("prv_name");
var sPrvLogo = getcookie("prv_image");
var sPrvAlert = getcookie("prv_alert");
var sLocaleLanguage = getcookie('locale');


function loadPages() {

    // Запрет на выделение текста.
    disableSelection(document.body);

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

        switch (key) {
            case "back":
            {
                parent.location = "./pages.html";
                return;
            }
            case "menu":
            {
                parent.location = "./index.html";
                return;
            }
            case "forward":
            {
                parent.location = "./num_keyboard.html";
                return;
            }

        default:
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

function processTranslate() {
    $(".atention").text(getText("attention_gns_text", sLocaleLanguage));
}