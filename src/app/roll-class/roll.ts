import { RollStep } from '../roll-step-class/roll-step';

export class Roll {
    private rollSteps:Array<RollStep>=[];

    get Steps(){
        return this.rollSteps;
    }
    
    get Result(){
        if(this.isValid) return eval(this.stringsum());
        else return undefined;
    }

    get isValid(){
        let res;
        try{
            res=eval(this.stringsum());
        }
        catch(err){
            res=undefined;
        }
        if(res!=undefined&&!isNaN(res)&&res!=Infinity)return true;
        else return false;
    }

    get length(){
        return this.rollSteps.length;
    }

    private stringsum(){
        return this.rollSteps.reduce((final,current)=>final.concat(String(current.Result)),"");
    }

    insertStep(i:number,step:RollStep){
        this.rollSteps.splice(i, 0, step);
    }

    removeStep(i:number){
        this.rollSteps.splice(i, 1);
    }

    Roll(){
        this.reRoll();
        return this.isValid;
    }

    reRoll(i:number=undefined){
        if(isNaN(i)){
            this.rollSteps.forEach((el)=>el.reRoll());
        }
        else{
            this.rollSteps[i].reRoll();
        }
        return this.isValid;
    }

    clean(){
        this.rollSteps=[];
    }
}
