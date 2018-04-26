<html>
<head>
<Script type ="text/javascript">
function onsubmitt()
{
	try
	{
		var admin_name=document.getElementById("admin_name").value;
		var pwd=document.getElementById("admin_password").value;
		var school_id=document.getElementById("school_id").value;
		if(admin_name.length<4)
		{
			alert("incorrect admin name");
			document.getElementById("admin_name").focus();
			return false;
		}
		for(var loop=0;loop<admin_name.length;loop++)
		{
			var ch=admin_name.charAt(loop);
			if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z') || ch==' ')
			{
			}
			else
			{
				alert("Invalid admin name");
				document.getElementById("admin_name").focus();
				return false;
			}
		}
		if(pwd.length<2)
		{
			alert("Incorrect password");
			return false;
		}
		if(school_id.length<=0)
		{
			alert("incorrect school id");
			document.getElementById("school_id").focus();
			return false;
		}
		for(var loop=0;loop<school_id.length;loop++)
		{
			var ch=school_id.charAt(loop);
			if(ch>='0'&&ch<='9')
			{
			}
			else
			{
				alert("Invalid school_id");
				document.getElementById("school_id").focus();
				return false;
			}
		}
		var c=confirm(" Are you sure you want to conitnue");
		if(c==false)
		return false;
		else
		return true;
	}
	catch(e)
	{
		alert(e);
		console.log(e);
		return false;
	}
}
</script>
</head>
<body>
<form method="post" action="add_admin" onsubmit=" return onsubmitt()">
<table>

<tr><td>Admin name:</td>
<td>
<input type="text" name="admin_name"
id="admin_name" value=""
maxlength="10">
</td></tr>
<tr>
<td><b>Admin Password:</b></td>
<td><input type="password" name="admin_password" id="admin_password"></td>
</tr>
<tr>
<td>School Id:</td>
<td><input type="text" name="school_id"
id="school_id" maxLength="8">
</td></tr>
<tr>
<td><input type="submit" value="submit">
</td></tr>
<input type="button" value="Go back!" onclick="history.back()"></input>

</table>
</form>
</body>
</html>