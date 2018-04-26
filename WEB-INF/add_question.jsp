<html>
<head>
<Script type ="text/javascript">
function onsubmitt()
{
	try
	{
		var admin_name=document.getElementById("admin_name").value;
		if(admin_name.length<4)
		{
			alert("admin name required");
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
<form method="post" action="add_question" onsubmit=" return onsubmitt()">
<table>
<tr><td>Question:</td>
<td>
<textarea rows="10" cols="25"
name="question" id="question"></textarea>
</td></tr>
<tr>
<td> Option A:</td>
<td><textarea rows="10" cols="25" name="option_a"
id="option_A" ></textarea>
</td></tr>
<tr>
<td> Option B:</td>
<td><textarea rows="10" cols="25" name="option_b"
id="option_B" ></textarea>
</td></tr>
<tr>
<td> Option C:</td>
<td><textarea rows="10" cols="25" name="option_c"
id="option_C" ></textarea>
</td></tr>
<tr>
<td> Option D:</td>
<td><textarea rows="10" cols="25" name="option_d"
id="option_D" ></textarea>
</td></tr>
<tr>
<td>Correct Option</td>
<td><input type="radio" name="correct_option" id="A" value="1" checked>A
<input type="radio" name="correct_option" id="B" value="2">B
<input type="radio" name="correct_option" id="C" value="3">C
<input type="radio" name="correct_option" id="D" value="4">D
</td></tr>
<tr>
<td>Library Id:</td>
<td>
<select name="library_id" id="library_id">
<option value="1">Algorithm
</option>
<option value="2">java
</option>
<option value="3">c
</option>
<option value="4">c++
</option>
</select></td></tr>
<tr><td>Admin Name:</td>
<td>
<input type="text" name="admin_name" id="admin_name" >
</td></tr>
<tr>
<tr>
<td><input type="submit" value="submit">
</td></tr>
<input type="button" value="Go back!" onclick="history.back()"></input>

</table>
</form>
</body>
</html>