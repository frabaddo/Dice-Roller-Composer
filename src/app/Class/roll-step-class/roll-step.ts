import { StepType } from './step-type.enum';
import { DiceRoll } from 'rpg-dice-roller';

export class RollStep {
    private _type:StepType;
    private _value: String | Number;
    private _result: DiceRoll;

    constructor(type:StepType=StepType.Number,value:String | Number=0){
        this.setValue(type,value);
    }

    get Type(){
        return this._type;
    }

    get Result(){
        return this._type==StepType.Number||this._type==StepType.Sign ? this._value : this._result&&(this._result.total!=undefined&&!isNaN(this._result.total))?this._result.total:undefined;
    }

    get Value(){
        return this._value;
    }

    setValue(type:StepType,value:String | Number){
        this._type=type;
        this._value=value;
        let res=true;
        if(type==StepType.Dices){
            try{
                this._result = new DiceRoll(value.valueOf() as string);
            }
            catch(err) {
                this._result = undefined;
                res=false;
            }
        }
        return res;
    }

    reRoll(){
        if(this._type==StepType.Dices){
            return this.calc();
        }
        return false
    }

    private calc(){
        if(this._result){
            this._result.roll();
            this._result.total;
            return true
        }
        else return false;
    }
}
