import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeRollPage } from './make-roll.page';

const routes: Routes = [
  {
    path: '',
    component: MakeRollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeRollPageRoutingModule {}
