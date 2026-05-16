import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CourierServlet extends HttpServlet {

    public void doPost(HttpServletRequest request,
                       HttpServletResponse response)
                       throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        double weight = Double.parseDouble(request.getParameter("weight"));
        double charge;

        // Calculate courier charge
        if (weight <= 1) {
            charge = 50;
        }
        else if (weight <= 5) {
            charge = 100;
        }
        else {
            charge = 200;
        }

        // Display output
        out.println("<html>");
        out.println("<head><title>Courier Charge Result</title></head>");
        out.println("<body>");

        out.println("<h2>Courier Charge Details</h2>");
        out.println("<p><b>Parcel Weight:</b> " + weight + " kg</p>");
        out.println("<p><b>Courier Charge:</b> ₹" + charge + "</p>");

        // Copyright line
        out.println("<hr>");
        out.println("<p style='color:blue;'>© 24071A05J1 COPYRIGHT</p>");

        out.println("</body>");
        out.println("</html>");
    }
}