import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;
public class student_dashboard extends HttpServlet
{
	public void doPost(HttpServletRequest request,HttpServletResponse response)
	throws ServletException,IOException
	{
			if(request.getParameter("take_test")!=null)
		{
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/add_question.jsp");
			d.forward(request,response);
			return;
		}
		try
		{
				Class.forName("com.mysql.jdbc.Driver").newInstance();
				Connection con=null;
				Statement st=null;
				ResultSet rt=null;
			
				con=DriverManager.getConnection("jdbc:mysql://localhost:3306/exam_portal","root","root");
				st=con.createStatement();
			
				int id=0;
				rt=st.executeQuery("select max(id) from take_test");
				while(rt.next())
				{
					id=rt.getInt(1);
				}
				rt.close();
				id++;
			
				StringBuffer query=new StringBuffer(1024);
				
				String test_id="";
				String test[]=request.getParameterValues("test");
				
				for(int i=0;i<test.length;i++)
				{
					 System.out.println( test[i]);
					 
					 query.delete(0,query.length());
					 query.append("insert into take_test (id,test_id) values(").append(id);
					 query.append(",").append(test[i]).append(")");
					  
					  System.out.println(query.toString()); 
					  
				  st.executeUpdate(query.toString());
				}
				
			
				st.close();
				con.close();
				
				request.setAttribute("id",id);
				//RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/success.jsp");
				//d.forward(request,response);
				}
				catch(Exception e)
				{
					System.out.println(e);
				}
			}
				
	}
