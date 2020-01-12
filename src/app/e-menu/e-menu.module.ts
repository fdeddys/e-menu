import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EMenuPageRoutingModule } from './e-menu-routing.module';

import { EMenuPage } from './e-menu.page';
import { DetailPageModule } from './detail/detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EMenuPageRoutingModule,
    DetailPageModule,
  ],
  declarations: [EMenuPage]
})
export class EMenuPageModule {}
