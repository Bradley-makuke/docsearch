namespace DocSearch.Api.Models;

public class Session
{
    public Guid Id {get; set;}
    public string Data { get; set;}
    public bool IsActive { get; set; }
}
