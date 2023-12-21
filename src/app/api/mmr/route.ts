import { NextRequest, NextResponse } from 'next/server';
import idList from './idList.json';
// export async function GET(request: NextRequest) {
//     let mmrList = [];
//     for (const id of idList) {
//         const data = await fetch(`https://api.opendota.com/api/players/${id}`);
//         const mmr = await data.json();
//         mmrList.push(mmr);
//     }
//     return new NextResponse(JSON.stringify(mmrList));
// }

export async function GET(request: NextRequest) {
    const barkBaseUrl = 'https://bark.iseayou.icu';
    const barkKey = 'y8fhq9xYLTwBJCWQWPAgs7';
    const title = 'mmr2';
    const body = 'mmr';
    const barkUrl = `${barkBaseUrl}/${barkKey}/${title}/${body}`;
    const res = await fetch(barkUrl);
    console.log(res.body);
    return new NextResponse(JSON.stringify(res));
}
