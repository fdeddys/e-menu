import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMenuService } from '../e-menu.service';
import { EMenuItem } from '../e-menu.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    emenuItems: EMenuItem[];
    restoId: any;
    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private emenuService: EMenuService,
        ) { }

    ngOnInit() {
        this.activateRoute.paramMap
          .subscribe(
               paramMap => {
                    if (!paramMap.has('groupId')){
                         // redirect
                         this.router.navigate(['/e-menu']);
                         return ;
                    }

                    this.restoId = Number(paramMap.get('restoId'));
                    const groupId = Number(paramMap.get('groupId'));
                    this.emenuItems = this.emenuService.getAllItemByGroupId(groupId, this.restoId);

               }
          );
    }

}
