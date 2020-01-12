import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResepDetailPageRoutingModule } from './resep-detail-routing.module';

import { ResepDetailPage } from './resep-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResepDetailPageRoutingModule
  ],
  declarations: [ResepDetailPage]
})
export class ResepDetailPageModule {}
