var pref = new Array();


function add(r) {

    var i,a = parseInt(r.from.substr(0,3),10), b = a = parseInt(r.to.substr(0,3),10);

    for( i=a; i<=b; i++ ) {
        var z = pref[i];
        if(!z) z = pref[i] = new Array();
        z[z.length] = r;
    }
}

function testCapacity(s) {
    idPrv = '';
    var namePrv = '';
    //var s = document.getElementById("code").value + document.getElementById("phone_wd").value;
    //if( s.substr(0,1) == '0' ) s = '4'+s.substr(1);
    //if( loaded == 2 ) {
        var i, foundPriority = 99, prv='',region='', r = pref[parseInt(s.substr(0,3), 10)];
        if( r ) for( i = 0; i < r.length; i++ ) {
            var s1 = (s+'0000000000').substr(0,9), s2 = (s+'9999999999').substr(0,9);
            if( s1 >= r[i].from && s2 <= r[i].to && r[i].priority <= foundPriority ) {
                foundPriority = r[i].priority;
                prv = r[i].prv;               

                /*if (regions[r[i].region])
                    region = regions[ r[i].region ];
                else
                    region = 'Регион не определен';*/

                /*idPrv = prv;
                ff.prv_id.value = idPrv;

                if (p[prv])
                    namePrv = p[prv];
                else
                    namePrv = 'Провайдер не определен';

                ff.prv_name.value = namePrv;*/
            }
        }
        return prv;
        //alert("Provider = " + namePrv);
        //alert("Region = " + region);

    //document.getElementById("prv").innerHTML = ''+(prv==''?'-':namePrv);

    //document.getElementById("region").innerHTML = ''+(region==''?'-':region);

    //}
}

var regions = new Array(), loaded = 0, gened = false, ranges = new Array(), idPrv = '';

function range( from, to, prv, priority, region ) {

	this.from = from;

	this.to = to;

	this.region = region;

	this.priority = parseInt(priority,10);

	this.prv = prv;
}

function continiueClick(){

	if(idPrv == 3 || idPrv == 22 || idPrv == 23 || idPrv == 26 || idPrv == 34 || idPrv == 35 || idPrv == 38 || idPrv == 40 || idPrv==29 || idPrv==30){

		document.cookie = "Phone_Number="+"("+ff.code.value+")"+ff.phone.value;

	}

	else{

		ff.prv_id.value = '';

		ff.action = 'megafone_all.html';

	}

	ff.submit();
}

var p = new Array();
p[1]='Мегаком';


regions[0]='Кыргызстан';

add(new range('550000000','550999999',1,1,0));
add(new range('551000000','551999999',1,1,0));
add(new range('552000000','552999999',1,1,0));
add(new range('553000000','553999999',1,1,0));
add(new range('554000000','554999999',1,1,0));
add(new range('555000000','555999999',1,1,0));


loaded = 2;

