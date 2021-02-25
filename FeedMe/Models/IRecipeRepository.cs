using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Models
{
    public interface IRecipeRepository
    {
        // api/[GET]
        Task<IEnumerable<Recipe>> GetAllRecipes();        
        // api/1/[GET]
        Task<Recipe> GetRecipe(long id);        
        // api/[POST]
        Task Create(Recipe recipe);       
         // api/[PUT]
        Task<bool> Update(Recipe recipe);        
        // api/1/[DELETE]
        Task<bool> Delete(long id); 
        // get the next recipe in db
        Task<long> GetNextId();
    }
}
