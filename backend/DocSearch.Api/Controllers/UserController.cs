using Microsoft.AspNetCore.Mvc;

namespace DocSearch.Api.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
