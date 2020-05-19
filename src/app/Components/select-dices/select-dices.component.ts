import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'select-dices',
  templateUrl: './select-dices.component.html',
  styleUrls: ['./select-dices.component.scss']
})
export class SelectDicesComponent implements OnInit {

  @Output()
  confirm: EventEmitter<String> = new EventEmitter<String>();
  @Output()
  dismiss = new EventEmitter();

  explode=false;
  best;

  @Input("dices")
  d:{
    d4:number,
    d6:number,
    d8:number,
    d10:number,
    d12:number,
    d20:number,
    d100:number,
    dF:number
  }={
    d4:0,
    d6:0,
    d8:0,
    d10:0,
    d12:0,
    d20:0,
    d100:0,
    dF:0
  }

  @Input("dicesdefault")
  default:{
    d4:number,
    d6:number,
    d8:number,
    d10:number,
    d12:number,
    d20:number,
    d100:number,
    dF:number
  }={
    d4:0,
    d6:0,
    d8:0,
    d10:0,
    d12:0,
    d20:0,
    d100:0,
    dF:0
  }

  constructor(
    private popover:PopoverController
  ) { }

  ngOnInit() {
  }

  confirmSelection(){
    var res="";
    Object.keys(this.d).forEach((key)=>{
      if(this.d[key]!=0){
        if(res.length!=0)res=res+"+";	
        res=res+this.d[key]+key;
        if(this.explode)res=res+"!";
        if(this.best)res=res+"kh"+this.best;
      }  
    });
    console.log(this.explode,this.best,res);
    this.confirm.emit(res);
    this.popover.dismiss(res);
  }

  dismissSelection(){
    this.dismiss.emit();
    this.popover.dismiss();
    this.defaultdices();
  }

  defaultdices(){
    Object.keys(this.d).forEach((key)=>{
      this.d[key]=this.default[key];
    });
  }

  reset(){
    this.d.d4=0;
    this.d.d6=0;
    this.d.d8=0;
    this.d.d10=0;
    this.d.d12=0;
    this.d.d20=0;
    this.d.d100=0;
    this.d.dF=0;
  }

}
