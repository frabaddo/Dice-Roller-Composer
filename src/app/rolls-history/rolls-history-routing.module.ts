import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RollsHistoryPage } from './rolls-history.page';

const routes: Routes = [
  {
    path: '',
    component: RollsHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RollsHistoryPageRoutingModule {}
