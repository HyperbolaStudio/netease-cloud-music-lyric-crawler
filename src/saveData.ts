import * as fs from 'fs';
import * as path from 'path';

const dataPath = 'data'

export function saveData(
    musicId: number, 
    musicTitle: string,
    lyric: string
){
    return new Promise<void>((resolve,reject)=>{
        let data = `${musicId}\n${musicTitle}\n${lyric}`;
        let fileName = musicId.toString(16);
        let index = fileName.slice(0,2);
        let filePath = path.join(dataPath, index);
        if(!fs.existsSync(filePath))fs.mkdirSync(filePath);
        fs.writeFile(path.join(filePath, fileName), data, (e)=>{
            if(e)reject(e);
            else resolve();
        });
    });
}