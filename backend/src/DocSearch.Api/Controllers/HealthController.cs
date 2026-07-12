using Microsoft.AspNetCore.Mvc;

namespace DocSearch.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Health() => Ok("We are healthy");
}
