import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;
public class test extends HttpServlet
{
	public void doPost(HttpServletRequest request,HttpServletResponse response)
		throws ServletException ,IOException
		{
			try
			{
				String start_time=request.getParameter("start_time");
				String end_time=request.getParameter("end_time");
				String start_date=request.getParameter("start_date");
				String end_date=request.getParameter("end_date");
				String status=request.getParameter("status");
				
				String question_id="";
				String question[]=request.getParameterValues("question");
					
					    System.out.println( question);				

				String cat=request.getParameter("cat");

				String remark =request.getParameter("remark");
			
				Class.forName("com.mysql.jdbc.Driver").newInstance();
				Connection con=null;
				Statement st=null;
				ResultSet rt=null;
			
				con=DriverManager.getConnection("jdbc:mysql://localhost:3306/exam_portal","root","root");
				st=con.createStatement();
			
				int test_id=0;
				rt=st.executeQuery("select max(test_id) from test");
				while(rt.next())
				{
					test_id=rt.getInt(1);
				}
				rt.close();
				test_id++;
			
				StringBuffer query=new StringBuffer(1024);
				query.append("insert into test (start_date,end_date,start_time,end_time,test_category,status,remark,test_id");
				query.append(") values (").append("'").append(start_date).append("','");
				query.append(end_date).append("','").append(start_time).append("','").append(end_time);
				query.append("','").append(cat).append("','").append(status).append("','").append(remark).append("',");
				query.append(test_id).append(")");
					
			
			    System.out.println(query.toString());
			
				st.executeUpdate(query.toString());
				
				
				for(int i=0;i<question.length;i++)
				{
					 System.out.println( question[i]);
					 
					 query.delete(0,query.length());
					 query.append("insert into test_question (test_id,question_id) values(").append(test_id);
					 query.append(",").append(question[i]).append(")");
					  
					  System.out.println(query.toString()); 
					  
				  st.executeUpdate(query.toString());
				}
				
				query.delete(0,query.length());
				query.append("update test set url='").append(remark).append("_").append(test_id).append("'").append(" where test_id=").append(test_id);
				System.out.println(query.toString());
					  
				st.executeUpdate(query.toString());
				
				st.close();
				con.close();
				
				request.setAttribute("test_id",test_id);
				RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/test_success.jsp");
				d.forward(request,response);
				}
				catch(Exception e)
				{
					 e.printStackTrace();
					System.out.println(e);
				}
			}
}		
									