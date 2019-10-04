var rateCount = 0;

function calcWinnerSums(account, sum) {
	var arr = account.split(';');
	rateCount = arr.length;
	var res = new Array();

	switch (rateCount) {
		case 1:
			res[0] = setReadableSum(sum * 4);
			break;
		case 2:
			res[0] = setReadableSum(sum * 20);
			break;
		case 3:
			res[0] = setReadableSum(sum * 10);
			res[1] = setReadableSum(sum * 100);
			break;
		case 4:
			res[0] = setReadableSum(sum * 40);
			res[1] = setReadableSum(sum * 1000);
			break;
		case 5:
			res[0] = setReadableSum(sum * 15);
			res[1] = setReadableSum(sum * 150);
			res[2] = setReadableSum(sum * 15000);
			break;
	}

	return res;
}

function convertSportLotoAccount(acc) {
    var arr = acc.split(';');

    var readableAccount = '';
    for (var i = 0; i < arr.length; i++) {
        readableAccount += arr[i] + '  ';
    }
    return readableAccount;
}

function setAccountForPost(acc) {
    var arr = acc.split(' ');

    var readableAccount = '';
    for (var i = 0; i < arr.length; i++) {
        readableAccount += arr[i] + ';';
    }
    return readableAccount;
}

function getReceiptWinnerText(account) {
    var arr = account.split(';');
    var rateCount = arr.length;
    var winS = '';
    switch (rateCount) {
        case 1:
            winS = '1 ном. - Cx4';
            break;
        case 2:
            winS = '2 ном. - Cx20';
            break;
        case 3:
            winS = '2 ном. - Cx10, 3 ном. - Cx100';
            break;
        case 4:
            winS = '3 ном. - Cx40, 4 ном. - Cx1000';
            break;
        case 5:
            winS = '3 ном. - Cx15, 4 ном. - Cx150, 5 ном. - Cx15000';
            break;
    }
    
    return winS;
}

function switchWinnerButtons(arr) {
	switch (arr.length) {
		case 1: 
			$('text_1').style.display = 'none';
			$('text_2').style.display = 'block';
			$('text_3').style.display = 'none';

			$('input_2').value = arr[0];
			if (rateCount == 1)
				$('top_input_2').value = '1-х номера';
			else if (rateCount == 2)
				$('top_input_2').value = '2-х номеров';
			break;

		case 2:
			$('text_1').style.display = 'block';
			$('text_2').style.display = 'block';
			$('text_3').style.display = 'none';

			$('input_1').value = arr[0];
			$('input_2').value = arr[1];

			if (rateCount == 3) {
				$('top_input_1').value = '2-х номеров';
				$('top_input_2').value = '3-х номеров';
			}
			else if (rateCount == 4) {
				$('top_input_1').value = '3-х номеров';
				$('top_input_2').value = '4-х номеров';
			}
			break;

		case 3:
			$('text_1').style.display = 'block';
			$('text_2').style.display = 'block';
			$('text_3').style.display = 'block';

			$('input_1').value = arr[0];
			$('input_2').value = arr[1];
			$('input_3').value = arr[2];

			$('top_input_1').value = '3-х номеров';
			$('top_input_2').value = '4-х номеров';
			$('top_input_3').value = '5-х номеров';
			break;
	}
}