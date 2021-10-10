import * as readline from 'readline';
const onConsoleEvent=(message:string,resp:boolean):Promise<string>=>{
    return new Promise((resolve)=>{
        const readLine=readline.createInterface({
            input:process.stdin,
            output:process.stdout
        });
        readLine.question(`${message.green}`,(opt)=>{
            if(resp){console.log({opt});}
            readLine.close();
            resolve(opt);
        });
    });

}
export const OptionEvent={
    Read:()=>onConsoleEvent('Seleccione una Opcion:',true),
    Pause:()=>onConsoleEvent('Presione Enter Para continuar:',false)
}