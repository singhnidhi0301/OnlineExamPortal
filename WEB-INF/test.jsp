<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<html>
<head>
<Script type ="text/javascript">
function onsubmitt()
{
	try
	{
		var start_date=document.getElementById("start_date").value;
		var end_date=document.getElementById("end_date").value;
		var start_time=document.getElementById("start_time").value;
		var end_time=document.getElementById("end_time").value;
		var remark=document.getElementById("remark").value;
		if(start_date.length<10)
		{
			alert("Incorrect date");
			document.getElementById("start_date").focus();
			return false;
		}
		for(var loop=0;loop<start_date.length;loop++)
		{
			var ch=start_date.charAt(loop);
			if((ch>='0'&&ch<='9')|| (ch=='-') || (ch==':') || (ch=='/'))
			{
			}
			else
			{
				alert("Invalid date");
				document.getElementById("start_date").focus();
				return false;
			}
		}
		if(end_date.length<10)
		{
			alert("Incorrect date");
			document.getElementById("end_date").focus();
			return false;
		}
		for(var loop=0;loop<end_date.length;loop++)
		{
			var ch=end_date.charAt(loop);
			if((ch>='0'&&ch<='9')|| (ch=='-') || (ch==':') || (ch=='/'))
			{
			}
			else
			{
				alert("Invalid date");
				document.getElementById("end_date").focus();
				return false;
			}
		}
		
		if(start_time.length<8)
		{
			alert("Incorrect time");
			document.getElementById("start_time").focus();
			return false;
		}
		for(var loop=0;loop<start_time.length;loop++)
		{
			var ch=start_time.charAt(loop);
			if((ch>='0'&&ch<='9')|| (ch=='-') || (ch==':'))
			{
			}
			else
			{
				alert("Invalid time");
				document.getElementById("start_time").focus();
				return false;
			}
		}
		if(end_time.length<8)
		{
			alert("Incorrect time");
			document.getElementById("end_time").focus();
			return false;
		}
		for(var loop=0;loop<end_time.length;loop++)
		{
			var ch=end_time.charAt(loop);
			if((ch>='0'&&ch<='9')|| (ch=='-') || (ch==':'))
			{
			}
			else
			{
				alert("Invalid time");
				document.getElementById("end_time").focus();
				return false;
			}
		}
		if(remark.length<=0)
		{
			alert("Please enter remark");
			document.getElementById("remark").focus();
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
<form method="post" action="test" onsubmit=" return onsubmitt()" >
<table width="100%"><tr><td align="left">
</td>
</tr></table>
<br><br>
<table border="1" align="left" cellpadding="4" cellspacing="4">
<tr align="left" valign="top">
<td></td>
<td>question id</td>
<td>question</td>
<td>option_A</td>
<td>option_B</td>
<td>option_C</td>
<td>option_D</td>
</tr>
<%
try
{
	Class.forName("com.mysql.jdbc.Driver");
	Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/exam_portal","root","root");
	Statement st=con.createStatement();
	ResultSet rt=st.executeQuery("select question_id,question,option_A,option_B,option_C,option_D from question_bank");

	while(rt.next())
	{
		%>
			<tr>
			<td><input type="checkbox" name="question" value="<%=rt.getString("question_id")%>" ></td>
			<td><%=rt.getString("question_id")%></td>
			<td><%=rt.getString("question")%></td>
			<td><%=rt.getString("option_A")%></td>
			<td><%=rt.getString("option_B")%></td>
			<td><%=rt.getString("option_C")%></td>
			<td><%=rt.getString("option_D")%></td>
			</tr>
		<%

	}
	 rt.close();/*
				String question_id="";
				String question[]=request.getParameterValues("question");
				for(int i=0;i<question.length;i++)
				{
					question_id+=question[i]+" ";
				}
					
				int i=st.executeUpdate("insert into test_question(question_id) values ('"+question_id+"')");
				*/
	st.close();
	con.close();
}
catch(Exception e){
	out.print(e);
}
%>


</table>
<table>

<tr><td>Start Date:</td>
<td>
<input type="text" name="start_date" id="start_date" >
</td></tr>
<tr>
<td> End Date:</td>
<td><input type="text" name="end_date" id="end_date" >
</td></tr>
<tr>
<td> Start Time:</td>
<td><input type="text" name="start_time" id="start_time" >
</td></tr>
<tr>
<td> End Time:</td>
<td><input type="text" name="end_time" id="end_time" >
</td></tr>
<tr>
<td>Category:</td>
<td>
<input type="radio" name="cat" id="hard" value="1" checked>Hard
<input type="radio" name="cat" id="soft" value="2">Soft
</td></tr>
<tr>
<tr>
<td> Remark:</td>
<td><input type="text" name="remark" id="remark" >
</td></tr>
<tr>
<td>Status:</td>
<td>
<select name="status" id="status">
<option value="c">Complete
</option>
<option value="r">Running
</option>
</select></td></tr>
<tr>
<tr>
<td><input type="submit" value="submit">
</td></tr>
<input type="button" value="Go back!" onclick="history.back()"></input>

</table>
</form>
</body>
</html>