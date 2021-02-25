using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Models
{
    public class IngredientRepository : IIngredientRepository
    {
        private readonly IIngeredientContext _context; 
        // constructor
        public IngredientRepository(IIngredientContext context)
        {
            _context = context;
        }
        // get all the ingredients in database
        public async Task<IEnumerable<Ingredient>> GetAllIngredients()
        {
            return await _context
                            .Incredients
                            .Find(_ => true)
                            .ToListAsync();
        }
        // get ingredient given id
        public Task<Ingredient> GetIngredient(string name)
        {
            FilterDefinition<Ingredient> filter = Builders<Ingredient>.Filter.Eq(m => m.Name, name);
            return _context
                    .Ingredients
                    .Find(filter)
                    .FirstOrDefaultAsync();
        }
        // create new ingredient, insert new ingredient into db
        public async Task Create(Ingredient i)
        {
            await _context.Ingredients.InsertOneAsync(i);
        }
        // update ingredient
        public async Task<bool> Update(Ingredient i)
        {
            ReplaceOneResult updateResult =
                await _context
                        .Ingredients
                        .ReplaceOneAsync(
                            filter: g => g.Name == i.name,
                            replacement: i);
            return updateResult.IsAcknowledged
                    && updateResult.ModifiedCount > 0;
        }
        // delete ingredient given id
        public async Task<bool> Delete(string name)
        {
            FilterDefinition<Ingredient> filter = Builders<Ingredient>.Filter.Eq(m => m.Name, name);
            DeleteResult deleteResult = await _context
                                                .Ingredients
                                              .DeleteOneAsync(filter);
            return deleteResult.IsAcknowledged
                && deleteResult.DeletedCount > 0;
        }
    }
}
