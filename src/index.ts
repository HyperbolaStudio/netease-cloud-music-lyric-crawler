import { getLyric } from "./getLyric";
import { getPlayList } from "./getPlayList";
import * as fs from 'fs';
import { Logger } from "./Logger";
import { saveData } from "./saveData";

Logger.setFile('1.log');

function main(){
    let idList = new Set<number>();

    let source:{id: number, title: string}[] = JSON.parse(fs.readFileSync('playlist.json').toString());

    for(let entry of source){

        Logger.info('playlist', 'start', entry.title, entry.id);

        getPlayList(entry.id).then((musicList)=>{
            for(let musicInfo of musicList){

                if(idList.has(musicInfo.id))continue;

                getLyric(musicInfo.id).then((lyric)=>{
                    return saveData(musicInfo.id, musicInfo.name, lyric);
                }).then(()=>{
                    idList.add(musicInfo.id);
                    Logger.info('music', 'saved', musicInfo.id, musicInfo.name);
                }).catch((e)=>{
                    Logger.error('music', musicInfo.id, musicInfo.name, e);
                });

            }
        }).catch((e)=>{
            Logger.error('playlist', entry.title, entry.id, e);
        });
    }
}

main();


