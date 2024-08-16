using Microsoft.AspNetCore.Mvc;

namespace CRM_API.Controllers
{
    public class TaskController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
