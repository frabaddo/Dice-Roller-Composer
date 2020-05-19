import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeRollPageRoutingModule } from './make-roll-routing.module';

import { MakeRollPage } from './make-roll.page';
import { PipesModule } from '../Pipes/pipes.module';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeRollPageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [MakeRollPage]
})
export class MakeRollPageModule {}
