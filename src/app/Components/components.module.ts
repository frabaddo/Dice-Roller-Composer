import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectDicesComponent } from './select-dices/select-dices.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SelectDicesComponent],
  exports:[SelectDicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
