using DoctorsApp.Data;
using Microsoft.AspNetCore.Mvc;

namespace DoctorsApp.Controllers
{
    public class DoctorsController : Controller
    {
        ApplicationDpContext context = new ApplicationDpContext();
        public IActionResult Index()
        {
            return View();
        }
		public IActionResult IndexDoctors()
		{
            var result = context.Doctors.ToList();
            return View(result);
        }
        public IActionResult Appointment(int id)
        {
			var a = context.Doctors.Find(id);
			return View(a);
		}
	}
}
