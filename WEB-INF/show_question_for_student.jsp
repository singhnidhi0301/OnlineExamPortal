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

<table border="1"  cellpadding="4" cellspacing="4" align="center">
<tr align="left" valign="top">
</tr>
<%
try
{
  String test_id = request.getParameter("test_id");
  ArrayList<Integer> question_id = new ArrayList<Integer>();
     
  
	Class.forName("com.mysql.jdbc.Driver");
	Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/exam_portal","root","root");
	Statement st=con.createStatement();
	 StringBuffer query = new StringBuffer(128);
	  query.append("select question_id from test_question where test_id=").append(test_id).append(" order by question_id");
	  
	
			  ResultSet rt=st.executeQuery(query.toString());
	   		   while (rt.next() )
			  {
			    question_id.add( rt.getInt("question_id") );  
			  }
			  rt.close();
	   
	   
	   query.delete( 0,query.length());
	   query.append(" select question_id,question,option_A,option_B,option_C,option_D from  question_bank where question_id IN (");
	    for(int loop=0; loop<question_id.size(); loop++)
		  {
		    query.append( question_id.get(loop) );
			query.append( ",");
		    }
	   query.append("-1) ");
      rt= st.executeQuery( query.toString());	   
		 int  i=0;
		 int radio=1;
		while(rt.next())
		{
			%>
				<tr>
				<td> 
							<table align="center" cellpadding="3" cellspacing="3">
							  <tr>
							     <td align="left" valign="top"> <%=rt.getInt("question_id")%> </td>
								 <td colspan="3"  align="left" valign="top"> <%=rt.getString("question")%> </td>
							  </tr>
									  <tr align="left" valign="top">
									    <td> <input type="radio" name="radion<%=radio%>"> <%=rt.getString("option_A")%> </td>
									    <td>  <input type="radio" name="radion<%=radio%>"> <%=rt.getString("option_B")%> </td>
									    <td> <input type="radio" name="radion<%=radio%>"> <%=rt.getString("option_C")%> </td>
									    <td>  <input type="radio" name="radion<%=radio%>"> <%=rt.getString("option_D")%> </td>
									  </tr>
				  </table>
				
				 </td>
				</tr>
			<%
			radio++;
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


</table>
</form>
</body>
</html>