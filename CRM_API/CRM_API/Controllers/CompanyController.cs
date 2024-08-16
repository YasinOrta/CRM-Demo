using Microsoft.AspNetCore.Mvc;

namespace CRM_API.Controllers
{
    public class CompanyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
