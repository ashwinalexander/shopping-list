import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {RecipeService} from '../../recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;
//@Output() recipeSelected = new EventEmitter<void>();

onSelected(){
  this.recipeService.recipeSelected.emit(this.recipe);
}


  constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
  }

}
