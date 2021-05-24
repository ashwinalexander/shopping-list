import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("A second Test Recipe", "This is a test description","https://placekitten.com/200/200"),
        new Recipe("A Teet Recipe", "This is another test description","https://placekitten.com/250/200")
        ];




getRecipes(){
    return this.recipes.slice();
}



}