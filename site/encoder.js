function encoder(aa) {
    var bb = '', c = 0;
    for (var i = 0; i < aa.length; i++) 
	{
        c = aa.charCodeAt(i);
		if (c < 1040){
			bb += aa.charAt(i);			
		}
		else
		{
			switch (c){			
			//Заглавные буквы
				case 1040:bb += "A";break;
				case 1041:bb += "B";break;
				case 1042:bb += "V";break;
				case 1043:bb += "G";break;
				case 1044:bb += "D";break;
				case 1045:bb += "E";break;
				case 1046:bb += "J";break;
				case 1047:bb += "Z";break;
				case 1048:bb += "I";break;
				case 1049:bb += "1";break;
				case 1050:bb += "K";break;
				case 1051:bb += "L";break;
				case 1052:bb += "M";break;
				case 1053:bb += "N";break;
				case 1054:bb += "O";break;
				case 1055:bb += "P";break;
				case 1056:bb += "R";break;
				case 1057:bb += "S";break;
				case 1058:bb += "T";break;
				case 1059:bb += "Y";break;
				case 1060:bb += "F";break;
				case 1061:bb += "H";break;
				case 1062:bb += "C";break;
				case 1063:bb += "4";break;
				case 1064:bb += "W";break;
				case 1065:bb += "6";break;
				case 1066:bb += "7";break;
				case 1067:bb += "8";break;
				case 1068:bb += "Q";break;
				case 1069:bb += "5";break;
				case 1070:bb += "U";break;
				case 1071:bb += "0";break;
				case 1025:bb += ">";break;
					
			//строчные буквы
				case 1072:bb += "a";break;
				case 1073:bb += "b";break;
				case 1074:bb += "v";break;
				case 1075:bb += "g";break;
				case 1076:bb += "d";break;
				case 1077:bb += "e";break;
				case 1078:bb += "j";break;
				case 1079:bb += "z";break;
				case 1080:bb += "i";break;
				case 1081:bb += "3";break;
				case 1082:bb += "k";break;
				case 1083:bb += "l";break;
				case 1084:bb += "m";break;
				case 1085:bb += "n";break;
				case 1086:bb += "o";break;
				case 1087:bb += "p";break;
				case 1088:bb += "r";break;
				case 1089:bb += "s";break;
				case 1090:bb += "t";break;
				case 1091:bb += "y";break;
				case 1092:bb += "f";break;
				case 1093:bb += "h";break;
				case 1094:bb += "c";break;
				case 1095:bb += "2";break;
				case 1096:bb += "w";break;
				case 1097:bb += "9";break;
				case 1098:bb += "@";break;
				case 1099:bb += "?";break;
				case 1100:bb += "q";break;
				case 1101:bb += ".";break;
				case 1102:bb += "u";break;
				case 1103:bb += ",";break;
				case 1105:bb += "<";break;
			}
		}
    }	
    return bb;
}
