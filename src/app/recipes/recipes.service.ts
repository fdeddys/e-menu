import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: ' nasi',
            imageUrl: 'https://www.gstatic.com/webp/gallery/1.jpg',
            ingredients: ['Nasi gor', 'Pork', 'salad'],
        },{
            id: 'r2',
            title: ' mie',
            imageUrl: 'https://i.picsum.photos/id/237/200/300.jpg',
            ingredients: ['Mie gor', 'sapi',' salad'],
        }
    ]

    constructor() { }

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string) {
        return {
                ...this.recipes.find(recipe => {
                    return recipe.id === recipeId;
                })
        };
    }

    deleteRecipe(recipeId: string) {
        console.log('hapus id ', recipeId);
        this.recipes = this.recipes.filter(
            recipe => {
                return recipeId !== recipe.id;
            }
        );
    }

}
