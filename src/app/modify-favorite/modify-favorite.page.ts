import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RollComposerComponent } from '../Components/roll-composer/roll-composer.component';
import { Macro } from '../Class/macro-class/macro';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modify-favorite',
  templateUrl: './modify-favorite.page.html',
  styleUrls: ['./modify-favorite.page.scss'],
})
export class ModifyFavoritePage implements OnInit {

  @ViewChild('composer',{ static: false }) rollComposer:RollComposerComponent;

  macro:Macro;

  constructor(
    private route:ActivatedRoute,
    private storage:Storage
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param)=>{
      if(param.get("id"))this.storage.get(param.get("id")).then((roll)=>{
        this.macro=new Macro({minified:roll});
        this.rollComposer.roll=this.macro.roll;
      })
    })
  }

  saveFavorite(){
    this.storage.set(this.macro.id as string,this.macro.stringify());
  }
}
