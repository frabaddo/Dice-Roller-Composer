import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Macro } from '../Class/macro-class/macro';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {

  Macros:Macro[]=[];

  constructor(
    private storage:Storage
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
}
