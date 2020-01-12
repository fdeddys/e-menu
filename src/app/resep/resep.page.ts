import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';

@Component({
  selector: 'app-resep',
  templateUrl: './resep.page.html',
  styleUrls: ['./resep.page.scss'],
})
export class ResepPage implements OnInit {

    recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
