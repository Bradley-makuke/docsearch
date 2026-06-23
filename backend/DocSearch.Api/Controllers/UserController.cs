using Microsoft.AspNetCore.Mvc;
using DocSearch.Api.Models;

namespace DocSearch.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class UserController : Controller
    {
        [HttpPost]
        public IActionResult GetUser( Guid userId)
        {
            if(userId == null || userId == Guid.Empty)
            {
                return BadRequest($"User  of this Id {userId} does not exist");
            }
            //Add code to get the user from the db

            return View();
        }

        [HttpPatch]
        public IActionResult Edit([FromBody] User user)
        { 
            if (user == null)
            {
                return BadRequest("User does not exits");
            }
            // code to compare the user from the request and the one from the db, then call db function to make changes in the db. then send a response to FE

                return View(user); 
        }
    }
}
