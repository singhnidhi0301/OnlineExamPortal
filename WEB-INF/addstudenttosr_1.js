var prev_name = "",
    prev_doj = "01-01-1950",
    prev_dob = "01-01-1950",
    prev_address = "",
    prev_peraddress = "",
    prev_gender = "",
    prev_nationality = "0",
    prev_religion = "0";
var prev_bloodgroup = "0",
    prev_cast = "0",
    prev_emailid = "";
var prev_studphoneno = "",
    prev_landlineno = "";
var prev_bsis = "",
    prev_subjects = "",
    prev_class_applied_for = "",
    prev_board_regno = "",
    prev_ssno = "",
    prev_fname = "",
    prev_foccup = "",
    prev_fphoneno = "";
var prev_f_annualincome = "",
    prev_f_emailid = "",
    prev_mname = "",
    prev_moccup = "";
var prev_mphoneno = "",
    prev_m_annualincome = "",
    prev_m_emailid = "",
    prev_role = "0",
    prev_nostr = "",
    prev_dotsla = "1-01-1950",
    prev_classmintc = "",
    prev_dowithdrawl = "01-01-1950";
var prev_classinwls = "",
    prev_nottcr = "",
    prev_lastdateoftcrcv = "1-01-1950",
    prev_tcnoallot = "0";
var prev_found = 0;
var xmlhttp = null;

