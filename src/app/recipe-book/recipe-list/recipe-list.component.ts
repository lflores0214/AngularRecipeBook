import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  @Output() recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
