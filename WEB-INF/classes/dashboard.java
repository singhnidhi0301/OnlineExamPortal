import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
public class dashboard extends HttpServlet
{

public void doGet(HttpServletRequest request,HttpServletResponse response)
	throws ServletException,IOException
	{
		doPost(request,response);

     }
	public void doPost(HttpServletRequest request,HttpServletResponse response)
	throws ServletException,IOException
	{
		if(request.getParameter("add_question")!=null)
		{
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/add_question.jsp");
			d.forward(request,response);
			return;
		}
		if(request.getParameter("add_admin")!=null)
		{
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/add_admin.jsp");
			d.forward(request,response);
			return;
		}
		if(request.getParameter("add_student")!=null)
		{
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/add_student.jsp");
			d.forward(request,response);
			return;
		}
		if(request.getParameter("test")!=null)
		{
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/test.jsp");
			d.forward(request,response);
			return;
		}



		if(request.getParameter("student_click_url")!=null)
		{
	RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/show_question_for_student.jsp");
	d.forward(request,response);
	return;
		}
		
	if(request.getParameter("complete")!=null)
		{
			RequestDispatcher d=request.getRequestDispatcher("/WEB-INF/complete.jsp");
			d.forward(request,response);
			return;
		}
	}
}