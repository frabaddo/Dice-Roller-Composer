import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RollsHistoryPageRoutingModule } from './rolls-history-routing.module';

import { RollsHistoryPage } from './rolls-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RollsHistoryPageRoutingModule
  ],
  declarations: [RollsHistoryPage]
})
export class RollsHistoryPageModule {}
