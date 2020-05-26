import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyFavoritePage } from './modify-favorite.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyFavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyFavoritePageRoutingModule {}
