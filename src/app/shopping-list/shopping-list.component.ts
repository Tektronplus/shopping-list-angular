import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
	/* VARIABLE */
	ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatos', 10),
	];

	/* INITIAL METHODS */
	constructor() {}

	ngOnInit(): void {}

	/* METHODS */
}
