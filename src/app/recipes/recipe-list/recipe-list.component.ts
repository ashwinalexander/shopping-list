import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  //only thing that will stored here will be Recipe objects 
recipes: Recipe[];  

//replaced with this logic within the Service
// onRecipeSelected(recipe: Recipe){
// this.recipeWasSelected.emit(recipe);
// }
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

    this.recipes = this.recipeService.getRecipes();
  }

}
