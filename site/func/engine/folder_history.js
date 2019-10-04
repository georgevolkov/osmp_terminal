function clearFolderHistory() {
    //var ha = Object.deserialize(storage.get("folderHistoryArray"));
    //if (ha != null) {
        var ha = new Array();
        storage.put("folderHistoryArray", ha.serialize(), false);
    //}
}

function pushFolder(folder) {
    var ha = Object.deserialize(storage.get("folderHistoryArray"));
    if (ha == null)
        ha = new Array();
    
    ha.push(folder);
    storage.put("folderHistoryArray", ha.serialize(), false);
}

function popFolder(folder) {
    var ha = Object.deserialize(storage.get("folderHistoryArray"));
    if (ha == null)
        ha = new Array();

    if (ha.length > 0) {
        var r = ha.pop(folder);
        storage.put("folderHistoryArray", ha.serialize(), false);
        return r;
    }
    else
        return "";
}