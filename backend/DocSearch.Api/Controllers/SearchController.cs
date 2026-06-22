using Microsoft.AspNetCore.Mvc;

namespace DocSearch.Api.Controllers;
[ApiController]
[Route("api/[controller]")]
public class SearchController : ControllerBase
{
    [HttpGet]
    public IActionResult SearchResults()
    {
        /** I will later add parameters to this method, either take the search query then get data from opensearch
        and load it process the data to later return results either as cards or something.
        then have the cards actually take you to open the document or the resource where you can find that document.
         then add other methods in there that help with processing the query
        **/
        
        return Ok();
    }

}
