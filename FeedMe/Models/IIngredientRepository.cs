using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Models
{
    public interface IIngredientRepository
    {
        // api/1/[GET]
        Task<IEnumerable<Ingredient>> GetAllIngredients();        
        // api/1/apple/[GET]
        Task<Ingredient> GetIngredient(string name);        
        // api/1/[POST]
        Task Create(Ingredient i);        
        // api/1/[PUT]
        Task<bool> Update(Ingredient i);        
        // api/1/apple[DELETE]
        Task<bool> Delete(string name);
    }
}
