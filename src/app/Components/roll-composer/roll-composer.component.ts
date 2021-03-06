import { Component, Output, EventEmitter } from '@angular/core';
import { Roll } from '../../Class/roll-class/roll';
import { ActionSheetController, AlertController, PopoverController } from '@ionic/angular';
import { StepType } from '../../Class/roll-step-class/step-type.enum';
import { RollStep } from '../../Class/roll-step-class/roll-step';
import { SelectDicesComponent } from '../../Components/select-dices/select-dices.component';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-roll-composer',
  templateUrl: './roll-composer.component.html',
  styleUrls: ['./roll-composer.component.scss'],
})
export class RollComposerComponent {

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  roll:Roll=new Roll();

  resultToastPresent=new Subject();

  constructor(
    private actionSheetController:ActionSheetController,
    private alertController: AlertController,
    private popoverController:PopoverController
  ) {
  }

  async InsertStep(i=this.roll.length) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Inserisci passo',
      buttons: [
        {
          text: 'Segno',
          icon: 'add-outline',
          handler: () => {
            this.selectSign(i);
          }
        },
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
        },
        {
          text: 'Solo per nerd',
          icon: 'glasses',
          handler: () => {
            this.selectSmanettone(i);
          }
        }
      ]
    });
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
            if(value.number){
              this.roll.insertStep(i,new RollStep(StepType.Number,value.number));
              this.change.emit();
            }
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
      if(res.data&&res.data.length>0){
        this.roll.insertStep(i,new RollStep(StepType.Dices,res.data));
        this.change.emit();
      }
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
            if(val){
              this.roll.insertStep(i,new RollStep(StepType.Sign,val));
              this.change.emit();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async selectSmanettone(i) {
    const alert = await this.alertController.create({
      header: 'Solo per nerd',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'not',
          value: '!'
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'resto',
          value: '%',
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '==',
          value: '=='
        },
        {
          name: 'radio4',
          type: 'radio',
          label: '(',
          value: '('
        },
        {
          name: 'radio5',
          type: 'radio',
          label: ')',
          value: ')'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: '?',
          value: '?'
        },
        {
          name: 'radio7',
          type: 'radio',
          label: ':',
          value: ':'
        },
        {
          name: 'radio8',
          type: 'radio',
          label: '>',
          value: '>'
        },
        {
          name: 'radio9',
          type: 'radio',
          label: '<',
          value: '<'
        },
        {
          name: 'radio10',
          type: 'radio',
          label: '>=',
          value: '>='
        },
        {
          name: 'radio11',
          type: 'radio',
          label: '<=',
          value: '<='
        },
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (val) => {
            if(val){
              this.roll.insertStep(i,new RollStep(StepType.Sign,val));
              this.change.emit();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  removeStep(i){
    this.roll.removeStep(i);
    this.change.emit();
  }

  Reord(ev: any) {
    this.roll.rollSteps = ev.detail.complete(this.roll.rollSteps);
    this.change.emit();
  }

}
