using CategoryApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CategoryApi.Data;

public class ShoppingDbContext : DbContext
{
    public ShoppingDbContext(DbContextOptions<ShoppingDbContext> options)
        : base(options)
    {
    }

    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Product> Products => Set<Product>();
    protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);

    modelBuilder.Entity<Category>().HasData(
        new Category { Id = 1, Name = "Fruits" },
        new Category { Id = 2, Name = "Vegetables" },
        new Category { Id = 3, Name = "Dairy" }
    );

    modelBuilder.Entity<Product>().HasData(
        new Product { Id = 1, Name = "Apples", Price = 5.90m, CategoryId = 1 },
        new Product { Id = 2, Name = "Bananas", Price = 7.50m, CategoryId = 1 },
        new Product { Id = 3, Name = "Tomatoes", Price = 6.90m, CategoryId = 2 },
        new Product { Id = 4, Name = "Cucumbers", Price = 4.90m, CategoryId = 2 },
        new Product { Id = 5, Name = "Milk", Price = 6.50m, CategoryId = 3 },
        new Product { Id = 6, Name = "Cheese", Price = 18.90m, CategoryId = 3 }
    );
}
}