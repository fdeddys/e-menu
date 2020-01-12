import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

     loadedRecipe: Recipe;
  constructor(
       private activateRoute: ActivatedRoute,
       private reciveService: RecipesService,
       private router: Router,
       private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
       this.activateRoute.paramMap
          .subscribe(
               paramMap => {
                    if (!paramMap.has('recipeId')){
                         // redirect
                         this.router.navigate(['/recipes']);
                         return ;
                    }

                    const recipeId = paramMap.get('recipeId');
                    this.loadedRecipe = this.reciveService.getRecipe(recipeId);

               }
          );
  }

  onDeleteRecipe() {

    this.alertCtrl.create({
        header: 'Are you syre',
        message : 'y delete',
        buttons: [ {
            text: 'cancel',
            role: 'cancel'
        },{
            text: 'delete',
            handler: () => {
                this.reciveService.deleteRecipe(this.loadedRecipe.id);
                this.router.navigate(['/recipes']);
            }
        }]
    }).then(
        alertEl => {
            alertEl.present();
        });

    }

}
