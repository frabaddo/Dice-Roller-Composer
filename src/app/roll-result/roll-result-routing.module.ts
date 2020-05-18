import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RollResultPage } from './roll-result.page';

const routes: Routes = [
  {
    path: '',
    component: RollResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RollResultPageRoutingModule {}
