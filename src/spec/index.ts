import{TareaList}from 'models/Tarea-list.class';

const error=(message:string):Promise<never>=>Promise.reject(message);
//Instancia de classes
const tareaList=new TareaList();
export{error,tareaList};