function stringStartsWithSymbols(sStr, sSymbols) {
    if (sSymbols.length > sStr.length) return false;

    // sortirovka po pervym simvolam
    /*for (var i = 0; i < sSymbols.length; i++) {
        if (sStr.charAt(i).toLowerCase() != sSymbols.charAt(i).toLowerCase()) return false;
    }*/

    // sortirovka po simvolam kotorie prsutstvuut v stroke
    if (sStr.toLowerCase().match(sSymbols.toLowerCase()) === null) return false;

    return true;
}

function searchProviders(sProviderFirstSymbols) {
    if (sProviderFirstSymbols == "") return;
    var sLocale = getcookie('locale');
    var newArray = new Array();
    for (var i in value) {
        if (!value.hasOwnProperty(i)) continue;
        if (value[i]["prv_id"] == "0") continue; // провайдер "ЗДЕСЬ МОЖЕТ БЫТЬ ВАША КОМПАНИЯ"  - убираем
        var provName = getProviderText(i, sLocale);
        var provGroup = getProviderGroup(i, sLocale);        
        if (stringStartsWithSymbols(provName, sProviderFirstSymbols)) {            
            var oFindedProvider = {
                id      : value[i]["prv_id"],
                name    : provName,
                value   : i,
                folder  : value[i]["prv_folder"],
                image   : value[i]["prv_image"],
                page    : value[i]["prv_page"],
                tag     : value[i]["prv_tag"],
                group   : provGroup
            };            
            newArray.push(oFindedProvider);
        }
    }
    
    return newArray;
}

function convertProvidersArrayToString(oProvidersArray) {
    var sStr = "";
    for (var p in oProvidersArray) {
        if (!oProvidersArray.hasOwnProperty(p) || !oProvidersArray[p].id) continue;

        //TODO: выполнить проверку на существование все необходимых полей в провайдере
        //если какого либо поля нет, то пропустить заполнение данного провайдера continue

        var sProviderString = "";
        sProviderString += oProvidersArray[p].id + "|";
        sProviderString += oProvidersArray[p].name + " - " + oProvidersArray[p].group + "|";
        sProviderString += oProvidersArray[p].image + ";";

        sStr += sProviderString;
    }

    return sStr;
}