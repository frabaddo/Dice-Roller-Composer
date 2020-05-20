import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-rolls-history',
  templateUrl: './rolls-history.page.html',
  styleUrls: ['./rolls-history.page.scss'],
})
export class RollsHistoryPage {

  Logs:{Value:String,Result:String,Data:String}[]=[];

  constructor(
    private storage:Storage
  ) { }

  ionViewWillEnter(){
    this.Logs=[];
    this.storage.forEach((value,key)=>{
      if(String(key).startsWith("log")){
        let el={
          ...JSON.parse(value),
          Data:String(key).substr(3)
        }
        this.Logs.unshift(el);
      }
    }).then(()=>{
      this.Logs.sort((a, b) => (Number(a.Data) > Number(b.Data) ? -1 : 1))
    });
  }
}
