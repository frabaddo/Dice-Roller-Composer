import { Component } from '@angular/core';
import { Roll } from '../Class/roll-class/roll';
import { ActionSheetController, AlertController, PopoverController, ToastController } from '@ionic/angular';
import { StepType } from '../Class/roll-step-class/step-type.enum';
import { RollStep } from '../Class/roll-step-class/roll-step';
import { SelectDicesComponent } from '../Components/select-dices/select-dices.component';
import { first } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-make-roll',
  templateUrl: './make-roll.page.html',
  styleUrls: ['./make-roll.page.scss'],
})
export class MakeRollPage {

  roll:Roll;

  resultToastPresent=new Subject();

  constructor(
    private actionSheetController:ActionSheetController,
    private alertController: AlertController,
    private popoverController:PopoverController,
    private toastController:ToastController,
    private storage:Storage
  ) { 
    this.roll=new Roll();
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

  async Roll(){
    this.roll.reRoll();
    if(this.roll.isValid){
      const toast = await this.toastController.create({
        header: 'Risultato: '+this.roll.Result,
        position: 'top',
        buttons: [
          {
            text: '',
            side: 'end',
            role: 'cancel',
            icon:'close',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      this.resultToastPresent.next();
      this.resultToastPresent.pipe(first()).subscribe(()=>{
        toast.dismiss();
      });
      this.storage.set("log"+Date.now(),JSON.stringify(this.roll.getLog())).then(()=>{});
      this.storage.keys().then((list)=>{
        list
        .filter((el)=>String(el).startsWith("log"))
        .sort((a, b) => (Number(String(a).substr(3)) > Number(String(b).substr(3)) ? -1 : 1))
        .slice(20)
        .forEach((key)=>{
          this.storage.remove(key);
        })
      })
      .catch((err)=>{
        console.log("err",err,this.roll.getLog());
      });
      toast.present();
    }
  }

  Reord(ev: any) {
    this.roll.rollSteps = ev.detail.complete(this.roll.rollSteps);
  }
}
