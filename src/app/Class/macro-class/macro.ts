import { Roll } from '../roll-class/roll';
import { RollStep } from '../roll-step-class/roll-step';

interface MacroOptions{
    roll?:Roll,
    name?:String,
    id?:String,
    minified?:string
}

export class Macro {

    roll:Roll;
    name:String;
    id:String;

    constructor(option:MacroOptions={}){
        if(option.roll&&option.name&&option.id){
            this.roll=option.roll;
            this.name=option.name;
            this.id=option.id;
        }
        else if(option.minified){
            let obj=JSON.parse(option.minified);
            this.name=obj.name;
            this.id=obj.id;
            this.roll=new Roll();
            obj.roll.forEach((step,i) => {
                let newstep=new RollStep(step.Type,step.Value)
                this.roll.insertStep(i,newstep);
            });
        }
    }

    stringify(){
        let obj={
            name:this.name,
            id:this.id,
            roll:this.roll.minified(),
        }
        return JSON.stringify(obj);
    }
}
