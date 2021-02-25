using FeedMe.Config;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Models
{
    public class IngredientContext : IIngredientContext
    {
        private readonly IMongoDatabase _db;
        public IngredientContext(MongoDBConfig config)
        {
            var client = new MongoClient(config.ConnectionString);
            _db = client.GetDatabase(config.Database);
        }
        public IMongoCollection<Ingredient> Ingredients => _db.GetCollection<Ingredient>("Ingredients");
    }
}
