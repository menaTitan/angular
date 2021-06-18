import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.chiclypoised.com/wp-content/uploads/2018/10/30-Easy-Delicious-Salad-Recipes-You-Will-Want-To-Eat-Every-Day-For-Lunch.jpg?ezimgfmt=ng:webp/ngcb1')
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
