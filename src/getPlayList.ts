import * as ncm from 'NeteaseCloudMusicApi'

export async function getPlayList(id: string|number){
    let rawResult = (await ncm.playlist_track_all({id})).body.songs as any[];
    return rawResult.map((v)=>({name: v.name, id: v.id}));
}