import { Component, OnInit } from '@angular/core';
import { EMenuGroup, Resto } from './e-menu.model';
import { EMenuService } from './e-menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-e-menu',
    templateUrl: './e-menu.page.html',
    styleUrls: ['./e-menu.page.scss'],
})
export class EMenuPage implements OnInit {

    menuGroups: EMenuGroup[];
    restoId: any;
    resto: Resto;

    constructor(
        private activateRoute: ActivatedRoute,
        private eMenuService: EMenuService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.activateRoute.paramMap
          .subscribe(
               paramMap => {
                    if (!paramMap.has('restoId')){
                         // redirect
                         this.router.navigate(['/error']);
                         return ;
                    }

                    this.restoId = Number(paramMap.get('restoId'));
                    // this.emenuItems = this.emenuService.getAllItemByGroupId(groupId);
                    this.menuGroups = this.eMenuService.getAllGroupMenu(this.restoId);

                    this.resto = this.eMenuService.getRestoById(this.restoId);
                    console.log('resto id ', this.resto);
               }
          );
    }

}
