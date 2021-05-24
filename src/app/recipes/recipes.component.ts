import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]

})
export class RecipesComponent implements OnInit {


   selectedRecipe: Recipe;
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe = recipe;
      }
    )
  }

}
