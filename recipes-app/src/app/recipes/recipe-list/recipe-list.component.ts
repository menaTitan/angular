import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.chiclypoised.com/wp-content/uploads/2018/10/30-Easy-Delicious-Salad-Recipes-You-Will-Want-To-Eat-Every-Day-For-Lunch.jpg?ezimgfmt=ng:webp/ngcb1'),
    new Recipe('A Test Recipe 2', 'This is a test', 'https://www.mydomaine.com/thmb/30EHI46c6TWdQaSTMMXjTmzTur8=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Honey-Thyme-and-Sweet-Cherry-Grilled-Brie-4-083023edbaf24605a22a902ead6bb799.jpg')

  ]; 
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
