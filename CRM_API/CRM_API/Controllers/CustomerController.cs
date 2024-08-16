using Microsoft.AspNetCore.Mvc;

namespace CRM_API.Controllers
{
    public class CustomerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
