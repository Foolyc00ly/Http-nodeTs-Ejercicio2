import{ITarea}from 'models/interfaces/ITarea'
import{Tarea}from 'models/Tarea.class';
const getValues=async(description:string):Promise<ITarea> => {
    try{
        const newTarea=new Tarea(description)
        return newTarea;
    }catch(err){
        throw err
    }
}
export{getValues}