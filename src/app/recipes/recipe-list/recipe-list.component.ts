import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
	/* VARIABLES */
	recipes: Recipe[] = [
		new Recipe(
			'A Test Recipe',
			'This is test recipe',
			'https://placeimg.com/100/100/nature'
		),
		new Recipe(
			'A Test Recipe',
			'This is test recipe',
			'https://placeimg.com/100/100/nature'
		),
	];

	/* INITIAL METHODS */
	constructor() {}

	ngOnInit(): void {}

	/* METHODS */
}
