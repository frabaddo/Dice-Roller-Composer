import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectDicesComponent } from './select-dices/select-dices.component';
import { IonicModule } from '@ionic/angular';
import { RollComposerComponent } from './roll-composer/roll-composer.component';
import { PipesModule } from '../Pipes/pipes.module';



@NgModule({
  declarations: [SelectDicesComponent,RollComposerComponent],
  exports:[SelectDicesComponent,RollComposerComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
