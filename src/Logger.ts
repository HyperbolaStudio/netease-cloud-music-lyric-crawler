import * as fs from 'fs';

export namespace Logger {
    let outStream: fs.WriteStream;
    export function setFile(fileName: string){
        outStream = fs.createWriteStream(fileName);
    }
    export function info(...args: any[]){
        let text = `INFO ${args.join(' ')}\n`;
        outStream.write(text);
        console.log(text);
    }
    export function error(...args: any[]){
        let text = `ERROR ${args.join(' ')}\n`;
        outStream.write(text);
        console.error(text);
    }
}