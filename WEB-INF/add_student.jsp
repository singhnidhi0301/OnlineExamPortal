<html>
<head>
<Script type ="text/javascript">
function onsubmitt()
{
	try
	{
		var name=document.getElementById("name").value;
		var school_id=document.getElementById("school_id").value;
		var pwd=document.getElementById("pwd").value;
		if(name.length<4)
		{
			alert("Incorrect name");
			document.getElementById("name").focus();
			return false;
		}
		for(var loop=0;loop<name.length;loop++)
		{
			var ch=name.charAt(loop);
			if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z') || ch==' ')
			{
			}
			else
			{
				alert("Invalid name");
				document.getElementById("name").focus();
				return false;
			}
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
				alert("Invalid school id");
				document.getElementById("school_id").focus();
				return false;
			}
		}
		if(pwd.length<4)
		{
			alert("Incorrect password");
			document.getElementById("pwd").focus();
			return false;
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
<form method="post" action="add_student" onsubmit=" return onsubmitt()" >
<table>
<tr><td>Student Name:</td>
<td>
<input type ="text" name="name"
id="name" value=""
maxlength="35">
</td></tr>
<tr><td>School Id:</td>
<td>
<input type="text" name="school_id" id="school_id" maxLength="7">
</td></tr>
<tr>
<td><b>password:</b></td>
<td><input type="password" name="Pwd" id="pwd"></td>
</tr>
<tr>
<td><input type="submit" value="submit">
</td></tr>
<input type="button" value="Go back!" onclick="history.back()"></input>

</table>
</form>
</body>
</html>