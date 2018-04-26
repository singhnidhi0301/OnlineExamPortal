import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;
public class add_student extends HttpServlet
{
	public void doPost(HttpServletRequest request,HttpServletResponse response)
		throws ServletException ,IOException
		{
			try
			{
				String name=request.getParameter("name");
				String student_id=request.getParameter("student_id");
				String password=request.getParameter("pwd");
				String school_id=request.getParameter("school_id");
				
				
				Class.forName("com.mysql.jdbc.Driver").newInstance();
				Connection con=null;
				Statement st=null;
				ResultSet rt=null;
			
				
				con=DriverManager.getConnection("jdbc:mysql://localhost:3306/exam_portal","root","root");
				st=con.createStatement();
			
				int id=100;
				rt=st.executeQuery("select max(id) from student");
				while(rt.next())
				{
					id=rt.getInt(1);
				}
				rt.close();
				id++;
			
				StringBuffer query=new StringBuffer(1024);
				query.append("insert into student (id,pwd,school_id,student_name");
				query.append(") values (").append(id).append(",'");
				query.append(password).append("','").append(school_id).append("','").append(name).append("')");
				
			
			    System.out.println(query.toString());
			
				st.executeUpdate(query.toString());
			
				st.close();
				con.close();
				request.setAttribute("id",id);
				
				RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/student_success.jsp");
				d.forward(request,response);
				}
				catch(Exception e)
				{
					System.out.println(e);
				}
			}
}		
									