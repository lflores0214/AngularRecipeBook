import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Red Thai Curry',
      'This is a Red Thai Curry',
      'https://kirbiecravings.com/wp-content/uploads/2018/01/cauliflower-thai-red-curry-221.jpg',
      [new Ingredient('onion', 1), new Ingredient('coconut milk', 1)]
    ),
    new Recipe(
      'Chickpea Salad',
      'This is a chickpea salad',
      'https://www.foodiecrush.com/wp-content/uploads/2017/05/Outrageous-Herbaciuos-Chickpea-Salad-foodiecrush.com-010-1.jpg',
      [new Ingredient('chickpeas', 1), new Ingredient('green onion', 3)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }
}
