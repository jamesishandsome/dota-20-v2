import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
    const id = context.params.id;
    const data = await fetch(`https://api.opendota.com/api/players/${id}`);
    console.log(id);
    return new NextResponse(data.body);
}
