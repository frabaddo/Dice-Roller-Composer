import { Component, ViewChild } from '@angular/core';
import { Roll } from '../Class/roll-class/roll';
import { ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { Storage } from '@ionic/storage';
import { RollComposerComponent } from '../Components/roll-composer/roll-composer.component';
import { Macro } from '../Class/macro-class/macro';

@Component({
  selector: 'app-make-roll',
  templateUrl: './make-roll.page.html',
  styleUrls: ['./make-roll.page.scss'],
})
export class MakeRollPage {

  resultToastPresent=new Subject();

  @ViewChild('composer',{ static: false }) rollComposer:RollComposerComponent;

  constructor(
    private toastController:ToastController,
    private storage:Storage
  ) {}

  async Roll(){
    this.rollComposer.roll.reRoll();
    if(this.rollComposer.roll.isValid){
      const toast = await this.toastController.create({
        header: 'Risultato: '+this.rollComposer.roll.Result,
        position: 'top',
        duration: 3000,
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
      this.storage.set("log"+Date.now(),JSON.stringify(this.rollComposer.roll.getLog())).then(()=>{});
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
        console.log("err",err,this.rollComposer.roll.getLog());
      });
      toast.present();
    }
  }

  saveMacro(){
    let id="macro"+Date.now();
    let macro=new Macro({
      name:"test"+Date.now(),
      roll:this.rollComposer.roll,
      id:id
    })
    this.storage.set(id,macro.stringify());
  }
}
