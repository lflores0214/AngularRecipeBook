import { Recipe } from "./recipe.model"

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
          'Test Recipe',
          'This is a test',
          'https://www.primaverakitchen.com/wp-content/uploads/2017/06/Pesto-Chicken-Salad-Recipe.jpg'
        ),
        new Recipe(
          'Chickpea Salad',
          'This is a chickpea salad',
          'https://www.primaverakitchen.com/wp-content/uploads/2017/06/Pesto-Chicken-Salad-Recipe.jpg'
        ),
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}