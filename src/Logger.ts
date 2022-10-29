import * as fs from 'fs';

export namespace Logger {
    let outStream: fs.WriteStream;
    export function setFile(fileName: string){
        outStream = fs.createWriteStream(fileName);
    }
    export function info(...args: any[]){
        outStream.write(`INFO ${args.join(' ')}\n`);
    }
    export function error(...args: any[]){
        outStream.write(`ERROR ${args.join(' ')}\n`);
    }
}