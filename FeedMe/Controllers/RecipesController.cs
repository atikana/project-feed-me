using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FeedMe.Models;
using Microsoft.AspNetCore.Mvc;

namespace FeedMe.Controllers
{
    [Produces("application/json")]
    [Route("api/[Controller]")]
    public class RecipesController : Controller
    {
        private readonly IRecipeRepository _repo; public RecipesController(IRecipeRepository repo)
        {
            _repo = repo;
        }        // GET api/recipes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recipe>>> Get()
        {
            return new ObjectResult(await _repo.GetAllRecipes());
        }        // GET api/recipes/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Recipe>> Get(long id)
        {
            var recipe = await _repo.GetRecipe(id); if (recipe == null)
                return new NotFoundResult();

            return new ObjectResult(recipe);
        }        // POST api/recipes
        [HttpPost]
        public async Task<ActionResult<Recipe>> Post([FromBody] Recipe recipe)
        {
            recipe.Id = await _repo.GetNextId();
            await _repo.Create(recipe);
            return new OkObjectResult(recipe);
        }        // PUT api/recipes/1
        [HttpPut("{id}")]
        public async Task<ActionResult<Recipe>> Put(long id, [FromBody] Recipe recipe)
        {
            var recipeFromDb = await _repo.GetRecipe(id); if (recipeFromDb == null)
                return new NotFoundResult(); recipe.Id = recipeFromDb.Id;
            recipe.InternalId = recipeFromDb.InternalId; await _repo.Update(recipe); return new OkObjectResult(recipe);
        }        // DELETE api/recipes/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var post = await _repo.GetRecipe(id); if (post == null)
                return new NotFoundResult(); await _repo.Delete(id); return new OkResult();
        }
    }
}
