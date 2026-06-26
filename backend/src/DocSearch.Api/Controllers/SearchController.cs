using Microsoft.AspNetCore.Mvc;
using DocSearch.Api.Models.DTOs;

namespace DocSearch.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SearchController : ControllerBase
{
    [HttpGet]
    public IActionResult Search()
    {
        return Ok("Hello World, I am searching.");
    }

    [HttpGet("health")]
    public IActionResult Health()
    {
        return Ok("Your Api is healthy");
    }
}