function onclickchkperadress() {
    try {
        var address = document.getElementById("address").value;
        if (document.getElementById("checkbox_address").checked == true) document.getElementById("peraddress").value = address;
        else {
            document.getElementById("peraddress").value = "";
        }
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentToSr -> Onclickchkperadress");
        document.getElementById("srno").focus();
        return false;
    }
}
function getData_basedonsrno() {
    try {
        document.getElementById("srno").value = Math.round(document.getElementById("srno").value);
        var srno = document.getElementById("srno").value;
        if (isNaN(srno)) {
            alert("Invalid SR No.");
            document.getElementById("srno").focus();
            return false;
        }
        if (Number(srno) <= 0) {
            alert("Invalid SR No.");
            document.getElementById("srno").focus();
            return false;
        }
        loadPopup('1');
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentToSr -> GetData_basedonsrno()");
        document.getElementById("srno").focus();
        return false;
    }
}
function getData_based_on_srno() {
    try {
        var srno = document.getElementById("srno").value;
        xmlhttp = null;
        xmlhttp = new XMLHttpRequest();
        var url = "savesr?whichbutton=getdata_based_on_srno";
        url = url + "&currentfinancialyear=" + document.getElementById("currentfinancialyear").value;
        url = url + "&txtuser=" + document.getElementById("txtuser").value;
        url = url + "&code=" + document.getElementById("code").value;
        url = url + "&srno=" + srno;
        url = url + "&srpostfix=" + document.getElementById("srpostfix").value;
        xmlhttp.onreadystatechange = handleServerResponse_GetData_based_on_srno;
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentToSr -> GetData_based_on_srno");
        document.getElementById("srno").focus();
        disablePopup();
        return false;
    }
}
function handleServerResponse_GetData_based_on_srno() {
    try {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                if (xmlhttp.getResponseHeader("Content-Type").indexOf("text/html") >= 0) {
                    var responsee = xmlhttp.responseText;
                    if (isNaN(responsee)) {
                        alert(" [ Server Error ] " + responsee);
                        document.getElementById("srno").focus();
                        disablePopup();
                        return false;
                    }
                }
                var xx, j = 0;
                var temp;
                resett();
                x = xmlhttp.responseXML.documentElement.getElementsByTagName("record");
                for (var i = 0; i < x.length; i++) {
                    xx = x[i].getElementsByTagName("srno");
                    document.getElementById("srno_aftersearch").value = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("srpostfix");
                    document.getElementById("srpostfix_aftersearch").value = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("name");
                    document.getElementById("name").value = xx[0].firstChild.nodeValue;
                    prev_name = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("doj");
                    prev_doj = xx[0].firstChild.nodeValue;
                    $('#doj').val(prev_doj);
                    xx = x[i].getElementsByTagName("dob");
                    prev_dob = xx[0].firstChild.nodeValue;
                    $('#dob').val(prev_dob);
                    xx = x[i].getElementsByTagName("address");
                    document.getElementById("address").value = xx[0].firstChild.nodeValue;
                    prev_address = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("peraddress");
                    document.getElementById("peraddress").value = xx[0].firstChild.nodeValue;
                    prev_peraddress = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("gender");
                    document.getElementById("gender").value = xx[0].firstChild.nodeValue;
                    prev_gender = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("nationality");
                    document.getElementById("nationality").value = xx[0].firstChild.nodeValue;
                    prev_nationality = Number(xx[0].firstChild.nodeValue);
                    xx = x[i].getElementsByTagName("religion");
                    document.getElementById("religion").value = xx[0].firstChild.nodeValue;
                    prev_religion = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("bloodgroup");
                    document.getElementById("bloodgroup").value = xx[0].firstChild.nodeValue;
                    prev_bloodgroup = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("cast");
                    document.getElementById("cast").value = xx[0].firstChild.nodeValue;
                    prev_cast = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("emailid");
                    document.getElementById("emailid").value = xx[0].firstChild.nodeValue;
                    prev_emailid = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("studphoneno");
                    document.getElementById("studphoneno").value = xx[0].firstChild.nodeValue;
                    prev_studphoneno = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("landlineno");
                    document.getElementById("landlineno").value = xx[0].firstChild.nodeValue;
                    prev_landlineno = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("bsis");
                    document.getElementById("bsis").value = xx[0].firstChild.nodeValue;
                    prev_bsis = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("subjects");
                    prev_subjects = xx[0].firstChild.nodeValue;
                    var subjects_array = new Array();
                    subjects_array = prev_subjects.split("@");
                    for (var innerloop = 0; innerloop < subjects_array.length; innerloop++) {
                        var idd = "subjects" + subjects_array[innerloop];
                        if (document.getElementById(idd) != null) document.getElementById(idd).checked = true;
                    }
                    xx = x[i].getElementsByTagName("class_applied_for");
                    document.getElementById("class_applied_for").value = xx[0].firstChild.nodeValue;
                    prev_class_applied_for = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("board_regno");
                    document.getElementById("board_regno").value = xx[0].firstChild.nodeValue;
                    prev_board_regno = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("ssno");
                    document.getElementById("ssno").value = xx[0].firstChild.nodeValue;
                    prev_ssno = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("fname");
                    document.getElementById("fname").value = xx[0].firstChild.nodeValue;
                    prev_fname = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("foccup");
                    document.getElementById("foccup").value = xx[0].firstChild.nodeValue;
                    prev_foccup = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("fphoneno");
                    document.getElementById("fphoneno").value = xx[0].firstChild.nodeValue;
                    prev_fphoneno = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("f_annualincome");
                    document.getElementById("f_annualincome").value = xx[0].firstChild.nodeValue;
                    prev_f_annualincome = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("f_emailid");
                    document.getElementById("f_emailid").value = xx[0].firstChild.nodeValue;
                    prev_f_emailid = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("mname");
                    document.getElementById("mname").value = xx[0].firstChild.nodeValue;
                    prev_mname = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("moccup");
                    document.getElementById("moccup").value = xx[0].firstChild.nodeValue;
                    prev_moccup = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("mphoneno");
                    document.getElementById("mphoneno").value = xx[0].firstChild.nodeValue;
                    prev_mphoneno = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("m_annualincome");
                    document.getElementById("m_annualincome").value = xx[0].firstChild.nodeValue;
                    prev_m_annualincome = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("m_emailid");
                    document.getElementById("m_emailid").value = xx[0].firstChild.nodeValue;
                    prev_m_emailid = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("role");
                    document.getElementById("role").value = xx[0].firstChild.nodeValue;
                    prev_role = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("nostr");
                    document.getElementById("nostr").value = xx[0].firstChild.nodeValue;
                    prev_nostr = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("dotsla");
                    prev_dotsla = xx[0].firstChild.nodeValue;
                    $('#dotsla').val(prev_dotsla);
                    xx = x[i].getElementsByTagName("classmintc");
                    document.getElementById("classmintc").value = xx[0].firstChild.nodeValue;
                    prev_classmintc = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("dowithdrawl");
                    prev_dowithdrawl = xx[0].firstChild.nodeValue;
                    $('#dowithdrawl').val(prev_dowithdrawl);
                    xx = x[i].getElementsByTagName("classinwls");
                    document.getElementById("classinwls").value = xx[0].firstChild.nodeValue;
                    prev_classinwls = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("nottcr");
                    document.getElementById("nottcr").value = xx[0].firstChild.nodeValue;
                    prev_nottcr = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("lastdateoftcrcv");
                    prev_lastdateoftcrcv = xx[0].firstChild.nodeValue;
                    $('#lastdateoftcrcv').val(prev_lastdateoftcrcv);
                    xx = x[i].getElementsByTagName("tcnoallot");
                    document.getElementById("tcnoallot").value = xx[0].firstChild.nodeValue;
                    prev_tcnoallot = xx[0].firstChild.nodeValue;
                    xx = x[i].getElementsByTagName("found"); /* only admin allow to update entry second time */
                    prev_found = xx[0].firstChild.nodeValue; /* 1 means already existing patient, 0 means not exist */
                } /*for (var i=0;i<x.length;i++) */
                xmlhttp = null;
                x = null;
                xx = null;
                try {
                    document.getElementById("name").focus();
                } catch (ee) {}
                disablePopup();
            } else {
                alert("Network Problem Please Try Again");
                disablePopup();
                document.getElementById("srno").focus();
                return false;
            }
        }
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentToSR -> HandleServerResponse_GetData_based_on_srno");
        document.getElementById("srno").focus();
        disablePopup();
        return false;
    }
}
function onloadd() {
    try {
        var completedate = document.getElementById("completedate").value;
        $("#tabs").tabs();
        $("#dob").datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: "1950:+0"
        });
        $("#dob").datepicker("option", "dateFormat", "dd-mm-yy");
        $('#dob').val(completedate);
        $("#doj").datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: "1960:+0"
        });
        $("#doj").datepicker("option", "dateFormat", "dd-mm-yy");
        $('#doj').val(completedate);
        $("#dotsla").datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: "1960:+0"
        });
        $("#dotsla").datepicker("option", "dateFormat", "dd-mm-yy");
        $('#dotsla').val(completedate);
        $("#dowithdrawl").datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: "1960:+0"
        });
        $("#dowithdrawl").datepicker("option", "dateFormat", "dd-mm-yy");
        $('#dowithdrawl').val(completedate); /*$( "#lastdateoftcrcv" ).datepicker({changeMonth: true,changeYear: true,yearRange: "1960:+0" });$( "#lastdateoftcrcv" ).datepicker( "option", "dateFormat", "dd-mm-yy" ); $('#lastdateoftcrcv').val(completedate);*/
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentToSr -> Onloadd");
        return false;
    }
}
function onclickbackbutton() {
    history.go(-1);
}
var workdone = "Change In SR Record";
var datatosend = "";

