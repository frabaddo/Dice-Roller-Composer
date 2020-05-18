import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RollResultPageRoutingModule } from './roll-result-routing.module';

import { RollResultPage } from './roll-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RollResultPageRoutingModule
  ],
  declarations: [RollResultPage]
})
export class RollResultPageModule {}
