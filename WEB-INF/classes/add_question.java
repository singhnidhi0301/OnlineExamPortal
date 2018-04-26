import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;
public class add_question extends HttpServlet
{
	public void doPost(HttpServletRequest request,HttpServletResponse response)
		throws ServletException ,IOException
		{
			try
			{
				String question=request.getParameter("question");
				String option_a=request.getParameter("option_a");
				String option_b=request.getParameter("option_b");
				String option_c=request.getParameter("option_c");
				String option_d=request.getParameter("option_d");
				
				String correct_option=request.getParameter("correct_option");
				String library_id=request.getParameter("library_id");
				
				
				String admin_name =request.getParameter("admin_name");
				
				Class.forName("com.mysql.jdbc.Driver").newInstance();
				Connection con=null;
				Statement st=null;
				ResultSet rt=null;
			
				con=DriverManager.getConnection("jdbc:mysql://localhost:3306/exam_portal","root","root");
				st=con.createStatement();
			
				int question_id=0;
				rt=st.executeQuery("select max(question_id) from question_bank");
				while(rt.next())
				{
					question_id=rt.getInt(1);
				}
				rt.close();
				question_id++;
			
				StringBuffer query=new StringBuffer(1024);
				query.append("insert into question_bank (question_id,question,option_A,option_B,option_C,option_D,correct_opt,section_id,admin_name");
				query.append(") values (").append(question_id).append(",'");
				query.append(question).append("','").append(option_a).append("','").append(option_b).append("','").append(option_c).append("','").append(option_d);
				query.append("','").append(correct_option).append("',").append(library_id);
				query.append(",'").append(admin_name).append("' )");
					
			
			    System.out.println(query.toString());
			
				st.executeUpdate(query.toString());
			
				st.close();
				con.close();
				
				request.setAttribute("question_id",question_id);
				RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/success.jsp");
				d.forward(request,response);
				}
				catch(Exception e)
				{
					System.out.println(e);
				}
			}
}		
									