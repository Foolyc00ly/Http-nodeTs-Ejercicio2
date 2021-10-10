import{v4 as uuidv4}from 'uuid'
export class Tarea{
    public id:string;
    public descripcion:string
    public completadoEn:string;
    constructor(descripcion:string){
        this.id=uuidv4();
        this.descripcion=descripcion;
        this.completadoEn='';
    }
}