function onsubmitt() {
    try {
        for (var loop2 = 0; loop2 < document.forms.length; loop2++) {
            for (var loopd = 0; loopd < document.forms[loop2].elements.length; loopd++) {
                if (document.forms[loop2].elements[loopd].type == "text" || document.forms[loop2].elements[loopd].type == "textarea") {
                    var valuee = document.forms[loop2].elements[loopd].value;
                    var res = check_valid_character_in_string(valuee);
                    if (res == false) {
                        alert('Invalid Character In ' + document.forms[loop2].elements[loopd].title.toUpperCase());
                        document.forms[loop2].elements[loopd].focus();
                        return false;
                    }
                    changetorunningcase(valuee);
                    document.forms[loop2].elements[loopd].value = afterconverting;
                }
            } /*loop2*/
        } /*loopd*/
        document.getElementById("srno").value = Math.round(document.getElementById("srno").value);
        var srno = Math.round(document.getElementById("srno").value);
        if (isNaN(srno)) {
            alert("Invalid SR No.");
            document.getElementById("srno").focus();
            return false;
        }
        if (Number(srno) <= 0) {
            alert("Invalid SR No.");
            document.getElementById("srno").focus();
            return false;
        }
        var srpostfix = document.getElementById("srpostfix").value;
        var name = document.getElementById("name").value;
        if (name.length < 2) {
            alert('Name Required');
            document.getElementById("name").focus();
            return false;
        }
        var doj = document.getElementById("doj").value;
        var dob = document.getElementById("dob").value;
        var address = document.getElementById("address").value;
        if (address.length > 75) {
            alert('Too Many Character In Address Field');
            document.getElementById("address").focus();
            return false;
        }
        var peraddress = document.getElementById("peraddress").value;
        if (peraddress.length > 75) {
            alert('Too Many Character In Permanent Address Field');
            document.getElementById("peraddress").focus();
            return false;
        }
        var gender = document.getElementById("gender").value;
        var nationality = document.getElementById("nationality").value;
        var religion = document.getElementById("religion").value;
        var bloodgroup = document.getElementById("bloodgroup").value;
        var cast = document.getElementById("cast").value;
        var emailid = document.getElementById("emailid").value;
        var studphoneno = document.getElementById("studphoneno").value;
        var landlineno = document.getElementById("landlineno").value;
        var bsis = document.getElementById("bsis").value;
        var subjects = ""; /* array_subjectid is declare globally */
        for (var innerloop = 0; innerloop < array_subjectid.length; innerloop++) {
            var idd = "subjects" + array_subjectid[innerloop];
            if (document.getElementById(idd) != null) {
                if (document.getElementById(idd).checked == true) subjects = subjects + array_subjectid[innerloop] + "@";
            }
        }
        if (subjects.length > 1) subjects = subjects.substring(0, subjects.length - 1);
        if (subjects.length > 25) {
            alert("Too Many Subjects Selected");
            return false;
        }
        var class_applied_for = document.getElementById("class_applied_for").value;
        var board_regno = document.getElementById("board_regno").value;
        var ssno = document.getElementById("ssno").value;
        var fname = document.getElementById("fname").value;
        var foccup = document.getElementById("foccup").value;
        var fphoneno = document.getElementById("fphoneno").value;
        var f_annualincome = document.getElementById("f_annualincome").value;
        var f_emailid = document.getElementById("f_emailid").value;
        var mname = document.getElementById("mname").value;
        var moccup = document.getElementById("moccup").value;
        var mphoneno = document.getElementById("mphoneno").value;
        var m_annualincome = document.getElementById("m_annualincome").value;
        var m_emailid = document.getElementById("m_emailid").value;
        var role = document.getElementById("role").value;
        var nostr = document.getElementById("nostr").value;
        var dotsla = document.getElementById("dotsla").value;
        var classmintc = document.getElementById("classmintc").value;
        var dowithdrawl = document.getElementById("dowithdrawl").value;
        var classinwls = document.getElementById("classinwls").value;
        document.getElementById("nottcr").value = Math.round(document.getElementById("nottcr").value);
        var nottcr = document.getElementById("nottcr").value;
        if (isNaN(nottcr)) {
            alert("Invalid Value In No. Of Time TC Issued");
            document.getElementById("nottcr").focus();
            return false;
        }
        if (Number(nottcr) < 0) {
            alert("Invalid Value In No. Of Time TC Issued");
            document.getElementById("nottcr").focus();
            return false;
        }
        var lastdateoftcrcv = document.getElementById("lastdateoftcrcv").value;
        var tcnoallot = document.getElementById("tcnoallot").value;
        workdone = "Change In SR Record";
        datatosend = "";
        if (prev_name.toLowerCase() != name.toLowerCase()) {
            datatosend = datatosend + "name='" + name + "',";
            workdone = workdone + " :Name[P]=" + prev_name + " [N]=" + name;
        }
        var temp_array_doj = new Array();
        temp_array_doj = doj.split("-");
        if (prev_doj.length < 2) prev_doj = "00-00-0000";
        var temp_array_previous_doj = new Array();
        temp_array_previous_doj = prev_doj.split("-");
        if ((Number(temp_array_previous_doj[0]) != Number(temp_array_doj[0])) || (Number(temp_array_previous_doj[1]) != Number(temp_array_doj[1])) || (Number(temp_array_previous_doj[2]) != Number(temp_array_doj[2]))) {
            datatosend = datatosend + "doj='" + (temp_array_doj[2] + "-" + temp_array_doj[1] + "-" + temp_array_doj[0]) + "',";
            workdone = workdone + " :DOJ[P]=" + prev_doj + " [N]=" + doj;
        }
        var temp_array_dob = new Array();
        temp_array_dob = dob.split("-");
        if (prev_dob.length < 2) prev_dob = "00-00-0000";
        var temp_array_previous_dob = new Array();
        temp_array_previous_dob = prev_dob.split("-");
        if ((Number(temp_array_previous_dob[0]) != Number(temp_array_dob[0])) || (Number(temp_array_previous_dob[1]) != Number(temp_array_dob[1])) || (Number(temp_array_previous_dob[2]) != Number(temp_array_dob[2]))) {
            datatosend = datatosend + "dob='" + (temp_array_dob[2] + "-" + temp_array_dob[1] + "-" + temp_array_dob[0]) + "',";
            workdone = workdone + " :DOB[P]=" + prev_dob + " [N]=" + dob;
        } /*replace function is use to replace all \n with nothing so that two strings compare successfully [/g indicates all occurences of \n] */
        if (prev_address.replace(/\n/g, "").toLowerCase() != address.replace(/\n/g, "").toLowerCase()) {
            datatosend = datatosend + "address='" + address + "',";
            workdone = workdone + " :Address[P]=" + prev_address + " [N]=" + address;
        } /*replace function is use to replace all \n with nothing so that two strings compare successfully [/g indicates all occurences of \n] */
        if (prev_peraddress.replace(/\n/g, "").toLowerCase() != peraddress.replace(/\n/g, "").toLowerCase()) {
            datatosend = datatosend + "peraddress='" + peraddress + "',";
            workdone = workdone + " :PerAddress[P]=" + prev_peraddress + " [N]=" + peraddress;
        }
        if (prev_gender.toLowerCase() != gender.toLowerCase()) {
            datatosend = datatosend + "gender='" + gender + "',";
            workdone = workdone + " :Gender[P]=" + prev_gender + " [N]=" + gender;
        }
        if (Number(prev_nationality) != Number(nationality)) {
            var previous_nationality_text = "";
            for (var loop = 0; loop < document.getElementById("nationality").length; loop++) {
                if (Number(document.getElementById("nationality").options[loop].value) == Number(prev_nationality)) {
                    previous_nationality_text = document.getElementById("nationality").options[loop].text;
                    break;
                }
            }
            datatosend = datatosend + "nationality=" + document.getElementById("nationality").value + ",";
            workdone = workdone + " :Nationality[P]=" + previous_nationality_text + " [N]=" + document.getElementById("nationality").options[document.getElementById("nationality").selectedIndex].text;
        }
        if (Number(prev_religion) != Number(religion)) {
            var previous_religion_text = "";
            for (var loop = 0; loop < document.getElementById("religion").length; loop++) {
                if (Number(document.getElementById("religion").options[loop].value) == Number(prev_religion)) {
                    previous_religion_text = document.getElementById("religion").options[loop].text;
                    break;
                }
            }
            datatosend = datatosend + "religion=" + document.getElementById("religion").value + ",";
            workdone = workdone + " :Religion[P]=" + previous_religion_text + " [N]=" + document.getElementById("religion").options[document.getElementById("religion").selectedIndex].text;
        }
        if (Number(prev_bloodgroup) != Number(bloodgroup)) {
            var previous_bloodgroup_text = "";
            for (var loop = 0; loop < document.getElementById("bloodgroup").length; loop++) {
                if (Number(document.getElementById("bloodgroup").options[loop].value) == Number(prev_bloodgroup)) {
                    previous_bloodgroup_text = document.getElementById("bloodgroup").options[loop].text;
                    break;
                }
            }
            datatosend = datatosend + "bloodgroup=" + document.getElementById("bloodgroup").value + ",";
            workdone = workdone + " :Bloodgroup[P]=" + previous_bloodgroup_text + " [N]=" + document.getElementById("bloodgroup").options[document.getElementById("bloodgroup").selectedIndex].text;
        }
        if (Number(prev_cast) != Number(cast)) {
            var previous_cast_text = "";
            for (var loop = 0; loop < document.getElementById("cast").length; loop++) {
                if (Number(document.getElementById("cast").options[loop].value) == Number(prev_cast)) {
                    previous_cast_text = document.getElementById("cast").options[loop].text;
                    break;
                }
            }
            datatosend = datatosend + "cast=" + document.getElementById("cast").value + ",";
            workdone = workdone + " :Cast[P]=" + previous_cast_text + " [N]=" + document.getElementById("cast").options[document.getElementById("cast").selectedIndex].text;
        }
        if (prev_emailid.toLowerCase() != emailid.toLowerCase()) {
            datatosend = datatosend + "emailid='" + emailid + "',";
            workdone = workdone + " :EmailID[P]=" + prev_emailid + " [N]=" + emailid;
        }
        if (prev_studphoneno.toLowerCase() != studphoneno.toLowerCase()) {
            datatosend = datatosend + "studphoneno='" + studphoneno + "',";
            workdone = workdone + " :StudentPhoneNo.[P]=" + prev_studphoneno + " [N]=" + studphoneno;
        }
        if (prev_landlineno.toLowerCase() != landlineno.toLowerCase()) {
            datatosend = datatosend + "landlineno='" + landlineno + "',";
            workdone = workdone + " :LandLineNo.[P]=" + prev_landlineno + " [N]=" + landlineno;
        }
        if (prev_bsis.toLowerCase() != bsis.toLowerCase()) {
            datatosend = datatosend + "bsis='" + bsis + "',";
            workdone = workdone + " :BrotherSister[P]=" + prev_bsis + " [N]=" + bsis;
        }
        if (prev_subjects.toLowerCase() != subjects.toLowerCase()) {
            datatosend = datatosend + "subjects='" + subjects + "',";
            workdone = workdone + " :Subjects[P]=" + prev_subjects + " [N]=" + subjects;
        }
        if (prev_class_applied_for.toLowerCase() != class_applied_for.toLowerCase()) {
            datatosend = datatosend + "class_applied_for='" + class_applied_for + "',";
            workdone = workdone + " :ClassApplyFor[P]=" + prev_class_applied_for + " [N]=" + class_applied_for;
        }
        if (prev_board_regno.toLowerCase() != board_regno.toLowerCase()) {
            datatosend = datatosend + "board_regno='" + board_regno + "',";
            workdone = workdone + " :BoardRegNo.[P]=" + prev_board_regno + " [N]=" + board_regno;
        }
        if (prev_ssno.toLowerCase() != ssno.toLowerCase()) {
            datatosend = datatosend + "ssno='" + ssno + "',";
            workdone = workdone + " :SocialSecurityNo.[P]=" + prev_ssno + " [N]=" + ssno;
        }
        if (prev_fname.toLowerCase() != fname.toLowerCase()) {
            datatosend = datatosend + "fname='" + fname + "',";
            workdone = workdone + " :FathersName[P]=" + prev_fname + " [N]=" + fname;
        }
        if (prev_foccup.toLowerCase() != foccup.toLowerCase()) {
            datatosend = datatosend + "foccup='" + foccup + "',";
            workdone = workdone + " :FathersOccup.[P]=" + prev_foccup + " [N]=" + foccup;
        }
        if (prev_fphoneno.toLowerCase() != fphoneno.toLowerCase()) {
            datatosend = datatosend + "fphoneno='" + fphoneno + "',";
            workdone = workdone + " :FathersNo.[P]=" + prev_fphoneno + " [N]=" + fphoneno;
        }
        if (prev_f_annualincome.toLowerCase() != f_annualincome.toLowerCase()) {
            datatosend = datatosend + "f_annualincome='" + f_annualincome + "',";
            workdone = workdone + " :FathersAnnualIncome[P]=" + prev_f_annualincome + " [N]=" + f_annualincome;
        }
        if (prev_f_emailid.toLowerCase() != f_emailid.toLowerCase()) {
            datatosend = datatosend + "f_emailid='" + f_emailid + "',";
            workdone = workdone + " :FathersEmailID[P]=" + prev_f_emailid + " [N]=" + f_emailid;
        }
        if (prev_mname.toLowerCase() != mname.toLowerCase()) {
            datatosend = datatosend + "mname='" + mname + "',";
            workdone = workdone + " :MotherName[P]=" + prev_mname + " [N]=" + mname;
        }
        if (prev_moccup.toLowerCase() != moccup.toLowerCase()) {
            datatosend = datatosend + "moccup='" + moccup + "',";
            workdone = workdone + " :MothersOccup.[P]=" + prev_moccup + " [N]=" + moccup;
        }
        if (prev_mphoneno.toLowerCase() != mphoneno.toLowerCase()) {
            datatosend = datatosend + "mphoneno='" + mphoneno + "',";
            workdone = workdone + " :MothersNo.[P]=" + prev_mphoneno + " [N]=" + mphoneno;
        }
        if (prev_m_annualincome.toLowerCase() != m_annualincome.toLowerCase()) {
            datatosend = datatosend + "m_annualincome='" + m_annualincome + "',";
            workdone = workdone + " :MothersAnnualIncome[P]=" + prev_m_annualincome + " [N]=" + m_annualincome;
        }
        if (prev_m_emailid.toLowerCase() != m_emailid.toLowerCase()) {
            datatosend = datatosend + "m_emailid='" + m_emailid + "',";
            workdone = workdone + " :MothersEmailID[P]=" + prev_m_emailid + " [N]=" + m_emailid;
        }
        if (Number(prev_role) != Number(role)) {
            var previous_role_text = "";
            for (var loop = 0; loop < document.getElementById("role").length; loop++) {
                if (Number(document.getElementById("role").options[loop].value) == Number(prev_role)) {
                    previous_role_text = document.getElementById("role").options[loop].text;
                    break;
                }
            }
            datatosend = datatosend + "role=" + document.getElementById("role").value + ",";
            workdone = workdone + " :ResultOfLastExam[P]=" + previous_role_text + " [N]=" + document.getElementById("role").options[document.getElementById("role").selectedIndex].text;
        }
        if (prev_nostr.toLowerCase() != nostr.toLowerCase()) {
            datatosend = datatosend + "nostr='" + nostr + "',";
            workdone = workdone + " :NameOfSchoolTcRecieved[P]=" + prev_nostr + " [N]=" + nostr;
        }
        var temp_array_dotsla = new Array();
        temp_array_dotsla = dotsla.split("-");
        if (prev_dotsla.length < 2) prev_dotsla = "00-00-0000";
        var temp_array_previous_dotsla = new Array();
        temp_array_previous_dotsla = prev_dotsla.split("-");
        if ((Number(temp_array_previous_dotsla[0]) != Number(temp_array_dotsla[0])) || (Number(temp_array_previous_dotsla[1]) != Number(temp_array_dotsla[1])) || (Number(temp_array_previous_dotsla[2]) != Number(temp_array_dotsla[2]))) {
            datatosend = datatosend + "dotsla='" + (temp_array_dotsla[2] + "-" + temp_array_dotsla[1] + "-" + temp_array_dotsla[0]) + "',";
            workdone = workdone + " :DateOnTcSchoolLastAttended[P]=" + prev_dotsla + " [N]=" + dotsla;
        }
        if (prev_classmintc.toLowerCase() != classmintc.toLowerCase()) {
            datatosend = datatosend + "classmintc='" + classmintc + "',";
            workdone = workdone + " :ClassMentionInTcRecieved[P]=" + prev_classmintc + " [N]=" + classmintc;
        }
        var temp_array_dowithdrawl = new Array();
        temp_array_dowithdrawl = dowithdrawl.split("-");
        if (prev_dowithdrawl.length < 2) prev_dowithdrawl = "00-00-0000";
        var temp_array_previous_dowithdrawl = new Array();
        temp_array_previous_dowithdrawl = prev_dowithdrawl.split("-");
        if ((Number(temp_array_previous_dowithdrawl[0]) != Number(temp_array_dowithdrawl[0])) || (Number(temp_array_previous_dowithdrawl[1]) != Number(temp_array_dowithdrawl[1])) || (Number(temp_array_previous_dowithdrawl[2]) != Number(temp_array_dowithdrawl[2]))) {
            datatosend = datatosend + "dowithdrawl='" + (temp_array_dowithdrawl[2] + "-" + temp_array_dowithdrawl[1] + "-" + temp_array_dowithdrawl[0]) + "',";
            workdone = workdone + " :DateOfWithdrawl[P]=" + prev_dowithdrawl + " [N]=" + dowithdrawl;
        }
        if (prev_classinwls.toLowerCase() != classinwls.toLowerCase()) {
            datatosend = datatosend + "classinwls='" + classinwls + "',";
            workdone = workdone + " :ClassInWhichLastStudied[P]=" + prev_classinwls + " [N]=" + classinwls;
        } /* if( Number(prev_nottcr) != Number(nottcr) ) { datatosend=datatosend+"nottcr="+nottcr+","; workdone=workdone+" :No.OfTimeTCIssued[P]="+prev_nottcr+" [N]="+nottcr; } var temp_array_lastdateoftcrcv=new Array(); temp_array_lastdateoftcrcv=lastdateoftcrcv.split("-");if(prev_lastdateoftcrcv.length<2)prev_lastdateoftcrcv="0000-00-00";var temp_array_previous_lastdateoftcrcv=new Array();temp_array_previous_lastdateoftcrcv=prev_lastdateoftcrcv.split("-");if( (Number(temp_array_previous_lastdateoftcrcv[0])!= Number(temp_array_lastdateoftcrcv[0])) || (Number(temp_array_previous_lastdateoftcrcv[1])!= Number(temp_array_lastdateoftcrcv[1])) || (Number(temp_array_previous_lastdateoftcrcv[2]) != Number(temp_array_lastdateoftcrcv[2])) ){datatosend=datatosend+"lastdateoftcrcv='"+lastdateoftcrcv+"',";workdone=workdone+" :LastDateOfTcIssued[P]="+prev_lastdateoftcrcv+" [N]="+lastdateoftcrcv;}*/
        if (datatosend.length == 0) {
            alert('Nothing To Update');
            document.getElementById("name").focus();
            return false;
        }
        datatosend = datatosend.substring(0, datatosend.length - 1);
        var msg = "\n\n******* SR Record Is Updated For Below Details ******* \n\n";
        msg = msg + "SR No. = [" + srno + " " + srpostfix + "]\n";
        msg = msg + "Name = [" + name + "]\n";
        var con = confirm("Are You Sure Want To Continue " + msg);
        if (con == false) return false;
        loadPopup('2');
    } catch (e) {
        alert(e + " Exception At Client Side In AddSTudentToSr -> OnSubmitt");
        document.getElementById("name").focus();
        return false;
    }
}
function addtosr() {
    try {
        xmlhttp = null;
        xmlhttp = new XMLHttpRequest();
        var url = "whichbutton=addtosr";
        url = url + "&workdone=" + escape(workdone);
        url = url + "&datatosend=" + escape(datatosend);
        url = url + "&srno=" + document.getElementById("srno").value;
        url = url + "&srpostfix=" + document.getElementById("srpostfix").value;
        url = url + "&currentfinancialyear=" + document.getElementById("currentfinancialyear").value;
        url = url + "&txtuser=" + document.getElementById("txtuser").value;
        url = url + "&code=" + document.getElementById("code").value;
        xmlhttp.onreadystatechange = handleServerResponse_addtosr;
        xmlhttp.open("POST", "savesr", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.setRequestHeader("Content-length", url.length);
        xmlhttp.send(url);
    } catch (e) {
        alert(e + " Exception At Client Side In AddSTudentToSr -> Addtosr");
        document.getElementById("name").focus();
        return false;
    }
}
function handleServerResponse_addtosr() {
    try {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                if (xmlhttp.getResponseHeader("Content-Type").indexOf("text/html") >= 0) {
                    var responsee = xmlhttp.responseText;
                    if (isNaN(responsee)) {
                        alert(" [ Server Error ] " + responsee);
                        disablePopup();
                        document.getElementById("name").focus();
                        return false;
                    }
                }
                displayblinktext('idspandisplaysave', 'Record Updated', '0');
                xmlhttp = null;
                disablePopup();
                resett();
                document.getElementById("srno").focus();
            } else {
                disablePopup();
                document.getElementById("srno").focus();
                alert("Exception During Asynchronous Javascript And XML Call. Error No. 8002");
            }
        }
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentTosr -> HandleServerResponse_addtosr");
        document.getElementById("srno").focus();
        disablePopup();
        return false;
    }
}
function resett() {
    try {
        var completedate = document.getElementById("completedate").value;
        prev_name = "";
        prev_doj = completedate;
        prev_dob = completedate;
        prev_address = "";
        prev_peraddress = "";
        prev_gender = "";
        prev_nationality = "0";
        prev_religion = "0";
        prev_bloodgroup = "0";
        prev_cast = "0";
        prev_emailid = "";
        prev_studphoneno = "";
        prev_landlineno = "";
        prev_bsis = "";
        prev_subjects = "";
        prev_class_applied_for = "";
        prev_board_regno = "";
        prev_ssno = "";
        prev_fname = "";
        prev_foccup = "";
        prev_fphoneno = "";
        prev_f_annualincome = "";
        prev_f_emailid = "";
        prev_mname = "";
        prev_moccup = "";
        prev_mphoneno = "";
        prev_m_annualincome = "";
        prev_m_emailid = "";
        prev_role = "0";
        prev_nostr = "";
        prev_dotsla = completedate;
        prev_classmintc = "";
        prev_dowithdrawl = '01-01-1000';
        prev_classinwls = "";
        prev_nottcr = "";
        prev_lastdateoftcrcv = "01-01-1000";
        prev_tcnoallot = "0";
        document.getElementById("name").value = "";
        $('#doj').val(prev_doj);
        $('#dob').val(prev_dob);
        document.getElementById("address").value = "";
        document.getElementById("peraddress").value = "";
        document.getElementById("gender").value = "M";
        document.getElementById("nationality").value = "0";
        document.getElementById("religion").value = "0";
        document.getElementById("bloodgroup").value = "0";
        document.getElementById("cast").value = "0";
        document.getElementById("emailid").value = "";
        document.getElementById("studphoneno").value = "";
        document.getElementById("landlineno").value = "";
        document.getElementById("bsis").value = "";
        for (var innerloop = 0; innerloop < array_subjectid.length; innerloop++) {
            var idd = "subjects" + array_subjectid[innerloop];
            if (document.getElementById(idd) != null) document.getElementById(idd).checked = false;
        }
        document.getElementById("board_regno").value = "";
        document.getElementById("ssno").value = "";
        document.getElementById("fname").value = "";
        document.getElementById("foccup").value = "";
        document.getElementById("fphoneno").value = "";
        document.getElementById("f_annualincome").value = "";
        document.getElementById("f_emailid").value = "";
        document.getElementById("mname").value = "";
        document.getElementById("moccup").value = "";
        document.getElementById("mphoneno").value = "";
        document.getElementById("m_annualincome").value = "";
        document.getElementById("m_emailid").value = "";
        document.getElementById("role").value = "";
        document.getElementById("nostr").value = "";
        $('#dotsla').val(prev_dotsla);
        document.getElementById("classmintc").value = "";
        $('#dowithdrawl').val(prev_dowithdrawl);
        document.getElementById("classinwls").value = "";
        document.getElementById("nottcr").value = 0;
        $('#lastdateoftcrcv').val(prev_dowithdrawl);
        document.getElementById("tcnoallot").value = 0;
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentTosr -> Resett");
        document.getElementById("srno").focus();
        return false;
    }
}
var referenceone = function add_nooferror_classes() {
    try {
        if (school_local_db_data == false) return;
        if (school_local_db_data == null) return;
        if (school_local_db_data.length < 2) return; /* section,alias,createdon,runningupto,active */
        var local_array_for_row = new Array();
        local_array_for_row = school_local_db_data.split("#");
        var index_of_class = -1;
        for (var loop = 0; loop < local_array_for_row.length; loop++) {
            var local_array_for_col = new Array();
            local_array_for_col = local_array_for_row[loop].split("~");
            if (loop == 0) /* denotes column name */
            {
                for (var innerloop = 0; innerloop < local_array_for_col.length; innerloop++) {
                    if (local_array_for_col[innerloop].toLowerCase() == "class") {
                        index_of_class = innerloop;
                        break;
                    }
                }
                if (index_of_class == -1) {
                    alert('Column Class Not Found In Class_Section');
                    break;
                }
                continue;
            }
            var option = new Option(local_array_for_col[index_of_class], j);
            var j = document.getElementById("class_applied_for").length;
            document.getElementById("class_applied_for").options.add(option, j);
            document.getElementById("class_applied_for").options[j].value = local_array_for_col[index_of_class];
            var option1 = new Option(local_array_for_col[index_of_class], j);
            j = document.getElementById("classmintc").length;
            document.getElementById("classmintc").options.add(option1, j);
            document.getElementById("classmintc").options[j].value = local_array_for_col[index_of_class];
            option = null;
            local_array_for_col = null;
        }
        local_array_for_row = null;
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentToSr -> Add_nooferror_classes");
        return false;
    }
};
var referencetwo = function cast_nationality_role() {
    try {
        if (school_local_db_data == false) return;
        if (school_local_db_data == null) return;
        if (school_local_db_data.length < 2) return; /* class,alias,orderby,active,createdon,runningupto */
        var local_array_for_row = new Array();
        local_array_for_row = school_local_db_data.split("#");
        var index_of_castid = -1;
        var index_of_cast = -1;
        var index_of_nationalityid = -1;
        var index_of_nationality = -1;
        var index_of_roexamid = -1;
        var index_of_roexam = -1;
        for (var loop = 0; loop < local_array_for_row.length; loop++) {
            var local_array_for_col = new Array();
            local_array_for_col = local_array_for_row[loop].split("~");
            if (loop == 0) /* denotes column name */
            {
                for (var innerloop = 0; innerloop < local_array_for_col.length; innerloop++) {
                    if (local_array_for_col[innerloop].toLowerCase() == "castid") index_of_castid = innerloop;
                    if (local_array_for_col[innerloop].toLowerCase() == "cast") index_of_cast = innerloop;
                    if (local_array_for_col[innerloop].toLowerCase() == "nationalityid") index_of_nationalityid = innerloop;
                    if (local_array_for_col[innerloop].toLowerCase() == "nationality") index_of_nationality = innerloop;
                    if (local_array_for_col[innerloop].toLowerCase() == "roexamid") index_of_roexamid = innerloop;
                    if (local_array_for_col[innerloop].toLowerCase() == "roexam") index_of_roexam = innerloop;
                }
                if (index_of_castid == -1 || index_of_cast == -1 || index_of_nationalityid == -1 || index_of_nationality == -1 || index_of_roexamid == -1 || index_of_roexam == -1) {
                    alert('Column Not Found In Nationality_Cast_Role');
                    break;
                }
                continue;
            }
            if (Number(local_array_for_col[index_of_castid]) > 0) {
                var j = document.getElementById("cast").length;
                var option = new Option(local_array_for_col[index_of_cast], j);
                document.getElementById("cast").options.add(option, j);
                document.getElementById("cast").options[j].value = local_array_for_col[index_of_castid];
            }
            if (Number(local_array_for_col[index_of_nationalityid]) > 0) {
                var j = document.getElementById("nationality").length;
                var option1 = new Option(local_array_for_col[index_of_nationality], j);
                document.getElementById("nationality").options.add(option1, j);
                document.getElementById("nationality").options[j].value = local_array_for_col[index_of_nationalityid];
            }
            if (Number(local_array_for_col[index_of_roexamid]) > 0) {
                var j = document.getElementById("role").length;
                var option2 = new Option(local_array_for_col[index_of_roexam], j);
                document.getElementById("role").options.add(option2, j);
                document.getElementById("role").options[j].value = local_array_for_col[index_of_roexamid];
            }
            local_array_for_col = null;
        }
        local_array_for_row = null;
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentToSr -> Cast_nationality_role");
        return false;
    }
};
var referencethree = function religion_bloodgroup() {
    try {
        if (school_local_db_data == false) return;
        if (school_local_db_data == null) return;
        if (school_local_db_data.length < 2) return; /* class,alias,orderby,active,createdon,runningupto */
        var local_array_for_row = new Array();
        local_array_for_row = school_local_db_data.split("#");
        var index_of_id = -1;
        var index_of_religion = -1;
        var index_of_bloodgroupid = -1;
        var index_of_bloodgroup = -1;
        for (var loop = 0; loop < local_array_for_row.length; loop++) {
            var local_array_for_col = new Array();
            local_array_for_col = local_array_for_row[loop].split("~");
            if (loop == 0) /* denotes column name */
            {
                for (var innerloop = 0; innerloop < local_array_for_col.length; innerloop++) {
                    if (local_array_for_col[innerloop].toLowerCase() == "id") index_of_id = innerloop;
                    if (local_array_for_col[innerloop].toLowerCase() == "religion") index_of_religion = innerloop;
                    if (local_array_for_col[innerloop].toLowerCase() == "bloodgroupid") index_of_bloodgroupid = innerloop;
                    if (local_array_for_col[innerloop].toLowerCase() == "bloodgroup") index_of_bloodgroup = innerloop;
                }
                if (index_of_id == -1 || index_of_religion == -1 || index_of_bloodgroupid == -1 || index_of_bloodgroup == -1) {
                    alert('Column Not Found In Religion_Bloodgroup');
                    break;
                }
                continue;
            }
            if (Number(local_array_for_col[index_of_id]) > 0) {
                var j = document.getElementById("religion").length;
                var option = new Option(local_array_for_col[index_of_religion], j);
                document.getElementById("religion").options.add(option, j);
                document.getElementById("religion").options[j].value = local_array_for_col[index_of_id];
            }
            if (Number(local_array_for_col[index_of_bloodgroupid]) > 0) {
                var j = document.getElementById("bloodgroup").length;
                var option1 = new Option(local_array_for_col[index_of_bloodgroup], j);
                document.getElementById("bloodgroup").options.add(option1, j);
                document.getElementById("bloodgroup").options[j].value = local_array_for_col[index_of_bloodgroupid];
            }
            local_array_for_col = null;
        }
        local_array_for_row = null;
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentToSr -> Religion_Bloodgroup");
        return false;
    }
};
var array_subjectid = new Array();
var array_subjectname = new Array();
var referencefour = function add_subjects() {
    try {
        if (school_local_db_data == false) return;
        if (school_local_db_data == null) return;
        if (school_local_db_data.length < 2) return; /* class,alias,orderby,active,createdon,runningupto */
        var local_array_for_row = new Array();
        local_array_for_row = school_local_db_data.split("#");
        var index_of_id = -1;
        var index_of_sub = -1;
        for (var loop = 0; loop < local_array_for_row.length; loop++) {
            var local_array_for_col = new Array();
            local_array_for_col = local_array_for_row[loop].split("~");
            if (loop == 0) /* denotes column name */
            {
                for (var innerloop = 0; innerloop < local_array_for_col.length; innerloop++) {
                    if (local_array_for_col[innerloop].toLowerCase() == "id") index_of_id = innerloop;
                    if (local_array_for_col[innerloop].toLowerCase() == "sub") index_of_sub = innerloop;
                }
                if (index_of_id == -1 || index_of_sub == -1) {
                    alert('Column Not Found In Subjects');
                    break;
                }
                continue;
            }
            array_subjectid[array_subjectid.length] = local_array_for_col[index_of_id];
            array_subjectname[array_subjectname.length] = local_array_for_col[index_of_sub];
            local_array_for_col = null;
        }
        local_array_for_row = null;
        var table = null; /*This initializes a table */
        table = document.getElementById("idtable");
        var rowCount = table.rows.length; /*this variable holds the length of rows in the table */
        var tr = document.createElement('tr');
        tr.align = "left";
        var noofcols = 0;
        for (var loop = 0; loop < array_subjectid.length; loop++) {
            if (noofcols % 10 == 0 && noofcols != 0) {
                table.getElementsByTagName("tbody")[0].appendChild(tr);
                tr = document.createElement('tr');
                tr.align = "left";
                noofcols = 0;
            }
            var td = null;
            td = document.createElement('td');
            td.noWrap = true;
            td.innerHTML = array_subjectname[loop];
            tr.appendChild(td);
            var element = document.createElement("input");
            element.setAttribute("type", "checkbox");
            element.setAttribute("value", array_subjectid[loop]);
            element.setAttribute("id", "subjects" + array_subjectid[loop]);
            td = null;
            td = document.createElement('td');
            td.noWrap = true;
            td.appendChild(element);
            tr.appendChild(td);
            td = null;
            td = document.createElement('td');
            td.noWrap = true;
            td.innerHTML = ' &nbsp; &nbsp; ';
            tr.appendChild(td);
            noofcols = noofcols + 2;
        } /* for(var loop=0;loop<array_subjectid.length;loop++)*/
        table.getElementsByTagName("tbody")[0].appendChild(tr);
    } catch (e) {
        alert(e + " Exception At Client Side In AddStudentToSr -> Add_Subjects");
        return false;
    }
};
var popupStatus = 0;

