import inquirer from 'inquirer';
import 'colorts/lib/string';
import 'colors';
const question=[{
    type:'input',
    name:'enter',
    message:`Presione ${'enter'.green} para continuar`
}];
const menuOpts=[{
    type:'list',
    name:'opcion',
    message:'¿Qué desea hacer?',
    choices:[
        {
            value:1,
            name:`${'1. Crear Tarea'.red}`
        },
        {
            value:2,
            name:`${'2. Listar Tarea'.red}`
        },
        {
            value:3,
            name:`${'3. Listar Tareas Completadas'.red}`
        },
        {
            value:4,
            name:`${'4. Listar Tareas Pendientes'.red}`
        },
        {
            value:5,
            name:`${'5. Completar Tarea(s)'.red}`
        },
        {
            value:6,
            name:`${'6. Borrar Tarea'.red}`
        },
        {
            value:0,
            name:`${'0. Salir'.red}`
        },
    ]
}]
export const inquirerMenu=async():Promise<number>=>{
    const{opcion}=await inquirer.prompt(menuOpts);
    return opcion
}
export const pause=async()=>{
    console.log('\n');
    await inquirer.prompt(question)
}