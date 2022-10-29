import * as ncm from 'NeteaseCloudMusicApi'

const removedTags = [
    "作词", 
    "作曲", 
    "编曲", 
    "混音", 
    "调教",
    "pv",
    "PV",
    "Pv",
    "曲绘",
    "监制",
    "策划",
    "演唱",
    "原曲",
    "填词",
    "画师",
    "绘画",
    "原唱",
    "翻唱",
    "参演",
    "剪辑",
    "视频",
    "歌手",
    "歌词",
]

const removedRegExp = new RegExp(`.*(${removedTags.map(v=>`(${v})`).join('|')}).*[:：].*?\n`, 'g')

export async function getLyric(id: string|number){
    let rawData =  ((await ncm.lyric({id})).body.lrc as any).lyric as string;
    let lyric = rawData
        .replace(/(\[.*?\])/g, '')
        .replace(removedRegExp, '');
    return lyric;
}