using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Models
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly IRecipeContext _context; 
        // constructor
        public RecipeRepository(IRecipeContext context)
        {
            _context = context;
        }
        // get all the recipes in database
        public async Task<IEnumerable<Recipe>> GetAllRecipes()
        {
            return await _context
                            .Recipes
                            .Find(_ => true)
                            .ToListAsync();
        }
        // get recipe given id
        public Task<Recipe> GetRecipe(long id)
        {
            FilterDefinition<Recipe> filter = Builders<Recipe>.Filter.Eq(m => m.Id, id);
            return _context
                    .Recipes
                    .Find(filter)
                    .FirstOrDefaultAsync();
        }
        // create new recipe, insert new recipe into db
        public async Task Create(Recipe recipe)
        {
            await _context.Recipes.InsertOneAsync(recipe);
        }
        // update recipe
        public async Task<bool> Update(Recipe recipe)
        {
            ReplaceOneResult updateResult =
                await _context
                        .Recipes
                        .ReplaceOneAsync(
                            filter: g => g.Id == recipe.Id,
                            replacement: recipe);
            return updateResult.IsAcknowledged
                    && updateResult.ModifiedCount > 0;
        }
        // delete recipe given id
        public async Task<bool> Delete(long id)
        {
            FilterDefinition<Recipe> filter = Builders<Recipe>.Filter.Eq(m => m.Id, id);
            DeleteResult deleteResult = await _context
                                                .Recipes
                                              .DeleteOneAsync(filter);
            return deleteResult.IsAcknowledged
                && deleteResult.DeletedCount > 0;
        }
        public async Task<long> GetNextId()
        {
            return await _context.Recipes.CountDocumentsAsync(new BsonDocument()) + 1;
        }
    }
}
