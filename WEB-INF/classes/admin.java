import javax.servlet.*;
import javax.servlet .http.*;
import java.io.*;
import java.sql.*;
public class admin extends HttpServlet
{
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException,IOException
	{
	try
	{
		String html_user_id=request.getParameter("user_id");
		String html_pwd=request.getParameter("pwd");
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		Connection con=null;
		Statement st=null;
		ResultSet rt=null;
		con=DriverManager.getConnection("jdbc:mysql://localhost:3306/exam_portal","root","root");
		st=con.createStatement();
		int found=0;
		rt=st.executeQuery("select user_id,pwd from admin");
		while(rt.next())
		{
			String db_user_id=rt.getString("user_id");
			String db_pwd=rt.getString("pwd");
			if(db_user_id.equals(html_user_id))
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
		out.print("admin id is "+html_user_id+"<br>");
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
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/dashboard.jsp");
			d.forward(request,response);
		}
	/*	else
		{
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/invalid_user.jsp");
			d.forward(request,response);
		}*/	
	}
	catch(Exception e)
	{
	 	System.out.println(e);
	}
	}
}