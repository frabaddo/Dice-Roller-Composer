import { Component, OnInit } from '@angular/core';
import { Roll } from '../Class/roll-class/roll';
import { ActionSheetController, AlertController, PopoverController } from '@ionic/angular';
import { StepType } from '../Class/roll-step-class/step-type.enum';
import { RollStep } from '../Class/roll-step-class/roll-step';
import { SelectDicesComponent } from '../Components/select-dices/select-dices.component';
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-make-roll',
  templateUrl: './make-roll.page.html',
  styleUrls: ['./make-roll.page.scss'],
})
export class MakeRollPage implements OnInit {

  roll:Roll;

  constructor(
    private actionSheetController:ActionSheetController,
    private alertController: AlertController,
    private popoverController:PopoverController
  ) { 
    this.roll=new Roll();
  }

  ngOnInit() {
  }

  async InsertStep(i=this.roll.length) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Inserisci passo',
      buttons: []
    });
    //if(i!=0){
      actionSheet.buttons=actionSheet.buttons.concat([
        {
          text: 'Segno',
          icon: 'add-outline',
          handler: () => {
            this.selectSign(i);
          }
        }
      ]);
   // }
    //if(i==0||this.roll.Steps[i-1].Type==StepType.Sign){
      actionSheet.buttons=actionSheet.buttons.concat([
        {
          text: 'Numero',
          icon: 'information-outline',
          handler: () => {
            this.selectNumber(i);
          }
        }, 
        {
          text: 'Dadi',
          icon: 'cube-outline',
          handler: () => {
            this.selectDices(i);
          }
        }
      ])
    //}
    await actionSheet.present();
  }

  async selectNumber(i) {
    const alert = await this.alertController.create({
      header: 'Inserisci numero',
      inputs: [
        {
          name: 'number',
          type: 'number',
          placeholder: '0'
        }
      ],
      buttons: [
        {
          text: 'Inserisci',
          handler: (value) => {
            if(value.number)this.roll.insertStep(i,new RollStep(StepType.Number,value.number));
          }
        }
      ]
    });

    await alert.present();
  }

  async selectDices(i) {
    const popo = await this.popoverController.create({
      component:SelectDicesComponent
    });
    popo.onWillDismiss().then((res)=>{
      if(res.data&&res.data.length>0)this.roll.insertStep(i,new RollStep(StepType.Dices,res.data));
    });
    popo.present();
  }

  async selectSign(i) {
    const alert = await this.alertController.create({
      header: 'Inserisci segno',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '+',
          value: '+',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '-',
          value: '-'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'X',
          value: '*'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: '/',
          value: '/'
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (val) => {
            if(val)this.roll.insertStep(i,new RollStep(StepType.Sign,val));
          }
        }
      ]
    });

    await alert.present();
  }

}
