import javax.servlet.*;
import javax.servlet .http.*;
import java.io.*;
import java.sql.*;
public class login extends HttpServlet
{
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException,IOException
	{
	try
	{
		String html_name=request.getParameter("name");
		String html_pwd=request.getParameter("pwd");
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		Connection con=null;
		Statement st=null;
		ResultSet rt=null;
		con=DriverManager.getConnection("jdbc:mysql://localhost:3306/exam_portal","root","root");
		st=con.createStatement();
		int found=0;
		rt=st.executeQuery("select student_name,pwd from student");
		while(rt.next())
		{
			String db_name=rt.getString("student_name");
			String db_pwd=rt.getString("pwd");
			if(db_name.equals(html_name))
			{
			if(db_pwd.equals(html_pwd))
			{
				found=1;
				break;
			}
			}
		}
		rt.close();
		st.close();
		con.close();
		PrintWriter out=response.getWriter();
		out.print("<html><body>Message from server<br>");
		out.print("student id is "+html_name+"<br>");
		out.print(" password is "+html_pwd+"<br>");
		/*if(found==1)
		{
			out.print("<br><br>you are valid user");
		}
		else
		{
			out.print("<br><br>you are invalid user");	
		}
		out.print("</body></html>");*/
		if(found==1)
		{
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/student_dashboard.jsp");
			d.forward(request,response);
		}
		else
		{
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/invalid_user.jsp");
			d.forward(request,response);
		}
	}
	catch(Exception e)
	{
	 	System.out.println(e);
	}
	}
}