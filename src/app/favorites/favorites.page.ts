import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Macro } from '../Class/macro-class/macro';
import { ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {

  Macros:Macro[]=[];
  resultToastPresent=new Subject();

  constructor(
    private storage:Storage,
    private toastController:ToastController
  ) { }

  ionViewWillEnter(){
    this.Macros=[];
    this.storage.forEach((value,key)=>{
      if(String(key).startsWith("macro")){
        let el=new Macro({minified:value});
        this.Macros.unshift(el);
      }
    })
  }

  openMacro(id){
    console.log(id);
  }

  async Roll(roll){
    roll.reRoll();
    if(roll.isValid){
      const toast = await this.toastController.create({
        header: 'Risultato: '+roll.Result,
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
      this.storage.set("log"+Date.now(),JSON.stringify(roll.getLog())).then(()=>{});
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
        console.log("err",err,roll.getLog());
      });
      toast.present();
    }
  }
}
