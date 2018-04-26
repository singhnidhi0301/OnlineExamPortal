import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
public class show_question_for_student extends HttpServlet
{

public void doGet(HttpServletRequest request,HttpServletResponse response)
	throws ServletException,IOException
	{
		doPost(request,response);

     }
	public void doPost(HttpServletRequest request,HttpServletResponse response)
	throws ServletException,IOException
	{
		
	if(request.getParameter("complete")!=null)
		{
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/complete.jsp");
			d.forward(request,response);
			return;
		}
	}
}