using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Models
{
    public interface IRecipeContext
    {
        IMongoCollection<Recipe> Recipes { get; }
    }
}