function loadPopup(indexx) {
    try {
        if (popupStatus == 0) {
            $("#backgroundPopup").css({
                "opacity": ".6"
            });
            if (Number(indexx) == 0) $("#backgroundPopup").fadeIn(300, school_local_db_get_data);
            if (Number(indexx) == 1) $("#backgroundPopup").fadeIn(300, getData_based_on_srno);
            if (Number(indexx) == 2) $("#backgroundPopup").fadeIn(300, addtosr);
            popupStatus = 1;
        }
    } catch (e) {
        alert(e + " Error In Loadpopup");
        return false;
    }
}
function disablePopup() {
    try {
        if (popupStatus == 1) {
            $("#backgroundPopup").fadeOut(300);
            popupStatus = 0;
        }
    } catch (e) {
        alert(e + " Error In Disablepopup");
        return false;
    }
}
var school_local_db_tablename_array = new Array();
school_local_db_tablename_array[0] = "nooferror.class_section";
school_local_db_tablename_array[1] = "nooferror.cast_nationality_exam";
school_local_db_tablename_array[2] = "nooferror.religion_bloodgroup";
school_local_db_tablename_array[3] = "nooferror.subjects";
var school_local_db_function_array = new Array();
school_local_db_function_array[0] = referenceone;
school_local_db_function_array[1] = referencetwo;
school_local_db_function_array[2] = referencethree;
school_local_db_function_array[3] = referencefour;
school_local_db_synchronized = 0;
loadPopup('0');