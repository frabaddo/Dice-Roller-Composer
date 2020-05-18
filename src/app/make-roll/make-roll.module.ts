import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeRollPageRoutingModule } from './make-roll-routing.module';

import { MakeRollPage } from './make-roll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeRollPageRoutingModule,
  ],
  declarations: [MakeRollPage]
})
export class MakeRollPageModule {}
