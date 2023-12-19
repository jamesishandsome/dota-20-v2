import { NextRequest, NextResponse } from 'next/server';
import idList from './idList.json';
export async function GET(request: NextRequest) {
    let mmrList = [];
    for (const id of idList) {
        const data = await fetch(`https://api.opendota.com/api/players/${id}`);
        const mmr = await data.json();
        mmrList.push(mmr);
    }
    return new NextResponse(JSON.stringify(mmrList));
}
