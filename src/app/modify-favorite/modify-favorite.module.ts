import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyFavoritePageRoutingModule } from './modify-favorite-routing.module';

import { ModifyFavoritePage } from './modify-favorite.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ModifyFavoritePageRoutingModule
  ],
  declarations: [ModifyFavoritePage]
})
export class ModifyFavoritePageModule {}
