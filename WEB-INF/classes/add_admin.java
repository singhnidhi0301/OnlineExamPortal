import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;
public class add_admin extends HttpServlet
{
	public void doPost(HttpServletRequest request,HttpServletResponse response)
		throws ServletException ,IOException
		{
			try
			{
				String user_id=request.getParameter("admin_name");
				String password=request.getParameter("admin_password");
				String school_id=request.getParameter("school_id");
				
				
				Class.forName("com.mysql.jdbc.Driver").newInstance();
				Connection con=null;
				Statement st=null;
				
				con=DriverManager.getConnection("jdbc:mysql://localhost:3306/exam_portal","root","root");
				st=con.createStatement();
				ResultSet rt=null;
			
				int admin_id=1000;
				rt=st.executeQuery("select max(admin_id) from admin");
				while(rt.next())
				{
					admin_id=rt.getInt(1);
				}
				rt.close();
				admin_id++;
			
				StringBuffer query=new StringBuffer(1024);
				query.append("insert into admin (user_id,pwd,school_id,admin_id");
				query.append(") values (").append("'").append(user_id).append("','");
				query.append(password).append("','").append(school_id).append("',").append(admin_id).append(")");
				
			
			    System.out.println(query.toString());
			
				st.executeUpdate(query.toString());
			
				st.close();
				con.close();
				request.setAttribute("admin_id",admin_id);
				
				RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/admin_success.jsp");
				d.forward(request,response);
				}
				catch(Exception e)
				{
					System.out.println(e);
				}
			}
}		
									