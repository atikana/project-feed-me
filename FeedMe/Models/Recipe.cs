using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Models
{
    public class Recipe
    {
        [BsonId]
        public ObjectId InternalId { get; set; }

        [BsonElement("Id")]
        public long Id { get; set; }

        [BsonElement("Title")]
        public string Title { get; set; } // title of recipe

        [BsonElement("Type")]
        public string Type { get; set; } // title of recipe

        [BsonElement("Content")]
        public string Content { get; set; } // content of recipe

        [BsonElement("Author")]
        public string Author {get; set; } // author of recipe

        [BsonElement("Date")]
        public string Date = Convert.ToString(DateTime.Now); // date posted

        [BsonElement("Ingredients")]
        public List<Ingredient> Allergies { get; set; } // list of ingredients

        // auto gen the id
        public Recipe()
        {
            internalId = ObjectId.GenerateNewId();
        }
    }
}
