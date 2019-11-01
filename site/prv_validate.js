function testProviderByMask(providerId, sValue) {
	var arr = setValidateArray();
	return arr[providerId].mask.test(sValue);
}

function getMinAndMaxSummForProvider(providerId) {
	var arr = setValidateArray();
	return { minSum: arr[providerId].minSum, maxSum: arr[providerId].maxSum, minCashSum: arr[providerId].minCashSum };
}

function setValidateArray() {
	var array = new Array();
	//testProvider
	array["5151"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '10', maxSum: '500' };
	// ОТЭКЕАВИА
	array["9470"] = { mask: new RegExp('^[0-9]{1,20}$', 'i'), minSum: '20', maxSum: '100000' };
	// Голосовые открытки
	array["9244"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '40' };
	// Q2Media
	array["9031"] = { mask: new RegExp('^[0-9]{1,14}$', 'i'), minSum: '50', maxSum: '1000' };
	// megacom
	array["5131"] = { mask: new RegExp('^996(7|5)5[0-9][0-9]{6,6}$', 'i'), minSum: '10', maxSum: '0' };
	// megacom TILZ
	array["22376"] = { mask: new RegExp('^996997[0-9]{6,6}$', 'i'), minSum: '10', maxSum: '0' };
	//O
	array["5132"] = { mask: new RegExp('^996(7|5)0[0-9][0-9]{6,6}$', 'i'), minSum: '10', maxSum: '10000' };
    //O
	array["22076"] = { mask: new RegExp('^99670[0-9][0-9]{6,6}$', 'i'), minSum: '10', maxSum: '10000' };

	//Beeline
	// 14166
	//array["5135"] = { mask: new RegExp('^(77[0-9]{7})|(31258[0-9]{4})$', 'i'), minSum: '10', maxSum: '100000' };	
	array["5135"] = { mask: new RegExp('^(77[0-9][0-9]{1,6})|(22[0-9][0-9]{1,6})|(31258[0-9]{4})$', 'i'), minSum: '10', maxSum: '100000' };

	//Nexi
    // array["5133"] = { mask: new RegExp('^996(1|5)7[0-9][0-9]{6,6}', 'i'), minSum: '20', maxSum: '5000' };
	//Fonex
    //array["5134"] = { mask: new RegExp('^99654(3|5)[0-9]{6,6}$', 'i'), minSum: '10', maxSum: '100000' };
	//Katel
    // array["5136"] = { mask: new RegExp('^996(312|515|517)[0-9]{6,6}$', 'i'), minSum: '20', maxSum: '0' };


	//Sapatmobile
	array["5177"] = { mask: new RegExp('^996[0-9]{9,9}$', 'i'), minSum: '10', maxSum: '0' };
	//Teztelecom
	array["5137"] = { mask: new RegExp('^0[0-9]{9,9}$', 'i'), minSum: '10', maxSum: '0' };
	//Кыргызтелеком
	array["5138"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '10', maxSum: '10000' };
	//ADSL
	array["5191"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '10', maxSum: '5000' };
	//JET
	array["5192"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '10', maxSum: '0' };
	//Saimatelecom
	array["5139"] = { mask: new RegExp('^(1|4|7|9)[0-9]{5,5}$', 'i'), minSum: '10', maxSum: '5000' };
	//Saima Net
	array["5141"] = { mask: new RegExp('^(1|4|7|9)[0-9]{5,5}$', 'i'), minSum: '10', maxSum: '5000' };
	//City net
	array["5142"] = { mask: new RegExp('^[0-9]{6,10}$', 'i'), minSum: '10', maxSum: '0' };
	//Aknet
	array["5144"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '10', maxSum: '0' };
	//Fast Net
	array["5145"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '10', maxSum: '0' };
	//Totel
	array["5146"] = { mask: new RegExp('^[0-9]{6,10}$', 'i'), minSum: '10', maxSum: '5000' };
	//Megaline
	array["5147"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '10', maxSum: '0' };
	//Ай-спейс
	array["10288"] = { mask: new RegExp('^[0][0-9]{9}$', 'i'), minSum: '10', maxSum: '0' };
	//Foris telecom
	//array["9765"] = { mask: new RegExp('^\\d{6,20}$', 'i'), minSum: '10', maxSum: '0' };
	//Music.kg
	array["5148"] = { mask: new RegExp('^[0-9]{6,6}$', 'i'), minSum: '5', maxSum: '5000' };
	//Homeline
	array["5149"] = { mask: new RegExp('^[0-9]{8,8}$', 'i'), minSum: '20', maxSum: '0' };
	//Elcat
	array["5150"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '10', maxSum: '0' };
	////Мобильные ставки
	//array["5152"] = { mask: new RegExp('^[0-9]{5,14}$', 'i'), minSum: '20', maxSum: '20000' };
    //NeoTelecom - цифровое ТВ
	array["5153"] = { mask: new RegExp('^[0-9]{6,12}$', 'i'), minSum: '10', maxSum: '10000' };
	//SAVA *1500
	array["5154"] = { mask: new RegExp('^0[0-9]{9,9}$', 'i'), minSum: '20', maxSum: '10000' };
	//Ак-Бата
	array["5184"] = { mask: new RegExp('^996[0-9]{9,9}$', 'i'), minSum: '10', maxSum: '0' };
	//Torrent.kg
	array["5155"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '20', maxSum: '5000' };
	//Diskont.kg покупка купона
	array["9944"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '0', maxSum: '0' };
	//Diskont.kg пополнение электронного счета
	array["10022"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '0', maxSum: '0' };
	//Vteme.kg
	array["9946"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '0', maxSum: '0' };
	//My Logo
	array["5156"] = { mask: new RegExp('^[0-9]{10,10}$', 'i'), minSum: '0', maxSum: '0' };
	//DAB Media
	array["5143"] = { mask: new RegExp('^[0-9]{1,6}$', 'i'), minSum: '50', maxSum: '5000' };
	//Тазалык
	array["5157"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '0' };
	//Бишкек Газ
	array["5158"] = { mask: new RegExp('^0[0-9]{8,8}$', 'i'), minSum: '10', maxSum: '0' };
	array["5193"] = { mask: new RegExp('^0[0-9]{8,8}$', 'i'), minSum: '10', maxSum: '100' };
	//Кыргызлифт
	array["5159"] = { mask: new RegExp('^[0-9]{1,6}$', 'i'), minSum: '10', maxSum: '0' };
	//Бишкекводоканал
	array["5185"] = { mask: new RegExp('^[0-9]{7,7}-[0-9]$', 'i'), minSum: '10', maxSum: '0' };
	//Бишкектеплоэнерго
	array["5162"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '20', maxSum: '0' };
	//Бишкектеплосеть
	array["5163"] = { mask: new RegExp('^[0-9]{7,7}-[0-9]$', 'i'), minSum: '10', maxSum: '0' };
	//Кемин Энергосбыт
	array["5164"] = { mask: new RegExp('^41[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '0' };
	array["5194"] = { mask: new RegExp('^41[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '200' };
	//Московский энергосбыт
	array["5165"] = { mask: new RegExp('^46[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '0' };
	array["5195"] = { mask: new RegExp('^46[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '200' };
	//Кантский энергосбыт
	array["5166"] = { mask: new RegExp('^45[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '0' };
	array["5196"] = { mask: new RegExp('^45[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '200' };
	//Панфиловский энергосбыт
	array["5167"] = { mask: new RegExp('^47[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '0' };
	array["5197"] = { mask: new RegExp('^47[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '200' };
	//Токмокский энергосбыт
	array["5168"] = { mask: new RegExp('^43[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '0' };
	array["5198"] = { mask: new RegExp('^43[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '200' };
	//Жаильский энергосбыт
	array["5169"] = { mask: new RegExp('^48[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '0' };
	array["5199"] = { mask: new RegExp('^48[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '200' };
	//Аламединский Энегосбыт
	array["5170"] = { mask: new RegExp('^3[0-9]{8,8}$', 'i'), minSum: '10', maxSum: '0' };
	array["5201"] = { mask: new RegExp('^3[0-9]{8,8}$', 'i'), minSum: '10', maxSum: '200' };
	// Ысык-Атинский энергосбыт
	array["5171"] = { mask: new RegExp('^44[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '0' };
	array["5202"] = { mask: new RegExp('^44[0-9]{7,7}$', 'i'), minSum: '10', maxSum: '200' };
	// Сокулукский энергосбыт
	array["5172"] = { mask: new RegExp('^[0-9]{9,9}$', 'i'), minSum: '10', maxSum: '0' };
	array["5203"] = { mask: new RegExp('^[0-9]{9,9}$', 'i'), minSum: '10', maxSum: '200' };
	//Чуйский энергосбыт
	array["5173"] = { mask: new RegExp('^[0-9]', 'i'), minSum: '10', maxSum: '0' };
	array["5204"] = { mask: new RegExp('^[0-9]', 'i'), minSum: '10', maxSum: '200' };
	// Бишкекский энергосбыт
	array["5174"] = { mask: new RegExp('^[0-9]{8,9}$', 'i'), minSum: '10', maxSum: '0' };
	array["5205"] = { mask: new RegExp('^[0-9]{8,9}$', 'i'), minSum: '10', maxSum: '200' };
	//Хостер.kg
	array["5175"] = { mask: new RegExp('^[0-9]{1,8}$', 'i'), minSum: '20', maxSum: '0' };
	//Sapatcom
	array["5176"] = { mask: new RegExp('^996312[0-9]{6,6}$', 'i'), minSum: '10', maxSum: '0' };
	//Долон ТВ
	array["5178"] = { mask: new RegExp('^[0-9]{6,6}$', 'i'), minSum: '5', maxSum: '0' };
	//Долон Интернет
	array["5206"] = { mask: new RegExp('^[0-9] {6,6}$', 'i'), minSum: '5', maxSum: '0' };
	//Трансфер
	array["5179"] = { mask: new RegExp('^[0-9]{1,5}$', 'i'), minSum: '10', maxSum: '20000' };
	//Партнеры
	array["5181"] = { mask: new RegExp('^[0-9]{1,10}$', 'i'), minSum: '20', maxSum: '0' };
	//Кауфман
	array["5182"] = { mask: new RegExp('^\\w+$', 'i'), minSum: '10', maxSum: '0' };
	//Ala ТВ
	array["5183"] = { mask: new RegExp('^[0-9]+/0$', 'i'), minSum: '20', maxSum: '0' };
	//Namba
	array["5661"] = { mask: new RegExp('^[0-9]{1,11}$', 'i'), minSum: '10', maxSum: '5000' };
	//SMS-Taxi
	array["5690"] = { mask: new RegExp('^[0-9]{10}$', 'i'), minSum: '10', maxSum: '5000' };
	//Oriflame
	array["5186"] = { mask: new RegExp('^[0-9]{1,21}$', 'i'), minSum: '10', maxSum: '50000' };
	//KRSU
	//array["5761"] = { mask: new RegExp('^[0-9]{6,6}$', 'i'), minSum: '50', maxSum: '50000' };
	array["5761"] = { mask: new RegExp('[0-9a-zA-Z]$', 'i'), minSum: '50', maxSum: '50000' };
	//Неотек - пополнение счетов агентов
	array["5792"] = { mask: new RegExp('^.+$', 'i'), minSum: '10', maxSum: '0' };
	//M&TC
	array["5804"] = { mask: new RegExp('^[0-9]{1,10}$', 'i'), minSum: '10', maxSum: '2500' };
	//WinnerSport
	array["5659"] = { mask: new RegExp('^[0-9]{7}$', 'i'), minSum: '5', maxSum: '100000' };
	// МТС-Россия
	array["10576"] = { mask: new RegExp('^[0-9]{10}$', 'i'), minSum: '35', maxSum: '0' };
	// МТС-Беларусь
	array["6496"] = { mask: new RegExp('^[0-9]{12}$', 'i'), minSum: '35', maxSum: '0' };
	// Билайн Россия
	array["6497"] = { mask: new RegExp('^[0-9]{10}$', 'i'), minSum: '35', maxSum: '0' };
	// Мегафон Россия
	array["6498"] = { mask: new RegExp('^[0-9]{10}$', 'i'), minSum: '35', maxSum: '0' };
	// НТВ-Плюс Россия
	array["6499"] = { mask: new RegExp('^[0-9]{10}$', 'i'), minSum: '175', maxSum: '0' };
	// Билайн-Таджикистан
	array["6501"] = { mask: new RegExp('^(917|919)[0-9]{6}$', 'i'), minSum: '20', maxSum: '0' };
	// Билайн-Армения (моб связь)
	array["6502"] = { mask: new RegExp('^(91|96)[0-9]{6}$', 'i'), minSum: '35', maxSum: '0' };
	// Билайн -Армения (фикс связь)
	array["6503"] = { mask: new RegExp('^[0-9]{8}$', 'i'), minSum: '35', maxSum: '0' };
	// Билайн-Казахстан
	array["6504"] = { mask: new RegExp('^(777|705)[0-9]{7}$', 'i'), minSum: '35', maxSum: '0' };
	// Билайн-Грузия
	array["6505"] = { mask: new RegExp('^(97|92|79|74|71)[0-9]{6}$', 'i'), minSum: '35', maxSum: '0' };
	// Билайн-Узбекистан
	array["6506"] = { mask: new RegExp('^(90|91)[0-9]{7}$', 'i'), minSum: '35', maxSum: '0' };
	// Мегафон-Таджикистан
	array["6507"] = { mask: new RegExp('^(901|905|907)[0-9]{6}$', 'i'), minSum: '20', maxSum: '0' };
	// Вавилон-Мобайл Тадджикистан
	array["6508"] = { mask: new RegExp('^(918[0-9]{6}|98[0-9]{7})$', 'i'), minSum: '20', maxSum: '0' };
	// МТС-Армения
	array["6509"] = { mask: new RegExp('^(93|94|98|77)[0-9]{6}$', 'i'), minSum: '35', maxSum: '0' };
	//ИНДИГО-Таджикистан
	array["6510"] = { mask: new RegExp('^(93[0-9]{7}|501[0-9]{6})$', 'i'), minSum: '20', maxSum: '0' };
	//Sms - дневник
	array["6407"] = { mask: new RegExp('^[0-9]{6}$', 'i'), minSum: '20', maxSum: '1000' };
	// World of Tanks (KazMoneyUnion)
	array["6410"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '50', maxSum: '5000' };
	// Perfect World (KazMoneyUnion)
	array["6411"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// Легенда: Наследие драконов (фэо-прайм) (KazMoneyUnion)
	array["6413"] = { mask: new RegExp('^.{1,17}$', 'i'), minSum: '50', maxSum: '5000' };
	// Легенда: Наследие драконов (фэо-минор) (KazMoneyUnion)
	array["6414"] = { mask: new RegExp('^.{1,16}$', 'i'), minSum: '50', maxSum: '5000' };
	//  Ганджубасовые войны (KazMoneyUnion)
	array["6415"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// Троецарствие (KazMoneyUnion)
	array["6416"] = { mask: new RegExp('^.{1,16}$', 'i'), minSum: '50', maxSum: '5000' };
	// Carnage (KazMoneyUnion)
	array["6417"] = { mask: new RegExp('^\\d{1,18}$', 'i'), minSum: '50', maxSum: '5000' };
	// Lava-Online (KazMoneyUnion)
	array["6418"] = { mask: new RegExp('^\\d{1,7}$', 'i'), minSum: '50', maxSum: '5000' };
	// U.N.I.T. (KazMoneyUnion)
	array["6419"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// TimeZero Prima (KazMoneyUnion)
	array["6427"] = { mask: new RegExp('^.{1,16}$', 'i'), minSum: '50', maxSum: '5000' };
	// NeverLands (KazMoneyUnion)
	array["6428"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// Грани реальности (KazMoneyUnion)
	array["6429"] = { mask: new RegExp('^.{1,18}$', 'i'), minSum: '50', maxSum: '5000' };
	// Haddan (KazMoneyUnion)
	array["6430"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// Overkings (KazMoneyUnion)
	array["6431"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '50', maxSum: '5000' };
	// Sky2Fly (KazMoneyUnion)
	array["6432"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// Джаггернаут  (KazMoneyUnion)
	array["6433"] = { mask: new RegExp('^.{1,15}$', 'i'), minSum: '50', maxSum: '5000' };
	// Bloody World (KazMoneyUnion)
	array["6434"] = { mask: new RegExp('^.{1,24}$', 'i'), minSum: '50', maxSum: '5000' };
	// Войны мафии (KazMoneyUnion)
	array["6435"] = { mask: new RegExp('^.{1,25}$', 'i'), minSum: '50', maxSum: '5000' };
	// Galaxy (KazMoneyUnion)
	array["6436"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '50', maxSum: '5000' };
	// Mgates (KazMoneyUnion)
	array["6437"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '50', maxSum: '5000' };
	// Xsolla.com (KazMoneyUnion)
	array["6438"] = { mask: new RegExp('^\\d{1,16}$', 'i'), minSum: '50', maxSum: '5000' };
	// Tanki Online (KazMoneyUnion)
	array["6412"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// Герои войны и денег (KazMoneyUnion)
	array["6439"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// 11х11 футбольный менеджер (KazMoneyUnion)
	array["6442"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// Легенда: Наследие драконов (фэо-медиант) (KazMoneyUnion)
	array["6443"] = { mask: new RegExp('^.{1,16}$', 'i'), minSum: '50', maxSum: '5000' };
	// Аллоды Онлайн (KazMoneyUnion)
	array["6445"] = { mask: new RegExp('^.{1,15}$', 'i'), minSum: '50', maxSum: '5000' };
	// Гладиаторы (KazMoneyUnion)
	array["6446"] = { mask: new RegExp('^.{1,24}$', 'i'), minSum: '50', maxSum: '5000' };
	// Дозоры (KazMoneyUnion)
	array["6447"] = { mask: new RegExp('^\\d{1,22}$', 'i'), minSum: '50', maxSum: '5000' };
	// Садовая империя (KazMoneyUnion)
	array["6448"] = { mask: new RegExp('^\\d{1,14}$', 'i'), minSum: '50', maxSum: '5000' };
	//Пути истории (KazMoneyUnion)
	array["6449"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '50', maxSum: '5000' };
	// Моя деревня (KazMoneyUnion)
	array["6450"] = { mask: new RegExp('^\\d{1,16}$', 'i'), minSum: '50', maxSum: '5000' };
	// Осада Онлайн (KazMoneyUnion)
	array["6451"] = { mask: new RegExp('^.{1,21}$', 'i'), minSum: '50', maxSum: '5000' };
	// BananaWars  (KazMoneyUnion)
	array["6452"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// One world (KazMoneyUnion)
	array["6453"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '50', maxSum: '5000' };
	// My lands (KazMoneyUnion)
	array["6454"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// Территория 2 (KazMoneyUnion)
	array["6455"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '50', maxSum: '5000' };
	//// Battle of Immortals
	//array["6456"] = { mask: new RegExp('^\\d{1,16}$', 'i'), minSum: '20', maxSum: '5000' };
	// Atom fishing (KazMoneyUnion)
	array["6457"] = { mask: new RegExp('^\\d{1,19}$', 'i'), minSum: '50', maxSum: '5000' };
	// Лордмансер (KazMoneyUnion)
	array["6458"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '50', maxSum: '5000' };
	// Варвары (KazMoneyUnion)
	array["6459"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '50', maxSum: '5000' };
	// Последний предел (KazMoneyUnion)
	array["6461"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '50', maxSum: '5000' };
	// Грани реальности (KazMoneyUnion)
	array["6462"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '50', maxSum: '5000' };
	// 2pay.ru (KazMoneyUnion)
	array["6463"] = { mask: new RegExp('^\\d{1,12}$', 'i'), minSum: '50', maxSum: '5000' };
	// Odnoklassniki.ru (KazMoneyUnion)
	array["6464"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '50', maxSum: '5000' };
	// Mamba.ru (KazMoneyUnion)
	array["6465"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '50', maxSum: '5000' };
	// Vkontakte.ru (KazMoneyUnion)
	array["6466"] = { mask: new RegExp('^.{1,10}$', 'i'), minSum: '50', maxSum: '5000' };
	// От сердца к сердцу
	array["7321"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '5000' };
	// Ресурсный центр для пожилых
	array["8786"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '5000' };
	// Помощь детям
	array["7321"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '5000' };
	// Газета Мое Жилье
	array["7324"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '20', maxSum: '5000' };
	// Газета Деньги и Власть
	array["10072"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '5', maxSum: '30000' };
	// Ipswich
	array["7590"] = { mask: new RegExp('^\\d{1,12}$', 'i'), minSum: '10', maxSum: '10000' };
	// join.kg
	array["6408"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '1000' };
	// akipress
	array["7589"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '10', maxSum: '0' };
	// Элет-Капитал
	array["8075"] = { mask: new RegExp('^\\d{13}$', 'i'), minSum: '10', maxSum: '0' };
	// Домофон
	array["8592"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '5', maxSum: '0' };
	// Академия туризма
	array["8644"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '5', maxSum: '0' };
	array["8670"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '5', maxSum: '0' };
	array["8671"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '5', maxSum: '0' };
	array["7839"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7841"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7842"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7843"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7844"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7845"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7846"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7847"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7848"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7849"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7850"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7851"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7852"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	array["7853"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '0' };
	// Aknet IPTV
	array["8730"] = { mask: new RegExp('^\\d{2,8}$', 'i'), minSum: '10', maxSum: '0' };
	// OnlineTV
	array["8952"] = { mask: new RegExp('^\\d{5,6}$', 'i'), minSum: '10', maxSum: '0' };
	//Zor-TV
	array["8953"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '10', maxSum: '0' };
	// WebMoney
	array["8728"] = { mask: new RegExp('^[Z][0-9]{12}$', 'i'), minSum: '100', maxSum: '0' };
	// Saima 4G
	array["8727"] = { mask: new RegExp('^(0|1|4|7|9)[0-9]{5,10}$', 'i'), minSum: '10', maxSum: '0' };
	// Lot.kg
	array["8784"] = { mask: new RegExp('^\\d{7}$', 'i'), minSum: '10', maxSum: '0' };
	// My
	array["8785"] = { mask: new RegExp('^\\d{7}$', 'i'), minSum: '100', maxSum: '30000' };
	// Погашение кредитов (Залкар)
	array["8931"] = { mask: new RegExp('^\\d{16}$', 'i'), minSum: '5', maxSum: '30000' };
	// Пополнение карт счета (Залкар)
	array["9813"] = { mask: new RegExp('^\\d{16}$', 'i'), minSum: '5', maxSum: '15000' };
	array["9874"] = { mask: new RegExp('^[А-Яа-яA-Za-z]{2}[0-9]{1,15}$', 'i'), minSum: '10', maxSum: '0' };
	array["8478"] = { mask: new RegExp('^\\d{11}$', 'i'), minSum: '10', maxSum: '0' };
	array["9000"] = { mask: new RegExp('^\\d{1,14}$', 'i'), minSum: '20', maxSum: '0' };
	// Демократическая партия пожертвование
	array["9868"] = { mask: new RegExp('^[-]\\d{0,16}$', 'i'), minSum: '20', maxSum: '15000' };
	// Демократическая партия партийные взносы
	array["9867"] = { mask: new RegExp('^\\d{1,16}$', 'i'), minSum: '50', maxSum: '15000' };
	// WebMonets
	array["9837"] = { mask: new RegExp('^\\d{8,10}$', 'i'), minSum: '50', maxSum: '5000' };
	//// BigBet
	//array["9942"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '5', maxSum: '50000' };
	// BeSmart покупка купона
	array["10027"] = { mask: new RegExp('^\\d{3,20}$', 'i'), minSum: '5', maxSum: '30000' };
	// Автогид
	array["9836"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '20', maxSum: '5000' };
	// КолледжАкадемияТуризма-сессия
	array["10087"] = { mask: new RegExp('^\\d{4}$', 'i'), minSum: '5', maxSum: '0' };
	// КолледжАкадемияТуризма-за обучение
	array["10133"] = { mask: new RegExp('^\\d{4}$', 'i'), minSum: '5', maxSum: '0' };
	// КолледжАкадемияТуризма-право записи
	array["10134"] = { mask: new RegExp('^\\d{4}$', 'i'), minSum: '5', maxSum: '0' };
	//Билайн Россия ДОЛ
	array["10577"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	//МегаФон Россия КФЦ
	array["10578"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Смартс Иваново Россия КФЦ
	array["10579"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Смартс Самара Россия КФЦ
	array["10580"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// НТК Россия КФЦ
	array["10581"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Енисейтелеком Россия КФЦ
	array["10582"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Ё Самара Россия КФЦ
	array["10583"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// ПРОСТО Сибирь Россия КФЦ
	array["10584"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Wellcom Красноярск Россия КФЦ
	array["10585"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// АЛЛЁ Россия КФЦ
	array["10590"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Таттелеком.ЖКХ Телефон(ID контракта) Россия КФЦ
	array["10595"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Таттелеком.ЖКХ Телефон(по ном.телефона) Россия КФЦ
	array["10596"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Связьинформ Телефония Россия КФЦ
	array["10591"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// НТК-Телефон(по номеру телефона) Россия КФЦ
	array["10597"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Таттелеком Интернет Россия КФЦ
	array["10586"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Ростелеком-Дальсвязь GSM. Камчатский край Россия КФЦ
	array["10633"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// Ростелеком-Дальсвязь GSM. Магаданская область Россия КФЦ
	array["10634"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	// ОсОО "Альянс Интернешнл Бизнес"
	array["10670"] = { mask: new RegExp('^\\d{8}$', 'i'), minSum: '10', maxSum: '5000' };
	//Sapatcom Internet
	array["10688"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '1', maxSum: '0' };
	//Jungle.KG
	array["10762"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '1', maxSum: '30000' };
	//GeoPay
	array["10852"] = { mask: new RegExp('^996[0-9]{9}$', 'i'), minSum: '5', maxSum: '0' };
	//Free-Lance
	array["3097"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '1', maxSum: '15000' };
	//AiKa2
	array["10946"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '15000' };
	//BS.ru
	array["10947"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '15000' };
	//Combat Arms
	array["10948"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '15000' };
	//CS1.6
	array["10949"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '15000' };
	//FireStorm
	array["10950"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '15000' };
	//Golden Age
	array["10951"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '15000' };
	//Magic World 2
	array["10952"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '15000' };
	//RoT: Rage of Titans
	array["10953"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '115000' };
	//Vivatoo.com
	array["11170"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '5', maxSum: '0' };
	//World of Dragons
	array["11171"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '5', maxSum: '0' };
	//Домовой
	array["11215"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '5', maxSum: '0' };
	//ГНС
	array["9872"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '5', maxSum: '0' };
	array["9873"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '5', maxSum: '0' };
	array["11140"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '5', maxSum: '0' };
	array["11141"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '5', maxSum: '0' };
	array["11142"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '5', maxSum: '0' };
	array["11143"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '5', maxSum: '0' };
	array["11144"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '5', maxSum: '0' };
	array["11144_GosNumber"] = { mask: new RegExp('^.{6,15}$', 'i'), minSum: '5', maxSum: '0' };
	array["15077"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '5', maxSum: '0' };
	array["15078"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '5', maxSum: '0' };
	array["15076"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '5', maxSum: '0' };
	// Raider Супер Лото 5/50
	array["11255"] = { mask: new RegExp('^(01|02|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|1|2|3|4|5|6|7|8|9)$', 'i'), minSum: '50', maxSum: '600' };
	// ГТС
	array["11277"] = { mask: new RegExp('^\\d{10,13}$', 'i'), minSum: '5', maxSum: '0' };
	// Xcraft.ru (KazMoneyUnion)
	array["11320"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '50', maxSum: '0' };
	// Skype
	array["11319"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '50', maxSum: '0' };
	// GameXP (KazMoneyUnion)
	array["11321"] = { mask: new RegExp('^[0-9]{1,7}', 'i'), minSum: '50', maxSum: '0' };
	// WebMoney
	array["11318"] = { mask: new RegExp('^\\d{12}$', 'i'), minSum: '100', maxSum: '15000' };
	// The War Z (KazMoneyUnion)
	array["11322"] = { mask: new RegExp('^[0-9a-zA-Z]', 'i'), minSum: '50', maxSum: '0' };
	// Warface (KazMoneyUnion)
	array["11325"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '50', maxSum: '0' };
	//Garena (KazMoneyUnion)
	array["11323"] = { mask: new RegExp('^\\d{8}$', 'i'), minSum: '50', maxSum: '0' };
	//Вконтакте Реклама
	array["11324"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '100', maxSum: '0' };
	//Оплата путевки
	array["11436"] = { mask: new RegExp('^\\d{6,7}$', 'i'), minSum: '30', maxSum: '0' };
	//Finca
	array["11823"] = { mask: new RegExp('^\\d{1,14}$', 'i'), minSum: '30', maxSum: '50000' };
	//Exnet
	array["11882"] = { mask: new RegExp('^\\d{2,7}$', 'i'), minSum: '30', maxSum: '0' };
	//Долон-ТВ
	array["11894"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '50', maxSum: '0' };
	// ОсОО "Работа для всех"
	array["12226"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '0' };
	//4Story: Войны Королевств
	array["12213"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	//Karos: Начало
	array["12215"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	//Rappelz
	array["12216"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	//АватарикА
	array["12217"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	//Повелители драконов
	array["12218"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	//Сфера
	array["12219"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	//Сфера: Перерождение
	array["12223"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	//Фантазиум
	array["12224"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	//Idram
	array["12225"] = { mask: new RegExp('^\\d{11}$', 'i'), minSum: '20', maxSum: '15000' };
	//Пенсионный фонд "Кыргызстан"
	array["12227"] = { mask: new RegExp('^\\d{3,9}$', 'i'), minSum: '100', maxSum: '0' };
	//SoftLine
	array["12232"] = { mask: new RegExp('^.{7}$', 'i'), minSum: '20', maxSum: '20000' };
	// WebMoney Euro
	array["12457"] = { mask: new RegExp('^([0-9E]{12})$', 'i'), minSum: '100', maxSum: '15000' };
	// WebMoney RU (KazMoneyUnion)  
	array["12456"] = { mask: new RegExp('^([0-9R]{12})$', 'i'), minSum: '100', maxSum: '15000' };
	// YandexMoney (KazMoneyUnion)
	array["12463"] = { mask: new RegExp('^\\d{14,15}$', 'i'), minSum: '100', maxSum: '10000' };
	// Деньги Mail.Ru (KazMoneyUnion)
	array["12458"] = { mask: new RegExp('^\\d{10,20}$', 'i'), minSum: '50', maxSum: '10000' };
	// RBK Money (KazMoneyUnion)
	array["12459"] = { mask: new RegExp('^\\d{5,15}$', 'i'), minSum: '50', maxSum: '7000' };
	// Moneta.Ru (KazMoneyUnion)
	array["12464"] = { mask: new RegExp('^\\d{1,15}$', 'i'), minSum: '50', maxSum: '10000' };
	// Фантазиум 2
	array["12224"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	// Сфера: Перерождение
	array["12223"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	// Сфера
	array["12219"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	// Повелители драконов
	array["12218"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	// АватарикА
	array["12217"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	// Rappelz
	array["12216"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	// Dragona
	array["12491"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	// King of Kings 3
	array["12489"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	// Karos: Начало
	array["12215"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	// 4Story: Войны Королевств
	array["12213"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '15000' };
	// Idram
	array["12225"] = { mask: new RegExp('^\\d{11}$', 'i'), minSum: '20', maxSum: '15000' };
	// catalogloader.com
	array["12212"] = { mask: new RegExp('^\\d{1,32}$', 'i'), minSum: '20', maxSum: '15000' };
	// Ground War: Tanks
	array["12493"] = { mask: new RegExp('^\\d{1,20}$', 'i'), minSum: '20', maxSum: '15000' };
	// DIRTY BOMB
	array["12494"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '30', maxSum: '15000' };
	// Шаранавты
	array["12495"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '20', maxSum: '15000' };
	// Lovecity 3D
	array["12492"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '15000' };
	// Blood and Soul
	array["12496"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '15000' };
	// Кодекс Пирата
	array["12497"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '15000' };
	// Adviser
	array["12638"] = { mask: new RegExp('^.{5,20}$', 'i'), minSum: '50', maxSum: '50000' };
	// BM Technologies / Klass
	array["12635"] = { mask: new RegExp('^\\d{3,8}$', 'i'), minSum: '245', maxSum: '1000' };
	// Клооп Медия
	array["12637"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '50', maxSum: '20000' };
	// Fara.KG
	array["12655"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '100', maxSum: '2000' };
	// CSG Прозрачная Школа
	array["12636"] = { mask: new RegExp('^\\d{8}$', 'i'), minSum: '20', maxSum: '1000' };
	// (KazMoneyUnion) Мой Мир@Mail.Ru
	array["12736"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '50', maxSum: '30000' };
	// (KazMoneyUnion) Lineage 2
	array["12735"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '50', maxSum: '30000' };
	// (KazMoneyUnion) RF Online
	array["12734"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '50', maxSum: '30000' };
	// (KazMoneyUnion) R2 Online
	array["12733"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '50', maxSum: '30000' };
	// (KazMoneyUnion) 4Game
	array["12732"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '50', maxSum: '30000' };
	//Красный Полумесяц Кыргызстана
	array["12639"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '30000' };
	// auto.doska.kg 
	array["12849"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '10', maxSum: '0' };
	// TJ Мобайл (Таджикистан КФЦ)
	array["13470"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	// Таджик Телеком (Таджикистан КФЦ)
	array["13471"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	// ТСелл - Индиго Сомонком (Таджикистан КФЦ)
	array["13472"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	// ТК Мобайл (Таджикистан КФЦ)
	array["13473"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	// Мегафон (Таджикистан КФЦ)
	array["13474"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	// TCell - Индиго Таджикистан (Таджикистан КФЦ)
	array["13475"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	// Beeline Таджикистан (Таджикистан КФЦ)
	array["13476"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	// Вавилон-М (Таджикистан КФЦ)
	array["13477"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	//единое окно 
	array["13650"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '20', maxSum: '30000' };
	//Войны престолов (КФЦ)
	array["13647"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '15000' };
	//ArcheAge (КФЦ)
	array["13648"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '15000' };
	//GFOX 
	array["13657"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '50', maxSum: '5000' };
	//SWIFT Taxi
	array["13735"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '30000' };
	//Namba Taxi
	array["13736"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '30000' };
	// (KazMoneyUnion) CrossFire
	array["13914"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '50', maxSum: '8000' };
	// (KazMoneyUnion) Steam
	array["13915"] = { mask: new RegExp('^[0-9a-zA-Z]', 'i'), minSum: '50', maxSum: '8000' };
	array["13915_1"] = { mask: new RegExp('^.{1,50}$', 'i'), minSum: '50', maxSum: '8000' };
	// (KazMoneyUnion) Tele2 (Россия)
	array["13916"] = { mask: new RegExp('^\\d{9,10}$', 'i'), minSum: '50', maxSum: '30000' };

	//Такси 37
	array["13912"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '30000' };
	// Такси ЧАС-ПИК
	array["13912"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	//Такси 1200
    array["22362"] = { mask: new RegExp('^0[0-9]{9}$', 'i'), minSum: '10', maxSum: '30000' };
	//Smart Sim (Gfox)
	array["13734"] = { mask: new RegExp('^\\d{11}$', 'i'), minSum: '50', maxSum: '5000' };
	//War Thunder (КФЦ)
	array["13987"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '15000' };
	//Такси "НАРОДНОЕ"
	array["13988"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '5000' };
	//Faberlic
	array["13989"] = { mask: new RegExp('^\\d{1,20}$', 'i'), minSum: '20', maxSum: '30000' };
	//ЭЛСОМ
	array["13649"] = { mask: new RegExp('^0(70|77|55|50)[0-9][0-9]{6,6}$', 'i'), minSum: '20', maxSum: '15000' };
	//GOODLINE (Gfox)
	array["13658"] = { mask: new RegExp('^372[0-9]{8,8}$', 'i'), minSum: '50', maxSum: '5000' };
	//ITV.KG
	array["14254"] = { mask: new RegExp('^\\d{5}$', 'i'), minSum: '10', maxSum: '10000' };
	//Электросила 
	array["14366"] = { mask: new RegExp('^\\d{7,9}$', 'i'), minSum: '20', maxSum: '30000' };
	//NICE.KG
	array["14255"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '15000' };
	//Falkor pro
	array["14364"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '20', maxSum: '10000' };
	//ЦЗРК
	array["14371"] = { mask: new RegExp('^.{1,40}$', 'i'), minSum: '20', maxSum: '10000' };
	array["14373"] = { mask: new RegExp('^.{1,40}$', 'i'), minSum: '20', maxSum: '10000' };
	array["14372"] = { mask: new RegExp('^.{1,40}$', 'i'), minSum: '20', maxSum: '10000' };
	//JARNAK.KG
	array["14522"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '20', maxSum: '10000' };
	//Bravo 
	array["14628"] = { mask: new RegExp('^\\d{3}$', 'i'), minSum: '20', maxSum: '50000' };
	//AsiaInfo
	array["14629"] = { mask: new RegExp('^\\d{5,6}$', 'i'), minSum: '10', maxSum: '30000' };
	//Бастион 
	array["14859"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '30000' };
	//Namba Taxi osh
	array["14992"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '30000' };
	//Alga.kg
	array["15010"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '30000' };
	////Деньги Онлайн
	// Ё Самара Россия КФЦ
	array["10809"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '10', maxSum: '15000' };
	// ПРОСТО Сибирь Россия КФЦ
	array["10807"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '10', maxSum: '15000' };
	// Таттелеком.ЖКХ Телефон(ID контракта) Россия КФЦ
	array["10818"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '10', maxSum: '15000' };
	// Таттелеком.ЖКХ Телефон(по ном.телефона) Россия КФЦ
	array["10819"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '10', maxSum: '15000' };
	// Ростелеком-Дальсвязь GSM. Камчатский край Россия КФЦ
	array["10814"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '10', maxSum: '15000' };
	// Ростелеком-Дальсвязь GSM. Камчатский край Россия КФЦ
	array["10815"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '10', maxSum: '15000' };
	////тестовая услуга
	//array["12001"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '30000' };
	//Strife (КФЦ)
	array["15204"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '15000' };
	//Спарта (КФЦ)
	array["15205"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '15000' };
	////Favbet (КФЦ)
	//array["15206"] = { mask: new RegExp('^\\d{12}$', 'i'), minSum: '20', maxSum: '15000' };
	//FOOD.NAMBA.KG
	array["15224"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '30000' };
	////1XBET.KG
	//array["15459"] = { mask: new RegExp('^\\d{6,7}$', 'i'), minSum: '20', maxSum: '30000' };
	//Vitel (Fonex, Балан)
	//array["15430"] = { mask: new RegExp('^996200[0-9]{6,6}$', 'i'), minSum: '20', maxSum: '30000' };
	//ОАО "Коммерческий банк КЫРГЫЗСТАН" CBK mBank - пополнение счета
	array["15208"] = { mask: new RegExp('^\\d{12,16}$', 'i'), minSum: '20', maxSum: '5000' };

	///////Таласская область свет/////////
	//Таласская горсеть
	array["15511"] = { mask: new RegExp('^50[0-9]{7,7}$', 'i'), minSum: '20', maxSum: '30000' };
	array["15550"] = { mask: new RegExp('^50[0-9]{7,7}$', 'i'), minSum: '20', maxSum: '200' };
	//Таласский энергосбыт
	array["15512"] = { mask: new RegExp('^52[0-9]{7,7}$', 'i'), minSum: '20', maxSum: '30000' };
	array["15551"] = { mask: new RegExp('^52[0-9]{7,7}$', 'i'), minSum: '20', maxSum: '200' };
	//Бакайатинский энергосбыт
	array["15513"] = { mask: new RegExp('^54[0-9]{7,7}$', 'i'), minSum: '20', maxSum: '30000' };
	array["15552"] = { mask: new RegExp('^54[0-9]{7,7}$', 'i'), minSum: '20', maxSum: '200' };
	//Карабууринский энергосбыт
	array["15514"] = { mask: new RegExp('^55[0-9]{7,7}$', 'i'), minSum: '20', maxSum: '30000' };
	array["15553"] = { mask: new RegExp('^55[0-9]{7,7}$', 'i'), minSum: '20', maxSum: '200' };
	//Манаский энергосбыт
	array["15515"] = { mask: new RegExp('^53[0-9]{7,7}$', 'i'), minSum: '20', maxSum: '30000' };
	array["15554"] = { mask: new RegExp('^53[0-9]{7,7}$', 'i'), minSum: '20', maxSum: '200' };
	///////Таласская область свет/////////
	//////////////////////////////////////
	//AVN услуга Росинбанка
	array["15702"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '20', maxSum: '30000' };
	//Эконом такси
	array["15725"] = { mask: new RegExp('^\\d{2,5}$', 'i'), minSum: '20', maxSum: '5000' };
	// Salam (SaimaTelekom)
	array["15724"] = { mask: new RegExp('^0611901\\d{3,3}$', 'i'), minSum: '20', maxSum: '5000' };
	////Fair Play
	//array["15231"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '30000' };
	//ЧП Осмонова UniSom
	array["14365"] = { mask: new RegExp('^\\d{7}$', 'i'), minSum: '20', maxSum: '15000' };
	///////ТСеверЭлектро Бишкек Юр. лица/////////
	//Октябрьский район - юр.лица
	array["15846"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '20', maxSum: '30000' };
	//array["15852"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '20', maxSum: '50' };
	//Первомайский район - юр.лица
	array["15847"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '20', maxSum: '30000' };
	//array["15853"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '20', maxSum: '50' };
	//Ленинский район - юр.лица - оплата пени
	array["15848"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '20', maxSum: '30000' };
	//array["15854"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '20', maxSum: '50' };
	//Свердловский район - юр.лица
	array["15849"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '20', maxSum: '30000' };
	//array["15855"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '20', maxSum: '50' };
	
	//«Лаборатория Бонецкого» Просмотр анализов
	array["15970"] = { mask: new RegExp('^.{7}$', 'i'), minSum: '20', maxSum: '20' };
	//100 Платежей, DOSHCARD
	//array["15968"] = { mask: new RegExp('^\\d{5}$', 'i'), minSum: '20', maxSum: '10000' };
	//Мобильный кошелек UMAI.KG
	array["15969"] = { mask: new RegExp('^996[0-9]{9}$', 'i'), minSum: '0', maxSum: '30000' };
	// Aknet Оборудование
	array["15974"] = { mask: new RegExp('^\\d{2,7}$', 'i'), minSum: '10', maxSum: '10000' };
	//ДММ Регистрационный взнос
	array["15976"] = { mask: new RegExp('^.{6}$', 'i'), minSum: '20', maxSum: '30000' };
	//ДММ Проезд
	array["15977"] = { mask: new RegExp('^.{6}$', 'i'), minSum: '20', maxSum: '30000' };
	//ДММ Проживание
	array["15978"] = { mask: new RegExp('^.{6}$', 'i'), minSum: '20', maxSum: '30000' };
	//AVN услуга Росинбанка ОШГУ
	array["16067"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '20', maxSum: '30000' };
	//Хостинг MyHost.KG
	array["16099"] = { mask: new RegExp('^.{1,6}$', 'i'), minSum: '20', maxSum: '30000' };

	//Diesel Taxi
	array["16195"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '30000' };
	//Город Такси
	array["22355"] = { mask: new RegExp('^\\d{5}$', 'i'), minSum: '0', maxSum: '10000' };
	//TIME Taxi
	array["16196"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '5000' };
	//Jorgo 'Taxi'
	array["16243"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '5000' };
	//Activ (Казахстан) (KazMoneyUnion)
	array["16198"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '10000' };
	//Kcell (Казахстан) (KazMoneyUnion)
	array["16199"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '10000' };
	//Tele2 (Казахстан) (KazMoneyUnion)
	array["16210"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '10000' };
	//Алтел (Казахстан) (KazMoneyUnion)
	array["16211"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '10000' };
	//Билайн (Казахстан) (KazMoneyUnion)
	array["16212"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '10000' };
	// Warthunder (KazMoneyUnion)
	array["16213"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '15000' };
	// Спарта: Война империй (KazMoneyUnion)
	array["16214"] = { mask: new RegExp('^.{1,17}$', 'i'), minSum: '20', maxSum: '15000' };
	// Мини-игры@Mail.ru (KazMoneyUnion)
	array["16215"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '15000' };
	// ПараПа: Город Танцев (KazMoneyUnion)
	array["16216"] = { mask: new RegExp('^.{1,17}$', 'i'), minSum: '20', maxSum: '15000' };
	//SPORTKLON (КФЦ)
	array["16197"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '15000' };
	// ОФ  "Келечек ХП" (в поддержку детей с инвалидностью)
	array["16271"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '5000' };
	// Поиск Репетиторов
	array["16274"] = { mask: new RegExp('^\\d{5}$', 'i'), minSum: '20', maxSum: '30000' };
	// FlyKG
	array["16272"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '15000' };
	//ДММ регистрация
	array["16244"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '30000' };
	//Namba Taxi - кошелек
	array["16408"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	// Megaline - TV
	array["16422"] = { mask: new RegExp('^[0-9]+$', 'i'), minSum: '10', maxSum: '0' };
	// carfax.kg
	array["16843"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '30000' };
	//Ustalar.kg - заказ услуг онлайн
	array["22169"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	// Сатком
	array["22170"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '30000' };	
	// Vinet
	array["22168"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '30000' };
	//keyDriver интернет-агрегатор услуг пассажирских перевозок
	array["17101"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '30000' };
	//Благотворительная акция от НТС “Скажи спасибо сегодня!”
	array["17100"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
    //NeoTelecom - интернет
	array["22001"] = { mask: new RegExp('^\\d{6,12}$', 'i'), minSum: '20', maxSum: '30000' };
	// КНУ оплата за проживание в общежитиях
	array["22002"] = { mask: new RegExp('^\\d{5}$', 'i'), minSum: '5', maxSum: '0' };
	// КНУ оплата за арендной площади
	array["22003"] = { mask: new RegExp('^\\d{5}$', 'i'), minSum: '5', maxSum: '0' };
	// КНУ оплата за обучение
	array["22004"] = { mask: new RegExp('^.{1,25}', 'i'), minSum: '5', maxSum: '0' };
	//Pelican taxi
	array["22005"] = { mask: new RegExp('^\\d{4,10}$', 'i'), minSum: '20', maxSum: '30000' };
	//eda.kg
	array["22006"] = { mask: new RegExp('^\\d{4,6}$', 'i'), minSum: '20', maxSum: '30000' };
	//Русская тройка (Прокат машин)
	array["22007"] = { mask: new RegExp('^\\d{4,6}$', 'i'), minSum: '20', maxSum: '30000' };
	//Finca
	array["22008"] = { mask: new RegExp('^\\d{1,16}$', 'i'), minSum: '30', maxSum: '50000' };
	//AiTV
	array["22009"] = { mask: new RegExp('^\\d{16,16}$', 'i'), minSum: '10', maxSum: '10200' };
	//ОФ «Прав защиты детей сирот»
	array["22010"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	// Мир такси
	array["22012"] = { mask: new RegExp('^[0-9]{10}$', 'i'), minSum: '10', maxSum: '5000' };
	//ОООРДА «Рука в руке»
	array["22011"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	//Record Taxi
	array["22013"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '30000' };
	//TEZ
	array["22014"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '20', maxSum: '30000' };
	//(KazMoneyUnion) Skyforge
	array["22015"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '8000' };
	//(KazMoneyUnion) Skyforge
	array["22016"] = { mask: new RegExp('^[0-9a-z]+[-\\._0-9a-z]*@[0-9a-z]+[-\\._^0-9a-z]*[0-9a-z]+[\\.]{1}[a-z]{2,6}$', 'i'), minSum: '20', maxSum: '8000' };
	// camex.kg
	array["22019"] = { mask: new RegExp('^([0-9K]{6})$', 'i'), minSum: '20', maxSum: '30000' };
	// simtravel
	array["22017"] = { mask: new RegExp('^372\\d{8}$', 'i'), minSum: '20', maxSum: '30000' };
	//Миг Лотто
	array["22020"] = { mask: new RegExp('^\\d{12}$', 'i'), minSum: '20', maxSum: '30000' };
	// Кыргыз Домофон  Сервис
	array["22021"] = { mask: new RegExp('^\\d{6,6}$', 'i'), minSum: '20', maxSum: '30000' };
	//Цифрал безопасность
    array["22358"] = { mask: new RegExp('^[0-9]{7,7}-[0-9]$', 'i'), minSum: '10', maxSum: '30000' };
	  //Столичный Домофон
    array["22363"] = { mask: new RegExp('^[0-9]{7,7}-[0-9]$', 'i'), minSum: '10', maxSum: '30000' };
	////Келечек плюс
	array["22022"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	////Эл start.kg
	array["22023"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
	//Oberon Аренда
	array["22025"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '20', maxSum: '15000' };
	//Oberon СВЕТ
	array["22027"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '20', maxSum: '15000' };
	//Intal Аренда
	array["22024"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '20', maxSum: '15000' };
	//Intal СВЕТ
	array["22026"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '20', maxSum: '15000' };
	// Соц-фонд
	array["22028"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '20', maxSum: '30000' };
    //ГАИ
	array["11859_1"] = { mask: new RegExp('^(ЧС|КР|ОБ|ТЛ|НР|БТ|ИК|ЖА|БИ|Н|ОШ)[0-9]{3}$', 'i'), minSum: '30', maxSum: '0' };// Номер нагрудного знака
	array["11859_2"] = { mask: new RegExp('^(ЧС|КР|ОБ|ТЛ|НР|БТ|ИК|ЖА|БИ|Н|БИнр|ОБнр|БИн|ОШ)[0-9]{6}$', 'i'), minSum: '30', maxSum: '0' };// Номер протокола
	array["11859_3"] = { mask: new RegExp('^\\d{4}$', 'i'), minSum: '30', maxSum: '0' };// Статья
	array["11859_4"] = { mask: new RegExp('^.{5,50}$', 'i'), minSum: '30', maxSum: '0' };// Ф.И.О правонарушителя
	array["11859_5"] = { mask: new RegExp('^\\d{8}$', 'i'), minSum: '30', maxSum: '0' };// Дата оплаты штрафа
	array["11859_6"] = { mask: new RegExp('^\\d{2,5}$', 'i'), minSum: '30', maxSum: '0' };// Взыскан. Штраф
    //CSWORLD	
	array["22030"] = { mask: new RegExp('^\\d{1,10}$', 'i'), minSum: '20', maxSum: '5000' };
    //Мобильник
	array["22029"] = { mask: new RegExp('^.{5,25}$', 'i'), minSum: '20', maxSum: '20000' };
    //ЭльПэй
	array["22033"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '20000' };
    //Kbid
	array["22034"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '20000' };
    //ЭкоИсламикБанк - погашение кредита
	array["22035"] = { mask: new RegExp('^\\d{7,12}$', 'i'), minSum: '20', maxSum: '200000' };
    //Dostek - оплата за отправку электронной отчетности
	array["22036"] = { mask: new RegExp('^\\d{3,14}$', 'i'), minSum: '20', maxSum: '20000' };
    //СуперИнфо-реклама
	array["22049"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '20000' };
    //СуперИнфо-знакомства
	array["22048"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '20000' };
    //Cordial.KG
	array["22050"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '20', maxSum: '20000' };
    // AVN-Оплата за отправку СМС уведомлений студентам
	array["22052"] = { mask: new RegExp('^\\d{10,20}$', 'i'), minSum: '100', maxSum: '20000' };
	array["22052_1"] = { mask: new RegExp('^\\d{9,15}$', 'i'), minSum: '100', maxSum: '20000' };
	// Namba- подключение водителя
	array["22051"] = { mask: new RegExp('^0(70|77|55)[0-9][0-9]{6,6}$', 'i'), minSum: '20', maxSum: '15000' };
    // ЭкоИсламикБанк-первоначальный гарантийный взнос
	//array["22053"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '40000' };
	//array["22053_2"] = { mask: new RegExp('^.{3,30}$', 'i'), minSum: '20', maxSum: '40000' };
	//array["22053_3"] = { mask: new RegExp('^.{5,19}$', 'i'), minSum: '20', maxSum: '40000' };
    //Мобилайф
	array["22055"] = { mask: new RegExp('^\\d{4,8}$', 'i'), minSum: '195', maxSum: '1000' };
	//Административный штраф за нарушение ПДД(фото-видео фиксация)
	array["22054"] = { mask: new RegExp('^\\d{16,16}$', 'i'), minSum: '200', maxSum: '200' };
	array["22054_1"] = { mask: new RegExp('^\\d{0,14}$', 'i'), minSum: '200', maxSum: '200' };
    //Тазалык(Юр)
	array["22058"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '0' };
    //Тазалык(Юр)
	array["22059"] = { mask: new RegExp('^.{6,6}$', 'i'), minSum: '20', maxSum: '10000' };
    //Намба Фуд
	array["22123"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };
    //Электронный дневник
	array["22061"] = { mask: new RegExp('^\\d{10}$', 'i'), minSum: '20', maxSum: '30000' };
    //Чуй Газ
	array["22062"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '0' };
	array["22066"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '100' };
    //Жалалабат Газ
	array["22063"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '0' };
	array["22067"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '100' };
    //Ош Газ
	array["22064"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '0' };
	array["22068"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '100' };
    //Баткен Газ
	array["22065"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '0' };
	array["22069"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '100' };

    //БишкекГорлифт
	array["22070"] = { mask: new RegExp('^.{2,10}$', 'i'), minSum: '50', maxSum: '10000' };

    //Финансовый брокер Ringo Trade
	array["22071"] = { mask: new RegExp('^.{1,20}$', 'i'), minSum: '10', maxSum: '30000' };
	
    //КыргызТв
	array["22072"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '5', maxSum: '0' };

    //Ак-Жол Такси
	array["22073"] = { mask: new RegExp('^.{5,9}$', 'i'), minSum: '10', maxSum: '30000' };

    //Здоровая школа
	array["22074"] = { mask: new RegExp('^.{1,4}$', 'i'), minSum: '190', maxSum: '210' };

    //ТСЖ 7-49/2
	array["22075"] = { mask: new RegExp('^[0-9]{4,4}-[0-9]{2,2}$', 'i'), minSum: '10', maxSum: '0' };

	array["515111"] = { mask: new RegExp('^.{10,10}$', 'i'), minSum: '10', maxSum: '100' };
    //Апаке
	array["22119"] = { mask: new RegExp('^.{10,10}$', 'i'), minSum: '10', maxSum: '100' };

    //МА Жетиогуз 
	array["22077"] = { mask: new RegExp('^.{10,11}$', 'i'), minSum: '20', maxSum: '30000' };

    //Намба Такси Джалал-Абад
	array["22078"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '0' };

    // (Моментальные платежи)AIVA(Россия)-сотовая связь
	array["22079"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)TourSim (Казахстан)-сотовая связь
	array["22080"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Билайн (Армения)-сотовая связь
	array["22081"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)МТС (Армения)-сотовая связь
	array["22082"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Orange (Армения)-сотовая связь
	array["22083"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Билайн (Грузия)-сотовая связь
	array["22084"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Bali (Грузия)-сотовая связь
	array["22085"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Bani (Грузия)-сотовая связь
	array["22086"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)GeoCell (Грузия)-сотовая связь
	array["22087"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)GlobalCell (Грузия)-сотовая связь
	array["22088"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Magticom (Грузия)-сотовая связь
	array["22089"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)МТС (Украина)-сотовая связь
	array["22090"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Life (Украина)-сотовая связь
	array["22091"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Kyevstar (Украина)-сотовая связь
	array["22092"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Билайн (Таджикистан)-сотовая связь
	array["22093"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Мегафон (Таджикистан)-сотовая связь
	array["22094"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Вавилон Мобаил (Таджикистан)-сотовая связь
	array["22096"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Indigo (Таджикистан)-сотовая связь
	array["22097"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)TK-Mobile (Таджикистан)-сотовая связь
	array["22098"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Ucell(Узбекистан)-сотовая связь
	array["22099"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Билайн(Узбекистан)-сотовая связь
	array["22100"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)МТС (Беларусь)-сотовая связь
	array["22101"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    // (Моментальные платежи)Velcom (Беларусь)-сотовая связь
	array["22102"] = { mask: new RegExp('^\\d{7,15}$', 'i'), minSum: '20', maxSum: '15000' };

    //Комтранском-вывоз мусора
	array["22103"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '0' };

    //Комтранском-вывоз мусора(юр.лица)
	array["22104"] = { mask: new RegExp('^.{8,9}$', 'i'), minSum: '10', maxSum: '0' };

    //Сукулукский район - юр.лица
	array["22105"] = { mask: new RegExp('^\\d{1,6}$', 'i'), minSum: '20', maxSum: '30000' };

    //Намба Такси Токмок
	array["22106"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '0' };

    //Ярос
	array["22116"] = { mask: new RegExp('^[0-9a-z]', 'i'), minSum: '20', maxSum: '30000' };

    // (Моментальные платежи) Royal Quest - пополнение счета 
	array["22115"] = { mask: new RegExp('^[0-9a-zA-Z]', 'i'), minSum: '50', maxSum: '0' };

    // (Моментальные платежи) Star Conflict - пополнение счета
	array["22114"] = { mask: new RegExp('^[0-9a-zA-Z]', 'i'), minSum: '50', maxSum: '0' };

    // (Моментальные платежи) Кодекс Пирата - пополнение счета 
	array["22113"] = { mask: new RegExp('^[0-9a-zA-Z]', 'i'), minSum: '50', maxSum: '0' };

    // (Моментальные платежи) World Of Warplanes - пополнение счета
	array["22112"] = { mask: new RegExp('^[0-9a-zA-Z]', 'i'), minSum: '50', maxSum: '0' };

    // (Моментальные платежи) UFO online - пополнение счета
	array["22111"] = { mask: new RegExp('^[0-9a-zA-Z]', 'i'), minSum: '50', maxSum: '0' };

    // (Моментальные платежи) Prime World - пополнение счета
	array["22110"] = { mask: new RegExp('^[0-9a-zA-Z]', 'i'), minSum: '50', maxSum: '0' };

    // (Моментальные платежи) Gamenet - пополнение счета
	array["22108"] = { mask: new RegExp('^[0-9a-zA-Z]', 'i'), minSum: '50', maxSum: '0' };
	
	 //ОО «Онугуу» (школа 12) - членские и прочие добровольные взносы
	array["22205"] = { mask: new RegExp('^.{5,30}$', 'i'), minSum: '20', maxSum: '30000' };

    //ОО «Онугуу» (школа 12) - взнос на охрану
	array["22209"] = { mask: new RegExp('^.{5,30}$', 'i'), minSum: '20', maxSum: '30000' };

    //ОО «Онугуу» (школа 12) - другие
	array["22210"] = { mask: new RegExp('^.{5,30}$', 'i'), minSum: '20', maxSum: '30000' };

    //ОО «Алгыр Куш» (школа 87) - членский взнос
	array["22206"] = { mask: new RegExp('^\\d{1,4}$', 'i'), minSum: '20', maxSum: '30000' };

    //Алтын
	array["22117"] = { mask: new RegExp('^\\d{7}$', 'i'), minSum: '20', maxSum: '20000' };

    //Сауна.кг - пополнение счета
	array["22122"] = { mask: new RegExp('^.{1,5}$', 'i'), minSum: '20', maxSum: '20000' };

    //Ресторан.кг - пополнение счета
	array["22120"] = { mask: new RegExp('^.{1,5}$', 'i'), minSum: '20', maxSum: '20000' };

    //Салон.кг - пополнение счета
	array["22121"] = { mask: new RegExp('^.{1,5}$', 'i'), minSum: '20', maxSum: '20000' };

    //Чанг-Ан
	array["22118"] = { mask: new RegExp('^1062020100[0-9]{6,6}$', 'i'), minSum: '200', maxSum: '30000' };

    //Элим Барсынбы?!
	array["22126"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };

    //TICKET.KG-бронирование билетов
	array["22125"] = { mask: new RegExp('^.{1,5}$', 'i'), minSum: '20', maxSum: '30000' };

    //Taxi Fortuna-пополнение баланса водителя
	array["22124"] = { mask: new RegExp('^.{1,15}$', 'i'), minSum: '20', maxSum: '30000' };

    //Taxi 164
	array["22127"] = { mask: new RegExp('^0\\d{9}$', 'i'), minSum: '20', maxSum: '30000' };

    // (Моментальные платежи) ArcheAge
	array["22129"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '1.5', maxSum: '15000' };

    // (Моментальные платежи) Bloody World
	array["22130"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '1.5', maxSum: '15000' };

    // (Моментальные платежи) Ground War: Tanks
	array["22131"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '1.5', maxSum: '15000' };

    // (Моментальные платежи) Jade Dynasty
	array["22132"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '1.5', maxSum: '15000' };

    // (Моментальные платежи) RIOT
	array["22133"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '1.5', maxSum: '15000' };

    // (Моментальные платежи) Бумз (DDT)
	array["22134"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '1.5', maxSum: '15000' };

    // (Моментальные платежи) Войны престолов
	array["22135"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '1.5', maxSum: '15000' };

    // (Моментальные платежи) Армата
	array["22136"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '1.5', maxSum: '15000' };

    // (Моментальные платежи) Герои войны и денег
	array["22137"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '10', maxSum: '15000' };

    // (Моментальные платежи) Тюрьма. Новый срок
	array["22138"] = { mask: new RegExp('^.{1,32}$', 'i'), minSum: '10', maxSum: '15000' };

    // (Моментальные платежи) Триколор ТВ
	array["22139"] = { mask: new RegExp('^.{12,14}$', 'i'), minSum: '5', maxSum: '15000' };

    // (Моментальные платежи) НТВ Плюс
	array["22140"] = { mask: new RegExp('^.{1,10}$', 'i'), minSum: '5', maxSum: '15000' };

    // (Моментальные платежи) Орион Экспресс
	array["22141"] = { mask: new RegExp('^.{11,12}$', 'i'), minSum: '5', maxSum: '15000' };

    // (Моментальные платежи) Континент ТВ
	array["22142"] = { mask: new RegExp('^.{11,12}$', 'i'), minSum: '5', maxSum: '15000' };

    // (Моментальные платежи) Viber
	array["22143"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '50', maxSum: '1400' };

    //Red Petroleum - пополнение топливных карт
	array["22147"] = { mask: new RegExp('^.{1,16}$', 'i'), minSum: '20', maxSum: '30000' };

    //Гуд Нейборс Интернешнл - благотворительная платформа
	array["22149"] = { mask: new RegExp('^\\d{1,30}$', 'i'), minSum: '10', maxSum: '10000' };

    //ЦСД - оплата за домофон
	array["22150"] = { mask: new RegExp('^\\d{7}$', 'i'), minSum: '20', maxSum: '30000' };

    //ЭКГ в школах
	array["22151"] = { mask: new RegExp('^\\d{1,4}$', 'i'), minSum: '290', maxSum: '315' };

    //AQUA LAB - оплата за результаты исследований
	array["22152"] = { mask: new RegExp('^\\d{20,21}$', 'i'), minSum: '10', maxSum: '30000' };

    //На ТВ - размещение рекламы
	array["22153"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '10', maxSum: '30000' };

    //МобильникАгент
	array["22154"] = { mask: new RegExp('^.{5,25}$', 'i'), minSum: '20', maxSum: '20000' };

    //Bookit.kg - Купить авиабилеты онлайн
	array["22155"] = { mask: new RegExp('^\\d{9}$', 'i'), minSum: '10', maxSum: '30000' };

    //Общественное объединение "Уркер Эли"
	array["22156"] = { mask: new RegExp('^996[0-9]{9,9}$', 'i'), minSum: '20', maxSum: '30000' };

    //allpay - Мобильный кошелек
	array["22157"] = { mask: new RegExp('^.{12}$', 'i'), minSum: '20', maxSum: '30000' };

    //Управляющая компания Ихлас Таун
	array["22158"] = { mask: new RegExp('^\\d{7}$', 'i'), minSum: '20', maxSum: '30000' };

    //Портал ГРУПП - оплата услуг эвакуатора
	array["22159"] = { mask: new RegExp('^.{8,10}$', 'i'), minSum: '1350', maxSum: '1400' };

    //CTmax – автоматизация торговли
	array["22160"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '30000' };

    //Ю-Мода - интернет магазин
	array["22161"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '20', maxSum: '30000' };

    //Управляющая компания Джал Таун
	array["22162"] = { mask: new RegExp('^\\d{6}$', 'i'), minSum: '20', maxSum: '30000' };

    //Футбольная школа Юниор - оплата за абонемент
	array["22163"] = { mask: new RegExp('^.{1,30}$', 'i'), minSum: '10', maxSum: '5650' };

    //AVTONALOG.KG
	array["22164"] = { mask: new RegExp('^\\d{14}$', 'i'), minSum: '230', maxSum: '420' };
	
	//Энерготрейд
	array["22172"] = { mask: new RegExp('^\\d{7,8}$', 'i'), minSum: '100', maxSum: '10000' };
	
	// Skynet 
	array["22186"] = { mask: new RegExp('^\\d{1,9}$', 'i'), minSum: '20', maxSum: '10000' };

	return array;
}