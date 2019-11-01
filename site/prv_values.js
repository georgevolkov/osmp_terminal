value = new Array();

value["8888"] = new Array();
value["8888"]["prv_id"] = "0";
value["8888"]["prv_name"] = "Здесь может быть Ваша компания";
value["8888"]["prv_alert"] = "";
value["8888"]["prv_top_image"] = "./img/ui_item/topprovider_preview.gif";

value["internet_shop"] = new Array();
value["internet_shop"]["prv_name"] = "Интернет магазины";
value["internet_shop"]["prv_image"] = "./img/ui_item/shops2.png";

value["online_pay"] = new Array();
value["online_pay"]["prv_name"] = "Электронные деньги";
value["online_pay"]["prv_image"] = "./img/ui_item/icon_e-commerc.png";

value["p_goods"] = new Array();
value["p_goods"]["prv_name"] = "ТОВАРЫ ПО КАТАЛОГУ";
value["p_goods"]["prv_image"] = "./img/ui_item/catalog.png";

value["p_gai"] = new Array();
value["p_gai"]["prv_name"] = "Оплата штрафов";
value["p_gai"]["prv_image"] = "./img/ui_item/gai.png";

value["aknet_folder"] = new Array();
value["aknet_folder"]["prv_name"] = "Акнет";
value["aknet_folder"]["prv_image"] = "./img/ui_item/aknet.png";

value["hosting_folder"] = new Array();
value["hosting_folder"]["prv_name"] = "хостинги и домены";
value["hosting_folder"]["prv_image"] = "./img/grp114HOSTING.gif";

value["lottery_folder"] = new Array();
value["lottery_folder"]["prv_name"] = "Лотереи";
value["lottery_folder"]["prv_image"] = "./img/ui_item/icon_lottery.png";

value["domofon_folder"] = new Array();
value["domofon_folder"]["prv_name"] = "Оплата за<br>домофон";
value["domofon_folder"]["prv_image"] = "./img/ui_item/centobsdomofon.png";

value["skylines_folder"] = new Array();
value["skylines_folder"]["prv_name"] = "Авиабилеты";
value["skylines_folder"]["prv_image"] = "./img/ui_item/skylines.gif";

//Российское ТВ
value["russia_tv"] = new Array();
value["russia_tv"]["prv_name"] = "Коммерческое ТВ";
value["russia_tv"]["prv_image"] = "./img/ui/cfk/button_tv.png";

//value["p_finca"] = new Array();
//value["p_finca"]["prv_name"] = "Финка";
//value["p_finca"]["prv_image"] = "./img/ui_item/finca.gif";

//////TestProvider
//value["5151"] = new Array();
//value["5151"]["prv_id"] = "5151"; // ID услуги
//value["5151"]["prv_name"] = "TEST"; // Название услуги
//value["5151"]["prv_folder"] = "cellular"; // Название папки где лежит иконка, при возврате назад, будете перемещены в эту папку
//value["5151"]["prv_image"] = "img/ui_item/logo1.png"; // путь к логотипу провайдера
//value["5151"]["prv_top_image"] = "./img/ui_item/Bloodas.gif"; // логотип для ТОП-8
//value["5151"]["prv_page"] = "./num_keyboard.html"; // При выборе данного провайдера, первый переход будет именно на эту страницу
//value["5151"]["prv_forward_num_keyboard"] = "./folders_gns.html"; // Нужно только для кастомной клавиатуры num_keyboard, свойство указывает следующую страницу для перехода с num_keyboard
//value["5151"]["prv_page_back_num"] = "./pages.html"; // Нужно только для кастомной клавиатуры num_keyboard, свойство указывает предыдущую страницу для перехода с num_keyboard
//value["5151"]["prv_page_back_any"] = "./folders_gns.html"; // Нужно только для кастомной клавиатуры anykey_keyboard, свойство указывает предыдущую страницу для перехода с anykey_keyboard
//value["5151"]["prv_page_conf"] = "./validate_confirm_gns.html"; // Страница для сборки всех параметров, и подготовке отправки запроса в процессинг если включено свойство prv_online_check, так же свойство указывает следующую страницу для перехода с anykey_keyboard
//value["5151"]["prv_alert"] = ""; // Тут указывается текст для предупреждения, доп. уведомления. Отображается на стринцах при вводе аккаунта и проверке реквизита
//value["5151"]["prv_invitation"] = "prov_enter_inn"; // Выбор какой текст о ЛС будет отображатся на стрицах ввода аккаунта
//value["5151"]["prv_lang_any_keyboard"] = "en"; // Задаем дефолтные настройки для anykey_keyboard, в данном случае выбираем язык. бывает всего два вида (en, ru)
//value["5151"]["prv_type_any_keyboard"] = "BIG"; // Задаем дефолтные настройки для anykey_keyboard, в данном случае выбираем тип шрифта. (BIG, NORM)
//value["5151"]["prv_success_sign"] = "cellular_successful_notice"; // Уведомление при успешном вводе реквизита
//value["5151"]["prv_error_sign"] = "cellular_bad_format"; // Уведомление при не успешном вводе реквизита
//value["5151"]["prv_button_text"] = ""; // Дописывает на кнопке текст, через тире. Но в дальнейшем нигде не отображается
//value["5151"]["prv_mask"] = "<!^\\d+${14}>"; // Стандартная маска ввода, для cellular, providers
//value["5151"]["prv_group"] = "ГНС"; // Дописывает текст на чеке в поле провайдера, например -  Поставщик\провайдер: Налог - ГНС
//value["5151"]["prv_online_check"] = "true"; // Флаг, указывающий является ли услуга с предпроверкаой аккаунта
//value["5151"]["prv_surmask"] = "14$14$**************"; // Эта кастомная маска, для num_keyboard и anykey_keyboard, знак $ служит разделителем. (мин.длина$макс.длина$вид_строки)
//value["5151"]["prv_receipt_extra_message"] = ""; // Дописывает на чеке информацию внизу квитанции, после звездочек

//value["5151"] = new Array();
//value["5151"]["prv_id"] = "5151";
//value["5151"]["prv_name"] = 'TEST';
//value["5151"]["prv_folder"] = "folder_online_pay";
//value["5151"]["prv_page"] = "./cellular.html";
//value["5151"]["prv_page_conf"] = "./validate_confirm.html";
//value["5151"]["prv_is_cellular"] = true;
//value["5151"]["prv_alert"] = "";
//value["5151"]["prv_invitation"] = "prov_enter_webmoney_cash";
//value["5151"]["prv_button_text"] = "";
//value["5151"]["prv_mask"] = "<!^\\d+${1,14}>";
//value["5151"]["prv_group"] = "";
//value["5151"]["prv_online_check"] = "true";

//// ************* ////
//// Сотовая связь ////
//// ************* ////

//Megacom
value["5131"] = new Array();
value["5131"]["prv_id"] = "5131";
value["5131"]["prv_name"] = "Megacom";
value["5131"]["prv_folder"] = "cellular";
value["5131"]["prv_page"] = "./cellular.html";
value["5131"]["prv_page_conf"] = "./validate_confirm.html";
value["5131"]["prv_alert"] = "";
value["5131"]["prv_image"] = "img/ui_item/megacom.png";
value["5131"]["prv_top_image"] = "./img/ui_item/megacom.png";
value["5131"]["prv_is_cellular"] = true;
value["5131"]["prv_invitation"] = "prov_enter_phone";
value["5131"]["prv_button_text"] = "";
value["5131"]["prv_mask"] = "0 (<!^d+${3}>) <!^d+${6}>";
value["5131"]["prv_group"] = "Сотовая связь";
value["5131"]["prv_online_check"] = "false";

//Megacom TILZ
value["22376"] = new Array();
value["22376"]["prv_id"] = "22376";
value["22376"]["prv_name"] = "Megacom TILZ";
value["22376"]["prv_folder"] = "cellular";
value["22376"]["prv_page"] = "./cellular.html";
value["22376"]["prv_page_conf"] = "./validate_confirm.html";
value["22376"]["prv_alert"] = "";
value["22376"]["prv_image"] = "img/ui_item/Z logo-01.png";
value["22376"]["prv_top_image"] = "./img/ui_item/Z logo-01.png";
value["22376"]["prv_is_cellular"] = true;
value["22376"]["prv_invitation"] = "prov_enter_phone";
value["22376"]["prv_button_text"] = "";
value["22376"]["prv_mask"] = "0 (<!^d+${3}>) <!^d+${6}>";
value["22376"]["prv_group"] = "Сотовая связь";
value["22376"]["prv_online_check"] = "false";

//O!
value["5132"] = new Array();
value["5132"]["prv_id"] = "5132";
value["5132"]["prv_name"] = "O!";
value["5132"]["prv_folder"] = "cellular";
value["5132"]["prv_page"] = "./cellular.html";
value["5132"]["prv_page_conf"] = "./validate_confirm.html";
value["5132"]["prv_alert"] = "";
value["5132"]["prv_image"] = "img/ui_item/o_kg.png";
value["5132"]["prv_top_image"] = "./img/ui_item/o_kg.png";
value["5132"]["prv_is_cellular"] = true;
value["5132"]["prv_invitation"] = "prov_enter_phone";
value["5132"]["prv_button_text"] = "";
value["5132"]["prv_mask"] = "0 (<!^d+${3}>) <!^d+${6}>";
value["5132"]["prv_group"] = "Сотовая связь";
value["5132"]["prv_online_check"] = "false";



//O! <!^\\d+${1}> (<!^\\d+${3}>) <!^d+${6}>
//value["22076"] = new Array();
//value["22076"]["prv_id"] = "22076";
//value["22076"]["prv_name"] = "O!";
//value["22076"]["prv_folder"] = "cellular";
//value["22076"]["prv_page"] = "./cellular.html";
//value["22076"]["prv_page_conf"] = "./validate_confirm.html";
//value["22076"]["prv_alert"] = "";
//value["22076"]["prv_image"] = "img/ui_item/o_kg.png";
//value["22076"]["prv_top_image"] = "./img/ui_item/o_kg.png";
//value["22076"]["prv_is_cellular"] = true;
//value["22076"]["prv_invitation"] = "prov_enter_phone";
//value["22076"]["prv_button_text"] = "";
//value["22076"]["prv_mask"] = "0 (70<!^\\d+${1}>) <!^d+${6}>";
//value["22076"]["prv_group"] = "Сотовая связь";
//value["22076"]["prv_online_check"] = "false";

//Beeline
//14166
value["5135"] = new Array();
value["5135"]["prv_id"] = "5135";
value["5135"]["prv_name"] = "Beeline";
value["5135"]["prv_folder"] = "cellular";
value["5135"]["prv_page"] = "./cellular_beeline.html";
value["5135"]["prv_page_conf"] = "./validate_confirm.html";
value["5135"]["prv_image"] = "img/ui_item/beeline.png";
value["5135"]["prv_alert"] = "";
value["5135"]["prv_image"] = "img/ui_item/beeline.png";
value["5135"]["prv_top_image"] = "./img/ui_item/topprovider_preview.gif";
value["5135"]["prv_is_cellular"] = true;
value["5135"]["prv_invitation"] = "prov_enter_phone";
value["5135"]["prv_button_text"] = "";
value["5135"]["prv_mask"] = "0 (<!^\\d+${3}>) <!^d+${6}>";
//value["5135"]["prv_mask"] = "0 <!^d+${9}>";
value["5135"]["prv_group"] = "Сотовая связь";
value["5135"]["prv_online_check"] = "false";

//Сатком - услуги связи
value["22170"] = new Array();
value["22170"]["prv_id"] = "22170";
value["22170"]["prv_name"] = "Сатком - услуги связи";
value["22170"]["prv_folder"] = "other";
value["22170"]["prv_page"] = "./cellular.html";
value["22170"]["prv_page_conf"] = "./validate_confirm.html";
value["22170"]["prv_alert"] = "";
value["22170"]["prv_image"] = "img/ui_item/satcom_logo.png";
value["22170"]["prv_top_image"] = "./img/ui_item/satcom_logo.png";
value["22170"]["prv_invitation"] = "prov_enter_account";
value["22170"]["prv_button_text"] = "";
value["22170"]["prv_mask"] = "<!^\\d+${4,6}>";
value["22170"]["prv_group"] = "";
value["22170"]["prv_online_check"] = "true";

////Nexi
//value["5133"] = new Array();
//value["5133"]["prv_id"] = "5133";
//value["5133"]["prv_name"] = "Nexi";
//value["5133"]["prv_folder"] = "cellular";
//value["5133"]["prv_page"] = "./cellular.html";
//value["5133"]["prv_page_conf"] = "./validate_confirm.html";
//value["5133"]["prv_alert"] = "";
//value["5133"]["prv_image"] = "img/ui_item/logo_nexi.gif";
//value["5133"]["prv_top_image"] = "./img/ui_item/topprovider_preview.gif";
//value["5133"]["prv_is_cellular"] = true;
//value["5133"]["prv_invitation"] = "prov_enter_phone";
//value["5133"]["prv_button_text"] = "";
//value["5133"]["prv_mask"] = "<!^\\d+${1}> (<!^\\d+${3}>) <!^d+${6}>";
//value["5133"]["prv_group"] = "Сотовая связь";
//value["5133"]["prv_online_check"] = "false";

//Fonex
//value["5134"] = new Array();
//value["5134"]["prv_id"] = "5134";
//value["5134"]["prv_name"] = "Fonex";
//value["5134"]["prv_folder"] = "cellular";
//value["5134"]["prv_page"] = "./cellular.html";
//value["5134"]["prv_page_conf"] = "./validate_confirm.html";
//value["5134"]["prv_alert"] = "";
//value["5134"]["prv_image"] = "img/ui_item/fonex.png";
//value["5134"]["prv_top_image"] = "./img/ui_item/topprovider_preview.gif";
//value["5134"]["prv_is_cellular"] = true;
//value["5134"]["prv_invitation"] = "prov_enter_phone";
//value["5134"]["prv_button_text"] = "";
//value["5134"]["prv_mask"] = "0 (54<!^\\d+${1}>) <!^d+${6}>";
//value["5134"]["prv_group"] = "Сотовая связь";
//value["5134"]["prv_online_check"] = "false";

////Katel
//value["5136"] = new Array();
//value["5136"]["prv_id"] = "5136";
//value["5136"]["prv_name"] = "Katel";
//value["5136"]["prv_folder"] = "cellular";
//value["5136"]["prv_page"] = "./cellular.html";
//value["5136"]["prv_page_conf"] = "./validate_confirm.html";
//value["5136"]["prv_alert"] = "";
//value["5136"]["prv_image"] = "img/ui_item/katel.gif";
//value["5136"]["prv_top_image"] = "./img/ui_item/topprovider_preview.gif";
//value["5136"]["prv_is_cellular"] = true;
//value["5136"]["prv_invitation"] = "prov_enter_phone";
//value["5136"]["prv_button_text"] = "";
//value["5136"]["prv_mask"] = "<!^\\d+${1}> (<!^\\d+${3}>) <!^d+${6}>";
//value["5136"]["prv_group"] = "Сотовая связь";
//value["5136"]["prv_online_check"] = "false";

////Sapatmobile
//value["5177"] = new Array();
//value["5177"]["prv_id"] = "5177";
//value["5177"]["prv_name"] = "Sapatmobile";
//value["5177"]["prv_folder"] = "cellular";
//value["5177"]["prv_page"] = "./cellular.html";
//value["5177"]["prv_page_conf"] = "./validate_confirm.html";
//value["5177"]["prv_alert"] = "Уважаемые абоненты! Сообщаем Вам о том, что с 1 ноября 2011 года, во избежание отключения, задолженность за услуги связи, полученные Вами в прошедшем месяце, необходимо оплачивать до 5 числа каждого следующего месяца. Справки по телефону: <br>0(312) 69-00-00, 89-00-00";
//value["5177"]["prv_image"] = "img/ui_item/sapatcom.png";
//value["5177"]["prv_top_image"] = "./img/ui_item/topprovider_preview.gif";
//value["5177"]["prv_is_cellular"] = true;
//value["5177"]["prv_invitation"] = "prov_enter_phone";
//value["5177"]["prv_button_text"] = "";
//value["5177"]["prv_mask"] = "0 (56<!^\\d+${1}>) <!^d+${6}>";
//value["5177"]["prv_group"] = "Сотовая связь";
//value["5177"]["prv_online_check"] = "true";

// ZKH

// Мусор
value["21"] = new Array();
//value["21"]["prv_id"]="21";
value["21"]["prv_name"] = "Вывоз мусора";
value["21"]["prv_folder"] = "zkh";
value["21"]["prv_image"] = "./img/ui_item/garbage.png";
value["21"]["prv_page"] = "./cellular.html";
value["21"]["prv_page_conf"] = "./validate_confirm.html";
value["21"]["prv_alert"] = "";
value["21"]["prv_button_text"] = "";

// Газ
value["22"] = new Array();
//value["22"]["prv_id"]="22";
value["22"]["prv_name"] = "Газ";
value["22"]["prv_folder"] = "zkh";
value["22"]["prv_image"] = "./img/ui_item/gas.png";
value["22"]["prv_page"] = "./cellular.html";
value["22"]["prv_page_conf"] = "./validate_confirm.html";
value["22"]["prv_alert"] = "";
value["22"]["prv_button_text"] = "";

// Свет
value["23"] = new Array();
//value["23"]["prv_id"]="23";
value["23"]["prv_name"] = "Свет";
value["23"]["prv_folder"] = "zkh";
value["23"]["prv_image"] = "./img/ui_item/light.png";
value["23"]["prv_page"] = "./cellular.html";
value["23"]["prv_page_conf"] = "./validate_confirm.html";
value["23"]["prv_alert"] = "";
value["23"]["prv_button_text"] = "";

// Вода
value["24"] = new Array();
//value["24"]["prv_id"]="24";
value["24"]["prv_name"] = "Холодная вода";
value["24"]["prv_folder"] = "zkh";
value["24"]["prv_image"] = "./img/ui_item/water.png";
value["24"]["prv_page"] = "./cellular.html";
value["24"]["prv_page_conf"] = "./validate_confirm.html";
value["24"]["prv_alert"] = "";
value["24"]["prv_button_text"] = "";

// Лифт
value["25"] = new Array();
//value["25"]["prv_id"]="25";
value["25"]["prv_name"] = "Оплата за Лифт";
value["25"]["prv_folder"] = "zkh";
value["25"]["prv_image"] = "./img/ui_item/elevator.png";
value["25"]["prv_page"] = "./cellular.html";
value["25"]["prv_page_conf"] = "./validate_confirm.html";
value["25"]["prv_alert"] = "";
value["25"]["prv_button_text"] = "";

// Отопление
value["26"] = new Array();
//value["26"]["prv_id"]="26";
value["26"]["prv_name"] = "Горячая вода и Отопление";
value["26"]["prv_folder"] = "zkh";
value["26"]["prv_image"] = "./img/ui_item/heating.png";
value["26"]["prv_page"] = "./cellular.html";
value["26"]["prv_page_conf"] = "./validate_confirm.html";
value["26"]["prv_alert"] = "";
value["26"]["prv_button_text"] = "";

// Фиксированная связь

//TezTelecom
value["5137"] = new Array();
value["5137"]["prv_id"] = "5137";
value["5137"]["prv_name"] = "Teztelecom";
value["5137"]["prv_folder"] = "fixed";
value["5137"]["prv_page"] = "./cellular.html";
value["5137"]["prv_page_conf"] = "./validate_confirm.html";
value["5137"]["prv_image"] = "./img/ui_item/TezTelecom.png";
value["5137"]["prv_alert"] = "";
value["5137"]["prv_invitation"] = "prov_enter_phone";
value["5137"]["prv_button_text"] = "";
value["5137"]["prv_mask"] = "0 (<!^\\d+${3}>) <!^d+${6}>";
value["5137"]["prv_group"] = "Фиксированная связь";
value["5137"]["prv_online_check"] = "true";

//Кыргызтелеком
value["5138"] = new Array();
value["5138"]["prv_id"] = "5138";
value["5138"]["prv_name"] = "Кыргызтелеком";
value["5138"]["prv_folder"] = "fixed";
value["5138"]["prv_page"] = "./cellular.html";
value["5138"]["prv_image"] = "img/ui_item/ktelecom.png";
value["5138"]["prv_page_conf"] = "./validate_confirm.html";
value["5138"]["prv_alert"] = "";
value["5138"]["prv_invitation"] = "prov_enter_acc_or_phone";
value["5138"]["prv_button_text"] = "";
value["5138"]["prv_mask"] = "<!^\\d+${1,20}>";
value["5138"]["prv_group"] = "Фиксированная связь";
value["5138"]["prv_online_check"] = "true";

//Saimatelecom
value["5139"] = new Array();
value["5139"]["prv_id"] = "5139";
value["5139"]["prv_name"] = "Saimatelecom";
value["5139"]["prv_folder"] = "fixed";
value["5139"]["prv_page"] = "./cellular.html";
value["5139"]["prv_image"] = "img/ui_item/saima.png";
value["5139"]["prv_page_conf"] = "./validate_confirm.html";
value["5139"]["prv_alert"] = "";
value["5139"]["prv_invitation"] = "prov_enter_code";
value["5139"]["prv_button_text"] = "";
value["5139"]["prv_mask"] = "<!^\\d+${6}>";
value["5139"]["prv_group"] = "Услуги связи";
value["5139"]["prv_online_check"] = "true";

////Sapatcom
//value["5176"] = new Array();
//value["5176"]["prv_id"] = "5176";
//value["5176"]["prv_name"] = "Sapatcom";
//value["5176"]["prv_folder"] = "fixed";
//value["5176"]["prv_page"] = "./cellular.html";
//value["5176"]["prv_image"] = "img/ui_item/sapatcom.png";
//value["5176"]["prv_page_conf"] = "./validate_confirm.html";
//value["5176"]["prv_alert"] = "Уважаемые абоненты! Сообщаем Вам о том, что с 1 ноября 2011 года, во избежание отключения, задолженность за услуги связи, полученные Вами в прошедшем месяце, необходимо оплачивать до 5 числа каждого следующего месяца. Справки по телефону: <br>0(312) 69-00-00, 89-00-00";
//value["5176"]["prv_invitation"] = "prov_enter_phone";
//value["5176"]["prv_button_text"] = "";
//value["5176"]["prv_mask"] = "0312 <!^\\d+${6}>";
//value["5176"]["prv_group"] = "Фиксированная связь";
//value["5176"]["prv_online_check"] = "true";

// Каьельное ТВ

// 	NeoTelecom - цифровое ТВ
value["5153"] = new Array();
value["5153"]["prv_id"] = "5153";
value["5153"]["prv_name"] = "NeoTelecom";
value["5153"]["prv_folder"] = "tv";
value["5153"]["prv_page"] = "./cellular.html";
value["5153"]["prv_page_conf"] = "./validate_confirm.html";
value["5153"]["prv_image"] = "img/ui_item/SmartMetro.png";
value["5153"]["prv_alert"] = "";
value["5153"]["prv_invitation"] = "prov_enter_code";
value["5153"]["prv_button_text"] = "";
value["5153"]["prv_mask"] = "<!^\\d+${6,12}>";
value["5153"]["prv_group"] = "Цифровое ТВ";
value["5153"]["prv_online_check"] = "true";

//Ala ТВ
value["5183"] = new Array();
value["5183"]["prv_id"] = "5183";
value["5183"]["prv_name"] = "Ала ТВ";
value["5183"]["prv_folder"] = "tv";
value["5183"]["prv_page"] = "./cellular.html";
value["5183"]["prv_image"] = "img/ui_item/alatv.png";
value["5183"]["prv_page_conf"] = "./validate_confirm.html";
value["5183"]["prv_alert"] = "\"Уважаемые абоненты кабельного телевидения \"Ала ТВ\"! C 12 ноября 2015 года абоненская плата будет составлять:<br />в аналогичном пакете \"Universal\" - 495 сом.<br />в цифровом пакете\"Оптимальный\" - 500 сом.<br />Абонентам, имеющим положительный баланс на начало 2016 года, услуга будет предоставляться без перерасчета, на весь оплаченный период. Справки по телефону: 547777\"";
value["5183"]["prv_invitation"] = "prov_enter_account";
value["5183"]["prv_button_text"] = "";
value["5183"]["prv_mask"] = "<!^\\d+${1,20}>/0";
value["5183"]["prv_group"] = "Кабельное тв";
value["5183"]["prv_online_check"] = "true";

// Интернет и IP телефония

////Foris telecom (In.kg)
//value["9765"] = new Array();
//value["9765"]["prv_id"] = "9765";
//value["9765"]["prv_name"] = "In";
//value["9765"]["prv_folder"] = "internet";
//value["9765"]["prv_page"] = "./cellular.html";
//value["9765"]["prv_image"] = "img/ui_item/ForisTelecom_IN.png";
//value["9765"]["prv_page_conf"] = "./validate_confirm.html";
//value["9765"]["prv_alert"] = "";
//value["9765"]["prv_invitation"] = "prov_enter_code";
//value["9765"]["prv_button_text"] = "";
//value["9765"]["prv_group"] = "Интернет";
//value["9765"]["prv_mask"] = "<!^\\d+${6}>";
//value["9765"]["prv_online_check"] = "false";

// ADSL Кыргызтелеком
value["5191"] = new Array();
value["5191"]["prv_id"] = "5191";
value["5191"]["prv_name"] = "КЫРГЫЗТЕЛЕКОМ - ADSL";
value["5191"]["prv_folder"] = "internet";
value["5191"]["prv_page"] = "./cellular.html";
value["5191"]["prv_image"] = "img/ui_item/ktelecom.png";
value["5191"]["prv_page_conf"] = "./validate_confirm.html";
value["5191"]["prv_alert"] = "";
value["5191"]["prv_invitation"] = "prov_enter_code";
value["5191"]["prv_button_text"] = "";
value["5191"]["prv_mask"] = "<!^\\d+${1,20}>";
value["5191"]["prv_group"] = "Интернет-услуги";
value["5191"]["prv_online_check"] = "true";

// JET
value["5192"] = new Array();
value["5192"]["prv_id"] = "5192";
value["5192"]["prv_name"] = "JET";
value["5192"]["prv_folder"] = "internet";
value["5192"]["prv_page"] = "./cellular.html";
value["5192"]["prv_image"] = "img/ui_item/jet.png";
value["5192"]["prv_page_conf"] = "./validate_confirm.html";
value["5192"]["prv_alert"] = "";
value["5192"]["prv_invitation"] = "prov_enter_code";
value["5192"]["prv_button_text"] = "";
value["5192"]["prv_mask"] = "<!^\\d+${1,20}>";
value["5192"]["prv_group"] = "Интернет-услуги";
value["5192"]["prv_online_check"] = "true";

//Saima Net
value["5141"] = new Array();
value["5141"]["prv_id"] = "5141";
value["5141"]["prv_name"] = "SaimaTelecom";
value["5141"]["prv_folder"] = "internet";
value["5141"]["prv_page"] = "./cellular.html";
value["5141"]["prv_image"] = "img/ui_item/saima.png";
value["5141"]["prv_page_conf"] = "./validate_confirm.html";
value["5141"]["prv_alert"] = "";
value["5141"]["prv_invitation"] = "prov_enter_code";
value["5141"]["prv_button_text"] = "";
value["5141"]["prv_mask"] = "<!^\\d+${6,6}>";
value["5141"]["prv_group"] = "Интернет-услуги";
value["5141"]["prv_online_check"] = "false";

// City net
value["5142"] = new Array();
value["5142"]["prv_id"] = "5142";
value["5142"]["prv_name"] = "City Net";
value["5142"]["prv_folder"] = "internet";
value["5142"]["prv_page"] = "./cellular.html";
value["5142"]["prv_page_conf"] = "./validate_confirm.html";
value["5142"]["prv_alert"] = "";
value["5142"]["prv_image"] = "img/ui_item/citynet.png";
value["5142"]["prv_invitation"] = "prov_enter_code";
value["5142"]["prv_button_text"] = "";
value["5142"]["prv_mask"] = "<!^\\d+${6,10}>";
value["5142"]["prv_group"] = "Интернет-услуги";
value["5142"]["prv_online_check"] = "false";

//Aknet
value["5144"] = new Array();
value["5144"]["prv_id"] = "5144";
value["5144"]["prv_name"] = "АКНЕТ-Оплата за интернет";
value["5144"]["prv_folder"] = "internet";
value["5144"]["prv_page"] = "./cellular.html";
value["5144"]["prv_image"] = "img/ui_item/aknet-in.png";
value["5144"]["prv_page_conf"] = "./validate_confirm.html";
value["5144"]["prv_alert"] = "";
value["5144"]["prv_invitation"] = "prov_enter_code";
value["5144"]["prv_button_text"] = "";
value["5144"]["prv_mask"] = "<!^\\d+${1,20}>";
value["5144"]["prv_group"] = "";
value["5144"]["prv_online_check"] = "true";

//ВинЭт - оплата за интернет
// Comment provider
// value["22168"] = new Array();
// value["22168"]["prv_id"] = "22168";
// value["22168"]["prv_name"] = "ViNET";
// value["22168"]["prv_folder"] = "other";
// value["22168"]["prv_page"] = "./cellular.html";
// value["22168"]["prv_page_conf"] = "./validate_confirm.html";
// value["22168"]["prv_alert"] = "";
// value["22168"]["prv_image"] = "img/ui_item/vinet_logo.png";
// value["22168"]["prv_top_image"] = "./img/ui_item/vinet_logo.png";
// value["22168"]["prv_invitation"] = "prov_enter_account";
// value["22168"]["prv_button_text"] = "";
// value["22168"]["prv_mask"] = "<!^\\d+${10}>";
// value["22168"]["prv_group"] = "";
// value["22168"]["prv_online_check"] = "true";

//Скайнет - оплата за интернет
value["22186"] = new Array();
value["22186"]["prv_id"] = "22186";
value["22186"]["prv_name"] = "Скайнет - оплата за интернет";
value["22186"]["prv_folder"] = "internet";
value["22186"]["prv_page"] = "./cellular.html";
value["22186"]["prv_page_conf"] = "./validate_confirm.html";
value["22186"]["prv_alert"] = "";
value["22186"]["prv_image"] = "img/ui_item/skynet_logo.png";
value["22186"]["prv_top_image"] = "./img/ui_item/skynet_logo.png";
value["22186"]["prv_invitation"] = "prov_enter_account";
value["22186"]["prv_button_text"] = "";
value["22186"]["prv_mask"] = "<!^\\d+${9}>";
value["22186"]["prv_group"] = "";
value["22186"]["prv_online_check"] = "true";

//Fast Net
value["5145"] = new Array();
value["5145"]["prv_id"] = "5145";
value["5145"]["prv_name"] = "Fast Net";
value["5145"]["prv_folder"] = "internet";
value["5145"]["prv_page"] = "./cellular.html";
value["5145"]["prv_page_conf"] = "./validate_confirm.html";
value["5145"]["prv_image"] = "img/ui_item/fn.png";
value["5145"]["prv_alert"] = "";
value["5145"]["prv_invitation"] = "prov_enter_code";
value["5145"]["prv_button_text"] = "";
value["5145"]["prv_mask"] = "<!^\\d+${1,20}>";
value["5145"]["prv_group"] = "Oплата за Интернет";
value["5145"]["prv_online_check"] = "false";

//Totel
value["5146"] = new Array();
value["5146"]["prv_id"] = "5146";
value["5146"]["prv_name"] = "Totel";
value["5146"]["prv_folder"] = "internet";
value["5146"]["prv_page"] = "./cellular.html";
value["5146"]["prv_image"] = "img/ui_item/totel.gif";
value["5146"]["prv_page_conf"] = "./validate_confirm.html";
value["5146"]["prv_alert"] = "";
value["5146"]["prv_invitation"] = "prov_enter_code";
value["5146"]["prv_button_text"] = "";
value["5146"]["prv_mask"] = "<!^\\d+${6,10}>";
value["5146"]["prv_group"] = "Интернет-услуги";
value["5146"]["prv_online_check"] = "true";

// Megaline
value["5147"] = new Array();
value["5147"]["prv_id"] = "5147";
value["5147"]["prv_name"] = "Megaline";
value["5147"]["prv_folder"] = "internet";
value["5147"]["prv_page"] = "./cellular.html";
value["5147"]["prv_page_conf"] = "./validate_confirm.html";
value["5147"]["prv_image"] = "img/ui_item/megaline.png";
value["5147"]["prv_alert"] = "";
value["5147"]["prv_invitation"] = "prov_enter_code";
value["5147"]["prv_button_text"] = "";
value["5147"]["prv_mask"] = "<!^\\d+${1,20}>";
value["5147"]["prv_group"] = "Интернет-услуги";
value["5147"]["prv_online_check"] = "true";

//Homeline
value["5149"] = new Array();
value["5149"]["prv_id"] = "5149";
value["5149"]["prv_name"] = "Homeline";
value["5149"]["prv_folder"] = "internet";
value["5149"]["prv_page"] = "./cellular.html";
value["5149"]["prv_page_conf"] = "./validate_confirm.html";
value["5149"]["prv_alert"] = "";
value["5149"]["prv_image"] = "img/ui_item/homeline.png";
value["5149"]["prv_invitation"] = "prov_enter_code";
value["5149"]["prv_button_text"] = "";
value["5149"]["prv_mask"] = "<!^\\d+${8}>";
value["5149"]["prv_group"] = "Интернет-услуги";
value["5149"]["prv_online_check"] = "false";

//Elcat
value["5150"] = new Array();
value["5150"]["prv_id"] = "5150";
value["5150"]["prv_name"] = "Elcat";
value["5150"]["prv_folder"] = "internet";
value["5150"]["prv_page"] = "./cellular.html";
value["5150"]["prv_image"] = "img/ui_item/elcat.png";
value["5150"]["prv_page_conf"] = "./validate_confirm.html";
value["5150"]["prv_alert"] = "";
value["5150"]["prv_invitation"] = "prov_enter_code";
value["5150"]["prv_button_text"] = "";
value["5150"]["prv_mask"] = "<!^\\d+${1,20}>";
value["5150"]["prv_group"] = "Интернет-услуги";
value["5150"]["prv_online_check"] = "true";

//Сатком - услуги связи
value["22170"] = new Array();
value["22170"]["prv_id"] = "22170";
value["22170"]["prv_name"] = "Сатком - услуги связи";
value["22170"]["prv_folder"] = "other";
value["22170"]["prv_page"] = "./cellular.html";
value["22170"]["prv_page_conf"] = "./validate_confirm.html";
value["22170"]["prv_alert"] = "";
value["22170"]["prv_image"] = "img/ui_item/satcom_logo.png";
value["22170"]["prv_top_image"] = "./img/ui_item/satcom_logo.png";
value["22170"]["prv_invitation"] = "prov_enter_account";
value["22170"]["prv_button_text"] = "";
value["22170"]["prv_mask"] = "<!^\\d+${4,6}>";
value["22170"]["prv_group"] = "";
value["22170"]["prv_online_check"] = "true";

//Долон Интернет
/*value["5206"] = new Array ();
value["5206"]["prv_id"]="5206";
value["5206"]["prv_name"]= "Долон Интернет";
value["5206"]["prv_folder"]="internet";
value["5206"]["prv_page"]="./cellular.html";
value["5206"]["prv_page_conf"]="./validate_confirm.html";
value["5206"]["prv_alert"]="";
value["5206"]["prv_invitation"] = "prov_enter_code";
value["5206"]["prv_button_text"] = "";
value["5206"]["prv_mask"] = "<!^\\d+${6}>";
value["5206"]["prv_group"] = "Интернет-услуги";
value["5206"]["prv_online_check"] = "false";*/

//Трансфер
value["5179"] = new Array();
value["5179"]["prv_id"] = "5179";
value["5179"]["prv_name"] = "Трансфер";
value["5179"]["prv_folder"] = "internet";
value["5179"]["prv_page"] = "./cellular.html";
value["5179"]["prv_image"] = "img/ui_item/transfer.png";
value["5179"]["prv_page_conf"] = "./validate_confirm.html";
value["5179"]["prv_alert"] = "";
value["5179"]["prv_invitation"] = "prov_enter_code";
value["5179"]["prv_button_text"] = "";
value["5179"]["prv_mask"] = "<!^\\d+${1,5}>";
value["5179"]["prv_group"] = "Интернет-услуги";
value["5179"]["prv_online_check"] = "true";

// IPswich
value["7590"] = new Array();
value["7590"]["prv_id"] = "7590";
value["7590"]["prv_name"] = "IPswich";
value["7590"]["prv_folder"] = "internet";
value["7590"]["prv_page"] = "./cellular.html";
value["7590"]["prv_image"] = "img/ui_item/ipswitch.png";
value["7590"]["prv_page_conf"] = "./validate_confirm.html";
value["7590"]["prv_alert"] = "";
value["7590"]["prv_invitation"] = "prov_enter_code";
value["7590"]["prv_button_text"] = "";
value["7590"]["prv_mask"] = "<!^\\d+${1,12}>";
value["7590"]["prv_group"] = "Интернет-услуги";
value["7590"]["prv_online_check"] = "false";

//Штрафы и Гос. пошлины

//Кыргыз Патент
//value["601"] = new Array ();
//value["601"]["prv_id"]="601";
//value["601"]["prv_name"]= "Кыргыз Патент";
//value["601"]["prv_folder"]="tax";
//value["601"]["prv_page"]="./cellular.html";
//value["601"]["prv_page_conf"]="./validate_confirm.html";
//value["601"]["prv_alert"]="";

// Контент и интерент магазины

// Контентэ
value["content_provs"] = new Array();
value["content_provs"]["prv_name"] = "Контент";
value["content_provs"]["prv_image"] = "img/ui_item/icon_kontent.gif";

value["social_network"] = new Array();
value["social_network"]["prv_name"] = "Социальные сети";
value["social_network"]["prv_image"] = "img/ui_item/grp125Social_networks.gif";

// Интернет-игры
value["internet_games"] = new Array();
value["internet_games"]["prv_name"] = "Интернет игры";
value["internet_games"]["prv_image"] = "img/ui_item/icon_games.gif";

//join.kg
value["6408"] = new Array();
value["6408"]["prv_id"] = "6408";
value["6408"]["prv_name"] = "Комок.kg";
value["6408"]["prv_folder"] = "content";
value["6408"]["prv_page"] = "./cellular.html";
value["6408"]["prv_image"] = "img/ui_item/komok.gif";
value["6408"]["prv_page_conf"] = "./validate_confirm.html";
value["6408"]["prv_alert"] = "";
value["6408"]["prv_invitation"] = "prov_enter_code";
value["6408"]["prv_button_text"] = "";
value["6408"]["prv_mask"] = "0<!^\\d+${9}>";
value["6408"]["prv_group"] = "";
value["6408"]["prv_online_check"] = "false";

//Namba
// Comment provider
// value["5661"] = new Array();
// value["5661"]["prv_id"] = "5661";
// value["5661"]["prv_name"] = "Namba - Покупка контента и скидок";
// value["5661"]["prv_folder"] = "content";
// value["5661"]["prv_page"] = "./cellular.html";
// value["5661"]["prv_image"] = "img/ui_item/namba_1.png";
// value["5661"]["prv_page_conf"] = "./validate_confirm.html";
// value["5661"]["prv_alert"] = "";
// value["5661"]["prv_invitation"] = "prov_enter_code";
// value["5661"]["prv_button_text"] = "";
// value["5661"]["prv_mask"] = "<!^\\d+${1,11}>";
// value["5661"]["prv_group"] = "";
// value["5661"]["prv_online_check"] = "true";

//Хостер.kg
value["5175"] = new Array();
value["5175"]["prv_id"] = "5175";
value["5175"]["prv_name"] = "Hoster.Kg";
value["5175"]["prv_folder"] = "content";
value["5175"]["prv_page"] = "./cellular.html";
value["5175"]["prv_image"] = "img/ui_item/hoster.png";
value["5175"]["prv_page_conf"] = "./validate_confirm.html";
value["5175"]["prv_alert"] = "";
value["5175"]["prv_invitation"] = "prov_enter_code";
value["5175"]["prv_button_text"] = "";
value["5175"]["prv_mask"] = "<!^\\d+${1,8}>";
value["5175"]["prv_group"] = "Оплата за хостинг";
value["5175"]["prv_online_check"] = "true";

//Music.kg
/*value["5148"] = new Array ();
value["5148"]["prv_id"]="5148";
value["5148"]["prv_name"]= "Music.kg";
value["5148"]["prv_folder"]="content";
value["5148"]["prv_page"]="./cellular.html";
value["5148"]["prv_page_conf"]="./validate_confirm.html";
value["5148"]["prv_alert"]="";
value["5148"]["prv_invitation"] = "prov_enter_code";
value["5148"]["prv_button_text"] = "";
value["5148"]["prv_image"] = "img/ui_item/MusicKG.gif";
value["5148"]["prv_mask"] = "<!^\\d+${6}>";
value["5148"]["prv_group"] = "Контент-услуги";
value["5148"]["prv_online_check"] = "false";*/

//Torrent.kg
//value["5155"] = new Array();
//value["5155"]["prv_id"] = "5155";
//value["5155"]["prv_name"] = "TORRENT.KG - Покупка контента";
//value["5155"]["prv_folder"] = "content";
//value["5155"]["prv_page"] = "./cellular.html";
//value["5155"]["prv_image"] = "img/ui_item/torrent.png";
//value["5155"]["prv_page_conf"] = "./validate_confirm.html";
//value["5155"]["prv_alert"] = "";
//value["5155"]["prv_invitation"] = "prov_enter_code";
//value["5155"]["prv_button_text"] = "";
//value["5155"]["prv_mask"] = "<!^\\d+${1,20}>";
//value["5155"]["prv_group"] = "";
//value["5155"]["prv_online_check"] = "true";

//Vteme.kg
value["9946"] = new Array();
value["9946"]["prv_id"] = "9946";
value["9946"]["prv_name"] = "Покупка купона";
value["9946"]["prv_folder"] = "content";
value["9946"]["prv_page"] = "./cellular.html";
value["9946"]["prv_image"] = "img/ui_item/vteme.png";
value["9946"]["prv_page_conf"] = "./validate_confirm.html";
value["9946"]["prv_alert"] = "";
value["9946"]["prv_invitation"] = "prov_enter_code";
value["9946"]["prv_button_text"] = "";
value["9946"]["prv_mask"] = "<!^\\d+${6,10}>";
value["9946"]["prv_group"] = "";
value["9946"]["prv_online_check"] = "false";

//Diskont.kg
value["diskont_kg"] = new Array();
value["diskont_kg"]["prv_name"] = "Diskont.kg";
value["diskont_kg"]["prv_image"] = "./img/ui_item/DiscontKG.png";

//Diskont.kg покупка купона
// Comment provider
// value["9944"] = new Array();
// value["9944"]["prv_id"] = "9944";
// value["9944"]["prv_name"] = "Покупка скидочного купона";
// value["9944"]["prv_folder"] = "content";
// value["9944"]["prv_page"] = "./cellular.html";
// value["9944"]["prv_image"] = "img/ui_item/DiscontKG.png";
// value["9944"]["prv_page_conf"] = "./validate_confirm.html";
// value["9944"]["prv_alert"] = "";
// value["9944"]["prv_invitation"] = "prov_enter_code";
// value["9944"]["prv_button_text"] = "";
// value["9944"]["prv_mask"] = "<!^\\d+${6,10}>";
// value["9944"]["prv_group"] = "";
// value["9944"]["prv_online_check"] = "false";

//Diskont.kg пополнени электронного счета
// Comment provider
// value["10022"] = new Array();
// value["10022"]["prv_id"] = "10022";
// value["10022"]["prv_name"] = "Пополнение электронного счета";
// value["10022"]["prv_folder"] = "content";
// value["10022"]["prv_page"] = "./provider.html";
// value["10022"]["prv_image"] = "img/ui_item/DiscontKG.png";
// value["10022"]["prv_page_conf"] = "./validate_confirm.html";
// value["10022"]["prv_alert"] = "";
// value["10022"]["prv_invitation"] = "prov_enter_code";
// value["10022"]["prv_button_text"] = "";
// value["10022"]["prv_mask"] = "<!^.+${1,33}>";
// value["10022"]["prv_group"] = "";
// value["10022"]["prv_online_check"] = "false";

//My Logo
value["5156"] = new Array();
value["5156"]["prv_id"] = "5156";
value["5156"]["prv_name"] = "My Logo";
value["5156"]["prv_folder"] = "content";
value["5156"]["prv_page"] = "./cellular.html";
value["5156"]["prv_page_conf"] = "./validate_confirm.html";
value["5156"]["prv_alert"] = "";
value["5156"]["prv_invitation"] = "prov_enter_code";
value["5156"]["prv_button_text"] = "";
value["5156"]["prv_mask"] = "<!^\\d+${10}>";
value["5156"]["prv_group"] = "Контент-услуги";
value["5156"]["prv_online_check"] = "false";

//DAB Media
value["5143"] = new Array();
value["5143"]["prv_id"] = "5143";
value["5143"]["prv_name"] = "DAB Media";
value["5143"]["prv_folder"] = "content";
value["5143"]["prv_page"] = "./cellular.html";
value["5143"]["prv_page_conf"] = "./validate_confirm.html";
value["5143"]["prv_alert"] = "";
value["5143"]["prv_invitation"] = "prov_enter_code";
value["5143"]["prv_mask"] = "<!^\\d+${1,6}>";
value["5143"]["prv_group"] = "Контент-услуги";
value["5143"]["prv_online_check"] = "true";

//Товары по каталогу

//Oriflame
value["5186"] = new Array();
value["5186"]["prv_id"] = "5186";
value["5186"]["prv_name"] = "Оплата заказа";
value["5186"]["prv_folder"] = "other";
value["5186"]["prv_page"] = "./cellular.html";
value["5186"]["prv_image"] = "img/ui_item/oriflame.png";
value["5186"]["prv_page_conf"] = "./validate_confirm.html";
value["5186"]["prv_alert"] = "";
value["5186"]["prv_invitation"] = "prov_enter_code";
value["5186"]["prv_mask"] = "<!^\\d+${1,20}>";
value["5186"]["prv_group"] = "Oriflame";
value["5186"]["prv_online_check"] = "true";

//Рекламные услуги

value["adverts"] = new Array();
value["adverts"]["prv_name"] = "Рекламные услуги";
value["adverts"]["prv_image"] = "img/ui_item/kassa.png";

//Akipress
value["7589"] = new Array();
value["7589"]["prv_id"] = "7589";
value["7589"]["prv_name"] = "Акипресс - Рекламные услуги";
value["7589"]["prv_folder"] = "adv";
value["7589"]["prv_page"] = "./cellular.html";
value["7589"]["prv_image"] = "img/ui_item/logo_akipress.gif";
value["7589"]["prv_page_conf"] = "./validate_confirm.html";
value["7589"]["prv_alert"] = "";
value["7589"]["prv_invitation"] = "prov_enter_code";
value["7589"]["prv_button_text"] = "";
value["7589"]["prv_mask"] = "<!^\\d+${1,10}>";
value["7589"]["prv_group"] = "";
value["7589"]["prv_online_check"] = "false";

//Партнеры
value["5181"] = new Array();
value["5181"]["prv_id"] = "5181";
value["5181"]["prv_name"] = "Партнеры - Рекламные услуги";
value["5181"]["prv_folder"] = "adv";
value["5181"]["prv_page"] = "./cellular.html";
value["5181"]["prv_image"] = "img/ui_item/partnery.gif";
value["5181"]["prv_page_conf"] = "./validate_confirm.html";
value["5181"]["prv_alert"] = "";
value["5181"]["prv_invitation"] = "prov_enter_code";
value["5181"]["prv_button_text"] = "";
value["5181"]["prv_mask"] = "<!^\\d+${1,10}>";
value["5181"]["prv_group"] = "";
value["5181"]["prv_online_check"] = "false";

// Газета Мое Жилье
value["7324"] = new Array();
value["7324"]["prv_id"] = "7324";
value["7324"]["prv_name"] = "Газета «Мое Жилье»";
value["7324"]["prv_folder"] = "adv";
value["7324"]["prv_page"] = "./cellular.html";
value["7324"]["prv_image"] = "img/ui_item/my_house.gif";
value["7324"]["prv_top_image"] = "img/ui_item/my_house.gif";
value["7324"]["prv_page_conf"] = "./validate_confirm.html";
value["7324"]["prv_alert"] = "";
value["7324"]["prv_invitation"] = "prov_enter_code";
value["7324"]["prv_button_text"] = "";
value["7324"]["prv_mask"] = "<!^\\d+${1,6}>";
value["7324"]["prv_group"] = "Рекламные услуги";
value["7324"]["prv_online_check"] = "false";

// Газета Деньги и Власть
value["10072"] = new Array();
value["10072"]["prv_id"] = "10072";
value["10072"]["prv_name"] = "Газета «Деньги и Власть»";
value["10072"]["prv_folder"] = "adv";
value["10072"]["prv_page"] = "./cellular.html";
value["10072"]["prv_image"] = "img/ui_item/Dengi&Vlast.png";
value["10072"]["prv_top_image"] = "img/ui_item/Dengi&Vlast.png";
value["10072"]["prv_page_conf"] = "./validate_confirm.html";
value["10072"]["prv_alert"] = "";
value["10072"]["prv_invitation"] = "prov_enter_code";
value["10072"]["prv_button_text"] = "";
value["10072"]["prv_mask"] = "<!^\\d+${6}>";
value["10072"]["prv_group"] = "Рекламные услуги";
value["10072"]["prv_online_check"] = "false";

//Кауфман
/*value["5182"] = new Array ();
value["5182"]["prv_id"]="5182";
value["5182"]["prv_name"]= "Кауфман";
value["5182"]["prv_folder"]="adv";
value["5182"]["prv_page"]="./cellular.html";
value["5182"]["prv_page_conf"]="./validate_confirm.html";
value["5182"]["prv_alert"]="";
value["5182"]["prv_invitation"] = "prov_enter_code";
value["5182"]["prv_button_text"] = "";
value["5182"]["prv_mask"] = "<!^\\d+${1,20}>";
value["5182"]["prv_group"] = "Размещение рекламы в СМИ";
value["5182"]["prv_online_check"] = "false";*/

//Другие услуги

//Спорт лото
//value["7335"] = new Array();
//value["7335"]["prv_id"]="7335";
//value["7335"]["prv_name"]= "Артлото - Тотализатор";
//value["7335"]["prv_folder"]="other";
//value["7335"]["prv_page"]="./p_sport_loto_rules2.html";
//value["7335"]["prv_page_conf"]="./validate_confirm.html";
//value["7335"]["prv_alert"]="";
//value["7335"]["prv_invitation"] = "prov_enter_code";
//value["7335"]["prv_button_text"] = "";
//value["7335"]["prv_image"] = "img/ui_item/artloto.gif";
//value["7335"]["prv_mask"] = "<!^\\d+${5,14}>";
//value["7335"]["prv_group"] = "";
//value["7335"]["prv_online_check"] = "false";

////Мобильные ставки
//value["5152"] = new Array();
//value["5152"]["prv_id"] = "5152";
//value["5152"]["prv_name"] = "Мобильные ставки";
//value["5152"]["prv_folder"] = "other";
//value["5152"]["prv_page"] = "./cellular.html";
//value["5152"]["prv_page_conf"] = "./validate_confirm.html";
//value["5152"]["prv_alert"] = "";
//value["5152"]["prv_invitation"] = "prov_enter_code";
//value["5152"]["prv_button_text"] = "";
//value["5152"]["prv_image"] = "img/ui_item/Mobilnye_Stavki.png";
//value["5152"]["prv_mask"] = "<!^\\d+${5,14}>";
//value["5152"]["prv_group"] = "Букмекерские ставки";
//value["5152"]["prv_online_check"] = "true";

//KRSU
value["5761"] = new Array();
value["5761"]["prv_id"] = "5761";
value["5761"]["prv_name"] = "КРСУ";
value["5761"]["prv_folder"] = "other";
value["5761"]["prv_page"] = "./provider.html";
value["5761"]["prv_page_conf"] = "./validate_confirm.html";
value["5761"]["prv_alert"] = "";
value["5761"]["prv_invitation"] = "prov_enter_code";
value["5761"]["prv_button_text"] = "Папка абитуриента";
value["5761"]["prv_image"] = "img/ui_item/krsu.gif";
value["5761"]["prv_mask"] = "<!^.+${1,40}>";// "<!^\\d+${6,6}>";
value["5761"]["prv_group"] = "Оплата за папку абитуриента";
value["5761"]["prv_online_check"] = "true";

//Виннер Спорт
value["5659"] = new Array();
value["5659"]["prv_id"] = "5659";
value["5659"]["prv_name"] = "Букмекерские ставки";
value["5659"]["prv_folder"] = "other";
value["5659"]["prv_page"] = "./cellular.html";
value["5659"]["prv_page_conf"] = "./validate_confirm.html";
value["5659"]["prv_alert"] = "";
value["5659"]["prv_invitation"] = "prov_enter_code";
value["5659"]["prv_button_text"] = "";
value["5659"]["prv_image"] = "img/ui_item/WinnerSport.gif";
value["5659"]["prv_mask"] = "<!^\\d+${7,7}>";
value["5659"]["prv_group"] = "Winner.kg";
value["5659"]["prv_online_check"] = "false";

// SMS-Taxi
value["5690"] = new Array();
value["5690"]["prv_id"] = "5690";
value["5690"]["prv_name"] = "Пополнение счета";
value["5690"]["prv_folder"] = "other";
value["5690"]["prv_page"] = "./cellular.html";
value["5690"]["prv_image"] = "img/ui_item/sms_taxi.gif";
value["5690"]["prv_page_conf"] = "./validate_confirm.html";
value["5690"]["prv_alert"] = "";
value["5690"]["prv_invitation"] = "prov_enter_code";
value["5690"]["prv_button_text"] = "";
value["5690"]["prv_mask"] = "<!^\\d+${10}>";
value["5690"]["prv_group"] = "SMS-Taxi";
value["5690"]["prv_online_check"] = "true";

//АК-Бата
value["5184"] = new Array();
value["5184"]["prv_id"] = "5184";
value["5184"]["prv_name"] = "Корпоратив Ак-Бата";
value["5184"]["prv_folder"] = "other";
value["5184"]["prv_page"] = "./cellular.html";
value["5184"]["prv_image"] = "img/ui_item/ak-bata.png";
value["5184"]["prv_page_conf"] = "./validate_confirm.html";
value["5184"]["prv_alert"] = "";
value["5184"]["prv_invitation"] = "prov_enter_code";
value["5184"]["prv_button_text"] = "";
value["5184"]["prv_mask"] = "0 (<!^\\d+${3}>) <!^\\d+${6}>";
value["5184"]["prv_group"] = "Оплата корпоратива сотовой связи";
value["5184"]["prv_online_check"] = "true";

//Неотек - пополнение счетов агентов
value["5792"] = new Array();
value["5792"]["prv_id"] = "5792";
value["5792"]["prv_name"] = "Платежный центр - Пополнение счета агента";
value["5792"]["prv_folder"] = "other";
value["5792"]["prv_page"] = "./cellular_neotech.html";
value["5792"]["prv_page_conf"] = "./cellular_neotech.html";
value["5792"]["prv_alert"] = "";
value["5792"]["prv_invitation"] = "prov_enter_code";
value["5792"]["prv_button_text"] = "";
//value["5792"]["prv_image"] = "img/ui_item/Neotech_logo.gif";
value["5792"]["prv_mask"] = "<!^\\.+${1,20}>";
value["5792"]["prv_group"] = "";
value["5792"]["prv_online_check"] = "true";

//M&TC
// Comment provider
// value["5804"] = new Array();
// value["5804"]["prv_id"] = "5804";
// value["5804"]["prv_name"] = "M&TC - Пополнение счета";
// value["5804"]["prv_folder"] = "other";
// value["5804"]["prv_page"] = "./cellular.html";
// value["5804"]["prv_image"] = "img/ui_item/mtc.png";
// value["5804"]["prv_page_conf"] = "./validate_confirm.html";
// value["5804"]["prv_alert"] = "";
// value["5804"]["prv_invitation"] = "prov_enter_code";
// value["5804"]["prv_button_text"] = "";
// value["5804"]["prv_mask"] = "<!^\\d+${1,10}>";
// value["5804"]["prv_group"] = "";
// value["5804"]["prv_online_check"] = "false";

//СВЕТ

// СВЕТ Бишкек
value["bishkek_light"] = new Array();
//value["bishkek_light"]["prv_id"]="2000";
value["bishkek_light"]["prv_name"] = "Бишкек";
value["bishkek_light"]["prv_folder"] = "zkh";
value["bishkek_light"]["prv_image"] = "./img/ui_item/light.png";

// Бишкекский энергосбыт
value["2100"] = new Array();
//value["2001"]["prv_id"]="2001";
value["2100"]["prv_name"] = "Бишкекский энергосбыт";
value["2100"]["prv_folder"] = "zkh";
value["2100"]["prv_page"] = "./cellular.html";
value["2100"]["prv_page_conf"] = "./validate_confirm.html";
value["2100"]["prv_alert"] = "";



//////Разделение Бишкекского Энергосбыта по юридичиским и физ. лицам

// Физические лица
value["Sever_Elek_Fiz_lit"] = new Array();
value["Sever_Elek_Fiz_lit"]["prv_name"] = "Физические лица";
value["Sever_Elek_Fiz_lit"]["prv_folder"] = "zkh";
value["Sever_Elek_Fiz_lit"]["prv_page"] = "./cellular.html";
value["Sever_Elek_Fiz_lit"]["prv_page_conf"] = "./validate_confirm.html";
value["Sever_Elek_Fiz_lit"]["prv_alert"] = "";

//Юридические лица
value["Sever_Elek_Yur_lit"] = new Array();
value["Sever_Elek_Yur_lit"]["prv_name"] = "Юридические лица";
value["Sever_Elek_Yur_lit"]["prv_folder"] = "zkh";
value["Sever_Elek_Yur_lit"]["prv_page"] = "./cellular.html";
value["Sever_Elek_Yur_lit"]["prv_page_conf"] = "./validate_confirm.html";
value["Sever_Elek_Yur_lit"]["prv_alert"] = "";


//СеверЭлектро пеня
value["sever_elekro_peni"] = new Array();
value["sever_elekro_peni"]["prv_name"] = "ОПЛАТА ПЕНИ";
value["sever_elekro_peni"]["prv_folder"] = "zkh";
value["sever_elekro_peni"]["prv_page"] = "./cellular.html";
value["sever_elekro_peni"]["prv_page_conf"] = "./validate_confirm.html";
value["sever_elekro_peni"]["prv_alert"] = "";


// Бишкекский энергосбыт light_pay
value["5174"] = new Array();
value["5174"]["prv_id"] = "5174";
value["5174"]["prv_name"] = "Оплата за свет";
value["5174"]["prv_folder"] = "zkh";
value["5174"]["prv_page"] = "./cellular.html";
value["5174"]["prv_page_conf"] = "./validate_confirm.html";
value["5174"]["prv_alert"] = "";
value["5174"]["prv_image"] = "img/ui_item/light.png";
value["5174"]["prv_invitation"] = "prov_enter_account";
value["5174"]["prv_button_text"] = "";
value["5174"]["prv_mask"] = "<!^\\d+${8,9}>";
value["5174"]["prv_group"] = "Бишкекский энергосбыт";
value["5174"]["prv_online_check"] = "true";

// Бишкекский энергосбыт light_peni
value["5205"] = new Array();
value["5205"]["prv_id"] = "5205";
value["5205"]["prv_name"] = "Оплата пени";
value["5205"]["prv_folder"] = "zkh";
value["5205"]["prv_page"] = "./cellular.html";
value["5205"]["prv_page_conf"] = "./validate_confirm.html";
value["5205"]["prv_alert"] = "";
value["5205"]["prv_image"] = "img/ui_item/peni.gif";
value["5205"]["prv_invitation"] = "prov_enter_account";
value["5205"]["prv_button_text"] = "";
value["5205"]["prv_mask"] = "<!^\\d+${8,9}>";
value["5205"]["prv_group"] = "Бишкекский энергосбыт";
value["5205"]["prv_online_check"] = "true";

// СВЕТ Чуйская область
value["chu_light"] = new Array();
//value["chu_light"]["prv_id"]="1999";
value["chu_light"]["prv_name"] = "Чуйская область";
value["chu_light"]["prv_folder"] = "zkh";
value["chu_light"]["prv_image"] = "./img/ui_item/light.png";

//Кемин Энергосбыт
value["2200"] = new Array();
//value["2200"]["prv_id"]="2200";
value["2200"]["prv_name"] = "Кемин энергосбыт";
value["2200"]["prv_folder"] = "zkh";
value["2200"]["prv_page"] = "./cellular.html";
value["2200"]["prv_page_conf"] = "./validate_confirm.html";
value["2200"]["prv_alert"] = "";

//Кемин Энергосбыт light_pay
value["5164"] = new Array();
value["5164"]["prv_id"] = "5164";
value["5164"]["prv_name"] = "Оплата за свет";
value["5164"]["prv_folder"] = "zkh";
value["5164"]["prv_page"] = "./cellular.html";
value["5164"]["prv_page_conf"] = "./validate_confirm.html";
value["5164"]["prv_alert"] = "";
value["5164"]["prv_image"] = "img/ui_item/light.png";
value["5164"]["prv_invitation"] = "prov_enter_account";
value["5164"]["prv_button_text"] = "";
value["5164"]["prv_mask"] = "41<!^\\d+${7}>";
value["5164"]["prv_group"] = "Кемин Энергосбыт";
value["5164"]["prv_online_check"] = "true";

//Кемин Энергосбыт light_peni
value["5194"] = new Array();
value["5194"]["prv_id"] = "5194";
value["5194"]["prv_name"] = "Оплата пени";
value["5194"]["prv_folder"] = "zkh";
value["5194"]["prv_page"] = "./cellular.html";
value["5194"]["prv_page_conf"] = "./validate_confirm.html";
value["5194"]["prv_alert"] = "";
value["5194"]["prv_invitation"] = "prov_enter_account";
value["5194"]["prv_button_text"] = "";
value["5194"]["prv_image"] = "img/ui_item/peni.gif";
value["5194"]["prv_mask"] = "41<!^\\d+${7}>";
value["5194"]["prv_group"] = "Кемин Энергосбыт";
value["5194"]["prv_online_check"] = "true";

//Московский энергосбыт
value["2300"] = new Array();
//value["2300"]["prv_id"]="2300";
value["2300"]["prv_name"] = "Московский энергосбыт";
value["2300"]["prv_folder"] = "zkh";
value["2300"]["prv_page"] = "./cellular.html";
value["2300"]["prv_page_conf"] = "./validate_confirm.html";
value["2300"]["prv_alert"] = "";

//Московский энергосбыт light_pay
value["5165"] = new Array();
value["5165"]["prv_id"] = "5165";
value["5165"]["prv_name"] = "Оплата за свет";
value["5165"]["prv_folder"] = "zkh";
value["5165"]["prv_page"] = "./cellular.html";
value["5165"]["prv_page_conf"] = "./validate_confirm.html";
value["5165"]["prv_alert"] = "";
value["5165"]["prv_image"] = "img/ui_item/light.png";
value["5165"]["prv_invitation"] = "prov_enter_account";
value["5165"]["prv_button_text"] = "";
value["5165"]["prv_mask"] = "46<!^\\d+${7}>";
value["5165"]["prv_group"] = "Московский энергосбыт";
value["5165"]["prv_online_check"] = "true";

//Московский энергосбыт light_peni
value["5195"] = new Array();
value["5195"]["prv_id"] = "5195";
value["5195"]["prv_name"] = "Оплата пени";
value["5195"]["prv_folder"] = "zkh";
value["5195"]["prv_page"] = "./cellular.html";
value["5195"]["prv_page_conf"] = "./validate_confirm.html";
value["5195"]["prv_alert"] = "";
value["5195"]["prv_invitation"] = "prov_enter_account";
value["5195"]["prv_button_text"] = "";
value["5195"]["prv_image"] = "img/ui_item/peni.gif";
value["5195"]["prv_mask"] = "46<!^\\d+${7}>";
value["5195"]["prv_group"] = "Московский энергосбыт";
value["5195"]["prv_online_check"] = "true";

//Кантский энергосбыт
value["2400"] = new Array();
//value["2004"]["prv_id"]="2004";
value["2400"]["prv_name"] = "Кантский энергосбыт";
value["2400"]["prv_folder"] = "zkh";
value["2400"]["prv_page"] = "./cellular.html";
value["2400"]["prv_page_conf"] = "./validate_confirm.html";
value["2400"]["prv_alert"] = "";

//Кантский энергосбыт light_pay
value["5166"] = new Array();
value["5166"]["prv_id"] = "5166";
value["5166"]["prv_name"] = "Оплата за свет";
value["5166"]["prv_folder"] = "zkh";
value["5166"]["prv_page"] = "./cellular.html";
value["5166"]["prv_page_conf"] = "./validate_confirm.html";
value["5166"]["prv_alert"] = "";
value["5166"]["prv_image"] = "img/ui_item/light.png";
value["5166"]["prv_invitation"] = "prov_enter_account";
value["5166"]["prv_button_text"] = "";
value["5166"]["prv_mask"] = "45<!^\\d+${7}>";
value["5166"]["prv_group"] = "Кантский энергосбыт";
value["5166"]["prv_online_check"] = "true";

//Кантский энергосбыт light_peni
value["5196"] = new Array();
value["5196"]["prv_id"] = "5196";
value["5196"]["prv_name"] = "Оплата пени";
value["5196"]["prv_folder"] = "zkh";
value["5196"]["prv_page"] = "./cellular.html";
value["5196"]["prv_page_conf"] = "./validate_confirm.html";
value["5196"]["prv_alert"] = "";
value["5196"]["prv_invitation"] = "prov_enter_account";
value["5196"]["prv_button_text"] = "";
value["5196"]["prv_image"] = "img/ui_item/peni.gif";
value["5196"]["prv_mask"] = "45<!^\\d+${7}>";
value["5196"]["prv_group"] = "Кантский энергосбыт";
value["5196"]["prv_online_check"] = "true";

//Панфиловский энергосбыт
value["2500"] = new Array();
//value["2005"]["prv_id"]="2005";
value["2500"]["prv_name"] = "Панфиловский энергосбыт";
value["2500"]["prv_folder"] = "zkh";
value["2500"]["prv_page"] = "./cellular.html";
value["2500"]["prv_page_conf"] = "./validate_confirm.html";
value["2500"]["prv_alert"] = "";

//Панфиловский энергосбыт light_pay
value["5167"] = new Array();
value["5167"]["prv_id"] = "5167";
value["5167"]["prv_name"] = "Оплата за свет";
value["5167"]["prv_folder"] = "zkh";
value["5167"]["prv_page"] = "./cellular.html";
value["5167"]["prv_page_conf"] = "./validate_confirm.html";
value["5167"]["prv_alert"] = "";
value["5167"]["prv_image"] = "img/ui_item/light.png";
value["5167"]["prv_invitation"] = "prov_enter_account";
value["5167"]["prv_button_text"] = "";
value["5167"]["prv_mask"] = "47<!^\\d+${7}>";
value["5167"]["prv_group"] = "Панфиловский энергосбыт";
value["5167"]["prv_online_check"] = "true";

//Панфиловский энергосбыт light_peni
value["5197"] = new Array();
value["5197"]["prv_id"] = "5197";
value["5197"]["prv_name"] = "Оплата пени";
value["5197"]["prv_folder"] = "zkh";
value["5197"]["prv_page"] = "./cellular.html";
value["5197"]["prv_page_conf"] = "./validate_confirm.html";
value["5197"]["prv_alert"] = "";
value["5197"]["prv_image"] = "img/ui_item/peni.gif";
value["5197"]["prv_invitation"] = "prov_enter_account";
value["5197"]["prv_button_text"] = "";
value["5197"]["prv_mask"] = "47<!^\\d+${7}>";
value["5197"]["prv_group"] = "Панфиловский энергосбыт";
value["5197"]["prv_online_check"] = "true";

//Токмокский энергосбыт
value["2600"] = new Array();
//value["2006"]["prv_id"]="2006";
value["2600"]["prv_name"] = "Токмокский энергосбыт";
value["2600"]["prv_folder"] = "zkh";
value["2600"]["prv_page"] = "./cellular.html";
value["2600"]["prv_page_conf"] = "./validate_confirm.html";
value["2600"]["prv_alert"] = "";

//Токмокский энергосбыт light_pay
value["5168"] = new Array();
value["5168"]["prv_id"] = "5168";
value["5168"]["prv_name"] = "Оплата за свет";
value["5168"]["prv_folder"] = "zkh";
value["5168"]["prv_page"] = "./cellular.html";
value["5168"]["prv_page_conf"] = "./validate_confirm.html";
value["5168"]["prv_alert"] = "";
value["5168"]["prv_image"] = "img/ui_item/light.png";
value["5168"]["prv_invitation"] = "prov_enter_account";
value["5168"]["prv_button_text"] = "";
value["5168"]["prv_mask"] = "43<!^\\d+${7}>";
value["5168"]["prv_group"] = "Токмокский энергосбыт";
value["5168"]["prv_online_check"] = "true";

//Токмокский энергосбыт оОплата пени
value["5198"] = new Array();
value["5198"]["prv_id"] = "5198";
value["5198"]["prv_name"] = "Оплата пени";
value["5198"]["prv_folder"] = "zkh";
value["5198"]["prv_page"] = "./cellular.html";
value["5198"]["prv_page_conf"] = "./validate_confirm.html";
value["5198"]["prv_alert"] = "";
value["5198"]["prv_image"] = "img/ui_item/peni.gif";
value["5198"]["prv_invitation"] = "prov_enter_account";
value["5198"]["prv_button_text"] = "";
value["5198"]["prv_mask"] = "43<!^\\d+${7}>";
value["5198"]["prv_group"] = "Токмокский энергосбыт";
value["5198"]["prv_online_check"] = "true";

//Жаильский энергосбыт
value["2700"] = new Array();
//value["2007"]["prv_id"]="2007";
value["2700"]["prv_name"] = "Жаилский энергосбыт";
value["2700"]["prv_folder"] = "zkh";
value["2700"]["prv_page"] = "./cellular.html";
value["2700"]["prv_page_conf"] = "./validate_confirm.html";
value["2700"]["prv_alert"] = "";

//Жаильский энергосбыт light_pay
value["5169"] = new Array();
value["5169"]["prv_id"] = "5169";
value["5169"]["prv_name"] = "Оплата за свет";
value["5169"]["prv_folder"] = "zkh";
value["5169"]["prv_page"] = "./cellular.html";
value["5169"]["prv_page_conf"] = "./validate_confirm.html";
value["5169"]["prv_alert"] = "";
value["5169"]["prv_image"] = "img/ui_item/light.png";
value["5169"]["prv_invitation"] = "prov_enter_account";
value["5169"]["prv_button_text"] = "";
value["5169"]["prv_mask"] = "48<!^\\d+${7}>";
value["5169"]["prv_group"] = "Жаильский энергосбыт";
value["5169"]["prv_online_check"] = "true";

//Жаильский энергосбыт light_peni
value["5199"] = new Array();
value["5199"]["prv_id"] = "5199";
value["5199"]["prv_name"] = "Оплата пени";
value["5199"]["prv_folder"] = "zkh";
value["5199"]["prv_page"] = "./cellular.html";
value["5199"]["prv_page_conf"] = "./validate_confirm.html";
value["5199"]["prv_alert"] = "";
value["5199"]["prv_image"] = "img/ui_item/peni.gif";
value["5199"]["prv_invitation"] = "prov_enter_account";
value["5199"]["prv_button_text"] = "";
value["5199"]["prv_mask"] = "48<!^\\d+${7}>";
value["5199"]["prv_group"] = "Жаильский энергосбыт";
value["5199"]["prv_online_check"] = "true";

//Аламединский Энегосбыт
value["2800"] = new Array();
//value["2008"]["prv_id"]="2008";
value["2800"]["prv_name"] = "Аламединский энергосбыт";
value["2800"]["prv_folder"] = "zkh";
value["2800"]["prv_page"] = "./cellular.html";
value["2800"]["prv_page_conf"] = "./validate_confirm.html";
value["2800"]["prv_alert"] = "";

//Аламединский Энегосбыт light_pay
value["5170"] = new Array();
value["5170"]["prv_id"] = "5170";
value["5170"]["prv_name"] = "Оплата за свет";
value["5170"]["prv_folder"] = "zkh";
value["5170"]["prv_page"] = "./cellular.html";
value["5170"]["prv_page_conf"] = "./validate_confirm.html";
value["5170"]["prv_alert"] = "";
value["5170"]["prv_image"] = "img/ui_item/light.png";
value["5170"]["prv_invitation"] = "prov_enter_account";
value["5170"]["prv_button_text"] = "";
value["5170"]["prv_mask"] = "3<!^\\d+${8}>";
value["5170"]["prv_group"] = "Аламединский Энегосбыт";
value["5170"]["prv_online_check"] = "true";

//Аламединский Энегосбыт light_peni
value["5201"] = new Array();
value["5201"]["prv_id"] = "5201";
value["5201"]["prv_name"] = "Оплата пени";
value["5201"]["prv_folder"] = "zkh";
value["5201"]["prv_page"] = "./cellular.html";
value["5201"]["prv_page_conf"] = "./validate_confirm.html";
value["5201"]["prv_alert"] = "";
value["5201"]["prv_image"] = "img/ui_item/peni.gif";
value["5201"]["prv_invitation"] = "prov_enter_account";
value["5201"]["prv_button_text"] = "";
value["5201"]["prv_mask"] = "3<!^\\d+${8}>";
value["5201"]["prv_group"] = "Аламединский Энегосбыт";
value["5201"]["prv_online_check"] = "true";

// Ысык-Атинский энергосбыт
value["2900"] = new Array();
//value["2009"]["prv_id"]="2009";
value["2900"]["prv_name"] = "Ысык-Атинский энергосбыт";
value["2900"]["prv_folder"] = "zkh";
value["2900"]["prv_page"] = "./cellular.html";
value["2900"]["prv_page_conf"] = "./validate_confirm.html";
value["2900"]["prv_alert"] = "";

// Ысык-Атинский энергосбыт light_pay
value["5171"] = new Array();
value["5171"]["prv_id"] = "5171";
value["5171"]["prv_name"] = "Оплатаза свет";
value["5171"]["prv_folder"] = "zkh";
value["5171"]["prv_page"] = "./cellular.html";
value["5171"]["prv_page_conf"] = "./validate_confirm.html";
value["5171"]["prv_alert"] = "";
value["5171"]["prv_image"] = "img/ui_item/light.png";
value["5171"]["prv_invitation"] = "prov_enter_account";
value["5171"]["prv_button_text"] = "";
value["5171"]["prv_mask"] = "44<!^\\d+${7}>";
value["5171"]["prv_group"] = "Ысык-Атинский энергосбыт";
value["5171"]["prv_online_check"] = "true";

// Ысык-Атинский энергосбыт light_peni
value["5202"] = new Array();
value["5202"]["prv_id"] = "5202";
value["5202"]["prv_name"] = "Оплата пени";
value["5202"]["prv_folder"] = "zkh";
value["5202"]["prv_page"] = "./cellular.html";
value["5202"]["prv_page_conf"] = "./validate_confirm.html";
value["5202"]["prv_alert"] = "";
value["5202"]["prv_image"] = "img/ui_item/peni.gif";
value["5202"]["prv_invitation"] = "prov_enter_account";
value["5202"]["prv_button_text"] = "";
value["5202"]["prv_mask"] = "44<!^\\d+${7}>";
value["5202"]["prv_group"] = "Ысык-Атинский энергосбыт";
value["5202"]["prv_online_check"] = "true";

// Сокулукский энергосбыт
value["2110"] = new Array();
//value["2010"]["prv_id"]="2010";
value["2110"]["prv_name"] = "Сокулукский энергосбыт";
value["2110"]["prv_folder"] = "zkh";
value["2110"]["prv_page"] = "./cellular.html";
value["2110"]["prv_page_conf"] = "./validate_confirm.html";
value["2110"]["prv_alert"] = "";

// Сокулукский энергосбыт light_pay
value["5172"] = new Array();
value["5172"]["prv_id"] = "5172";
value["5172"]["prv_name"] = "Оплата за свет";
value["5172"]["prv_folder"] = "zkh";
value["5172"]["prv_page"] = "./cellular.html";
value["5172"]["prv_page_conf"] = "./validate_confirm.html";
value["5172"]["prv_alert"] = "";
value["5172"]["prv_image"] = "img/ui_item/light.png";
value["5172"]["prv_invitation"] = "prov_enter_account";
value["5172"]["prv_button_text"] = "";
value["5172"]["prv_mask"] = "<!^\\d+${9}>";
value["5172"]["prv_group"] = "Сокулукский энергосбыт";
value["5172"]["prv_online_check"] = "true";

// Сокулукский энергосбыт light_peni
value["5203"] = new Array();
value["5203"]["prv_id"] = "5203";
value["5203"]["prv_name"] = "Оплата пени";
value["5203"]["prv_folder"] = "zkh";
value["5203"]["prv_page"] = "./cellular.html";
value["5203"]["prv_page_conf"] = "./validate_confirm.html";
value["5203"]["prv_alert"] = "";
value["5203"]["prv_image"] = "img/ui_item/peni.gif";
value["5203"]["prv_invitation"] = "prov_enter_account";
value["5203"]["prv_button_text"] = "";
value["5203"]["prv_mask"] = "<!^\\d+${9}>";
value["5203"]["prv_group"] = "Сокулукский энергосбыт";
value["5203"]["prv_online_check"] = "true";

//Чуйский энергосбыт
value["2113"] = new Array();
//value["2011"]["prv_id"]="2011";
value["2113"]["prv_name"] = "Чуйский энергосбыт";
value["2113"]["prv_folder"] = "zkh";
value["2113"]["prv_page"] = "./cellular.html";
value["2113"]["prv_page_conf"] = "./validate_confirm.html";
value["2113"]["prv_alert"] = "";

//Чуйский энергосбыт light_pay
value["5173"] = new Array();
value["5173"]["prv_id"] = "5173";
value["5173"]["prv_name"] = "Оплата за свет";
value["5173"]["prv_folder"] = "zkh";
value["5173"]["prv_page"] = "./cellular.html";
value["5173"]["prv_page_conf"] = "./validate_confirm.html";
value["5173"]["prv_alert"] = "";
value["5173"]["prv_invitation"] = "prov_enter_account";
value["5173"]["prv_button_text"] = "";
value["5173"]["prv_mask"] = "<!^\\d+${1,9}>";
value["5173"]["prv_group"] = "Чуйский энергосбыт";
value["5173"]["prv_online_check"] = "true";

//Чуйский энергосбыт light_peni
value["5204"] = new Array();
value["5204"]["prv_id"] = "5204";
value["5204"]["prv_name"] = "Оплата пени";
value["5204"]["prv_folder"] = "zkh";
value["5204"]["prv_page"] = "./cellular.html";
value["5204"]["prv_page_conf"] = "./validate_confirm.html";
value["5204"]["prv_alert"] = "";
value["5204"]["prv_image"] = "img/ui_item/peni.gif";
value["5204"]["prv_invitation"] = "prov_enter_account";
value["5204"]["prv_button_text"] = "";
value["5204"]["prv_mask"] = "<!^\\d+${1,9}>";
value["5204"]["prv_group"] = "Чуйский энергосбыт";
value["5204"]["prv_online_check"] = "true";

// ВОСТОК - ЭЛЕКТРО

value["ik_region_energy"] = new Array();
value["ik_region_energy"]["prv_name"] = "Иссык-Кульская область";
value["ik_region_energy"]["prv_image"] = "./img/ui_item/light.png";

value["ik_region_karakol"] = new Array();
value["ik_region_karakol"]["prv_name"] = "Каракол РЭС";
value["ik_region_karakol"]["prv_image"] = "./img/ui_item/light.png";

// Каракол РЭС Оплата электричества
value["7839"] = new Array();
value["7839"]["prv_id"] = "7839";
value["7839"]["prv_name"] = "Оплата электричества";
value["7839"]["prv_folder"] = "zkh";
value["7839"]["prv_page"] = "./cellular.html";
value["7839"]["prv_page_conf"] = "./validate_confirm.html";
value["7839"]["prv_alert"] = "";
value["7839"]["prv_invitation"] = "prov_enter_account";
value["7839"]["prv_button_text"] = "";
value["7839"]["prv_mask"] = "<!^\\d+${9}>";
value["7839"]["prv_group"] = "Каракол РЭС";
value["7839"]["prv_online_check"] = "true";

// Каракол РЭС Оплата пени
value["7841"] = new Array();
value["7841"]["prv_id"] = "7841";
value["7841"]["prv_name"] = "Оплата пени";
value["7841"]["prv_folder"] = "zkh";
value["7841"]["prv_page"] = "./cellular.html";
value["7841"]["prv_page_conf"] = "./validate_confirm.html";
value["7841"]["prv_alert"] = "";
value["7841"]["prv_image"] = "img/ui_item/peni.gif";
value["7841"]["prv_invitation"] = "prov_enter_account";
value["7841"]["prv_button_text"] = "";
value["7841"]["prv_mask"] = "<!^\\d+${9}>";
value["7841"]["prv_group"] = "Каракол РЭС";
value["7841"]["prv_online_check"] = "true";

value["ik_region_jetyogyz"] = new Array();
value["ik_region_jetyogyz"]["prv_name"] = "Джеты Огуз РЭС";
value["ik_region_jetyogyz"]["prv_image"] = "./img/ui_item/light.png";

// Джеты Огуз РЭС Оплата электричества
value["7842"] = new Array();
value["7842"]["prv_id"] = "7842";
value["7842"]["prv_name"] = "Оплата электричества";
value["7842"]["prv_folder"] = "zkh";
value["7842"]["prv_page"] = "./cellular.html";
value["7842"]["prv_page_conf"] = "./validate_confirm.html";
value["7842"]["prv_alert"] = "";
value["7842"]["prv_invitation"] = "prov_enter_account";
value["7842"]["prv_button_text"] = "";
value["7842"]["prv_mask"] = "<!^\\d+${9}>";
value["7842"]["prv_group"] = "Джеты Огуз РЭС";
value["7842"]["prv_online_check"] = "true";

// Джеты Огуз РЭС Оплата пени
value["7843"] = new Array();
value["7843"]["prv_id"] = "7843";
value["7843"]["prv_name"] = "Оплата пени";
value["7843"]["prv_folder"] = "zkh";
value["7843"]["prv_page"] = "./cellular.html";
value["7843"]["prv_page_conf"] = "./validate_confirm.html";
value["7843"]["prv_alert"] = "";
value["7843"]["prv_image"] = "img/ui_item/peni.gif";
value["7843"]["prv_invitation"] = "prov_enter_account";
value["7843"]["prv_button_text"] = "";
value["7843"]["prv_mask"] = "<!^\\d+${9}>";
value["7843"]["prv_group"] = "Джеты Огуз РЭС";
value["7843"]["prv_online_check"] = "true";

value["ik_region_ton"] = new Array();
value["ik_region_ton"]["prv_name"] = "Тон РЭС";
value["ik_region_ton"]["prv_image"] = "./img/ui_item/light.png";

// Тон РЭС Оплата электричества
value["7844"] = new Array();
value["7844"]["prv_id"] = "7844";
value["7844"]["prv_name"] = "Оплата электричества";
value["7844"]["prv_folder"] = "zkh";
value["7844"]["prv_page"] = "./cellular.html";
value["7844"]["prv_page_conf"] = "./validate_confirm.html";
value["7844"]["prv_alert"] = "";
value["7844"]["prv_invitation"] = "prov_enter_account";
value["7844"]["prv_button_text"] = "";
value["7844"]["prv_mask"] = "<!^\\d+${9}>";
value["7844"]["prv_group"] = "Тон РЭС";
value["7844"]["prv_online_check"] = "true";

// Тон РЭС Оплата пени
value["7845"] = new Array();
value["7845"]["prv_id"] = "7845";
value["7845"]["prv_name"] = "Оплата пени";
value["7845"]["prv_folder"] = "zkh";
value["7845"]["prv_page"] = "./cellular.html";
value["7845"]["prv_page_conf"] = "./validate_confirm.html";
value["7845"]["prv_alert"] = "";
value["7845"]["prv_image"] = "img/ui_item/peni.gif";
value["7845"]["prv_invitation"] = "prov_enter_account";
value["7845"]["prv_button_text"] = "";
value["7845"]["prv_mask"] = "<!^\\d+${9}>";
value["7845"]["prv_group"] = "Тон РЭС";
value["7845"]["prv_online_check"] = "true";

value["ik_region_balykchy"] = new Array();
value["ik_region_balykchy"]["prv_name"] = "Балыкчы РЭС";
value["ik_region_balykchy"]["prv_image"] = "./img/ui_item/light.png";

// Балыкчы РЭС Оплата электричества
value["7846"] = new Array();
value["7846"]["prv_id"] = "7846";
value["7846"]["prv_name"] = "Оплата электричества";
value["7846"]["prv_folder"] = "zkh";
value["7846"]["prv_page"] = "./cellular.html";
value["7846"]["prv_page_conf"] = "./validate_confirm.html";
value["7846"]["prv_alert"] = "";
value["7846"]["prv_invitation"] = "prov_enter_account";
value["7846"]["prv_button_text"] = "";
value["7846"]["prv_mask"] = "<!^\\d+${9}>";
value["7846"]["prv_group"] = "Балыкчы РЭС";
value["7846"]["prv_online_check"] = "true";

// Балыкчы РЭС Оплата пени
value["7847"] = new Array();
value["7847"]["prv_id"] = "7847";
value["7847"]["prv_name"] = "Оплата пени";
value["7847"]["prv_folder"] = "zkh";
value["7847"]["prv_page"] = "./cellular.html";
value["7847"]["prv_page_conf"] = "./validate_confirm.html";
value["7847"]["prv_alert"] = "";
value["7847"]["prv_image"] = "img/ui_item/peni.gif";
value["7847"]["prv_invitation"] = "prov_enter_account";
value["7847"]["prv_button_text"] = "";
value["7847"]["prv_mask"] = "<!^\\d+${9}>";
value["7847"]["prv_group"] = "Балыкчы РЭС";
value["7847"]["prv_online_check"] = "true";

value["ik_region_cholpon_ata"] = new Array();
value["ik_region_cholpon_ata"]["prv_name"] = "Чолпон-Ата РЭС";
value["ik_region_cholpon_ata"]["prv_image"] = "./img/ui_item/light.png";

// Чолпон-Ата РЭС Оплата электричества
value["7848"] = new Array();
value["7848"]["prv_id"] = "7848";
value["7848"]["prv_name"] = "Оплата электричества";
value["7848"]["prv_folder"] = "zkh";
value["7848"]["prv_page"] = "./cellular.html";
value["7848"]["prv_page_conf"] = "./validate_confirm.html";
value["7848"]["prv_alert"] = "";
value["7848"]["prv_invitation"] = "prov_enter_account";
value["7848"]["prv_button_text"] = "";
value["7848"]["prv_mask"] = "<!^\\d+${9}>";
value["7848"]["prv_group"] = "Чолпон-Ата РЭС";
value["7848"]["prv_online_check"] = "true";

// Чолпон-Ата РЭС Оплата пени
value["7849"] = new Array();
value["7849"]["prv_id"] = "7849";
value["7849"]["prv_name"] = "Оплата пени";
value["7849"]["prv_folder"] = "zkh";
value["7849"]["prv_page"] = "./cellular.html";
value["7849"]["prv_page_conf"] = "./validate_confirm.html";
value["7849"]["prv_alert"] = "";
value["7849"]["prv_image"] = "img/ui_item/peni.gif";
value["7849"]["prv_invitation"] = "prov_enter_account";
value["7849"]["prv_button_text"] = "";
value["7849"]["prv_mask"] = "<!^\\d+${9}>";
value["7849"]["prv_group"] = "Чолпон-Ата РЭС";
value["7849"]["prv_online_check"] = "true";

value["ik_region_typ"] = new Array();
value["ik_region_typ"]["prv_name"] = "Тюп РЭС";
value["ik_region_typ"]["prv_image"] = "./img/ui_item/light.png";

// Тюп РЭС Оплата электричества
value["7850"] = new Array();
value["7850"]["prv_id"] = "7850";
value["7850"]["prv_name"] = "Оплата электричества";
value["7850"]["prv_folder"] = "zkh";
value["7850"]["prv_page"] = "./cellular.html";
value["7850"]["prv_page_conf"] = "./validate_confirm.html";
value["7850"]["prv_alert"] = "";
value["7850"]["prv_invitation"] = "prov_enter_account";
value["7850"]["prv_button_text"] = "";
value["7850"]["prv_mask"] = "<!^\\d+${9}>";
value["7850"]["prv_group"] = "Тюп РЭС";
value["7850"]["prv_online_check"] = "true";

// Тюп РЭС Оплата пени
value["7851"] = new Array();
value["7851"]["prv_id"] = "7851";
value["7851"]["prv_name"] = "Оплата пени";
value["7851"]["prv_folder"] = "zkh";
value["7851"]["prv_page"] = "./cellular.html";
value["7851"]["prv_page_conf"] = "./validate_confirm.html";
value["7851"]["prv_alert"] = "";
value["7851"]["prv_image"] = "img/ui_item/peni.gif";
value["7851"]["prv_invitation"] = "prov_enter_account";
value["7851"]["prv_button_text"] = "";
value["7851"]["prv_mask"] = "<!^\\d+${9}>";
value["7851"]["prv_group"] = "Тюп РЭС";
value["7851"]["prv_online_check"] = "true";

value["ik_region_aksuu"] = new Array();
value["ik_region_aksuu"]["prv_name"] = "Ак-Суу РЭС";
value["ik_region_aksuu"]["prv_image"] = "./img/ui_item/light.png";

// Ак-Суу РЭС Оплата электричества
value["7852"] = new Array();
value["7852"]["prv_id"] = "7852";
value["7852"]["prv_name"] = "Оплата электричества";
value["7852"]["prv_folder"] = "zkh";
value["7852"]["prv_page"] = "./cellular.html";
value["7852"]["prv_page_conf"] = "./validate_confirm.html";
value["7852"]["prv_alert"] = "";
value["7852"]["prv_invitation"] = "prov_enter_account";
value["7852"]["prv_button_text"] = "";
value["7852"]["prv_mask"] = "<!^\\d+${9}>";
value["7852"]["prv_group"] = "Ак-Суу РЭС";
value["7852"]["prv_online_check"] = "true";

// Ак-Суу РЭС Оплата пени
value["7853"] = new Array();
value["7853"]["prv_id"] = "7853";
value["7853"]["prv_name"] = "Оплата пени";
value["7853"]["prv_folder"] = "zkh";
value["7853"]["prv_page"] = "./cellular.html";
value["7853"]["prv_page_conf"] = "./validate_confirm.html";
value["7853"]["prv_alert"] = "";
value["7853"]["prv_image"] = "img/ui_item/peni.gif";
value["7853"]["prv_invitation"] = "prov_enter_account";
value["7853"]["prv_button_text"] = "";
value["7853"]["prv_mask"] = "<!^\\d+${9}>";
value["7853"]["prv_group"] = "Ак-Суу РЭС";
value["7853"]["prv_online_check"] = "true";



// Вода

//ВОДА БИШКЕК
value["bishkek_water"] = new Array();
value["bishkek_water"]["prv_name"] = "Бишкек";
value["bishkek_water"]["prv_image"] = "./img/ui_item/water.png";

//Бишкекводоканал
value["5185"] = new Array();
value["5185"]["prv_id"] = "5185";
value["5185"]["prv_name"] = "Бишкек водоканал";
value["5185"]["prv_folder"] = "zkh";
value["5185"]["prv_image"] = "./img/ui_item/bishkekvodokanal.png";
value["5185"]["prv_page"] = "./cellular.html";
value["5185"]["prv_page_conf"] = "./validate_confirm.html";
value["5185"]["prv_alert"] = "";
value["5185"]["prv_invitation"] = "prov_enter_account";
value["5185"]["prv_button_text"] = "";
value["5185"]["prv_mask"] = "<!^\\d+${7}>-<!^\\d+${1}>";
value["5185"]["prv_group"] = "Оплата за воду";
value["5185"]["prv_online_check"] = "true";

//ОТОПЛЕНИЕ

//БИШКЕК ОТОПЛЕНИЕ
value["bishkek_heating"] = new Array();
value["bishkek_heating"]["prv_name"] = "Бишкек";
value["bishkek_heating"]["prv_image"] = "./img/ui_item/heating.png";

//Бишкектеплоэнерго
value["5162"] = new Array();
value["5162"]["prv_id"] = "5162";
value["5162"]["prv_name"] = "Бишкек теплоэнерго";
value["5162"]["prv_folder"] = "zkh";
value["5162"]["prv_page"] = "./cellular.html";
value["5162"]["prv_page_conf"] = "./validate_confirm.html";
value["5162"]["prv_alert"] = "";
value["5162"]["prv_image"] = "./img/ui_item/bkteploenergo.png";
value["5162"]["prv_invitation"] = "prov_enter_account";
value["5162"]["prv_button_text"] = "";
value["5162"]["prv_mask"] = "<!^\\.+${8,9}>";
value["5162"]["prv_group"] = "";
value["5162"]["prv_online_check"] = "true";

//Бишкектеплосеть
// Comment provider
value["5163"] = new Array();
value["5163"]["prv_id"] = "5163";
value["5163"]["prv_name"] = "Бишкектеплосеть";
value["5163"]["prv_folder"] = "zkh";
value["5163"]["prv_page"] = "./cellular.html";
value["5163"]["prv_page_conf"] = "./validate_confirm.html";
value["5163"]["prv_image"] = "./img/ui_item/bkteploseti.png";
value["5163"]["prv_alert"] = "";
value["5163"]["prv_invitation"] = "prov_enter_account";
value["5163"]["prv_button_text"] = "";
value["5163"]["prv_mask"] = "<!^\\d+${7}>-<!^\\d+${1}>";
value["5163"]["prv_group"] = "";
value["5163"]["prv_online_check"] = "true";

//ВЫВОЗ МУСОРА

//МУСОР БИШКЕК
value["bishkek_garbage"] = new Array();
value["bishkek_garbage"]["prv_name"] = "Бишкек";
value["bishkek_garbage"]["prv_image"] = "./img/ui_item/garbage.png";

value["bishkek_tazalik"] = new Array();
value["bishkek_tazalik"]["prv_name"] = "Тазалык";
value["bishkek_tazalik"]["prv_image"] = "";

value["bishkek_komptrans"] = new Array();
value["bishkek_komptrans"]["prv_name"] = "Комтранском";
value["bishkek_komptrans"]["prv_image"] = "./img/ui_item/komstro.png";

//Тазалык
value["5157"] = new Array();
value["5157"]["prv_id"] = "5157";
value["5157"]["prv_name"] = "Тазалык - вывоз мусора";
value["5157"]["prv_folder"] = "zkh";
value["5157"]["prv_page"] = "./cellular_tazalyk.html";
value["5157"]["prv_page_conf"] = "./validate_confirm.html";
value["5157"]["prv_alert"] = "Оплата за Октябрьский район не принимается";
value["5157"]["prv_invitation"] = "prov_enter_account";
value["5157"]["prv_button_text"] = "";
//value["5157"]["prv_mask"] = "<!^\\d+${7}>-<!^\\d+${1}>";
value["5157"]["prv_mask"] = "<!^\\.+${8,9}>";
value["5157"]["prv_group"] = "оплата за вывоз мусора";
value["5157"]["prv_online_check"] = "true";

//ЛИФТ

// ЛИФТ БИШКЕК
value["bishkek_elevator"] = new Array();
value["bishkek_elevator"]["prv_name"] = "Бишкек";
value["bishkek_elevator"]["prv_image"] = "./img/ui_item/elevator.png";

//Кыргызлифт
value["5159"] = new Array();
value["5159"]["prv_id"] = "5159";
value["5159"]["prv_name"] = "Кыргызлифт";
value["5159"]["prv_folder"] = "zkh";
value["5159"]["prv_page"] = "./cellular.html";
value["5159"]["prv_page_conf"] = "./validate_confirm.html";
value["5159"]["prv_alert"] = "";
value["5159"]["prv_image"] = "img/ui_item/kyrgyzlift.png";
value["5159"]["prv_invitation"] = "prov_enter_account";
value["5159"]["prv_button_text"] = "";
value["5159"]["prv_mask"] = "<!^\\d+${1,6}>";
value["5159"]["prv_group"] = "оплата за лифт";
value["5159"]["prv_online_check"] = "true";

//ЛИФТЭС
value["22366"] = new Array();
value["22366"]["prv_id"] = "22366";
value["22366"]["prv_name"] = "ЛИФТЭС";
value["22366"]["prv_folder"] = "tax";
value["22366"]["prv_page"] = "./cellular.html";
value["22366"]["prv_page_conf"] = "./validate_confirm.html";
value["22366"]["prv_alert"] = "";
value["22366"]["prv_image"] = "img/ui_item/logo-LiftEs.png";
value["22366"]["prv_top_image"] = "./img/ui_item/logo-LiftEs.png";
value["22366"]["prv_invitation"] = "prov_enter_account";
value["22366"]["prv_button_text"] = "";
value["22366"]["prv_mask"] = "<!^\\d+${7}>";
value["22366"]["prv_group"] = "";
value["22366"]["prv_online_check"] = "true";

// Sms-дневник
value["6407"] = new Array();
value["6407"]["prv_id"] = "6407";
value["6407"]["prv_name"] = 'Электронный дневник';
value["6407"]["prv_folder"] = "other";
value["6407"]["prv_page"] = "./cellular.html";
value["6407"]["prv_page_conf"] = "./validate_confirm.html";
value["6407"]["prv_alert"] = "";
value["6407"]["prv_image"] = "img/ui_item/dnevnik.png";
value["6407"]["prv_top_image"] = "img/ui_item/dnevnik.png";
value["6407"]["prv_is_cellular"] = false;
value["6407"]["prv_invitation"] = "prov_enter_account";
value["6407"]["prv_button_text"] = "";
value["6407"]["prv_mask"] = "<!^\\d+${1,6}>";
value["6407"]["prv_group"] = "Другие услуги";
value["6407"]["prv_online_check"] = "false";

// KazMoneyUnion



// Легенда: Наследие драконов (фэо-прайм)
// Comment provider 
// value["6413"] = new Array();
// value["6413"]["prv_id"] = "6413";
// value["6413"]["prv_name"] = 'Легенда: Наследие драконов (фэо-прайм)';
// value["6413"]["prv_folder"] = "content";
// value["6413"]["prv_page"] = "./provider.html";
// value["6413"]["prv_page_conf"] = "./validate_confirm.html";
// value["6413"]["prv_alert"] = "";
// value["6413"]["prv_image"] = "img/ui_item/legend(prime).png";
// value["6413"]["prv_top_image"] = "img/ui_item/legend(prime).png";
// value["6413"]["prv_is_cellular"] = false;
// value["6413"]["prv_invitation"] = "prov_enter_code";
// value["6413"]["prv_button_text"] = "";
// value["6413"]["prv_mask"] = "<!^.+${1,17}>";
// value["6413"]["prv_group"] = "Интернет игры";
// value["6413"]["prv_online_check"] = "false";





// Троецарствие
value["6416"] = new Array();
value["6416"]["prv_id"] = "6416";
value["6416"]["prv_name"] = 'Троецарствие';
value["6416"]["prv_folder"] = "content";
value["6416"]["prv_page"] = "./provider.html";
value["6416"]["prv_page_conf"] = "./validate_confirm.html";
value["6416"]["prv_alert"] = "";
value["6416"]["prv_image"] = "img/ui_item/troecarstvie.png";
value["6416"]["prv_top_image"] = "img/ui_item/troecarstvie.png";
value["6416"]["prv_is_cellular"] = false;
value["6416"]["prv_invitation"] = "prov_enter_code";
value["6416"]["prv_button_text"] = "";
value["6416"]["prv_mask"] = "<!^.+${1,16}>";
value["6416"]["prv_group"] = "Интернет игры";
value["6416"]["prv_online_check"] = "false";

// Carnage
value["6417"] = new Array();
value["6417"]["prv_id"] = "6417";
value["6417"]["prv_name"] = 'Carnage';
value["6417"]["prv_folder"] = "content";
value["6417"]["prv_page"] = "./cellular.html";
value["6417"]["prv_page_conf"] = "./validate_confirm.html";
value["6417"]["prv_alert"] = "";
value["6417"]["prv_image"] = "img/ui_item/carnage.gif";
value["6417"]["prv_top_image"] = "img/ui_item/carnage.gif";
value["6417"]["prv_is_cellular"] = false;
value["6417"]["prv_invitation"] = "prov_enter_code";
value["6417"]["prv_button_text"] = "";
value["6417"]["prv_mask"] = "<!^\\d+${1,18}>";
value["6417"]["prv_group"] = "Интернет игры";
value["6417"]["prv_online_check"] = "false";

// Lava-Online
value["6418"] = new Array();
value["6418"]["prv_id"] = "6418";
value["6418"]["prv_name"] = 'Lava-Online';
value["6418"]["prv_folder"] = "content";
value["6418"]["prv_page"] = "./cellular.html";
value["6418"]["prv_page_conf"] = "./validate_confirm.html";
value["6418"]["prv_alert"] = "";
value["6418"]["prv_image"] = "img/ui_item/lava-Online.png";
value["6418"]["prv_top_image"] = "img/ui_item/lava-Online.png";
value["6418"]["prv_is_cellular"] = false;
value["6418"]["prv_invitation"] = "prov_enter_code";
value["6418"]["prv_button_text"] = "";
value["6418"]["prv_mask"] = "<!^\\d+${1,7}>";
value["6418"]["prv_group"] = "Интернет игры";
value["6418"]["prv_online_check"] = "false";



// TimeZero Prima
value["6427"] = new Array();
value["6427"]["prv_id"] = "6427";
value["6427"]["prv_name"] = 'TimeZero Prima';
value["6427"]["prv_folder"] = "content";
value["6427"]["prv_page"] = "./provider.html";
value["6427"]["prv_page_conf"] = "./validate_confirm.html";
value["6427"]["prv_alert"] = "";
value["6427"]["prv_image"] = "img/ui_item/timezero.png";
value["6427"]["prv_top_image"] = "img/ui_item/timezero.png";
value["6427"]["prv_is_cellular"] = false;
value["6427"]["prv_invitation"] = "prov_enter_code";
value["6427"]["prv_button_text"] = "";
value["6427"]["prv_mask"] = "<!^.+${1,16}>";
value["6427"]["prv_group"] = "Интернет игры";
value["6427"]["prv_online_check"] = "false";



// Грани реальности
value["6429"] = new Array();
value["6429"]["prv_id"] = "6429";
value["6429"]["prv_name"] = 'Грани реальности';
value["6429"]["prv_folder"] = "content";
value["6429"]["prv_page"] = "./provider.html";
value["6429"]["prv_page_conf"] = "./validate_confirm.html";
value["6429"]["prv_alert"] = "";
value["6429"]["prv_image"] = "img/ui_item/granirealnosti1.png";
value["6429"]["prv_top_image"] = "img/ui_item/granirealnosti1.png";
value["6429"]["prv_is_cellular"] = false;
value["6429"]["prv_invitation"] = "prov_enter_code";
value["6429"]["prv_button_text"] = "";
value["6429"]["prv_mask"] = "<!^.+${1,18}>";
value["6429"]["prv_group"] = "Интернет игры";
value["6429"]["prv_online_check"] = "false";



// Overkings
value["6431"] = new Array();
value["6431"]["prv_id"] = "6431";
value["6431"]["prv_name"] = 'Overkings';
value["6431"]["prv_folder"] = "content";
value["6431"]["prv_page"] = "./provider.html";
value["6431"]["prv_page_conf"] = "./validate_confirm.html";
value["6431"]["prv_alert"] = "";
value["6431"]["prv_image"] = "img/ui_item/overkings.png";
value["6431"]["prv_top_image"] = "img/ui_item/overkings.png";
value["6431"]["prv_is_cellular"] = false;
value["6431"]["prv_invitation"] = "prov_enter_code";
value["6431"]["prv_button_text"] = "";
value["6431"]["prv_mask"] = "<!^.+${1,30}>";
value["6431"]["prv_group"] = "Интернет игры";
value["6431"]["prv_online_check"] = "false";



// Джаггернаут
value["6433"] = new Array();
value["6433"]["prv_id"] = "6433";
value["6433"]["prv_name"] = 'Джаггернаут';
value["6433"]["prv_folder"] = "content";
value["6433"]["prv_page"] = "./provider.html";
value["6433"]["prv_page_conf"] = "./validate_confirm.html";
value["6433"]["prv_alert"] = "";
value["6433"]["prv_image"] = "img/ui_item/juggernaunt.png";
value["6433"]["prv_top_image"] = "img/ui_item/juggernaunt.png";
value["6433"]["prv_is_cellular"] = false;
value["6433"]["prv_invitation"] = "prov_enter_code";
value["6433"]["prv_button_text"] = "";
value["6433"]["prv_mask"] = "<!^.+${1,15}>";
value["6433"]["prv_group"] = "Интернет игры";
value["6433"]["prv_online_check"] = "false";

// Bloody World
value["6434"] = new Array();
value["6434"]["prv_id"] = "6434";
value["6434"]["prv_name"] = 'Bloody World';
value["6434"]["prv_folder"] = "content";
value["6434"]["prv_page"] = "./provider.html";
value["6434"]["prv_page_conf"] = "./validate_confirm.html";
value["6434"]["prv_alert"] = "";
value["6434"]["prv_image"] = "img/ui_item/bloodyworld.png";
value["6434"]["prv_top_image"] = "img/ui_item/bloodyworld.png";
value["6434"]["prv_is_cellular"] = false;
value["6434"]["prv_invitation"] = "prov_enter_code";
value["6434"]["prv_button_text"] = "";
value["6434"]["prv_mask"] = "<!^.+${1,24}>";
value["6434"]["prv_group"] = "Интернет игры";
value["6434"]["prv_online_check"] = "false";

// Войны мафии
value["6435"] = new Array();
value["6435"]["prv_id"] = "6435";
value["6435"]["prv_name"] = 'Войны мафии';
value["6435"]["prv_folder"] = "content";
value["6435"]["prv_page"] = "./provider.html";
value["6435"]["prv_page_conf"] = "./validate_confirm.html";
value["6435"]["prv_alert"] = "";
value["6435"]["prv_image"] = "img/ui_item/mafiaWar.png";
value["6435"]["prv_top_image"] = "img/ui_item/mafiaWar.png";
value["6435"]["prv_is_cellular"] = false;
value["6435"]["prv_invitation"] = "prov_enter_code";
value["6435"]["prv_button_text"] = "";
value["6435"]["prv_mask"] = "<!^.+${1,25}>";
value["6435"]["prv_group"] = "Интернет игры";
value["6435"]["prv_online_check"] = "false";

// Galaxy
value["6436"] = new Array();
value["6436"]["prv_id"] = "6436";
value["6436"]["prv_name"] = 'Galaxy';
value["6436"]["prv_folder"] = "content";
value["6436"]["prv_page"] = "./cellular.html";
value["6436"]["prv_page_conf"] = "./validate_confirm.html";
value["6436"]["prv_alert"] = "";
value["6436"]["prv_image"] = "img/ui_item/galaxy.png";
value["6436"]["prv_top_image"] = "img/ui_item/galaxy.png";
value["6436"]["prv_is_cellular"] = false;
value["6436"]["prv_invitation"] = "prov_enter_code";
value["6436"]["prv_button_text"] = "";
value["6436"]["prv_mask"] = "<!^\\d+${1,10}>";
value["6436"]["prv_group"] = "Интернет игры";
value["6436"]["prv_online_check"] = "false";

// Mgates
value["6437"] = new Array();
value["6437"]["prv_id"] = "6437";
value["6437"]["prv_name"] = 'Mgates';
value["6437"]["prv_folder"] = "content";
value["6437"]["prv_page"] = "./cellular.html";
value["6437"]["prv_page_conf"] = "./validate_confirm.html";
value["6437"]["prv_alert"] = "";
value["6437"]["prv_image"] = "img/ui_item/mgates.png";
value["6437"]["prv_top_image"] = "img/ui_item/mgates.png";
value["6437"]["prv_is_cellular"] = false;
value["6437"]["prv_invitation"] = "prov_enter_code";
value["6437"]["prv_button_text"] = "";
value["6437"]["prv_mask"] = "<!^\\d+${1,9}>";
value["6437"]["prv_group"] = "Интернет игры";
value["6437"]["prv_online_check"] = "false";

// Xsolla.com
value["6438"] = new Array();
value["6438"]["prv_id"] = "6438";
value["6438"]["prv_name"] = 'Xsolla.com';
value["6438"]["prv_folder"] = "content";
value["6438"]["prv_page"] = "./cellular.html";
value["6438"]["prv_page_conf"] = "./validate_confirm.html";
value["6438"]["prv_alert"] = "";
value["6438"]["prv_image"] = "img/ui_item/xsolla.png";
value["6438"]["prv_top_image"] = "img/ui_item/xsolla.png";
value["6438"]["prv_is_cellular"] = false;
value["6438"]["prv_invitation"] = "prov_enter_code";
value["6438"]["prv_button_text"] = "";
value["6438"]["prv_mask"] = "<!^\\d+${1,16}>";
value["6438"]["prv_group"] = "Интернет игры";
value["6438"]["prv_online_check"] = "true";



// Герои войны и денег
value["6439"] = new Array();
value["6439"]["prv_id"] = "6439";
value["6439"]["prv_name"] = 'Герои войны и денег';
value["6439"]["prv_folder"] = "content";
value["6439"]["prv_page"] = "./provider.html";
value["6439"]["prv_page_conf"] = "./validate_confirm.html";
value["6439"]["prv_alert"] = "";
value["6439"]["prv_image"] = "img/ui_item/War_Money.png";
value["6439"]["prv_top_image"] = "img/ui_item/War_Money.png";
value["6439"]["prv_is_cellular"] = false;
value["6439"]["prv_invitation"] = "prov_enter_code";
value["6439"]["prv_button_text"] = "";
value["6439"]["prv_mask"] = "<!^.+${1,20}>";
value["6439"]["prv_group"] = "Интернет игры";
value["6439"]["prv_online_check"] = "false";



// Легенда: Наследие драконов (фэо-медиант)
value["6443"] = new Array();
value["6443"]["prv_id"] = "6443";
value["6443"]["prv_name"] = 'Легенда: Наследие драконов (фэо-медиант)';
value["6443"]["prv_folder"] = "content";
value["6443"]["prv_page"] = "./provider.html";
value["6443"]["prv_page_conf"] = "./validate_confirm.html";
value["6443"]["prv_alert"] = "";
value["6443"]["prv_image"] = "img/ui_item/legenda_feo_mediant.png";
value["6443"]["prv_top_image"] = "img/ui_item/legenda_feo_mediant.png";
value["6443"]["prv_is_cellular"] = false;
value["6443"]["prv_invitation"] = "prov_enter_code";
value["6443"]["prv_button_text"] = "";
value["6443"]["prv_mask"] = "<!^.+${1,16}>";
value["6443"]["prv_group"] = "Интернет игры";
value["6443"]["prv_online_check"] = "false";

// Королевство
//value["6444"] = new Array ();
//value["6444"]["prv_id"]="6444";
//value["6444"]["prv_name"]= 'Королевство';
//value["6444"]["prv_folder"]="content";
//value["6444"]["prv_page"]="./cellular.html";
//value["6444"]["prv_page_conf"]="./validate_confirm.html";
//value["6444"]["prv_alert"]="";
//value["6444"]["prv_image"] = "img/ui_item/korolevstvo.png";
//value["6444"]["prv_top_image"]="img/ui_item/korolevstvo.png";
//value["6444"]["prv_is_cellular"] = false;
//value["6444"]["prv_invitation"] = "prov_enter_code";
//value["6444"]["prv_button_text"] = "";
//value["6444"]["prv_mask"] = "<!^\\d+${1,10}>";
//value["6444"]["prv_group"] = "Интернет игры";
//value["6444"]["prv_online_check"] = "false";

// Аллоды Онлайн
// Comment provider
// value["6445"] = new Array();
// value["6445"]["prv_id"] = "6445";
// value["6445"]["prv_name"] = 'Аллоды Онлайн';
// value["6445"]["prv_folder"] = "content";
// value["6445"]["prv_page"] = "./provider.html";
// value["6445"]["prv_page_conf"] = "./validate_confirm.html";
// value["6445"]["prv_alert"] = "";
// value["6445"]["prv_image"] = "img/ui_item/allody.png";
// value["6445"]["prv_top_image"] = "img/ui_item/allody.png";
// value["6445"]["prv_is_cellular"] = false;
// value["6445"]["prv_invitation"] = "prov_enter_code";
// value["6445"]["prv_button_text"] = "";
// value["6445"]["prv_mask"] = "<!^.+${1,15}>";
// value["6445"]["prv_group"] = "Интернет игры";
// value["6445"]["prv_online_check"] = "false";

// Гладиаторы
value["6446"] = new Array();
value["6446"]["prv_id"] = "6446";
value["6446"]["prv_name"] = 'Гладиаторы';
value["6446"]["prv_folder"] = "content";
value["6446"]["prv_page"] = "./provider.html";
value["6446"]["prv_page_conf"] = "./validate_confirm.html";
value["6446"]["prv_alert"] = "";
value["6446"]["prv_image"] = "img/ui_item/gladiator.png";
value["6446"]["prv_top_image"] = "img/ui_item/gladiator.png";
value["6446"]["prv_is_cellular"] = false;
value["6446"]["prv_invitation"] = "prov_enter_code";
value["6446"]["prv_button_text"] = "";
value["6446"]["prv_mask"] = "<!^.+${1,24}>";
value["6446"]["prv_group"] = "Интернет игры";
value["6446"]["prv_online_check"] = "false";

// Дозоры
value["6447"] = new Array();
value["6447"]["prv_id"] = "6447";
value["6447"]["prv_name"] = 'Дозоры';
value["6447"]["prv_folder"] = "content";
value["6447"]["prv_page"] = "./cellular.html";
value["6447"]["prv_page_conf"] = "./validate_confirm.html";
value["6447"]["prv_alert"] = "";
value["6447"]["prv_image"] = "img/ui_item/dozorr.png";
value["6447"]["prv_top_image"] = "img/ui_item/dozorr.png";
value["6447"]["prv_is_cellular"] = false;
value["6447"]["prv_invitation"] = "prov_enter_code";
value["6447"]["prv_button_text"] = "";
value["6447"]["prv_mask"] = "<!^\\d+${1,22}>";
value["6447"]["prv_group"] = "Интернет игры";
value["6447"]["prv_online_check"] = "false";

// Садовая империя
value["6448"] = new Array();
value["6448"]["prv_id"] = "6448";
value["6448"]["prv_name"] = 'Садовая империя';
value["6448"]["prv_folder"] = "content";
value["6448"]["prv_page"] = "./cellular.html";
value["6448"]["prv_page_conf"] = "./validate_confirm.html";
value["6448"]["prv_alert"] = "";
value["6448"]["prv_image"] = "img/ui_item/sadovaya_imperiya.png";
value["6448"]["prv_top_image"] = "img/ui_item/sadovaya_imperiya.png";
value["6448"]["prv_is_cellular"] = false;
value["6448"]["prv_invitation"] = "prov_enter_code";
value["6448"]["prv_button_text"] = "";
value["6448"]["prv_mask"] = "<!^\\d+${1,14}>";
value["6448"]["prv_group"] = "Интернет игры";
value["6448"]["prv_online_check"] = "false";

//Пути истории
value["6449"] = new Array();
value["6449"]["prv_id"] = "6449";
value["6449"]["prv_name"] = 'Пути истории';
value["6449"]["prv_folder"] = "content";
value["6449"]["prv_page"] = "./cellular.html";
value["6449"]["prv_page_conf"] = "./validate_confirm.html";
value["6449"]["prv_alert"] = "";
value["6449"]["prv_image"] = "img/ui_item/puti_istorii.png";
value["6449"]["prv_top_image"] = "img/ui_item/puti_istorii.png";
value["6449"]["prv_is_cellular"] = false;
value["6449"]["prv_invitation"] = "prov_enter_code";
value["6449"]["prv_button_text"] = "";
value["6449"]["prv_mask"] = "<!^\\d+${1,9}>";
value["6449"]["prv_group"] = "Интернет игры";
value["6449"]["prv_online_check"] = "false";

// Моя деревня
value["6450"] = new Array();
value["6450"]["prv_id"] = "6450";
value["6450"]["prv_name"] = 'Моя деревня';
value["6450"]["prv_folder"] = "content";
value["6450"]["prv_page"] = "./cellular.html";
value["6450"]["prv_page_conf"] = "./validate_confirm.html";
value["6450"]["prv_alert"] = "";
value["6450"]["prv_image"] = "img/ui_item/moya_derevnya.png";
value["6450"]["prv_top_image"] = "img/ui_item/moya_derevnya.png";
value["6450"]["prv_is_cellular"] = false;
value["6450"]["prv_invitation"] = "prov_enter_code";
value["6450"]["prv_button_text"] = "";
value["6450"]["prv_mask"] = "<!^\\d+${1,16}>";
value["6450"]["prv_group"] = "Интернет игры";
value["6450"]["prv_online_check"] = "false";

// Осада Онлайн
value["6451"] = new Array();
value["6451"]["prv_id"] = "6451";
value["6451"]["prv_name"] = 'Осада Онлайн';
value["6451"]["prv_folder"] = "content";
value["6451"]["prv_page"] = "./provider.html";
value["6451"]["prv_page_conf"] = "./validate_confirm.html";
value["6451"]["prv_alert"] = "";
value["6451"]["prv_image"] = "img/ui_item/osada_online.png";
value["6451"]["prv_top_image"] = "img/ui_item/osada_online.png";
value["6451"]["prv_is_cellular"] = false;
value["6451"]["prv_invitation"] = "prov_enter_code";
value["6451"]["prv_button_text"] = "";
value["6451"]["prv_mask"] = "<!^.+${1,21}>";
value["6451"]["prv_group"] = "Интернет игры";
value["6451"]["prv_online_check"] = "false";



// One world
value["6453"] = new Array();
value["6453"]["prv_id"] = "6453";
value["6453"]["prv_name"] = 'One world';
value["6453"]["prv_folder"] = "content";
value["6453"]["prv_page"] = "./provider.html";
value["6453"]["prv_page_conf"] = "./validate_confirm.html";
value["6453"]["prv_alert"] = "";
value["6453"]["prv_image"] = "img/ui_item/one_world.png";
value["6453"]["prv_top_image"] = "img/ui_item/one_world.png";
value["6453"]["prv_is_cellular"] = false;
value["6453"]["prv_invitation"] = "prov_enter_code";
value["6453"]["prv_button_text"] = "";
value["6453"]["prv_mask"] = "<!^.+${1,30}>";
value["6453"]["prv_group"] = "Интернет игры";
value["6453"]["prv_online_check"] = "false";



// Территория 2
value["6455"] = new Array();
value["6455"]["prv_id"] = "6455";
value["6455"]["prv_name"] = 'Территория 2';
value["6455"]["prv_folder"] = "content";
value["6455"]["prv_page"] = "./provider.html";
value["6455"]["prv_page_conf"] = "./validate_confirm.html";
value["6455"]["prv_alert"] = "";
value["6455"]["prv_image"] = "img/ui_item/territorya2.png";
value["6455"]["prv_top_image"] = "img/ui_item/territorya2.png";
value["6455"]["prv_is_cellular"] = false;
value["6455"]["prv_invitation"] = "prov_enter_code";
value["6455"]["prv_button_text"] = "";
value["6455"]["prv_mask"] = "<!^.+${1,30}>";
value["6455"]["prv_group"] = "Интернет игры";
value["6455"]["prv_online_check"] = "false";

//// Battle of Immortals
//value["6456"] = new Array();
//value["6456"]["prv_id"] = "6456";
//value["6456"]["prv_name"] = 'Battle of Immortals';
//value["6456"]["prv_folder"] = "content";
//value["6456"]["prv_page"] = "./cellular.html";
//value["6456"]["prv_page_conf"] = "./validate_confirm.html";
//value["6456"]["prv_alert"] = "";
//value["6456"]["prv_image"] = "img/ui_item/batofimort.png";
//value["6456"]["prv_top_image"] = "img/ui_item/batofimort.png";
//value["6456"]["prv_is_cellular"] = false;
//value["6456"]["prv_invitation"] = "prov_enter_code";
//value["6456"]["prv_button_text"] = "";
//value["6456"]["prv_mask"] = "<!^\\d+${1,16}>";
//value["6456"]["prv_group"] = "Интернет игры";
//value["6456"]["prv_online_check"] = "false";

// Atom fishing
value["6457"] = new Array();
value["6457"]["prv_id"] = "6457";
value["6457"]["prv_name"] = 'Atom fishing';
value["6457"]["prv_folder"] = "content";
value["6457"]["prv_page"] = "./cellular.html";
value["6457"]["prv_page_conf"] = "./validate_confirm.html";
value["6457"]["prv_alert"] = "";
value["6457"]["prv_image"] = "img/ui_item/atomfishing.png";
value["6457"]["prv_top_image"] = "img/ui_item/atomfishing.png";
value["6457"]["prv_is_cellular"] = false;
value["6457"]["prv_invitation"] = "prov_enter_code";
value["6457"]["prv_button_text"] = "";
value["6457"]["prv_mask"] = "<!^\\d+${1,19}>";
value["6457"]["prv_group"] = "Интернет игры";
value["6457"]["prv_online_check"] = "false";

// Лордмансер
value["6458"] = new Array();
value["6458"]["prv_id"] = "6458";
value["6458"]["prv_name"] = 'Лордмансер';
value["6458"]["prv_folder"] = "content";
value["6458"]["prv_page"] = "./provider.html";
value["6458"]["prv_page_conf"] = "./validate_confirm.html";
value["6458"]["prv_alert"] = "";
value["6458"]["prv_image"] = "img/ui_item/lordmaster.png";
value["6458"]["prv_top_image"] = "img/ui_item/lordmaster.png";
value["6458"]["prv_is_cellular"] = false;
value["6458"]["prv_invitation"] = "prov_enter_code";
value["6458"]["prv_button_text"] = "";
value["6458"]["prv_mask"] = "<!^.+${1,30}>";
value["6458"]["prv_group"] = "Интернет игры";
value["6458"]["prv_online_check"] = "false";



// Последний предел
value["6461"] = new Array();
value["6461"]["prv_id"] = "6461";
value["6461"]["prv_name"] = 'Последний предел';
value["6461"]["prv_folder"] = "content";
value["6461"]["prv_page"] = "./provider.html";
value["6461"]["prv_page_conf"] = "./validate_confirm.html";
value["6461"]["prv_alert"] = "";
value["6461"]["prv_image"] = "img/ui_item/poslednii_predel.png";
value["6461"]["prv_top_image"] = "img/ui_item/poslednii_predel.png";
value["6461"]["prv_is_cellular"] = false;
value["6461"]["prv_invitation"] = "prov_enter_code";
value["6461"]["prv_button_text"] = "";
value["6461"]["prv_mask"] = "<!^.+${1,30}>";
value["6461"]["prv_group"] = "Интернет игры";
value["6461"]["prv_online_check"] = "false";

// Грани реальности
value["6462"] = new Array();
value["6462"]["prv_id"] = "6462";
value["6462"]["prv_name"] = 'Грани реальности';
value["6462"]["prv_folder"] = "content";
value["6462"]["prv_page"] = "./provider.html";
value["6462"]["prv_page_conf"] = "./validate_confirm.html";
value["6462"]["prv_alert"] = "";
value["6462"]["prv_image"] = "img/ui_item/granirealnosti1.png";
value["6462"]["prv_top_image"] = "img/ui_item/granirealnosti1.png";
value["6462"]["prv_is_cellular"] = false;
value["6462"]["prv_invitation"] = "prov_enter_code";
value["6462"]["prv_button_text"] = "";
value["6462"]["prv_mask"] = "<!^.+${1,30}>";
value["6462"]["prv_group"] = "Интернет игры";
value["6462"]["prv_online_check"] = "false";


// Vkontakte.ru
// Comment provider
// value["6466"] = new Array();
// value["6466"]["prv_id"] = "6466";
// value["6466"]["prv_name"] = 'Vkontakte.ru';
// value["6466"]["prv_folder"] = "content";
// value["6466"]["prv_page"] = "./cellular.html";
// value["6466"]["prv_page_conf"] = "./validate_confirm.html";
// value["6466"]["prv_alert"] = "";
// value["6466"]["prv_image"] = "img/ui_item/VKontakteLogo.png";
// value["6466"]["prv_top_image"] = "img/ui_item/VKontakteLogo.png";
// value["6466"]["prv_is_cellular"] = false;
// value["6466"]["prv_invitation"] = "prov_enter_code";
// value["6466"]["prv_button_text"] = "";
// value["6466"]["prv_mask"] = "ID<!^\\d+${1,10}>";
// value["6466"]["prv_group"] = "Интернет игры";
// value["6466"]["prv_online_check"] = "false";

// Благотворительность

value["charity_cat"] = new Array();
value["charity_cat"]["prv_name"] = "Благо-творительность";
value["charity_cat"]["prv_image"] = "./img/ui_item/grp212sub_charity2.gif";

// От сердца к сердцу
value["7321"] = new Array();
value["7321"]["prv_id"] = "7321";
value["7321"]["prv_name"] = 'ОБФ «Heart To Heart»';
value["7321"]["prv_folder"] = "charity";
value["7321"]["prv_page"] = "./cellular.html";
value["7321"]["prv_page_conf"] = "./validate_confirm.html";
value["7321"]["prv_alert"] = "Фонд помощи детям с сердечно-сосудистыми заболеваниями www.sos.kg";
value["7321"]["prv_image"] = "img/ui_item/hearttoheart.gif";
value["7321"]["prv_top_image"] = "img/ui_item/ak-bata.png";
value["7321"]["prv_is_cellular"] = false;
value["7321"]["prv_invitation"] = "prov_enter_phone";
value["7321"]["prv_button_text"] = "";
value["7321"]["prv_mask"] = "0(<!^\\d+${3}>)<!^\\d+${6}>";
value["7321"]["prv_group"] = "Благотворительность";
value["7321"]["prv_online_check"] = "false";

// Ресурсный центр для пожилых
value["8786"] = new Array();
value["8786"]["prv_id"] = "8786";
value["8786"]["prv_name"] = 'ОО «Ресурсный центр для пожилых»';
value["8786"]["prv_folder"] = "charity";
value["8786"]["prv_page"] = "./cellular.html";
value["8786"]["prv_page_conf"] = "./validate_confirm.html";
value["8786"]["prv_alert"] = "";
value["8786"]["prv_image"] = "img/ui_item/rcp.gif";
value["8786"]["prv_top_image"] = "img/ui_item/rcp.gif";
value["8786"]["prv_is_cellular"] = false;
value["8786"]["prv_invitation"] = "prov_enter_phone";
value["8786"]["prv_button_text"] = "";
value["8786"]["prv_mask"] = "0(<!^\\d+${3}>)<!^\\d+${6}>";
value["8786"]["prv_group"] = "Благотворительность";
value["8786"]["prv_online_check"] = "false";

// Помощь детям
value["7323"] = new Array();
value["7323"]["prv_id"] = "7323";
value["7323"]["prv_name"] = 'ОБФ «Help The Children»';
value["7323"]["prv_folder"] = "charity";
value["7323"]["prv_page"] = "./cellular.html";
value["7323"]["prv_page_conf"] = "./validate_confirm.html";
value["7323"]["prv_alert"] = "";
value["7323"]["prv_image"] = "img/ui_item/rosinbank_help_child.png";
value["7323"]["prv_top_image"] = "img/ui_item/rosinbank_help_child.png";
value["7323"]["prv_is_cellular"] = false;
value["7323"]["prv_invitation"] = "prov_enter_phone";
value["7323"]["prv_button_text"] = "";
value["7323"]["prv_mask"] = "0(<!^\\d+${3}>)<!^\\d+${6}>";
value["7323"]["prv_group"] = "Благотворительность";
value["7323"]["prv_online_check"] = "false";

// Росинбанк
value["bishkek_zalkar"] = new Array();
value["bishkek_zalkar"]["prv_name"] = "Росинбанк";
value["bishkek_zalkar"]["prv_image"] = "./img/ui_item/zrosin.png";

value["mkk"] = new Array();
value["mkk"]["prv_name"] = "Микрокредитные Компании";
value["mkk"]["prv_image"] = "./img/ui_item/pkredit.png";

// Элет капитал
// Comment provider
// value["8075"] = new Array();
// value["8075"]["prv_id"] = "8075";
// value["8075"]["prv_name"] = 'МКК «Элет-Капитал»';
// value["8075"]["prv_folder"] = "charity";
// value["8075"]["prv_page"] = "./cellular.html";
// value["8075"]["prv_page_conf"] = "./validate_confirm.html";
// value["8075"]["prv_alert"] = "Внимание! Платежи после 16 часов будут зачислены на следующий день.";
// value["8075"]["prv_image"] = "img/ui_item/eletkapital.png";
// value["8075"]["prv_top_image"] = "img/ui_item/eletkapital.png";
// value["8075"]["prv_is_cellular"] = false;
// value["8075"]["prv_invitation"] = "prov_enter_account";
// value["8075"]["prv_button_text"] = "";
// value["8075"]["prv_mask"] = "<!^\\d+${13}>";
// value["8075"]["prv_group"] = "";
// value["8075"]["prv_online_check"] = "true";
// value["8075"]["prv_receipt_extra_message"] = "Платежи после 16 часов будут зачислены на следующий день.";

// Домофон
value["8592"] = new Array();
value["8592"]["prv_id"] = "8592";
value["8592"]["prv_name"] = 'Центр обслуживания домофонов';
value["8592"]["prv_folder"] = "charity";
value["8592"]["prv_page"] = "./cellular.html";
value["8592"]["prv_page_conf"] = "./validate_confirm.html";
value["8592"]["prv_alert"] = "";
value["8592"]["prv_image"] = "img/ui_item/cod_domofon.png";
value["8592"]["prv_top_image"] = "img/ui_item/cod_domofon.png";
value["8592"]["prv_is_cellular"] = false;
value["8592"]["prv_invitation"] = "prov_enter_account";
value["8592"]["prv_button_text"] = "";
value["8592"]["prv_mask"] = "<!^\\d+${6}>";
value["8592"]["prv_group"] = "";
value["8592"]["prv_online_check"] = "true";
value["8592"]["prv_receipt_extra_message"] = "";


//Столичный Домофон
value["22363"] = new Array();
value["22363"]["prv_id"] = "22363";
value["22363"]["prv_name"] = "Столичный Домофон";
value["22363"]["prv_folder"] = "tax";
value["22363"]["prv_page"] = "./cellular.html";
value["22363"]["prv_page_conf"] = "./validate_confirm.html";
value["22363"]["prv_alert"] = "";
value["22363"]["prv_image"] = "img/ui_item/logo-CapitalDomofon.png";
value["22363"]["prv_top_image"] = "./img/ui_item/logo-CapitalDomofon.png";
value["22363"]["prv_invitation"] = "prov_enter_account";
value["22363"]["prv_button_text"] = "";
value["22363"]["prv_mask"] = "<!^\\d+${7}>-<!^\\d+${1}>";
value["22363"]["prv_group"] = "";
value["22363"]["prv_online_check"] = "true";

// Мастер Домофон
// Comment provider
// value["10262"] = new Array();
// value["10262"]["prv_id"] = "10262";
// value["10262"]["prv_name"] = "Мастер Домофон";
// value["10262"]["prv_folder"] = "tax";
// value["10262"]["prv_page"] = "./cellular.html";
// value["10262"]["prv_page_conf"] = "./validate_confirm.html";
// value["10262"]["prv_alert"] = "";
// value["10262"]["prv_image"] = "img/ui_item/logo-MasterDomofon.png";
// value["10262"]["prv_top_image"] = "./img/ui_item/logo-MasterDomofon.png";
// value["10262"]["prv_invitation"] = "prov_enter_account";
// value["10262"]["prv_button_text"] = "";
// value["10262"]["prv_mask"] = "<!^\\d+${2,5}>";
// value["10262"]["prv_group"] = "";
// value["10262"]["prv_online_check"] = "true";

// ОБразование
value["teach"] = new Array();
value["teach"]["prv_name"] = "Образование";
value["teach"]["prv_image"] = "img/ui_item/grp128TRAINING.gif";

//Академия туризма
value["akademiaturizma"] = new Array();
value["akademiaturizma"]["prv_name"] = "Академия туризма";
value["akademiaturizma"]["prv_image"] = "./img/ui_item/at.gif";

// Академия туризма - Сессия
// Comment provider 
// value["8644"] = new Array();
// value["8644"]["prv_id"] = "8644";
// value["8644"]["prv_name"] = 'Академия туризма - Сессия';
// value["8644"]["prv_folder"] = "charity";
// value["8644"]["prv_page"] = "./cellular.html";
// value["8644"]["prv_page_conf"] = "./validate_confirm.html";
// value["8644"]["prv_alert"] = "";
// value["8644"]["prv_image"] = "img/ui_item/at.gif";
// value["8644"]["prv_top_image"] = "img/ui_item/at.gif";
// value["8644"]["prv_is_cellular"] = false;
// value["8644"]["prv_invitation"] = "prov_enter_account";
// value["8644"]["prv_button_text"] = "";
// value["8644"]["prv_mask"] = "<!^\\d+${1,10}>";
// value["8644"]["prv_group"] = "";
// value["8644"]["prv_online_check"] = "false";
// value["8644"]["prv_receipt_extra_message"] = "";

// Академия туризма - За обучение
// Comment provider
// value["8670"] = new Array();
// value["8670"]["prv_id"] = "8670";
// value["8670"]["prv_name"] = 'Академия туризма - За обучение';
// value["8670"]["prv_folder"] = "charity";
// value["8670"]["prv_page"] = "./cellular.html";
// value["8670"]["prv_page_conf"] = "./validate_confirm.html";
// value["8670"]["prv_alert"] = "";
// value["8670"]["prv_image"] = "img/ui_item/at.gif";
// value["8670"]["prv_top_image"] = "img/ui_item/at.gif";
// value["8670"]["prv_is_cellular"] = false;
// value["8670"]["prv_invitation"] = "prov_enter_account";
// value["8670"]["prv_button_text"] = "";
// value["8670"]["prv_mask"] = "<!^\\d+${1,10}>";
// value["8670"]["prv_group"] = "";
// value["8670"]["prv_online_check"] = "true";
// value["8670"]["prv_receipt_extra_message"] = "";

// Академия туризма - Право записи
// Comment provider
// value["8671"] = new Array();
// value["8671"]["prv_id"] = "8671";
// value["8671"]["prv_name"] = 'Академия туризма - Право записи';
// value["8671"]["prv_folder"] = "charity";
// value["8671"]["prv_page"] = "./cellular.html";
// value["8671"]["prv_page_conf"] = "./validate_confirm.html";
// value["8671"]["prv_alert"] = "";
// value["8671"]["prv_image"] = "img/ui_item/at.gif";
// value["8671"]["prv_top_image"] = "img/ui_item/at.gif";
// value["8671"]["prv_is_cellular"] = false;
// value["8671"]["prv_invitation"] = "prov_enter_account";
// value["8671"]["prv_button_text"] = "";
// value["8671"]["prv_mask"] = "<!^\\d+${1,10}>";
// value["8671"]["prv_group"] = "";
// value["8671"]["prv_online_check"] = "true";
// value["8671"]["prv_receipt_extra_message"] = "";

// ОШ Электро
// Comment provider
// value["8478"] = new Array();
// value["8478"]["prv_id"] = "8478";
// value["8478"]["prv_name"] = 'ОШ Электро';
// value["8478"]["prv_folder"] = "zkh";
// value["8478"]["prv_page"] = "./cellular.html";
// value["8478"]["prv_page_conf"] = "./validate_confirm.html";
// value["8478"]["prv_alert"] = "";
// value["8478"]["prv_image"] = "./img/ui_item/light.png";
// value["8478"]["prv_top_image"] = "";
// value["8478"]["prv_is_cellular"] = false;
// value["8478"]["prv_invitation"] = "prov_enter_account";
// value["8478"]["prv_button_text"] = "";
// value["8478"]["prv_mask"] = "<!^\\d+${11}>";
// value["8478"]["prv_group"] = "zkh";
// value["8478"]["prv_online_check"] = "true";
// value["8478"]["prv_receipt_extra_message"] = "";

//// Aknet IPTV
//value["8730"] = new Array();
//value["8730"]["prv_id"] = "8730";
//value["8730"]["prv_name"] = 'iTV Акнет';
//value["8730"]["prv_folder"] = "";
//value["8730"]["prv_page"] = "./cellular.html";
//value["8730"]["prv_page_conf"] = "./validate_confirm.html";
//value["8730"]["prv_alert"] = "";
//value["8730"]["prv_image"] = "./img/ui_item/aknet-tv.png";
//value["8730"]["prv_top_image"] = "";
//value["8730"]["prv_is_cellular"] = false;
//value["8730"]["prv_invitation"] = "prov_enter_account";
//value["8730"]["prv_button_text"] = "";
//value["8730"]["prv_mask"] = "<!^\\d+${2,8}>";
//value["8730"]["prv_group"] = "";
//value["8730"]["prv_online_check"] = "true";
//value["8730"]["prv_receipt_extra_message"] = "";

// Saima 4G
value["8727"] = new Array();
value["8727"]["prv_id"] = "8727";
value["8727"]["prv_name"] = 'Saima 4G';
value["8727"]["prv_folder"] = "";
value["8727"]["prv_page"] = "./cellular.html";
value["8727"]["prv_page_conf"] = "./validate_confirm.html";
value["8727"]["prv_alert"] = "А вы уже оставили свои персональные данные в нашей Компании? Зарегестрируйтесь до 31.01.2016 и получите бонус. Справки по телефонам 909000, 0706909000, 0770909101, 0554909900";
value["8727"]["prv_image"] = "./img/ui_item/saima4g.png";
value["8727"]["prv_top_image"] = "";
value["8727"]["prv_is_cellular"] = false;
value["8727"]["prv_invitation"] = "prov_enter_acc_or_phone";
value["8727"]["prv_button_text"] = "";
value["8727"]["prv_mask"] = "<!^\\d+${6,10}>";
value["8727"]["prv_group"] = "";
value["8727"]["prv_online_check"] = "true";
value["8727"]["prv_receipt_extra_message"] = "";

// Lot.kg
// Comment prrovider
// value["8784"] = new Array();
// value["8784"]["prv_id"] = "8784";
// value["8784"]["prv_name"] = 'Аукционно Тендерный Дом';
// value["8784"]["prv_folder"] = "";
// value["8784"]["prv_page"] = "./cellular.html";
// value["8784"]["prv_page_conf"] = "./validate_confirm.html";
// value["8784"]["prv_alert"] = "";
// value["8784"]["prv_image"] = "./img/ui_item/lot.kg.gif";
// value["8784"]["prv_top_image"] = "";
// value["8784"]["prv_is_cellular"] = false;
// value["8784"]["prv_invitation"] = "prov_enter_account";
// value["8784"]["prv_button_text"] = "";
// value["8784"]["prv_mask"] = "<!^\\d+${7}>";
// value["8784"]["prv_group"] = "";
// value["8784"]["prv_online_check"] = "true";
// value["8784"]["prv_receipt_extra_message"] = "";

// My
value["8785"] = new Array();
value["8785"]["prv_id"] = "8785";
value["8785"]["prv_name"] = 'MY4G.KG';
value["8785"]["prv_folder"] = "";
value["8785"]["prv_page"] = "./cellular.html";
value["8785"]["prv_page_conf"] = "./validate_confirm.html";
value["8785"]["prv_alert"] = "";
value["8785"]["prv_image"] = "./img/ui_item/my_gat.gif";
value["8785"]["prv_top_image"] = "";
value["8785"]["prv_is_cellular"] = false;
value["8785"]["prv_invitation"] = "prov_enter_account";
value["8785"]["prv_button_text"] = "";
value["8785"]["prv_mask"] = "<!^\\d+${7}>";
value["8785"]["prv_group"] = "Оплата за интернет";
value["8785"]["prv_online_check"] = "true";
value["8785"]["prv_receipt_extra_message"] = "";

// Погашение кредитов (Залкар)
// Comment provider
// value["8931"] = new Array();
// value["8931"]["prv_id"] = "8931";
// value["8931"]["prv_name"] = 'Погашение кредита';
// value["8931"]["prv_folder"] = "";
// value["8931"]["prv_page"] = "./cellular.html";
// value["8931"]["prv_page_conf"] = "./validate_confirm.html";
// value["8931"]["prv_alert"] = "Внимание! Платежи принятые до 16:00 исполняются текущим днём, платежи принятые после 16:00 будут исполнены следующим рабочим днём.";
// value["8931"]["prv_image"] = "./img/ui_item/zrosin.png";
// value["8931"]["prv_top_image"] = "";
// value["8931"]["prv_is_cellular"] = false;
// value["8931"]["prv_invitation"] = "prov_enter_account";
// value["8931"]["prv_button_text"] = "";
// value["8931"]["prv_mask"] = "<!^\\d+${16}>";
// value["8931"]["prv_group"] = "";
// value["8931"]["prv_online_check"] = "true";
// value["8931"]["prv_receipt_extra_message"] = "Платежи после 16 часов будут зачислены на следующий день.";

// Пополнение карт-счета (Залкар)
// Comment provider
// value["9813"] = new Array();
// value["9813"]["prv_id"] = "9813";
// value["9813"]["prv_name"] = 'Пополнение карт-счета';
// value["9813"]["prv_folder"] = "";
// value["9813"]["prv_page"] = "./cellular.html";
// value["9813"]["prv_page_conf"] = "./validate_confirm.html";
// value["9813"]["prv_alert"] = "Внимание! Пополнение карточного счета, открытого в долларах США производится в кыргызских сомах  с автоматической конвертацией по коммерческому курсу банка. <br/> <br/> Платежи принятые до 16:00 исполняются текущим днём, платежи принятые после 16:00 будут исполнены следующим рабочим днём.";
// value["9813"]["prv_image"] = "./img/ui_item/zrosin.png";
// value["9813"]["prv_top_image"] = "";
// value["9813"]["prv_is_cellular"] = false;
// value["9813"]["prv_invitation"] = "prov_enter_account";
// value["9813"]["prv_button_text"] = "";
// value["9813"]["prv_mask"] = "<!^\\d+${16}>";
// value["9813"]["prv_group"] = "";
// value["9813"]["prv_online_check"] = "true";
// value["9813"]["prv_receipt_extra_message"] = "Платежи после 16 часов будут зачислены на следующий день.";

// OnlineTv
value["8952"] = new Array();
value["8952"]["prv_id"] = "8952";
value["8952"]["prv_name"] = 'OnlineTV';
value["8952"]["prv_folder"] = "";
value["8952"]["prv_page"] = "./cellular.html";
value["8952"]["prv_page_conf"] = "./validate_confirm.html";
value["8952"]["prv_alert"] = "";
value["8952"]["prv_image"] = "./img/ui_item/onlinetv.png";
value["8952"]["prv_top_image"] = "";
value["8952"]["prv_is_cellular"] = false;
value["8952"]["prv_invitation"] = "prov_enter_account";
value["8952"]["prv_button_text"] = "";
value["8952"]["prv_mask"] = "<!^\\d+${5,6}>";
value["8952"]["prv_group"] = "";
value["8952"]["prv_online_check"] = "false";
value["8952"]["prv_receipt_extra_message"] = "";

// Голосовые открытки
value["9244"] = new Array();
value["9244"]["prv_id"] = "9244";
value["9244"]["prv_name"] = 'Голосовые открытки';
value["9244"]["prv_folder"] = "";
value["9244"]["prv_page"] = "./p_voice_greetings.html";
value["9244"]["prv_page_conf"] = "./cellular.html";
value["9244"]["prv_alert"] = "";
value["9244"]["prv_image"] = "./img/ui_item/vg.gif";
value["9244"]["prv_top_image"] = "./img/ui_item/vg.gif";
value["9244"]["prv_is_cellular"] = false;
value["9244"]["prv_invitation"] = "prov_enter_phone";
value["9244"]["prv_button_text"] = "";
value["9244"]["prv_mask"] = "0<!^\\d+${9}>";
value["9244"]["prv_group"] = "";
value["9244"]["prv_online_check"] = "false";
value["9244"]["prv_receipt_extra_message"] = "";

// Zor-TV
value["8953"] = new Array();
value["8953"]["prv_id"] = "8953";
value["8953"]["prv_name"] = 'Zor-TV';
value["8953"]["prv_folder"] = "";
value["8953"]["prv_page"] = "./cellular.html";
value["8953"]["prv_page_conf"] = "./validate_confirm.html";
value["8953"]["prv_alert"] = "";
value["8953"]["prv_image"] = "./img/ui_item/zortv.png";
value["8953"]["prv_top_image"] = "";
value["8953"]["prv_is_cellular"] = false;
value["8953"]["prv_invitation"] = "prov_enter_account";
value["8953"]["prv_button_text"] = "";
value["8953"]["prv_mask"] = "<!^\\d+${1,20}>";
value["8953"]["prv_group"] = "";
value["8953"]["prv_online_check"] = "true";
value["8953"]["prv_receipt_extra_message"] = "";

// ОТЭКАВИА
value["9470"] = new Array();
value["9470"]["prv_id"] = "9470";
value["9470"]["prv_name"] = 'ОТЭКАВИА';
value["9470"]["prv_folder"] = "";
value["9470"]["prv_page"] = "./cellular.html";
value["9470"]["prv_page_conf"] = "./validate_confirm.html";
value["9470"]["prv_alert"] = "";
value["9470"]["prv_image"] = "./img/ui_item/OtecAvia.png";
value["9470"]["prv_top_image"] = "";
value["9470"]["prv_is_cellular"] = false;
value["9470"]["prv_invitation"] = "prov_enter_account";
value["9470"]["prv_button_text"] = "";
value["9470"]["prv_mask"] = "<!^\\d+${1,20}>";
value["9470"]["prv_group"] = "";
value["9470"]["prv_online_check"] = "true";
value["9470"]["prv_receipt_extra_message"] = "";

// Q2Media
value["q2"] = new Array();
value["q2"]["prv_name"] = 'Размещение текста рекламы в СМИ';
value["q2"]["prv_image"] = "./img/ui_item/smartmedia.png";

value["9031"] = new Array();
value["9031"]["prv_id"] = "9031";
value["9031"]["prv_name"] = 'Оплата через реквизит';
value["9031"]["prv_folder"] = "other";
value["9031"]["prv_page"] = "./cellular.html";
value["9031"]["prv_page_conf"] = "./validate_confirm.html";
value["9031"]["prv_alert"] = "";
//value["9031"]["prv_image"] = "./img/ui_item/smartmedia.png";
value["9031"]["prv_top_image"] = "";
value["9031"]["prv_is_cellular"] = false;
value["9031"]["prv_invitation"] = "prov_enter_account";
value["9031"]["prv_button_text"] = "";
value["9031"]["prv_mask"] = "<!^\\d+${1,14}>";
value["9031"]["prv_group"] = "";
value["9031"]["prv_online_check"] = "false";
value["9031"]["tag"] = "";
value["9031"]["prv_receipt_extra_message"] = "";

value["q2_req"] = new Array();
value["q2_req"]["prv_name"] = "Оплата через реквизит";
value["q2_req"]["prv_image"] = "";

value["q2_text"] = new Array();
value["q2_text"]["prv_name"] = "Ввод текста объявления";
value["q2_text"]["prv_image"] = "";

value["q2_text_tv"] = new Array();
value["q2_text_tv"]["prv_name"] = "Бегушка на ТВ";
value["q2_text_tv"]["prv_image"] = "";

value["q2_text_radio"] = new Array();
value["q2_text_radio"]["prv_name"] = "Реклама на радио";
value["q2_text_radio"]["prv_image"] = "";

value["q2_super_info"] = new Array();
value["q2_super_info"]["prv_name"] = "Супер-инфо";
value["q2_super_info"]["prv_image"] = "";

value["9336"] = new Array();
value["9336"]["prv_id"] = "9336";
value["9336"]["prv_name"] = 'Супер-инфо';
value["9336"]["prv_folder"] = "other";
value["9336"]["prv_page"] = "p_q2_keyboard.html";
value["9336"]["prv_page_conf"] = "./validate_confirm.html";
value["9336"]["prv_alert"] = "";
value["9336"]["prv_image"] = "./img/ui_item/superinfo.jpg";
value["9336"]["prv_top_image"] = "";
value["9336"]["prv_is_cellular"] = false;
value["9336"]["prv_invitation"] = "prov_enter_phone";
value["9336"]["prv_button_text"] = "";
value["9336"]["prv_mask"] = "";
value["9336"]["prv_group"] = "Q2Media";
value["9336"]["prv_online_check"] = "false";
value["9336"]["tag"] = { type: 'line', cost: 150, period: 1, calcSpace: true, fields: 4, serviceName: " - оплата рекламы", lineLen: 34, isTv: false, nextCalend: 1 };

value["q2_vb"] = new Array();
value["q2_vb"]["prv_name"] = "Вечерний Бишкек";
value["q2_vb"]["prv_page"] = "p_q2_calendar.html";
value["q2_vb"]["prv_image"] = "";

value["9337"] = new Array();
value["9337"]["prv_id"] = "9337";
value["9337"]["prv_name"] = 'Вечерний Бишкек';
value["9337"]["prv_folder"] = "other";
value["9337"]["prv_page"] = "p_q2_vb.html";
value["9337"]["prv_page_conf"] = "./validate_confirm.html";
value["9337"]["prv_alert"] = "";
value["9337"]["prv_image"] = "./img/ui_item/VB.jpg";
value["9337"]["prv_top_image"] = "./img/ui_item/VB.jpg";
value["9337"]["prv_is_cellular"] = false;
value["9337"]["prv_invitation"] = "prov_enter_phone";
value["9337"]["prv_button_text"] = "";
value["9337"]["prv_mask"] = "";
value["9337"]["prv_group"] = "";
value["9337"]["prv_online_check"] = "false";
value["9337"]["tag"] = { nextCalend: 1 };

value["9338"] = new Array();
value["9338"]["prv_id"] = "9338";
value["9338"]["prv_name"] = 'Хит FM';
value["9338"]["prv_folder"] = "other";
value["9338"]["prv_page"] = "p_q2_calendar.html";
value["9338"]["prv_page_conf"] = "./validate_confirm.html";
value["9338"]["prv_alert"] = "";
value["9338"]["prv_image"] = "./img/ui_item/hit.jpg";
value["9338"]["prv_top_image"] = "";
value["9338"]["prv_is_cellular"] = false;
value["9338"]["prv_invitation"] = "prov_enter_phone";
value["9338"]["prv_button_text"] = "";
value["9338"]["prv_mask"] = "";
value["9338"]["prv_group"] = "Q2Media";
value["9338"]["prv_online_check"] = "false";
value["9338"]["tag"] = { type: 'word', cost: 7, period: 1, calcSpace: true, fields: 4, serviceName: "Хит FM - оплата рекламы", isTv: false, nextCalend: 2 };

value["9339"] = new Array();
value["9339"]["prv_id"] = "9339";
value["9339"]["prv_name"] = 'Тумар';
value["9339"]["prv_folder"] = "other";
value["9339"]["prv_page"] = "p_q2_calendar.html";
value["9339"]["prv_page_conf"] = "./validate_confirm.html";
value["9339"]["prv_alert"] = "";
value["9339"]["prv_image"] = "./img/ui_item/tumar.jpg";
value["9339"]["prv_top_image"] = "";
value["9339"]["prv_is_cellular"] = false;
value["9339"]["prv_invitation"] = "prov_enter_phone";
value["9339"]["prv_button_text"] = "";
value["9339"]["prv_mask"] = "";
value["9339"]["prv_group"] = "Q2Media";
value["9339"]["prv_online_check"] = "false";
value["9339"]["tag"] = { type: 'word', cost: 15, period: 1, calcSpace: true, fields: 4, serviceName: "Тумар - оплата рекламы", isTv: false, nextCalend: 2 };

value["9342"] = new Array();
value["9342"]["prv_id"] = "9342";
value["9342"]["prv_name"] = 'Шансон';
value["9342"]["prv_folder"] = "other";
value["9342"]["prv_page"] = "p_q2_calendar.html";
value["9342"]["prv_page_conf"] = "./validate_confirm.html";
value["9342"]["prv_alert"] = "";
value["9342"]["prv_image"] = "";
value["9342"]["prv_top_image"] = "";
value["9342"]["prv_is_cellular"] = false;
value["9342"]["prv_invitation"] = "prov_enter_phone";
value["9342"]["prv_button_text"] = "";
value["9342"]["prv_mask"] = "";
value["9342"]["prv_group"] = "Q2Media";
value["9342"]["prv_online_check"] = "false";
value["9342"]["tag"] = { type: 'word', cost: 20, period: 1, calcSpace: true, fields: 4, serviceName: "Шансон - оплата рекламы", isTv: false, nextCalend: 2 };

value["9343"] = new Array();
value["9343"]["prv_id"] = "9343";
value["9343"]["prv_name"] = 'Кыргызстан обондору';
value["9343"]["prv_folder"] = "other";
value["9343"]["prv_page"] = "p_q2_calendar.html";
value["9343"]["prv_page_conf"] = "./validate_confirm.html";
value["9343"]["prv_alert"] = "";
value["9343"]["prv_image"] = "./img/ui_item/Obondoru.jpg";
value["9343"]["prv_top_image"] = "";
value["9343"]["prv_is_cellular"] = false;
value["9343"]["prv_invitation"] = "prov_enter_phone";
value["9343"]["prv_button_text"] = "";
value["9343"]["prv_mask"] = "";
value["9343"]["prv_group"] = "Q2Media";
value["9343"]["prv_online_check"] = "false";
value["9343"]["tag"] = { type: 'word', cost: 30, period: 1, calcSpace: true, fields: 4, serviceName: "Кыргызстан обондору - оплата рекламы", isTv: false, nextCalend: 2 };

value["9344"] = new Array();
value["9344"]["prv_id"] = "9344";
value["9344"]["prv_name"] = 'Европа +';
value["9344"]["prv_folder"] = "other";
value["9344"]["prv_page"] = "p_q2_calendar.html";
value["9344"]["prv_page_conf"] = "./validate_confirm.html";
value["9344"]["prv_alert"] = "";
value["9344"]["prv_image"] = "./img/ui_item/europa.jpg";
value["9344"]["prv_top_image"] = "";
value["9344"]["prv_is_cellular"] = false;
value["9344"]["prv_invitation"] = "prov_enter_phone";
value["9344"]["prv_button_text"] = "";
value["9344"]["prv_mask"] = "";
value["9344"]["prv_group"] = "Q2Media";
value["9344"]["prv_online_check"] = "false";
value["9344"]["tag"] = { type: 'word', cost: 30, period: 1, calcSpace: true, fields: 4, serviceName: "Европа + - оплата рекламы", isTv: false, nextCalend: 2 };

value["9345"] = new Array();
value["9345"]["prv_id"] = "9345";
value["9345"]["prv_name"] = 'Ретро FM';
value["9345"]["prv_folder"] = "other";
value["9345"]["prv_page"] = "p_q2_calendar.html";
value["9345"]["prv_page_conf"] = "./validate_confirm.html";
value["9345"]["prv_alert"] = "";
value["9345"]["prv_image"] = "";
value["9345"]["prv_top_image"] = "";
value["9345"]["prv_is_cellular"] = false;
value["9345"]["prv_invitation"] = "prov_enter_phone";
value["9345"]["prv_button_text"] = "";
value["9345"]["prv_mask"] = "";
value["9345"]["prv_group"] = "Q2Media";
value["9345"]["prv_online_check"] = "false";
value["9345"]["tag"] = { type: 'word', cost: 30, period: 1, calcSpace: true, fields: 4, serviceName: "Ретро FM - оплата рекламы", isTv: false, nextCalend: 2 };

value["9347"] = new Array();
value["9347"]["prv_id"] = "9347";
value["9347"]["prv_name"] = 'КТР';
value["9347"]["prv_folder"] = "other";
value["9347"]["prv_page"] = "p_q2_calendar.html";
value["9347"]["prv_page_conf"] = "./validate_confirm.html";
value["9347"]["prv_alert"] = "";
value["9347"]["prv_image"] = "./img/ui_item/ktr.jpg";
value["9347"]["prv_top_image"] = "";
value["9347"]["prv_is_cellular"] = false;
value["9347"]["prv_invitation"] = "prov_enter_phone";
value["9347"]["prv_button_text"] = "";
value["9347"]["prv_mask"] = "";
value["9347"]["prv_group"] = "Q2Media";
value["9347"]["prv_online_check"] = "false";
value["9347"]["tag"] = { type: 'symbol', cost: 4.5, period: 1, calcSpace: true, fields: 4, serviceName: "КТР - оплата рекламы", isTv: true, nextCalend: 2 };

value["9348"] = new Array();
value["9348"]["prv_id"] = "9348";
value["9348"]["prv_name"] = '5 канал';
value["9348"]["prv_folder"] = "other";
value["9348"]["prv_page"] = "p_q2_calendar.html";
value["9348"]["prv_page_conf"] = "./validate_confirm.html";
value["9348"]["prv_alert"] = "";
value["9348"]["prv_image"] = "./img/ui_item/5chsnnel.jpg";
value["9348"]["prv_top_image"] = "";
value["9348"]["prv_is_cellular"] = false;
value["9348"]["prv_invitation"] = "prov_enter_phone";
value["9348"]["prv_button_text"] = "";
value["9348"]["prv_mask"] = "";
value["9348"]["prv_group"] = "Q2Media";
value["9348"]["prv_online_check"] = "false";
value["9348"]["tag"] = { type: 'symbol', cost: 5, period: 1, calcSpace: true, fields: 4, serviceName: "5 канал - оплата рекламы", isTv: true, nextCalend: 2 };

value["9350"] = new Array();
value["9350"]["prv_id"] = "9350";
value["9350"]["prv_name"] = 'НТС (НТВ)';
value["9350"]["prv_folder"] = "other";
value["9350"]["prv_page"] = "p_q2_calendar.html";
value["9350"]["prv_page_conf"] = "./validate_confirm.html";
value["9350"]["prv_alert"] = "";
value["9350"]["prv_image"] = "./img/ui_item/nts.jpg";
value["9350"]["prv_top_image"] = "";
value["9350"]["prv_is_cellular"] = false;
value["9350"]["prv_invitation"] = "prov_enter_phone";
value["9350"]["prv_button_text"] = "";
value["9350"]["prv_mask"] = "";
value["9350"]["prv_group"] = "Q2Media";
value["9350"]["prv_online_check"] = "false";
value["9350"]["tag"] = { type: 'symbol', cost: 5, period: 1, calcSpace: true, fields: 4, serviceName: "НТС (НТВ) - оплата рекламы", isTv: true, nextCalend: 2 };

value["9351"] = new Array();
value["9351"]["prv_id"] = "9351";
value["9351"]["prv_name"] = 'Пирамида';
value["9351"]["prv_folder"] = "other";
value["9351"]["prv_page"] = "p_q2_calendar.html";
value["9351"]["prv_page_conf"] = "./validate_confirm.html";
value["9351"]["prv_alert"] = "";
value["9351"]["prv_image"] = "./img/ui_item/pyramid.jpg";
value["9351"]["prv_top_image"] = "";
value["9351"]["prv_is_cellular"] = false;
value["9351"]["prv_invitation"] = "prov_enter_phone";
value["9351"]["prv_button_text"] = "";
value["9351"]["prv_mask"] = "";
value["9351"]["prv_group"] = "Q2Media";
value["9351"]["prv_online_check"] = "false";
value["9351"]["tag"] = { type: 'symbol', cost: 4, period: 1, calcSpace: true, fields: 4, serviceName: "Пирамида - оплата рекламы", isTv: true, nextCalend: 2 };

value["9352"] = new Array();
value["9352"]["prv_id"] = "9352";
value["9352"]["prv_name"] = 'Мир';
value["9352"]["prv_folder"] = "other";
value["9352"]["prv_page"] = "p_q2_calendar.html";
value["9352"]["prv_page_conf"] = "./validate_confirm.html";
value["9352"]["prv_alert"] = "";
value["9352"]["prv_image"] = "./img/ui_item/mir.jpg";
value["9352"]["prv_top_image"] = "";
value["9352"]["prv_is_cellular"] = false;
value["9352"]["prv_invitation"] = "prov_enter_phone";
value["9352"]["prv_button_text"] = "";
value["9352"]["prv_mask"] = "";
value["9352"]["prv_group"] = "Q2Media";
value["9352"]["prv_online_check"] = "false";
value["9352"]["tag"] = { type: 'symbol', cost: 3.8, period: 1, calcSpace: true, fields: 4, serviceName: "Мир - оплата рекламы", isTv: true, nextCalend: 2 };

value["9354"] = new Array();
value["9354"]["prv_id"] = "9354";
value["9354"]["prv_name"] = 'ЭлТР';
value["9354"]["prv_folder"] = "other";
value["9354"]["prv_page"] = "p_q2_calendar.html";
value["9354"]["prv_page_conf"] = "./validate_confirm.html";
value["9354"]["prv_alert"] = "";
value["9354"]["prv_image"] = "./img/ui_item/el.jpg";
value["9354"]["prv_top_image"] = "";
value["9354"]["prv_is_cellular"] = false;
value["9354"]["prv_invitation"] = "prov_enter_phone";
value["9354"]["prv_button_text"] = "";
value["9354"]["prv_mask"] = "";
value["9354"]["prv_group"] = "Q2Media";
value["9354"]["prv_online_check"] = "false";
value["9354"]["tag"] = { type: 'symbol', cost: 4, period: 1, calcSpace: true, fields: 4, serviceName: "ЭлТР - оплата рекламы", isTv: true, nextCalend: 2 };

value["9355"] = new Array();
value["9355"]["prv_id"] = "9355";
value["9355"]["prv_name"] = 'Сары Озон (ТНТ)';
value["9355"]["prv_folder"] = "other";
value["9355"]["prv_page"] = "p_q2_calendar.html";
value["9355"]["prv_page_conf"] = "./validate_confirm.html";
value["9355"]["prv_alert"] = "";
value["9355"]["prv_image"] = "./img/ui_item/tnt.jpg";
value["9355"]["prv_top_image"] = "";
value["9355"]["prv_is_cellular"] = false;
value["9355"]["prv_invitation"] = "prov_enter_phone";
value["9355"]["prv_button_text"] = "";
value["9355"]["prv_mask"] = "";
value["9355"]["prv_group"] = "Q2Media";
value["9355"]["prv_online_check"] = "false";
value["9355"]["tag"] = { type: 'symbol', cost: 4, period: 1, calcSpace: true, fields: 4, serviceName: "Сары Озон (ТНТ) - оплата рекламы", isTv: true, nextCalend: 2 };

value["9356"] = new Array();
value["9356"]["prv_id"] = "9356";
value["9356"]["prv_name"] = 'Эхо Манаса';
value["9356"]["prv_folder"] = "other";
value["9356"]["prv_page"] = "p_q2_calendar.html";
value["9356"]["prv_page_conf"] = "./validate_confirm.html";
value["9356"]["prv_alert"] = "";
value["9356"]["prv_image"] = "";
value["9356"]["prv_top_image"] = "";
value["9356"]["prv_is_cellular"] = false;
value["9356"]["prv_invitation"] = "prov_enter_phone";
value["9356"]["prv_button_text"] = "";
value["9356"]["prv_mask"] = "";
value["9356"]["prv_group"] = "Q2Media";
value["9356"]["prv_online_check"] = "false";
value["9356"]["tag"] = { type: 'symbol', cost: 3.5, period: 1, calcSpace: true, fields: 4, serviceName: "Эхо Манаса - оплата рекламы", isTv: true, nextCalend: 2 };

value["9362"] = new Array();
value["9362"]["prv_id"] = "9362";
value["9362"]["prv_name"] = 'Ош ТВ (Ошская обл.)';
value["9362"]["prv_folder"] = "other";
value["9362"]["prv_page"] = "p_q2_calendar.html";
value["9362"]["prv_page_conf"] = "./validate_confirm.html";
value["9362"]["prv_alert"] = "";
value["9362"]["prv_image"] = "";
value["9362"]["prv_top_image"] = "";
value["9362"]["prv_is_cellular"] = false;
value["9362"]["prv_invitation"] = "prov_enter_phone";
value["9362"]["prv_button_text"] = "";
value["9362"]["prv_mask"] = "";
value["9362"]["prv_group"] = "Q2Media";
value["9362"]["prv_online_check"] = "false";
value["9362"]["tag"] = { type: 'symbol', cost: 3, period: 1, calcSpace: true, fields: 4, serviceName: "Ош ТВ (Ошская обл.) - оплата рекламы", isTv: true, nextCalend: 2 };

value["9365"] = new Array();
value["9365"]["prv_id"] = "9365";
value["9365"]["prv_name"] = '7 канал (Джалал Абад Обл.)';
value["9365"]["prv_folder"] = "other";
value["9365"]["prv_page"] = "p_q2_calendar.html";
value["9365"]["prv_page_conf"] = "./validate_confirm.html";
value["9365"]["prv_alert"] = "";
value["9365"]["prv_image"] = "";
value["9365"]["prv_top_image"] = "";
value["9365"]["prv_is_cellular"] = false;
value["9365"]["prv_invitation"] = "prov_enter_phone";
value["9365"]["prv_button_text"] = "";
value["9365"]["prv_mask"] = "";
value["9365"]["prv_group"] = "Q2Media";
value["9365"]["prv_online_check"] = "false";
value["9365"]["tag"] = { type: 'symbol', cost: 3, period: 1, calcSpace: true, fields: 4, serviceName: "7 канал (Джалал Абад Обл.) - оплата рекламы", isTv: true, nextCalend: 2 };

value["9367"] = new Array();
value["9367"]["prv_id"] = "9367";
value["9367"]["prv_name"] = 'Эм ТВ, Арт ТВ (Иссык Кул. Обл.)';
value["9367"]["prv_folder"] = "other";
value["9367"]["prv_page"] = "p_q2_calendar.html";
value["9367"]["prv_page_conf"] = "./validate_confirm.html";
value["9367"]["prv_alert"] = "";
value["9367"]["prv_image"] = "";
value["9367"]["prv_top_image"] = "";
value["9367"]["prv_is_cellular"] = false;
value["9367"]["prv_invitation"] = "prov_enter_phone";
value["9367"]["prv_button_text"] = "";
value["9367"]["prv_mask"] = "";
value["9367"]["prv_group"] = "Q2Media";
value["9367"]["prv_online_check"] = "false";
value["9367"]["tag"] = { type: 'symbol', cost: 2, period: 1, calcSpace: true, fields: 4, serviceName: "Эм ТВ, Арт ТВ (Иссык Кул. Обл.) - оплата рекламы", isTv: true, nextCalend: 2 };

value["q2_alatv"] = new Array();
value["q2_alatv"]["prv_name"] = 'Кабельная сеть "Ала ТВ"';
value["q2_alatv"]["prv_image"] = "";

value["q2_smarttv"] = new Array();
value["q2_smarttv"]["prv_name"] = 'Кабельная сеть "Смарт ТВ"';
value["q2_smarttv"]["prv_image"] = "";

value["9370"] = new Array();
value["9370"]["prv_id"] = "9370";
value["9370"]["prv_name"] = 'ТНТ';
value["9370"]["prv_folder"] = "other";
value["9370"]["prv_page"] = "p_q2_calendar.html";
value["9370"]["prv_page_conf"] = "./validate_confirm.html";
value["9370"]["prv_alert"] = "";
value["9370"]["prv_image"] = "./img/ui_item/tnt.jpg";
value["9370"]["prv_top_image"] = "";
value["9370"]["prv_is_cellular"] = false;
value["9370"]["prv_invitation"] = "prov_enter_phone";
value["9370"]["prv_button_text"] = "";
value["9370"]["prv_mask"] = "";
value["9370"]["prv_group"] = "Q2Media";
value["9370"]["prv_online_check"] = "false";
value["9370"]["tag"] = { type: 'symbol', cost: 3.2, period: 1, calcSpace: true, fields: 4, serviceName: "Ала ТВ ТНТ - оплата рекламы", isTv: true, nextCalend: 2 };

value["9371"] = new Array();
value["9371"]["prv_id"] = "9371";
value["9371"]["prv_name"] = 'Ren TV';
value["9371"]["prv_folder"] = "other";
value["9371"]["prv_page"] = "p_q2_calendar.html";
value["9371"]["prv_page_conf"] = "./validate_confirm.html";
value["9371"]["prv_alert"] = "";
value["9371"]["prv_image"] = "./img/ui_item/ren.jpg";
value["9371"]["prv_top_image"] = "";
value["9371"]["prv_is_cellular"] = false;
value["9371"]["prv_invitation"] = "prov_enter_phone";
value["9371"]["prv_button_text"] = "";
value["9371"]["prv_mask"] = "";
value["9371"]["prv_group"] = "Q2Media";
value["9371"]["prv_online_check"] = "false";
value["9371"]["tag"] = { type: 'symbol', cost: 3, period: 1, calcSpace: true, fields: 4, serviceName: "Ала ТВ Ren TV - оплата рекламы", isTv: true, nextCalend: 2 };

value["9373"] = new Array();
value["9373"]["prv_id"] = "9373";
value["9373"]["prv_name"] = 'Би Плюс';
value["9373"]["prv_folder"] = "other";
value["9373"]["prv_page"] = "p_q2_calendar.html";
value["9373"]["prv_page_conf"] = "./validate_confirm.html";
value["9373"]["prv_alert"] = "";
value["9373"]["prv_image"] = "./img/ui_item/BI.jpg";
value["9373"]["prv_top_image"] = "";
value["9373"]["prv_is_cellular"] = false;
value["9373"]["prv_invitation"] = "prov_enter_phone";
value["9373"]["prv_button_text"] = "";
value["9373"]["prv_mask"] = "";
value["9373"]["prv_group"] = "Q2Media";
value["9373"]["prv_online_check"] = "false";
value["9373"]["tag"] = { type: 'symbol', cost: 3, period: 1, calcSpace: true, fields: 4, serviceName: "Ала ТВ Би Плюс - оплата рекламы", isTv: true, nextCalend: 2 };

value["9376"] = new Array();
value["9376"]["prv_id"] = "9376";
value["9376"]["prv_name"] = '24 ТВ';
value["9376"]["prv_folder"] = "other";
value["9376"]["prv_page"] = "p_q2_calendar.html";
value["9376"]["prv_page_conf"] = "./validate_confirm.html";
value["9376"]["prv_alert"] = "";
value["9376"]["prv_image"] = "./img/ui_item/24tv.jpg";
value["9376"]["prv_top_image"] = "";
value["9376"]["prv_is_cellular"] = false;
value["9376"]["prv_invitation"] = "prov_enter_phone";
value["9376"]["prv_button_text"] = "";
value["9376"]["prv_mask"] = "";
value["9376"]["prv_group"] = "Q2Media";
value["9376"]["prv_online_check"] = "false";
value["9376"]["tag"] = { type: 'symbol', cost: 3, period: 1, calcSpace: true, fields: 4, serviceName: "Ала ТВ 24 ТВ - оплата рекламы", isTv: true, nextCalend: 2 };

value["9378"] = new Array();
value["9378"]["prv_id"] = "9378";
value["9378"]["prv_name"] = 'СБК';
value["9378"]["prv_folder"] = "other";
value["9378"]["prv_page"] = "p_q2_calendar.html";
value["9378"]["prv_page_conf"] = "./validate_confirm.html";
value["9378"]["prv_alert"] = "";
value["9378"]["prv_image"] = "";
value["9378"]["prv_top_image"] = "";
value["9378"]["prv_is_cellular"] = false;
value["9378"]["prv_invitation"] = "prov_enter_phone";
value["9378"]["prv_button_text"] = "";
value["9378"]["prv_mask"] = "";
value["9378"]["prv_group"] = "Q2Media";
value["9378"]["prv_online_check"] = "false";
value["9378"]["tag"] = { type: 'symbol', cost: 3, period: 1, calcSpace: true, fields: 4, serviceName: "Ала ТВ СБК - оплата рекламы", isTv: true, nextCalend: 2 };
//
value["9379"] = new Array();
value["9379"]["prv_id"] = "9379";
value["9379"]["prv_name"] = 'Муз ТВ';
value["9379"]["prv_folder"] = "other";
value["9379"]["prv_page"] = "p_q2_calendar.html";
value["9379"]["prv_page_conf"] = "./validate_confirm.html";
value["9379"]["prv_alert"] = "";
value["9379"]["prv_image"] = "";
value["9379"]["prv_top_image"] = "";
value["9379"]["prv_is_cellular"] = false;
value["9379"]["prv_invitation"] = "prov_enter_phone";
value["9379"]["prv_button_text"] = "";
value["9379"]["prv_mask"] = "";
value["9379"]["prv_group"] = "Q2Media";
value["9379"]["prv_online_check"] = "false";
value["9379"]["tag"] = { type: 'symbol', cost: 3, period: 1, calcSpace: true, fields: 4, serviceName: "Ала ТВ Муз ТВ - оплата рекламы", isTv: true, nextCalend: 2 };

value["9385"] = new Array();
value["9385"]["prv_id"] = "9385";
value["9385"]["prv_name"] = 'ТВ Про (цифров.)';
value["9385"]["prv_folder"] = "other";
value["9385"]["prv_page"] = "p_q2_calendar.html";
value["9385"]["prv_page_conf"] = "./validate_confirm.html";
value["9385"]["prv_alert"] = "";
value["9385"]["prv_image"] = "./img/ui_item/tvpro.jpg";
value["9385"]["prv_top_image"] = "";
value["9385"]["prv_is_cellular"] = false;
value["9385"]["prv_invitation"] = "prov_enter_phone";
value["9385"]["prv_button_text"] = "";
value["9385"]["prv_mask"] = "";
value["9385"]["prv_group"] = "Q2Media";
value["9385"]["prv_online_check"] = "false";
value["9385"]["tag"] = { type: 'symbol', cost: 2.5, period: 1, calcSpace: true, fields: 4, serviceName: "SmartTV ТВ Про (цифров.) - оплата рекламы", isTv: true, nextCalend: 2 };



// Налоговая
value["new_tax"] = new Array();
value["new_tax"]["prv_name"] = "Налоги физических лиц и индивидуальных предпр.";
value["new_tax"]["prv_image"] = "./img/ui_item/gns_100x100.png";

value["patent"] = new Array();
value["patent"]["prv_name"] = "Налог за патент";
value["patent"]["prv_image"] = "./img/ui_item/gns_100x100.png";

//*************************Перечень налогов**********************************//

value["9872"] = new Array();
value["9872"]["prv_id"] = "9872";
value["9872"]["prv_name"] = "Налог за добровольный патент";
value["9872"]["prv_folder"] = "folder_patent";
value["9872"]["prv_image"] = "img/ui_item/gns_100x100.png";
value["9872"]["prv_top_image"] = "./img/ui_item/gns_100x100.png";
value["9872"]["prv_page"] = "./attention_gns.html";
value["9872"]["prv_forward_num_keyboard"] = "./folders_gns.html";
value["9872"]["prv_page_conf"] = "./validate_confirm_gns.html";
value["9872"]["prv_page_back_num"] = "./pages.html";
value["9872"]["prv_alert"] = "";
value["9872"]["prv_invitation"] = "prov_enter_inn";
value["9872"]["prv_success_sign"] = "cellular_successful_notice";
value["9872"]["prv_error_sign"] = "cellular_bad_format";
value["9872"]["prv_button_text"] = "";
value["9872"]["prv_mask"] = "<!^\\d+${1,14}>";
value["9872"]["prv_group"] = "ГНС";
value["9872"]["prv_online_check"] = "true";
value["9872"]["prv_surmask"] = "14$14$**************";
value["9872"]["prv_receipt_extra_message"] = "";

value["9873"] = new Array();
value["9873"]["prv_id"] = "9873";
value["9873"]["prv_name"] = "Подоходный налог за наемных работников";
value["9873"]["prv_folder"] = "folder_patent";
value["9873"]["prv_image"] = "img/ui_item/gns_100x100.png";
value["9873"]["prv_top_image"] = "./img/ui_item/gns_100x100.png";
value["9873"]["prv_page"] = "./attention_gns.html";
value["9873"]["prv_forward_num_keyboard"] = "./folders_gns.html";
value["9873"]["prv_page_conf"] = "./validate_confirm_gns.html";
value["9873"]["prv_page_back_num"] = "./pages.html";
value["9873"]["prv_alert"] = "";
value["9873"]["prv_invitation"] = "prov_enter_inn";
value["9873"]["prv_success_sign"] = "cellular_successful_notice";
value["9873"]["prv_error_sign"] = "cellular_bad_format";
value["9873"]["prv_button_text"] = "";
value["9873"]["prv_mask"] = "<!^\\d+${1,14}>";
value["9873"]["prv_group"] = "ГНС";
value["9873"]["prv_online_check"] = "true";
value["9873"]["prv_surmask"] = "14$14$**************";
value["9873"]["prv_receipt_extra_message"] = "";

value["11140"] = new Array();
value["11140"]["prv_id"] = "11140";
value["11140"]["prv_name"] = "Земельный налог c/х назначения";
value["11140"]["prv_folder"] = "folder_new_tax";
value["11140"]["prv_image"] = "img/ui_item/gns_100x100.png";
value["11140"]["prv_top_image"] = "./img/ui_item/gns_100x100.png";
value["11140"]["prv_page"] = "./attention_gns.html";
value["11140"]["prv_forward_num_keyboard"] = "./folders_gns.html";
value["11140"]["prv_page_conf"] = "./validate_confirm_gns.html";
value["11140"]["prv_page_back_num"] = "./pages.html";
value["11140"]["prv_alert"] = "";
value["11140"]["prv_invitation"] = "prov_enter_inn";
value["11140"]["prv_success_sign"] = "cellular_successful_notice";
value["11140"]["prv_error_sign"] = "cellular_bad_format";
value["11140"]["prv_button_text"] = "";
value["11140"]["prv_mask"] = "<!^\\d+${1,14}>";
value["11140"]["prv_group"] = "ГНС";
value["11140"]["prv_online_check"] = "true";
value["11140"]["prv_surmask"] = "14$14$**************";
value["11140"]["prv_receipt_extra_message"] = "";

value["11141"] = new Array();
value["11141"]["prv_id"] = "11141";
value["11141"]["prv_name"] = "Земельный налог не c/х назначения";
value["11141"]["prv_folder"] = "folder_new_tax";
value["11141"]["prv_image"] = "img/ui_item/gns_100x100.png";
value["11141"]["prv_top_image"] = "./img/ui_item/gns_100x100.png";
value["11141"]["prv_page"] = "./attention_gns.html";
value["11141"]["prv_forward_num_keyboard"] = "./folders_gns.html";
value["11141"]["prv_page_conf"] = "./validate_confirm_gns.html";
value["11141"]["prv_page_back_num"] = "./pages.html";
value["11141"]["prv_alert"] = "";
value["11141"]["prv_invitation"] = "prov_enter_inn";
value["11141"]["prv_success_sign"] = "cellular_successful_notice";
value["11141"]["prv_error_sign"] = "cellular_bad_format";
value["11141"]["prv_button_text"] = "";
value["11141"]["prv_mask"] = "<!^\\d+${1,14}>";
value["11141"]["prv_group"] = "ГНС";
value["11141"]["prv_online_check"] = "true";
value["11141"]["prv_surmask"] = "14$14$**************";
value["11141"]["prv_receipt_extra_message"] = "";

value["11142"] = new Array();
value["11142"]["prv_id"] = "11142";
value["11142"]["prv_name"] = "Земельный налог за пользование приусадебными участками";
value["11142"]["prv_folder"] = "folder_new_tax";
value["11142"]["prv_image"] = "img/ui_item/gns_100x100.png";
value["11142"]["prv_top_image"] = "./img/ui_item/gns_100x100.png";
value["11142"]["prv_page"] = "./attention_gns.html";
value["11142"]["prv_forward_num_keyboard"] = "./folders_gns.html";
value["11142"]["prv_page_conf"] = "./validate_confirm_gns.html";
value["11142"]["prv_page_back_num"] = "./pages.html";
value["11142"]["prv_alert"] = "";
value["11142"]["prv_invitation"] = "prov_enter_inn";
value["11142"]["prv_success_sign"] = "cellular_successful_notice";
value["11142"]["prv_error_sign"] = "cellular_bad_format";
value["11142"]["prv_button_text"] = "";
value["11142"]["prv_mask"] = "<!^\\d+${1,14}>";
value["11142"]["prv_group"] = "ГНС";
value["11142"]["prv_online_check"] = "true";
value["11142"]["prv_surmask"] = "14$14$**************";
value["11142"]["prv_receipt_extra_message"] = "";

value["11143"] = new Array();
value["11143"]["prv_id"] = "11143";
value["11143"]["prv_name"] = "Налог на недвижимость";
value["11143"]["prv_folder"] = "folder_new_tax";
value["11143"]["prv_image"] = "img/ui_item/gns_100x100.png";
value["11143"]["prv_top_image"] = "./img/ui_item/gns_100x100.png";
value["11143"]["prv_page"] = "./attention_gns.html";
value["11143"]["prv_forward_num_keyboard"] = "./folders_gns.html";
value["11143"]["prv_page_conf"] = "./validate_confirm_gns.html";
value["11143"]["prv_page_back_num"] = "./pages.html";
value["11143"]["prv_alert"] = "";
value["11143"]["prv_invitation"] = "prov_enter_inn";
value["11143"]["prv_success_sign"] = "cellular_successful_notice";
value["11143"]["prv_error_sign"] = "cellular_bad_format";
value["11143"]["prv_button_text"] = "";
value["11143"]["prv_mask"] = "<!^\\d+${1,14}>";
value["11143"]["prv_group"] = "ГНС";
value["11143"]["prv_online_check"] = "true";
value["11143"]["prv_surmask"] = "14$14$**************";
value["11143"]["prv_receipt_extra_message"] = "";

value["11144"] = new Array();
value["11144"]["prv_id"] = "11144";
value["11144"]["prv_name"] = "Налог на транспортные средства физ-х лиц";
value["11144"]["prv_folder"] = "folder_new_tax";
value["11144"]["prv_image"] = "img/ui_item/gns_100x100.png";
value["11144"]["prv_top_image"] = "./img/ui_item/gns_100x100.png";
value["11144"]["prv_page"] = "./attention_gns.html";
value["11144"]["prv_forward_num_keyboard"] = "./folders_gns.html";
value["11144"]["prv_page_conf"] = "./validate_confirm_gns.html";
value["11144"]["prv_page_back_num"] = "./pages.html";
value["11144"]["prv_page_back_any"] = "./folders_gns.html";
value["11144"]["prv_alert"] = "";
value["11144"]["prv_invitation"] = "prov_enter_inn";
value["11144"]["prv_success_sign"] = "cellular_successful_notice";
value["11144"]["prv_error_sign"] = "cellular_bad_format";
value["11144"]["prv_lang_any_keyboard"] = "en";
value["11144"]["prv_type_any_keyboard"] = "NORM";
value["11144"]["prv_button_text"] = "";
value["11144"]["prv_mask"] = "<!^\\d+${1,14}>";
value["11144"]["prv_group"] = "ГНС";
value["11144"]["prv_online_check"] = "true";
value["11144"]["prv_surmask"] = "14$14$**************";

value["15077"] = new Array();
value["15077"]["prv_id"] = "15077";
value["15077"]["prv_name"] = "Налог на недвижимое имущество, исп. для предпр. деят-ти 2 гр.";
value["15077"]["prv_folder"] = "folder_new_tax";
value["15077"]["prv_image"] = "img/ui_item/gns_100x100.png";
value["15077"]["prv_top_image"] = "./img/ui_item/gns_100x100.png";
value["15077"]["prv_page"] = "./attention_gns.html";
value["15077"]["prv_forward_num_keyboard"] = "./folders_gns.html";
value["15077"]["prv_page_conf"] = "./validate_confirm_gns.html";
value["15077"]["prv_page_back_num"] = "./pages.html";
value["15077"]["prv_alert"] = "";
value["15077"]["prv_invitation"] = "prov_enter_inn";
value["15077"]["prv_success_sign"] = "cellular_successful_notice";
value["15077"]["prv_error_sign"] = "cellular_bad_format";
value["15077"]["prv_button_text"] = "";
value["15077"]["prv_mask"] = "<!^\\d+${1,14}>";
value["15077"]["prv_group"] = "ГНС";
value["15077"]["prv_online_check"] = "true";
value["15077"]["prv_surmask"] = "14$14$**************";
value["15077"]["prv_receipt_extra_message"] = "";

value["15078"] = new Array();
value["15078"]["prv_id"] = "15078";
value["15078"]["prv_name"] = "Налог на недвижимое имущество, исп. для предпр. деят-ти 3 гр.";
value["15078"]["prv_folder"] = "folder_new_tax";
value["15078"]["prv_image"] = "img/ui_item/gns_100x100.png";
value["15078"]["prv_top_image"] = "./img/ui_item/gns_100x100.png";
value["15078"]["prv_page"] = "./attention_gns.html";
value["15078"]["prv_forward_num_keyboard"] = "./folders_gns.html";
value["15078"]["prv_page_conf"] = "./validate_confirm_gns.html";
value["15078"]["prv_page_back_num"] = "./pages.html";
value["15078"]["prv_alert"] = "";
value["15078"]["prv_invitation"] = "prov_enter_inn";
value["15078"]["prv_success_sign"] = "cellular_successful_notice";
value["15078"]["prv_error_sign"] = "cellular_bad_format";
value["15078"]["prv_button_text"] = "";
value["15078"]["prv_mask"] = "<!^\\d+${1,14}>";
value["15078"]["prv_group"] = "ГНС";
value["15078"]["prv_online_check"] = "true";
value["15078"]["prv_surmask"] = "14$14$**************";
value["15078"]["prv_receipt_extra_message"] = "";

value["15076"] = new Array();
value["15076"]["prv_id"] = "15076";
value["15076"]["prv_name"] = "Налог за обязательный патент";
value["15076"]["prv_folder"] = "folder_new_tax";
value["15076"]["prv_image"] = "img/ui_item/gns_100x100.png";
value["15076"]["prv_top_image"] = "./img/ui_item/gns_100x100.png";
value["15076"]["prv_page"] = "./attention_gns.html";
value["15076"]["prv_forward_num_keyboard"] = "./folders_gns.html";
value["15076"]["prv_page_conf"] = "./validate_confirm_gns.html";
value["15076"]["prv_page_back_num"] = "./pages.html";
value["15076"]["prv_alert"] = "";
value["15076"]["prv_invitation"] = "prov_enter_inn";
value["15076"]["prv_success_sign"] = "cellular_successful_notice";
value["15076"]["prv_error_sign"] = "cellular_bad_format";
value["15076"]["prv_button_text"] = "";
value["15076"]["prv_mask"] = "<!^\\d+${1,14}>";
value["15076"]["prv_group"] = "ГНС";
value["15076"]["prv_online_check"] = "true";
value["15076"]["prv_surmask"] = "14$14$**************";
value["15076"]["prv_receipt_extra_message"] = "";

// Демократическая партия
value["democraticheskaya_partiya"] = new Array();
value["democraticheskaya_partiya"]["prv_name"] = "Демократический Альянс";
value["democraticheskaya_partiya"]["prv_image"] = "./img/ui_item/Demok_Alyans.png";

//Демократическая партия (Пожертвование)
// Comment provider
// value["9868"] = new Array();
// value["9868"]["prv_id"] = "9868";
// value["9868"]["prv_name"] = 'Демократический Альянс - Пожертвование партие';
// value["9868"]["prv_folder"] = "other";
// value["9868"]["prv_page"] = "./cellular.html";
// value["9868"]["prv_page_conf"] = "./validate_confirm.html";
// value["9868"]["prv_alert"] = "";
//value["9868"]["prv_image"] = "";
// value["9868"]["prv_top_image"] = "";
// value["9868"]["prv_is_cellular"] = false;
// value["9868"]["prv_invitation"] = "prov_enter_account";
// value["9868"]["prv_button_text"] = "";
// value["9868"]["prv_mask"] = "-<!^\\d+${0,16}>";
// value["9868"]["prv_group"] = "";
// value["9868"]["prv_online_check"] = "false";
// value["9868"]["prv_receipt_extra_message"] = "";

//Демократическа партия(Членские взносы)
// Comment provider
// value["9867"] = new Array();
// value["9867"]["prv_id"] = "9867";
// value["9867"]["prv_name"] = 'Демократический Альянс - Членские взносы';
// value["9867"]["prv_folder"] = "other";
// value["9867"]["prv_page"] = "./cellular.html";
// value["9867"]["prv_page_conf"] = "./validate_confirm.html";
// value["9867"]["prv_alert"] = "";
//value["9868"]["prv_image"] = "";
// value["9867"]["prv_top_image"] = "";
// value["9867"]["prv_is_cellular"] = false;
// value["9867"]["prv_invitation"] = "prov_enter_account";
// value["9867"]["prv_button_text"] = "";
// value["9867"]["prv_mask"] = "<!^\\d+${1,16}>";
// value["9867"]["prv_group"] = "";
// value["9867"]["prv_online_check"] = "true";
// value["9867"]["prv_receipt_extra_message"] = "";

////Ringobet (BigBet)
//value["9942"] = new Array();
//value["9942"]["prv_id"] = "9942";
//value["9942"]["prv_name"] = 'Ringobet-букмекерские ставки';
//value["9942"]["prv_folder"] = "";
//value["9942"]["prv_page"] = "./cellular.html";
//value["9942"]["prv_page_conf"] = "./validate_confirm.html";
//value["9942"]["prv_alert"] = "";
//value["9942"]["prv_image"] = "./img/ui_item/RingobetKG.png";
//value["9942"]["prv_top_image"] = "";
//value["9942"]["prv_is_cellular"] = false;
//value["9942"]["prv_invitation"] = "prov_enter_account";
//value["9942"]["prv_button_text"] = "";
//value["9942"]["prv_mask"] = "<!^.+${8,20}>";
//value["9942"]["prv_group"] = "";
//value["9942"]["prv_online_check"] = "true";
//value["9942"]["prv_receipt_extra_message"] = "";

// BeSmart покупка купонов
value["10027"] = new Array();
value["10027"]["prv_id"] = "10027";
value["10027"]["prv_name"] = 'BeSmart - покупка купона';
value["10027"]["prv_folder"] = "";
value["10027"]["prv_page"] = "./cellular.html";
value["10027"]["prv_page_conf"] = "./validate_confirm.html";
value["10027"]["prv_alert"] = "";
value["10027"]["prv_image"] = "./img/ui_item/besmart_logo.png";
value["10027"]["prv_top_image"] = "";
value["10027"]["prv_is_cellular"] = false;
value["10027"]["prv_invitation"] = "prov_enter_account";
value["10027"]["prv_button_text"] = "";
value["10027"]["prv_mask"] = "<!^\\d+${3,20}>";
value["10027"]["prv_group"] = "";
value["10027"]["prv_online_check"] = "true";
value["10027"]["prv_receipt_extra_message"] = "";

// Автогид
value["9836"] = new Array();
value["9836"]["prv_id"] = "9836";
value["9836"]["prv_name"] = 'Оплата за рекламу';
value["9836"]["prv_folder"] = "";
value["9836"]["prv_page"] = "./cellular.html";
value["9836"]["prv_page_conf"] = "./validate_confirm.html";
value["9836"]["prv_alert"] = "";
value["9836"]["prv_image"] = "./img/ui_item/Autogid.png";
value["9836"]["prv_top_image"] = "";
value["9836"]["prv_is_cellular"] = false;
value["9836"]["prv_invitation"] = "prov_enter_account";
value["9836"]["prv_button_text"] = "";
value["9836"]["prv_mask"] = "<!^\\d+${1,10}>";
value["9836"]["prv_group"] = "";
value["9836"]["prv_online_check"] = "true";
value["9836"]["prv_receipt_extra_message"] = "";

//Колледж Академия туризма
value["kolledjakademia"] = new Array();
value["kolledjakademia"]["prv_name"] = "Колледж Академия туризма";
value["kolledjakademia"]["prv_image"] = "./img/ui_item/at.gif";

// Колледж Академия туризма -сессия
// Comment provider
// value["10087"] = new Array();
// value["10087"]["prv_id"] = "10087";
// value["10087"]["prv_name"] = 'Колледж Академия туризма-сессия';
// value["10087"]["prv_folder"] = "charity";
// value["10087"]["prv_page"] = "./cellular.html";
// value["10087"]["prv_page_conf"] = "./validate_confirm.html";
// value["10087"]["prv_alert"] = "";
// value["10087"]["prv_image"] = "img/ui_item/at.gif";
// value["10087"]["prv_top_image"] = "img/ui_item/at.gif";
// value["10087"]["prv_is_cellular"] = false;
// value["10087"]["prv_invitation"] = "prov_enter_account";
// value["10087"]["prv_button_text"] = "";
// value["10087"]["prv_mask"] = "<!^\\d+${4}>";
// value["10087"]["prv_group"] = "";
// value["10087"]["prv_online_check"] = "true";
// value["10087"]["prv_receipt_extra_message"] = "";

// Колледж Академия туризма -за обучение
// Comment provider
// value["10133"] = new Array();
// value["10133"]["prv_id"] = "10133";
// value["10133"]["prv_name"] = 'Колледж Академия туризма-за обучение';
// value["10133"]["prv_folder"] = "charity";
// value["10133"]["prv_page"] = "./cellular.html";
// value["10133"]["prv_page_conf"] = "./validate_confirm.html";
// value["10133"]["prv_alert"] = "";
// value["10133"]["prv_image"] = "img/ui_item/at.gif";
// value["10133"]["prv_top_image"] = "img/ui_item/at.gif";
// value["10133"]["prv_is_cellular"] = false;
// value["10133"]["prv_invitation"] = "prov_enter_account";
// value["10133"]["prv_button_text"] = "";
// value["10133"]["prv_mask"] = "<!^\\d+${4}>";
// value["10133"]["prv_group"] = "";
// value["10133"]["prv_online_check"] = "true";
// value["10133"]["prv_receipt_extra_message"] = "";

// Колледж Академия туризма -право записи
// Comment provider
// value["10134"] = new Array();
// value["10134"]["prv_id"] = "10134";
// value["10134"]["prv_name"] = 'Колледж Академия туризма-право записи';
// value["10134"]["prv_folder"] = "charity";
// value["10134"]["prv_page"] = "./cellular.html";
// value["10134"]["prv_page_conf"] = "./validate_confirm.html";
// value["10134"]["prv_alert"] = "";
// value["10134"]["prv_image"] = "img/ui_item/at.gif";
// vvalue["10134"]["prv_top_image"] = "img/ui_item/at.gif";
// value["10134"]["prv_is_cellular"] = false;
// value["10134"]["prv_invitation"] = "prov_enter_account";
// value["10134"]["prv_button_text"] = "";
// value["10134"]["prv_mask"] = "<!^\\d+${4}>";
// value["10134"]["prv_group"] = "";
// value["10134"]["prv_online_check"] = "true";
// value["10134"]["prv_receipt_extra_message"] = "";

// Ай-спейс
value["10288"] = new Array();
value["10288"]["prv_id"] = "10288";
value["10288"]["prv_name"] = "MaxLink";
value["10288"]["prv_folder"] = "internet";
value["10288"]["prv_page"] = "./cellular.html";
value["10288"]["prv_page_conf"] = "./validate_confirm.html";
value["10288"]["prv_image"] = "img/ui_item/MaxLink.png";
value["10288"]["prv_alert"] = "";
value["10288"]["prv_invitation"] = "prov_enter_code";
value["10288"]["prv_button_text"] = "";
value["10288"]["prv_mask"] = "0<!^\\d+${9}>";
value["10288"]["prv_group"] = "Интернет-услуги";
value["10288"]["prv_online_check"] = "true";

//--------------Деньги Онлайн услуги----------------------------------------//

value["foreign_russia"] = new Array();
value["foreign_russia"]["prv_name"] = "Россия";
value["foreign_russia"]["prv_image"] = "./img/ui_item/russia.png";

value["foreign_armenia"] = new Array();
value["foreign_armenia"]["prv_name"] = "Армения";
value["foreign_armenia"]["prv_image"] = "./img/ui_item/armenia.png";

value["armenia_mobile"] = new Array();
value["armenia_mobile"]["prv_name"] = "Сотовая связь";
value["armenia_mobile"]["prv_name"] = "Сотовая связь";
value["armenia_mobile"]["prv_image"] = "./img/ui/cfk/button_cell.png";


value["foreign_georgia"] = new Array();
value["foreign_georgia"]["prv_name"] = "Грузия";
value["foreign_georgia"]["prv_image"] = "./img/ui_item/georgia.png";

value["georgia_mobile"] = new Array();
value["georgia_mobile"]["prv_name"] = "Сотовая связь";
value["georgia_mobile"]["prv_name"] = "Сотовая связь";
value["georgia_mobile"]["prv_image"] = "./img/ui/cfk/button_cell.png";

value["foreign_ukraine"] = new Array();
value["foreign_ukraine"]["prv_name"] = "Украина";
value["foreign_ukraine"]["prv_image"] = "./img/ui_item/ukraine.png";

value["ukraine_mobile"] = new Array();
value["ukraine_mobile"]["prv_name"] = "Сотовая связь";
value["ukraine_mobile"]["prv_name"] = "Сотовая связь";
value["ukraine_mobile"]["prv_image"] = "./img/ui/cfk/button_cell.png";


value["foreign_uzbekistan"] = new Array();
value["foreign_uzbekistan"]["prv_name"] = "Узбекистан";
value["foreign_uzbekistan"]["prv_image"] = "./img/ui_item/uzbekistan.png";

value["uzbekistan_mobile"] = new Array();
value["uzbekistan_mobile"]["prv_name"] = "Сотовая связь";
value["uzbekistan_mobile"]["prv_name"] = "Сотовая связь";
value["uzbekistan_mobile"]["prv_image"] = "./img/ui/cfk/button_cell.png";

value["foreign_belarus"] = new Array();
value["foreign_belarus"]["prv_name"] = "Беларусь";
value["foreign_belarus"]["prv_image"] = "./img/ui_item/belarus.png";

value["belarus_mobile"] = new Array();
value["belarus_mobile"]["prv_name"] = "Сотовая связь";
value["belarus_mobile"]["prv_name"] = "Сотовая связь";
value["belarus_mobile"]["prv_image"] = "./img/ui/cfk/button_cell.png";

value["foreign_tadjik"] = new Array();
value["foreign_tadjik"]["prv_name"] = "Провайдеры и услуги Таджикистана";
value["foreign_tadjik"]["prv_image"] = "./img/ui_item/tadjik.png";

value["foreign_kazahstan"] = new Array();
value["foreign_kazahstan"]["prv_name"] = "Провайдеры и услуги Казахстана";
value["foreign_kazahstan"]["prv_image"] = "./img/ui_item/kazahstan.png";

value["russia_mobile"] = new Array();
value["russia_mobile"]["prv_name"] = "Сотовая связь";
value["russia_mobile"]["prv_image"] = "./img/ui/cfk/button_cell.png";

value["russia_phone"] = new Array();
value["russia_phone"]["prv_name"] = "Фиксированная связь";
value["russia_phone"]["prv_image"] = "./img/ui/cfk/button_fixed.png";

value["russia_internet"] = new Array();
value["russia_internet"]["prv_name"] = "Интернет";
value["russia_internet"]["prv_image"] = "./img/ui/cfk/button_internet.png";

value["travelSim"] = new Array();
value["travelSim"]["prv_name"] = "Туристические симкарты";
value["travelSim"]["prv_image"] = "./img/ui_item/travel_sim.png";


value["taxi"] = new Array();
value["taxi"]["prv_name"] = "Услуги такси";
value["taxi"]["prv_image"] = "./img/ui_item/taxi-icon.png";

value["eko_bank"] = new Array();
value["eko_bank"]["prv_name"] = "Экоисламикбанк";
value["eko_bank"]["prv_image"] = "img/ui_item/ekobank.png";

// Билайн Россия КФЦ
value["10577"] = new Array();
value["10577"]["prv_id"] = "10577";
value["10577"]["prv_name"] = 'Билайн';
value["10577"]["prv_folder"] = "foreign";
value["10577"]["prv_page"] = "./cellular.html";
value["10577"]["prv_page_conf"] = "./validate_confirm.html";
value["10577"]["prv_alert"] = "";
value["10577"]["prv_image"] = "img/ui_item/beeline.png";
value["10577"]["prv_top_image"] = "./img/ui_item/beeline.png";
value["10577"]["prv_is_cellular"] = false;
value["10577"]["prv_invitation"] = "prov_enter_phone";
value["10577"]["prv_button_text"] = "";
value["10577"]["prv_mask"] = "<!^\\d+${10}>";
value["10577"]["prv_group"] = "Билайн";
value["10577"]["prv_online_check"] = "false";

// МегаФон Россия КФЦ
value["10578"] = new Array();
value["10578"]["prv_id"] = "10578";
value["10578"]["prv_name"] = 'МегаФон';
value["10578"]["prv_folder"] = "foreign";
value["10578"]["prv_page"] = "./cellular.html";
value["10578"]["prv_page_conf"] = "./validate_confirm.html";
value["10578"]["prv_alert"] = "";
value["10578"]["prv_image"] = "img/ui_item/megafon.png";
value["10578"]["prv_top_image"] = "./img/ui_item/megafon.png";
value["10578"]["prv_is_cellular"] = false;
value["10578"]["prv_invitation"] = "prov_enter_phone";
value["10578"]["prv_button_text"] = "";
value["10578"]["prv_mask"] = "9<!^\\d+${9}>";
value["10578"]["prv_online_check"] = "false";
value["10578"]["prv_group"] = "";

// Смартс Иваново Россия КФЦ
value["10813"] = new Array();
value["10813"]["prv_id"] = "10813";
value["10813"]["prv_name"] = 'Смартс Иваново';
value["10813"]["prv_folder"] = "foreign";
value["10813"]["prv_page"] = "./cellular.html";
value["10813"]["prv_page_conf"] = "./validate_confirm.html";
//value["10813"]["prv_alert"]="ikb_6497";
value["10813"]["prv_image"] = "img/ui_item/smarts.png";
value["10813"]["prv_top_image"] = ".img/ui_item/smarts.png";
value["10813"]["prv_is_cellular"] = false;
value["10813"]["prv_invitation"] = "prov_enter_phone";
value["10813"]["prv_button_text"] = "";
value["10813"]["prv_mask"] = "<!^\\d+${10}>";
value["10813"]["prv_online_check"] = "false";
value["10813"]["prv_group"] = "";

// Смартс Самара Россия КФЦ
value["10812"] = new Array();
value["10812"]["prv_id"] = "10812";
value["10812"]["prv_name"] = 'Смартс Самара';
value["10812"]["prv_folder"] = "foreign";
value["10812"]["prv_page"] = "./cellular.html";
value["10812"]["prv_page_conf"] = "./validate_confirm.html";
//value["10812"]["prv_alert"]="ikb_6497";
value["10812"]["prv_image"] = "img/ui_item/smarts.png";
value["10812"]["prv_top_image"] = ".img/ui_item/smarts.png";
value["10812"]["prv_is_cellular"] = false;
value["10812"]["prv_invitation"] = "prov_enter_phone";
value["10812"]["prv_button_text"] = "";
value["10812"]["prv_mask"] = "<!^\\d+${10}>";
value["10812"]["prv_online_check"] = "false";
value["10812"]["prv_group"] = "";

// НТК Россия КФЦ
value["10811"] = new Array();
value["10811"]["prv_id"] = "10811";
value["10811"]["prv_name"] = 'НТК';
value["10811"]["prv_folder"] = "foreign";
value["10811"]["prv_page"] = "./cellular.html";
value["10811"]["prv_page_conf"] = "./validate_confirm.html";
//value["10811"]["prv_alert"]="ikb_6497";
value["10811"]["prv_image"] = "img/ui_item/ntk.png";
value["10811"]["prv_top_image"] = "./img/ui_item/ntk.png";
value["10811"]["prv_is_cellular"] = false;
value["10811"]["prv_invitation"] = "prov_enter_phone";
value["10811"]["prv_button_text"] = "";
value["10811"]["prv_mask"] = "<!^\\d+${10}>";
value["10811"]["prv_online_check"] = "false";
value["10811"]["prv_group"] = "";

// Енисейтелеком Россия КФЦ
value["10810"] = new Array();
value["10810"]["prv_id"] = "10810";
value["10810"]["prv_name"] = 'Енисейтелеком';
value["10810"]["prv_folder"] = "foreign";
value["10810"]["prv_page"] = "./cellular.html";
value["10810"]["prv_page_conf"] = "./validate_confirm.html";
//value["10810"]["prv_alert"]="ikb_6497";
value["10810"]["prv_image"] = "img/ui_item/rostelecom.png";
value["10810"]["prv_top_image"] = "./img/ui_item/rostelecom.png";
value["10810"]["prv_is_cellular"] = false;
value["10810"]["prv_invitation"] = "prov_enter_phone";
value["10810"]["prv_button_text"] = "";
value["10810"]["prv_mask"] = "<!^\\d+${10}>";
value["10810"]["prv_online_check"] = "false";
value["10810"]["prv_group"] = "";

// Ё Самара Россия КФЦ
value["10809"] = new Array();
value["10809"]["prv_id"] = "10809";
value["10809"]["prv_name"] = 'Ё Самара';
value["10809"]["prv_folder"] = "foreign";
value["10809"]["prv_page"] = "./cellular.html";
value["10809"]["prv_page_conf"] = "./validate_confirm.html";
value["10809"]["prv_alert"] = "";
value["10809"]["prv_image"] = "img/ui_item/samara.gif";
value["10809"]["prv_top_image"] = "./img/ui_item/samara.gif";
value["10809"]["prv_is_cellular"] = false;
value["10809"]["prv_invitation"] = "prov_enter_phone";
value["10809"]["prv_button_text"] = "";
value["10809"]["prv_mask"] = "<!^\\d+${10}>";
value["10809"]["prv_online_check"] = "false";
value["10809"]["prv_group"] = "";

// ПРОСТО Сибирь Россия КФЦ
value["10807"] = new Array();
value["10807"]["prv_id"] = "10807";
value["10807"]["prv_name"] = 'ПРОСТО Сибирь';
value["10807"]["prv_folder"] = "foreign";
value["10807"]["prv_page"] = "./cellular.html";
value["10807"]["prv_page_conf"] = "./validate_confirm.html";
value["10807"]["prv_alert"] = "";
value["10807"]["prv_image"] = "img/ui_item/prostosibir.png";
value["10807"]["prv_top_image"] = "./img/ui_item/prostosibir.png";
value["10807"]["prv_is_cellular"] = false;
value["10807"]["prv_invitation"] = "prov_enter_phone";
value["10807"]["prv_button_text"] = "";
value["10807"]["prv_mask"] = "<!^\\d+${10}>";
value["10807"]["prv_online_check"] = "false";
value["10807"]["prv_group"] = "";

// Wellcom Красноярск Россия КФЦ
value["10808"] = new Array();
value["10808"]["prv_id"] = "10808";
value["10808"]["prv_name"] = 'Wellcom Красноярск';
value["10808"]["prv_folder"] = "foreign";
value["10808"]["prv_page"] = "./cellular.html";
value["10808"]["prv_page_conf"] = "./validate_confirm.html";
//value["10808"]["prv_alert"]="ikb_6497";
value["10808"]["prv_image"] = "img/ui_item/wellcom.png";
value["10808"]["prv_top_image"] = "./img/ui_item/wellcom.png";
value["10808"]["prv_is_cellular"] = false;
value["10808"]["prv_invitation"] = "prov_enter_phone";
value["10808"]["prv_button_text"] = "";
value["10808"]["prv_mask"] = "<!^\\d+${10}>";
value["10808"]["prv_online_check"] = "false";
value["10808"]["prv_group"] = "";

// АЛЛЁ Россия КФЦ
value["10590"] = new Array();
value["10590"]["prv_id"] = "10590";
value["10590"]["prv_name"] = 'АЛЛЁ';
value["10590"]["prv_folder"] = "foreign";
value["10590"]["prv_page"] = "./cellular.html";
value["10590"]["prv_page_conf"] = "./validate_confirm.html";
//value["10590"]["prv_alert"]="ikb_6497";
value["10590"]["prv_image"] = "img/ui_item/alle.png";
value["10590"]["prv_top_image"] = "./img/ui_item/alle.png";
value["10590"]["prv_is_cellular"] = false;
value["10590"]["prv_invitation"] = "prov_enter_phone";
value["10590"]["prv_button_text"] = "";
value["10590"]["prv_mask"] = "<!^\\d+${10}>";
value["10590"]["prv_online_check"] = "false";
value["10590"]["prv_group"] = "";

// Таттелеком.ЖКХ Телефон(ID контракта) Россия КФЦ
value["10818"] = new Array();
value["10818"]["prv_id"] = "10818";
value["10818"]["prv_name"] = 'Таттелеком.ЖКХ Телефон (ID контракта)';
value["10818"]["prv_folder"] = "foreign";
value["10818"]["prv_page"] = "./cellular.html";
value["10818"]["prv_page_conf"] = "./validate_confirm.html";
//value["10818"]["prv_alert"]="ikb_6497";
value["10818"]["prv_image"] = "img/ui_item/tat.png";
value["10818"]["prv_top_image"] = "./img/ui_item/tat.png";
value["10818"]["prv_is_cellular"] = false;
value["10818"]["prv_invitation"] = "prov_enter_phone";
value["10818"]["prv_button_text"] = "";
value["10818"]["prv_mask"] = "<!^\\d+${1,10}>";
value["10818"]["prv_online_check"] = "false";
value["10818"]["prv_group"] = "";

// Таттелеком.ЖКХ Телефон(по ном.телефона) Россия КФЦ
value["10819"] = new Array();
value["10819"]["prv_id"] = "10819";
value["10819"]["prv_name"] = 'Таттелеком.ЖКХ Телефон(по ном.телефона)';
value["10819"]["prv_folder"] = "foreign";
value["10819"]["prv_page"] = "./cellular.html";
value["10819"]["prv_page_conf"] = "./validate_confirm.html";
//value["10819"]["prv_alert"]="ikb_6497";
value["10819"]["prv_image"] = "img/ui_item/tat.png";
value["10819"]["prv_top_image"] = "./img/ui_item/tat.png";
value["10819"]["prv_is_cellular"] = false;
value["10819"]["prv_invitation"] = "prov_enter_phone";
value["10819"]["prv_button_text"] = "";
value["10819"]["prv_mask"] = "<!^\\d+${1,10}>";
value["10819"]["prv_online_check"] = "false";
value["10819"]["prv_group"] = "";

// НТК-Телефон(по лицевому счету) Россия КФЦ
value["10816"] = new Array();
value["10816"]["prv_id"] = "10816";
value["10816"]["prv_name"] = 'НТК-Телефон(по лицевому счету)';
value["10816"]["prv_folder"] = "foreign";
value["10816"]["prv_page"] = "./cellular.html";
value["10816"]["prv_page_conf"] = "./validate_confirm.html";
//value["10816"]["prv_alert"]="ikb_6497";
value["10816"]["prv_image"] = "img/ui_item/ntk.png";
value["10816"]["prv_top_image"] = "./img/ui_item/ntk.png";
value["10816"]["prv_is_cellular"] = false;
value["10816"]["prv_invitation"] = "prov_enter_phone";
value["10816"]["prv_button_text"] = "";
value["10816"]["prv_mask"] = "<!^\\d+${10}>";
value["10816"]["prv_online_check"] = "false";
value["10816"]["prv_group"] = "";

// НТК-Телефон(по номеру телефона) Россия КФЦ
value["10817"] = new Array();
value["10817"]["prv_id"] = "10817";
value["10817"]["prv_name"] = 'НТК-Телефон(по номеру телефона)';
value["10817"]["prv_folder"] = "foreign";
value["10817"]["prv_page"] = "./cellular.html";
value["10817"]["prv_page_conf"] = "./validate_confirm.html";
//value["10817"]["prv_alert"]="ikb_6497";
value["10817"]["prv_image"] = "img/ui_item/ntk.png";
value["10817"]["prv_top_image"] = "./img/ui_item/ntk.png";
value["10817"]["prv_is_cellular"] = false;
value["10817"]["prv_invitation"] = "prov_enter_phone";
value["10817"]["prv_button_text"] = "";
value["10817"]["prv_mask"] = "<!^\\d+${10}>";
value["10817"]["prv_online_check"] = "false";
value["10817"]["prv_group"] = "";

// Таттелеком Интернет Россия КФЦ
value["10586"] = new Array();
value["10586"]["prv_id"] = "10586";
value["10586"]["prv_name"] = 'Таттелеком';
value["10586"]["prv_folder"] = "foreign";
value["10586"]["prv_page"] = "./cellular.html";
value["10586"]["prv_page_conf"] = "./validate_confirm.html";
//value["10586"]["prv_alert"]="ikb_6497";
value["10586"]["prv_image"] = "img/ui_item/tat.png";
value["10586"]["prv_top_image"] = "./img/ui_item/tat.png";
value["10586"]["prv_is_cellular"] = false;
value["10586"]["prv_invitation"] = "prov_enter_phone";
value["10586"]["prv_button_text"] = "";
value["10586"]["prv_mask"] = "<!^\\d+${10}>";
value["10586"]["prv_online_check"] = "false";
value["10586"]["prv_group"] = "";

// МТС Россия КФЦ
value["10576"] = new Array();
value["10576"]["prv_id"] = "10576";
value["10576"]["prv_name"] = 'МТС';
value["10576"]["prv_folder"] = "foreign";
value["10576"]["prv_page"] = "./cellular.html";
value["10576"]["prv_page_conf"] = "./validate_confirm.html";
value["10576"]["prv_alert"] = "";
value["10576"]["prv_image"] = "img/ui_item/mts.png";
value["10576"]["prv_top_image"] = "./img/ui_item/mts.png";
value["10576"]["prv_is_cellular"] = false;
value["10576"]["prv_invitation"] = "prov_enter_phone";
value["10576"]["prv_button_text"] = "";
value["10576"]["prv_mask"] = "<!^\\d+${10}>";
value["10576"]["prv_group"] = "Сотовая связь";
value["10576"]["prv_online_check"] = "false";

// Ростелеком-Дальсвязь GSM. Камчатский край Россия КФЦ
value["10814"] = new Array();
value["10814"]["prv_id"] = "10814";
value["10814"]["prv_name"] = 'Ростелеком-Дальсвязь GSM. Камчатский край';
value["10814"]["prv_folder"] = "foreign";
value["10814"]["prv_page"] = "./cellular.html";
value["10814"]["prv_page_conf"] = "./validate_confirm.html";
//value["10814"]["prv_alert"]="ikb_6495";
value["10814"]["prv_image"] = "img/ui_item/rostelecom.png";
value["10814"]["prv_top_image"] = "./img/ui_item/rostelecom.png";
value["10814"]["prv_is_cellular"] = false;
value["10814"]["prv_invitation"] = "prov_enter_phone";
value["10814"]["prv_button_text"] = "";
value["10814"]["prv_mask"] = "<!^\\d+${10}>";
value["10814"]["prv_group"] = "Сотовая связь";
value["10814"]["prv_online_check"] = "false";

// Ростелеком-Дальсвязь GSM. Магаданская область Россия КФЦ
value["10815"] = new Array();
value["10815"]["prv_id"] = "10815";
value["10815"]["prv_name"] = 'Ростелеком-Дальсвязь GSM. Магаданская область';
value["10815"]["prv_folder"] = "foreign";
value["10815"]["prv_page"] = "./cellular.html";
value["10815"]["prv_page_conf"] = "./validate_confirm.html";
//value["10815"]["prv_alert"]="ikb_6495";
value["10815"]["prv_image"] = "img/ui_item/rostelecom.png";
value["10815"]["prv_top_image"] = "./img/ui_item/rostelecom.png";
value["10815"]["prv_is_cellular"] = false;
value["10815"]["prv_invitation"] = "prov_enter_phone";
value["10815"]["prv_button_text"] = "";
value["10815"]["prv_mask"] = "<!^\\d+${10}>";
value["10815"]["prv_group"] = "Сотовая связь";
value["10815"]["prv_online_check"] = "false";

// Free-Lance
value["3097"] = new Array();
value["3097"]["prv_id"] = "3097";
value["3097"]["prv_name"] = 'Free-lance';
value["3097"]["prv_folder"] = "foreign";
value["3097"]["prv_page"] = "./provider.html";
value["3097"]["prv_page_conf"] = "./validate_confirm.html";
//value["3097"]["prv_alert"]="ikb_6495";
value["3097"]["prv_image"] = "img/ui_item/fl.gif";
value["3097"]["prv_top_image"] = "./img/ui_item/fl.gif";
value["3097"]["prv_is_cellular"] = false;
value["3097"]["prv_invitation"] = "prov_enter_phone";
value["3097"]["prv_button_text"] = "";
value["3097"]["prv_mask"] = "<!^.+${3,15}>";
value["3097"]["prv_group"] = "Сайт по подбору персонала ";
value["3097"]["prv_online_check"] = "false";

//--------------Деньги Онлайн услуги end----------------------------------------//

// ОсОО "Альянс Интернешнл Бизнес"
value["10670"] = new Array();
value["10670"]["prv_id"] = "10670";
value["10670"]["prv_name"] = 'Isell';
value["10670"]["prv_folder"] = "content";
value["10670"]["prv_page"] = "./cellular.html";
value["10670"]["prv_page_conf"] = "./validate_confirm.html";
value["10670"]["prv_alert"] = "";
value["10670"]["prv_image"] = "img/ui_item/i-sell.png";
value["10670"]["prv_top_image"] = "img/ui_item/i-sell.png";
value["10670"]["prv_is_cellular"] = false;
value["10670"]["prv_invitation"] = "prov_enter_code";
value["10670"]["prv_button_text"] = "";
value["10670"]["prv_mask"] = "<!^\\d+${8}>";
value["10670"]["prv_group"] = "Сайт скидок";
value["10670"]["prv_online_check"] = "true";

////ОсОО "Winline" Sapatcom
//value["10688"] = new Array();
//value["10688"]["prv_id"] = "10688";
//value["10688"]["prv_name"] = "Sapatcom";
//value["10688"]["prv_folder"] = "internet";
//value["10688"]["prv_page"] = "./cellular.html";
//value["10688"]["prv_page_conf"] = "./validate_confirm.html";
//value["10688"]["prv_alert"] = "";
//value["10688"]["prv_image"] = "img/ui_item/sapatcom.png";
//value["10688"]["prv_is_cellular"] = false;
//value["10688"]["prv_invitation"] = "prov_enter_code";
//value["10688"]["prv_button_text"] = "";
//value["10688"]["prv_mask"] = "996" +
//    "<!^\\d+${7}>";
//value["10688"]["prv_group"] = "Интернет-услуги";
//value["10688"]["prv_online_check"] = "false";

// ИП Ермаков О.А. (Jungle.KG)
value["10762"] = new Array();
value["10762"]["prv_id"] = "10762";
value["10762"]["prv_name"] = 'Пополнение электронного счета';
value["10762"]["prv_folder"] = "content";
value["10762"]["prv_page"] = "./cellular.html";
value["10762"]["prv_page_conf"] = "./validate_confirm.html";
value["10762"]["prv_alert"] = "";
value["10762"]["prv_image"] = "img/ui_item/Junglepng.png";
value["10762"]["prv_top_image"] = "img/ui_item/Junglepng.png";
value["10762"]["prv_is_cellular"] = false;
value["10762"]["prv_invitation"] = "prov_enter_code";
value["10762"]["prv_button_text"] = "";
value["10762"]["prv_mask"] = "<!^\\d+${6}>";
value["10762"]["prv_group"] = "Jungle.KG";
value["10762"]["prv_online_check"] = "false";

// ОсОО "Geopay KG"
// Comment providet
// value["10852"] = new Array();
// value["10852"]["prv_id"] = "10852";
// value["10852"]["prv_name"] = 'Пополнение Geopay счета';
// value["10852"]["prv_folder"] = "content";
// value["10852"]["prv_page"] = "./cellular.html";
// value["10852"]["prv_page_conf"] = "./validate_confirm.html";
// value["10852"]["prv_alert"] = "ВНИМАНИЕ: Мобильные деньги<br>так же ликвидны, как и наличные деньги!<br>Не пополняйте мобильный кошелек<br>не знакомым людям - возможны<br>случаи мошенничества!<br>Уточняйте информацию по номеру:<br>0(312)976947";
// value["10852"]["prv_image"] = "img/ui_item/GeoPay.png";
// value["10852"]["prv_top_image"] = "img/ui_item/GeoPay.png";
// value["10852"]["prv_is_cellular"] = false;
// value["10852"]["prv_invitation"] = "prov_enter_code";
// value["10852"]["prv_button_text"] = "";
// value["10852"]["prv_mask"] = "996<!^\\d+${9}>";
// value["10852"]["prv_group"] = "";
// value["10852"]["prv_online_check"] = "true";

// AiKa2
value["10946"] = new Array();
value["10946"]["prv_id"] = "10946";
value["10946"]["prv_name"] = 'AiKa2';
value["10946"]["prv_folder"] = "foreign";
value["10946"]["prv_page"] = "./provider.html";
value["10946"]["prv_page_conf"] = "./validate_confirm.html";
//value["10946"]["prv_alert"]="ikb_6495";
value["10946"]["prv_image"] = "img/ui_item/Ico_100_100_AIKA2.gif";
value["10946"]["prv_top_image"] = "./img/ui_item/Ico_100_100_AIKA2.gif";
value["10946"]["prv_is_cellular"] = false;
value["10946"]["prv_invitation"] = "prov_enter_email";
value["10946"]["prv_button_text"] = "";
value["10946"]["prv_mask"] = "<!^.+${1,48}>";
value["10946"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["10946"]["prv_online_check"] = "false";

// BS.ru
value["10947"] = new Array();
value["10947"]["prv_id"] = "10947";
value["10947"]["prv_name"] = 'BS.ru';
value["10947"]["prv_folder"] = "foreign";
value["10947"]["prv_page"] = "./provider.html";
value["10947"]["prv_page_conf"] = "./validate_confirm.html";
//value["10947"]["prv_alert"]="ikb_6495";
value["10947"]["prv_image"] = "img/ui_item/Ico_100_100_BS.gif";
value["10947"]["prv_top_image"] = "./img/ui_item/Ico_100_100_BS.gif";
value["10947"]["prv_is_cellular"] = false;
value["10947"]["prv_invitation"] = "prov_enter_email";
value["10947"]["prv_button_text"] = "";
value["10947"]["prv_mask"] = "<!^.+${1,48}>";
value["10947"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["10947"]["prv_online_check"] = "false";

// Combat Arms
value["10948"] = new Array();
value["10948"]["prv_id"] = "10948";
value["10948"]["prv_name"] = 'Combat Arms';
value["10948"]["prv_folder"] = "foreign";
value["10948"]["prv_page"] = "./provider.html";
value["10948"]["prv_page_conf"] = "./validate_confirm.html";
//value["10948"]["prv_alert"]="ikb_6495";
value["10948"]["prv_image"] = "img/ui_item/Ico_100_100_CA.gif";
value["10948"]["prv_top_image"] = "./img/ui_item/Ico_100_100_CA.gif";
value["10948"]["prv_is_cellular"] = false;
value["10948"]["prv_invitation"] = "prov_enter_email";
value["10948"]["prv_button_text"] = "";
value["10948"]["prv_mask"] = "<!^.+${1,48}>";
value["10948"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["10948"]["prv_online_check"] = "false";

// GameNet.Ru
value["10949"] = new Array();
value["10949"]["prv_id"] = "10949";
value["10949"]["prv_name"] = 'GameNet.Ru';
value["10949"]["prv_folder"] = "foreign";
value["10949"]["prv_page"] = "./provider.html";
value["10949"]["prv_page_conf"] = "./validate_confirm.html";
//value["10949"]["prv_alert"]="ikb_6495";
value["10949"]["prv_image"] = "img/ui_item/gamenet.png";
value["10949"]["prv_top_image"] = "./img/ui_item/gamenet.png";
value["10949"]["prv_is_cellular"] = false;
value["10949"]["prv_invitation"] = "prov_enter_email";
value["10949"]["prv_button_text"] = "";
value["10949"]["prv_mask"] = "<!^.+${1,48}>";
value["10949"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["10949"]["prv_online_check"] = "false";

// FireStorm
value["10950"] = new Array();
value["10950"]["prv_id"] = "10950";
value["10950"]["prv_name"] = 'FireStorm';
value["10950"]["prv_folder"] = "foreign";
value["10950"]["prv_page"] = "./provider.html";
value["10950"]["prv_page_conf"] = "./validate_confirm.html";
//value["10950"]["prv_alert"]="ikb_6495";
value["10950"]["prv_image"] = "img/ui_item/Ico_100_100_FS.gif";
value["10950"]["prv_top_image"] = "./img/ui_item/Ico_100_100_FS.gif";
value["10950"]["prv_is_cellular"] = false;
value["10950"]["prv_invitation"] = "prov_enter_email";
value["10950"]["prv_button_text"] = "";
value["10950"]["prv_mask"] = "<!^.+${1,48}>";
value["10950"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["10950"]["prv_online_check"] = "false";

// Golden Age
value["10951"] = new Array();
value["10951"]["prv_id"] = "10951";
value["10951"]["prv_name"] = 'Golden Age';
value["10951"]["prv_folder"] = "foreign";
value["10951"]["prv_page"] = "./provider.html";
value["10951"]["prv_page_conf"] = "./validate_confirm.html";
//value["10951"]["prv_alert"]="ikb_6495";
value["10951"]["prv_image"] = "img/ui_item/Ico_100_100_GA.gif";
value["10951"]["prv_top_image"] = "./img/ui_item/Ico_100_100_GA.gif";
value["10951"]["prv_is_cellular"] = false;
value["10951"]["prv_invitation"] = "prov_enter_email";
value["10951"]["prv_button_text"] = "";
value["10951"]["prv_mask"] = "<!^.+${1,48}>";
value["10951"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["10951"]["prv_online_check"] = "false";

// Magic World 2
value["10952"] = new Array();
value["10952"]["prv_id"] = "10952";
value["10952"]["prv_name"] = 'Magic World 2';
value["10952"]["prv_folder"] = "foreign";
value["10952"]["prv_page"] = "./provider.html";
value["10952"]["prv_page_conf"] = "./validate_confirm.html";
//value["10952"]["prv_alert"]="ikb_6495";
value["10952"]["prv_image"] = "img/ui_item/Ico_100_100_MW2.gif";
value["10952"]["prv_top_image"] = "./img/ui_item/Ico_100_100_MW2.gif";
value["10952"]["prv_is_cellular"] = false;
value["10952"]["prv_invitation"] = "prov_enter_email";
value["10952"]["prv_button_text"] = "";
value["10952"]["prv_mask"] = "<!^.+${1,48}>";
value["10952"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["10952"]["prv_online_check"] = "false";

// RoT: Rage of Titans
value["10953"] = new Array();
value["10953"]["prv_id"] = "10953";
value["10953"]["prv_name"] = 'RoT: Rage of Titans';
value["10953"]["prv_folder"] = "foreign";
value["10953"]["prv_page"] = "./provider.html";
value["10953"]["prv_page_conf"] = "./validate_confirm.html";
//value["10953"]["prv_alert"]="ikb_6495";
value["10953"]["prv_image"] = "img/ui_item/Ico_100_100_ROT.gif";
value["10953"]["prv_top_image"] = "./img/ui_item/Ico_100_100_ROT.gif";
value["10953"]["prv_is_cellular"] = false;
value["10953"]["prv_invitation"] = "prov_enter_email";
value["10953"]["prv_button_text"] = "";
value["10953"]["prv_mask"] = "<!^.+${1,48}>";
value["10953"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["10953"]["prv_online_check"] = "false";

//Vivatoo.com
value["11170"] = new Array();
value["11170"]["prv_id"] = "11170";
value["11170"]["prv_name"] = 'Vivatao.com';
value["11170"]["prv_folder"] = "content";
value["11170"]["prv_page"] = "./cellular.html";
value["11170"]["prv_page_conf"] = "./validate_confirm.html";
value["11170"]["prv_alert"] = "";
value["11170"]["prv_image"] = "img/ui_item/vivatao.gif";
value["11170"]["prv_top_image"] = "img/ui_item/vivatao.gif";
value["11170"]["prv_is_cellular"] = false;
value["11170"]["prv_invitation"] = "prov_enter_ls";
value["11170"]["prv_button_text"] = "";
value["11170"]["prv_mask"] = "<!^\\d+${9}>";
value["11170"]["prv_group"] = "Интернет-магазин физических товаров";
value["11170"]["prv_online_check"] = "false";

//World of Dragons
value["11171"] = new Array();
value["11171"]["prv_id"] = "11171";
value["11171"]["prv_name"] = 'World of Dragons';
value["11171"]["prv_folder"] = "content";
value["11171"]["prv_page"] = "./cellular.html";
value["11171"]["prv_page_conf"] = "./validate_confirm.html";
value["11171"]["prv_alert"] = "";
value["11171"]["prv_image"] = "img/ui_item/WOD.gif";
value["11171"]["prv_top_image"] = "img/ui_item/WOD.gif";
value["11171"]["prv_is_cellular"] = false;
value["11171"]["prv_invitation"] = "prov_enter_id";
value["11171"]["prv_button_text"] = "";
value["11171"]["prv_mask"] = "<!^\\d+${1,9}>";
value["11171"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["11171"]["prv_online_check"] = "false";

//Домовой
value["11215"] = new Array();
value["11215"]["prv_id"] = "11215";
value["11215"]["prv_name"] = 'Касса';
value["11215"]["prv_folder"] = "content";
value["11215"]["prv_page"] = "./cellular.html";
value["11215"]["prv_page_conf"] = "./validate_confirm.html";
value["11215"]["prv_alert"] = "";
value["11215"]["prv_image"] = "img/ui_item/domovoi.png";
value["11215"]["prv_top_image"] = "img/ui_item/domovoi.png";
value["11215"]["prv_is_cellular"] = false;
value["11215"]["prv_invitation"] = "prov_enter_code";
value["11215"]["prv_button_text"] = "";
value["11215"]["prv_mask"] = "<!^\\d+${10}>";
value["11215"]["prv_group"] = "Получение информации о недвижимости";
value["11215"]["prv_online_check"] = "false";

// Lottery "Geneity"
value["11255"] = new Array();
value["11255"]["prv_id"] = "11255";
value["11255"]["prv_name"] = 'Лотерея';
value["11255"]["prv_folder"] = "other";
value["11255"]["prv_page"] = "./loto_account_new.html";
value["11255"]["prv_page_conf"] = "./lottery_validate_confirm.html";
value["11255"]["prv_alert"] = "";
value["11255"]["prv_image"] = "img/ui_item/lottery.png";
value["11255"]["prv_top_image"] = "img/ui_item/lottery.png";
value["11255"]["prv_is_cellular"] = false;
value["11255"]["prv_invitation"] = "prov_enter_lotoLine";
value["11255"]["prv_button_text"] = "";
value["11255"]["prv_mask"] = "<!^\\d+${1,2}>";
value["11255"]["prv_group"] = "Тиражно-электронная лотерея - Супер Лото 5/50";
value["11255"]["prv_online_check"] = "true";

//Xcraft.ru
value["11320"] = new Array();
value["11320"]["prv_id"] = "11320";
value["11320"]["prv_name"] = 'Xcraft.ru';
value["11320"]["prv_folder"] = "content";
value["11320"]["prv_page"] = "./provider.html";
value["11320"]["prv_page_conf"] = "./validate_confirm.html";
value["11320"]["prv_alert"] = "";
value["11320"]["prv_image"] = "img/ui_item/xcraft.png";
value["11320"]["prv_top_image"] = "img/ui_item/xcraft.png";
value["11320"]["prv_is_cellular"] = false;
value["11320"]["prv_invitation"] = "prov_enter_nik_in_game";
value["11320"]["prv_button_text"] = "";
value["11320"]["prv_mask"] = "<!^.+${1,20}>";
value["11320"]["prv_group"] = "Онлайн игра";
value["11320"]["prv_online_check"] = "false";


//WebMoney
value["webmoney_page"] = new Array();
value["webmoney_page"]["prv_name"] = "WebMoney";
value["webmoney_page"]["prv_image"] = "./img/ui_item/WebMoney.png";












// Moneta.Ru
value["12464"] = new Array();
value["12464"]["prv_id"] = "12464";
value["12464"]["prv_name"] = 'Moneta.Ru';
value["12464"]["prv_folder"] = "other";
value["12464"]["prv_page"] = "./cellular.html";
value["12464"]["prv_page_conf"] = "./validate_confirm.html";
value["12464"]["prv_alert"] = "Максимальная сумма <br>разового платежа: 10 000 сом.";
value["12464"]["prv_image"] = "img/ui_item/monetaru.png";
value["12464"]["prv_top_image"] = "img/ui_item/monetaru.png";
value["12464"]["prv_is_cellular"] = false;
value["12464"]["prv_invitation"] = "prov_enter_webmoney_cash";
value["12464"]["prv_button_text"] = "";
value["12464"]["prv_mask"] = "<!^.+${1,15}>";
value["12464"]["prv_group"] = "Электронные деньги";
value["12464"]["prv_online_check"] = "false";

// GameXP
value["11321"] = new Array();
value["11321"]["prv_id"] = "11321";
value["11321"]["prv_name"] = 'GameXP';
value["11321"]["prv_folder"] = "other";
value["11321"]["prv_page"] = "./cellular.html";
value["11321"]["prv_page_conf"] = "./validate_confirm.html";
value["11321"]["prv_alert"] = "";
value["11321"]["prv_image"] = "img/ui_item/gxp.png";
value["11321"]["prv_top_image"] = "img/ui_item/gxp.png";
value["11321"]["prv_is_cellular"] = false;
value["11321"]["prv_invitation"] = "prov_enter_nik_in_xp";
value["11321"]["prv_button_text"] = "";
value["11321"]["prv_mask"] = "<!^.+${1,7}>";
value["11321"]["prv_group"] = "Игровой сервис";
value["11321"]["prv_online_check"] = "false";


// Вконтакте Реклама
value["11324"] = new Array();
value["11324"]["prv_id"] = "11324";
value["11324"]["prv_name"] = 'Вконтакте Реклама';
value["11324"]["prv_folder"] = "content";
value["11324"]["prv_page"] = "./cellular.html";
value["11324"]["prv_page_conf"] = "./validate_confirm.html";
value["11324"]["prv_alert"] = "";
value["11324"]["prv_image"] = "img/ui_item/vkrek.gif";
value["11324"]["prv_top_image"] = "img/ui_item/vkrek.gif";
value["11324"]["prv_is_cellular"] = false;
value["11324"]["prv_invitation"] = "prov_enter_id_vk";
value["11324"]["prv_button_text"] = "";
value["11324"]["prv_mask"] = "<!^.+${10}>";
value["11324"]["prv_group"] = "Cоциальная сеть";
value["11324"]["prv_online_check"] = "false";

//ГТС
value["11277"] = new Array();
value["11277"]["prv_id"] = "11277";
value["11277"]["prv_name"] = 'ГТС';
value["11277"]["prv_folder"] = "other";
value["11277"]["prv_page"] = "./cellular.html";
value["11277"]["prv_page_conf"] = "./validate_confirm.html";
value["11277"]["prv_alert"] = "";
value["11277"]["prv_image"] = "img/ui_item/";
value["11277"]["prv_top_image"] = "img/ui_item/";
value["11277"]["prv_is_cellular"] = false;
value["11277"]["prv_invitation"] = "prov_enter_code";
value["11277"]["prv_button_text"] = "";
value["11277"]["prv_mask"] = "<!^\\d+${10,13}>";
value["11277"]["prv_group"] = "оплата ГТД";
value["11277"]["prv_online_check"] = "false";

//Оплата путевок
value["zalkar_travel"] = new Array();
value["zalkar_travel"]["prv_name"] = "Курорты и пансионаты";
value["zalkar_travel"]["prv_image"] = "./img/ui_item/icon_insurance_under_group.gif";

value["11436"] = new Array();
value["11436"]["prv_id"] = "11436";
value["11436"]["prv_name"] = 'Пансионат "Толкун"';
value["11436"]["prv_folder"] = "content";
value["11436"]["prv_page"] = "./provider.html";
value["11436"]["prv_page_conf"] = "./validate.html";
value["11436"]["prv_image"] = "img/ui_item/travel.gif";
value["11436"]["prv_top_image"] = "./img/ui_item/travel.gif";
value["11436"]["prv_is_cellular"] = true;
value["11436"]["prv_invitation"] = "prov_enter_travel";
value["11436"]["prv_button_text"] = "";
value["11436"]["prv_mask"] = "<!^\\d+${2}><!^\\d+${5}>";
value["11436"]["prv_group"] = "Оплата путевки";
value["11436"]["prv_online_check"] = "false";
value["11436"]["prv_receipt_extra_message"] = "";

////Сити Центр Плаза
//value["11497"] = new Array();
//value["11497"]["prv_id"] = "11497";
//value["11497"]["prv_name"] = 'Сити Центр Плаза';
//value["11497"]["prv_folder"] = "other";
//value["11497"]["prv_page"] = "./cellular.html";
//value["11497"]["prv_page_conf"] = "./validate_confirm.html";
//value["11497"]["prv_alert"] = "";
//value["11497"]["prv_image"] = "img/ui_item/cityplaza.png";
//value["11497"]["prv_top_image"] = "./img/ui_item/cityplaza.png";
//value["11497"]["prv_is_cellular"] = false;
//value["11497"]["prv_invitation"] = "prov_enter_code";
//value["11497"]["prv_button_text"] = "";
//value["11497"]["prv_mask"] = "<!^\\d+${1,4}>";
//value["11497"]["prv_group"] = "оплата за жилье";
//value["11497"]["prv_online_check"] = "true";

//Finca
// Comment provider
// value["11823"] = new Array();
// value["11823"]["prv_id"] = "11823";
// value["11823"]["prv_name"] = "Погашение кредита";
// value["11823"]["prv_folder"] = "bank";
// value["11823"]["prv_page"] = "./cellular_finca.html";
// value["11823"]["prv_image"] = "img/ui_item/Finka.png";
// value["11823"]["prv_page_conf"] = "./validate_confirm.html";
// value["11823"]["prv_alert"] = "";
// value["11823"]["prv_invitation"] = "prov_enter_finca";
// value["11823"]["prv_button_text"] = "";
// value["11823"]["prv_mask"] = "<!^d+${1,14}>";
// value["11823"]["prv_group"] = "Финка";
// value["11823"]["prv_online_check"] = "true";

//Exnet - оплата за интернет
value["11882"] = new Array();
value["11882"]["prv_id"] = "11882";
value["11882"]["prv_name"] = 'ExNet';
value["11882"]["prv_folder"] = "internet";
value["11882"]["prv_page"] = "./cellular.html";
value["11882"]["prv_page_conf"] = "./validate_confirm.html";
value["11882"]["prv_alert"] = "";
value["11882"]["prv_image"] = "img/ui_item/exnet.png";
value["11882"]["prv_top_image"] = "img/ui_item/exnet.png";
value["11882"]["prv_is_cellular"] = false;
value["11882"]["prv_invitation"] = "prov_enter_code";
value["11882"]["prv_button_text"] = "";
value["11882"]["prv_mask"] = "<!^\\d+${2,7}>";
value["11882"]["prv_group"] = "оплата за интернет";
value["11882"]["prv_online_check"] = "true";

//Долон-ТВ - коммерческое ТВ
value["11894"] = new Array();
value["11894"]["prv_id"] = "11894";
value["11894"]["prv_name"] = 'Долон-ТВ mpay';
value["11894"]["prv_folder"] = "tv";
value["11894"]["prv_page"] = "./cellular.html";
value["11894"]["prv_page_conf"] = "./validate_confirm.html";
value["11894"]["prv_alert"] = "";
value["11894"]["prv_image"] = "img/ui_item/dolontv.png";
value["11894"]["prv_top_image"] = "img/ui_item/dolontv.png";
value["11894"]["prv_is_cellular"] = false;
value["11894"]["prv_invitation"] = "prov_enter_code";
value["11894"]["prv_button_text"] = "";
value["11894"]["prv_mask"] = "<!^\\d+${1,6}>";
value["11894"]["prv_group"] = "Оплата за коммерческое телевидение";
value["11894"]["prv_online_check"] = "true";

//ОсОО "Работа для всех"
value["12226"] = new Array();
value["12226"]["prv_id"] = "12226";
value["12226"]["prv_name"] = 'Работа для всех';
value["12226"]["prv_folder"] = "adverts";
value["12226"]["prv_page"] = "./cellular.html";
value["12226"]["prv_page_conf"] = "./validate_confirm.html";
value["12226"]["prv_alert"] = "";
value["12226"]["prv_image"] = "./img/ui_item/rabota.png";
value["12226"]["prv_top_image"] = "./img/ui_item/rabota.png";
value["12226"]["prv_is_cellular"] = false;
value["12226"]["prv_invitation"] = "prov_enter_code";
value["12226"]["prv_button_text"] = "";
value["12226"]["prv_mask"] = "<!^\d+${6}>";
value["12226"]["prv_group"] = "";
value["12226"]["prv_online_check"] = "false";
//value["12226"]["prv_receipt_extra_message"] = "";

//4Story: Войны Королевств
value["12213"] = new Array();
value["12213"]["prv_id"] = "12213";
value["12213"]["prv_name"] = '4Story';
value["12213"]["prv_button_text"] = "Войны Королевств";
value["12213"]["prv_group"] = "Войны Королевств";
value["12213"]["prv_folder"] = "content";
value["12213"]["prv_page"] = "./cellular.html";
value["12213"]["prv_page_conf"] = "./validate_confirm.html";
value["12213"]["prv_alert"] = "";
value["12213"]["prv_image"] = "./img/ui_item/4story.png";
value["12213"]["prv_top_image"] = "./img/ui_item/4story.png";
value["12213"]["prv_is_cellular"] = false;
value["12213"]["prv_invitation"] = "prov_enter_id";
value["12213"]["prv_mask"] = "<!^\d+${1,9}>";
value["12213"]["prv_online_check"] = "false";
value["12213"]["prv_receipt_extra_message"] = "";

//Karos: Начало
value["12215"] = new Array();
value["12215"]["prv_id"] = "12215";
value["12215"]["prv_name"] = 'Karos: Начало';
value["12215"]["prv_button_text"] = "";
value["12215"]["prv_group"] = "Игры онлайн";
value["12215"]["prv_folder"] = "content";
value["12215"]["prv_page"] = "./cellular.html";
value["12215"]["prv_page_conf"] = "./validate_confirm.html";
value["12215"]["prv_alert"] = "";
value["12215"]["prv_image"] = "./img/ui_item/Karos.png";
value["12215"]["prv_top_image"] = "./img/ui_item/Karos.png";
value["12215"]["prv_is_cellular"] = false;
value["12215"]["prv_invitation"] = "prov_enter_id";
value["12215"]["prv_mask"] = "<!^\d+${1,9}>";
value["12215"]["prv_online_check"] = "false";
value["12215"]["prv_receipt_extra_message"] = "";

//Rappelz
value["12216"] = new Array();
value["12216"]["prv_id"] = "12216";
value["12216"]["prv_name"] = 'Rappelz';
value["12216"]["prv_button_text"] = "";
value["12216"]["prv_group"] = "Игры онлайн";
value["12216"]["prv_folder"] = "content";
value["12216"]["prv_page"] = "./cellular.html";
value["12216"]["prv_page_conf"] = "./validate_confirm.html";
value["12216"]["prv_alert"] = "";
value["12216"]["prv_image"] = "./img/ui_item/RZ.png";
value["12216"]["prv_top_image"] = "./img/ui_item/RZ.png";
value["12216"]["prv_is_cellular"] = false;
value["12216"]["prv_invitation"] = "prov_enter_id";
value["12216"]["prv_mask"] = "<!^\d+${1,9}>";
value["12216"]["prv_online_check"] = "false";
value["12216"]["prv_receipt_extra_message"] = "";

//АватарикА
value["12217"] = new Array();
value["12217"]["prv_id"] = "12217";
value["12217"]["prv_name"] = 'АватарикА';
value["12217"]["prv_button_text"] = "";
value["12217"]["prv_group"] = "Игры онлайн";
value["12217"]["prv_folder"] = "content";
value["12217"]["prv_page"] = "./cellular.html";
value["12217"]["prv_page_conf"] = "./validate_confirm.html";
value["12217"]["prv_alert"] = "";
value["12217"]["prv_image"] = "./img/ui_item/Avatarika.png";
value["12217"]["prv_top_image"] = "./img/ui_item/Avatarika.png";
value["12217"]["prv_is_cellular"] = false;
value["12217"]["prv_invitation"] = "prov_enter_id";
value["12217"]["prv_mask"] = "<!^\d+${1,9}>";
value["12217"]["prv_online_check"] = "false";
value["12217"]["prv_receipt_extra_message"] = "";

//Повелители драконов
value["12218"] = new Array();
value["12218"]["prv_id"] = "12218";
value["12218"]["prv_name"] = 'Повелители драконов';
value["12218"]["prv_button_text"] = "";
value["12218"]["prv_group"] = "Игры онлайн";
value["12218"]["prv_folder"] = "content";
value["12218"]["prv_page"] = "./cellular.html";
value["12218"]["prv_page_conf"] = "./validate_confirm.html";
value["12218"]["prv_alert"] = "";
value["12218"]["prv_image"] = "./img/ui_item/DK.png";
value["12218"]["prv_top_image"] = "./img/ui_item/DK.png";
value["12218"]["prv_is_cellular"] = false;
value["12218"]["prv_invitation"] = "prov_enter_id";
value["12218"]["prv_mask"] = "<!^\d+${1,9}>";
value["12218"]["prv_online_check"] = "false";
value["12218"]["prv_receipt_extra_message"] = "";

//Сфера
value["12219"] = new Array();
value["12219"]["prv_id"] = "12219";
value["12219"]["prv_name"] = 'Сфера';
value["12219"]["prv_button_text"] = "";
value["12219"]["prv_group"] = "Игры онлайн";
value["12219"]["prv_folder"] = "content";
value["12219"]["prv_page"] = "./cellular.html";
value["12219"]["prv_page_conf"] = "./validate_confirm.html";
value["12219"]["prv_alert"] = "";
value["12219"]["prv_image"] = "./img/ui_item/S1.png";
value["12219"]["prv_top_image"] = "./img/ui_item/S1.png";
value["12219"]["prv_is_cellular"] = false;
value["12219"]["prv_invitation"] = "prov_enter_id";
value["12219"]["prv_mask"] = "<!^\d+${1,9}>";
value["12219"]["prv_online_check"] = "false";
value["12219"]["prv_receipt_extra_message"] = "";

//Сфера: Перерождение
value["12223"] = new Array();
value["12223"]["prv_id"] = "12223";
value["12223"]["prv_name"] = 'Сфера: Перерождение';
value["12223"]["prv_button_text"] = "";
value["12223"]["prv_group"] = "Игры онлайн";
value["12223"]["prv_folder"] = "content";
value["12223"]["prv_page"] = "./cellular.html";
value["12223"]["prv_page_conf"] = "./validate_confirm.html";
value["12223"]["prv_alert"] = "";
value["12223"]["prv_image"] = "./img/ui_item/S2.png";
value["12223"]["prv_top_image"] = "./img/ui_item/S2.png";
value["12223"]["prv_is_cellular"] = false;
value["12223"]["prv_invitation"] = "prov_enter_id";
value["12223"]["prv_mask"] = "<!^\d+${1,9}>";
value["12223"]["prv_online_check"] = "false";
value["12223"]["prv_receipt_extra_message"] = "";

//Фантазиум 2
value["12224"] = new Array();
value["12224"]["prv_id"] = "12224";
value["12224"]["prv_name"] = 'Фантазиум 2';
value["12224"]["prv_button_text"] = "";
value["12224"]["prv_group"] = "Игры онлайн";
value["12224"]["prv_folder"] = "content";
value["12224"]["prv_page"] = "./cellular.html";
value["12224"]["prv_page_conf"] = "./validate_confirm.html";
value["12224"]["prv_alert"] = "";
value["12224"]["prv_image"] = "./img/ui_item/FAN2.png";
value["12224"]["prv_top_image"] = "./img/ui_item/FAN2.png";
value["12224"]["prv_is_cellular"] = false;
value["12224"]["prv_invitation"] = "prov_enter_id";
value["12224"]["prv_mask"] = "<!^\d+${1,9}>";
value["12224"]["prv_online_check"] = "false";
value["12224"]["prv_receipt_extra_message"] = "";

//Idram
value["12225"] = new Array();
value["12225"]["prv_id"] = "12225";
value["12225"]["prv_name"] = 'Idram';
value["12225"]["prv_button_text"] = "";
value["12225"]["prv_group"] = "Электронный кошелек";
value["12225"]["prv_folder"] = "content";
value["12225"]["prv_page"] = "./cellular.html";
value["12225"]["prv_page_conf"] = "./validate_confirm.html";
value["12225"]["prv_alert"] = "";
value["12225"]["prv_image"] = "./img/ui_item/idram.png";
value["12225"]["prv_top_image"] = "./img/ui_item/idram.png";
value["12225"]["prv_is_cellular"] = false;
value["12225"]["prv_invitation"] = "prov_enter_webmoney_cash";
value["12225"]["prv_mask"] = "<!^\d+${11}>";
value["12225"]["prv_online_check"] = "false";
value["12225"]["prv_receipt_extra_message"] = "";

//catalogloader.com
value["12212"] = new Array();
value["12212"]["prv_id"] = "12212";
value["12212"]["prv_name"] = 'CatalogLoader';
value["12212"]["prv_button_text"] = "";
value["12212"]["prv_group"] = "Программное обеспечение";
value["12212"]["prv_folder"] = "content";
value["12212"]["prv_page"] = "./cellular.html";
value["12212"]["prv_page_conf"] = "./validate_confirm.html";
value["12212"]["prv_alert"] = "";
value["12212"]["prv_image"] = "./img/ui_item/logo_catalogloader.png";
value["12212"]["prv_top_image"] = "./img/ui_item/logo_catalogloader.png";
value["12212"]["prv_is_cellular"] = false;
value["12212"]["prv_invitation"] = "prov_enter_account";
value["12212"]["prv_mask"] = "<!^\d+${1,32}>";
value["12212"]["prv_online_check"] = "false";
value["12212"]["prv_receipt_extra_message"] = "";

//Пенсионный фонд "Кыргызстан"
value["12227"] = new Array();
value["12227"]["prv_id"] = "12227";
value["12227"]["prv_name"] = 'Пенсионный фонд "Кыргызстан"';
value["12227"]["prv_button_text"] = "";
value["12227"]["prv_group"] = "Благотворительность";
value["12227"]["prv_folder"] = "other";
value["12227"]["prv_page"] = "./cellular.html";
value["12227"]["prv_page_conf"] = "./validate_confirm.html";
value["12227"]["prv_alert"] = "";
value["12227"]["prv_image"] = "./img/ui_item/";
value["12227"]["prv_top_image"] = "./img/ui_item/";
value["12227"]["prv_is_cellular"] = false;
value["12227"]["prv_invitation"] = "prov_enter_code";
value["12227"]["prv_mask"] = "<!^\d+${3,9}>";
value["12227"]["prv_online_check"] = "false";
value["12227"]["prv_receipt_extra_message"] = "";

//SOS People
value["12228"] = new Array();
value["12228"]["prv_id"] = "12228";
value["12228"]["prv_name"] = 'SOS People';
value["12228"]["prv_button_text"] = "";
value["12228"]["prv_group"] = "Благотворительность";
value["12228"]["prv_folder"] = "other";
value["12228"]["prv_page"] = "./sos_people.html";
value["12228"]["prv_page_conf"] = "./validate_confirm.html";
value["12228"]["prv_alert"] = "";
value["12228"]["prv_image"] = "./img/ui_item/";
value["12228"]["prv_top_image"] = "./img/ui_item/";
value["12228"]["prv_is_cellular"] = false;
value["12228"]["prv_invitation"] = "prov_enter_code";
value["12228"]["prv_mask"] = "SOS";
value["12228"]["prv_online_check"] = "false";
value["12228"]["prv_receipt_extra_message"] = "";

//Келечек Хелспром
// Comment provider
// value["12229"] = new Array();
// value["12229"]["prv_id"] = "12229";
// value["12229"]["prv_name"] = 'Келечек Хелспром';
// value["12229"]["prv_button_text"] = "";
// value["12229"]["prv_group"] = "Благотворительность";
// value["12229"]["prv_folder"] = "other";
// value["12229"]["prv_page"] = "./helsprom.html";
// value["12229"]["prv_page_conf"] = "./validate_confirm.html";
// value["12229"]["prv_alert"] = "";
// value["12229"]["prv_image"] = "./img/ui_item/";
// value["12229"]["prv_top_image"] = "./img/ui_item/";
// value["12229"]["prv_is_cellular"] = false;
// value["12229"]["prv_invitation"] = "prov_enter_code";
// value["12229"]["prv_mask"] = "SOS";
// value["12229"]["prv_online_check"] = "false";
// value["12229"]["prv_receipt_extra_message"] = "";

//Blago.Kg
value["12230"] = new Array();
value["12230"]["prv_id"] = "12230";
value["12230"]["prv_name"] = 'Blago.Kg';
value["12230"]["prv_button_text"] = "";
value["12230"]["prv_group"] = "Благотворительность";
value["12230"]["prv_folder"] = "other";
value["12230"]["prv_page"] = "./blago.html";
value["12230"]["prv_page_conf"] = "./validate_confirm.html";
value["12230"]["prv_alert"] = "";
value["12230"]["prv_image"] = "./img/ui_item/";
value["12230"]["prv_top_image"] = "./img/ui_item/";
value["12230"]["prv_is_cellular"] = false;
value["12230"]["prv_invitation"] = "prov_enter_code";
value["12230"]["prv_mask"] = "SOS";
value["12230"]["prv_online_check"] = "false";
value["12230"]["prv_receipt_extra_message"] = "";

//Ассоциация Страновая сеть ЛЖВ
value["12231"] = new Array();
value["12231"]["prv_id"] = "12231";
value["12231"]["prv_name"] = 'Ассоциация Страновая сеть ЛЖВ';
value["12231"]["prv_button_text"] = "";
value["12231"]["prv_group"] = "Благотворительность";
value["12231"]["prv_folder"] = "other";
value["12231"]["prv_page"] = "./web_ljv.html";
value["12231"]["prv_page_conf"] = "./validate_confirm.html";
value["12231"]["prv_alert"] = "";
value["12231"]["prv_image"] = "./img/ui_item/";
value["12231"]["prv_top_image"] = "./img/ui_item/";
value["12231"]["prv_is_cellular"] = false;
value["12231"]["prv_invitation"] = "prov_enter_code";
value["12231"]["prv_mask"] = "SOS";
value["12231"]["prv_online_check"] = "false";
value["12231"]["prv_receipt_extra_message"] = "";

//allsoft.kg
value["12232"] = new Array();
value["12232"]["prv_id"] = "12232";
value["12232"]["prv_name"] = 'Интернет магазин allsoft.kg';
value["12232"]["prv_button_text"] = "";
value["12232"]["prv_group"] = "";
value["12232"]["prv_folder"] = "content";
value["12232"]["prv_page"] = "./cellular.html";
value["12232"]["prv_page_conf"] = "./validate_confirm.html";
value["12232"]["prv_alert"] = "";
value["12232"]["prv_image"] = "./img/ui_item/allsoft.png";
value["12232"]["prv_top_image"] = "./img/ui_item/allsoft.png";
value["12232"]["prv_is_cellular"] = false;
value["12232"]["prv_invitation"] = "prov_enter_code";
value["12232"]["prv_mask"] = "ASKG-<!^.+${7}>";
value["12232"]["prv_online_check"] = "false";
value["12232"]["prv_receipt_extra_message"] = "";

//Dragona
value["12491"] = new Array();
value["12491"]["prv_id"] = "12491";
value["12491"]["prv_name"] = 'Dragona';
value["12491"]["prv_folder"] = "content";
value["12491"]["prv_page"] = "./cellular.html";
value["12491"]["prv_page_conf"] = "./validate_confirm.html";
value["12491"]["prv_alert"] = "";
value["12491"]["prv_image"] = "img/ui_item/Dracona_100-100px.gif";
value["12491"]["prv_top_image"] = "img/ui_item/Dracona_100-100px.gif";
value["12491"]["prv_is_cellular"] = false;
value["12491"]["prv_invitation"] = "prov_enter_id";
value["12491"]["prv_button_text"] = "";
value["12491"]["prv_mask"] = "<!^\\d+${1,9}>";
value["12491"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["12491"]["prv_online_check"] = "false";

//King of Kings 3
value["12489"] = new Array();
value["12489"]["prv_id"] = "12489";
value["12489"]["prv_name"] = 'King of Kings 3';
value["12489"]["prv_folder"] = "content";
value["12489"]["prv_page"] = "./cellular.html";
value["12489"]["prv_page_conf"] = "./validate_confirm.html";
value["12489"]["prv_alert"] = "";
value["12489"]["prv_image"] = "img/ui_item/KoKs_100-100.gif";
value["12489"]["prv_top_image"] = "img/ui_item/KoKs_100-100.gif";
value["12489"]["prv_is_cellular"] = false;
value["12489"]["prv_invitation"] = "prov_enter_id";
value["12489"]["prv_button_text"] = "";
value["12489"]["prv_mask"] = "<!^\\d+${1,9}>";
value["12489"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["12489"]["prv_online_check"] = "false";

// Lovecity 3D
value["12492"] = new Array();
value["12492"]["prv_id"] = "12492";
value["12492"]["prv_name"] = 'Lovecity 3D';
value["12492"]["prv_folder"] = "content";
value["12492"]["prv_page"] = "./provider.html";
value["12492"]["prv_page_conf"] = "./validate_confirm.html";
value["12492"]["prv_alert"] = "";
value["12492"]["prv_image"] = "img/ui_item/lovecity.gif";
value["12492"]["prv_top_image"] = "img/ui_item/lovecity.gif";
value["12492"]["prv_is_cellular"] = false;
value["12492"]["prv_invitation"] = "prov_enter_lovecity";
value["12492"]["prv_button_text"] = "";
value["12492"]["prv_mask"] = "<!^.+${1,30}>";
value["12492"]["prv_group"] = "Виртуальный мир, сервис знакомств";
value["12492"]["prv_online_check"] = "false";

// Ground War: Tanks
value["12493"] = new Array();
value["12493"]["prv_id"] = "12493";
value["12493"]["prv_name"] = 'Ground War: Tanks';
value["12493"]["prv_folder"] = "content";
value["12493"]["prv_page"] = "./cellular.html";
value["12493"]["prv_page_conf"] = "./validate_confirm.html";
value["12493"]["prv_alert"] = "";
value["12493"]["prv_image"] = "img/ui_item/groundwar.gif";
value["12493"]["prv_top_image"] = "img/ui_item/groundwar.gif";
value["12493"]["prv_is_cellular"] = false;
value["12493"]["prv_invitation"] = "prov_enter_id";
value["12493"]["prv_button_text"] = "";
value["12493"]["prv_mask"] = "<!^\\d+${1,20}>";
value["12493"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["12493"]["prv_online_check"] = "false";

// DIRTY BOMB
value["12494"] = new Array();
value["12494"]["prv_id"] = "12494";
value["12494"]["prv_name"] = 'DIRTY BOMB';
value["12494"]["prv_folder"] = "content";
value["12494"]["prv_page"] = "./cellular.html";
value["12494"]["prv_page_conf"] = "./validate_confirm.html";
value["12494"]["prv_alert"] = "";
value["12494"]["prv_image"] = "img/ui_item/DB.png";
value["12494"]["prv_top_image"] = "img/ui_item/DB.png";
value["12494"]["prv_is_cellular"] = false;
value["12494"]["prv_invitation"] = "prov_enter_id";
value["12494"]["prv_button_text"] = "";
value["12494"]["prv_mask"] = "<!^\\d+${1,10}>";
value["12494"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["12494"]["prv_online_check"] = "false";

// Blood and Soul
value["12496"] = new Array();
value["12496"]["prv_id"] = "12496";
value["12496"]["prv_name"] = 'Blood and Soul';
value["12496"]["prv_folder"] = "content";
value["12496"]["prv_page"] = "./provider.html";
value["12496"]["prv_page_conf"] = "./validate_confirm.html";
value["12496"]["prv_alert"] = "";
value["12496"]["prv_image"] = "img/ui_item/Bloodas.gif";
value["12496"]["prv_top_image"] = "img/ui_item/Bloodas.gif";
value["12496"]["prv_is_cellular"] = false;
value["12496"]["prv_invitation"] = "prov_enter_nik_in_game";
value["12496"]["prv_button_text"] = "";
value["12496"]["prv_mask"] = "<!^.+${1,30}>";
value["12496"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["12496"]["prv_online_check"] = "false";

// Кодекс Пирата
value["12497"] = new Array();
value["12497"]["prv_id"] = "12497";
value["12497"]["prv_name"] = 'Кодекс Пирата';
value["12497"]["prv_folder"] = "content";
value["12497"]["prv_page"] = "./provider.html";
value["12497"]["prv_page_conf"] = "./validate_confirm.html";
value["12497"]["prv_alert"] = "";
value["12497"]["prv_image"] = "img/ui_item/pirates_code.gif";
value["12497"]["prv_top_image"] = "img/ui_item/pirates_code.gif";
value["12497"]["prv_is_cellular"] = false;
value["12497"]["prv_invitation"] = "prov_enter_nik_in_game";
value["12497"]["prv_button_text"] = "";
value["12497"]["prv_mask"] = "<!^.+${1,30}>";
value["12497"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["12497"]["prv_online_check"] = "false";

// Шаранавты
value["12495"] = new Array();
value["12495"]["prv_id"] = "12495";
value["12495"]["prv_name"] = 'Шаранавты';
value["12495"]["prv_folder"] = "content";
value["12495"]["prv_page"] = "./cellular.html";
value["12495"]["prv_page_conf"] = "./validate_confirm.html";
value["12495"]["prv_alert"] = "";
value["12495"]["prv_image"] = "img/ui_item/sharanaft.png";
value["12495"]["prv_top_image"] = "img/ui_item/sharanaft.png";
value["12495"]["prv_is_cellular"] = false;
value["12495"]["prv_invitation"] = "prov_enter_id";
value["12495"]["prv_button_text"] = "";
value["12495"]["prv_mask"] = "<!^\\d+${1,10}>";
value["12495"]["prv_group"] = "Многопользовательские компьютерные онлайн-игры";
value["12495"]["prv_online_check"] = "false";

// Adviser
value["12638"] = new Array();
value["12638"]["prv_id"] = "12638";
value["12638"]["prv_name"] = 'Правовые базы данных - Параграф';
value["12638"]["prv_folder"] = "other";
value["12638"]["prv_page"] = "./provider.html";
value["12638"]["prv_page_conf"] = "./validate_confirm.html";
value["12638"]["prv_alert"] = "";
value["12638"]["prv_image"] = "img/ui_item/paragraph.png";
value["12638"]["prv_top_image"] = "img/ui_item/paragraph.png";
value["12638"]["prv_is_cellular"] = false;
value["12638"]["prv_invitation"] = "prov_enter_login_adviser";
value["12638"]["prv_button_text"] = "";
value["12638"]["prv_mask"] = "<!^.+${5,20}>";
value["12638"]["prv_group"] = "";
value["12638"]["prv_online_check"] = "true";

// BM Technologies / Klass
// Comment provider
// value["12635"] = new Array();
// value["12635"]["prv_id"] = "12635";
// value["12635"]["prv_name"] = 'Живи. Учись. Люби.';
// value["12635"]["prv_folder"] = "other";
// value["12635"]["prv_page"] = "./cellular.html";
// value["12635"]["prv_page_conf"] = "./validate_confirm.html";
// value["12635"]["prv_alert"] = "";
// value["12635"]["prv_image"] = "img/ui_item/klass.png";
// value["12635"]["prv_top_image"] = "img/ui_item/klass.png";
// value["12635"]["prv_is_cellular"] = false;
// value["12635"]["prv_invitation"] = "prov_enter_code";
// value["12635"]["prv_button_text"] = "";
// value["12635"]["prv_mask"] = "<!^\\d+${3,8}>";
// value["12635"]["prv_group"] = "Klass - Школьная социальная сеть";
// value["12635"]["prv_online_check"] = "true";

// Клооп Медия
value["12637"] = new Array();
value["12637"]["prv_id"] = "12637";
value["12637"]["prv_name"] = 'Kloop.kg';
value["12637"]["prv_folder"] = "other";
value["12637"]["prv_page"] = "./cellular.html";
value["12637"]["prv_page_conf"] = "./validate_confirm.html";
value["12637"]["prv_alert"] = "";
value["12637"]["prv_image"] = "img/ui_item/kloop2.png";
value["12637"]["prv_top_image"] = "img/ui_item/kloop2.png";
value["12637"]["prv_is_cellular"] = false;
value["12637"]["prv_invitation"] = "prov_enter_code";
value["12637"]["prv_button_text"] = "";
value["12637"]["prv_mask"] = "<!^\\d+${1,10}>";
value["12637"]["prv_group"] = "Один из самых популярных новостных сайтов в КР";
value["12637"]["prv_online_check"] = "false";

// Fara.KG
value["12655"] = new Array();
value["12655"]["prv_id"] = "12655";
value["12655"]["prv_name"] = 'Fara.KG';
value["12655"]["prv_folder"] = "other";
value["12655"]["prv_page"] = "./cellular.html";
value["12655"]["prv_page_conf"] = "./validate_confirm.html";
value["12655"]["prv_alert"] = "";
value["12655"]["prv_image"] = "img/ui_item/";
value["12655"]["prv_top_image"] = "img/ui_item/";
value["12655"]["prv_is_cellular"] = false;
value["12655"]["prv_invitation"] = "prov_enter_code";
value["12655"]["prv_button_text"] = "";
value["12655"]["prv_mask"] = "<!^\\d+${1,10}>";
value["12655"]["prv_group"] = "Автосайт";
value["12655"]["prv_online_check"] = "false";

// Прозрачная школа
// Comment provider
// value["12636"] = new Array();
// value["12636"]["prv_id"] = "12636";
// value["12636"]["prv_name"] = 'Прозрачная школа';
// value["12636"]["prv_folder"] = "other";
// value["12636"]["prv_page"] = "./cellular.html";
// value["12636"]["prv_page_conf"] = "./validate_confirm.html";
// value["12636"]["prv_alert"] = "Добро пожаловать, Ответственный родитель!<br/>Справки по телефону: (0312)-905-312<br/>Электронная почта: info@csg.kg";
// value["12636"]["prv_image"] = "img/ui_item/csg.png";
// value["12636"]["prv_top_image"] = "img/ui_item/csg.png";
// value["12636"]["prv_is_cellular"] = false;
// value["12636"]["prv_invitation"] = "prov_enter_school";
// value["12636"]["prv_button_text"] = "";
// value["12636"]["prv_mask"] = "<!^\\d+${8}>";
// value["12636"]["prv_group"] = "";
// value["12636"]["prv_online_check"] = "true";

// (KazMoneyUnion) Мой Мир@Mail.Ru
value["12736"] = new Array();
value["12736"]["prv_id"] = "12736";
value["12736"]["prv_name"] = 'Мой Мир@Mail.Ru';
value["12736"]["prv_folder"] = "content";
value["12736"]["prv_page"] = "./provider.html";
value["12736"]["prv_page_conf"] = "./validate_confirm.html";
value["12736"]["prv_alert"] = "";
value["12736"]["prv_image"] = "img/ui_item/mailmoney.png";
value["12736"]["prv_top_image"] = "img/ui_item/mailmoney.png";
value["12736"]["prv_is_cellular"] = false;
value["12736"]["prv_invitation"] = "prov_enter_login";
value["12736"]["prv_button_text"] = "Майлики";
value["12736"]["prv_mask"] = "<!^.+${1,33}>";
value["12736"]["prv_group"] = "";
value["12736"]["prv_online_check"] = "false";






//Красный Полумесяц Кыргызстана
value["12639"] = new Array();
value["12639"]["prv_id"] = "12639";
value["12639"]["prv_name"] = 'Красный Полумесяц Кыргызстана';
value["12639"]["prv_folder"] = "other";
value["12639"]["prv_page"] = "./red_kg.html";
value["12639"]["prv_page_conf"] = "./validate_confirm.html";
value["12639"]["prv_alert"] = "";
value["12639"]["prv_image"] = "img/ui_item/nokp.png";
value["12639"]["prv_top_image"] = "img/ui_item/nokp.png";
value["12639"]["prv_is_cellular"] = false;
value["12639"]["prv_invitation"] = "prov_enter_login";
value["12639"]["prv_button_text"] = "";
value["12639"]["prv_mask"] = "<!^.+${1,33}>";
value["12639"]["prv_group"] = "";
value["12639"]["prv_online_check"] = "false";

//auto.doska.kg 
value["12849"] = new Array();
value["12849"]["prv_id"] = "12849";
value["12849"]["prv_name"] = "auto.doska.kg";
value["12849"]["prv_folder"] = "other";
value["12849"]["prv_page"] = "./cellular.html";
value["12849"]["prv_image"] = "img/ui_item/auto_logo.png";
value["12849"]["prv_page_conf"] = "./validate_confirm.html";
value["12849"]["prv_alert"] = "";
value["12849"]["prv_invitation"] = "prov_enter_code";
value["12849"]["prv_button_text"] = "";
value["12849"]["prv_mask"] = "<!^\\d+${1,10}>";
value["12849"]["prv_group"] = "";
value["12849"]["prv_online_check"] = "false";

//--------------Деньги Онлайн услуги----------------------------------------//

value["tadjik_mobile"] = new Array();
value["tadjik_mobile"]["prv_name"] = "Сотовая связь";
value["tadjik_mobile"]["prv_image"] = "./img/ui/cfk/button_cell.png";

// TJ Мобайл (Таджикистан КФЦ)
value["13470"] = new Array();
value["13470"]["prv_id"] = "13470";
value["13470"]["prv_name"] = 'TJ Мобайл';
value["13470"]["prv_folder"] = "foreign";
value["13470"]["prv_page"] = "./cellular.html";
value["13470"]["prv_page_conf"] = "./validate_confirm.html";
value["13470"]["prv_alert"] = "";
value["13470"]["prv_image"] = "img/ui_item/tjmobile100x100.png";
value["13470"]["prv_top_image"] = "./img/ui_item/tjmobile100x100.png";
value["13470"]["prv_is_cellular"] = false;
value["13470"]["prv_invitation"] = "prov_enter_phone";
value["13470"]["prv_button_text"] = "";
value["13470"]["prv_mask"] = "<!^\\d+${9}>";
value["13470"]["prv_group"] = "TJ Мобайл";
value["13470"]["prv_online_check"] = "false";

// Таджик Телеком (Таджикистан КФЦ)
value["13471"] = new Array();
value["13471"]["prv_id"] = "13471";
value["13471"]["prv_name"] = 'Таджик Телеком';
value["13471"]["prv_folder"] = "foreign";
value["13471"]["prv_page"] = "./cellular.html";
value["13471"]["prv_page_conf"] = "./validate_confirm.html";
value["13471"]["prv_alert"] = "";
value["13471"]["prv_image"] = "img/ui_item/tat.png";
value["13471"]["prv_top_image"] = "./img/ui_item/tat.png";
value["13471"]["prv_is_cellular"] = false;
value["13471"]["prv_invitation"] = "prov_enter_phone";
value["13471"]["prv_button_text"] = "";
value["13471"]["prv_mask"] = "<!^\\d+${9}>";
value["13471"]["prv_group"] = "Таджик Телеком";
value["13471"]["prv_online_check"] = "false";

// ТСелл - Индиго Сомонком (Таджикистан КФЦ)
value["13472"] = new Array();
value["13472"]["prv_id"] = "13472";
value["13472"]["prv_name"] = 'ТСелл - Индиго Сомонком';
value["13472"]["prv_folder"] = "foreign";
value["13472"]["prv_page"] = "./cellular.html";
value["13472"]["prv_page_conf"] = "./validate_confirm.html";
value["13472"]["prv_alert"] = "";
value["13472"]["prv_image"] = "img/ui_item/Kcell.png";
value["13472"]["prv_top_image"] = "./img/ui_item/Kcell.png";
value["13472"]["prv_is_cellular"] = false;
value["13472"]["prv_invitation"] = "prov_enter_phone";
value["13472"]["prv_button_text"] = "";
value["13472"]["prv_mask"] = "<!^\\d+${9}>";
value["13472"]["prv_group"] = "ТСелл - Индиго Сомонком";
value["13472"]["prv_online_check"] = "false";

// ТК Мобайл (Таджикистан КФЦ)
value["13473"] = new Array();
value["13473"]["prv_id"] = "13473";
value["13473"]["prv_name"] = 'ТК Мобайл';
value["13473"]["prv_folder"] = "foreign";
value["13473"]["prv_page"] = "./cellular.html";
value["13473"]["prv_page_conf"] = "./validate_confirm.html";
value["13473"]["prv_alert"] = "";
value["13473"]["prv_image"] = "img/ui_item/tk_mobile100x100.png";
value["13473"]["prv_top_image"] = "./img/ui_item/tk_mobile100x100.png";
value["13473"]["prv_is_cellular"] = false;
value["13473"]["prv_invitation"] = "prov_enter_phone";
value["13473"]["prv_button_text"] = "";
value["13473"]["prv_mask"] = "<!^\\d+${9}>";
value["13473"]["prv_group"] = "ТК Мобайл";
value["13473"]["prv_online_check"] = "false";

// Мегафон (Таджикистан КФЦ)
value["13474"] = new Array();
value["13474"]["prv_id"] = "13474";
value["13474"]["prv_name"] = 'Мегафон';
value["13474"]["prv_folder"] = "foreign";
value["13474"]["prv_page"] = "./cellular.html";
value["13474"]["prv_page_conf"] = "./validate_confirm.html";
value["13474"]["prv_alert"] = "";
value["13474"]["prv_image"] = "img/ui_item/megafon.png";
value["13474"]["prv_top_image"] = "./img/ui_item/megafon.png";
value["13474"]["prv_is_cellular"] = false;
value["13474"]["prv_invitation"] = "prov_enter_phone";
value["13474"]["prv_button_text"] = "";
value["13474"]["prv_mask"] = "<!^\\d+${9}>";
value["13474"]["prv_group"] = "Мегафон";
value["13474"]["prv_online_check"] = "false";

// TCell - Индиго Таджикистан (Таджикистан КФЦ)
value["13475"] = new Array();
value["13475"]["prv_id"] = "13475";
value["13475"]["prv_name"] = 'TCell - Индиго Таджикистан';
value["13475"]["prv_folder"] = "foreign";
value["13475"]["prv_page"] = "./cellular.html";
value["13475"]["prv_page_conf"] = "./validate_confirm.html";
value["13475"]["prv_alert"] = "";
value["13475"]["prv_image"] = "img/ui_item/Kcell.png";
value["13475"]["prv_top_image"] = "./img/ui_item/Kcell.png";
value["13475"]["prv_is_cellular"] = false;
value["13475"]["prv_invitation"] = "prov_enter_phone";
value["13475"]["prv_button_text"] = "";
value["13475"]["prv_mask"] = "<!^\\d+${9}>";
value["13475"]["prv_group"] = "TCell - Индиго Таджикистан";
value["13475"]["prv_online_check"] = "false";

// Beeline Таджикистан (Таджикистан КФЦ)
value["13476"] = new Array();
value["13476"]["prv_id"] = "13476";
value["13476"]["prv_name"] = 'Beeline';
value["13476"]["prv_folder"] = "foreign";
value["13476"]["prv_page"] = "./cellular.html";
value["13476"]["prv_page_conf"] = "./validate_confirm.html";
value["13476"]["prv_alert"] = "";
value["13476"]["prv_image"] = "img/ui_item/beeline.png";
value["13476"]["prv_top_image"] = "./img/ui_item/beeline.png";
value["13476"]["prv_is_cellular"] = false;
value["13476"]["prv_invitation"] = "prov_enter_phone";
value["13476"]["prv_button_text"] = "";
value["13476"]["prv_mask"] = "<!^\\d+${9}>";
value["13476"]["prv_group"] = "Beeline";
value["13476"]["prv_online_check"] = "false";

// BABILON-M (Таджикистан КФЦ)
value["13477"] = new Array();
value["13477"]["prv_id"] = "13477";
value["13477"]["prv_name"] = 'BABILON-M';
value["13477"]["prv_folder"] = "foreign";
value["13477"]["prv_page"] = "./cellular.html";
value["13477"]["prv_page_conf"] = "./validate_confirm.html";
value["13477"]["prv_alert"] = "";
value["13477"]["prv_image"] = "img/ui_item/Vavilon-М100x100.png";
value["13477"]["prv_top_image"] = "./img/ui_item/Vavilon-М100x100.png";
value["13477"]["prv_is_cellular"] = false;
value["13477"]["prv_invitation"] = "prov_enter_phone";
value["13477"]["prv_button_text"] = "";
value["13477"]["prv_mask"] = "<!^\\d+${9}>";
value["13477"]["prv_group"] = "Таджикистан";
value["13477"]["prv_online_check"] = "false";
//--------------end Деньги Онлайн услуги----------------------------------------//

//единое окно 
// Comment provier
// value["13650"] = new Array();
// value["13650"]["prv_id"] = "13650";
// value["13650"]["prv_name"] = "ГП «Центр «единого окна» в сфере внешней торговли» при МЭ КР";
// value["13650"]["prv_folder"] = "tax";
// value["13650"]["prv_page"] = "./cellular.html";
// value["13650"]["prv_page_conf"] = "./validate_confirm.html";
// value["13650"]["prv_alert"] = "";
// value["13650"]["prv_image"] = "img/ui_item/edinoe_okno100x100.png";
// value["13650"]["prv_top_image"] = "./img/ui_item/edinoe_okno100x100.png";
// value["13650"]["prv_invitation"] = "prov_enter_account";
// value["13650"]["prv_button_text"] = "";
// value["13650"]["prv_mask"] = "<!^\\d+${1,10}>";
// value["13650"]["prv_group"] = "";
// value["13650"]["prv_online_check"] = "true";

//Войны престолов (КФЦ)
value["13647"] = new Array();
value["13647"]["prv_id"] = "13647";
value["13647"]["prv_name"] = 'Войны престолов';
value["13647"]["prv_folder"] = "content";
value["13647"]["prv_page"] = "./provider.html";
value["13647"]["prv_page_conf"] = "./validate_confirm.html";
value["13647"]["prv_alert"] = "";
value["13647"]["prv_image"] = "img/ui_item/voiny_prestolov100x100.png";
value["13647"]["prv_top_image"] = "img/ui_item/voiny_prestolov100x100.png";
value["13647"]["prv_is_cellular"] = false;
value["13647"]["prv_invitation"] = "prov_enter_nik_in_game";
value["13647"]["prv_button_text"] = "";
value["13647"]["prv_mask"] = "<!^.+${1,30}>";
value["13647"]["prv_group"] = "";
value["13647"]["prv_online_check"] = "false";

//ArcheAge (КФЦ)
value["13648"] = new Array();
value["13648"]["prv_id"] = "13648";
value["13648"]["prv_name"] = 'ArcheAge';
value["13648"]["prv_folder"] = "content";
value["13648"]["prv_page"] = "./provider.html";
value["13648"]["prv_page_conf"] = "./validate_confirm.html";
value["13648"]["prv_alert"] = "";
value["13648"]["prv_image"] = "img/ui_item/archeage_tb100x100.png";
value["13648"]["prv_top_image"] = "img/ui_item/archeage_tb100x100.png";
value["13648"]["prv_is_cellular"] = false;
value["13648"]["prv_invitation"] = "prov_enter_lovecity";
value["13648"]["prv_button_text"] = "";
value["13648"]["prv_mask"] = "<!^.+${1,30}>";
value["13648"]["prv_group"] = "";
value["13648"]["prv_online_check"] = "false";

//GFOX 
value["13657"] = new Array();
value["13657"]["prv_id"] = "13657";
value["13657"]["prv_name"] = "GFOX";
value["13657"]["prv_folder"] = "tax";
value["13657"]["prv_page"] = "./cellular.html";
value["13657"]["prv_page_conf"] = "./validate_confirm.html";
value["13657"]["prv_alert"] = "";
value["13657"]["prv_image"] = "img/ui_item/Gfox100x100.png";
value["13657"]["prv_top_image"] = "./img/ui_item/Gfox100x100.png";
value["13657"]["prv_invitation"] = "prov_enter_account";
value["13657"]["prv_button_text"] = "";
value["13657"]["prv_mask"] = "<!^\\d+${6}>";
value["13657"]["prv_group"] = "";
value["13657"]["prv_online_check"] = "true";

//---------------------Namba Taxi-----------------//
//SWIFT Taxi
// Comment provider
// value["13735"] = new Array();
// value["13735"]["prv_id"] = "13735";
// value["13735"]["prv_name"] = "SWIFT Taxi";
// value["13735"]["prv_folder"] = "tax";
// value["13735"]["prv_page"] = "./cellular.html";
// value["13735"]["prv_page_conf"] = "./validate_confirm.html";
// value["13735"]["prv_alert"] = "";
// value["13735"]["prv_image"] = "img/ui_item/swif.png";
// value["13735"]["prv_top_image"] = "./img/ui_item/swif.png";
// value["13735"]["prv_invitation"] = "prov_enter_phone";
// value["13735"]["prv_button_text"] = "";
// value["13735"]["prv_mask"] = "<!^\\d+${10}>";
// value["13735"]["prv_group"] = "";
// value["13735"]["prv_online_check"] = "true";

//Namba Taxi
// Comment provider
// value["13736"] = new Array();
// value["13736"]["prv_id"] = "13736";
// value["13736"]["prv_name"] = "Namba Taxi";
// value["13736"]["prv_folder"] = "tax";
// value["13736"]["prv_page"] = "./cellular.html";
// value["13736"]["prv_page_conf"] = "./validate_confirm.html";
// value["13736"]["prv_alert"] = "";
// value["13736"]["prv_image"] = "img/ui_item/namba.png";
// value["13736"]["prv_top_image"] = "./img/ui_item/namba.png";
// value["13736"]["prv_invitation"] = "prov_enter_phone";
// value["13736"]["prv_button_text"] = "";
// value["13736"]["prv_mask"] = "<!^\\d+${10}>";
// value["13736"]["prv_group"] = "";
// value["13736"]["prv_online_check"] = "true";
//---------------------end Namba Taxi-----------------//



//Такси 37
value["13912"] = new Array();
value["13912"]["prv_id"] = "13912";
value["13912"]["prv_name"] = "Такси 37";
value["13912"]["prv_folder"] = "tax";
value["13912"]["prv_page"] = "./cellular.html";
value["13912"]["prv_page_conf"] = "./validate_confirm.html";
value["13912"]["prv_alert"] = "";
value["13912"]["prv_image"] = "img/ui_item/taksi37_100x100.png";
value["13912"]["prv_top_image"] = "./img/ui_item/taksi37_100x100.png";
value["13912"]["prv_invitation"] = "prov_enter_phone";
value["13912"]["prv_button_text"] = "";
value["13912"]["prv_mask"] = "<!^\\d+${10}>";
value["13912"]["prv_group"] = "";
value["13912"]["prv_online_check"] = "true";

//Такси 1200
value["22362"] = new Array();
value["22362"]["prv_id"] = "22362";
value["22362"]["prv_name"] = "Такси 1200";
value["22362"]["prv_folder"] = "tax";
value["22362"]["prv_page"] = "./cellular.html";
value["22362"]["prv_page_conf"] = "./validate_confirm.html";
value["22362"]["prv_alert"] = "";
value["22362"]["prv_image"] = "img/ui_item/logo-MigTaxi.png";
value["22362"]["prv_top_image"] = "./img/ui_item/logo-MigTaxi.png";
value["22362"]["prv_invitation"] = "prov_enter_account";
value["22362"]["prv_button_text"] = "";
value["22362"]["prv_mask"] = "0<!^\\d+${9}>";
value["22362"]["prv_group"] = "";
value["22362"]["prv_online_check"] = "true";


//Такси 999
value["22361"] = new Array();
value["22361"]["prv_id"] = "22361";
value["22361"]["prv_name"] = "Такси 999";
value["22361"]["prv_folder"] = "tax";
value["22361"]["prv_page"] = "./cellular.html";
value["22361"]["prv_page_conf"] = "./validate_confirm.html";
value["22361"]["prv_alert"] = "";
value["22361"]["prv_image"] = "img/ui_item/logo-Taxi999.png";
value["22361"]["prv_top_image"] = "./img/ui_item/logo-Taxi999.png";
value["22361"]["prv_invitation"] = "prov_enter_account";
value["22361"]["prv_button_text"] = "";
value["22361"]["prv_mask"] = "0<!^\\d+${9}>";
value["22361"]["prv_group"] = "";
value["22361"]["prv_online_check"] = "true";

//1200 Яндекс
value["22238"] = new Array();
value["22238"]["prv_id"] = "22238";
value["22238"]["prv_name"] = "1200 Яндекс";
value["22238"]["prv_folder"] = "tax";
value["22238"]["prv_page"] = "./cellular.html";
value["22238"]["prv_page_conf"] = "./validate_confirm.html";
value["22238"]["prv_alert"] = "";
value["22238"]["prv_image"] = "img/ui_item/logo-Taxi1200YT.png";
value["22238"]["prv_top_image"] = "./img/ui_item/logo-Taxi1200YT.png";
value["22238"]["prv_invitation"] = "prov_enter_account";
value["22238"]["prv_button_text"] = "";
value["22238"]["prv_mask"] = "<!^\\d+${3,12}>";
value["22238"]["prv_group"] = "";
value["22238"]["prv_online_check"] = "true";

//Город Такси
value["22355"] = new Array();
value["22355"]["prv_id"] = "22355";
value["22355"]["prv_name"] = "Город Такси";
value["22355"]["prv_folder"] = "tax";
value["22355"]["prv_page"] = "./cellular.html";
value["22355"]["prv_page_conf"] = "./validate_confirm.html";
value["22355"]["prv_alert"] = "";
value["22355"]["prv_image"] = "img/ui_item/logo-GorodTaxi.png";
value["22355"]["prv_top_image"] = "./img/ui_item/logo-GorodTaxi.png";
value["22355"]["prv_invitation"] = "prov_enter_account";
value["22355"]["prv_button_text"] = "";
value["22355"]["prv_mask"] = "<!^\\d+${1,14}>";
value["22355"]["prv_group"] = "";
value["22355"]["prv_online_check"] = "true";

//Такси ЧАС ПИК
value["22370"] = new Array();
value["22370"]["prv_id"] = "22370";
value["22370"]["prv_name"] = "Такси ЧАС ПИК";
value["22370"]["prv_folder"] = "tax";
value["22370"]["prv_page"] = "./cellular.html";
value["22370"]["prv_page_conf"] = "./validate_confirm.html";
value["22370"]["prv_alert"] = "";
value["22370"]["prv_image"] = "img/ui_item/logo-chas-pik.png";
value["22370"]["prv_top_image"] = "./img/ui_item/logo-chas-pik.png";
value["22370"]["prv_invitation"] = "prov_enter_account";
value["22370"]["prv_button_text"] = "";
value["22370"]["prv_mask"] = "0<!^\\d+${9}>";
value["22370"]["prv_group"] = "";
value["22370"]["prv_online_check"] = "true";

//Smart Sim (Gfox) 
value["13734"] = new Array();
value["13734"]["prv_id"] = "13734";
value["13734"]["prv_name"] = "Smart Sim";
value["13734"]["prv_folder"] = "tax";
value["13734"]["prv_page"] = "./cellular.html";
value["13734"]["prv_page_conf"] = "./validate_confirm.html";
value["13734"]["prv_alert"] = "";
value["13734"]["prv_image"] = "img/ui_item/smartsim100х100.png";
value["13734"]["prv_top_image"] = "./img/ui_item/smartsim100х100.png";
value["13734"]["prv_invitation"] = "prov_enter_account";
value["13734"]["prv_button_text"] = "";
value["13734"]["prv_mask"] = "<!^\\d+${11}>";
value["13734"]["prv_group"] = "";
value["13734"]["prv_online_check"] = "true";


//War Thunder (КФЦ)
value["13987"] = new Array();
value["13987"]["prv_id"] = "13987";
value["13987"]["prv_name"] = 'War Thunder';
value["13987"]["prv_folder"] = "content";
value["13987"]["prv_page"] = "./provider.html";
value["13987"]["prv_page_conf"] = "./validate_confirm.html";
value["13987"]["prv_alert"] = "";
value["13987"]["prv_image"] = "img/ui_item/War_Thunder100x100.png";
value["13987"]["prv_top_image"] = "img/ui_item/War_Thunder100x100.png";
value["13987"]["prv_is_cellular"] = false;
value["13987"]["prv_invitation"] = "prov_enter_email";
value["13987"]["prv_button_text"] = "";
value["13987"]["prv_mask"] = "<!^.+${1,128}>";
value["13987"]["prv_group"] = "";
value["13987"]["prv_online_check"] = "false";

//Такси "НАРОДНОЕ"
// Delete provider
// value["13988"] = new Array();
// value["13988"]["prv_id"] = "13988";
// value["13988"]["prv_name"] = 'Такси "НАРОДНОЕ"';
// value["13988"]["prv_folder"] = "tax";
// value["13988"]["prv_page"] = "./cellular.html";
// value["13988"]["prv_page_conf"] = "./validate_confirm.html";
// value["13988"]["prv_alert"] = "";
// value["13988"]["prv_image"] = "img/ui_item/taxi_narodnoe100x100.png";
// value["13988"]["prv_top_image"] = "./img/ui_item/taxi_narodnoe100x100.png";
// value["13988"]["prv_invitation"] = "prov_enter_phone";
// value["13988"]["prv_button_text"] = "";
// value["13988"]["prv_mask"] = "<!^\\d+${10}>";
// value["13988"]["prv_group"] = "";
// value["13988"]["prv_online_check"] = "true";

//Faberlic
value["13989"] = new Array();
value["13989"]["prv_id"] = "13989";
value["13989"]["prv_name"] = 'Faberlic';
value["13989"]["prv_folder"] = "tax";
value["13989"]["prv_page"] = "./cellular.html";
value["13989"]["prv_page_conf"] = "./validate_confirm.html";
value["13989"]["prv_alert"] = "";
value["13989"]["prv_image"] = "img/ui_item/faberlic100x100.png";
value["13989"]["prv_top_image"] = "./img/ui_item/faberlic100x100.png";
value["13989"]["prv_invitation"] = "prov_enter_code";
value["13989"]["prv_button_text"] = "";
value["13989"]["prv_mask"] = "<!^\\d+${1,20}>";
value["13989"]["prv_group"] = "";
value["13989"]["prv_online_check"] = "true";

//ЭЛСОМ
value["13649"] = new Array();
value["13649"]["prv_id"] = "13649";
value["13649"]["prv_name"] = 'ЭЛСОМ';
value["13649"]["prv_folder"] = "tax";
value["13649"]["prv_page"] = "./cellular.html";
value["13649"]["prv_page_conf"] = "./validate_confirm.html";
value["13649"]["prv_alert"] = "";
value["13649"]["prv_image"] = "img/ui_item/elsom100x100.png";
value["13649"]["prv_top_image"] = "./img/ui_item/elsom100x100.png";
value["13649"]["prv_invitation"] = "prov_enter_phone";
value["13649"]["prv_button_text"] = "";
value["13649"]["prv_mask"] = "<!^\\d+${10}>";
value["13649"]["prv_group"] = "";
value["13649"]["prv_online_check"] = "true";

//GOODLINE (Gfox) 
value["13658"] = new Array();
value["13658"]["prv_id"] = "13658";
value["13658"]["prv_name"] = "GOODLINE";
value["13658"]["prv_folder"] = "tax";
value["13658"]["prv_page"] = "./cellular.html";
value["13658"]["prv_page_conf"] = "./validate_confirm.html";
value["13658"]["prv_alert"] = "";
value["13658"]["prv_image"] = "img/ui_item/goodline100x100.png";
value["13658"]["prv_top_image"] = "./img/ui_item/goodline100x100.png";
value["13658"]["prv_invitation"] = "prov_enter_phone";
value["13658"]["prv_button_text"] = "";
value["13658"]["prv_mask"] = "372<!^\\d+${8}>";
value["13658"]["prv_group"] = "";
value["13658"]["prv_online_check"] = "true";

// ITV.KG
value["14254"] = new Array();
value["14254"]["prv_id"] = "14254";
value["14254"]["prv_name"] = "ITV.KG";
value["14254"]["prv_folder"] = "tv";
value["14254"]["prv_page"] = "./cellular.html";
value["14254"]["prv_page_conf"] = "./validate_confirm.html";
value["14254"]["prv_image"] = "img/ui_item/iptv_100x100.png";
value["14254"]["prv_top_image"] = "./img/ui_item/iptv_100x100.png";
value["14254"]["prv_alert"] = "";
value["14254"]["prv_invitation"] = "prov_enter_code";
value["14254"]["prv_button_text"] = "";
value["14254"]["prv_mask"] = "<!^\\d+${5}>";
value["14254"]["prv_group"] = "";
value["14254"]["prv_online_check"] = "true";

//Электросила 
value["14366"] = new Array();
value["14366"]["prv_id"] = "14366";
value["14366"]["prv_name"] = "Электросила";
value["14366"]["prv_folder"] = "zkh";
value["14366"]["prv_page"] = "./cellular.html";
value["14366"]["prv_page_conf"] = "./validate_confirm.html";
value["14366"]["prv_alert"] = "";
value["14366"]["prv_image"] = "img/ui_item/electrosila100x100.png";
value["14366"]["prv_top_image"] = "./img/ui_item/electrosila100x100.png";
value["14366"]["prv_invitation"] = "prov_enter_account";
value["14366"]["prv_button_text"] = "";
value["14366"]["prv_mask"] = "<!^\\d+${7,9}>";
value["14366"]["prv_group"] = "";
value["14366"]["prv_online_check"] = "true";




//Falkor pro
value["14364"] = new Array();
value["14364"]["prv_id"] = "14364";
value["14364"]["prv_name"] = 'Фалькор Про';
value["14364"]["prv_folder"] = "tax";
value["14364"]["prv_page"] = "./provider.html";
value["14364"]["prv_page_conf"] = "./validate_confirm.html";
value["14364"]["prv_alert"] = "";
value["14364"]["prv_is_cellular"] = false;
value["14364"]["prv_image"] = "img/ui_item/falkor.png";
value["14364"]["prv_top_image"] = "./img/ui_item/falkor.png";
value["14364"]["prv_invitation"] = "prov_enter_login";
value["14364"]["prv_button_text"] = "";
value["14364"]["prv_mask"] = "<!^.+${1,40}>";
value["14364"]["prv_group"] = "Оплата налогов";
value["14364"]["prv_online_check"] = "true";

//ЦЗРК
value["czrk"] = new Array();
value["czrk"]["prv_name"] = "ЦЗРК";

// Comment provider
// value["14371"] = new Array();
// value["14371"]["prv_id"] = "14371";
// value["14371"]["prv_name"] = 'ЦЗРК - регистрация залога';
// value["14371"]["prv_folder"] = "bank";
// value["14371"]["prv_page"] = "./provider.html";
// value["14371"]["prv_page_conf"] = "./validate_confirm.html";
// value["14371"]["prv_alert"] = "";
// value["14371"]["prv_invitation"] = "validate_fio";
// value["14371"]["prv_button_text"] = "";
// value["14371"]["prv_mask"] = "<!^.+${1,40}>";
// value["14371"]["prv_group"] = "";
// value["14371"]["prv_online_check"] = "false";

// Comment provider
// value["14373"] = new Array();
// value["14373"]["prv_id"] = "14373";
// value["14373"]["prv_name"] = 'ЦЗРК - выдача информации из ЕГР';
// value["14373"]["prv_folder"] = "bank";
// value["14373"]["prv_page"] = "./provider.html";
// value["14373"]["prv_page_conf"] = "./validate_confirm.html";
// value["14373"]["prv_alert"] = "";
// value["14373"]["prv_invitation"] = "validate_fio";
// value["14373"]["prv_button_text"] = "";
// value["14373"]["prv_mask"] = "<!^.+${1,40}>";
// value["14373"]["prv_group"] = "";
// value["14373"]["prv_online_check"] = "false";

// Comment provider
// value["14372"] = new Array();
// value["14372"]["prv_id"] = "14372";
// value["14372"]["prv_name"] = 'ЦЗРК - изменение внесений в залог';
// value["14372"]["prv_folder"] = "bank";
// value["14372"]["prv_page"] = "./provider.html";
// value["14372"]["prv_page_conf"] = "./validate_confirm.html";
// value["14372"]["prv_alert"] = "";
// value["14372"]["prv_invitation"] = "validate_fio";
// value["14372"]["prv_button_text"] = "";
// value["14372"]["prv_mask"] = "<!^.+${1,40}>";
// value["14372"]["prv_group"] = "";
// value["14372"]["prv_online_check"] = "false";

//JARNAK.KG
value["14522"] = new Array();
value["14522"]["prv_id"] = "14522";
value["14522"]["prv_name"] = 'JARNAK.KG';
value["14522"]["prv_folder"] = "tax";
value["14522"]["prv_page"] = "./cellular.html";
value["14522"]["prv_page_conf"] = "./validate_confirm.html";
value["14522"]["prv_alert"] = "";
value["14522"]["prv_image"] = "img/ui_item/jarnak100x100.png";
value["14522"]["prv_top_image"] = "./img/ui_item/jarnak100x100.png";
value["14522"]["prv_invitation"] = "prov_enter_account";
value["14522"]["prv_button_text"] = "";
value["14522"]["prv_mask"] = "<!^\\d+${1,10}>";
value["14522"]["prv_group"] = "";
value["14522"]["prv_online_check"] = "true";

//Bravo
value["14628"] = new Array();
value["14628"]["prv_id"] = "14628";
value["14628"]["prv_name"] = "Bravo";
value["14628"]["prv_folder"] = "zkh";
value["14628"]["prv_page"] = "./cellular.html";
value["14628"]["prv_page_conf"] = "./validate_confirm.html";
value["14628"]["prv_alert"] = "";
value["14628"]["prv_image"] = "img/ui_item/BRAVO_100х100.png";
value["14628"]["prv_top_image"] = "./img/ui_item/BRAVO_100х100.png";
value["14628"]["prv_invitation"] = "prov_enter_account";
value["14628"]["prv_button_text"] = "";
value["14628"]["prv_mask"] = "<!^\\d+${3}>";
value["14628"]["prv_group"] = "";
value["14628"]["prv_online_check"] = "true";

//AsiaInfo 
value["14629"] = new Array();
value["14629"]["prv_id"] = "14629";
value["14629"]["prv_name"] = 'AsiaInfo';
value["14629"]["prv_folder"] = "tax";
value["14629"]["prv_page"] = "./cellular.html";
value["14629"]["prv_page_conf"] = "./validate_confirm.html";
value["14629"]["prv_alert"] = "";
value["14629"]["prv_image"] = "img/ui_item/asiainfo.png";
value["14629"]["prv_top_image"] = "./img/ui_item/asiainfo.png";
value["14629"]["prv_invitation"] = "prov_enter_account";
value["14629"]["prv_button_text"] = "";
value["14629"]["prv_mask"] = "<!^\\d+${5,6}>";
value["14629"]["prv_group"] = "";
value["14629"]["prv_online_check"] = "true";

//Namba Taxi OSH
// Comment provider
// value["14992"] = new Array();
// value["14992"]["prv_id"] = "14992";
// value["14992"]["prv_name"] = "Намба Такси Ош";
// value["14992"]["prv_folder"] = "tax";
// value["14992"]["prv_page"] = "./cellular.html";
// value["14992"]["prv_page_conf"] = "./validate_confirm.html";
// value["14992"]["prv_alert"] = "";
// value["14992"]["prv_image"] = "img/ui_item/namba_taxi_osh.png";
// value["14992"]["prv_top_image"] = "./img/ui_item/namba_taxi_osh.png";
// value["14992"]["prv_invitation"] = "prov_enter_phone";
// value["14992"]["prv_button_text"] = "";
// value["14992"]["prv_mask"] = "<!^\\d+${10}>";
// value["14992"]["prv_group"] = "";
// value["14992"]["prv_online_check"] = "true";





//Strife (КФЦ)
value["15204"] = new Array();
value["15204"]["prv_id"] = "15204";
value["15204"]["prv_name"] = 'Strife';
value["15204"]["prv_folder"] = "content";
value["15204"]["prv_page"] = "./provider.html";
value["15204"]["prv_page_conf"] = "./validate_confirm.html";
value["15204"]["prv_alert"] = "";
value["15204"]["prv_image"] = "img/ui_item/strife100x100.png";
value["15204"]["prv_top_image"] = "img/ui_item/strife100x100.png";
value["15204"]["prv_is_cellular"] = false;
value["15204"]["prv_invitation"] = "prov_enter_nik_in_game";
value["15204"]["prv_button_text"] = "";
value["15204"]["prv_mask"] = "<!^.+${1,40}>";
value["15204"]["prv_group"] = "";
value["15204"]["prv_online_check"] = "false";

//Спарта (КФЦ)
value["15205"] = new Array();
value["15205"]["prv_id"] = "15205";
value["15205"]["prv_name"] = 'Спарта';
value["15205"]["prv_folder"] = "content";
value["15205"]["prv_page"] = "./provider.html";
value["15205"]["prv_page_conf"] = "./validate_confirm.html";
value["15205"]["prv_alert"] = "";
value["15205"]["prv_image"] = "img/ui_item/sparta100x100.png";
value["15205"]["prv_top_image"] = "img/ui_item/sparta100x100.png";
value["15205"]["prv_is_cellular"] = false;
value["15205"]["prv_invitation"] = "prov_enter_nik_in_game";
value["15205"]["prv_button_text"] = "";
value["15205"]["prv_mask"] = "<!^.+${1,40}>";
value["15205"]["prv_group"] = "";
value["15205"]["prv_online_check"] = "false";

////Favbet (КФЦ)
//value["15206"] = new Array();
//value["15206"]["prv_id"] = "15206";
//value["15206"]["prv_name"] = 'Favbet';
//value["15206"]["prv_folder"] = "content";
//value["15206"]["prv_page"] = "./cellular.html";
//value["15206"]["prv_page_conf"] = "./validate_confirm.html";
//value["15206"]["prv_alert"] = "";
//value["15206"]["prv_image"] = "img/ui_item/logo_favbet1_100x100.gif";
//value["15206"]["prv_top_image"] = "img/ui_item/logo_favbet1_100x100.gif";
//value["15206"]["prv_is_cellular"] = false;
//value["15206"]["prv_invitation"] = "prov_enter_nik_in_game";
//value["15206"]["prv_button_text"] = "";
//value["15206"]["prv_mask"] = "<!^\\d+${12}>";
//value["15206"]["prv_group"] = "";
//value["15206"]["prv_online_check"] = "false";

////FOOD.NAMBA.KG
//value["15224"] = new Array();
//value["15224"]["prv_id"] = "15224";
//value["15224"]["prv_name"] = "NAMBA Food";
//value["15224"]["prv_folder"] = "tax";
//value["15224"]["prv_page"] = "./cellular.html";
//value["15224"]["prv_page_conf"] = "./validate_confirm.html";
//value["15224"]["prv_alert"] = "";
//value["15224"]["prv_image"] = "img/ui_item/food_logo.png";
//value["15224"]["prv_top_image"] = "./img/ui_item/food_logo.png";
//value["15224"]["prv_invitation"] = "prov_enter_phone";
//value["15224"]["prv_button_text"] = "";
//value["15224"]["prv_mask"] = "<!^\\d+${10}>";
//value["15224"]["prv_group"] = "";
//value["15224"]["prv_online_check"] = "true";

////1XBET.KG
//value["15459"] = new Array();
//value["15459"]["prv_id"] = "15459";
//value["15459"]["prv_name"] = "1xbet - букмекерские ставки";
//value["15459"]["prv_folder"] = "tax";
//value["15459"]["prv_page"] = "./cellular.html";
//value["15459"]["prv_page_conf"] = "./validate_confirm.html";
//value["15459"]["prv_alert"] = "";
//value["15459"]["prv_image"] = "img/ui_item/1xBET_100x100.png";
//value["15459"]["prv_top_image"] = "./img/ui_item/1xBET_100x100.png";
//value["15459"]["prv_invitation"] = "prov_enter_account";
//value["15459"]["prv_button_text"] = "";
//value["15459"]["prv_mask"] = "<!^\\d+${6,7}>";
//value["15459"]["prv_group"] = "";
//value["15459"]["prv_online_check"] = "false";

//Vitel (Fonex, Балан)
//value["15430"] = new Array();
//value["15430"]["prv_id"] = "15430";
//value["15430"]["prv_name"] = "Vitel";
//value["15430"]["prv_folder"] = "cellular";
//value["15430"]["prv_page"] = "./cellular.html";
//value["15430"]["prv_page_conf"] = "./validate_confirm.html";
//value["15430"]["prv_alert"] = "";
//value["15430"]["prv_image"] = "img/ui_item/vitel_100x100.png";
//value["15430"]["prv_top_image"] = "./img/ui_item/vitel_100x100.png";
//value["15430"]["prv_is_cellular"] = true;
//value["15430"]["prv_invitation"] = "prov_enter_phone";
//value["15430"]["prv_button_text"] = "";
//value["15430"]["prv_mask"] = "0 (200) <!^d+${6}>";
//value["15430"]["prv_group"] = "Сотовая связь";
//value["15430"]["prv_online_check"] = "false";

//ОАО "Коммерческий банк КЫРГЫЗСТАН" CBK mBank - пополнение счета
// Comment provider
// value["15208"] = new Array();
// value["15208"]["prv_id"] = "15208";
// value["15208"]["prv_name"] = "CBK mBank - пополнение счета";
// value["15208"]["prv_folder"] = "tax";
// value["15208"]["prv_page"] = "./cellular.html";
// value["15208"]["prv_page_conf"] = "./validate_confirm.html";
// value["15208"]["prv_alert"] = "Минимальная сумма платежа 100 сом";
// value["15208"]["prv_image"] = "img/ui_item/CBK_mBank.png";
// value["15208"]["prv_top_image"] = "./img/ui_item/CBK_mBank.png";
// value["15208"]["prv_invitation"] = "prov_enter_acc_or_phone";
// value["15208"]["prv_button_text"] = "";
// value["15208"]["prv_mask"] = "<!^\\d+${12,16}>";
// value["15208"]["prv_group"] = "";
// value["15208"]["prv_online_check"] = "true";

///////Таласская область свет/////////
// СВЕТ Талас
value["talass_light"] = new Array();
value["talass_light"]["prv_name"] = "Таласский регион";
value["talass_light"]["prv_folder"] = "zkh";
value["talass_light"]["prv_image"] = "./img/ui_item/light.png";

//Таласская горсеть
////////////////////
value["talass_gorset_folder"] = new Array();
value["talass_gorset_folder"]["prv_name"] = "Горсеть";
value["talass_gorset_folder"]["prv_folder"] = "zkh";
value["talass_gorset_folder"]["prv_page"] = "./cellular.html";
value["talass_gorset_folder"]["prv_page_conf"] = "./validate_confirm.html";
value["talass_gorset_folder"]["prv_alert"] = "";
value["talass_gorset_folder"]["prv_image"] = "./img/ui_item/light.png";

//Таласская горсеть
value["15511"] = new Array();
value["15511"]["prv_id"] = "15511";
value["15511"]["prv_name"] = "Горсеть - Оплата за свет";
value["15511"]["prv_folder"] = "zkh";
value["15511"]["prv_page"] = "./cellular.html";
value["15511"]["prv_page_conf"] = "./validate_confirm.html";
value["15511"]["prv_alert"] = "";
value["15511"]["prv_image"] = "img/ui_item/light.png";
value["15511"]["prv_invitation"] = "prov_enter_account";
value["15511"]["prv_button_text"] = "";
value["15511"]["prv_mask"] = "50<!^\\d+${7}>";
value["15511"]["prv_group"] = "Таласская горсеть";
value["15511"]["prv_online_check"] = "true";

// Таласская горсеть - оплата пени
value["15550"] = new Array();
value["15550"]["prv_id"] = "15550";
value["15550"]["prv_name"] = "Горсеть - оплата пени";
value["15550"]["prv_folder"] = "zkh";
value["15550"]["prv_page"] = "./cellular.html";
value["15550"]["prv_page_conf"] = "./validate_confirm.html";
value["15550"]["prv_alert"] = "";
value["15550"]["prv_image"] = "img/ui_item/peni.gif";
value["15550"]["prv_invitation"] = "prov_enter_account";
value["15550"]["prv_button_text"] = "";
value["15550"]["prv_mask"] = "50<!^\\d+${7}>";
value["15550"]["prv_group"] = "Горсеть - оплата пени";
value["15550"]["prv_online_check"] = "true";
//Таласская горсеть
////////////////////
////////////////////

//Таласский энергосбыт
//////////////////////
value["talass_energosbyt_folder"] = new Array();
value["talass_energosbyt_folder"]["prv_name"] = "Таласский энергосбыт";
value["talass_energosbyt_folder"]["prv_folder"] = "zkh";
value["talass_energosbyt_folder"]["prv_page"] = "./cellular.html";
value["talass_energosbyt_folder"]["prv_page_conf"] = "./validate_confirm.html";
value["talass_energosbyt_folder"]["prv_alert"] = "";
value["talass_energosbyt_folder"]["prv_image"] = "./img/ui_item/light.png";

//Таласский энергосбыт
value["15512"] = new Array();
value["15512"]["prv_id"] = "15512";
value["15512"]["prv_name"] = "Таласский энергосбыт - Оплата за свет";
value["15512"]["prv_folder"] = "zkh";
value["15512"]["prv_page"] = "./cellular.html";
value["15512"]["prv_page_conf"] = "./validate_confirm.html";
value["15512"]["prv_alert"] = "";
value["15512"]["prv_image"] = "img/ui_item/light.png";
value["15512"]["prv_invitation"] = "prov_enter_account";
value["15512"]["prv_button_text"] = "";
value["15512"]["prv_mask"] = "52<!^\\d+${7}>";
value["15512"]["prv_group"] = "Таласский энергосбыт";
value["15512"]["prv_online_check"] = "true";


// Таласский энергосбыт - оплата пени
value["15551"] = new Array();
value["15551"]["prv_id"] = "15551";
value["15551"]["prv_name"] = "Таласский энергосбыт - оплата пени";
value["15551"]["prv_folder"] = "zkh";
value["15551"]["prv_page"] = "./cellular.html";
value["15551"]["prv_page_conf"] = "./validate_confirm.html";
value["15551"]["prv_alert"] = "";
value["15551"]["prv_image"] = "img/ui_item/peni.gif";
value["15551"]["prv_invitation"] = "prov_enter_account";
value["15551"]["prv_button_text"] = "";
value["15551"]["prv_mask"] = "52<!^\\d+${7}>";
value["15551"]["prv_group"] = "Таласский энергосбыт - оплата пени";
value["15551"]["prv_online_check"] = "true";
//Таласский энергосбыт
//////////////////////
//////////////////////



//Бакайатинский энергосбыт
//////////////////////
value["bakaiatinskii_energosbyt_folder"] = new Array();
value["bakaiatinskii_energosbyt_folder"]["prv_name"] = "Бакайатинский энергосбыт";
value["bakaiatinskii_energosbyt_folder"]["prv_folder"] = "zkh";
value["bakaiatinskii_energosbyt_folder"]["prv_page"] = "./cellular.html";
value["bakaiatinskii_energosbyt_folder"]["prv_page_conf"] = "./validate_confirm.html";
value["bakaiatinskii_energosbyt_folder"]["prv_alert"] = "";
value["bakaiatinskii_energosbyt_folder"]["prv_image"] = "./img/ui_item/light.png";

//Бакайатинский энергосбыт
value["15513"] = new Array();
value["15513"]["prv_id"] = "15513";
value["15513"]["prv_name"] = "Бакайатинский энергосбыт - Оплата за свет";
value["15513"]["prv_folder"] = "zkh";
value["15513"]["prv_page"] = "./cellular.html";
value["15513"]["prv_page_conf"] = "./validate_confirm.html";
value["15513"]["prv_alert"] = "";
value["15513"]["prv_image"] = "img/ui_item/light.png";
value["15513"]["prv_invitation"] = "prov_enter_account";
value["15513"]["prv_button_text"] = "";
value["15513"]["prv_mask"] = "54<!^\\d+${7}>";
value["15513"]["prv_group"] = "Бакайатинский энергосбыт - Оплата за свет";
value["15513"]["prv_online_check"] = "true";

// Бакайатинский энергосбыт - оплата пени
value["15552"] = new Array();
value["15552"]["prv_id"] = "15552";
value["15552"]["prv_name"] = "Бакайатинский энергосбыт - оплата пени";
value["15552"]["prv_folder"] = "zkh";
value["15552"]["prv_page"] = "./cellular.html";
value["15552"]["prv_page_conf"] = "./validate_confirm.html";
value["15552"]["prv_alert"] = "";
value["15552"]["prv_image"] = "img/ui_item/peni.gif";
value["15552"]["prv_invitation"] = "prov_enter_account";
value["15552"]["prv_button_text"] = "";
value["15552"]["prv_mask"] = "54<!^\\d+${7}>";
value["15552"]["prv_group"] = "Бакайатинский энергосбыт - оплата пени";
value["15552"]["prv_online_check"] = "true";
//Бакайатинский энергосбыт
//////////////////////
//////////////////////

//Энерготрейд
value["22172"] = new Array();
value["22172"]["prv_id"] = "22172";
value["22172"]["prv_name"] = "Энерготрейд";
value["22172"]["prv_folder"] = "other";
value["22172"]["prv_page"] = "./cellular.html";
value["22172"]["prv_page_conf"] = "./validate_confirm.html";
value["22172"]["prv_alert"] = "";
value["22172"]["prv_image"] = "img/ui_item/energotreid_logo.png";
value["22172"]["prv_top_image"] = "./img/ui_item/energotreid_logo.png";
value["22172"]["prv_invitation"] = "prov_enter_account";
value["22172"]["prv_button_text"] = "";
value["22172"]["prv_mask"] = "<!^\\d+${7,8}>";
value["22172"]["prv_group"] = "";
value["22172"]["prv_online_check"] = "true";

//Карабууринский энергосбыт
//////////////////////
value["karaburinckii_energosbyt_folder"] = new Array();
value["karaburinckii_energosbyt_folder"]["prv_name"] = "Карабууринский энергосбыт";
value["karaburinckii_energosbyt_folder"]["prv_folder"] = "zkh";
value["karaburinckii_energosbyt_folder"]["prv_page"] = "./cellular.html";
value["karaburinckii_energosbyt_folder"]["prv_page_conf"] = "./validate_confirm.html";
value["karaburinckii_energosbyt_folder"]["prv_alert"] = "";
value["karaburinckii_energosbyt_folder"]["prv_image"] = "./img/ui_item/light.png";

//Карабууринский энергосбыт
value["15514"] = new Array();
value["15514"]["prv_id"] = "15514";
value["15514"]["prv_name"] = "Карабууринский энергосбыт - Оплата за свет";
value["15514"]["prv_folder"] = "zkh";
value["15514"]["prv_page"] = "./cellular.html";
value["15514"]["prv_page_conf"] = "./validate_confirm.html";
value["15514"]["prv_alert"] = "";
value["15514"]["prv_image"] = "img/ui_item/light.png";
value["15514"]["prv_invitation"] = "prov_enter_account";
value["15514"]["prv_button_text"] = "";
value["15514"]["prv_mask"] = "55<!^\\d+${7}>";
value["15514"]["prv_group"] = "Карабууринский энергосбыт";
value["15514"]["prv_online_check"] = "true";

// Бакайатинский энергосбыт - оплата пени
value["15553"] = new Array();
value["15553"]["prv_id"] = "15553";
value["15553"]["prv_name"] = "Карабууринский энергосбыт - оплата пени";
value["15553"]["prv_folder"] = "zkh";
value["15553"]["prv_page"] = "./cellular.html";
value["15553"]["prv_page_conf"] = "./validate_confirm.html";
value["15553"]["prv_alert"] = "";
value["15553"]["prv_image"] = "img/ui_item/peni.gif";
value["15553"]["prv_invitation"] = "prov_enter_account";
value["15553"]["prv_button_text"] = "";
value["15553"]["prv_mask"] = "55<!^\\d+${7}>";
value["15553"]["prv_group"] = "Карабууринский энергосбыт - оплата пени";
value["15553"]["prv_online_check"] = "true";
//Карабууринский энергосбыт
//////////////////////
//////////////////////

//Манаский энергосбыт
//////////////////////
value["manas_energosbyt_folder"] = new Array();
value["manas_energosbyt_folder"]["prv_name"] = "Манаский энергосбыт";
value["manas_energosbyt_folder"]["prv_folder"] = "zkh";
value["manas_energosbyt_folder"]["prv_page"] = "./cellular.html";
value["manas_energosbyt_folder"]["prv_page_conf"] = "./validate_confirm.html";
value["manas_energosbyt_folder"]["prv_alert"] = "";
value["manas_energosbyt_folder"]["prv_image"] = "./img/ui_item/light.png";

//Манаский энергосбыт
value["15515"] = new Array();
value["15515"]["prv_id"] = "15515";
value["15515"]["prv_name"] = "Манаский энергосбыт - Оплата за свет";
value["15515"]["prv_folder"] = "zkh";
value["15515"]["prv_page"] = "./cellular.html";
value["15515"]["prv_page_conf"] = "./validate_confirm.html";
value["15515"]["prv_alert"] = "";
value["15515"]["prv_image"] = "img/ui_item/light.png";
value["15515"]["prv_invitation"] = "prov_enter_account";
value["15515"]["prv_button_text"] = "";
value["15515"]["prv_mask"] = "53<!^\\d+${7}>";
value["15515"]["prv_group"] = "Манаский энергосбыт";
value["15515"]["prv_online_check"] = "true";


// Манаский энергосбыт - оплата пени
value["15554"] = new Array();
value["15554"]["prv_id"] = "15554";
value["15554"]["prv_name"] = "Манаский энергосбыт - оплата пени";
value["15554"]["prv_folder"] = "zkh";
value["15554"]["prv_page"] = "./cellular.html";
value["15554"]["prv_page_conf"] = "./validate_confirm.html";
value["15554"]["prv_alert"] = "";
value["15554"]["prv_image"] = "img/ui_item/peni.gif";
value["15554"]["prv_invitation"] = "prov_enter_account";
value["15554"]["prv_button_text"] = "";
value["15554"]["prv_mask"] = "53<!^\\d+${7}>";
value["15554"]["prv_group"] = "Манаский энергосбыт - оплата пени";
value["15554"]["prv_online_check"] = "true";
//Манаский энергосбыт
//////////////////////
//////////////////////
///////Таласская область свет/////////
//////////////////////////////////////

//Эконом такси
value["15725"] = new Array();
value["15725"]["prv_id"] = "15725";
value["15725"]["prv_name"] = "Эконом такси";
value["15725"]["prv_folder"] = "tax";
value["15725"]["prv_page"] = "./cellular.html";
value["15725"]["prv_page_conf"] = "./validate_confirm.html";
value["15725"]["prv_alert"] = "";
value["15725"]["prv_image"] = "img/ui_item/ekonom_new.png";
value["15725"]["prv_top_image"] = "./img/ui_item/ekonom_new.png";
value["15725"]["prv_invitation"] = "prov_enter_account";
value["15725"]["prv_button_text"] = "";
value["15725"]["prv_mask"] = "<!^\\d+${2,5}>";
value["15725"]["prv_group"] = "";
value["15725"]["prv_online_check"] = "true";


// Salam (SaimaTelekom)
// Comment provider
// value["15724"] = new Array();
// value["15724"]["prv_id"] = "15724";
// value["15724"]["prv_name"] = 'Salam';
// value["15724"]["prv_folder"] = "";
// value["15724"]["prv_page"] = "./cellular.html";
// value["15724"]["prv_page_conf"] = "./validate_confirm.html";
// value["15724"]["prv_alert"] = "";
// value["15724"]["prv_image"] = "./img/ui_item/salam_logo_red100_100.png";
// value["15724"]["prv_top_image"] = "";
// value["15724"]["prv_is_cellular"] = false;
// value["15724"]["prv_invitation"] = "prov_enter_acc_or_phone";
// value["15724"]["prv_button_text"] = "";
// value["15724"]["prv_mask"] = "(0611)901<!^\\d+${3}>";
// value["15724"]["prv_group"] = "";
// value["15724"]["prv_online_check"] = "true";
// value["15724"]["prv_receipt_extra_message"] = "";

////Fair Play
//value["15231"] = new Array();
//value["15231"]["prv_id"] = "15231";
//value["15231"]["prv_name"] = 'Fair Play';
//value["15231"]["prv_folder"] = "content";
//value["15231"]["prv_page"] = "./provider.html";
//value["15231"]["prv_page_conf"] = "./validate_confirm.html";
//value["15231"]["prv_alert"] = "";
//value["15231"]["prv_image"] = "img/ui_item/Fair_Play_100x100_px.png";
//value["15231"]["prv_top_image"] = "img/ui_item/Fair_Play_100x100_px.png";
//value["15231"]["prv_is_cellular"] = false;
//value["15231"]["prv_invitation"] = "prov_enter_account";
//value["15231"]["prv_button_text"] = "";
//value["15231"]["prv_mask"] = "<!^.+${3,40}>";
//value["15231"]["prv_group"] = "";
//value["15231"]["prv_online_check"] = "true";

//ЧП Осмонова UniSom
// Comment provider
// value["14365"] = new Array();
// value["14365"]["prv_id"] = "14365";
// value["14365"]["prv_name"] = "UniSom";
// value["14365"]["prv_folder"] = "tax";
// value["14365"]["prv_page"] = "./cellular.html";
// value["14365"]["prv_page_conf"] = "./validate_confirm.html";
// value["14365"]["prv_alert"] = "";
// value["14365"]["prv_image"] = "img/ui_item/unisom_100x100.png";
// value["14365"]["prv_top_image"] = "./img/ui_item/unisom_100x100.png";
// value["14365"]["prv_invitation"] = "prov_enter_account";
// value["14365"]["prv_button_text"] = "";
// value["14365"]["prv_mask"] = "<!^\\d+${7}>";
// value["14365"]["prv_group"] = "";
// value["14365"]["prv_online_check"] = "true";




///////СеверЭлектро Бишкек Юр. лица/////////

//Октябрьский район - юр.лица
value["15846"] = new Array();
value["15846"]["prv_id"] = "15846";
value["15846"]["prv_name"] = "Октябрьский район - юр.лица";
value["15846"]["prv_folder"] = "zkh";
value["15846"]["prv_page"] = "./cellular.html";
value["15846"]["prv_page_conf"] = "./validate_confirm.html";
value["15846"]["prv_alert"] = "";
value["15846"]["prv_image"] = "img/ui_item/light.png";
value["15846"]["prv_invitation"] = "prov_enter_account";
value["15846"]["prv_button_text"] = "";
value["15846"]["prv_mask"] = "<!^\\d+${1,6}>";
value["15846"]["prv_group"] = "Октябрьский район - юр.лица";
value["15846"]["prv_online_check"] = "true";
////////////////////
////////////////////


//Первомайский район - юр.лица
value["15847"] = new Array();
value["15847"]["prv_id"] = "15847";
value["15847"]["prv_name"] = "Первомайский район - юр.лица";
value["15847"]["prv_folder"] = "zkh";
value["15847"]["prv_page"] = "./cellular.html";
value["15847"]["prv_page_conf"] = "./validate_confirm.html";
value["15847"]["prv_alert"] = "";
value["15847"]["prv_image"] = "img/ui_item/light.png";
value["15847"]["prv_invitation"] = "prov_enter_account";
value["15847"]["prv_button_text"] = "";
value["15847"]["prv_mask"] = "<!^\\d+${1,6}>";
value["15847"]["prv_group"] = "Первомайский район - юр.лица";
value["15847"]["prv_online_check"] = "true";





//Ленинский район - юр.лица
value["15848"] = new Array();
value["15848"]["prv_id"] = "15848";
value["15848"]["prv_name"] = "Ленинский район - юр.лица";
value["15848"]["prv_folder"] = "zkh";
value["15848"]["prv_page"] = "./cellular.html";
value["15848"]["prv_page_conf"] = "./validate_confirm.html";
value["15848"]["prv_alert"] = "";
value["15848"]["prv_image"] = "img/ui_item/light.png";
value["15848"]["prv_invitation"] = "prov_enter_account";
value["15848"]["prv_button_text"] = "";
value["15848"]["prv_mask"] = "<!^\\d+${1,6}>";
value["15848"]["prv_group"] = "Ленинский район - юр.лица";
value["15848"]["prv_online_check"] = "true";







//Свердловский район - юр.лица
value["15849"] = new Array();
value["15849"]["prv_id"] = "15849";
value["15849"]["prv_name"] = "Свердловский район - юр.лица";
value["15849"]["prv_folder"] = "zkh";
value["15849"]["prv_page"] = "./cellular.html";
value["15849"]["prv_page_conf"] = "./validate_confirm.html";
value["15849"]["prv_alert"] = "";
value["15849"]["prv_image"] = "img/ui_item/light.png";
value["15849"]["prv_invitation"] = "prov_enter_account";
value["15849"]["prv_button_text"] = "";
value["15849"]["prv_mask"] = "<!^\\d+${1,6}>";
value["15849"]["prv_group"] = "Свердловский район - юр.лица";
value["15849"]["prv_online_check"] = "true";



//Фидер Костромская - юр.лица
//value["15850"] = new Array();
//value["15850"]["prv_id"] = "15850";
//value["15850"]["prv_name"] = "Фидер Костромская - юр.лица";
//value["15850"]["prv_folder"] = "zkh";
//value["15850"]["prv_page"] = "./cellular.html";
//value["15850"]["prv_page_conf"] = "./validate_confirm.html";
//value["15850"]["prv_alert"] = "";
//value["15850"]["prv_image"] = "img/ui_item/light.png";
//value["15850"]["prv_invitation"] = "prov_enter_account";
//value["15850"]["prv_button_text"] = "";
//value["15850"]["prv_mask"] = "<!^\\d+${1,6}>";
//value["15850"]["prv_group"] = "Фидер Костромская - юр.лица";
//value["15850"]["prv_online_check"] = "true";

////Фидер Костромская - юр.лица
//value["15852"] = new Array();
//value["15852"]["prv_id"] = "15852";
//value["15852"]["prv_name"] = "15852";
//value["15852"]["prv_folder"] = "zkh";
//value["15852"]["prv_page"] = "./cellular.html";
//value["15852"]["prv_page_conf"] = "./validate_confirm.html";
//value["15852"]["prv_alert"] = "";
//value["15852"]["prv_image"] = "img/ui_item/light.png";
//value["15852"]["prv_invitation"] = "prov_enter_account";
//value["15852"]["prv_button_text"] = "";
//value["15852"]["prv_mask"] = "<!^\\d+${1,6}>";
//value["15852"]["prv_group"] = "Фидер Костромская - юр.лица";
//value["15852"]["prv_online_check"] = "true";

////Фидер Костромская - юр.лица
//value["15853"] = new Array();
//value["15853"]["prv_id"] = "15853";
//value["15853"]["prv_name"] = "15853";
//value["15853"]["prv_folder"] = "zkh";
//value["15853"]["prv_page"] = "./cellular.html";
//value["15853"]["prv_page_conf"] = "./validate_confirm.html";
//value["15853"]["prv_alert"] = "";
//value["15853"]["prv_image"] = "img/ui_item/light.png";
//value["15853"]["prv_invitation"] = "prov_enter_account";
//value["15853"]["prv_button_text"] = "";
//value["15853"]["prv_mask"] = "<!^\\d+${1,6}>";
//value["15853"]["prv_group"] = "Фидер Костромская - юр.лица";
//value["15853"]["prv_online_check"] = "true";
////////////////////
////////////////////



//«Лаборатория Бонецкого» Просмотр анализов
// Comment provider
// value["15970"] = new Array();
// value["15970"]["prv_id"] = "15970";
// value["15970"]["prv_name"] = "«Лаборатория Бонецкого» Получение анализов";
// value["15970"]["prv_folder"] = "tax";
// value["15970"]["prv_page"] = "./provider.html";
// value["15970"]["prv_page_conf"] = "./validate_confirm.html";
// value["15970"]["prv_alert"] = "";
// value["15970"]["prv_image"] = "img/ui_item/intelmed100x100.png";
// value["15970"]["prv_top_image"] = "./img/ui_item/intelmed100x100.png";
// value["15970"]["prv_invitation"] = "prov_enter_account";
// value["15970"]["prv_button_text"] = "";
// vvalue["15970"]["prv_mask"] = "<!^.+${7}>";
// value["15970"]["prv_group"] = "";
// value["15970"]["prv_online_check"] = "true";


//100 Платежей, DOSHCARD
//value["15968"] = new Array();
//value["15968"]["prv_id"] = "15968";
//value["15968"]["prv_name"] = "DOSHCARD";
//value["15968"]["prv_folder"] = "tax";
//value["15968"]["prv_page"] = "./cellular.html";
//value["15968"]["prv_page_conf"] = "./validate_confirm.html";
//value["15968"]["prv_alert"] = "";
//value["15968"]["prv_image"] = "img/ui_item/doshcard100_100.png";
//value["15968"]["prv_top_image"] = "./img/ui_item/doshcard100_100.png";
//value["15968"]["prv_invitation"] = "prov_enter_account";
//value["15968"]["prv_button_text"] = "";
//value["15968"]["prv_mask"] = "<!^\\d+${5}>";
//value["15968"]["prv_group"] = "";
//value["15968"]["prv_online_check"] = "true";

//Мобильный кошелек UMAI.KG
value["15969"] = new Array();
value["15969"]["prv_id"] = "15969";
value["15969"]["prv_name"] = "Мобильный кошелек UMAI.KG";
value["15969"]["prv_folder"] = "tax";
value["15969"]["prv_page"] = "./cellular.html";
value["15969"]["prv_page_conf"] = "./validate_confirm.html";
value["15969"]["prv_alert"] = "";
value["15969"]["prv_image"] = "img/ui_item/Umai100_100.png";
value["15969"]["prv_top_image"] = "./img/ui_item/Umai100_100.png";
value["15969"]["prv_invitation"] = "prov_enter_account";
value["15969"]["prv_button_text"] = "";
value["15969"]["prv_mask"] = "996<!^\\d+${9}>";
value["15969"]["prv_group"] = "";
value["15969"]["prv_online_check"] = "true";

//// Aknet Оборудование
//value["15974"] = new Array();
//value["15974"]["prv_id"] = "15974";
//value["15974"]["prv_name"] = "Оплата за Оборудование";
//value["15974"]["prv_folder"] = "other";
//value["15974"]["prv_page"] = "./cellular.html";
//value["15974"]["prv_image"] = "img/ui_item/aknet-tv.png";
//value["15974"]["prv_top_image"] = "./img/ui_item/aknet-tv.png";
//value["15974"]["prv_page_conf"] = "./validate_confirm.html";
//value["15974"]["prv_alert"] = "";
//value["15974"]["prv_invitation"] = "prov_enter_code";
//value["15974"]["prv_button_text"] = "";
//value["15974"]["prv_mask"] = "<!^\\d+${2,7}>";
//value["15974"]["prv_group"] = "АКНЕТ";
//value["15974"]["prv_online_check"] = "true";

//////////////////////
//ОО "Дирекция международного марафона"
value["dmm_folder"] = new Array();
value["dmm_folder"]["prv_name"] = "Run the silk Road";
value["dmm_folder"]["prv_folder"] = "other";
value["dmm_folder"]["prv_page"] = "./cellular.html";
value["dmm_folder"]["prv_page_conf"] = "./validate_confirm.html";
value["dmm_folder"]["prv_alert"] = "";
value["dmm_folder"]["prv_image"] = "./img/ui_item/dmm100_100.png";

//ДММ Регистрационный взнос
value["15976"] = new Array();
value["15976"]["prv_id"] = "15976";
value["15976"]["prv_name"] = "Регистрационный взнос";
value["15976"]["prv_folder"] = "other";
value["15976"]["prv_page"] = "./cellular.html";
value["15976"]["prv_page_conf"] = "./validate_confirm.html";
value["15976"]["prv_alert"] = "";
value["15976"]["prv_image"] = "img/ui_item/dmm100_100.png";
value["15976"]["prv_top_image"] = "./img/ui_item/dmm100_100.png";
value["15976"]["prv_invitation"] = "prov_enter_account";
value["15976"]["prv_button_text"] = "";
value["15976"]["prv_mask"] = "<!^.+${6}>";
value["15976"]["prv_group"] = "";
value["15976"]["prv_online_check"] = "true";


//ДММ Проезд
value["15977"] = new Array();
value["15977"]["prv_id"] = "15977";
value["15977"]["prv_name"] = "Проезд";
value["15977"]["prv_folder"] = "other";
value["15977"]["prv_page"] = "./cellular.html";
value["15977"]["prv_page_conf"] = "./validate_confirm.html";
value["15977"]["prv_alert"] = "";
value["15977"]["prv_image"] = "img/ui_item/dmm100_100.png";
value["15977"]["prv_top_image"] = "./img/ui_item/dmm100_100.png";
value["15977"]["prv_invitation"] = "prov_enter_account";
value["15977"]["prv_button_text"] = "";
value["15977"]["prv_mask"] = "<!^.+${6}>";
value["15977"]["prv_group"] = "";
value["15977"]["prv_online_check"] = "true";

//ДММ Проживание
value["15978"] = new Array();
value["15978"]["prv_id"] = "15978";
value["15978"]["prv_name"] = "Проживание";
value["15978"]["prv_folder"] = "other";
value["15978"]["prv_page"] = "./cellular.html";
value["15978"]["prv_page_conf"] = "./validate_confirm.html";
value["15978"]["prv_alert"] = "";
value["15978"]["prv_image"] = "img/ui_item/dmm100_100.png";
value["15978"]["prv_top_image"] = "./img/ui_item/dmm100_100.png";
value["15978"]["prv_invitation"] = "prov_enter_account";
value["15978"]["prv_button_text"] = "";
value["15978"]["prv_mask"] = "<!^.+${6}>";
value["15978"]["prv_group"] = "";
value["15978"]["prv_online_check"] = "true";


//ДММ регистрация
value["16244"] = new Array();
value["16244"]["prv_id"] = "16244";
value["16244"]["prv_name"] = 'ДММ';
value["16244"]["prv_folder"] = "bank";
value["16244"]["prv_page"] = "./dmm_redirect.html";
value["16244"]["prv_page_conf"] = "./validate_confirm.html";
value["16244"]["prv_alert"] = "";
value["16244"]["prv_image"] = "./img/ui_item/dmm100_100.png";
value["16244"]["prv_top_image"] = "./img/ui_item/dmm100_100.png";
value["16244"]["prv_is_cellular"] = false;
value["16244"]["prv_invitation"] = "prov_enter_inn";
value["16244"]["prv_button_text"] = "";
value["16244"]["prv_mask"] = "<!^\\.+${1,30}>";
value["16244"]["prv_group"] = "Почтовая служба";
value["16244"]["prv_online_check"] = "false";
value["16244"]["prv_receipt_extra_message"] = "";
////////////////////////////////////////////
////////////////////////////////////////////


//////////////////////
//AVN услуги
value["avn_folder"] = new Array();
value["avn_folder"]["prv_name"] = "оплата за обучение";
value["avn_folder"]["prv_folder"] = "other";
value["avn_folder"]["prv_page"] = "./cellular.html";
value["avn_folder"]["prv_page_conf"] = "./validate_confirm.html";
value["avn_folder"]["prv_alert"] = "";
value["avn_folder"]["prv_image"] = "./img/ui_item/AVN100x100.png";

//AVN услуга Росинбанка КГТУ
// Comment provider
// value["15702"] = new Array();
// value["15702"]["prv_id"] = "15702";
// value["15702"]["prv_name"] = "КГТУ";
// value["15702"]["prv_folder"] = "other";
// value["15702"]["prv_page"] = "./cellular_tazalyk.html";
// value["15702"]["prv_page_conf"] = "./validate_confirm.html";
// value["15702"]["prv_alert"] = "Комиссия за услугу «Оплата за обучение» составляет 20 сом, которую вы должны внести сверху указанной суммы.";
// value["15702"]["prv_image"] = "img/ui_item/kgtu100_100.png";
// value["15702"]["prv_top_image"] = "./img/ui_item/kgtu100_100.png";
// value["15702"]["prv_invitation"] = "prov_enter_account";
// value["15702"]["prv_button_text"] = "";
// value["15702"]["prv_mask"] = "<!^\\.+${1,30}>";
// value["15702"]["prv_group"] = "AVN оплата за обучение";
// value["15702"]["prv_online_check"] = "true";

//AVN услуга  ОШГУ
// Comment provider
// value["16067"] = new Array();
// value["16067"]["prv_id"] = "16067";
// value["16067"]["prv_name"] = "ОШГУ";
// value["16067"]["prv_folder"] = "other";
// value["16067"]["prv_page"] = "./cellular_tazalyk.html";
// value["16067"]["prv_page_conf"] = "./validate_confirm.html";
// value["16067"]["prv_alert"] = "Комиссия за услугу «Оплата за обучение» составляет 20 сом, которую вы должны внести сверху указанной суммы.";
// value["16067"]["prv_image"] = "img/ui_item/OSHGU.png";
// value["16067"]["prv_top_image"] = "./img/ui_item/OSHGU.png";
// value["16067"]["prv_invitation"] = "prov_enter_account";
// value["16067"]["prv_button_text"] = "";
// value["16067"]["prv_mask"] = "<!^\\.+${1,30}>";
// value["16067"]["prv_group"] = "AVN оплата за обучение";
// value["16067"]["prv_online_check"] = "true";

//Хостинг MyHost.KG
value["16099"] = new Array();
value["16099"]["prv_id"] = "16099";
value["16099"]["prv_name"] = "MyHost.KG";
value["16099"]["prv_folder"] = "other";
value["16099"]["prv_page"] = "./cellular.html";
value["16099"]["prv_page_conf"] = "./validate_confirm.html";
value["16099"]["prv_alert"] = "Тех. поддержка:<br/>0312 986 896<br/>0550 986 896<br/><br/>Веб сайт:<br/>www.myhost.kg<br/><br/>Отдел продаж:<br/>sales@myhost.kg";
value["16099"]["prv_image"] = "img/ui_item/myhost.png";
value["16099"]["prv_top_image"] = "./img/ui_item/myhost.png";
value["16099"]["prv_invitation"] = "prov_enter_account";
value["16099"]["prv_button_text"] = "";
value["16099"]["prv_mask"] = "<!^.+${1,6}>";
value["16099"]["prv_group"] = "Оплата за хостинг";
value["16099"]["prv_online_check"] = "true";

//Diesel Taxi
//value["16195"] = new Array();
//value["16195"]["prv_id"] = "16195";
//value["16195"]["prv_name"] = "Diesel Taxi";
//value["16195"]["prv_folder"] = "tax";
//value["16195"]["prv_page"] = "./cellular.html";
//value["16195"]["prv_page_conf"] = "./validate_confirm.html";
//value["16195"]["prv_alert"] = "";
//value["16195"]["prv_image"] = "img/ui_item/diesel_taxi.png";
//value["16195"]["prv_top_image"] = "./img/ui_item/diesel_taxi.png";
//value["16195"]["prv_invitation"] = "prov_enter_account";
//value["16195"]["prv_button_text"] = "";
//value["16195"]["prv_mask"] = "<!^\\d+${10}>";
//value["16195"]["prv_group"] = "";
//value[/*"15725*/"16195"]["prv_online_check"] = "true";

//TIME Taxi
value["16196"] = new Array();
value["16196"]["prv_id"] = "16196";
value["16196"]["prv_name"] = "TIME Taxi";
value["16196"]["prv_folder"] = "tax";
value["16196"]["prv_page"] = "./cellular.html";
value["16196"]["prv_page_conf"] = "./validate_confirm.html";
value["16196"]["prv_alert"] = "";
value["16196"]["prv_image"] = "img/ui_item/time_taxi100_100.png";
value["16196"]["prv_top_image"] = "./img/ui_item/time_taxi100_100.png";
value["16196"]["prv_invitation"] = "prov_enter_account";
value["16196"]["prv_button_text"] = "";
value["16196"]["prv_mask"] = "<!^\\d+${10}>";
value["16196"]["prv_group"] = "";
value[/*"15725*/"16196"]["prv_online_check"] = "true";

//Jorgo 'Taxi'
value["16243"] = new Array();
value["16243"]["prv_id"] = "16243";
value["16243"]["prv_name"] = "Jorgo 'Taxi'";
value["16243"]["prv_folder"] = "tax";
value["16243"]["prv_page"] = "./cellular.html";
value["16243"]["prv_page_conf"] = "./validate_confirm.html";
value["16243"]["prv_alert"] = "";
value["16243"]["prv_image"] = "img/ui_item/jorgo100x100.png";
value["16243"]["prv_top_image"] = "./img/ui_item/jorgo100x100.png";
value["16243"]["prv_invitation"] = "prov_enter_account";
value["16243"]["prv_button_text"] = "";
value["16243"]["prv_mask"] = "5 <!^\\d+${5}>";
value["16243"]["prv_group"] = "";
value["16243"]["prv_online_check"] = "true";

//ОО «Алгыр Куш» (школа 87) - членский взнос
value["22206"] = new Array();
value["22206"]["prv_id"] = "22206";
value["22206"]["prv_name"] = "ОО «Алгыр Куш» (школа 87) - членский взнос";
value["22206"]["prv_folder"] = "tax";
value["22206"]["prv_page"] = "./cellular.html";
value["22206"]["prv_page_conf"] = "./validate_confirm.html";
value["22206"]["prv_alert"] = "";
value["22206"]["prv_image"] = "img/ui_item/algyr_kush_logo.png";
value["22206"]["prv_top_image"] = "./img/ui_item/algyr_kush_logo.png";
value["22206"]["prv_invitation"] = "prov_enter_account";
value["22206"]["prv_button_text"] = "";
value["22206"]["prv_mask"] = "<!^\\d+${1,4}>";
value["22206"]["prv_group"] = "";
value["22206"]["prv_online_check"] = "true";

//Ustalar.kg - заказ услуг онлайн
value["22169"] = new Array();
value["22169"]["prv_id"] = "22169";
value["22169"]["prv_name"] = "Ustalar.kg - заказ услуг онлайн";
value["22169"]["prv_folder"] = "other";
value["22169"]["prv_page"] = "./cellular.html";
value["22169"]["prv_page_conf"] = "./validate_confirm.html";
value["22169"]["prv_alert"] = "";
value["22169"]["prv_image"] = "img/ui_item/ustalarkg_logo.png";
value["22169"]["prv_top_image"] = "./img/ui_item/ustalarkg_logo.png";
value["22169"]["prv_invitation"] = "prov_enter_phone";
value["22169"]["prv_button_text"] = "";
value["22169"]["prv_mask"] = "0 (<!^d+${3}>) <!^d+${6}>";
value["22169"]["prv_group"] = "";
value["22169"]["prv_online_check"] = "true";



///--------------------------Провайдеры Казахстана-------/////
value["kazahstan_mobile"] = new Array();
value["kazahstan_mobile"]["prv_name"] = "Сотовая связь";
value["kazahstan_mobile"]["prv_image"] = "./img/ui/cfk/button_cell.png";



//Kcell (Казахстан) (KazMoneyUnion)
value["16199"] = new Array();
value["16199"]["prv_id"] = "16199";
value["16199"]["prv_name"] = "Kcell";
value["16199"]["prv_folder"] = "tax";
value["16199"]["prv_page"] = "./cellular.html";
value["16199"]["prv_page_conf"] = "./validate_confirm.html";
value["16199"]["prv_alert"] = "";
value["16199"]["prv_image"] = "img/ui_item/Kcell.png";
value["16199"]["prv_top_image"] = "./img/ui_item/Kcell.png";
value["16199"]["prv_invitation"] = "prov_enter_phone";
value["16199"]["prv_button_text"] = "";
value["16199"]["prv_mask"] = "<!^\\d+${10}>";
value["16199"]["prv_group"] = "Казахстан";
value["16199"]["prv_online_check"] = "true";


//Алтел (Казахстан) (KazMoneyUnion)
value["16211"] = new Array();
value["16211"]["prv_id"] = "16211";
value["16211"]["prv_name"] = "ALTEL";
value["16211"]["prv_folder"] = "tax";
value["16211"]["prv_page"] = "./cellular.html";
value["16211"]["prv_page_conf"] = "./validate_confirm.html";
value["16211"]["prv_alert"] = "";
value["16211"]["prv_image"] = "img/ui_item/altel.png";
value["16211"]["prv_top_image"] = "./img/ui_item/altel.png";
value["16211"]["prv_invitation"] = "prov_enter_phone";
value["16211"]["prv_button_text"] = "";
value["16211"]["prv_mask"] = "<!^\\d+${10}>";
value["16211"]["prv_group"] = "Казахстан";
value["16211"]["prv_online_check"] = "true";

//Билайн (Казахстан) (KazMoneyUnion)
value["16212"] = new Array();
value["16212"]["prv_id"] = "16212";
value["16212"]["prv_name"] = "Билайн";
value["16212"]["prv_folder"] = "tax";
value["16212"]["prv_page"] = "./cellular.html";
value["16212"]["prv_page_conf"] = "./validate_confirm.html";
value["16212"]["prv_alert"] = "";
value["16212"]["prv_image"] = "img/ui_item/beeline.png";
value["16212"]["prv_top_image"] = "./img/ui_item/beeline.png";
value["16212"]["prv_invitation"] = "prov_enter_phone";
value["16212"]["prv_button_text"] = "";
value["16212"]["prv_mask"] = "<!^\\d+${10}>";
value["16212"]["prv_group"] = "";
value["16212"]["prv_online_check"] = "true";


// Спарта: Война империй (KazMoneyUnion)
value["16214"] = new Array();
value["16214"]["prv_id"] = "16214";
value["16214"]["prv_name"] = 'Спарта: Война империй';
value["16214"]["prv_folder"] = "content";
value["16214"]["prv_page"] = "./provider.html";
value["16214"]["prv_page_conf"] = "./validate_confirm.html";
value["16214"]["prv_alert"] = "";
value["16214"]["prv_image"] = "img/ui_item/spartamailru.png";
value["16214"]["prv_top_image"] = "img/ui_item/spartamailru.png";
value["16214"]["prv_is_cellular"] = false;
value["16214"]["prv_invitation"] = "prov_enter_nik_in_game";
value["16214"]["prv_button_text"] = "";
value["16214"]["prv_mask"] = "<!^.+${1,33}>";
value["16214"]["prv_group"] = "Интернет игры";
value["16214"]["prv_online_check"] = "true";

// Мини-игры@Mail.ru (KazMoneyUnion)
// Comment provider
// value["16215"] = new Array();
// value["16215"]["prv_id"] = "16215";
// value["16215"]["prv_name"] = 'Мини-игры@Mail.ru';
// value["16215"]["prv_folder"] = "content";
// value["16215"]["prv_page"] = "./provider.html";
// value["16215"]["prv_page_conf"] = "./validate_confirm.html";
// value["16215"]["prv_alert"] = "";
// value["16215"]["prv_image"] = "img/ui_item/MiniGamesMailRu.png";
// value["16215"]["prv_top_image"] = "img/ui_item/MiniGamesMailRu.png";
// value["16215"]["prv_is_cellular"] = false;
// value["16215"]["prv_invitation"] = "prov_enter_email";
// value["16215"]["prv_button_text"] = "";
// value["16215"]["prv_mask"] = "<!^.+${1,33}>";
// value["16215"]["prv_group"] = "Интернет игры";
// value["16215"]["prv_online_check"] = "true";


//SPORTKLON (КФЦ)
// Comment provider
// value["16197"] = new Array();
// value["16197"]["prv_id"] = "16197";
// value["16197"]["prv_name"] = 'SPORTKLON';
// value["16197"]["prv_folder"] = "content";
// value["16197"]["prv_page"] = "./provider.html";
// value["16197"]["prv_page_conf"] = "./validate_confirm.html";
// value["16197"]["prv_alert"] = "";
// value["16197"]["prv_image"] = "img/ui_item/sportklon-logo_2.png";
// value["16197"]["prv_top_image"] = "img/ui_item/sportklon-logo_2.png";
// value["16197"]["prv_is_cellular"] = false;
// value["16197"]["prv_invitation"] = "prov_enter_login";
// value["16197"]["prv_button_text"] = "";
// value["16197"]["prv_mask"] = "<!^.+${1,30}>";
// value["16197"]["prv_group"] = "";
// value["16197"/*"13647"*/]["prv_online_check"] = "false";

// ОФ  "Келечек ХП" (в поддержку детей с инвалидностью)
// Comment provider
// value["16271"] = new Array();
// value["16271"]["prv_id"] = "16271";
// value["16271"]["prv_name"] = 'ОФ  "Келечек ХП" (в поддержку детей с инвалидностью)';
// value["16271"]["prv_folder"] = "other";
// value["16271"]["prv_page"] = "./cellular.html";
// value["16271"]["prv_page_conf"] = "./validate_confirm.html";
// value["16271"]["prv_alert"] = "";
// value["16271"]["prv_image"] = "img/ui_item/kelechek_help_prom.png";
// value["16271"]["prv_top_image"] = "img/ui_item/kelechek_help_prom.png";
//value["15699"]["prv_is_cellular"] = false;
// value["16271"]["prv_invitation"] = "prov_enter_phone";
// value["16271"]["prv_button_text"] = "";
// value["16271"]["prv_mask"] = "0(<!^\\d+${3}>)<!^\\d+${6}>";
// value["16271"]["prv_group"] = "Благотворительность";
// value["16271"]["prv_online_check"] = "false";

// Поиск Репетиторов
value["16274"] = new Array();
value["16274"]["prv_id"] = "16274";
value["16274"]["prv_name"] = 'Поиск Репетиторов';
value["16274"]["prv_folder"] = "content";
value["16274"]["prv_page"] = "./cellular.html";
value["16274"]["prv_page_conf"] = "./validate_confirm.html";
value["16274"]["prv_alert"] = "";
value["16274"]["prv_image"] = "img/ui_item/poisk_repetitorov.png";
value["16274"]["prv_top_image"] = "img/ui_item/poisk_repetitorov.png";
value["16274"]["prv_is_cellular"] = false;
value["16274"]["prv_invitation"] = "prov_enter_code";
value["16274"]["prv_button_text"] = "";
value["16274"]["prv_mask"] = "<!^\\d+${5}>";
value["16274"]["prv_group"] = "Поиск Репетиторов";
value["16274"]["prv_online_check"] = "true";

// 	Air Manas
value["16272"] = new Array();
value["16272"]["prv_id"] = "16272";
value["16272"]["prv_name"] = 'Air Manas';
value["16272"]["prv_folder"] = "content";
value["16272"]["prv_page"] = "./cellular.html";
value["16272"]["prv_page_conf"] = "./validate_confirm.html";
value["16272"]["prv_alert"] = "";
value["16272"]["prv_image"] = "img/ui_item/air-manas.png";
value["16272"]["prv_top_image"] = "img/ui_item/air-manas.png";
value["16272"]["prv_is_cellular"] = false;
value["16272"]["prv_invitation"] = "prov_enter_code";
value["16272"]["prv_button_text"] = "";
value["16272"]["prv_mask"] = "<!^\\d+${6}>";
value["16272"]["prv_group"] = "";
value["16272"]["prv_online_check"] = "true";

//Namba Taxi - кошелек
// Comment provider
// value["16408"] = new Array();
// value["16408"]["prv_id"] = "16408";
// value["16408"]["prv_name"] = "Намба-такси баланс для клиента";
// value["16408"]["prv_folder"] = "tax";
// value["16408"]["prv_page"] = "./cellular.html";
// value["16408"]["prv_page_conf"] = "./validate_confirm.html";
// value["16408"]["prv_alert"] = "";
// value["16408"]["prv_image"] = "img/ui_item/namba_taxi_klient.png";
// value["16408"]["prv_top_image"] = "./img/ui_item/namba_taxi_klient.png";
// value["16408"]["prv_invitation"] = "prov_enter_phone";
// value["16408"]["prv_button_text"] = "";
// value["16408"]["prv_mask"] = "0<!^\\d+${9}>";
// value["16408"]["prv_group"] = "";
// value["16408"]["prv_online_check"] = "true";

// Megaline - TV
value["16422"] = new Array();
value["16422"]["prv_id"] = "16422";
value["16422"]["prv_name"] = "Megaline";
value["16422"]["prv_folder"] = "internet";
value["16422"]["prv_page"] = "./cellular.html";
value["16422"]["prv_page_conf"] = "./validate_confirm.html";
value["16422"]["prv_image"] = "img/ui_item/mega_smart.png";
value["16422"]["prv_alert"] = "Услуга Мега-Смарт предоставляется совместно ОсОО «Inform Communication».";
value["16422"]["prv_invitation"] = "prov_enter_code";
value["16422"]["prv_button_text"] = "";
value["16422"]["prv_mask"] = "<!^\\d+${1,20}>";
value["16422"]["prv_group"] = "Интернет-услуги";
value["16422"]["prv_online_check"] = "true";

//carfax.kg
value["16843"] = new Array();
value["16843"]["prv_id"] = "16843";
value["16843"]["prv_name"] = "carfax.kg";
value["16843"]["prv_folder"] = "other";
value["16843"]["prv_page"] = "./cellular.html";
value["16843"]["prv_page_conf"] = "./validate_confirm.html";
value["16843"]["prv_alert"] = "";
value["16843"]["prv_image"] = "img/ui_item/Carfax100_100.png";
value["16843"]["prv_top_image"] = "./img/ui_item/Carfax100_100.png";
value["16843"]["prv_invitation"] = "prov_enter_account";
value["16843"]["prv_button_text"] = "";
value["16843"]["prv_mask"] = "<!^\\d+${6}>";
value["16843"]["prv_group"] = "";
value["16843"]["prv_online_check"] = "true";


//keyDriver интернет-агрегатор услуг пассажирских перевозок
// Delete provider
// value["17101"] = new Array();
// value["17101"]["prv_id"] = "17101";
// value["17101"]["prv_name"] = "keyDriver пополнение баланса";
// value["17101"]["prv_folder"] = "other";
// value["17101"]["prv_page"] = "./cellular.html";
// value["17101"]["prv_page_conf"] = "./validate_confirm.html";
// value["17101"]["prv_alert"] = "";
// value["17101"]["prv_image"] = "img/ui_item/keyDriver.png";
// value["17101"]["prv_top_image"] = "./img/ui_item/keyDriver.png";
// value["17101"]["prv_invitation"] = "prov_enter_account";
// value["17101"]["prv_button_text"] = "";
// value["17101"]["prv_mask"] = "<!^\\d+${6}>";
// value["17101"]["prv_group"] = "";
// value["17101"]["prv_online_check"] = "true";

////Благотворительная акция от НТС “Скажи спасибо сегодня!”
//value["17100"] = new Array();
//value["17100"]["prv_id"] = "17100";
//value["17100"]["prv_name"] = 'Акция от НТС “Скажи спасибо сегодня!”';
//value["17100"]["prv_folder"] = "other";
//value["17100"]["prv_page"] = "./cellular.html";
//value["17100"]["prv_page_conf"] = "./validate_confirm.html";
//value["17100"]["prv_alert"] = "";
//value["17100"]["prv_image"] = "img/ui_item/NTS_100_100.png";
//value["17100"]["prv_top_image"] = "img/ui_item/NTS_100_100.png";
//value["17100"]["prv_invitation"] = "prov_enter_phone";
//value["17100"]["prv_button_text"] = "";
//value["17100"]["prv_mask"] = "0(<!^\\d+${3}>)<!^\\d+${6}>";
//value["17100"]["prv_group"] = "Благотворительность";
//value["17100"]["prv_online_check"] = "false";


// NeoTelecom - интернет
value["22001"] = new Array();
value["22001"]["prv_id"] = "22001";
value["22001"]["prv_name"] = 'NeoTelecom';
value["22001"]["prv_folder"] = "content";
value["22001"]["prv_page"] = "./cellular.html";
value["22001"]["prv_page_conf"] = "./validate_confirm.html";
value["22001"]["prv_alert"] = "";
value["22001"]["prv_image"] = "img/ui_item/SmartMetro.png";
value["22001"]["prv_top_image"] = "img/ui_item/SmartMetro.png";
value["22001"]["prv_is_cellular"] = false;
value["22001"]["prv_invitation"] = "prov_enter_code";
value["22001"]["prv_button_text"] = "";
value["22001"]["prv_mask"] = "<!^\\d+${6,12}>";
value["22001"]["prv_group"] = "";
value["22001"]["prv_online_check"] = "true";

//КНУ им. Ж.Баласагына
value["KNUakademia"] = new Array();
value["KNUakademia"]["prv_name"] = "КНУ им. Ж.Баласагына";
value["KNUakademia"]["prv_image"] = "./img/ui_item/knu.png";

// КНУ оплата за проживание в общежитиях
value["22002"] = new Array();
value["22002"]["prv_id"] = "22002";
value["22002"]["prv_name"] = 'оплата за проживание в общежитиях';
value["22002"]["prv_folder"] = "charity";
value["22002"]["prv_page"] = "./cellular.html";
value["22002"]["prv_page_conf"] = "./validate_confirm.html";
value["22002"]["prv_alert"] = "";
value["22002"]["prv_image"] = "img/ui_item/knu.png";
value["22002"]["prv_top_image"] = "img/ui_item/knu.png";
value["22002"]["prv_is_cellular"] = false;
value["22002"]["prv_invitation"] = "prov_enter_account";
value["22002"]["prv_button_text"] = "";
value["22002"]["prv_mask"] = "<!^\\d+${5}>";
value["22002"]["prv_group"] = "";
value["22002"]["prv_online_check"] = "true";
value["22002"]["prv_receipt_extra_message"] = "";

// КНУ оплата за арендной площади
value["22003"] = new Array();
value["22003"]["prv_id"] = "22003";
value["22003"]["prv_name"] = 'оплата за арендной площади';
value["22003"]["prv_folder"] = "charity";
value["22003"]["prv_page"] = "./cellular.html";
value["22003"]["prv_page_conf"] = "./validate_confirm.html";
value["22003"]["prv_alert"] = "";
value["22003"]["prv_image"] = "img/ui_item/knu.png";
value["22003"]["prv_top_image"] = "img/ui_item/knu.png";
value["22003"]["prv_is_cellular"] = false;
value["22003"]["prv_invitation"] = "prov_enter_account";
value["22003"]["prv_button_text"] = "";
value["22003"]["prv_mask"] = "<!^\\d+${5}>";
value["22003"]["prv_group"] = "";
value["22003"]["prv_online_check"] = "true";
value["22003"]["prv_receipt_extra_message"] = "";

// КНУ оплата за обучение
// Comment provider
// value["22004"] = new Array();
// value["22004"]["prv_id"] = "22004";
// value["22004"]["prv_name"] = 'КНУ - оплата за обучение';
// value["22004"]["prv_folder"] = "charity";
// value["22004"]["prv_page"] = "./cellular_tazalyk.html";
// value["22004"]["prv_page_conf"] = "./validate_confirm.html";
// value["22004"]["prv_alert"] = "";
// value["22004"]["prv_image"] = "img/ui_item/knu.png";
// value["22004"]["prv_top_image"] = "img/ui_item/knu.png";
// value["22004"]["prv_is_cellular"] = false;
// value["22004"]["prv_invitation"] = "prov_enter_account";
// value["22004"]["prv_button_text"] = "";
// value["22004"]["prv_mask"] = "<!^.+${1,10}>";
// value["22004"]["prv_group"] = "";
// value["22004"]["prv_online_check"] = "true";
// value["22004"]["prv_receipt_extra_message"] = "";



//Pelican taxi
value["22005"] = new Array();
value["22005"]["prv_id"] = "22005";
value["22005"]["prv_name"] = "Pelican taxi";
value["22005"]["prv_folder"] = "tax";
value["22005"]["prv_page"] = "./cellular.html";
value["22005"]["prv_page_conf"] = "./validate_confirm.html";
value["22005"]["prv_alert"] = "";
value["22005"]["prv_image"] = "img/ui_item/pelican_100_100.png";
value["22005"]["prv_top_image"] = "./img/ui_item/pelican_100_100.png";
value["22005"]["prv_invitation"] = "vadila";
value["22005"]["prv_button_text"] = "";
value["22005"]["prv_mask"] = "<!^\\d+${4,10}>";
value["22005"]["prv_group"] = "";
value["22005"]["prv_online_check"] = "true";


//eda.kg
// Comment provider
// value["22006"] = new Array();
// value["22006"]["prv_id"] = "22006";
// value["22006"]["prv_name"] = "eda.kg";
// value["22006"]["prv_folder"] = "tax";
// value["22006"]["prv_page"] = "./cellular.html";
// value["22006"]["prv_page_conf"] = "./validate_confirm.html";
// value["22006"]["prv_alert"] = "";
// value["22006"]["prv_image"] = "img/ui_item/eda_100_100.png";
// value["22006"]["prv_top_image"] = "./img/ui_item/eda_100_100.png";
// value["22006"]["prv_invitation"] = "prov_enter_phone";
// value["22006"]["prv_button_text"] = "";
// value["22006"]["prv_mask"] = "<!^\\d+${4,6}>";
// value["22006"]["prv_group"] = "";
// value["22006"]["prv_online_check"] = "true";

//Русская тройка (Прокат машин)
// Comment provider
// value["22007"] = new Array();
// value["22007"]["prv_id"] = "22007";
// value["22007"]["prv_name"] = "Русская тройка (Прокат машин)";
// value["22007"]["prv_folder"] = "tax";
// value["22007"]["prv_page"] = "./cellular.html";
// value["22007"]["prv_page_conf"] = "./validate_confirm.html";
// value["22007"]["prv_alert"] = "";
// value["22007"]["prv_image"] = "img/ui_item/troika100_100.png";
// value["22007"]["prv_top_image"] = "./img/ui_item/troika100_100.png";
// value["22007"]["prv_invitation"] = "prov_enter_phone";
// value["22007"]["prv_button_text"] = "";
// value["22007"]["prv_mask"] = "<!^\\d+${4,6}>";
// value["22007"]["prv_group"] = "";
// value["22007"]["prv_online_check"] = "true";

// ФИНКА
// value["finka_bank"] = new Array();
// value["finka_bank"]["prv_name"] = "ФИНКА БАНК";
// value["finka_bank"]["prv_image"] = "./img/ui_item/Finka.png";//bishkek_zalkar

//ФИНКА Пополнение счета
// Comment provider
// value["22008"] = new Array();
// value["22008"]["prv_id"] = "22008";
// value["22008"]["prv_name"] = "Пополнение счета";
// value["22008"]["prv_folder"] = "bank";
// value["22008"]["prv_page"] = "./cellular_finca_bank.html";
// value["22008"]["prv_image"] = "img/ui_item/Finka.png";
// value["22008"]["prv_page_conf"] = "./validate_confirm.html";
// value["22008"]["prv_alert"] = "";
// value["22008"]["prv_invitation"] = "prov_enter_finca_bank";
// value["22008"]["prv_button_text"] = "";
// value["22008"]["prv_mask"] = "<!^d+${1,16}>";
// value["22008"]["prv_group"] = "Финка";
// value["22008"]["prv_online_check"] = "true";//11823



//AiTV
value["22009"] = new Array();
value["22009"]["prv_id"] = "22009";
value["22009"]["prv_name"] = "AiTV";
value["22009"]["prv_folder"] = "tax";
value["22009"]["prv_page"] = "./cellular.html";
value["22009"]["prv_page_conf"] = "./validate_confirm.html";
value["22009"]["prv_alert"] = "Уважаемый абонент. Минимальная сумма оплаты 200 сом, без учета комиссии. Для того чтобы ваши деньги были внесены на счет вам необходимо внести 220 сом (включена комиссия).";
value["22009"]["prv_image"] = "img/ui_item/aitv.png";
value["22009"]["prv_top_image"] = "./img/ui_item/aitv.png";
value["22009"]["prv_invitation"] = "prov_enter_card";
value["22009"]["prv_button_text"] = "";
value["22009"]["prv_mask"] = "<!^d+${16}>";
value["22009"]["prv_group"] = "";
value["22009"]["prv_online_check"] = "true";

////ОФ «Прав защиты детей сирот»
value["22010"] = new Array();
value["22010"]["prv_id"] = "22010";
value["22010"]["prv_name"] = 'ОФ «Прав защиты детей сирот»';
value["22010"]["prv_folder"] = "other";
value["22010"]["prv_page"] = "./cellular.html";
value["22010"]["prv_page_conf"] = "./validate_confirm.html";
value["22010"]["prv_alert"] = "";
value["22010"]["prv_image"] = "img/ui_item/blago_deti.png";
value["22010"]["prv_top_image"] = "img/ui_item/blago_deti.png";
value["22010"]["prv_invitation"] = "prov_enter_phone";
value["22010"]["prv_button_text"] = "";
value["22010"]["prv_mask"] = "0(<!^\\d+${3}>)<!^\\d+${6}>";
value["22010"]["prv_group"] = "Благотворительность";
value["22010"]["prv_online_check"] = "false";


// Мир такси
value["22012"] = new Array();
value["22012"]["prv_id"] = "22012";
value["22012"]["prv_name"] = "Мир такси";
value["22012"]["prv_folder"] = "other";
value["22012"]["prv_page"] = "./cellular.html";
value["22012"]["prv_image"] = "img/ui_item/taxi-Mir.png";
value["22012"]["prv_page_conf"] = "./validate_confirm.html";
value["22012"]["prv_alert"] = "";
value["22012"]["prv_invitation"] = "prov_enter_code";
value["22012"]["prv_button_text"] = "";
value["22012"]["prv_mask"] = "<!^\\d+${10}>";
value["22012"]["prv_group"] = "";
value["22012"]["prv_online_check"] = "true";

////ООРДА «Рука в руке»
value["22011"] = new Array();
value["22011"]["prv_id"] = "22011";
value["22011"]["prv_name"] = 'Рука в руке';
value["22011"]["prv_folder"] = "other";
value["22011"]["prv_page"] = "./cellular.html";
value["22011"]["prv_page_conf"] = "./validate_confirm.html";
value["22011"]["prv_alert"] = "";
value["22011"]["prv_image"] = "img/ui_item/ruka_v_ruke.png";
value["22011"]["prv_top_image"] = "img/ui_item/ruka_v_ruke.png";
value["22011"]["prv_invitation"] = "prov_enter_phone";
value["22011"]["prv_button_text"] = "";
value["22011"]["prv_mask"] = "0(<!^\\d+${3}>)<!^\\d+${6}>";
value["22011"]["prv_group"] = "Благотворительность";
value["22011"]["prv_online_check"] = "false";


//Record Taxi
value["22013"] = new Array();
value["22013"]["prv_id"] = "22013";
value["22013"]["prv_name"] = "Record Taxi";
value["22013"]["prv_folder"] = "tax";
value["22013"]["prv_page"] = "./cellular.html";
value["22013"]["prv_page_conf"] = "./validate_confirm.html";
value["22013"]["prv_alert"] = "";
value["22013"]["prv_image"] = "img/ui_item/Record.png";
value["22013"]["prv_top_image"] = "./img/ui_item/Record.png";
value["22013"]["prv_invitation"] = "prov_enter_phone";
value["22013"]["prv_button_text"] = "";
value["22013"]["prv_mask"] = "<!^\\d+${10}>";
value["22013"]["prv_group"] = "";
value["22013"]["prv_online_check"] = "true";

//TEZ
value["22014"] = new Array();
value["22014"]["prv_id"] = "22014";
value["22014"]["prv_name"] = "TEZ";
value["22014"]["prv_folder"] = "tax";
value["22014"]["prv_page"] = "./cellular.html";
value["22014"]["prv_page_conf"] = "./validate_confirm.html";
value["22014"]["prv_alert"] = "";
value["22014"]["prv_image"] = "img/ui_item/tez-logo-100-100.png";
value["22014"]["prv_top_image"] = "./img/ui_item/tez-logo-100-100.png";
value["22014"]["prv_invitation"] = "prov_enter_phone";
value["22014"]["prv_button_text"] = "";
value["22014"]["prv_mask"] = "+996<!^\\d+${9}>";
value["22014"]["prv_group"] = "";
value["22014"]["prv_online_check"] = "true";

// camex.kg
value["22019"] = new Array();
value["22019"]["prv_id"] = "22019";
value["22019"]["prv_name"] = 'camex.kg';
value["22019"]["prv_folder"] = "other";
value["22019"]["prv_page"] = "./cellular.html";
value["22019"]["prv_page_conf"] = "./validate_confirm.html";
value["22019"]["prv_alert"] = "";
value["22019"]["prv_image"] = "img/ui_item/camex_kg_100x100.png";
value["22019"]["prv_top_image"] = "img/ui_item/camex_kg_100x100.png";
value["22019"]["prv_is_cellular"] = false;
value["22019"]["prv_invitation"] = "prov_enter_account";
value["22019"]["prv_button_text"] = "";
value["22019"]["prv_mask"] = "K<!^.+${5}>";
value["22019"]["prv_group"] = "";
value["22019"]["prv_online_check"] = "true";


// simtravel
value["22017"] = new Array();
value["22017"]["prv_id"] = "22017";
value["22017"]["prv_name"] = "simtravel";
value["22017"]["prv_folder"] = "tax";
value["22017"]["prv_page"] = "./cellular.html";
value["22017"]["prv_page_conf"] = "./validate_confirm.html";
value["22017"]["prv_alert"] = "";
value["22017"]["prv_image"] = "img/ui_item/simtravel_100x100.png";
value["22017"]["prv_top_image"] = "./img/ui_item/simtravel_100x100.png";
value["22017"]["prv_invitation"] = "prov_enter_phone";
value["22017"]["prv_button_text"] = "";
value["22017"]["prv_mask"] = "372<!^\\d+${8}>";
value["22017"]["prv_group"] = "";
value["22017"]["prv_online_check"] = "true";


////Миг Лотто
//value["22020"] = new Array();
//value["22020"]["prv_id"] = "22020";
//value["22020"]["prv_name"] = "Миг Лото";
//value["22020"]["prv_folder"] = "tax";
//value["22020"]["prv_page"] = "./cellular.html";
//value["22020"]["prv_page_conf"] = "./validate_confirm.html";
//value["22020"]["prv_alert"] = "";
//value["22020"]["prv_image"] = "img/ui_item/migLoto.png";
//value["22020"]["prv_top_image"] = "./img/ui_item/migLoto.png";
//value["22020"]["prv_invitation"] = "prov_enter_phone";
//value["22020"]["prv_button_text"] = "";
//value["22020"]["prv_mask"] = "996 (<!^\\d+${3}>) <!^d+${6}>";
//value["22020"]["prv_group"] = "";
//value["22020"]["prv_online_check"] = "true";

// Кыргыз Домофон  Сервис
value["22021"] = new Array();
value["22021"]["prv_id"] = "22021";
value["22021"]["prv_name"] = "Кыргыз Домофон  Сервис";
value["22021"]["prv_folder"] = "zkh";
value["22021"]["prv_page"] = "./cellular.html";
value["22021"]["prv_page_conf"] = "./validate_confirm.html";
value["22021"]["prv_alert"] = "";
value["22021"]["prv_image"] = "img/ui_item/kyrDomofon.png";
value["22021"]["prv_top_image"] = "./img/ui_item/kyrDomofon.png";
value["22021"]["prv_invitation"] = "prov_enter_account";
value["22021"]["prv_button_text"] = "";
value["22021"]["prv_mask"] = "<!^\\d+${6,6}>";
value["22021"]["prv_group"] = "";
value["22021"]["prv_online_check"] = "true";

////Цифрал безопасность
value["22358"] = new Array();
value["22358"]["prv_id"] = "22358";
value["22358"]["prv_name"] = "Цифрал безопасность";
value["22358"]["prv_folder"] = "tax";
value["22358"]["prv_page"] = "./cellular.html";
value["22358"]["prv_page_conf"] = "./validate_confirm.html";
value["22358"]["prv_alert"] = "";
value["22358"]["prv_image"] = "img/ui_item/logo-CyfralDomofon.png";
value["22358"]["prv_top_image"] = "./img/ui_item/logo-CyfralDomofon.png";
value["22358"]["prv_invitation"] = "prov_enter_account";
value["22358"]["prv_button_text"] = "";
value["22358"]["prv_mask"] = "<!^\\d+${7}>-<!^\\d+${1}>";
value["22358"]["prv_group"] = "";
value["22358"]["prv_online_check"] = "true";


////ОФ Келечек Плюс
value["22022"] = new Array();
value["22022"]["prv_id"] = "22022";
value["22022"]["prv_name"] = 'ОФ Келечек Плюс';
value["22022"]["prv_folder"] = "other";
value["22022"]["prv_page"] = "./cellular.html";
value["22022"]["prv_page_conf"] = "./validate_confirm.html";
value["22022"]["prv_alert"] = "";
value["22022"]["prv_image"] = "img/ui_item/kelechek+.png";
value["22022"]["prv_top_image"] = "img/ui_item/kelechek+.png";
value["22022"]["prv_invitation"] = "prov_enter_phone";
value["22022"]["prv_button_text"] = "";
value["22022"]["prv_mask"] = "0(<!^\\d+${3}>)<!^\\d+${6}>";
value["22022"]["prv_group"] = "Благотворительность";
value["22022"]["prv_online_check"] = "false";

////Эл start.kg
value["22023"] = new Array();
value["22023"]["prv_id"] = "22023";
value["22023"]["prv_name"] = 'поддержи свой ПРОЕКТ';
value["22023"]["prv_folder"] = "other";
value["22023"]["prv_page"] = "./cellular.html";
value["22023"]["prv_page_conf"] = "./validate_confirm.html";
value["22023"]["prv_alert"] = "";
value["22023"]["prv_image"] = "img/ui_item/elstart.png";
value["22023"]["prv_top_image"] = "img/ui_item/elstart.png";
value["22023"]["prv_invitation"] = "prov_enter_account";
value["22023"]["prv_button_text"] = "";
value["22023"]["prv_mask"] = "<!^\\d+${9}>";
value["22023"]["prv_group"] = "Благотворительность";
value["22023"]["prv_online_check"] = "true";


// Oberon
value["Oberon_folders"] = new Array();
value["Oberon_folders"]["prv_name"] = "ОБЕРОН";
value["Oberon_folders"]["prv_folder"] = "other";
value["Oberon_folders"]["prv_image"] = "./img/ui_item/LogoOberonColor.png";
value["Oberon_folders"]["prv_page"] = "./cellular.html";
value["Oberon_folders"]["prv_page_conf"] = "./validate_confirm.html";
value["Oberon_folders"]["prv_alert"] = "";
value["Oberon_folders"]["prv_button_text"] = "";

// FORT
value["Fort_folders"] = new Array();
value["Fort_folders"]["prv_name"] = "ФОРТ";
value["Fort_folders"]["prv_folder"] = "Oberon_folder";
value["Fort_folders"]["prv_image"] = "";
value["Fort_folders"]["prv_page"] = "./cellular.html";
value["Fort_folders"]["prv_page_conf"] = "./validate_confirm.html";
value["Fort_folders"]["prv_alert"] = "";
value["Fort_folders"]["prv_button_text"] = "";

// Intal
value["Intal_folders"] = new Array();
value["Intal_folders"]["prv_name"] = "ИНТАЛ";
value["Intal_folders"]["prv_folder"] = "Oberon_folder";
value["Intal_folders"]["prv_image"] = "./img/ui_item/LogoIntalColor.png";
value["Intal_folders"]["prv_page"] = "./cellular.html";
value["Intal_folders"]["prv_page_conf"] = "./validate_confirm.html";
value["Intal_folders"]["prv_alert"] = "";
value["Intal_folders"]["prv_button_text"] = "";

//FORT Аренда
// Comment provider
// value["22025"] = new Array();
// value["22025"]["prv_id"] = "22025";
// value["22025"]["prv_name"] = "ОПЛАТА ЗА АРЕНДУ";
// value["22025"]["prv_folder"] = "Fort_folder";
// value["22025"]["prv_page"] = "./provider.html";
// value["22025"]["prv_page_conf"] = "./validate_confirm.html";
// value["22025"]["prv_is_cellular"] = false;
// value["22025"]["prv_alert"] = "";
// value["22025"]["prv_image"] = "";
// value["22025"]["prv_top_image"] = "";
// value["22025"]["prv_invitation"] = "prov_enter_account";
// value["22025"]["prv_button_text"] = "";
// value["22025"]["prv_mask"] = "<!^.+${1,33}>";
// value["22025"]["prv_group"] = "ФОРТ";
// value["22025"]["prv_online_check"] = "true";

//FORT СВЕТ
// Comment provider
// value["22027"] = new Array();
// value["22027"]["prv_id"] = "22027";
// value["22027"]["prv_name"] = "ОПЛАТА ЗА СВЕТ";
// value["22027"]["prv_folder"] = "Fort_folder";
// value["22027"]["prv_page"] = "./provider.html";
// value["22027"]["prv_page_conf"] = "./validate_confirm.html";
// value["22027"]["prv_alert"] = "";
// value["22027"]["prv_image"] = "";
// value["22027"]["prv_is_cellular"] = false;
// value["22027"]["prv_top_image"] = "";
// value["22027"]["prv_invitation"] = "prov_enter_account";
// value["22027"]["prv_button_text"] = "";
// value["22027"]["prv_mask"] = "<!^.+${1,33}>";
// value["22027"]["prv_group"] = "ФОРТ";
// value["22027"]["prv_online_check"] = "true";

//Intal Аренда
// Comment provider
// value["22024"] = new Array();
// value["22024"]["prv_id"] = "22024";
// value["22024"]["prv_name"] = "ОПЛАТА ЗА АРЕНДУ";
// value["22024"]["prv_folder"] = "Intal_folder";
// value["22024"]["prv_page"] = "./provider.html";
// value["22024"]["prv_page_conf"] = "./validate_confirm.html";
// value["22024"]["prv_alert"] = "";
// value["22024"]["prv_is_cellular"] = false;
// value["22024"]["prv_image"] = "img/ui_item/LogoIntalColor.png";
// value["22024"]["prv_top_image"] = "./img/ui_item/LogoIntalColor.png";
// value["22024"]["prv_invitation"] = "prov_enter_account";
// value["22024"]["prv_button_text"] = "";
// value["22024"]["prv_mask"] = "<!^.+${1,33}>";
// value["22024"]["prv_group"] = "ИНТАЛ";
// value["22024"]["prv_online_check"] = "true";

//Intal СВЕТ
// Comment provider
// value["22026"] = new Array();
// value["22026"]["prv_id"] = "22026";
// value["22026"]["prv_name"] = "ОПЛАТА ЗА СВЕТ";
// value["22026"]["prv_folder"] = "Intal_folder";
// value["22026"]["prv_page"] = "./provider.html";
// value["22026"]["prv_page_conf"] = "./validate_confirm.html";
// value["22026"]["prv_alert"] = "";
// value["22026"]["prv_is_cellular"] = false;
// value["22026"]["prv_image"] = "img/ui_item/LogoIntalColor.png";
// value["22026"]["prv_top_image"] = "./img/ui_item/LogoIntalColor.png";
// value["22026"]["prv_invitation"] = "prov_enter_account";
// value["22026"]["prv_button_text"] = "";
// value["22026"]["prv_mask"] = "<!^.+${1,33}>";
// value["22026"]["prv_group"] = "ИНТАЛ";
// value["22026"]["prv_online_check"] = "true";

//Соц-фонд
value["22028"] = new Array();
value["22028"]["prv_id"] = "22028";
value["22028"]["prv_name"] = "Соцфонд - оплата страхового взноса";
value["22028"]["prv_folder"] = "tax";
value["22028"]["prv_image"] = "img/ui_item/sf.png";
value["22028"]["prv_top_image"] = "./img/ui_item/sf.png";
value["22028"]["prv_page"] = "./sf_start.html";
value["22028"]["prv_page_sf_pin"] = "./num_keyboard.html";
value["22028"]["prv_page_back_num"] = "./sf_start.html";
value["22028"]["prv_forward_num_keyboard"] = "./sf_folders.html";
value["22028"]["prv_page_conf"] = "./sf_validate_confirm.html";
value["22028"]["prv_alert"] = "<hr>Платежи Соцфонда не отменяются, по всем вопросам отмены или корректировки платежа обращайтесь в РУСФ по месту регистрации <hr>ИП - Индивидуальные предприниматели без образования организации, включая деятельность на основе патента<hr>";
value["22028"]["prv_invitation"] = "sf_prov_enter_pin_inn";
value["22028"]["prv_success_sign"] = "cellular_successful_notice";
value["22028"]["prv_error_sign"] = "cellular_bad_format";
value["22028"]["prv_button_text"] = "";
value["22028"]["prv_mask"] = "<!^\\d+${14}>";
value["22028"]["prv_group"] = "";
value["22028"]["prv_online_check"] = "true";
value["22028"]["prv_surmask"] = "14$14$**************";
value["22028"]["prv_receipt_extra_message"] = "";
//КФХ - Крестьянские (фермерские) хозяйства
//ГАИ - Оплата штрафов
value["11859"] = new Array();
value["11859"]["prv_id"] = "11859";
value["11859"]["prv_name"] = 'ГУБДД - Оплата штрафа';
value["11859"]["prv_folder"] = "tax";
value["11859"]["prv_image"] = "./img/ui_item/gai.png";
value["11859"]["prv_top_image"] = "./img/ui_item/gai.png";
value["11859"]["prv_page"] = "./anykey_keyboard.html";
value["11859"]["prv_page_back_any"] = "./pages.html";
value["11859"]["prv_page_conf"] = "./ttp_validate_confirm.html";
value["11859"]["prv_alert"] = "";
value["11859"]["prv_lang_any_keyboard"] = "ru";
value["11859"]["prv_type_any_keyboard"] = "NORM";
value["11859"]["prv_invitation"] = "validate_ptt_protocol_text";
value["11859"]["prv_success_sign"] = "cellular_successful_notice";
value["11859"]["prv_error_sign"] = "cellular_bad_format";
value["11859"]["prv_button_text"] = "";
value["11859"]["prv_mask"] = "";
value["11859"]["prv_surmask"] = "";
value["11859"]["prv_group"] = "";
value["11859"]["prv_online_check"] = "true";
value["11859"]["prv_receipt_extra_message"] = "";

//Мобильник
// Comment provider
// value["22029"] = new Array();
// value["22029"]["prv_id"] = "22029";
// value["22029"]["prv_name"] = "Электронный кошелек мобильник деньги";
// value["22029"]["prv_folder"] = "folder_online_pay";
// value["22029"]["prv_page"] = "./cellular_tazalyk.html";
// value["22029"]["prv_page_conf"] = "./validate_confirm.html";
// value["22029"]["prv_alert"] = "";
// value["22029"]["prv_is_cellular"] = true;
// value["22029"]["prv_image"] = "img/ui_item/mobilnik.png";
// value["22029"]["prv_top_image"] = "./img/ui_item/mobilnik.png";
// value["22029"]["prv_invitation"] = "prov_enter_account";
// value["22029"]["prv_button_text"] = "";
// value["22029"]["prv_mask"] = "<!^.+${5,25}>";
// value["22029"]["prv_group"] = "";
// value["22029"]["prv_online_check"] = "true";

//CSWORLD
value["22030"] = new Array();
value["22030"]["prv_id"] = "22030";
value["22030"]["prv_name"] = "CS:Source - пополнение баланса";
value["22030"]["prv_folder"] = "content";
value["22030"]["prv_page"] = "./cellular.html";
value["22030"]["prv_alert"] = "";
value["22030"]["prv_is_cellular"] = true;
value["22030"]["prv_image"] = "img/ui_item/logo_terminal100.png";
value["22030"]["prv_top_image"] = "./img/ui_item/logo_terminal100.png";
value["22030"]["prv_invitation"] = "prov_enter_account";
value["22030"]["prv_button_text"] = "";
value["22030"]["prv_mask"] = "<!^\\d+${1,10}>";
value["22030"]["prv_group"] = "CSWORLD.KG";
value["22030"]["prv_online_check"] = "true";

//Kbid
value["22034"] = new Array();
value["22034"]["prv_id"] = "22034";
value["22034"]["prv_name"] = "Kbid - Продажа БИД пакетов";
value["22034"]["prv_folder"] = "other";
value["22034"]["prv_image"] = "img/ui_item/kbid.png";
value["22034"]["prv_top_image"] = "./img/ui_item/kbid.png";
value["22034"]["prv_page"] = "./kbid_start.html";
value["22034"]["prv_page_kbid"] = "./num_keyboard.html";
value["22034"]["prv_forward_num_keyboard"] = "./kbid_validate_confirm.html";
value["22034"]["prv_page_back_num"] = "./kbid_start.html";
value["22034"]["prv_success_sign"] = "cellular_successful_notice";
value["22034"]["prv_error_sign"] = "cellular_bad_format";
value["22034"]["prv_alert"] = "";
value["22034"]["prv_invitation"] = "prov_enter_code";
value["22034"]["prv_button_text"] = "";
value["22034"]["prv_mask"] = "<!^\\d+${1,20}>";
value["22034"]["prv_surmask"] = "6$6$******";
value["22034"]["prv_group"] = "";
value["22034"]["prv_online_check"] = "true";
value["22034"]["prv_receipt_extra_message"] = "";




// Dostek - оплата за отправку электронной отчетности
value["22036"] = new Array();
value["22036"]["prv_id"] = "22036";
value["22036"]["prv_name"] = 'Dostek - оплата за отправку электронной отчетности';
value["22036"]["prv_folder"] = "bank";
value["22036"]["prv_page"] = "./cellular.html";
value["22036"]["prv_page_conf"] = "./validate_confirm.html";
value["22036"]["prv_image"] = "img/ui_item/Dostek.png";
value["22036"]["prv_top_image"] = "img/ui_item/Dostek.png";
value["22036"]["prv_is_cellular"] = true;
value["22036"]["prv_alert"] = "";
value["22036"]["prv_invitation"] = "prov_enter_number";
value["22036"]["prv_button_text"] = "";
value["22036"]["prv_mask"] = "<!^\\d+${3,14}>";
value["22036"]["prv_group"] = "";
value["22036"]["prv_online_check"] = "true";

// (NativePay) Steam
value["13915"] = new Array();
value["13915"]["prv_id"] = "13915";
value["13915"]["prv_name"] = 'Steam - пополнение баланса';
value["13915"]["prv_folder"] = "folder_content_provs";
value["13915"]["prv_image"] = "./img/ui_item/Steam100x100.png";
value["13915"]["prv_top_image"] = "./img/ui_item/Steam100x100.png";
value["13915"]["prv_page"] = "./anykey_keyboard.html";
value["13915"]["prv_page_back_any"] = "./pages.html";
value["13915"]["prv_page_conf"] = "./np_validate_confirm.html";
value["13915"]["prv_alert"] = "";
value["13915"]["prv_lang_any_keyboard"] = "ru";
value["13915"]["prv_type_any_keyboard"] = "NORM";
value["13915"]["prv_invitation"] = "prov_enter_account";
value["13915"]["prv_success_sign"] = "cellular_successful_notice";
value["13915"]["prv_error_sign"] = "cellular_bad_format";
value["13915"]["prv_surmask"] = "14$14$**************";
value["13915"]["prv_button_text"] = "";
value["13915"]["prv_mask"] = "";
value["13915"]["prv_group"] = "";
value["13915"]["prv_online_check"] = "true";
value["13915"]["prv_receipt_extra_message"] = "";

// (NativePay) Warface
value["11325"] = new Array();
value["11325"]["prv_id"] = "11325";
value["11325"]["prv_name"] = 'Warface - покупка игровой валюты';
value["11325"]["prv_folder"] = "folder_content_provs";
value["11325"]["prv_image"] = "./img/ui_item/warface.png";
value["11325"]["prv_top_image"] = "./img/ui_item/warface.png";
value["11325"]["prv_page"] = "./anykey_keyboard.html";
value["11325"]["prv_page_back_any"] = "./pages.html";
value["11325"]["prv_page_conf"] = "./np_validate_confirm.html";
value["11325"]["prv_alert"] = "";
value["11325"]["prv_lang_any_keyboard"] = "ru";
value["11325"]["prv_type_any_keyboard"] = "NORM";
value["11325"]["prv_invitation"] = "prov_enter_email";
value["11325"]["prv_success_sign"] = "cellular_successful_notice";
value["11325"]["prv_error_sign"] = "cellular_bad_format";
value["11325"]["prv_button_text"] = "";
value["11325"]["prv_surmask"] = "14$14$**************";
value["11325"]["prv_mask"] = "";
value["11325"]["prv_group"] = "";
value["11325"]["prv_online_check"] = "true";
value["11325"]["prv_receipt_extra_message"] = "";

// (NativePay) World of Tanks
value["6410"] = new Array();
value["6410"]["prv_id"] = "6410";
value["6410"]["prv_name"] = 'World of Tanks - покупка игровой валюты';
value["6410"]["prv_folder"] = "folder_content_provs";
value["6410"]["prv_image"] = "./img/ui_item/wot.png";
value["6410"]["prv_top_image"] = "./img/ui_item/wot.png";
value["6410"]["prv_page"] = "./anykey_keyboard.html";
value["6410"]["prv_page_back_any"] = "./pages.html";
value["6410"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6410"]["prv_alert"] = "";
value["6410"]["prv_lang_any_keyboard"] = "ru";
value["6410"]["prv_type_any_keyboard"] = "NORM";
value["6410"]["prv_invitation"] = "prov_enter_code";
value["6410"]["prv_success_sign"] = "cellular_successful_notice";
value["6410"]["prv_error_sign"] = "cellular_bad_format";
value["6410"]["prv_surmask"] = "14$14$**************";
value["6410"]["prv_button_text"] = "";
value["6410"]["prv_mask"] = "";
value["6410"]["prv_group"] = "";
value["6410"]["prv_online_check"] = "true";
value["6410"]["prv_receipt_extra_message"] = "";

// (NativePay) Яндекс Деньги
value["12463"] = new Array();
value["12463"]["prv_id"] = "12463";
value["12463"]["prv_name"] = 'Яндекс Деньги - пополнение счета';
value["12463"]["prv_folder"] = "folder_online_pay";
value["12463"]["prv_image"] = "./img/ui_item/yandexmaney.png";
value["12463"]["prv_top_image"] = "./img/ui_item/yandexmaney.png";
value["12463"]["prv_page"] = "./num_keyboard.html";
value["12463"]["prv_page_back_num"] = "./pages.html";
value["12463"]["prv_page_conf"] = "./np_validate_confirm.html";
value["12463"]["prv_alert"] = "Минимальная сумма<br>разового платежа: 100 сом.<br><br>Максимальная сумма<br>разового платежа: 10 000 сом.";
value["12463"]["prv_lang_any_keyboard"] = "ru";
value["12463"]["prv_type_any_keyboard"] = "NORM";
value["12463"]["prv_invitation"] = "prov_enter_webmoney_cash";
value["12463"]["prv_success_sign"] = "cellular_successful_notice";
value["12463"]["prv_error_sign"] = "cellular_bad_format";
value["12463"]["prv_button_text"] = "";
value["12463"]["prv_mask"] = "";
value["12463"]["prv_surmask"] = "14$15$***************";
value["12463"]["prv_group"] = "Электронные деньги";
value["12463"]["prv_online_check"] = "true";
value["12463"]["prv_receipt_extra_message"] = "";



// (NativePay) WebMoney Euro
value["12457"] = new Array();
value["12457"]["prv_id"] = "12457";
value["12457"]["prv_name"] = 'WebMoney Евро - пополнение счета';
value["12457"]["prv_folder"] = "folder_webmoney_page";
value["12457"]["prv_image"] = "./img/ui_item/WebMoney.png";
value["12457"]["prv_top_image"] = "./img/ui_item/WebMoney.png";
value["12457"]["prv_page"] = "./num_keyboard.html";
value["12457"]["prv_page_back_num"] = "./pages.html";
value["12457"]["prv_page_conf"] = "./np_validate_confirm.html";
value["12457"]["prv_alert"] = "Минимальная сумма<br>разового платежа: 100 сом.<br><br>Максимальная сумма<br>разового платежа: 15 000 сом.";
value["12457"]["prv_lang_any_keyboard"] = "ru";
value["12457"]["prv_type_any_keyboard"] = "NORM";
value["12457"]["prv_invitation"] = "prov_enter_webmoney_cash";
value["12457"]["prv_success_sign"] = "cellular_successful_notice";
value["12457"]["prv_error_sign"] = "cellular_bad_format";
value["12457"]["prv_button_text"] = "";
value["12457"]["prv_mask"] = "";
value["12457"]["prv_surmask"] = "12$12$E************";
value["12457"]["prv_group"] = "Электронные деньги";
value["12457"]["prv_online_check"] = "true";
value["12457"]["prv_receipt_extra_message"] = "";

// (NativePay) WebMoney Рубли
value["12456"] = new Array();
value["12456"]["prv_id"] = "12456";
value["12456"]["prv_name"] = 'WebMoney Рубли - пополнение счета';
value["12456"]["prv_folder"] = "folder_webmoney_page";
value["12456"]["prv_image"] = "./img/ui_item/WebMoney.png";
value["12456"]["prv_top_image"] = "./img/ui_item/WebMoney.png";
value["12456"]["prv_page"] = "./num_keyboard.html";
value["12456"]["prv_page_back_num"] = "./pages.html";
value["12456"]["prv_page_conf"] = "./np_validate_confirm.html";
value["12456"]["prv_alert"] = "Минимальная сумма<br>разового платежа: 100 сом.<br><br>Максимальная сумма<br>разового платежа: 15 000 сом.";
value["12456"]["prv_lang_any_keyboard"] = "ru";
value["12456"]["prv_type_any_keyboard"] = "NORM";
value["12456"]["prv_invitation"] = "prov_enter_webmoney_cash";
value["12456"]["prv_success_sign"] = "cellular_successful_notice";
value["12456"]["prv_error_sign"] = "cellular_bad_format";
value["12456"]["prv_button_text"] = "";
value["12456"]["prv_mask"] = "";
value["12456"]["prv_surmask"] = "12$12$R************";
value["12456"]["prv_group"] = "Электронные деньги";
value["12456"]["prv_online_check"] = "true";
value["12456"]["prv_receipt_extra_message"] = "";

//Реклама Тест
value["22047"] = new Array();
value["22047"]["prv_id"] = "22047";
value["22047"]["prv_name"] = 'Реклама Тест';
value["22047"]["prv_folder"] = "folder_adverts";
value["22047"]["prv_page"] = "p_q2_keyboard.html";
value["22047"]["prv_page_conf"] = "./validate_confirm.html";
value["22047"]["prv_alert"] = "";
value["22047"]["prv_image"] = "./img/ui_item/raketatv.jpg";
value["22047"]["prv_top_image"] = "";
value["22047"]["prv_is_cellular"] = false;
value["22047"]["prv_invitation"] = "prov_enter_phone";
value["22047"]["prv_button_text"] = "";
value["22047"]["prv_mask"] = "";
value["22047"]["prv_group"] = "Q2Media";
value["22047"]["prv_online_check"] = "false";
value["22047"]["tag"] = { type: 'symbol', cost: 2, period: 1, calcSpace: true, fields: 4, serviceName: "SmartTV Ракета ТВ (цифров.) - оплата рекламы", isTv: true, nextCalend: 2 };

//Ракета ТВ
//value["9386"] = new Array();
//value["9386"]["prv_id"] = "9386";
//value["9386"]["prv_name"] = 'Ракета ТВ (цифров.)';
//value["9386"]["prv_folder"] = "other";
//value["9386"]["prv_page"] = "p_q2_calendar.html";
//value["9386"]["prv_page_conf"] = "./validate_confirm.html";
//value["9386"]["prv_alert"] = "";
//value["9386"]["prv_image"] = "./img/ui_item/raketatv.jpg";
//value["9386"]["prv_top_image"] = "";
//value["9386"]["prv_is_cellular"] = false;
//value["9386"]["prv_invitation"] = "prov_enter_phone";
//value["9386"]["prv_button_text"] = "";
//value["9386"]["prv_mask"] = "";
//value["9386"]["prv_group"] = "Q2Media";
//value["9386"]["prv_online_check"] = "false";
//value["9386"]["tag"] = { type: 'symbol', cost: 2, period: 1, calcSpace: true, fields: 4, serviceName: "SmartTV Ракета ТВ (цифров.) - оплата рекламы", isTv: true, nextCalend: 2 };


// (NativePay) Perfect World 
value["6411"] = new Array();
value["6411"]["prv_id"] = "6411";
value["6411"]["prv_name"] = 'Perfect World';
value["6411"]["prv_folder"] = "content";
value["6411"]["prv_image"] = "./img/ui_item/perfectworld.png";
value["6411"]["prv_top_image"] = "./img/ui_item/perfectworld.png";
value["6411"]["prv_page"] = "./anykey_keyboard.html";
value["6411"]["prv_page_back_any"] = "./pages.html";
value["6411"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6411"]["prv_alert"] = "";
value["6411"]["prv_lang_any_keyboard"] = "ru";
value["6411"]["prv_type_any_keyboard"] = "NORM";
value["6411"]["prv_invitation"] = "prov_enter_code";
value["6411"]["prv_success_sign"] = "cellular_successful_notice";
value["6411"]["prv_error_sign"] = "cellular_bad_format";
value["6411"]["prv_surmask"] = "1$20$********************";
value["6411"]["prv_button_text"] = "";
value["6411"]["prv_mask"] = "";
value["6411"]["prv_group"] = "";
value["6411"]["prv_online_check"] = "true";
value["6411"]["prv_receipt_extra_message"] = "";



// (NativePay) Tanki Online 
value["6412"] = new Array();
value["6412"]["prv_id"] = "6412";
value["6412"]["prv_name"] = 'Tanki Online';
value["6412"]["prv_folder"] = "content";
value["6412"]["prv_image"] = "./img/ui_item/Tanki_online.png";
value["6412"]["prv_top_image"] = "./img/ui_item/Tanki_online.png";
value["6412"]["prv_page"] = "./anykey_keyboard.html";
value["6412"]["prv_page_back_any"] = "./pages.html";
value["6412"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6412"]["prv_alert"] = "";
value["6412"]["prv_lang_any_keyboard"] = "ru";
value["6412"]["prv_type_any_keyboard"] = "NORM";
value["6412"]["prv_invitation"] = "prov_enter_code";
value["6412"]["prv_success_sign"] = "cellular_successful_notice";
value["6412"]["prv_error_sign"] = "cellular_bad_format";
value["6412"]["prv_surmask"] = "1$20$********************";
value["6412"]["prv_button_text"] = "";
value["6412"]["prv_mask"] = "";
value["6412"]["prv_group"] = "";
value["6412"]["prv_online_check"] = "true";
value["6412"]["prv_receipt_extra_message"] = "";


// (NativePay) Легенда: Наследие драконов (фэо-минор) 
value["6414"] = new Array();
value["6414"]["prv_id"] = "6414";
value["6414"]["prv_name"] = 'Легенда: Наследие драконов (фэо-минор)';
value["6414"]["prv_folder"] = "content";
value["6414"]["prv_image"] = "./img/ui_item/legend(minor).png";
value["6414"]["prv_top_image"] = "./img/ui_item/legend(minor).png";
value["6414"]["prv_page"] = "./anykey_keyboard.html";
value["6414"]["prv_page_back_any"] = "./pages.html";
value["6414"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6414"]["prv_alert"] = "";
value["6414"]["prv_lang_any_keyboard"] = "ru";
value["6414"]["prv_type_any_keyboard"] = "NORM";
value["6414"]["prv_invitation"] = "prov_enter_code";
value["6414"]["prv_success_sign"] = "cellular_successful_notice";
value["6414"]["prv_error_sign"] = "cellular_bad_format";
value["6414"]["prv_surmask"] = "1$16$****************";
value["6414"]["prv_button_text"] = "";
value["6414"]["prv_mask"] = "";
value["6414"]["prv_group"] = "";
value["6414"]["prv_online_check"] = "true";
value["6414"]["prv_receipt_extra_message"] = "";


// (NativePay) Легенда: Наследие драконов (фэо-прайм)
value["6413"] = new Array();
value["6413"]["prv_id"] = "6413";
value["6413"]["prv_name"] = 'Легенда: Наследие драконов (фэо-прайм)';
value["6413"]["prv_folder"] = "content";
value["6413"]["prv_image"] = "./img/ui_item/legend(minor).png";
value["6413"]["prv_top_image"] = "./img/ui_item/legend(minor).png";
value["6413"]["prv_page"] = "./anykey_keyboard.html";
value["6413"]["prv_page_back_any"] = "./pages.html";
value["6413"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6413"]["prv_alert"] = "";
value["6413"]["prv_lang_any_keyboard"] = "ru";
value["6413"]["prv_type_any_keyboard"] = "NORM";
value["6413"]["prv_invitation"] = "prov_enter_code";
value["6413"]["prv_success_sign"] = "cellular_successful_notice";
value["6413"]["prv_error_sign"] = "cellular_bad_format";
value["6413"]["prv_surmask"] = "1$17$*****************";
value["6413"]["prv_button_text"] = "";
value["6413"]["prv_mask"] = "";
value["6413"]["prv_group"] = "";
value["6413"]["prv_online_check"] = "true";
value["6413"]["prv_receipt_extra_message"] = "";


// (NativePay) The War Z
value["11322"] = new Array();
value["11322"]["prv_id"] = "11322";
value["11322"]["prv_name"] = 'The War Z';
value["11322"]["prv_folder"] = "content";
value["11322"]["prv_image"] = "./img/ui_item/warZ.gif";
value["11322"]["prv_top_image"] = "./img/ui_item/warZ.gif";
value["11322"]["prv_page"] = "./anykey_keyboard.html";
value["11322"]["prv_page_back_any"] = "./pages.html";
value["11322"]["prv_page_conf"] = "./np_validate_confirm.html";
value["11322"]["prv_alert"] = "";
value["11322"]["prv_lang_any_keyboard"] = "ru";
value["11322"]["prv_type_any_keyboard"] = "NORM";
value["11322"]["prv_invitation"] = "prov_enter_code";
value["11322"]["prv_success_sign"] = "cellular_successful_notice";
value["11322"]["prv_error_sign"] = "cellular_bad_format";
value["11322"]["prv_surmask"] = "1$20$********************";
value["11322"]["prv_button_text"] = "";
value["11322"]["prv_mask"] = "";
value["11322"]["prv_group"] = "";
value["11322"]["prv_online_check"] = "true";
value["11322"]["prv_receipt_extra_message"] = "";


// (NativePay) 4Game
// Comment provider
// value["12732"] = new Array();
// value["12732"]["prv_id"] = "12732";
// value["12732"]["prv_name"] = '4Game';
// value["12732"]["prv_folder"] = "content";
// value["12732"]["prv_image"] = "./img/ui_item/4game.png";
// value["12732"]["prv_top_image"] = "./img/ui_item/4game.png";
// value["12732"]["prv_page"] = "./anykey_keyboard.html";
// value["12732"]["prv_page_back_any"] = "./pages.html";
// value["12732"]["prv_page_conf"] = "./np_validate_confirm.html";
// value["12732"]["prv_alert"] = "";
// value["12732"]["prv_lang_any_keyboard"] = "ru";
// value["12732"]["prv_type_any_keyboard"] = "NORM";
// value["12732"]["prv_invitation"] = "prov_enter_code";
// value["12732"]["prv_success_sign"] = "cellular_successful_notice";
// value["12732"]["prv_error_sign"] = "cellular_bad_format";
// value["12732"]["prv_surmask"] = "1$33$*********************************";
// value["12732"]["prv_button_text"] = "";
// value["12732"]["prv_mask"] = "";
// value["12732"]["prv_group"] = "";
// value["12732"]["prv_online_check"] = "true";
// value["12732"]["prv_receipt_extra_message"] = "";


// (NativePay) R2 Online
value["12733"] = new Array();
value["12733"]["prv_id"] = "12733";
value["12733"]["prv_name"] = 'R2 Online';
value["12733"]["prv_folder"] = "content";
value["12733"]["prv_image"] = "./img/ui_item/r2online.png";
value["12733"]["prv_top_image"] = "./img/ui_item/r2online.png";
value["12733"]["prv_page"] = "./anykey_keyboard.html";
value["12733"]["prv_page_back_any"] = "./pages.html";
value["12733"]["prv_page_conf"] = "./np_validate_confirm.html";
value["12733"]["prv_alert"] = "";
value["12733"]["prv_lang_any_keyboard"] = "ru";
value["12733"]["prv_type_any_keyboard"] = "NORM";
value["12733"]["prv_invitation"] = "prov_enter_code";
value["12733"]["prv_success_sign"] = "cellular_successful_notice";
value["12733"]["prv_error_sign"] = "cellular_bad_format";
value["12733"]["prv_surmask"] = "1$33$*********************************";
value["12733"]["prv_button_text"] = "";
value["12733"]["prv_mask"] = "";
value["12733"]["prv_group"] = "";
value["12733"]["prv_online_check"] = "true";
value["12733"]["prv_receipt_extra_message"] = "";


// (NativePay) Warthunder
value["16213"] = new Array();
value["16213"]["prv_id"] = "16213";
value["16213"]["prv_name"] = 'Warthunder';
value["16213"]["prv_folder"] = "content";
value["16213"]["prv_image"] = "./img/ui_item/WarThunder.png";
value["16213"]["prv_top_image"] = "./img/ui_item/WarThunder.png";
value["16213"]["prv_page"] = "./anykey_keyboard.html";
value["16213"]["prv_page_back_any"] = "./pages.html";
value["16213"]["prv_page_conf"] = "./np_validate_confirm.html";
value["16213"]["prv_alert"] = "";
value["16213"]["prv_lang_any_keyboard"] = "ru";
value["16213"]["prv_type_any_keyboard"] = "NORM";
value["16213"]["prv_invitation"] = "prov_enter_code";
value["16213"]["prv_success_sign"] = "cellular_successful_notice";
value["16213"]["prv_error_sign"] = "cellular_bad_format";
value["16213"]["prv_surmask"] = "1$33$*********************************";
value["16213"]["prv_button_text"] = "";
value["16213"]["prv_mask"] = "";
value["16213"]["prv_group"] = "";
value["16213"]["prv_online_check"] = "true";
value["16213"]["prv_receipt_extra_message"] = "";


// (NativePay) Skyforge
value["22015"] = new Array();
value["22015"]["prv_id"] = "22015";
value["22015"]["prv_name"] = 'Skyforge';
value["22015"]["prv_folder"] = "content";
value["22015"]["prv_image"] = "./img/ui_item/SkyForge100_100.png";
value["22015"]["prv_top_image"] = "./img/ui_item/SkyForge100_100.png";
value["22015"]["prv_page"] = "./anykey_keyboard.html";
value["22015"]["prv_page_back_any"] = "./pages.html";
value["22015"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22015"]["prv_alert"] = "";
value["22015"]["prv_lang_any_keyboard"] = "ru";
value["22015"]["prv_type_any_keyboard"] = "NORM";
value["22015"]["prv_invitation"] = "prov_enter_code";
value["22015"]["prv_success_sign"] = "cellular_successful_notice";
value["22015"]["prv_error_sign"] = "cellular_bad_format";
value["22015"]["prv_surmask"] = "1$33$*********************************";
value["22015"]["prv_button_text"] = "";
value["22015"]["prv_mask"] = "";
value["22015"]["prv_group"] = "";
value["22015"]["prv_online_check"] = "true";
value["22015"]["prv_receipt_extra_message"] = "";


// (NativePay) Спарта: Война империй
value["16214"] = new Array();
value["16214"]["prv_id"] = "16214";
value["16214"]["prv_name"] = 'Спарта: Война империй';
value["16214"]["prv_folder"] = "content";
value["16214"]["prv_image"] = "./img/ui_item/spartamailru.png";
value["16214"]["prv_top_image"] = "./img/ui_item/spartamailru.png";
value["16214"]["prv_page"] = "./anykey_keyboard.html";
value["16214"]["prv_page_back_any"] = "./pages.html";
value["16214"]["prv_page_conf"] = "./np_validate_confirm.html";
value["16214"]["prv_alert"] = "";
value["16214"]["prv_lang_any_keyboard"] = "ru";
value["16214"]["prv_type_any_keyboard"] = "NORM";
value["16214"]["prv_invitation"] = "prov_enter_code";
value["16214"]["prv_success_sign"] = "cellular_successful_notice";
value["16214"]["prv_error_sign"] = "cellular_bad_format";
value["16214"]["prv_surmask"] = "1$33$*********************************";
value["16214"]["prv_button_text"] = "";
value["16214"]["prv_mask"] = "";
value["16214"]["prv_group"] = "";
value["16214"]["prv_online_check"] = "true";
value["16214"]["prv_receipt_extra_message"] = "";


// (NativePay) ПараПа: Город Танцев
value["16216"] = new Array();
value["16216"]["prv_id"] = "16216";
value["16216"]["prv_name"] = 'ПараПа: Город Танцев';
value["16216"]["prv_folder"] = "content";
value["16216"]["prv_image"] = "./img/ui_item/gorod_tan.png";
value["16216"]["prv_top_image"] = "./img/ui_item/gorod_tan.png";
value["16216"]["prv_page"] = "./anykey_keyboard.html";
value["16216"]["prv_page_back_any"] = "./pages.html";
value["16216"]["prv_page_conf"] = "./np_validate_confirm.html";
value["16216"]["prv_alert"] = "";
value["16216"]["prv_lang_any_keyboard"] = "ru";
value["16216"]["prv_type_any_keyboard"] = "NORM";
value["16216"]["prv_invitation"] = "prov_enter_code";
value["16216"]["prv_success_sign"] = "cellular_successful_notice";
value["16216"]["prv_error_sign"] = "cellular_bad_format";
value["16216"]["prv_surmask"] = "1$33$*********************************";
value["16216"]["prv_button_text"] = "";
value["16216"]["prv_mask"] = "";
value["16216"]["prv_group"] = "";
value["16216"]["prv_online_check"] = "true";
value["16216"]["prv_receipt_extra_message"] = "";


// (NativePay) Metal War Online
value["22016"] = new Array();
value["22016"]["prv_id"] = "22016";
value["22016"]["prv_name"] = 'Metal War Online';
value["22016"]["prv_folder"] = "content";
value["22016"]["prv_image"] = "./img/ui_item/MWO100_100.png";
value["22016"]["prv_top_image"] = "./img/ui_item/MWO100_100.png";
value["22016"]["prv_page"] = "./anykey_keyboard.html";
value["22016"]["prv_page_back_any"] = "./pages.html";
value["22016"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22016"]["prv_alert"] = "";
value["22016"]["prv_lang_any_keyboard"] = "ru";
value["22016"]["prv_type_any_keyboard"] = "NORM";
value["22016"]["prv_invitation"] = "prov_enter_code";
value["22016"]["prv_success_sign"] = "cellular_successful_notice";
value["22016"]["prv_error_sign"] = "cellular_bad_format";
value["22016"]["prv_surmask"] = "1$33$*********************************";
value["22016"]["prv_button_text"] = "";
value["22016"]["prv_mask"] = "";
value["22016"]["prv_group"] = "";
value["22016"]["prv_online_check"] = "true";
value["22016"]["prv_receipt_extra_message"] = "";


// (NativePay) Skype
value["11319"] = new Array();
value["11319"]["prv_id"] = "11319";
value["11319"]["prv_name"] = 'Skype';
value["11319"]["prv_folder"] = "content";
value["11319"]["prv_image"] = "./img/ui_item/skype.png";
value["11319"]["prv_top_image"] = "./img/ui_item/skype.png";
value["11319"]["prv_page"] = "./anykey_keyboard.html";
value["11319"]["prv_page_back_any"] = "./pages.html";
value["11319"]["prv_page_conf"] = "./np_validate_confirm.html";
value["11319"]["prv_alert"] = "";
value["11319"]["prv_lang_any_keyboard"] = "ru";
value["11319"]["prv_type_any_keyboard"] = "NORM";
value["11319"]["prv_invitation"] = "prov_enter_code";
value["11319"]["prv_success_sign"] = "cellular_successful_notice";
value["11319"]["prv_error_sign"] = "cellular_bad_format";
value["11319"]["prv_surmask"] = "1$20$********************";
value["11319"]["prv_button_text"] = "";
value["11319"]["prv_mask"] = "";
value["11319"]["prv_group"] = "";
value["11319"]["prv_online_check"] = "true";
value["11319"]["prv_receipt_extra_message"] = "";


// (NativePay) CrossFire
value["13914"] = new Array();
value["13914"]["prv_id"] = "13914";
value["13914"]["prv_name"] = 'CrossFire';
value["13914"]["prv_folder"] = "content";
value["13914"]["prv_image"] = "./img/ui_item/CrossFire100x100.png";
value["13914"]["prv_top_image"] = "./img/ui_item/CrossFire100x100.png";
value["13914"]["prv_page"] = "./anykey_keyboard.html";
value["13914"]["prv_page_back_any"] = "./pages.html";
value["13914"]["prv_page_conf"] = "./np_validate_confirm.html";
value["13914"]["prv_alert"] = "";
value["13914"]["prv_lang_any_keyboard"] = "ru";
value["13914"]["prv_type_any_keyboard"] = "NORM";
value["13914"]["prv_invitation"] = "prov_enter_code";
value["13914"]["prv_success_sign"] = "cellular_successful_notice";
value["13914"]["prv_error_sign"] = "cellular_bad_format";
value["13914"]["prv_surmask"] = "1$31$*******************************";
value["13914"]["prv_button_text"] = "";
value["13914"]["prv_mask"] = "";
value["13914"]["prv_group"] = "";
value["13914"]["prv_online_check"] = "true";
value["13914"]["prv_receipt_extra_message"] = "";


// (NativePay) Mamba.ru 
value["6465"] = new Array();
value["6465"]["prv_id"] = "6465";
value["6465"]["prv_name"] = 'Mamba.ru';
value["6465"]["prv_folder"] = "content";
value["6465"]["prv_image"] = "./img/ui_item/logo_mamba.png";
value["6465"]["prv_top_image"] = "./img/ui_item/logo_mamba.png";
value["6465"]["prv_page"] = "./anykey_keyboard.html";
value["6465"]["prv_page_back_num"] = "./pages.html";
value["6465"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6465"]["prv_alert"] = "";
value["6465"]["prv_lang_any_keyboard"] = "ru";
value["6465"]["prv_type_any_keyboard"] = "NORM";
value["6465"]["prv_invitation"] = "prov_enter_code";
value["6465"]["prv_success_sign"] = "cellular_successful_notice";
value["6465"]["prv_error_sign"] = "cellular_bad_format";
value["6465"]["prv_button_text"] = "";
value["6465"]["prv_mask"] = "";
value["6465"]["prv_surmask"] = "1$30$*******************************";
value["6465"]["prv_group"] = "";
value["6465"]["prv_online_check"] = "true";
value["6465"]["prv_receipt_extra_message"] = "";


// (NativePay) 2pay.ru
value["6463"] = new Array();
value["6463"]["prv_id"] = "6463";
value["6463"]["prv_name"] = '2pay.ru';
value["6463"]["prv_folder"] = "content";
value["6463"]["prv_image"] = "./img/ui_item/2topay.png";
value["6463"]["prv_top_image"] = "./img/ui_item/2topay.png";
value["6463"]["prv_page"] = "./num_keyboard.html";
value["6463"]["prv_page_back_num"] = "./pages.html";
value["6463"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6463"]["prv_alert"] = "";
value["6463"]["prv_lang_any_keyboard"] = "ru";
value["6463"]["prv_type_any_keyboard"] = "NORM";
value["6463"]["prv_invitation"] = "prov_enter_code";
value["6463"]["prv_success_sign"] = "cellular_successful_notice";
value["6463"]["prv_error_sign"] = "cellular_bad_format";
value["6463"]["prv_button_text"] = "";
value["6463"]["prv_mask"] = "";
value["6463"]["prv_surmask"] = "1$12$************";
value["6463"]["prv_group"] = "";
value["6463"]["prv_online_check"] = "true";
value["6463"]["prv_receipt_extra_message"] = "";


// (NativePay) RBK Money
value["12459"] = new Array();
value["12459"]["prv_id"] = "12459";
value["12459"]["prv_name"] = 'RBK Money';
value["12459"]["prv_folder"] = "content";
value["12459"]["prv_image"] = "./img/ui_item/rbkmoney.png";
value["12459"]["prv_top_image"] = "./img/ui_item/rbkmoney.png";
value["12459"]["prv_page"] = "./num_keyboard.html";
value["12459"]["prv_page_back_num"] = "./pages.html";
value["12459"]["prv_page_conf"] = "./np_validate_confirm.html";
value["12459"]["prv_alert"] = "Максимальная сумма <br>разового платежа: 10 000 сом.";
value["12459"]["prv_lang_any_keyboard"] = "ru";
value["12459"]["prv_type_any_keyboard"] = "NORM";
value["12459"]["prv_invitation"] = "prov_enter_rbkmoney_cash";
value["12459"]["prv_success_sign"] = "cellular_successful_notice";
value["12459"]["prv_error_sign"] = "cellular_bad_format";
value["12459"]["prv_button_text"] = "";
value["12459"]["prv_mask"] = "";
value["12459"]["prv_surmask"] = "5$15$***************";
value["12459"]["prv_group"] = "";
value["12459"]["prv_online_check"] = "true";
value["12459"]["prv_receipt_extra_message"] = "";


// (NativePay) Деньги Mail.Ru
value["12458"] = new Array();
value["12458"]["prv_id"] = "12458";
value["12458"]["prv_name"] = 'Деньги Mail.Ru';
value["12458"]["prv_folder"] = "content";
value["12458"]["prv_image"] = "./img/ui_item/mailmoney.png";
value["12458"]["prv_top_image"] = "./img/ui_item/mailmoney.png";
value["12458"]["prv_page"] = "./num_keyboard.html";
value["12458"]["prv_page_back_num"] = "./pages.html";
value["12458"]["prv_page_conf"] = "./np_validate_confirm.html";
value["12458"]["prv_alert"] = "Максимальная сумма <br>разового платежа: 10 000 сом.";
value["12458"]["prv_lang_any_keyboard"] = "ru";
value["12458"]["prv_type_any_keyboard"] = "NORM";
value["12458"]["prv_invitation"] = "prov_enter_webmoney_cash";
value["12458"]["prv_success_sign"] = "cellular_successful_notice";
value["12458"]["prv_error_sign"] = "cellular_bad_format";
value["12458"]["prv_button_text"] = "";
value["12458"]["prv_mask"] = "";
value["12458"]["prv_surmask"] = "10$20$********************";
value["12458"]["prv_group"] = "";
value["12458"]["prv_online_check"] = "true";
value["12458"]["prv_receipt_extra_message"] = "";


// (NativePay) NICE.KG
value["14255"] = new Array();
value["14255"]["prv_id"] = "14255";
value["14255"]["prv_name"] = 'NICE.KG';
value["14255"]["prv_folder"] = "content";
value["14255"]["prv_image"] = "./img/ui_item/nice.kg100x100.png";
value["14255"]["prv_top_image"] = "./img/ui_item/nice.kg100x100.png";
value["14255"]["prv_page"] = "./num_keyboard.html";
value["14255"]["prv_page_back_num"] = "./pages.html";
value["14255"]["prv_page_conf"] = "./np_validate_confirm.html";
value["14255"]["prv_alert"] = "";
value["14255"]["prv_lang_any_keyboard"] = "ru";
value["14255"]["prv_type_any_keyboard"] = "NORM";
value["14255"]["prv_invitation"] = "prov_enter_account";
value["14255"]["prv_success_sign"] = "cellular_successful_notice";
value["14255"]["prv_error_sign"] = "cellular_bad_format";
value["14255"]["prv_button_text"] = "";
value["14255"]["prv_mask"] = "";
value["14255"]["prv_surmask"] = "1$9$*********";
value["14255"]["prv_group"] = "";
value["14255"]["prv_online_check"] = "true";
value["14255"]["prv_receipt_extra_message"] = "";


// (NativePay) Garena
value["11323"] = new Array();
value["11323"]["prv_id"] = "11323";
value["11323"]["prv_name"] = 'Garena';
value["11323"]["prv_folder"] = "content";
value["11323"]["prv_image"] = "./img/ui_item/garena.gif";
value["11323"]["prv_top_image"] = "./img/ui_item/garena.gif";
value["11323"]["prv_page"] = "./num_keyboard.html";
value["11323"]["prv_page_back_num"] = "./pages.html";
value["11323"]["prv_page_conf"] = "./np_validate_confirm.html";
value["11323"]["prv_alert"] = "";
value["11323"]["prv_lang_any_keyboard"] = "ru";
value["11323"]["prv_type_any_keyboard"] = "NORM";
value["11323"]["prv_invitation"] = "prov_enter_account";
value["11323"]["prv_success_sign"] = "cellular_successful_notice";
value["11323"]["prv_error_sign"] = "cellular_bad_format";
value["11323"]["prv_button_text"] = "";
value["11323"]["prv_mask"] = "";
value["11323"]["prv_surmask"] = "1$8$********";
value["11323"]["prv_group"] = "";
value["11323"]["prv_online_check"] = "true";
value["11323"]["prv_receipt_extra_message"] = "";


// (NativePay) Tele2 (Россия)
value["13916"] = new Array();
value["13916"]["prv_id"] = "13916";
value["13916"]["prv_name"] = 'Tele2';
value["13916"]["prv_folder"] = "content";
value["13916"]["prv_image"] = "./img/ui_item/tele2.png";
value["13916"]["prv_top_image"] = "./img/ui_item/tele2.png";
value["13916"]["prv_page"] = "./num_keyboard.html";
value["13916"]["prv_page_back_num"] = "./pages.html";
value["13916"]["prv_page_conf"] = "./np_validate_confirm.html";
value["13916"]["prv_alert"] = "";
value["13916"]["prv_lang_any_keyboard"] = "ru";
value["13916"]["prv_type_any_keyboard"] = "NORM";
value["13916"]["prv_invitation"] = "prov_enter_phone";
value["13916"]["prv_success_sign"] = "cellular_successful_notice";
value["13916"]["prv_error_sign"] = "cellular_bad_format";
value["13916"]["prv_button_text"] = "";
value["13916"]["prv_mask"] = "";
value["13916"]["prv_surmask"] = "9$10$**********";
value["13916"]["prv_group"] = "";
value["13916"]["prv_online_check"] = "true";
value["13916"]["prv_receipt_extra_message"] = "";


// (NativePay) Tele2 (Казахстан)
value["16210"] = new Array();
value["16210"]["prv_id"] = "16210";
value["16210"]["prv_name"] = 'Tele2';
value["16210"]["prv_folder"] = "content";
value["16210"]["prv_image"] = "./img/ui_item/tele2.png";
value["16210"]["prv_top_image"] = "./img/ui_item/tele2.png";
value["16210"]["prv_page"] = "./num_keyboard.html";
value["16210"]["prv_page_back_num"] = "./pages.html";
value["16210"]["prv_page_conf"] = "./np_validate_confirm.html";
value["16210"]["prv_alert"] = "";
value["16210"]["prv_lang_any_keyboard"] = "ru";
value["16210"]["prv_type_any_keyboard"] = "NORM";
value["16210"]["prv_invitation"] = "prov_enter_phone";
value["16210"]["prv_success_sign"] = "cellular_successful_notice";
value["16210"]["prv_error_sign"] = "cellular_bad_format";
value["16210"]["prv_button_text"] = "";
value["16210"]["prv_mask"] = "";
value["16210"]["prv_surmask"] = "10$10$**********";
value["16210"]["prv_group"] = "";
value["16210"]["prv_online_check"] = "true";
value["16210"]["prv_receipt_extra_message"] = "";


// (NativePay) Activ (Казахстан)
value["16198"] = new Array();
value["16198"]["prv_id"] = "16198";
value["16198"]["prv_name"] = 'Activ';
value["16198"]["prv_folder"] = "content";
value["16198"]["prv_image"] = "./img/ui_item/Activ.png";
value["16198"]["prv_top_image"] = "./img/ui_item/Activ.png";
value["16198"]["prv_page"] = "./num_keyboard.html";
value["16198"]["prv_page_back_num"] = "./pages.html";
value["16198"]["prv_page_conf"] = "./np_validate_confirm.html";
value["16198"]["prv_alert"] = "";
value["16198"]["prv_lang_any_keyboard"] = "ru";
value["16198"]["prv_type_any_keyboard"] = "NORM";
value["16198"]["prv_invitation"] = "prov_enter_phone";
value["16198"]["prv_success_sign"] = "cellular_successful_notice";
value["16198"]["prv_error_sign"] = "cellular_bad_format";
value["16198"]["prv_button_text"] = "";
value["16198"]["prv_mask"] = "";
value["16198"]["prv_surmask"] = "10$10$**********";
value["16198"]["prv_group"] = "";
value["16198"]["prv_online_check"] = "true";
value["16198"]["prv_receipt_extra_message"] = "";


// (NativePay) Kcell (Казахстан)
value["16199"] = new Array();
value["16199"]["prv_id"] = "16199";
value["16199"]["prv_name"] = 'Kcell';
value["16199"]["prv_folder"] = "content";
value["16199"]["prv_image"] = "./img/ui_item/Kcell.png";
value["16199"]["prv_top_image"] = "./img/ui_item/Kcell.png";
value["16199"]["prv_page"] = "./num_keyboard.html";
value["16199"]["prv_page_back_num"] = "./pages.html";
value["16199"]["prv_page_conf"] = "./np_validate_confirm.html";
value["16199"]["prv_alert"] = "";
value["16199"]["prv_lang_any_keyboard"] = "ru";
value["16199"]["prv_type_any_keyboard"] = "NORM";
value["16199"]["prv_invitation"] = "prov_enter_phone";
value["16199"]["prv_success_sign"] = "cellular_successful_notice";
value["16199"]["prv_error_sign"] = "cellular_bad_format";
value["16199"]["prv_button_text"] = "";
value["16199"]["prv_mask"] = "";
value["16199"]["prv_surmask"] = "10$10$**********";
value["16199"]["prv_group"] = "";
value["16199"]["prv_online_check"] = "true";
value["16199"]["prv_receipt_extra_message"] = "";

//Super-Info(Реклама)
value["22049"] = new Array();
value["22049"]["prv_id"] = "22049";
value["22049"]["prv_name"] = "СуперИнфо-реклама";
value["22049"]["prv_folder"] = "folder_adverts";
value["22049"]["prv_page"] = "./cellular.html";
value["22049"]["prv_page_conf"] = "./validate_confirm.html";
value["22049"]["prv_alert"] = "";
value["22049"]["prv_image"] = "img/ui_item/SuperInfo-reklama.png";
value["22049"]["prv_top_image"] = "./img/ui_item/SuperInfo-reklama.png";
value["22049"]["prv_invitation"] = "prov_enter_account";
value["22049"]["prv_is_cellular"] = true;
value["22049"]["prv_button_text"] = "";
value["22049"]["prv_mask"] = "<!^\\d+${6}>";
value["22049"]["prv_group"] = "";
value["22049"]["prv_online_check"] = "true";

//Super-Info(Знакоства)
value["22048"] = new Array();
value["22048"]["prv_id"] = "22048";
value["22048"]["prv_name"] = "СуперИнфо-знакомства";
value["22048"]["prv_folder"] = "folder_adverts";
value["22048"]["prv_page"] = "./cellular.html";
value["22048"]["prv_page_conf"] = "./validate_confirm.html";
value["22048"]["prv_alert"] = "";
value["22048"]["prv_image"] = "img/ui_item/SuperInfo-znakomstva.png";
value["22048"]["prv_top_image"] = "./img/ui_item/SuperInfo-znakomstva.png";
value["22048"]["prv_invitation"] = "prov_enter_account";
value["22048"]["prv_button_text"] = "";
value["22048"]["prv_is_cellular"] = true;
value["22048"]["prv_mask"] = "<!^\\d+${6}>";
value["22048"]["prv_group"] = "";
value["22048"]["prv_online_check"] = "true";

//Cordial.KG
value["22050"] = new Array();
value["22050"]["prv_id"] = "22050";
value["22050"]["prv_name"] = "Cordial.KG";
value["22050"]["prv_folder"] = "other";
value["22050"]["prv_page"] = "./cellular.html";
value["22050"]["prv_page_conf"] = "./validate_confirm.html";
value["22050"]["prv_alert"] = "";
value["22050"]["prv_image"] = "img/ui_item/Cordial.png";
value["22050"]["prv_top_image"] = "./img/ui_item/Cordial.png";
value["22050"]["prv_invitation"] = "prov_enter_account";
value["22050"]["prv_button_text"] = "";
value["22050"]["prv_is_cellular"] = true;
value["22050"]["prv_mask"] = "<!^\\d+${14}>";
value["22050"]["prv_group"] = "";
value["22050"]["prv_online_check"] = "true";








//Namba- подключение водителя
// Comment provider
// value["22051"] = new Array();
// value["22051"]["prv_id"] = "22051";
// value["22051"]["prv_name"] = "Namba - подключение водителя";
// value["22051"]["prv_folder"] = "content";
// value["22051"]["prv_page"] = "./cellular.html";
// value["22051"]["prv_image"] = "img/ui_item/NambaTaxi_podkluchenie.png";
// value["22051"]["prv_top_image"] = "./img/ui_item/NambaTaxi_podkluchenie.png";
// value["22051"]["prv_page_conf"] = "./validate_confirm.html";
// value["22051"]["prv_alert"] = "";
// value["22051"]["prv_invitation"] = "prov_enter_code";
// value["22051"]["prv_button_text"] = "";
// value["22051"]["prv_mask"] = "<!^\\d+${10}>";
// value["22048"]["prv_is_cellular"] = true;
// value["22051"]["prv_group"] = "";
// value["22051"]["prv_online_check"] = "true";






//МакСиМуС
value["22055"] = new Array();
value["22055"]["prv_id"] = "22055";
value["22055"]["prv_name"] = "МакСиМуС";
value["22055"]["prv_folder"] = "adverts";
value["22055"]["prv_page"] = "./cellular.html";
value["22055"]["prv_page_conf"] = "./validate_confirm.html";
value["22055"]["prv_alert"] = "";
value["22055"]["prv_image"] = "img/ui_item/mobilaif.png";
value["22055"]["prv_top_image"] = "./img/ui_item/mobilaif.png";
value["22055"]["prv_invitation"] = "prov_enter_code";
value["22055"]["prv_button_text"] = "";
value["22055"]["prv_mask"] = "<!^\\d+${4,8}>";
value["22055"]["prv_group"] = "";
value["22055"]["prv_online_check"] = "true";


// Административный штраф за нарушение ПДД(фото-видео фиксация)
value["22054"] = new Array();
value["22054"]["prv_id"] = "22054";
value["22054"]["prv_name"] = 'Штраф за нарушение ПДД(фото-видео фиксация)';
value["22054"]["prv_folder"] = "tax";
value["22054"]["prv_image"] = "img/ui_item/mvd.png";
value["22054"]["prv_top_image"] = "img/ui_item/mvd.png";
value["22054"]["prv_page"] = "./num_keyboard.html";
value["22054"]["prv_page_back_any"] = "./pages.html";
value["22054"]["prv_page_conf"] = "./pdd_validate_confirm.html";
value["22054"]["prv_alert"] = "Сумма комиссии составляет 40 сом и не зависит от размера вносимой суммы штрафа";
value["22054"]["prv_lang_any_keyboard"] = "ru";
value["22054"]["prv_type_any_keyboard"] = "NORM";
value["22054"]["prv_invitation"] = "prov_ttp2";
value["22054"]["prv_success_sign"] = "cellular_successful_notice";
value["22054"]["prv_error_sign"] = "cellular_bad_format";
value["22054"]["prv_surmask"] = "16$16$****************";
value["22054"]["prv_button_text"] = "";
value["22054"]["prv_mask"] = "";
value["22054"]["prv_group"] = "ГАИ";
value["22054"]["prv_online_check"] = "true";
value["22054"]["prv_receipt_extra_message"] = "";



//Тазалык
value["22058"] = new Array();
value["22058"]["prv_id"] = "22058";
value["22058"]["prv_name"] = "Тазалык - вывоз мусора(Юр.лица)";
value["22058"]["prv_folder"] = "zkh";
value["22058"]["prv_page"] = "./cellular_tazalyk.html";
value["22058"]["prv_page_conf"] = "./validate_confirm.html";
value["22058"]["prv_alert"] = "Оплата за Октябрьский район не принимается";
value["22058"]["prv_invitation"] = "prov_enter_account";
value["22058"]["prv_button_text"] = "";
value["22058"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22058"]["prv_group"] = "оплата за вывоз мусора";
value["22058"]["prv_online_check"] = "true";



//СеверЭлектро(общий физ лица)
value["22056"] = new Array();
value["22056"]["prv_id"] = "22056";
value["22056"]["prv_name"] = "СеверЭлектро-оплата за свет";
value["22056"]["prv_folder"] = "zkh";
value["22056"]["prv_page"] = "./se_init.html";
value["22056"]["prv_page_back_num"] = "./pages.html";
value["22056"]["prv_page_conf"] = "./sever_validate_confirm.html";
value["22056"]["prv_alert"] = "При вводе аккаунта, система определит нужного вам провайдера. Оплата принемается за Чуйский энергосбыт, Талаский Эненергосбыт, Бишкекский энергосбыт.</br></br> После полного погашения задолжности сигнал на подключение «умного» счётчика автоматически передаётся на сервер «Северэлектро»";
value["22056"]["prv_image"] = "img/ui_item/light.png";
value["22056"]["prv_top_image"] = "./img/ui_item/light.png";
value["22056"]["prv_invitation"] = "prov_enter_code";
value["22056"]["prv_button_text"] = "";
value["22056"]["prv_group"] = "";
value["22056"]["prv_online_check"] = "true";

//СеверЭлектро(общий физ лица)
value["22057"] = new Array();
value["22057"]["prv_id"] = "22057";
value["22057"]["prv_name"] = "СеверЭлектро-оплата пени";
value["22057"]["prv_folder"] = "zkh";
value["22057"]["prv_page"] = "./se_init2.html";
value["22057"]["prv_page_back_num"] = "./pages.html";
value["22057"]["prv_page_conf"] = "./sever_validate_confirm.html";
value["22057"]["prv_alert"] = "При вводе аккаунта, система определит нужного вам провайдера.</br></br> После полного погашения задолжности сигнал на подключение «умного» счётчика автоматически передаётся на сервер «Северэлектро»";
value["22057"]["prv_image"] = "img/ui_item/peni.gif";
value["22057"]["prv_top_image"] = "./img/ui_item/peni.gif";
value["22057"]["prv_invitation"] = "prov_enter_code";
value["22057"]["prv_button_text"] = "";
value["22057"]["prv_group"] = "";
value["22057"]["prv_online_check"] = "true";


// СВЕТ Бишкек
value["sever_light"] = new Array();
value["sever_light"]["prv_name"] = "СеверЭлектро";
value["sever_light"]["prv_folder"] = "zkh";
value["sever_light"]["prv_image"] = "./img/ui_item/light.png";


//Саймателеком(оборудование)
value["22059"] = new Array();
value["22059"]["prv_id"] = "22059";
value["22059"]["prv_name"] = "Saimatelecom (оплата за оборудование)"; // название услуги берем из жиры
value["22059"]["prv_folder"] = "fixed";                    //группа где будет находиться услуга
value["22059"]["prv_page"] = "./cellular.html";             // клавиатуа (только цифровая развертка) 
value["22059"]["prv_page_conf"] = "./validate_confirm.html"; // страница валидации (проверяет куда дальше идти)
value["22059"]["prv_alert"] = "";                            // добовляет информацию об услуги в левое окно от цифербата  
value["22059"]["prv_image"] = "img/ui_item/saima_t_o.png";    // ьдобовляет картинки для первого окна 
value["22059"]["prv_top_image"] = "./img/ui_item/saima_t_o.png"; //добовляет картинку для второго окна
value["22059"]["prv_invitation"] = "prov_enter_account";        //Назване поля (подсказка для ввода)  
value["22059"]["prv_button_text"] = "";
value["22059"]["prv_mask"] = "<!^\\.+${6,6}>";                   // маска контролирует ввод чтобы человек не ввел лишнего  
value["22059"]["prv_group"] = "оплата за оборудование"; //за что отвечает услуга (доп описание)
value["22059"]["prv_online_check"] = "true";             //предпроверка проверять в базе или сразу проводить платежь 




////Электронный дневник
//value["22061"] = new Array();
//value["22061"]["prv_id"] = "22061";
//value["22061"]["prv_name"] = "Электронный дневник";
//value["22061"]["prv_folder"] = "tax";
//value["22061"]["prv_page"] = "./cellular.html";
//value["22061"]["prv_page_conf"] = "./validate_confirm.html";
//value["22061"]["prv_alert"] = "";
//value["22061"]["prv_image"] = "img/ui_item/food_logo.png";
//value["22061"]["prv_top_image"] = "./img/ui_item/food_logo.png";
//value["22061"]["prv_invitation"] = "prov_enter_phone";
//value["22061"]["prv_button_text"] = "";
//value["22061"]["prv_mask"] = "<!^\\d+${10}>";
//value["22061"]["prv_group"] = "";
//value["22061"]["prv_online_check"] = "true";

//Газ

//ГАЗ БИШКЕК
value["bishkek_gas"] = new Array();
value["bishkek_gas"]["prv_name"] = "Бишкек";
value["bishkek_gas"]["prv_image"] = "./img/ui_item/gas.png";

//ГАЗ ЧУЙ
value["chui_gas"] = new Array();
value["chui_gas"]["prv_name"] = "Чуй";
value["chui_gas"]["prv_image"] = "./img/ui_item/gas.png";

//ГАЗ Жалалабат
value["jal_gas"] = new Array();
value["jal_gas"]["prv_name"] = "Жалалабат";
value["jal_gas"]["prv_image"] = "./img/ui_item/gas.png";

//ГАЗ Ош
value["osh_gas"] = new Array();
value["osh_gas"]["prv_name"] = "Ош";
value["osh_gas"]["prv_image"] = "./img/ui_item/gas.png";

//ГАЗ Баткен
value["batken_gas"] = new Array();
value["batken_gas"]["prv_name"] = "Баткен";
value["batken_gas"]["prv_image"] = "./img/ui_item/gas.png";


// Бишкек Газ gas_pay
value["5158"] = new Array();
value["5158"]["prv_id"] = "5158";
value["5158"]["prv_name"] = "Оплата за газ";
value["5158"]["prv_folder"] = "zkh";
value["5158"]["prv_page"] = "./cellular.html";
value["5158"]["prv_image"] = "./img/ui_item/kyrggas.png";
value["5158"]["prv_page_conf"] = "./validate_confirm.html";
value["5158"]["prv_alert"] = "<p style=\"color:#ff0000\">Внимание!</p> Пополнение баланса на смарткарты не принимается";
value["5158"]["prv_invitation"] = "prov_enter_account";
value["5158"]["prv_button_text"] = "";
value["5158"]["prv_mask"] = "0<!^\\d+${8}>";
value["5158"]["prv_group"] = "КЫРГЫЗГАЗ - Бишкек";
value["5158"]["prv_online_check"] = "true";

// Бишкек Газ light_peni
value["5193"] = new Array();
value["5193"]["prv_id"] = "5193";
value["5193"]["prv_name"] = "Оплата пени";
value["5193"]["prv_image"] = "./img/ui_item/kyrggas.png";
value["5193"]["prv_folder"] = "zkh";
value["5193"]["prv_page"] = "./cellular.html";
value["5193"]["prv_page_conf"] = "./validate_confirm.html";
value["5193"]["prv_alert"] = "";
value["5193"]["prv_invitation"] = "prov_enter_account";
value["5193"]["prv_button_text"] = "";
value["5193"]["prv_mask"] = "0<!^\\d+${8}>";
value["5193"]["prv_group"] = "КЫРГЫЗГАЗ - Бишкек";
value["5193"]["prv_online_check"] = "true";

// ЧУЙ Газ gas_pay
value["22062"] = new Array();
value["22062"]["prv_id"] = "22062";
value["22062"]["prv_name"] = "Оплата за газ";
value["22062"]["prv_folder"] = "zkh";
value["22062"]["prv_page"] = "./cellular.html";
value["22062"]["prv_image"] = "./img/ui_item/kyrggas.png";
value["22062"]["prv_page_conf"] = "./validate_confirm.html";
value["22062"]["prv_alert"] = "<p style=\"color:#ff0000\">Внимание!</p> Пополнение баланса на смарткарты не принимается";
value["22062"]["prv_invitation"] = "prov_enter_account";
value["22062"]["prv_button_text"] = "";
value["22062"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22062"]["prv_group"] = "КЫРГЫЗГАЗ - ЧУЙ";
value["22062"]["prv_online_check"] = "true";

// ЧУЙ Газ light_peni
value["22066"] = new Array();
value["22066"]["prv_id"] = "22066";
value["22066"]["prv_name"] = "Оплата пени";
value["22066"]["prv_image"] = "./img/ui_item/kyrggas.png";
value["22066"]["prv_folder"] = "zkh";
value["22066"]["prv_page"] = "./cellular.html";
value["22066"]["prv_page_conf"] = "./validate_confirm.html";
value["22066"]["prv_alert"] = "";
value["22066"]["prv_invitation"] = "prov_enter_account";
value["22066"]["prv_button_text"] = "";
value["22066"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22066"]["prv_group"] = "КЫРГЫЗГАЗ - ЧУЙ";
value["22066"]["prv_online_check"] = "true";

// Жалалабат Газ gas_pay
value["22063"] = new Array();
value["22063"]["prv_id"] = "22063";
value["22063"]["prv_name"] = "Оплата за газ";
value["22063"]["prv_folder"] = "zkh";
value["22063"]["prv_page"] = "./cellular.html";
value["22063"]["prv_image"] = "./img/ui_item/kyrggas.png";
value["22063"]["prv_page_conf"] = "./validate_confirm.html";
value["22063"]["prv_alert"] = "<p style=\"color:#ff0000\">Внимание!</p> Пополнение баланса на смарткарты не принимается";
value["22063"]["prv_invitation"] = "prov_enter_account";
value["22063"]["prv_button_text"] = "";
value["22063"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22063"]["prv_group"] = "КЫРГЫЗГАЗ - Жалалабат";
value["22063"]["prv_online_check"] = "true";

// Жалалабат Газ light_peni
value["22067"] = new Array();
value["22067"]["prv_id"] = "22067";
value["22067"]["prv_name"] = "Оплата пени";
value["22067"]["prv_image"] = "./img/ui_item/kyrggas.png";
value["22067"]["prv_folder"] = "zkh";
value["22067"]["prv_page"] = "./cellular.html";
value["22067"]["prv_page_conf"] = "./validate_confirm.html";
value["22067"]["prv_alert"] = "";
value["22067"]["prv_invitation"] = "prov_enter_account";
value["22067"]["prv_button_text"] = "";
value["22067"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22067"]["prv_group"] = "КЫРГЫЗГАЗ - Жалалабат";
value["22067"]["prv_online_check"] = "true";

// Ош Газ gas_pay
value["22064"] = new Array();
value["22064"]["prv_id"] = "22064";
value["22064"]["prv_name"] = "Оплата за газ";
value["22064"]["prv_folder"] = "zkh";
value["22064"]["prv_page"] = "./cellular.html";
value["22064"]["prv_image"] = "./img/ui_item/kyrggas.png";
value["22064"]["prv_page_conf"] = "./validate_confirm.html";
value["22064"]["prv_alert"] = "<p style=\"color:#ff0000\">Внимание!</p> Пополнение баланса на смарткарты не принимается";
value["22064"]["prv_invitation"] = "prov_enter_account";
value["22064"]["prv_button_text"] = "";
value["22064"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22064"]["prv_group"] = "КЫРГЫЗГАЗ - Ош";
value["22064"]["prv_online_check"] = "true";

// Ош Газ light_peni
value["22068"] = new Array();
value["22068"]["prv_id"] = "22068";
value["22068"]["prv_name"] = "Оплата пени";
value["22068"]["prv_image"] = "./img/ui_item/kyrggas.png";
value["22068"]["prv_folder"] = "zkh";
value["22068"]["prv_page"] = "./cellular.html";
value["22068"]["prv_page_conf"] = "./validate_confirm.html";
value["22068"]["prv_alert"] = "";
value["22068"]["prv_invitation"] = "prov_enter_account";
value["22068"]["prv_button_text"] = "";
value["22068"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22068"]["prv_group"] = "КЫРГЫЗГАЗ - Ош";
value["22068"]["prv_online_check"] = "true";

// Баткен Газ gas_pay
value["22065"] = new Array();
value["22065"]["prv_id"] = "22065";
value["22065"]["prv_name"] = "Оплата за газ";
value["22065"]["prv_folder"] = "zkh";
value["22065"]["prv_page"] = "./cellular.html";
value["22065"]["prv_image"] = "./img/ui_item/kyrggas.png";
value["22065"]["prv_page_conf"] = "./validate_confirm.html";
value["22065"]["prv_alert"] = "<p style=\"color:#ff0000\">Внимание!</p> Пополнение баланса на смарткарты не принимается";
value["22065"]["prv_invitation"] = "prov_enter_account";
value["22065"]["prv_button_text"] = "";
value["22065"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22065"]["prv_group"] = "КЫРГЫЗГАЗ - Баткен";
value["22065"]["prv_online_check"] = "true";

// Баткен Газ light_peni
value["22069"] = new Array();
value["22069"]["prv_id"] = "22069";
value["22069"]["prv_name"] = "Оплата пени";
value["22069"]["prv_image"] = "./img/ui_item/kyrggas.png";
value["22069"]["prv_folder"] = "zkh";
value["22069"]["prv_page"] = "./cellular.html";
value["22069"]["prv_page_conf"] = "./validate_confirm.html";
value["22069"]["prv_alert"] = "";
value["22069"]["prv_invitation"] = "prov_enter_account";
value["22069"]["prv_button_text"] = "";
value["22069"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22069"]["prv_group"] = "КЫРГЫЗГАЗ - Баткен";
value["22069"]["prv_online_check"] = "true";


// Бишкекгорлифт-оплата услуг
value["22070"] = new Array();
value["22070"]["prv_id"] = "22070";
value["22070"]["prv_name"] = "Бишкекгорлифт";
value["22070"]["prv_image"] = "./img/ui_item/GorLift.png";
value["22070"]["prv_folder"] = "zkh";
value["22070"]["prv_page"] = "./cellular.html";
value["22070"]["prv_page_conf"] = "./validate_confirm.html";
value["22070"]["prv_alert"] = "";
value["22070"]["prv_invitation"] = "prov_enter_account";
value["22070"]["prv_button_text"] = "";
value["22070"]["prv_mask"] = "<!^\\.+${2,10}>";
value["22070"]["prv_group"] = "Оплата услуг";
value["22070"]["prv_online_check"] = "true";


// Финансовый брокер Ringo Trade
value["22071"] = new Array();
value["22071"]["prv_id"] = "22071";
value["22071"]["prv_name"] = "Ringo Trade";
value["22071"]["prv_image"] = "./img/ui_item/ringotrade.png";
value["22071"]["prv_folder"] = "zkh";
value["22071"]["prv_page"] = "./cellular.html";
value["22071"]["prv_page_conf"] = "./validate_confirm.html";
value["22071"]["prv_alert"] = "";
value["22071"]["prv_invitation"] = "prov_enter_account";
value["22071"]["prv_button_text"] = "";
value["22071"]["prv_mask"] = "<!^\\.+${1,20}>";
value["22071"]["prv_group"] = "Финансовый брокер";
value["22071"]["prv_online_check"] = "true";

// 	Кыргыз ТВ-оплата рекламы
value["22072"] = new Array();
value["22072"]["prv_id"] = "22072";
value["22072"]["prv_name"] = "Кыргыз ТВ";
value["22072"]["prv_image"] = "./img/ui_item/KgTv.png";
value["22072"]["prv_folder"] = "zkh";
value["22072"]["prv_page"] = "./cellular.html";
value["22072"]["prv_page_conf"] = "./validate_confirm.html";
value["22072"]["prv_alert"] = "";
value["22072"]["prv_invitation"] = "prov_enter_account";
value["22072"]["prv_button_text"] = "";
value["22072"]["prv_mask"] = "0<!^\\d+${9}>";
value["22072"]["prv_group"] = "оплата рекламы";
value["22072"]["prv_online_check"] = "true";


// 	Ак-Жол Такси
value["22073"] = new Array();
value["22073"]["prv_id"] = "22073";
value["22073"]["prv_name"] = "Ак-Жол Такси";
value["22073"]["prv_image"] = "./img/ui_item/taxi_akjol.png";
value["22073"]["prv_folder"] = "tax";
value["22073"]["prv_page"] = "./cellular.html";
value["22073"]["prv_page_conf"] = "./validate_confirm.html";
value["22073"]["prv_alert"] = "";
value["22073"]["prv_invitation"] = "prov_enter_account";
value["22073"]["prv_button_text"] = "";
value["22073"]["prv_mask"] = "<!^\\.+${5,9}>";
value["22073"]["prv_group"] = "пополнение счета";
value["22073"]["prv_online_check"] = "true";

// 	Здоровая школа
value["22074"] = new Array();
value["22074"]["prv_id"] = "22074";
value["22074"]["prv_name"] = "Здоровая школа";
value["22074"]["prv_image"] = "./img/ui_item/zdorov_shool.png";
value["22074"]["prv_folder"] = "other";
value["22074"]["prv_page"] = "./cellular_shool.html";
value["22074"]["prv_page_conf"] = "./sh_validate_confirm.html";
value["22074"]["prv_alert"] = "";
value["22074"]["prv_invitation"] = "prov_enter_account";
value["22074"]["prv_button_text"] = "";
value["22074"]["prv_mask"] = "<!^\\.+${1,4}>";
value["22074"]["prv_group"] = "оплата за консультацию";
value["22074"]["prv_online_check"] = "true";


// 	ТСЖ 7-49/2
value["22075"] = new Array();
value["22075"]["prv_id"] = "22075";
value["22075"]["prv_name"] = "ТСЖ 7-49/2";
value["22075"]["prv_image"] = "./img/ui_item/tsj.png";
value["22075"]["prv_folder"] = "other";
value["22075"]["prv_page"] = "./cellular.html";
value["22075"]["prv_page_conf"] = "./validate_confirm.html";
value["22075"]["prv_alert"] = "";
value["22075"]["prv_invitation"] = "prov_enter_account";
value["22075"]["prv_button_text"] = "";
value["22075"]["prv_mask"] = "<!^\\d+${4}>-<!^\\d+${2}>";
value["22075"]["prv_group"] = "оплата за коммунальные услуги";
value["22075"]["prv_online_check"] = "true";


// 	МА Жетиогуз 
// Comment provider
// value["22077"] = new Array();
// value["22077"]["prv_id"] = "22077";
// value["22077"]["prv_name"] = "МА Жетиогуз";
// value["22077"]["prv_image"] = "./img/ui_item/MAJ.png";
// value["22077"]["prv_folder"] = "charity";
// value["22077"]["prv_page"] = "./cellular.html";
// value["22077"]["prv_page_conf"] = "./validate_confirm.html";
// value["22077"]["prv_alert"] = "";
// value["22077"]["prv_invitation"] = "prov_enter_account";
// value["22077"]["prv_button_text"] = "";
// value["22077"]["prv_mask"] = "<!^\\.+${10,11}>";
// value["22077"]["prv_group"] = "";
// value["22077"]["prv_online_check"] = "true";

// 	Намба Такси Джалал-Абад
// Comment provider
// value["22078"] = new Array();
// value["22078"]["prv_id"] = "22078";
// value["22078"]["prv_name"] = "Намба Такси Джалал-Абад";
// value["22078"]["prv_image"] = "./img/ui_item/namba_jb.png";
// value["22078"]["prv_folder"] = "tax";
// value["22078"]["prv_page"] = "./cellular.html";
// value["22078"]["prv_page_conf"] = "./validate_confirm.html";
// value["22078"]["prv_alert"] = "";
// value["22078"]["prv_invitation"] = "prov_enter_account";
// value["22078"]["prv_button_text"] = "";
// value["22078"]["prv_mask"] = "0<!^\\d+${9}>";
// value["22078"]["prv_group"] = "пополнение счета";
// value["22078"]["prv_online_check"] = "true";




// ЭльПэй пополнение кошелька
value["22033"] = new Array();
value["22033"]["prv_id"] = "22033";
value["22033"]["prv_name"] = 'Wallet one -пополнение кошелька';
value["22033"]["prv_folder"] = "folder_online_pay";
value["22033"]["prv_image"] = "./img/ui_item/elmani.png";
value["22033"]["prv_top_image"] = "./img/ui_item/elmani.png";
value["22033"]["prv_page"] = "./num_keyboard.html";
value["22033"]["prv_page_back_num"] = "./pages.html";
value["22033"]["prv_page_conf"] = "./lp_validate_confirm.html";
value["22033"]["prv_lang_any_keyboard"] = "ru";
value["22033"]["prv_type_any_keyboard"] = "NORM";
value["22033"]["prv_invitation"] = "prov_enter_webmoney_cash";
value["22033"]["prv_success_sign"] = "cellular_successful_notice";
value["22033"]["prv_error_sign"] = "cellular_bad_format";
value["22033"]["prv_button_text"] = "";
value["22033"]["prv_mask"] = "";
value["22033"]["prv_surmask"] = "9$9$996*********";
value["22033"]["prv_group"] = "Электронные деньги";
value["22033"]["prv_online_check"] = "true";
value["22033"]["prv_receipt_extra_message"] = "";



// (NativePay) WebMoney US
value["11318"] = new Array();
value["11318"]["prv_id"] = "11318";
value["11318"]["prv_name"] = 'WebMoney Доллары - пополнение счета';
value["11318"]["prv_folder"] = "folder_webmoney_page";
value["11318"]["prv_image"] = "./img/ui_item/WebMoney.png";
value["11318"]["prv_top_image"] = "./img/ui_item/WebMoney.png";
value["11318"]["prv_page"] = "./num_keyboard.html";
value["11318"]["prv_page_back_num"] = "./pages.html";
value["11318"]["prv_page_conf"] = "./np_validate_confirm.html";
value["11318"]["prv_alert"] = "Минимальная сумма<br>разового платежа: 100 сом.<br><br>Максимальная сумма<br>разового платежа: 15 000 сом.";
value["11318"]["prv_lang_any_keyboard"] = "ru";
value["11318"]["prv_type_any_keyboard"] = "NORM";
value["11318"]["prv_invitation"] = "prov_enter_webmoney_cash";
value["11318"]["prv_success_sign"] = "cellular_successful_notice";
value["11318"]["prv_error_sign"] = "cellular_bad_format";
value["11318"]["prv_button_text"] = "";
value["11318"]["prv_mask"] = "";
value["11318"]["prv_surmask"] = "12$12$Z************";
value["11318"]["prv_group"] = "Электронные деньги";
value["11318"]["prv_online_check"] = "true";
value["11318"]["prv_receipt_extra_message"] = "";


// (NativePay) Одноклассники
value["6464"] = new Array();
value["6464"]["prv_id"] = "6464";
value["6464"]["prv_name"] = 'Одноклассники';
value["6464"]["prv_folder"] = "folder_social_network";
value["6464"]["prv_image"] = "./img/ui_item/odnoklassniki.png";
value["6464"]["prv_top_image"] = "./img/ui_item/odnoklassniki.png";
value["6464"]["prv_page"] = "./anykey_keyboard.html";
value["6464"]["prv_page_back_any"] = "./index.html";
value["6464"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6464"]["prv_alert"] = "";
value["6464"]["prv_lang_any_keyboard"] = "en";
value["6464"]["prv_type_any_keyboard"] = "NORM";
value["6464"]["prv_invitation"] = "prov_enter_code";
value["6464"]["prv_success_sign"] = "cellular_successful_notice";
value["6464"]["prv_error_sign"] = "cellular_bad_format";
value["6464"]["prv_surmask"] = "1$33$*********************************";
value["6464"]["prv_button_text"] = "";
value["6464"]["prv_mask"] = "";
value["6464"]["prv_group"] = "Пополнение баланса";
value["6464"]["prv_online_check"] = "true";
value["6464"]["prv_receipt_extra_message"] = "";




// (Моментальные платежи)AIVA(Россия)-сотовая связь
value["22079"] = new Array();
value["22079"]["prv_id"] = "22079";
value["22079"]["prv_name"] = 'AIVA(Россия) - пополнение счета';
value["22079"]["prv_folder"] = "foreign";
value["22079"]["prv_image"] = "./img/ui_item/aiva_mobile.png";
value["22079"]["prv_top_image"] = "./img/ui_item/aiva_mobile.png";
value["22079"]["prv_page"] = "./num_keyboard.html";
value["22079"]["prv_page_back_num"] = "./pages.html";
value["22079"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22079"]["prv_alert"] = "";
value["22079"]["prv_lang_any_keyboard"] = "ru";
value["22079"]["prv_type_any_keyboard"] = "NORM";
value["22079"]["prv_invitation"] = "prov_enter_phone";
value["22079"]["prv_success_sign"] = "cellular_successful_notice";
value["22079"]["prv_error_sign"] = "cellular_bad_format";
value["22079"]["prv_button_text"] = "";
value["22079"]["prv_mask"] = "";
value["22079"]["prv_surmask"] = "7$15$***************";
value["22079"]["prv_group"] = "Сотовая связь";
value["22079"]["prv_online_check"] = "true";
value["22079"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи)TourSim (Казахстан)-сотовая связь
value["22080"] = new Array();
value["22080"]["prv_id"] = "22080";
value["22080"]["prv_name"] = 'TourSim (Казахстан) - пополнение счета';
value["22080"]["prv_folder"] = "foreign";
value["22080"]["prv_image"] = "./img/ui_item/toursim.png";
value["22080"]["prv_top_image"] = "./img/ui_item/toursim.png";
value["22080"]["prv_page"] = "./num_keyboard.html";
value["22080"]["prv_page_back_num"] = "./pages.html";
value["22080"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22080"]["prv_alert"] = "";
value["22080"]["prv_lang_any_keyboard"] = "ru";
value["22080"]["prv_type_any_keyboard"] = "NORM";
value["22080"]["prv_invitation"] = "prov_enter_phone";
value["22080"]["prv_success_sign"] = "cellular_successful_notice";
value["22080"]["prv_error_sign"] = "cellular_bad_format";
value["22080"]["prv_button_text"] = "";
value["22080"]["prv_mask"] = "";
value["22080"]["prv_surmask"] = "7$15$***************";
value["22080"]["prv_group"] = "Сотовая связь";
value["22080"]["prv_online_check"] = "true";
value["22080"]["prv_receipt_extra_message"] = "";


// (Моментальные платежи)Билайн (Армения)-сотовая связь
value["22081"] = new Array();
value["22081"]["prv_id"] = "22081";
value["22081"]["prv_name"] = 'Билайн (Армения) - пополнение счета';
value["22081"]["prv_folder"] = "foreign";
value["22081"]["prv_image"] = "./img/ui_item/BeeLineArmenia.png";
value["22081"]["prv_top_image"] = "./img/ui_item/BeeLineArmenia.png";
value["22081"]["prv_page"] = "./num_keyboard.html";
value["22081"]["prv_page_back_num"] = "./pages.html";
value["22081"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22081"]["prv_alert"] = "";
value["22081"]["prv_lang_any_keyboard"] = "ru";
value["22081"]["prv_type_any_keyboard"] = "NORM";
value["22081"]["prv_invitation"] = "prov_enter_phone";
value["22081"]["prv_success_sign"] = "cellular_successful_notice";
value["22081"]["prv_error_sign"] = "cellular_bad_format";
value["22081"]["prv_button_text"] = "";
value["22081"]["prv_mask"] = "";
value["22081"]["prv_surmask"] = "7$15$***************";
value["22081"]["prv_group"] = "Сотовая связь";
value["22081"]["prv_online_check"] = "true";
value["22081"]["prv_receipt_extra_message"] = "";


// (Моментальные платежи)МТС (Армения)-сотовая связь
value["22082"] = new Array();
value["22082"]["prv_id"] = "22082";
value["22082"]["prv_name"] = 'МТС (Армения) - пополнение счета';
value["22082"]["prv_folder"] = "foreign";
value["22082"]["prv_image"] = "./img/ui_item/mts.png";
value["22082"]["prv_top_image"] = "./img/ui_item/mts.png";
value["22082"]["prv_page"] = "./num_keyboard.html";
value["22082"]["prv_page_back_num"] = "./pages.html";
value["22082"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22082"]["prv_alert"] = "";
value["22082"]["prv_lang_any_keyboard"] = "ru";
value["22082"]["prv_type_any_keyboard"] = "NORM";
value["22082"]["prv_invitation"] = "prov_enter_phone";
value["22082"]["prv_success_sign"] = "cellular_successful_notice";
value["22082"]["prv_error_sign"] = "cellular_bad_format";
value["22082"]["prv_button_text"] = "";
value["22082"]["prv_mask"] = "";
value["22082"]["prv_surmask"] = "7$15$***************";
value["22082"]["prv_group"] = "Сотовая связь";
value["22082"]["prv_online_check"] = "true";
value["22082"]["prv_receipt_extra_message"] = "";


// 	(Моментальные платежи)Orange (Армения)-сотовая связь
value["22083"] = new Array();
value["22083"]["prv_id"] = "22083";
value["22083"]["prv_name"] = 'Orange (Армения) - пополнение счета';
value["22083"]["prv_folder"] = "foreign";
value["22083"]["prv_image"] = "./img/ui_item/OrangeArm.png";
value["22083"]["prv_top_image"] = "./img/ui_item/OrangeArm.png";
value["22083"]["prv_page"] = "./num_keyboard.html";
value["22083"]["prv_page_back_num"] = "./pages.html";
value["22083"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22083"]["prv_alert"] = "";
value["22083"]["prv_lang_any_keyboard"] = "ru";
value["22083"]["prv_type_any_keyboard"] = "NORM";
value["22083"]["prv_invitation"] = "prov_enter_phone";
value["22083"]["prv_success_sign"] = "cellular_successful_notice";
value["22083"]["prv_error_sign"] = "cellular_bad_format";
value["22083"]["prv_button_text"] = "";
value["22083"]["prv_mask"] = "";
value["22083"]["prv_surmask"] = "7$15$***************";
value["22083"]["prv_group"] = "Сотовая связь";
value["22083"]["prv_online_check"] = "true";
value["22083"]["prv_receipt_extra_message"] = "";


// 	(Моментальные платежи)Билайн (Грузия)-сотовая связь
value["22084"] = new Array();
value["22084"]["prv_id"] = "22084";
value["22084"]["prv_name"] = 'Билайн (Грузия) - пополнение счета';
value["22084"]["prv_folder"] = "foreign";
value["22084"]["prv_image"] = "./img/ui_item/Beeline-Georgia.png";
value["22084"]["prv_top_image"] = "./img/ui_item/Beeline-Georgia.png";
value["22084"]["prv_page"] = "./num_keyboard.html";
value["22084"]["prv_page_back_num"] = "./pages.html";
value["22084"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22084"]["prv_alert"] = "";
value["22084"]["prv_lang_any_keyboard"] = "ru";
value["22084"]["prv_type_any_keyboard"] = "NORM";
value["22084"]["prv_invitation"] = "prov_enter_phone";
value["22084"]["prv_success_sign"] = "cellular_successful_notice";
value["22084"]["prv_error_sign"] = "cellular_bad_format";
value["22084"]["prv_button_text"] = "";
value["22084"]["prv_mask"] = "";
value["22084"]["prv_surmask"] = "7$15$***************";
value["22084"]["prv_group"] = "Сотовая связь";
value["22084"]["prv_online_check"] = "true";
value["22084"]["prv_receipt_extra_message"] = "";


// 	(Моментальные платежи)Bani (Грузия)-сотовая связь
value["22086"] = new Array();
value["22086"]["prv_id"] = "22086";
value["22086"]["prv_name"] = 'Bani (Грузия) - пополнение счета';
value["22086"]["prv_folder"] = "foreign";
value["22086"]["prv_image"] = "./img/ui_item/Bani.png";
value["22086"]["prv_top_image"] = "./img/ui_item/Bani.png";
value["22086"]["prv_page"] = "./num_keyboard.html";
value["22086"]["prv_page_back_num"] = "./pages.html";
value["22086"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22086"]["prv_alert"] = "";
value["22086"]["prv_lang_any_keyboard"] = "ru";
value["22086"]["prv_type_any_keyboard"] = "NORM";
value["22086"]["prv_invitation"] = "prov_enter_phone";
value["22086"]["prv_success_sign"] = "cellular_successful_notice";
value["22086"]["prv_error_sign"] = "cellular_bad_format";
value["22086"]["prv_button_text"] = "";
value["22086"]["prv_mask"] = "";
value["22086"]["prv_surmask"] = "7$15$***************";
value["22086"]["prv_group"] = "Сотовая связь";
value["22086"]["prv_online_check"] = "true";
value["22086"]["prv_receipt_extra_message"] = "";


// 	(Моментальные платежи)GeoCell (Грузия)-сотовая связь
value["22087"] = new Array();
value["22087"]["prv_id"] = "22087";
value["22087"]["prv_name"] = 'GeoCell (Грузия) - пополнение счета';
value["22087"]["prv_folder"] = "foreign";
value["22087"]["prv_image"] = "./img/ui_item/Geocell.png";
value["22087"]["prv_top_image"] = "./img/ui_item/Geocell.png";
value["22087"]["prv_page"] = "./num_keyboard.html";
value["22087"]["prv_page_back_num"] = "./pages.html";
value["22087"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22087"]["prv_alert"] = "";
value["22087"]["prv_lang_any_keyboard"] = "ru";
value["22087"]["prv_type_any_keyboard"] = "NORM";
value["22087"]["prv_invitation"] = "prov_enter_phone";
value["22087"]["prv_success_sign"] = "cellular_successful_notice";
value["22087"]["prv_error_sign"] = "cellular_bad_format";
value["22087"]["prv_button_text"] = "";
value["22087"]["prv_mask"] = "";
value["22087"]["prv_surmask"] = "7$15$***************";
value["22087"]["prv_group"] = "Сотовая связь";
value["22087"]["prv_online_check"] = "true";
value["22087"]["prv_receipt_extra_message"] = "";


// 	(Моментальные платежи)GlobalCell (Грузия)-сотовая связь
value["22088"] = new Array();
value["22088"]["prv_id"] = "22088";
value["22088"]["prv_name"] = 'GlobalCell (Грузия) - пополнение счета';
value["22088"]["prv_folder"] = "foreign";
value["22088"]["prv_image"] = "./img/ui_item/GlobalCell.png";
value["22088"]["prv_top_image"] = "./img/ui_item/GlobalCell.png";
value["22088"]["prv_page"] = "./num_keyboard.html";
value["22088"]["prv_page_back_num"] = "./pages.html";
value["22088"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22088"]["prv_alert"] = "";
value["22088"]["prv_lang_any_keyboard"] = "ru";
value["22088"]["prv_type_any_keyboard"] = "NORM";
value["22088"]["prv_invitation"] = "prov_enter_phone";
value["22088"]["prv_success_sign"] = "cellular_successful_notice";
value["22088"]["prv_error_sign"] = "cellular_bad_format";
value["22088"]["prv_button_text"] = "";
value["22088"]["prv_mask"] = "";
value["22088"]["prv_surmask"] = "7$15$***************";
value["22088"]["prv_group"] = "Сотовая связь";
value["22088"]["prv_online_check"] = "true";
value["22088"]["prv_receipt_extra_message"] = "";


// 	(Моментальные платежи)Magticom (Грузия)-сотовая связь
value["22089"] = new Array();
value["22089"]["prv_id"] = "22089";
value["22089"]["prv_name"] = 'Magticom (Грузия) - пополнение счета';
value["22089"]["prv_folder"] = "foreign";
value["22089"]["prv_image"] = "./img/ui_item/MagtiCom.png";
value["22089"]["prv_top_image"] = "./img/ui_item/MagtiCom.png";
value["22089"]["prv_page"] = "./num_keyboard.html";
value["22089"]["prv_page_back_num"] = "./pages.html";
value["22089"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22089"]["prv_alert"] = "";
value["22089"]["prv_lang_any_keyboard"] = "ru";
value["22089"]["prv_type_any_keyboard"] = "NORM";
value["22089"]["prv_invitation"] = "prov_enter_phone";
value["22089"]["prv_success_sign"] = "cellular_successful_notice";
value["22089"]["prv_error_sign"] = "cellular_bad_format";
value["22089"]["prv_button_text"] = "";
value["22089"]["prv_mask"] = "";
value["22089"]["prv_surmask"] = "7$15$***************";
value["22089"]["prv_group"] = "Сотовая связь";
value["22089"]["prv_online_check"] = "true";
value["22089"]["prv_receipt_extra_message"] = "";


// 	(Моментальные платежи)МТС (Украина)-сотовая связь
value["22090"] = new Array();
value["22090"]["prv_id"] = "22090";
value["22090"]["prv_name"] = 'МТС (Украина)- пополнение счета';
value["22090"]["prv_folder"] = "foreign";
value["22090"]["prv_image"] = "./img/ui_item/MTC-Ukraine.png";
value["22090"]["prv_top_image"] = "./img/ui_item/MTC-Ukraine.png";
value["22090"]["prv_page"] = "./num_keyboard.html";
value["22090"]["prv_page_back_num"] = "./pages.html";
value["22090"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22090"]["prv_alert"] = "";
value["22090"]["prv_lang_any_keyboard"] = "ru";
value["22090"]["prv_type_any_keyboard"] = "NORM";
value["22090"]["prv_invitation"] = "prov_enter_phone";
value["22090"]["prv_success_sign"] = "cellular_successful_notice";
value["22090"]["prv_error_sign"] = "cellular_bad_format";
value["22090"]["prv_button_text"] = "";
value["22090"]["prv_mask"] = "";
value["22090"]["prv_surmask"] = "7$15$***************";
value["22090"]["prv_group"] = "Сотовая связь";
value["22090"]["prv_online_check"] = "true";
value["22090"]["prv_receipt_extra_message"] = "";


// 	(Моментальные платежи)Life (Украина)-сотовая связь
value["22091"] = new Array();
value["22091"]["prv_id"] = "22091";
value["22091"]["prv_name"] = 'Life (Украина)- пополнение счета';
value["22091"]["prv_folder"] = "foreign";
value["22091"]["prv_image"] = "./img/ui_item/LifeUa.png";
value["22091"]["prv_top_image"] = "./img/ui_item/LifeUa.png";
value["22091"]["prv_page"] = "./num_keyboard.html";
value["22091"]["prv_page_back_num"] = "./pages.html";
value["22091"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22091"]["prv_alert"] = "";
value["22091"]["prv_lang_any_keyboard"] = "ru";
value["22091"]["prv_type_any_keyboard"] = "NORM";
value["22091"]["prv_invitation"] = "prov_enter_phone";
value["22091"]["prv_success_sign"] = "cellular_successful_notice";
value["22091"]["prv_error_sign"] = "cellular_bad_format";
value["22091"]["prv_button_text"] = "";
value["22091"]["prv_mask"] = "";
value["22091"]["prv_surmask"] = "7$15$***************";
value["22091"]["prv_group"] = "Сотовая связь";
value["22091"]["prv_online_check"] = "true";
value["22091"]["prv_receipt_extra_message"] = "";



// 	(Моментальные платежи)Kyevstar (Украина)-сотовая связь
value["22092"] = new Array();
value["22092"]["prv_id"] = "22092";
value["22092"]["prv_name"] = 'Kyevstar (Украина)- пополнение счета';
value["22092"]["prv_folder"] = "foreign";
value["22092"]["prv_image"] = "./img/ui_item/KyevStar.png";
value["22092"]["prv_top_image"] = "./img/ui_item/KyevStar.png";
value["22092"]["prv_page"] = "./num_keyboard.html";
value["22092"]["prv_page_back_num"] = "./pages.html";
value["22092"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22092"]["prv_alert"] = "";
value["22092"]["prv_lang_any_keyboard"] = "ru";
value["22092"]["prv_type_any_keyboard"] = "NORM";
value["22092"]["prv_invitation"] = "prov_enter_phone";
value["22092"]["prv_success_sign"] = "cellular_successful_notice";
value["22092"]["prv_error_sign"] = "cellular_bad_format";
value["22092"]["prv_button_text"] = "";
value["22092"]["prv_mask"] = "";
value["22092"]["prv_surmask"] = "7$15$***************";
value["22092"]["prv_group"] = "Сотовая связь";
value["22092"]["prv_online_check"] = "true";
value["22092"]["prv_receipt_extra_message"] = "";


//(Моментальные платежи)Билайн (Таджикистан)-сотовая связь
value["22093"] = new Array();
value["22093"]["prv_id"] = "22093";
value["22093"]["prv_name"] = 'Билайн (Таджикистан)- пополнение счета';
value["22093"]["prv_folder"] = "foreign";
value["22093"]["prv_image"] = "./img/ui_item/BeeLineArmenia.png";
value["22093"]["prv_top_image"] = "./img/ui_item/BeeLineArmenia.png";
value["22093"]["prv_page"] = "./num_keyboard.html";
value["22093"]["prv_page_back_num"] = "./pages.html";
value["22093"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22093"]["prv_alert"] = "";
value["22093"]["prv_lang_any_keyboard"] = "ru";
value["22093"]["prv_type_any_keyboard"] = "NORM";
value["22093"]["prv_invitation"] = "prov_enter_phone";
value["22093"]["prv_success_sign"] = "cellular_successful_notice";
value["22093"]["prv_error_sign"] = "cellular_bad_format";
value["22093"]["prv_button_text"] = "";
value["22093"]["prv_mask"] = "";
value["22093"]["prv_surmask"] = "7$15$***************";
value["22093"]["prv_group"] = "Сотовая связь";
value["22093"]["prv_online_check"] = "true";
value["22093"]["prv_receipt_extra_message"] = "";

//(Моментальные платежи)Мегафон (Таджикистан)-сотовая связь
value["22094"] = new Array();
value["22094"]["prv_id"] = "22094";
value["22094"]["prv_name"] = 'Мегафон (Таджикистан)- пополнение счета';
value["22094"]["prv_folder"] = "foreign";
value["22094"]["prv_image"] = "./img/ui_item/MagafonTajikistan.png";
value["22094"]["prv_top_image"] = "./img/ui_item/MagafonTajikistan.png";
value["22094"]["prv_page"] = "./num_keyboard.html";
value["22094"]["prv_page_back_num"] = "./pages.html";
value["22094"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22094"]["prv_alert"] = "";
value["22094"]["prv_lang_any_keyboard"] = "ru";
value["22094"]["prv_type_any_keyboard"] = "NORM";
value["22094"]["prv_invitation"] = "prov_enter_phone";
value["22094"]["prv_success_sign"] = "cellular_successful_notice";
value["22094"]["prv_error_sign"] = "cellular_bad_format";
value["22094"]["prv_button_text"] = "";
value["22094"]["prv_mask"] = "";
value["22094"]["prv_surmask"] = "7$15$***************";
value["22094"]["prv_group"] = "Сотовая связь";
value["22094"]["prv_online_check"] = "true";
value["22094"]["prv_receipt_extra_message"] = "";


//(Моментальные платежи)Вавилон Мобаил (Таджикистан)-сотовая связь
value["22096"] = new Array();
value["22096"]["prv_id"] = "22096";
value["22096"]["prv_name"] = 'Вавилон Мобаил (Таджикистан)- пополнение счета';
value["22096"]["prv_folder"] = "foreign";
value["22096"]["prv_image"] = "./img/ui_item/Babilon-Mobile.png";
value["22096"]["prv_top_image"] = "./img/ui_item/Babilon-Mobile.png";
value["22096"]["prv_page"] = "./num_keyboard.html";
value["22096"]["prv_page_back_num"] = "./pages.html";
value["22096"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22096"]["prv_alert"] = "";
value["22096"]["prv_lang_any_keyboard"] = "ru";
value["22096"]["prv_type_any_keyboard"] = "NORM";
value["22096"]["prv_invitation"] = "prov_enter_phone";
value["22096"]["prv_success_sign"] = "cellular_successful_notice";
value["22096"]["prv_error_sign"] = "cellular_bad_format";
value["22096"]["prv_button_text"] = "";
value["22096"]["prv_mask"] = "";
value["22096"]["prv_surmask"] = "7$15$***************";
value["22096"]["prv_group"] = "Сотовая связь";
value["22096"]["prv_online_check"] = "true";
value["22096"]["prv_receipt_extra_message"] = "";


//(Моментальные платежи)Indigo (Таджикистан)-сотовая связь
value["22097"] = new Array();
value["22097"]["prv_id"] = "22097";
value["22097"]["prv_name"] = 'Indigo (Таджикистан)- пополнение счета';
value["22097"]["prv_folder"] = "foreign";
value["22097"]["prv_image"] = "./img/ui_item/IndigoTcell.png";
value["22097"]["prv_top_image"] = "./img/ui_item/IndigoTcell.png";
value["22097"]["prv_page"] = "./num_keyboard.html";
value["22097"]["prv_page_back_num"] = "./pages.html";
value["22097"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22097"]["prv_alert"] = "";
value["22097"]["prv_lang_any_keyboard"] = "ru";
value["22097"]["prv_type_any_keyboard"] = "NORM";
value["22097"]["prv_invitation"] = "prov_enter_phone";
value["22097"]["prv_success_sign"] = "cellular_successful_notice";
value["22097"]["prv_error_sign"] = "cellular_bad_format";
value["22097"]["prv_button_text"] = "";
value["22097"]["prv_mask"] = "";
value["22097"]["prv_surmask"] = "7$15$***************";
value["22097"]["prv_group"] = "Сотовая связь";
value["22097"]["prv_online_check"] = "true";
value["22097"]["prv_receipt_extra_message"] = "";


//(Моментальные платежи)TK-Mobile (Таджикистан)-сотовая связь
value["22098"] = new Array();
value["22098"]["prv_id"] = "22098";
value["22098"]["prv_name"] = 'TK-Mobile (Таджикистан)- пополнение счета';
value["22098"]["prv_folder"] = "foreign";
value["22098"]["prv_image"] = "./img/ui_item/tk-mobile.png";
value["22098"]["prv_top_image"] = "./img/ui_item/tk-mobile.png";
value["22098"]["prv_page"] = "./num_keyboard.html";
value["22098"]["prv_page_back_num"] = "./pages.html";
value["22098"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22098"]["prv_alert"] = "";
value["22098"]["prv_lang_any_keyboard"] = "ru";
value["22098"]["prv_type_any_keyboard"] = "NORM";
value["22098"]["prv_invitation"] = "prov_enter_phone";
value["22098"]["prv_success_sign"] = "cellular_successful_notice";
value["22098"]["prv_error_sign"] = "cellular_bad_format";
value["22098"]["prv_button_text"] = "";
value["22098"]["prv_mask"] = "";
value["22098"]["prv_surmask"] = "7$15$***************";
value["22098"]["prv_group"] = "Сотовая связь";
value["22098"]["prv_online_check"] = "true";
value["22098"]["prv_receipt_extra_message"] = "";


//(Моментальные платежи)Ucell(Узбекистан)-сотовая связь
value["22099"] = new Array();
value["22099"]["prv_id"] = "22099";
value["22099"]["prv_name"] = 'Ucell(Узбекистан)- пополнение счета';
value["22099"]["prv_folder"] = "foreign";
value["22099"]["prv_image"] = "./img/ui_item/UCell.png";
value["22099"]["prv_top_image"] = "./img/ui_item/UCell.png";
value["22099"]["prv_page"] = "./num_keyboard.html";
value["22099"]["prv_page_back_num"] = "./pages.html";
value["22099"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22099"]["prv_alert"] = "";
value["22099"]["prv_lang_any_keyboard"] = "ru";
value["22099"]["prv_type_any_keyboard"] = "NORM";
value["22099"]["prv_invitation"] = "prov_enter_phone";
value["22099"]["prv_success_sign"] = "cellular_successful_notice";
value["22099"]["prv_error_sign"] = "cellular_bad_format";
value["22099"]["prv_button_text"] = "";
value["22099"]["prv_mask"] = "";
value["22099"]["prv_surmask"] = "7$15$***************";
value["22099"]["prv_group"] = "Сотовая связь";
value["22099"]["prv_online_check"] = "true";
value["22099"]["prv_receipt_extra_message"] = "";


//(Моментальные платежи)Билайн(Узбекистан)-сотовая связь
value["22100"] = new Array();
value["22100"]["prv_id"] = "22100";
value["22100"]["prv_name"] = 'Билайн(Узбекистан)- пополнение счета';
value["22100"]["prv_folder"] = "foreign";
value["22100"]["prv_image"] = "./img/ui_item/beeline.png";
value["22100"]["prv_top_image"] = "./img/ui_item/beeline.png";
value["22100"]["prv_page"] = "./num_keyboard.html";
value["22100"]["prv_page_back_num"] = "./pages.html";
value["22100"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22100"]["prv_alert"] = "";
value["22100"]["prv_lang_any_keyboard"] = "ru";
value["22100"]["prv_type_any_keyboard"] = "NORM";
value["22100"]["prv_invitation"] = "prov_enter_phone";
value["22100"]["prv_success_sign"] = "cellular_successful_notice";
value["22100"]["prv_error_sign"] = "cellular_bad_format";
value["22100"]["prv_button_text"] = "";
value["22100"]["prv_mask"] = "";
value["22100"]["prv_surmask"] = "7$15$***************";
value["22100"]["prv_group"] = "Сотовая связь";
value["22100"]["prv_online_check"] = "true";
value["22100"]["prv_receipt_extra_message"] = "";


//(Моментальные платежи)МТС (Беларусь)-сотовая связь
value["22101"] = new Array();
value["22101"]["prv_id"] = "22101";
value["22101"]["prv_name"] = 'МТС (Беларусь)- пополнение счета';
value["22101"]["prv_folder"] = "foreign";
value["22101"]["prv_image"] = "./img/ui_item/MTC-Belarus.png";
value["22101"]["prv_top_image"] = "./img/ui_item/MTC-Belarus.png";
value["22101"]["prv_page"] = "./num_keyboard.html";
value["22101"]["prv_page_back_num"] = "./pages.html";
value["22101"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22101"]["prv_alert"] = "";
value["22101"]["prv_lang_any_keyboard"] = "ru";
value["22101"]["prv_type_any_keyboard"] = "NORM";
value["22101"]["prv_invitation"] = "prov_enter_phone";
value["22101"]["prv_success_sign"] = "cellular_successful_notice";
value["22101"]["prv_error_sign"] = "cellular_bad_format";
value["22101"]["prv_button_text"] = "";
value["22101"]["prv_mask"] = "";
value["22101"]["prv_surmask"] = "7$15$***************";
value["22101"]["prv_group"] = "Сотовая связь";
value["22101"]["prv_online_check"] = "true";
value["22101"]["prv_receipt_extra_message"] = "";


//(Моментальные платежи)Velcom (Беларусь)-сотовая связь
value["22102"] = new Array();
value["22102"]["prv_id"] = "22102";
value["22102"]["prv_name"] = 'Velcom (Беларусь)- пополнение счета';
value["22102"]["prv_folder"] = "foreign";
value["22102"]["prv_image"] = "./img/ui_item/velcom.png";
value["22102"]["prv_top_image"] = "./img/ui_item/velcom.png";
value["22102"]["prv_page"] = "./num_keyboard.html";
value["22102"]["prv_page_back_num"] = "./pages.html";
value["22102"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22102"]["prv_alert"] = "";
value["22102"]["prv_lang_any_keyboard"] = "ru";
value["22102"]["prv_type_any_keyboard"] = "NORM";
value["22102"]["prv_invitation"] = "prov_enter_phone";
value["22102"]["prv_success_sign"] = "cellular_successful_notice";
value["22102"]["prv_error_sign"] = "cellular_bad_format";
value["22102"]["prv_button_text"] = "";
value["22102"]["prv_mask"] = "";
value["22102"]["prv_surmask"] = "7$15$***************";
value["22102"]["prv_group"] = "Сотовая связь";
value["22102"]["prv_online_check"] = "true";
value["22102"]["prv_receipt_extra_message"] = "";


//(Моментальные платежи)Bali (Грузия)-сотовая связь
value["22085"] = new Array();
value["22085"]["prv_id"] = "22085";
value["22085"]["prv_name"] = 'Bali (Грузия)- пополнение счета(в нутри сети)';
value["22085"]["prv_folder"] = "foreign";
value["22085"]["prv_image"] = "./img/ui_item/Bali.png";
value["22085"]["prv_top_image"] = "./img/ui_item/Bali.png";
value["22085"]["prv_page"] = "./num_keyboard.html";
value["22085"]["prv_page_back_num"] = "./pages.html";
value["22085"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22085"]["prv_alert"] = "";
value["22085"]["prv_lang_any_keyboard"] = "ru";
value["22085"]["prv_type_any_keyboard"] = "NORM";
value["22085"]["prv_invitation"] = "prov_enter_phone";
value["22085"]["prv_success_sign"] = "cellular_successful_notice";
value["22085"]["prv_error_sign"] = "cellular_bad_format";
value["22085"]["prv_button_text"] = "";
value["22085"]["prv_mask"] = "";
value["22085"]["prv_surmask"] = "7$15$***************";
value["22085"]["prv_group"] = "Сотовая связь";
value["22085"]["prv_online_check"] = "true";
value["22085"]["prv_receipt_extra_message"] = "";
value["22085"]["prv_receipt_extra_message"] = "";





// 	Комтранском-вывоз мусора
value["22103"] = new Array();
value["22103"]["prv_id"] = "22103";
value["22103"]["prv_name"] = "Комтранском-Октябрьский район";
value["22103"]["prv_image"] = "./img/ui_item/komstro.png";
value["22103"]["prv_folder"] = "zkh";
value["22103"]["prv_page"] = "./cellular_tazalyk.html";
value["22103"]["prv_page_conf"] = "./validate_confirm.html";
value["22103"]["prv_alert"] = "Оплата принимается только за Октябрьский район";
value["22103"]["prv_invitation"] = "prov_enter_account";
value["22103"]["prv_button_text"] = "";
value["22103"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22103"]["prv_group"] = "Вывоз мусора";
value["22103"]["prv_online_check"] = "true";



// 	Комтранском-вывоз мусора(юр. лица)
value["22104"] = new Array();
value["22104"]["prv_id"] = "22104";
value["22104"]["prv_name"] = "Комтранском-Октябрьский район(юр.лица)";
value["22104"]["prv_image"] = "./img/ui_item/komstro.png";
value["22104"]["prv_folder"] = "zkh";
value["22104"]["prv_page"] = "./cellular_tazalyk.html";
value["22104"]["prv_page_conf"] = "./validate_confirm.html";
value["22104"]["prv_alert"] = "Оплата принимается только за Октябрьский район";
value["22104"]["prv_invitation"] = "prov_enter_account";
value["22104"]["prv_button_text"] = "";
value["22104"]["prv_mask"] = "<!^\\.+${8,9}>";
value["22104"]["prv_group"] = "Вывоз мусора";
value["22104"]["prv_online_check"] = "true";



//Сукулукский - юр.лица 
value["22105"] = new Array();
value["22105"]["prv_id"] = "22105";
value["22105"]["prv_name"] = "Сокулукский район - юр.лица";
value["22105"]["prv_folder"] = "zkh";
value["22105"]["prv_page"] = "./cellular.html";
value["22105"]["prv_page_conf"] = "./validate_confirm.html";
value["22105"]["prv_alert"] = "";
value["22105"]["prv_image"] = "img/ui_item/light.png";
value["22105"]["prv_invitation"] = "prov_enter_account";
value["22105"]["prv_button_text"] = "";
value["22105"]["prv_mask"] = "<!^\\d+${1,6}>";
value["22105"]["prv_group"] = "Сокулукский район - юр.лица";
value["22105"]["prv_online_check"] = "true";


// 	Намба Такси Токмок 
// Comment provider
// value["22106"] = new Array();
// value["22106"]["prv_id"] = "22106";
// value["22106"]["prv_name"] = "Намба Такси Токмок";
// value["22106"]["prv_image"] = "./img/ui_item/namba-tokmok.png";
// value["22106"]["prv_folder"] = "tax";
// value["22106"]["prv_page"] = "./cellular.html";
// value["22106"]["prv_page_conf"] = "./validate_confirm.html";
// value["22106"]["prv_alert"] = "";
// value["22106"]["prv_invitation"] = "prov_enter_account";
// value["22106"]["prv_button_text"] = "";
// value["22106"]["prv_mask"] = "0<!^\\d+${9}>";
// value["22106"]["prv_group"] = "пополнение счета";
// value["22106"]["prv_online_check"] = "true";


//Эко-Банк
value["22035"] = new Array();
value["22035"]["prv_id"] = "22035";
value["22035"]["prv_name"] = "Погашение финансирования";
value["22035"]["prv_folder"] = "bank";
value["22035"]["prv_page"] = "./cellular_ecobank.html";
value["22035"]["prv_page_conf"] = "./ecobank_validate_confirm.html";
value["22035"]["prv_alert"] = "ЗАО ЭкоИсламиБанк, Лицензия НБКР 040 <br>Call Center Банка:<br> 0(312) 900800";
value["22035"]["prv_image"] = "img/ui_item/ekobank.png";
value["22035"]["prv_top_image"] = "./img/ui_item/ekobank.png";
value["22035"]["prv_invitation"] = "prov_enter_code";
value["22035"]["prv_button_text"] = "";
value["22035"]["prv_mask"] = "<!^.+${7,12}>";
value["22035"]["prv_group"] = "Эко Исламик Банк";
value["22035"]["prv_online_check"] = "true";





// AVN-Оплата за отправку СМС уведомлений студентам 
value["22052"] = new Array();
value["22052"]["prv_id"] = "22052";
value["22052"]["prv_name"] = 'AVN-Оплата за отправку СМС';
value["22052"]["prv_folder"] = "other";
value["22052"]["prv_image"] = "./img/ui_item/AVN-SMS.png";
value["22052"]["prv_top_image"] = "./img/ui_item/AVN-SMS.png";
value["22052"]["prv_page"] = "./num_keyboard.html";
value["22052"]["prv_page_back_any"] = "./pages.html";
value["22052"]["prv_page_conf"] = "./avn_validate_confirm.html";
value["22052"]["prv_alert"] = "ПРИ ПОДКЛЮЧЕНИИ SMS-ОПОВЕЩЕНИЙ ВЫ СОГЛАШАЕТЕСЬ С УСЛОВИЯМИ ПУБЛИЧНОЙ ОФЕРТЫ, РАСПОЛОЖЕННОЙ  ПО АДРЕСУ http://avn.kg/university/sms-oferta";
value["22052"]["prv_lang_any_keyboard"] = "en";
value["22052"]["prv_type_any_keyboard"] = "NORM";
value["22052"]["prv_invitation"] = "prov_enter_code";
value["22052"]["prv_success_sign"] = "cellular_successful_notice";
value["22052"]["prv_error_sign"] = "cellular_bad_format";
value["22052"]["prv_surmask"] = "10$20$********************";
value["22052"]["prv_button_text"] = "";
value["22052"]["prv_mask"] = "";
value["22052"]["prv_group"] = "Оплата услуг";
value["22052"]["prv_online_check"] = "true";
value["22052"]["prv_receipt_extra_message"] = "";


//// Административный штраф за нарушение ПДД(фото-видео фиксация)
//value["515111"] = new Array();
//value["515111"]["prv_id"] = "515111";
//value["515111"]["prv_name"] = 'Штраф за нарушение ПДД(фото-видео фиксация)';
//value["515111"]["prv_folder"] = "tax";
//value["515111"]["prv_image"] = "img/ui_item/mvd.png";
//value["515111"]["prv_top_image"] = "img/ui_item/mvd.png";
//value["515111"]["prv_page"] = "./num_keyboard.html";
//value["515111"]["prv_page_back_any"] = "./pages.html";
//value["515111"]["prv_page_conf"] = "./pdd_validate_confirm.html";
//value["515111"]["prv_alert"] = "Сумма комиссии составляет 40 сом и не зависит от размера вносимой суммы штрафа";
//value["515111"]["prv_lang_any_keyboard"] = "ru";
//value["515111"]["prv_type_any_keyboard"] = "NORM";
//value["515111"]["prv_invitation"] = "prov_ttp2";
//value["515111"]["prv_success_sign"] = "cellular_successful_notice";
//value["515111"]["prv_error_sign"] = "cellular_bad_format";
//value["515111"]["prv_surmask"] = "16$16$****************";
//value["515111"]["prv_button_text"] = "";
//value["515111"]["prv_mask"] = "";
//value["515111"]["prv_group"] = "ГАИ";
//value["515111"]["prv_online_check"] = "true";
//value["515111"]["prv_receipt_extra_message"] = "";

//Alga.kg
value["15010"] = new Array();
value["15010"]["prv_id"] = "15010";
value["15010"]["prv_name"] = "Alga.kg";
value["15010"]["prv_folder"] = "tax";
value["15010"]["prv_page"] = "./provider.html";
value["15010"]["prv_page_conf"] = "./validate_confirm.html";
value["15010"]["prv_alert"] = "";
value["15010"]["prv_image"] = "img/ui_item/alga.png";
value["15010"]["prv_top_image"] = "./img/ui_item/alga.png";
value["15010"]["prv_invitation"] = "prov_enter_code";
value["15010"]["prv_button_text"] = "";
value["15010"]["prv_mask"] = "<!^.+${1,48}>";
value["15010"]["prv_group"] = "";
value["15010"]["prv_online_check"] = "true";

////Alga.kg
//value["515111"] = new Array();
//value["515111"]["prv_id"] = "515111";
//value["515111"]["prv_name"] = "Alga.kg";
//value["515111"]["prv_folder"] = "tax";
//value["515111"]["prv_page"] = "./provider.html";
//value["515111"]["prv_page_conf"] = "./validate_confirm.html";
//value["515111"]["prv_alert"] = "";
//value["515111"]["prv_image"] = "img/ui_item/alga.png";
//value["515111"]["prv_top_image"] = "./img/ui_item/alga.png";
//value["515111"]["prv_invitation"] = "prov_enter_code";
//value["515111"]["prv_button_text"] = "";
//value["515111"]["prv_mask"] = "<!^.+${1,48}>";
//value["515111"]["prv_group"] = "";
//value["515111"]["prv_online_check"] = "true";



//Ярос
value["22116"] = new Array();
value["22116"]["prv_id"] = "22116";
value["22116"]["prv_name"] = "Ярос";
value["22116"]["prv_folder"] = "tax";
value["22116"]["prv_page"] = "./cellular.html";
value["22116"]["prv_page_conf"] = "./validate_confirm.html";
value["22116"]["prv_alert"] = "";
value["22116"]["prv_image"] = "img/ui_item/jaros.png";
value["22116"]["prv_top_image"] = "./img/ui_item/jaros.png";
value["22116"]["prv_invitation"] = "prov_enter_code";
value["22116"]["prv_button_text"] = "";
value["22116"]["prv_mask"] = "<!^.+${4,9}>";
value["22116"]["prv_group"] = "оплата технического сопровождения";
value["22116"]["prv_online_check"] = "true";



// (Моментальные платежи) Royal Quest
value["22115"] = new Array();
value["22115"]["prv_id"] = "22115";
value["22115"]["prv_name"] = 'Royal Quest';
value["22115"]["prv_folder"] = "content";
value["22115"]["prv_image"] = "./img/ui_item/RoyalQuest.png";
value["22115"]["prv_top_image"] = "./img/ui_item/RoyalQuest.png";
value["22115"]["prv_page"] = "./anykey_keyboard.html";
value["22115"]["prv_page_back_any"] = "./pages.html";
value["22115"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22115"]["prv_alert"] = "";
value["22115"]["prv_lang_any_keyboard"] = "ru";
value["22115"]["prv_type_any_keyboard"] = "NORM";
value["22115"]["prv_invitation"] = "prov_enter_code";
value["22115"]["prv_success_sign"] = "cellular_successful_notice";
value["22115"]["prv_error_sign"] = "cellular_bad_format";
value["22115"]["prv_surmask"] = "1$20$********************";
value["22115"]["prv_button_text"] = "";
value["22115"]["prv_mask"] = "";
value["22115"]["prv_group"] = "";
value["22115"]["prv_online_check"] = "true";
value["22115"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Star Conflict
value["22114"] = new Array();
value["22114"]["prv_id"] = "22114";
value["22114"]["prv_name"] = 'Star Conflict';
value["22114"]["prv_folder"] = "content";
value["22114"]["prv_image"] = "./img/ui_item/StarConflict.png";
value["22114"]["prv_top_image"] = "./img/ui_item/StarConflict.png";
value["22114"]["prv_page"] = "./anykey_keyboard.html";
value["22114"]["prv_page_back_any"] = "./pages.html";
value["22114"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22114"]["prv_alert"] = "";
value["22114"]["prv_lang_any_keyboard"] = "ru";
value["22114"]["prv_type_any_keyboard"] = "NORM";
value["22114"]["prv_invitation"] = "prov_enter_code";
value["22114"]["prv_success_sign"] = "cellular_successful_notice";
value["22114"]["prv_error_sign"] = "cellular_bad_format";
value["22114"]["prv_surmask"] = "1$20$********************";
value["22114"]["prv_button_text"] = "";
value["22114"]["prv_mask"] = "";
value["22114"]["prv_group"] = "";
value["22114"]["prv_online_check"] = "true";
value["22114"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Кодекс Пирата
value["22113"] = new Array();
value["22113"]["prv_id"] = "22113";
value["22113"]["prv_name"] = 'Кодекс Пирата';
value["22113"]["prv_folder"] = "content";
value["22113"]["prv_image"] = "./img/ui_item/kodex-pirata.png";
value["22113"]["prv_top_image"] = "./img/ui_item/kodex-pirata.png";
value["22113"]["prv_page"] = "./anykey_keyboard.html";
value["22113"]["prv_page_back_any"] = "./pages.html";
value["22113"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22113"]["prv_alert"] = "";
value["22113"]["prv_lang_any_keyboard"] = "ru";
value["22113"]["prv_type_any_keyboard"] = "NORM";
value["22113"]["prv_invitation"] = "prov_enter_code";
value["22113"]["prv_success_sign"] = "cellular_successful_notice";
value["22113"]["prv_error_sign"] = "cellular_bad_format";
value["22113"]["prv_surmask"] = "1$20$********************";
value["22113"]["prv_button_text"] = "";
value["22113"]["prv_mask"] = "";
value["22113"]["prv_group"] = "";
value["22113"]["prv_online_check"] = "true";
value["22113"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) World Of Warplanes
value["22112"] = new Array();
value["22112"]["prv_id"] = "22112";
value["22112"]["prv_name"] = 'World Of Warplanes';
value["22112"]["prv_folder"] = "content";
value["22112"]["prv_image"] = "./img/ui_item/worldofwarplanes.png";
value["22112"]["prv_top_image"] = "./img/ui_item/worldofwarplanes.png";
value["22112"]["prv_page"] = "./anykey_keyboard.html";
value["22112"]["prv_page_back_any"] = "./pages.html";
value["22112"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22112"]["prv_alert"] = "";
value["22112"]["prv_lang_any_keyboard"] = "ru";
value["22112"]["prv_type_any_keyboard"] = "NORM";
value["22112"]["prv_invitation"] = "prov_enter_code";
value["22112"]["prv_success_sign"] = "cellular_successful_notice";
value["22112"]["prv_error_sign"] = "cellular_bad_format";
value["22112"]["prv_surmask"] = "1$20$********************";
value["22112"]["prv_button_text"] = "";
value["22112"]["prv_mask"] = "";
value["22112"]["prv_group"] = "";
value["22112"]["prv_online_check"] = "true";
value["22112"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) UFO online 
value["22111"] = new Array();
value["22111"]["prv_id"] = "22111";
value["22111"]["prv_name"] = 'UFO online';
value["22111"]["prv_folder"] = "content";
value["22111"]["prv_image"] = "./img/ui_item/UfoOnline.png";
value["22111"]["prv_top_image"] = "./img/ui_item/UfoOnline.png";
value["22111"]["prv_page"] = "./anykey_keyboard.html";
value["22111"]["prv_page_back_any"] = "./pages.html";
value["22111"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22111"]["prv_alert"] = "";
value["22111"]["prv_lang_any_keyboard"] = "ru";
value["22111"]["prv_type_any_keyboard"] = "NORM";
value["22111"]["prv_invitation"] = "prov_enter_code";
value["22111"]["prv_success_sign"] = "cellular_successful_notice";
value["22111"]["prv_error_sign"] = "cellular_bad_format";
value["22111"]["prv_surmask"] = "1$20$********************";
value["22111"]["prv_button_text"] = "";
value["22111"]["prv_mask"] = "";
value["22111"]["prv_group"] = "";
value["22111"]["prv_online_check"] = "true";
value["22111"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Prime World
value["22110"] = new Array();
value["22110"]["prv_id"] = "22110";
value["22110"]["prv_name"] = 'Prime World';
value["22110"]["prv_folder"] = "content";
value["22110"]["prv_image"] = "./img/ui_item/primeworld.png";
value["22110"]["prv_top_image"] = "./img/ui_item/primeworld.png";
value["22110"]["prv_page"] = "./anykey_keyboard.html";
value["22110"]["prv_page_back_any"] = "./pages.html";
value["22110"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22110"]["prv_alert"] = "";
value["22110"]["prv_lang_any_keyboard"] = "ru";
value["22110"]["prv_type_any_keyboard"] = "NORM";
value["22110"]["prv_invitation"] = "prov_enter_code";
value["22110"]["prv_success_sign"] = "cellular_successful_notice";
value["22110"]["prv_error_sign"] = "cellular_bad_format";
value["22110"]["prv_surmask"] = "1$20$********************";
value["22110"]["prv_button_text"] = "";
value["22110"]["prv_mask"] = "";
value["22110"]["prv_group"] = "";
value["22110"]["prv_online_check"] = "true";
value["22110"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Gamenet
value["22108"] = new Array();
value["22108"]["prv_id"] = "22108";
value["22108"]["prv_name"] = 'Gamenet';
value["22108"]["prv_folder"] = "content";
value["22108"]["prv_image"] = "./img/ui_item/Gamenet.png";
value["22108"]["prv_top_image"] = "./img/ui_item/Gamenet.png";
value["22108"]["prv_page"] = "./anykey_keyboard.html";
value["22108"]["prv_page_back_any"] = "./pages.html";
value["22108"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22108"]["prv_alert"] = "";
value["22108"]["prv_lang_any_keyboard"] = "ru";
value["22108"]["prv_type_any_keyboard"] = "NORM";
value["22108"]["prv_invitation"] = "prov_enter_code";
value["22108"]["prv_success_sign"] = "cellular_successful_notice";
value["22108"]["prv_error_sign"] = "cellular_bad_format";
value["22108"]["prv_surmask"] = "1$20$********************";
value["22108"]["prv_button_text"] = "";
value["22108"]["prv_mask"] = "";
value["22108"]["prv_group"] = "";
value["22108"]["prv_online_check"] = "true";
value["22108"]["prv_receipt_extra_message"] = "";


// (Моментальные платежи) Sky2Fly
value["6432"] = new Array();
value["6432"]["prv_id"] = "6432";
value["6432"]["prv_name"] = 'Sky2Fly';
value["6432"]["prv_folder"] = "content";
value["6432"]["prv_image"] = "./img/ui_item/skytofly.png";
value["6432"]["prv_top_image"] = "./img/ui_item/skytofly.png";
value["6432"]["prv_page"] = "./anykey_keyboard.html";
value["6432"]["prv_page_back_any"] = "./pages.html";
value["6432"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6432"]["prv_alert"] = "";
value["6432"]["prv_lang_any_keyboard"] = "ru";
value["6432"]["prv_type_any_keyboard"] = "NORM";
value["6432"]["prv_invitation"] = "prov_enter_code";
value["6432"]["prv_success_sign"] = "cellular_successful_notice";
value["6432"]["prv_error_sign"] = "cellular_bad_format";
value["6432"]["prv_surmask"] = "1$20$********************";
value["6432"]["prv_button_text"] = "";
value["6432"]["prv_mask"] = "";
value["6432"]["prv_group"] = "";
value["6432"]["prv_online_check"] = "true";
value["6432"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) RF Online
value["12734"] = new Array();
value["12734"]["prv_id"] = "12734";
value["12734"]["prv_name"] = 'RF Online';
value["12734"]["prv_folder"] = "content";
value["12734"]["prv_image"] = "./img/ui_item/rfonline.png";
value["12734"]["prv_top_image"] = "./img/ui_item/rfonline.png";
value["12734"]["prv_page"] = "./anykey_keyboard.html";
value["12734"]["prv_page_back_any"] = "./pages.html";
value["12734"]["prv_page_conf"] = "./np_validate_confirm.html";
value["12734"]["prv_alert"] = "";
value["12734"]["prv_lang_any_keyboard"] = "ru";
value["12734"]["prv_type_any_keyboard"] = "NORM";
value["12734"]["prv_invitation"] = "prov_enter_code";
value["12734"]["prv_success_sign"] = "cellular_successful_notice";
value["12734"]["prv_error_sign"] = "cellular_bad_format";
value["12734"]["prv_surmask"] = "1$20$********************";
value["12734"]["prv_button_text"] = "";
value["12734"]["prv_mask"] = "";
value["12734"]["prv_group"] = "";
value["12734"]["prv_online_check"] = "true";
value["12734"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) NeverLands
value["6428"] = new Array();
value["6428"]["prv_id"] = "6428";
value["6428"]["prv_name"] = 'NeverLands';
value["6428"]["prv_folder"] = "content";
value["6428"]["prv_image"] = "./img/ui_item/neverlands.png";
value["6428"]["prv_top_image"] = "./img/ui_item/neverlands.png";
value["6428"]["prv_page"] = "./anykey_keyboard.html";
value["6428"]["prv_page_back_any"] = "./pages.html";
value["6428"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6428"]["prv_alert"] = "";
value["6428"]["prv_lang_any_keyboard"] = "ru";
value["6428"]["prv_type_any_keyboard"] = "NORM";
value["6428"]["prv_invitation"] = "prov_enter_code";
value["6428"]["prv_success_sign"] = "cellular_successful_notice";
value["6428"]["prv_error_sign"] = "cellular_bad_format";
value["6428"]["prv_surmask"] = "1$20$********************";
value["6428"]["prv_button_text"] = "";
value["6428"]["prv_mask"] = "";
value["6428"]["prv_group"] = "";
value["6428"]["prv_online_check"] = "true";
value["6428"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) My Lands
value["6454"] = new Array();
value["6454"]["prv_id"] = "6454";
value["6454"]["prv_name"] = 'My Lands';
value["6454"]["prv_folder"] = "content";
value["6454"]["prv_image"] = "./img/ui_item/malands.png";
value["6454"]["prv_top_image"] = "./img/ui_item/malands.png";
value["6454"]["prv_page"] = "./anykey_keyboard.html";
value["6454"]["prv_page_back_any"] = "./pages.html";
value["6454"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6454"]["prv_alert"] = "";
value["6454"]["prv_lang_any_keyboard"] = "ru";
value["6454"]["prv_type_any_keyboard"] = "NORM";
value["6454"]["prv_invitation"] = "prov_enter_code";
value["6454"]["prv_success_sign"] = "cellular_successful_notice";
value["6454"]["prv_error_sign"] = "cellular_bad_format";
value["6454"]["prv_surmask"] = "1$20$********************";
value["6454"]["prv_button_text"] = "";
value["6454"]["prv_mask"] = "";
value["6454"]["prv_group"] = "";
value["6454"]["prv_online_check"] = "true";
value["6454"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Haddan
value["6430"] = new Array();
value["6430"]["prv_id"] = "6430";
value["6430"]["prv_name"] = 'Haddan';
value["6430"]["prv_folder"] = "content";
value["6430"]["prv_image"] = "./img/ui_item/haddan.png";
value["6430"]["prv_top_image"] = "./img/ui_item/haddan.png";
value["6430"]["prv_page"] = "./anykey_keyboard.html";
value["6430"]["prv_page_back_any"] = "./pages.html";
value["6430"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6430"]["prv_alert"] = "";
value["6430"]["prv_lang_any_keyboard"] = "ru";
value["6430"]["prv_type_any_keyboard"] = "NORM";
value["6430"]["prv_invitation"] = "prov_enter_code";
value["6430"]["prv_success_sign"] = "cellular_successful_notice";
value["6430"]["prv_error_sign"] = "cellular_bad_format";
value["6430"]["prv_surmask"] = "1$20$********************";
value["6430"]["prv_button_text"] = "";
value["6430"]["prv_mask"] = "";
value["6430"]["prv_group"] = "";
value["6430"]["prv_online_check"] = "true";
value["6430"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Lineage 2
value["12735"] = new Array();
value["12735"]["prv_id"] = "12735";
value["12735"]["prv_name"] = 'Lineage 2';
value["12735"]["prv_folder"] = "content";
value["12735"]["prv_image"] = "./img/ui_item/lineage.png";
value["12735"]["prv_top_image"] = "./img/ui_item/lineage.png";
value["12735"]["prv_page"] = "./anykey_keyboard.html";
value["12735"]["prv_page_back_any"] = "./pages.html";
value["12735"]["prv_page_conf"] = "./np_validate_confirm.html";
value["12735"]["prv_alert"] = "";
value["12735"]["prv_lang_any_keyboard"] = "ru";
value["12735"]["prv_type_any_keyboard"] = "NORM";
value["12735"]["prv_invitation"] = "prov_enter_code";
value["12735"]["prv_success_sign"] = "cellular_successful_notice";
value["12735"]["prv_error_sign"] = "cellular_bad_format";
value["12735"]["prv_surmask"] = "1$20$********************";
value["12735"]["prv_button_text"] = "";
value["12735"]["prv_mask"] = "";
value["12735"]["prv_group"] = "";
value["12735"]["prv_online_check"] = "true";
value["12735"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Banana Wars
value["6452"] = new Array();
value["6452"]["prv_id"] = "6452";
value["6452"]["prv_name"] = 'Banana Wars';
value["6452"]["prv_folder"] = "content";
value["6452"]["prv_image"] = "./img/ui_item/banana_wars.png";
value["6452"]["prv_top_image"] = "./img/ui_item/banana_wars.png";
value["6452"]["prv_page"] = "./anykey_keyboard.html";
value["6452"]["prv_page_back_any"] = "./pages.html";
value["6452"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6452"]["prv_alert"] = "";
value["6452"]["prv_lang_any_keyboard"] = "ru";
value["6452"]["prv_type_any_keyboard"] = "NORM";
value["6452"]["prv_invitation"] = "prov_enter_code";
value["6452"]["prv_success_sign"] = "cellular_successful_notice";
value["6452"]["prv_error_sign"] = "cellular_bad_format";
value["6452"]["prv_surmask"] = "1$20$********************";
value["6452"]["prv_button_text"] = "";
value["6452"]["prv_mask"] = "";
value["6452"]["prv_group"] = "";
value["6452"]["prv_online_check"] = "true";
value["6452"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Unit
value["6419"] = new Array();
value["6419"]["prv_id"] = "6419";
value["6419"]["prv_name"] = 'Unit';
value["6419"]["prv_folder"] = "content";
value["6419"]["prv_image"] = "./img/ui_item/unit.png";
value["6419"]["prv_top_image"] = "./img/ui_item/unit.png";
value["6419"]["prv_page"] = "./anykey_keyboard.html";
value["6419"]["prv_page_back_any"] = "./pages.html";
value["6419"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6419"]["prv_alert"] = "";
value["6419"]["prv_lang_any_keyboard"] = "ru";
value["6419"]["prv_type_any_keyboard"] = "NORM";
value["6419"]["prv_invitation"] = "prov_enter_code";
value["6419"]["prv_success_sign"] = "cellular_successful_notice";
value["6419"]["prv_error_sign"] = "cellular_bad_format";
value["6419"]["prv_surmask"] = "1$20$********************";
value["6419"]["prv_button_text"] = "";
value["6419"]["prv_mask"] = "";
value["6419"]["prv_group"] = "";
value["6419"]["prv_online_check"] = "true";
value["6419"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) 11x11 - Футбол
value["6442"] = new Array();
value["6442"]["prv_id"] = "6442";
value["6442"]["prv_name"] = '11x11 - Футбол';
value["6442"]["prv_folder"] = "content";
value["6442"]["prv_image"] = "./img/ui_item/11x11.png";
value["6442"]["prv_top_image"] = "./img/ui_item/11x11.png";
value["6442"]["prv_page"] = "./anykey_keyboard.html";
value["6442"]["prv_page_back_any"] = "./pages.html";
value["6442"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6442"]["prv_alert"] = "";
value["6442"]["prv_lang_any_keyboard"] = "ru";
value["6442"]["prv_type_any_keyboard"] = "NORM";
value["6442"]["prv_invitation"] = "prov_enter_code";
value["6442"]["prv_success_sign"] = "cellular_successful_notice";
value["6442"]["prv_error_sign"] = "cellular_bad_format";
value["6442"]["prv_surmask"] = "1$20$********************";
value["6442"]["prv_button_text"] = "";
value["6442"]["prv_mask"] = "";
value["6442"]["prv_group"] = "";
value["6442"]["prv_online_check"] = "true";
value["6442"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Ганджубасовые войны
value["6415"] = new Array();
value["6415"]["prv_id"] = "6415";
value["6415"]["prv_name"] = 'Ганджубасовые войны';
value["6415"]["prv_folder"] = "content";
value["6415"]["prv_image"] = "./img/ui_item/ganjawars.png";
value["6415"]["prv_top_image"] = "./img/ui_item/ganjawars.png";
value["6415"]["prv_page"] = "./anykey_keyboard.html";
value["6415"]["prv_page_back_any"] = "./pages.html";
value["6415"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6415"]["prv_alert"] = "";
value["6415"]["prv_lang_any_keyboard"] = "ru";
value["6415"]["prv_type_any_keyboard"] = "NORM";
value["6415"]["prv_invitation"] = "prov_enter_code";
value["6415"]["prv_success_sign"] = "cellular_successful_notice";
value["6415"]["prv_error_sign"] = "cellular_bad_format";
value["6415"]["prv_surmask"] = "1$20$********************";
value["6415"]["prv_button_text"] = "";
value["6415"]["prv_mask"] = "";
value["6415"]["prv_group"] = "";
value["6415"]["prv_online_check"] = "true";
value["6415"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Варвары
value["6459"] = new Array();
value["6459"]["prv_id"] = "6459";
value["6459"]["prv_name"] = 'Варвары';
value["6459"]["prv_folder"] = "content";
value["6459"]["prv_image"] = "./img/ui_item/varvary.png";
value["6459"]["prv_top_image"] = "./img/ui_item/varvary.png";
value["6459"]["prv_page"] = "./anykey_keyboard.html";
value["6459"]["prv_page_back_any"] = "./pages.html";
value["6459"]["prv_page_conf"] = "./np_validate_confirm.html";
value["6459"]["prv_alert"] = "";
value["6459"]["prv_lang_any_keyboard"] = "ru";
value["6459"]["prv_type_any_keyboard"] = "NORM";
value["6459"]["prv_invitation"] = "prov_enter_code";
value["6459"]["prv_success_sign"] = "cellular_successful_notice";
value["6459"]["prv_error_sign"] = "cellular_bad_format";
value["6459"]["prv_surmask"] = "1$20$********************";
value["6459"]["prv_button_text"] = "";
value["6459"]["prv_mask"] = "";
value["6459"]["prv_group"] = "";
value["6459"]["prv_online_check"] = "true";
value["6459"]["prv_receipt_extra_message"] = "";



//Чанг-Ан
value["22118"] = new Array();
value["22118"]["prv_id"] = "22118";
value["22118"]["prv_name"] = "Чанг Ан Банк";
value["22118"]["prv_folder"] = "bank";
value["22118"]["prv_page"] = "./cellular.html";
value["22118"]["prv_page_conf"] = "./validate_confirm.html";
value["22118"]["prv_alert"] = "Уважаемый клиент!</br>Если Вы осуществили платеж в будний день до 17:00 ч,  Ваши денежные средства поступят на счёт на следующий рабочий день!Если Вы осуществили платеж в выходной/праздничный день, Ваши денежные средства поступят на счёт в первый рабочий день после выходного.";
value["22118"]["prv_image"] = "img/ui_item/ChangAn.png";
value["22118"]["prv_top_image"] = "./img/ui_item/ChangAn.png";
value["22118"]["prv_invitation"] = "prov_enter_code";
value["22118"]["prv_button_text"] = "";
value["22118"]["prv_mask"] = "1062020100<!^\\d+${6}>";
value["22118"]["prv_group"] = "погашение кредита";
value["22118"]["prv_online_check"] = "true";


//АЛТЫН - эквайринг
value["22196"] = new Array();
value["22196"]["prv_id"] = "22196";
value["22196"]["prv_name"] = "АЛТЫН - эквайринг";
value["22196"]["prv_folder"] = "tax";
value["22196"]["prv_page"] = "./cellular.html";
value["22196"]["prv_page_conf"] = "./validate_confirm.html";
value["22196"]["prv_alert"] = "";
value["22196"]["prv_image"] = "img/ui_item/okmotu_logo.png";
value["22196"]["prv_top_image"] = "./img/ui_item/okmotu_logo.png";
value["22196"]["prv_invitation"] = "prov_enter_account";
value["22196"]["prv_button_text"] = "";
value["22196"]["prv_mask"] = "<!^\\d+${8}>";
value["22196"]["prv_group"] = "";
value["22196"]["prv_online_check"] = "true";

//Рaybox - товары по коду
value["22197"] = new Array();
value["22197"]["prv_id"] = "22197";
value["22197"]["prv_name"] = "Рaybox - товары по коду";
value["22197"]["prv_folder"] = "tax";
value["22197"]["prv_page"] = "./cellular.html";
value["22197"]["prv_page_conf"] = "./validate_confirm.html";
value["22197"]["prv_alert"] = "";
value["22197"]["prv_image"] = "img/ui_item/paybox_logo.png";
value["22197"]["prv_top_image"] = "./img/ui_item/paybox_logo.png";
value["22197"]["prv_invitation"] = "prov_enter_id";
value["22197"]["prv_button_text"] = "";
value["22197"]["prv_mask"] = "<!^\\d+${5,20}>";
value["22197"]["prv_group"] = "";
value["22197"]["prv_online_check"] = "true";

//Электронный кошелек Алтын
// Comment provider
// value["22117"] = new Array();
// value["22117"]["prv_id"] = "22117";
// value["22117"]["prv_name"] = "Электронный кошелек Алтын";
// value["22117"]["prv_folder"] = "folder_online_pay";
// value["22117"]["prv_page"] = "./cellular.html";
// value["22117"]["prv_page_conf"] = "./validate_confirm.html";
// value["22117"]["prv_alert"] = "";
// value["22117"]["prv_is_cellular"] = true;
// value["22117"]["prv_image"] = "img/ui_item/altin.png";
// value["22117"]["prv_top_image"] = "./img/ui_item/altin.png";
// value["22117"]["prv_invitation"] = "prov_enter_account";
// value["22117"]["prv_button_text"] = "";
// value["22117"]["prv_mask"] = "<!^\\d+${7}>";
// value["22117"]["prv_group"] = "";
// value["22117"]["prv_online_check"] = "true";


//Общественный Фонд «АПАКЕ»
//value["22119"] = new Array();
//value["22119"]["prv_id"] = "22119";
//value["22119"]["prv_name"] = "Общественный Фонд «АПАКЕ»";
//value["22119"]["prv_folder"] = "other";
//value["22119"]["prv_image"] = "img/ui_item/apake.png";
//value["22119"]["prv_top_image"] = "./img/ui_item/apake.png";
//value["22119"]["prv_page"] = "./ap_start.html";
//value["22119"]["prv_page_sf_pin"] = "./num_keyboard.html";
//value["22119"]["prv_page_back_num"] = "./ap_start.html";
//value["22119"]["prv_forward_num_keyboard"] = "./apake_validate_confirm.html";
//value["22119"]["prv_page_conf"] = "./apake_validate_confirm.html";
//value["22119"]["prv_alert"] = "";
//value["22119"]["prv_invitation"] = "prov_enter_phone";
//value["22119"]["prv_success_sign"] = "cellular_successful_notice";
//value["22119"]["prv_error_sign"] = "cellular_bad_format";
//value["22119"]["prv_button_text"] = "";
//value["22119"]["prv_mask"] = "<!^\\d+${10}>";
//value["22119"]["prv_group"] = "";
//value["22119"]["prv_online_check"] = "true";
//value["22119"]["prv_surmask"] = "10$10$**********";
//value["22119"]["prv_receipt_extra_message"] = "";

value["22119"] = new Array();
value["22119"]["prv_id"] = "22119";
value["22119"]["prv_name"] = "Общественный Фонд «АПАКЕ»";
value["22119"]["prv_folder"] = "other";
value["22119"]["prv_page"] = "./cellular.html";
value["22119"]["prv_page_conf"] = "./validate_confirm.html";
value["22119"]["prv_alert"] = "Уважаемый  пользователь!  Уведомляем  Вас о том, что номер указанного телефона будет опубликован на сайте www.apake.kg,будут скрыты некоторые цифры в целях  конфиденциальности.";
value["22119"]["prv_is_cellular"] = true;
value["22119"]["prv_image"] = "img/ui_item/apake.png";
value["22119"]["prv_top_image"] = "./img/ui_item/apake.png";
value["22119"]["prv_invitation"] = "prov_enter_phone";
value["22119"]["prv_button_text"] = "";
value["22119"]["prv_mask"] = "<!^.+${10,10}>";
value["22119"]["prv_group"] = "";
value["22119"]["prv_online_check"] = "true";

//	Сауна.кг - пополнение счета
// Comment provider
// value["22122"] = new Array();
// value["22122"]["prv_id"] = "22122";
// value["22122"]["prv_name"] = "Сауна.kg - пополнение счета";
// value["22122"]["prv_folder"] = "other";
// value["22122"]["prv_page"] = "./cellular.html";
// value["22122"]["prv_page_conf"] = "./validate_confirm.html";
// value["22122"]["prv_alert"] = "";
// value["22122"]["prv_is_cellular"] = true;
// value["22122"]["prv_image"] = "img/ui_item/sauna.png";
// value["22122"]["prv_top_image"] = "./img/ui_item/sauna.png";
// value["22122"]["prv_invitation"] = "prov_enter_account";
// value["22122"]["prv_button_text"] = "";
// value["22122"]["prv_mask"] = "<!^.+${1,5}>";
// value["22122"]["prv_group"] = "";
// value["22122"]["prv_online_check"] = "true";

//	Ресторан.кг - пополнение счета
value["22120"] = new Array();
value["22120"]["prv_id"] = "22120";
value["22120"]["prv_name"] = "Ресторан.kg - пополнение счета";
value["22120"]["prv_folder"] = "other";
value["22120"]["prv_page"] = "./cellular.html";
value["22120"]["prv_page_conf"] = "./validate_confirm.html";
value["22120"]["prv_alert"] = "";
value["22120"]["prv_is_cellular"] = true;
value["22120"]["prv_image"] = "img/ui_item/restoran.png";
value["22120"]["prv_top_image"] = "./img/ui_item/restoran.png";
value["22120"]["prv_invitation"] = "prov_enter_account";
value["22120"]["prv_button_text"] = "";
value["22120"]["prv_mask"] = "<!^.+${1,5}>";
value["22120"]["prv_group"] = "";
value["22120"]["prv_online_check"] = "true";

//	Салон.кг - пополнение счета
// Comment provider
// value["22121"] = new Array();
// value["22121"]["prv_id"] = "22121";
// value["22121"]["prv_name"] = "Салон.kg - пополнение счета";
// value["22121"]["prv_folder"] = "other";
// value["22121"]["prv_page"] = "./cellular.html";
// value["22121"]["prv_page_conf"] = "./validate_confirm.html";
// value["22121"]["prv_alert"] = "";
// value["22121"]["prv_is_cellular"] = true;
// value["22121"]["prv_image"] = "img/ui_item/salon.png";
// value["22121"]["prv_top_image"] = "./img/ui_item/salon.png";
// value["22121"]["prv_invitation"] = "prov_enter_account";
// value["22121"]["prv_button_text"] = "";
// value["22121"]["prv_mask"] = "<!^.+${1,5}>";
// value["22121"]["prv_group"] = "";
// value["22121"]["prv_online_check"] = "true";

//Намба Фуд - для курьеров22060
// Comment provider
// value["22123"] = new Array();
// value["22123"]["prv_id"] = "22123";
// value["22123"]["prv_name"] = "Намба Фуд - для курьеров";
// value["22123"]["prv_folder"] = "tax";
// value["22123"]["prv_page"] = "./cellular.html";
// value["22123"]["prv_page_conf"] = "./validate_confirm.html";
// value["22123"]["prv_alert"] = "";
// value["22123"]["prv_image"] = "img/ui_item/food.png";
// value["22123"]["prv_top_image"] = "./img/ui_item/food.png";
// value["22123"]["prv_invitation"] = "prov_enter_phone";
// value["22123"]["prv_button_text"] = "";
// value["22123"]["prv_mask"] = "0<!^\\d+${9}>";
// value["22123"]["prv_group"] = "";
// value["22123"]["prv_online_check"] = "true";


//Элим Барсынбы?!
value["22126"] = new Array();
value["22126"]["prv_id"] = "22126";
value["22126"]["prv_name"] = "Элим Барсынбы?!";
value["22126"]["prv_folder"] = "other";
value["22126"]["prv_page"] = "./cellular.html";
value["22126"]["prv_page_conf"] = "./validate_confirm.html";
value["22126"]["prv_alert"] = "";
value["22126"]["prv_image"] = "img/ui_item/elim_bar.png";
value["22126"]["prv_top_image"] = "./img/ui_item/elim_bar.png";
value["22126"]["prv_invitation"] = "prov_enter_phone";
value["22126"]["prv_button_text"] = "";
value["22126"]["prv_mask"] = "0<!^\\d+${9}>";
value["22126"]["prv_group"] = "";
value["22126"]["prv_online_check"] = "true";


//TICKET.KG-бронирование билетов
value["22125"] = new Array();
value["22125"]["prv_id"] = "22125";
value["22125"]["prv_name"] = "TICKET.KG-бронирование билетов";
value["22125"]["prv_folder"] = "content";
value["22125"]["prv_page"] = "./cellular.html";
value["22125"]["prv_page_conf"] = "./validate_confirm.html";
value["22125"]["prv_alert"] = "";
value["22125"]["prv_image"] = "img/ui_item/ticket_kg.png";
value["22125"]["prv_top_image"] = "./img/ui_item/ticket_kg.png";
value["22125"]["prv_invitation"] = "prov_enter_account";
value["22125"]["prv_button_text"] = "";
value["22125"]["prv_mask"] = "<!^.+${1,5}>";
value["22125"]["prv_group"] = "";
value["22125"]["prv_online_check"] = "true";


//Taxi 164
value["22127"] = new Array();
value["22127"]["prv_id"] = "22127";
value["22127"]["prv_name"] = "Taxi 164";
value["22127"]["prv_folder"] = "tax";
value["22127"]["prv_page"] = "./cellular.html";
value["22127"]["prv_page_conf"] = "./validate_confirm.html";
value["22127"]["prv_alert"] = "";
value["22127"]["prv_image"] = "img/ui_item/taxi164_logo.png";
value["22127"]["prv_top_image"] = "./img/ui_item/taxi164_logo.png";
value["22127"]["prv_invitation"] = "prov_enter_phone";
value["22127"]["prv_button_text"] = "";
value["22127"]["prv_mask"] = "0<!^\\d+${9}>";
value["22127"]["prv_group"] = "пополнение баланса";
value["22127"]["prv_online_check"] = "true";


// (Моментальные платежи) Тюрьма. Новый срок
value["22138"] = new Array();
value["22138"]["prv_id"] = "22138";
value["22138"]["prv_name"] = 'Тюрьма. Новый срок';
value["22138"]["prv_folder"] = "content";
value["22138"]["prv_image"] = "./img/ui_item/Prison.png";
value["22138"]["prv_top_image"] = "./img/ui_item/Prison.png";
value["22138"]["prv_page"] = "./num_keyboard.html";
value["22138"]["prv_page_back_num"] = "./pages.html";
value["22138"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22138"]["prv_alert"] = "";
value["22138"]["prv_lang_any_keyboard"] = "ru";
value["22138"]["prv_type_any_keyboard"] = "NORM";
value["22138"]["prv_invitation"] = "prov_enter_code";
value["22138"]["prv_success_sign"] = "cellular_successful_notice";
value["22138"]["prv_error_sign"] = "cellular_bad_format";
value["22138"]["prv_button_text"] = "";
value["22138"]["prv_mask"] = "";
value["22138"]["prv_surmask"] = "1$32$********************************";
value["22138"]["prv_group"] = "";
value["22138"]["prv_online_check"] = "true";
value["22138"]["prv_receipt_extra_message"] = "";


// (Моментальные платежи) Триколор ТВ
value["22139"] = new Array();
value["22139"]["prv_id"] = "22139";
value["22139"]["prv_name"] = 'Триколор ТВ';
value["22139"]["prv_folder"] = "tv";
value["22139"]["prv_image"] = "./img/ui_item/Tricolor.png";
value["22139"]["prv_top_image"] = "./img/ui_item/Tricolor.png";
value["22139"]["prv_page"] = "./num_keyboard.html";
value["22139"]["prv_page_back_num"] = "./pages.html";
value["22139"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22139"]["prv_alert"] = "";
value["22139"]["prv_lang_any_keyboard"] = "ru";
value["22139"]["prv_type_any_keyboard"] = "NORM";
value["22139"]["prv_invitation"] = "prov_enter_code";
value["22139"]["prv_success_sign"] = "cellular_successful_notice";
value["22139"]["prv_error_sign"] = "cellular_bad_format";
value["22139"]["prv_button_text"] = "";
value["22139"]["prv_mask"] = "";
value["22139"]["prv_surmask"] = "12$14$**************";
value["22139"]["prv_group"] = "";
value["22139"]["prv_online_check"] = "true";
value["22139"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) НТВ Плюс
value["22140"] = new Array();
value["22140"]["prv_id"] = "22140";
value["22140"]["prv_name"] = 'НТВ Плюс';
value["22140"]["prv_folder"] = "tv";
value["22140"]["prv_image"] = "./img/ui_item/NTVPlus.png";
value["22140"]["prv_top_image"] = "./img/ui_item/NTVPlus.png";
value["22140"]["prv_page"] = "./num_keyboard.html";
value["22140"]["prv_page_back_num"] = "./pages.html";
value["22140"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22140"]["prv_alert"] = "";
value["22140"]["prv_lang_any_keyboard"] = "ru";
value["22140"]["prv_type_any_keyboard"] = "NORM";
value["22140"]["prv_invitation"] = "prov_enter_code";
value["22140"]["prv_success_sign"] = "cellular_successful_notice";
value["22140"]["prv_error_sign"] = "cellular_bad_format";
value["22140"]["prv_button_text"] = "";
value["22140"]["prv_mask"] = "";
value["22140"]["prv_surmask"] = "1$10$**********";
value["22140"]["prv_group"] = "";
value["22140"]["prv_online_check"] = "true";
value["22140"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Орион Экспресс
value["22141"] = new Array();
value["22141"]["prv_id"] = "22141";
value["22141"]["prv_name"] = 'Орион Экспресс';
value["22141"]["prv_folder"] = "tv";
value["22141"]["prv_image"] = "./img/ui_item/OrionTV.png";
value["22141"]["prv_top_image"] = "./img/ui_item/OrionTV.png";
value["22141"]["prv_page"] = "./num_keyboard.html";
value["22141"]["prv_page_back_num"] = "./pages.html";
value["22141"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22141"]["prv_alert"] = "";
value["22141"]["prv_lang_any_keyboard"] = "ru";
value["22141"]["prv_type_any_keyboard"] = "NORM";
value["22141"]["prv_invitation"] = "prov_enter_code";
value["22141"]["prv_success_sign"] = "cellular_successful_notice";
value["22141"]["prv_error_sign"] = "cellular_bad_format";
value["22141"]["prv_button_text"] = "";
value["22141"]["prv_mask"] = "";
value["22141"]["prv_surmask"] = "11$12$************";
value["22141"]["prv_group"] = "";
value["22141"]["prv_online_check"] = "true";
value["22141"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Континент ТВ
value["22142"] = new Array();
value["22142"]["prv_id"] = "22142";
value["22142"]["prv_name"] = 'Континент ТВ';
value["22142"]["prv_folder"] = "tv";
value["22142"]["prv_image"] = "./img/ui_item/KontinentTV.png";
value["22142"]["prv_top_image"] = "./img/ui_item/KontinentTV.png";
value["22142"]["prv_page"] = "./num_keyboard.html";
value["22142"]["prv_page_back_num"] = "./pages.html";
value["22142"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22142"]["prv_alert"] = "";
value["22142"]["prv_lang_any_keyboard"] = "ru";
value["22142"]["prv_type_any_keyboard"] = "NORM";
value["22142"]["prv_invitation"] = "prov_enter_code";
value["22142"]["prv_success_sign"] = "cellular_successful_notice";
value["22142"]["prv_error_sign"] = "cellular_bad_format";
value["22142"]["prv_button_text"] = "";
value["22142"]["prv_mask"] = "";
value["22142"]["prv_surmask"] = "11$12$************";
value["22142"]["prv_group"] = "";
value["22142"]["prv_online_check"] = "true";
value["22142"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Viber
value["22143"] = new Array();
value["22143"]["prv_id"] = "22143";
value["22143"]["prv_name"] = 'Viber';
value["22143"]["prv_folder"] = "content";
value["22143"]["prv_image"] = "./img/ui_item/Viber-new.png";
value["22143"]["prv_top_image"] = "./img/ui_item/Viber-new.png";
value["22143"]["prv_page"] = "./num_keyboard.html";
value["22143"]["prv_page_back_num"] = "./pages.html";
value["22143"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22143"]["prv_alert"] = "";
value["22143"]["prv_lang_any_keyboard"] = "ru";
value["22143"]["prv_type_any_keyboard"] = "NORM";
value["22143"]["prv_invitation"] = "prov_enter_code";
value["22143"]["prv_success_sign"] = "cellular_successful_notice";
value["22143"]["prv_error_sign"] = "cellular_bad_format";
value["22143"]["prv_button_text"] = "";
value["22143"]["prv_mask"] = "";
value["22143"]["prv_surmask"] = "1$30$******************************";
value["22143"]["prv_group"] = "";
value["22143"]["prv_online_check"] = "true";
value["22143"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Бумз (DDT)
value["22134"] = new Array();
value["22134"]["prv_id"] = "22134";
value["22134"]["prv_name"] = 'Бумз (DDT)';
value["22134"]["prv_folder"] = "content";
value["22134"]["prv_image"] = "./img/ui_item/Bumz.png";
value["22134"]["prv_top_image"] = "./img/ui_item/Bumz.png";
value["22134"]["prv_page"] = "./num_keyboard.html";
value["22134"]["prv_page_back_num"] = "./pages.html";
value["22134"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22134"]["prv_alert"] = "";
value["22134"]["prv_lang_any_keyboard"] = "ru";
value["22134"]["prv_type_any_keyboard"] = "NORM";
value["22134"]["prv_invitation"] = "prov_enter_code";
value["22134"]["prv_success_sign"] = "cellular_successful_notice";
value["22134"]["prv_error_sign"] = "cellular_bad_format";
value["22134"]["prv_button_text"] = "";
value["22134"]["prv_mask"] = "";
value["22134"]["prv_surmask"] = "1$30$******************************";
value["22134"]["prv_group"] = "";
value["22134"]["prv_online_check"] = "true";
value["22134"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Ground War: Tanks
value["22131"] = new Array();
value["22131"]["prv_id"] = "22131";
value["22131"]["prv_name"] = 'Ground War: Tanks';
value["22131"]["prv_folder"] = "content";
value["22131"]["prv_image"] = "./img/ui_item/tanksmailru.png";
value["22131"]["prv_top_image"] = "./img/ui_item/tanksmailru.png";
value["22131"]["prv_page"] = "./num_keyboard.html";
value["22131"]["prv_page_back_num"] = "./pages.html";
value["22131"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22131"]["prv_alert"] = "";
value["22131"]["prv_lang_any_keyboard"] = "ru";
value["22131"]["prv_type_any_keyboard"] = "NORM";
value["22131"]["prv_invitation"] = "prov_enter_code";
value["22131"]["prv_success_sign"] = "cellular_successful_notice";
value["22131"]["prv_error_sign"] = "cellular_bad_format";
value["22131"]["prv_button_text"] = "";
value["22131"]["prv_mask"] = "";
value["22131"]["prv_surmask"] = "1$30$******************************";
value["22131"]["prv_group"] = "";
value["22131"]["prv_online_check"] = "true";
value["22131"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) ArcheAge
value["22129"] = new Array();
value["22129"]["prv_id"] = "22129";
value["22129"]["prv_name"] = 'ArcheAge';
value["22129"]["prv_folder"] = "content";
value["22129"]["prv_image"] = "./img/ui_item/ArcheAge.png";
value["22129"]["prv_top_image"] = "./img/ui_item/ArcheAge.png";
value["22129"]["prv_page"] = "./anykey_keyboard.html";
value["22129"]["prv_page_back_any"] = "./pages.html";
value["22129"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22129"]["prv_alert"] = "";
value["22129"]["prv_lang_any_keyboard"] = "ru";
value["22129"]["prv_type_any_keyboard"] = "BIG";
value["22129"]["prv_invitation"] = "prov_enter_code";
value["22129"]["prv_success_sign"] = "cellular_successful_notice";
value["22129"]["prv_error_sign"] = "cellular_bad_format";
value["22129"]["prv_surmask"] = "1$30$******************************";
value["22129"]["prv_button_text"] = "";
value["22129"]["prv_mask"] = "";
value["22129"]["prv_group"] = "";
value["22129"]["prv_online_check"] = "true";
value["22129"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Bloody World
value["22130"] = new Array();
value["22130"]["prv_id"] = "22130";
value["22130"]["prv_name"] = 'Bloody World';
value["22130"]["prv_folder"] = "content";
value["22130"]["prv_image"] = "./img/ui_item/BloodyWorld.png";
value["22130"]["prv_top_image"] = "./img/ui_item/BloodyWorld.png";
value["22130"]["prv_page"] = "./anykey_keyboard.html";
value["22130"]["prv_page_back_any"] = "./pages.html";
value["22130"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22130"]["prv_alert"] = "";
value["22130"]["prv_lang_any_keyboard"] = "ru";
value["22130"]["prv_type_any_keyboard"] = "BIG";
value["22130"]["prv_invitation"] = "prov_enter_code";
value["22130"]["prv_success_sign"] = "cellular_successful_notice";
value["22130"]["prv_error_sign"] = "cellular_bad_format";
value["22130"]["prv_surmask"] = "1$30$******************************";
value["22130"]["prv_button_text"] = "";
value["22130"]["prv_mask"] = "";
value["22130"]["prv_group"] = "";
value["22130"]["prv_online_check"] = "true";
value["22130"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Jade Dynasty
value["22132"] = new Array();
value["22132"]["prv_id"] = "22132";
value["22132"]["prv_name"] = 'Jade Dynasty';
value["22132"]["prv_folder"] = "content";
value["22132"]["prv_image"] = "./img/ui_item/JadeDynasty.png";
value["22132"]["prv_top_image"] = "./img/ui_item/JadeDynasty.png";
value["22132"]["prv_page"] = "./anykey_keyboard.html";
value["22132"]["prv_page_back_any"] = "./pages.html";
value["22132"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22132"]["prv_alert"] = "";
value["22132"]["prv_lang_any_keyboard"] = "ru";
value["22132"]["prv_type_any_keyboard"] = "BIG";
value["22132"]["prv_invitation"] = "prov_enter_code";
value["22132"]["prv_success_sign"] = "cellular_successful_notice";
value["22132"]["prv_error_sign"] = "cellular_bad_format";
value["22132"]["prv_surmask"] = "1$30$******************************";
value["22132"]["prv_button_text"] = "";
value["22132"]["prv_mask"] = "";
value["22132"]["prv_group"] = "";
value["22132"]["prv_online_check"] = "true";
value["22132"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) RIOT
value["22133"] = new Array();
value["22133"]["prv_id"] = "22133";
value["22133"]["prv_name"] = 'RIOT';
value["22133"]["prv_folder"] = "content";
value["22133"]["prv_image"] = "./img/ui_item/Riot.png";
value["22133"]["prv_top_image"] = "./img/ui_item/Riot.png";
value["22133"]["prv_page"] = "./anykey_keyboard.html";
value["22133"]["prv_page_back_any"] = "./pages.html";
value["22133"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22133"]["prv_alert"] = "";
value["22133"]["prv_lang_any_keyboard"] = "ru";
value["22133"]["prv_type_any_keyboard"] = "BIG";
value["22133"]["prv_invitation"] = "prov_enter_code";
value["22133"]["prv_success_sign"] = "cellular_successful_notice";
value["22133"]["prv_error_sign"] = "cellular_bad_format";
value["22133"]["prv_surmask"] = "1$30$******************************";
value["22133"]["prv_button_text"] = "";
value["22133"]["prv_mask"] = "";
value["22133"]["prv_group"] = "";
value["22133"]["prv_online_check"] = "true";
value["22133"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Войны престолов
value["22135"] = new Array();
value["22135"]["prv_id"] = "22135";
value["22135"]["prv_name"] = 'Войны престолов';
value["22135"]["prv_folder"] = "content";
value["22135"]["prv_image"] = "./img/ui_item/stormfallmailru.png";
value["22135"]["prv_top_image"] = "./img/ui_item/stormfallmailru.png";
value["22135"]["prv_page"] = "./anykey_keyboard.html";
value["22135"]["prv_page_back_any"] = "./pages.html";
value["22135"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22135"]["prv_alert"] = "";
value["22135"]["prv_lang_any_keyboard"] = "ru";
value["22135"]["prv_type_any_keyboard"] = "BIG";
value["22135"]["prv_invitation"] = "prov_enter_code";
value["22135"]["prv_success_sign"] = "cellular_successful_notice";
value["22135"]["prv_error_sign"] = "cellular_bad_format";
value["22135"]["prv_surmask"] = "1$30$******************************";
value["22135"]["prv_button_text"] = "";
value["22135"]["prv_mask"] = "";
value["22135"]["prv_group"] = "";
value["22135"]["prv_online_check"] = "true";
value["22135"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Армата
value["22136"] = new Array();
value["22136"]["prv_id"] = "22136";
value["22136"]["prv_name"] = 'Армата';
value["22136"]["prv_folder"] = "content";
value["22136"]["prv_image"] = "./img/ui_item/armata.png";
value["22136"]["prv_top_image"] = "./img/ui_item/armata.png";
value["22136"]["prv_page"] = "./anykey_keyboard.html";
value["22136"]["prv_page_back_any"] = "./pages.html";
value["22136"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22136"]["prv_alert"] = "";
value["22136"]["prv_lang_any_keyboard"] = "ru";
value["22136"]["prv_type_any_keyboard"] = "BIG";
value["22136"]["prv_invitation"] = "prov_enter_code";
value["22136"]["prv_success_sign"] = "cellular_successful_notice";
value["22136"]["prv_error_sign"] = "cellular_bad_format";
value["22136"]["prv_surmask"] = "1$30$******************************";
value["22136"]["prv_button_text"] = "";
value["22136"]["prv_mask"] = "";
value["22136"]["prv_group"] = "";
value["22136"]["prv_online_check"] = "true";
value["22136"]["prv_receipt_extra_message"] = "";



// (Моментальные платежи) Герои войны и денег
value["22137"] = new Array();
value["22137"]["prv_id"] = "22137";
value["22137"]["prv_name"] = 'Герои войны и денег';
value["22137"]["prv_folder"] = "content";
value["22137"]["prv_image"] = "./img/ui_item/HeroesWM.png";
value["22137"]["prv_top_image"] = "./img/ui_item/HeroesWM.png";
value["22137"]["prv_page"] = "./anykey_keyboard.html";
value["22137"]["prv_page_back_any"] = "./pages.html";
value["22137"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22137"]["prv_alert"] = "";
value["22137"]["prv_lang_any_keyboard"] = "ru";
value["22137"]["prv_type_any_keyboard"] = "BIG";
value["22137"]["prv_invitation"] = "prov_enter_code";
value["22137"]["prv_success_sign"] = "cellular_successful_notice";
value["22137"]["prv_error_sign"] = "cellular_bad_format";
value["22137"]["prv_surmask"] = "1$30$******************************";
value["22137"]["prv_button_text"] = "";
value["22137"]["prv_mask"] = "";
value["22137"]["prv_group"] = "";
value["22137"]["prv_online_check"] = "true";
value["22137"]["prv_receipt_extra_message"] = "";


//ЦСД - оплата за домофон
value["22150"] = new Array();
value["22150"]["prv_id"] = "22150";
value["22150"]["prv_name"] = "ЦСД - оплата за домофон";
value["22150"]["prv_folder"] = "charity";
value["22150"]["prv_page"] = "./cellular.html";
value["22150"]["prv_page_conf"] = "./validate_confirm.html";
value["22150"]["prv_alert"] = "";
value["22150"]["prv_image"] = "img/ui_item/csd_dom.png";
value["22150"]["prv_top_image"] = "./img/ui_item/csd_dom.png";
value["22150"]["prv_invitation"] = "prov_enter_account";
value["22150"]["prv_button_text"] = "";
value["22150"]["prv_mask"] = "<!^\\d+${7}>";
value["22150"]["prv_group"] = "";
value["22150"]["prv_online_check"] = "true";


//ЦСД - оплата за домофон
value["csd_domofon"] = new Array();
value["csd_domofon"]["prv_name"] = "Центр обслуживания домофонов";
value["csd_domofon"]["prv_image"] = "./img/ui_item/csd_folder.png";


//ЭКГ в школах
value["22151"] = new Array();
value["22151"]["prv_id"] = "22151";
value["22151"]["prv_name"] = "ЭКГ в школах";
value["22151"]["prv_folder"] = "other";
value["22151"]["prv_page"] = "./cellular.html";
value["22151"]["prv_page_conf"] = "./validate_confirm.html";
value["22151"]["prv_alert"] = "";
value["22151"]["prv_image"] = "img/ui_item/ekg_school.png";
value["22151"]["prv_top_image"] = "./img/ui_item/ekg_school.png";
value["22151"]["prv_invitation"] = "prov_enter_account";
value["22151"]["prv_button_text"] = "";
value["22151"]["prv_mask"] = "<!^\\d+${1,4}>";
value["22151"]["prv_group"] = "";
value["22151"]["prv_online_check"] = "true";


//На ТВ - размещение рекламы
value["22153"] = new Array();
value["22153"]["prv_id"] = "22153";
value["22153"]["prv_name"] = "На ТВ - размещение рекламы";
value["22153"]["prv_folder"] = "folder_adverts";
value["22153"]["prv_page"] = "./cellular.html";
value["22153"]["prv_page_conf"] = "./validate_confirm.html";
value["22153"]["prv_alert"] = "";
value["22153"]["prv_image"] = "img/ui_item/natv_logo.png";
value["22153"]["prv_top_image"] = "./img/ui_item/natv_logo.png";
value["22153"]["prv_invitation"] = "prov_enter_account";
value["22153"]["prv_button_text"] = "";
value["22153"]["prv_mask"] = "<!^\\d+${6}>";
value["22153"]["prv_group"] = "";
value["22153"]["prv_online_check"] = "true";


//Гуд Нейборс Интернешнл - благотворительная платформа
value["22149"] = new Array();
value["22149"]["prv_id"] = "22149";
value["22149"]["prv_name"] = "Гуд Нейборс Интернешнл";
value["22149"]["prv_folder"] = "other";
value["22149"]["prv_page"] = "./good_neighbors.html";
value["22149"]["prv_page_conf"] = "./validate_confirm.html";
value["22149"]["prv_alert"] = "";
value["22149"]["prv_image"] = "img/ui_item/good_neighbors.png";
value["22149"]["prv_top_image"] = "./img/ui_item/good_neighbors.png";
value["22149"]["prv_is_cellular"] = false;
value["22149"]["prv_invitation"] = "prov_enter_account";
value["22149"]["prv_button_text"] = "";
value["22149"]["prv_mask"] = "<!^\\d+${1,33}>";
value["22149"]["prv_group"] = "";
value["22149"]["prv_online_check"] = "false";


//МобильникАгент
// Delete provider
// value["22154"] = new Array();
// value["22154"]["prv_id"] = "22154";
// value["22154"]["prv_name"] = "Мобильник Агент";
// value["22154"]["prv_folder"] = "tax";
// value["22154"]["prv_page"] = "./cellular_tazalyk.html";
// value["22154"]["prv_page_conf"] = "./validate_confirm.html";
// value["22154"]["prv_alert"] = "";
// value["22154"]["prv_is_cellular"] = true;
// value["22154"]["prv_image"] = "img/ui_item/agent-logo.png";
// value["22154"]["prv_top_image"] = "./img/ui_item/agent-logo.png";
// value["22154"]["prv_invitation"] = "prov_enter_account";
// value["22154"]["prv_button_text"] = "";
// value["22154"]["prv_mask"] = "<!^.+${5,25}>";
// value["22154"]["prv_group"] = "";
// value["22154"]["prv_online_check"] = "true";


//Bookit.kg - Купить авиабилеты онлайн
value["22155"] = new Array();
value["22155"]["prv_id"] = "22155";
value["22155"]["prv_name"] = "Bookit.kg - Купить авиабилеты онлайн";
value["22155"]["prv_folder"] = "content";
value["22155"]["prv_page"] = "./cellular.html";
value["22155"]["prv_page_conf"] = "./validate_confirm.html";
value["22155"]["prv_alert"] = "";
value["22155"]["prv_image"] = "img/ui_item//bookit.kg_logo.png";
value["22155"]["prv_top_image"] = "./img/ui_item/bookit.kg_logo.png";
value["22155"]["prv_invitation"] = "prov_enter_account";
value["22155"]["prv_button_text"] = "";
value["22155"]["prv_mask"] = "<!^\\d+${9}>";
value["22155"]["prv_group"] = "";
value["22155"]["prv_online_check"] = "true";


//Общественное объединение "Уркер Эли"
value["22156"] = new Array();
value["22156"]["prv_id"] = "22156";
value["22156"]["prv_name"] = "Общественное объединение Уркер Эли";
value["22156"]["prv_folder"] = "other";
value["22156"]["prv_page"] = "./cellular.html";
value["22156"]["prv_image"] = "img/ui_item/urker_eli.png";
value["22156"]["prv_page_conf"] = "./validate_confirm.html";
value["22156"]["prv_alert"] = "";
value["22156"]["prv_invitation"] = "prov_enter_code";
value["22156"]["prv_button_text"] = "";
value["22156"]["prv_mask"] = "0 (<!^\\d+${3}>) <!^\\d+${6}>";
value["22156"]["prv_group"] = "";
value["22156"]["prv_online_check"] = "true";


//Red Petroleum - пополнение топливных карт
value["22147"] = new Array();
value["22147"]["prv_id"] = "22147";
value["22147"]["prv_name"] = "Red Petroleum - пополнение топливных карт";
value["22147"]["prv_folder"] = "tax";
value["22147"]["prv_page"] = "./cellular.html";
value["22147"]["prv_page_conf"] = "./validate_confirm.html";
value["22147"]["prv_alert"] = "";
value["22147"]["prv_image"] = "img/ui_item/red_petrol.png";
value["22147"]["prv_top_image"] = "./img/ui_item/red_petrol.png";
value["22147"]["prv_invitation"] = "prov_enter_account";
value["22147"]["prv_button_text"] = "";
value["22147"]["prv_mask"] = "<!^\\d+${4}>-<!^\\d+${4}>-<!^\\d+${6}>";
value["22147"]["prv_group"] = "";
value["22147"]["prv_online_check"] = "true";


// (Моментальные платежи) allpay - Мобильный кошелек
value["22157"] = new Array();
value["22157"]["prv_id"] = "22157";
value["22157"]["prv_name"] = 'allpay - Мобильный кошелек';
value["22157"]["prv_folder"] = "tax";
value["22157"]["prv_image"] = "./img/ui_item/allpay.png";
value["22157"]["prv_top_image"] = "./img/ui_item/allpay.png";
value["22157"]["prv_page"] = "./num_keyboard.html";
value["22157"]["prv_page_back_num"] = "./pages.html";
value["22157"]["prv_page_conf"] = "./np_validate_confirm.html";
value["22157"]["prv_alert"] = "";
value["22157"]["prv_lang_any_keyboard"] = "ru";
value["22157"]["prv_type_any_keyboard"] = "NORM";
value["22157"]["prv_invitation"] = "prov_enter_code";
value["22157"]["prv_success_sign"] = "cellular_successful_notice";
value["22157"]["prv_error_sign"] = "cellular_bad_format";
value["22157"]["prv_button_text"] = "";
value["22157"]["prv_mask"] = "";
value["22157"]["prv_surmask"] = "12$12$************";
value["22157"]["prv_group"] = "";
value["22157"]["prv_online_check"] = "true";
value["22157"]["prv_receipt_extra_message"] = "";


//AQUA LAB - оплата за результаты исследований
value["22152"] = new Array();
value["22152"]["prv_id"] = "22152";
value["22152"]["prv_name"] = "AQUA LAB - оплата за результаты исследований";
value["22152"]["prv_folder"] = "other";
value["22152"]["prv_page"] = "./cellular.html";
value["22152"]["prv_page_conf"] = "./validate_confirm.html";
value["22152"]["prv_alert"] = "";
value["22152"]["prv_image"] = "img/ui_item/aqua_lab.png";
value["22152"]["prv_top_image"] = "./img/ui_item/aqua_lab.png";
value["22152"]["prv_invitation"] = "prov_enter_account";
value["22152"]["prv_button_text"] = "";
value["22152"]["prv_mask"] = "<!^\\d+${20,21}>";
value["22152"]["prv_group"] = "";
value["22152"]["prv_online_check"] = "true";


//Управляющая компания Ихлас Таун
// Comment provider
// value["22158"] = new Array();
// value["22158"]["prv_id"] = "22158";
// value["22158"]["prv_name"] = "Управляющая компания Ихлас Таун";
// value["22158"]["prv_folder"] = "other";
// value["22158"]["prv_page"] = "./cellular.html";
// value["22158"]["prv_page_conf"] = "./validate_confirm.html";
// value["22158"]["prv_alert"] = "";
// value["22158"]["prv_image"] = "img/ui_item/ihlas_town.png";
// value["22158"]["prv_top_image"] = "./img/ui_item/ihlas_town.png";
// value["22158"]["prv_invitation"] = "prov_enter_account";
// value["22158"]["prv_button_text"] = "";
// value["22158"]["prv_mask"] = "<!^\\d+${7}>";
// value["22158"]["prv_group"] = "";
// value["22158"]["prv_online_check"] = "true";


//Портал ГРУПП - оплата услуг эвакуатора
value["22159"] = new Array();
value["22159"]["prv_id"] = "22159";
value["22159"]["prv_name"] = "Портал ГРУПП - оплата услуг эвакуатора";
value["22159"]["prv_folder"] = "other";
value["22159"]["prv_page"] = "./cellular.html";
value["22159"]["prv_page_conf"] = "./validate_confirm.html";
value["22159"]["prv_alert"] = "";
value["22159"]["prv_image"] = "img/ui_item/portal_group.png";
value["22159"]["prv_top_image"] = "./img/ui_item/portal_group.png";
value["22159"]["prv_invitation"] = "prov_enter_account";
value["22159"]["prv_button_text"] = "";
value["22159"]["prv_mask"] = "0<!^\\d+${6,8}>";
value["22159"]["prv_group"] = "";
value["22159"]["prv_online_check"] = "true";


//CTmax – автоматизация торговли
value["22160"] = new Array();
value["22160"]["prv_id"] = "22160";
value["22160"]["prv_name"] = "CTmax – автоматизация торговли";
value["22160"]["prv_folder"] = "other";
value["22160"]["prv_page"] = "./cellular.html";
value["22160"]["prv_page_conf"] = "./validate_confirm.html";
value["22160"]["prv_alert"] = "";
value["22160"]["prv_image"] = "img/ui_item/ctmax_logo.png";
value["22160"]["prv_top_image"] = "./img/ui_item/ctmax_logo.png";
value["22160"]["prv_invitation"] = "prov_enter_account";
value["22160"]["prv_button_text"] = "";
value["22160"]["prv_mask"] = "<!^\\d+${6}>";
value["22160"]["prv_group"] = "";
value["22160"]["prv_online_check"] = "true";


//Ю-Мода - интернет магазин
value["22161"] = new Array();
value["22161"]["prv_id"] = "22161";
value["22161"]["prv_name"] = 'Ю-Мода - интернет магазин';
value["22161"]["prv_folder"] = "content";
value["22161"]["prv_image"] = "./img/ui_item/u-moda_logo.png";
value["22161"]["prv_top_image"] = "./img/ui_item/u-moda_logo.png";
value["22161"]["prv_page"] = "./anykey_keyboard.html";
value["22161"]["prv_page_back_num"] = "./pages.html";
value["22161"]["prv_page_conf"] = "./validate_confirm_wordsAccount.html";
value["22161"]["prv_lang_any_keyboard"] = "en";
value["22161"]["prv_type_any_keyboard"] = "NORM";
value["22161"]["prv_invitation"] = "prov_enter_account";
value["22161"]["prv_success_sign"] = "cellular_successful_notice";
value["22161"]["prv_error_sign"] = "cellular_bad_format";
value["22161"]["prv_button_text"] = "";
value["22161"]["prv_mask"] = "";
value["22161"]["prv_surmask"] = "1$30$******************************";
value["22161"]["prv_group"] = "";
value["22161"]["prv_online_check"] = "true";
value["22161"]["prv_receipt_extra_message"] = "";



//Управляющая компания Джал Таун
value["22162"] = new Array();
value["22162"]["prv_id"] = "22162";
value["22162"]["prv_name"] = "Управляющая компания Джал Таун";
value["22162"]["prv_folder"] = "other";
value["22162"]["prv_page"] = "./cellular.html";
value["22162"]["prv_page_conf"] = "./validate_confirm.html";
value["22162"]["prv_alert"] = "";
value["22162"]["prv_image"] = "img/ui_item/djal_town.png";
value["22162"]["prv_top_image"] = "./img/ui_item/djal_town.png";
value["22162"]["prv_invitation"] = "prov_enter_account";
value["22162"]["prv_button_text"] = "";
value["22162"]["prv_mask"] = "<!^\\d+${6}>";
value["22162"]["prv_group"] = "";
value["22162"]["prv_online_check"] = "true";


//Футбольная школа Юниор - оплата за абонемент
value["22163"] = new Array();
value["22163"]["prv_id"] = "22163";
value["22163"]["prv_name"] = "Футбольная школа Юниор - оплата за абонемент";
value["22163"]["prv_folder"] = "other";
value["22163"]["prv_page"] = "./junior_school.html";
value["22163"]["prv_page_conf"] = "./validate_confirm.html";
value["22163"]["prv_alert"] = "";
value["22163"]["prv_image"] = "img/ui_item/junior_logo.png";
value["22163"]["prv_top_image"] = "./img/ui_item/junior_logo.png";
value["22163"]["prv_is_cellular"] = false;
value["22163"]["prv_invitation"] = "prov_enter_account";
value["22163"]["prv_button_text"] = "";
value["22163"]["prv_mask"] = "<!^\\.+${1,33}>";
value["22163"]["prv_group"] = "";
value["22163"]["prv_online_check"] = "false";


//AVTONALOG.KG
value["22164"] = new Array();
value["22164"]["prv_id"] = "22164";
value["22164"]["prv_name"] = "AVTONALOG.KG";
value["22164"]["prv_folder"] = "other";
value["22164"]["prv_page"] = "./cellular.html";
value["22164"]["prv_page_conf"] = "./validate_confirm.html";
value["22164"]["prv_alert"] = "";
value["22164"]["prv_image"] = "img/ui_item/avto_nalog.png";
value["22164"]["prv_top_image"] = "./img/ui_item/avto_nalog.png";
value["22164"]["prv_invitation"] = "prov_enter_account";
value["22164"]["prv_button_text"] = "";
value["22164"]["prv_mask"] = "<!^\\d+${14}>";
value["22164"]["prv_group"] = "";
value["22164"]["prv_online_check"] = "true";



////Taxi Fortuna-пополнение баланса водителя
//value["22124"] = new Array();
//value["22124"]["prv_id"] = "22124";
//value["22124"]["prv_name"] = "Taxi Fortuna";
//value["22124"]["prv_folder"] = "tax";
//value["22124"]["prv_page"] = "./cellular.html";
//value["22124"]["prv_page_conf"] = "./validate_confirm.html";
//value["22124"]["prv_alert"] = "";
//value["22124"]["prv_image"] = "img/ui_item/food_logo.png";
//value["22124"]["prv_top_image"] = "./img/ui_item/food_logo.png";
//value["22124"]["prv_invitation"] = "prov_enter_account";
//value["22124"]["prv_button_text"] = "";
//value["22124"]["prv_mask"] = "<!^.+${1,15}>";
//value["22124"]["prv_group"] = "пополнение баланса водителя";
//value["22124"]["prv_online_check"] = "true";