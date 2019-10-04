function getMinSumm(sPrvId)
{
    switch (sPrvId) {
        case '2'    : return '2'; 	//Билайн
        case '4'    : return '30'; 	//Сонет
        case '36'   : return '10'; 	//Мотив Екатеринбург
        case '42'   : return '2'; 	//TELE2
        case '60'   : return '10'; 	//ИНТРА
        case '79'   : return '100'; //SIPNET
        case '84'   : return '5'; 	//СМАРТС Самара
        case '96'   : return '10'; 	//Интервейв
        case '279'  : return '10'; 	//Енисейтелеком
        case '303'  : return '5'; 	//НТС Саратов
        case '329'  : return '5'; 	//Интерлан
        case '352'  : return '5'; 	//Ринет
        case '358'  : return '10'; 	//КОМКОР
        case '383'  : return '50'; 	//ГудЛайн
        case '881'  : return '5'; 	//Скайлинк Кировская
        default: return '1';
    }
}
