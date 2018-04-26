<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<html>
<body>
<input type="button" value="Go back!" onclick="history.back()"></input>
 <br>  <br>

<form method="post" action="test" >
<table width="100%"><tr><td align="left">
</td>
</tr></table>
<br><br>
<table border="1" align="left" cellpadding="4" cellspacing="4" align="center">
<tr align="left" valign="top">
</tr>
<%
try
{
	Class.forName("com.mysql.jdbc.Driver");
	Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/exam_portal","root","root");
	Statement st=con.createStatement();
	ResultSet rt=st.executeQuery("select test_id,remark from test");
	   
		 int  i=0;
		while(rt.next())
		{
			%>
				<tr>
				<td> <%=++i%> </td>
				<td> <a href="dashboard?student_click_url=yes&test_id=<%=rt.getInt("test_id")%>"> <%=rt.getString("remark")%> </a>   </td>
				</tr>
			<%
	     }
		 rt.close();
		 st.close();
		 con.close();
	}
	catch(Exception e)
	{
		out.print(e);
	}
%>


<tr>
<tr>
<td>
</td></tr>


</table>
</form>
</body>
</html>