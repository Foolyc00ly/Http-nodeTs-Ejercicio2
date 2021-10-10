import{ITarea}from './interfaces/ITarea';
export class TareaList{
    public listado:ITarea[];
    constructor(){
        this.listado=[];
    }
    newTarea(...restArgs:ITarea[]){
        restArgs.forEach(ra=>this.listado.push(ra));
    }
}