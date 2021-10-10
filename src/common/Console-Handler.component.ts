import 'colorts/lib/string';
import 'colors';
import { inquirerMenu,pause } from 'config/Console-Event-InquirerMenu.component';
import{getValues}from 'config/http-provider-values.component'
import{tareaList}from 'spec';
interface Main{
    toString:()=>Promise<string>;
    Event:()=>void;
}
export const CONSOLEHandler=(()=>{
    return{
        render:(element:Main)=>{
            element.toString().then(async(click)=>{
                let opt:number;
                do{
                    console.clear();
                    console.log(click);
                    opt=await inquirerMenu();
                    console.log(tareaList.newTarea(await getValues('amar a Mía')));
                    console.log(tareaList);
                    console.log({opt});
                    await pause();
                }while(opt!==0);
            });
            element.Event();
        }
    }
})();


export const Main:Main=(()=>{
    const onConsoleLog=()=>{
    }
    return{
        toString:async()=>{
            return `
            ${'====================='.green}
            ${'Seleccione Una Opción'.green}
            ${'====================='.green}
            `
        },
        Event:()=>{
            const container=(()=>{
                onConsoleLog();
            })();
            container;
        }
    }
})()