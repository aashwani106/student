using System.IO;
using System.Text.Json;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOrigin",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAnyOrigin");




List<DataItem> data = new List<DataItem>
        {
            new DataItem { sno = 1, name = "John Doe", subject = "maths", marks = 20 },
            new DataItem { sno = 2, name = "Jane Smith", subject = "english", marks = 20 },
            new DataItem { sno = 3, name = "Alice Johnson", subject = "hindi", marks = 20 }
        };
app.MapGet("/a", () =>
{
    return Results.Ok(data);
});



app.Run();
public class DataItem
{
    public int sno { get; set; }
    public string? name { get; set; }
    public string? subject { get; set; }
    public int marks { get; set; }
}
