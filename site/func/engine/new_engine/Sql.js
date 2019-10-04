
Sql = {

    INSERT: function (gateServiceId, accountString, accountInfo) {
        var connection = new ActiveXObject("ADODB.Connection");

        var connectionstring = "Data Source=kgupgnlb.kg.idb.local;Initial Catalog=gate;User ID=ManageAbonents;Password=tj372LJh;Provider=SQLOLEDB";

        connection.Open(connectionstring);
        var rs = new ActiveXObject("ADODB.Recordset");

        var param = "@GateServiceID=" + gateServiceId +
                ",@AccountNr = NULL" +
                ",@AccountString='" + accountString + "'" +
                ",@ProviderID = NULL" +
                ",@FIO= NULL" +
                ",@Address = NULL" +
                ",@TreatyNumber = NULL" +
                ",@AccountInfo = '" + escape(utf8_decode(accountInfo)) + "'" +
                ",@Balance = NULL";

        rs.Open("use [gate] exec [dbo].[CreateProviderAccInfo] " + param, connection);
        /*
        rs.MoveFirst;
        while (!rs.eof) {
            document.write(rs.fields(1));
            rs.movenext;
        }

        rs.close;*/
        connection.close;
    },

    INSERT_ToDevel: function (gateServiceId, accountString, accountInfo) {
        var connection = new ActiveXObject("ADODB.Connection");

        var connectionstring = "Data Source=devel.upg.kg.idb.local;Initial Catalog=gate;User ID=upguser;Password=U1P2G3;Provider=SQLOLEDB";

        connection.Open(connectionstring);
        var rs = new ActiveXObject("ADODB.Recordset");

        var param = "@GateServiceID=" + gateServiceId +
                ",@AccountNr = NULL" +
                ",@AccountString='" + accountString + "'" +
                ",@ProviderID = NULL" +
                ",@FIO= NULL" +
                ",@Address = NULL" +
                ",@TreatyNumber = NULL" +
                ",@AccountInfo = '" + escape(utf8_decode(accountInfo)) + "'" +
                ",@Balance = NULL";

        rs.Open("use [gate] exec [dbo].[CreateProviderAccInfo] " + param, connection);
        connection.close;
    },

    DELETE: function (gateServiceId, accountString) {
        var connection = new ActiveXObject("ADODB.Connection");

        var connectionstring = "Data Source=kgupgnlb.kg.idb.local;Initial Catalog=gate;User ID=ManageAbonents;Password=tj372LJh;Provider=SQLOLEDB";

        connection.Open(connectionstring);
        var rs = new ActiveXObject("ADODB.Recordset");

        var param = "@GateServiceID=" + gateServiceId +
                    ",@AccountString='" + accountString + "'";

        rs.Open("use [gate] exec [dbo].[DeleteProviderAccInfo] " + param, connection);
        connection.close;
    }

};
