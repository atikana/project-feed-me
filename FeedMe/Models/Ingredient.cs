using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Models
{
    public class Ingredient
    {

        [BsonElement("Name")]
        public string Name { get; set; } // name = id of ingredient

        [BsonElement("Type")]
        public string Type { get; set; } // type of ingredient (vegetable, fruit, ...)

        [BsonElement("Allergies")]
        public List<string> Allergies { get; set; } // list of allergies that are allergic to the ingredient

    }
}
