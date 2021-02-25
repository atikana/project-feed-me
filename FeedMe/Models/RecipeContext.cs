using FeedMe.Config;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Models
{
    public class RecipeContext : IRecipeContext
    {
        private readonly IMongoDatabase _db;
        public RecipeContext(MongoDBConfig config)
        {
            var client = new MongoClient(config.ConnectionString);
            _db = client.GetDatabase(config.Database);
        }
        public IMongoCollection<Recipe> Recipes => _db.GetCollection<Recipe>("Recipes");
    }
}
