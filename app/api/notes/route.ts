import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const data = await req.json();
    const { title, content } = data
    const userId = "0344dbcf-d129-460f-a822-79495fc9c9cb"
    if(!title || !content || !userId){
        return NextResponse.json({
            error: 'Missing required fields'
        }, {
            status: 400
        })
    }
    const newNote = await prismaClient.note.create({
        data: {
            title, 
            content,
            userId
        }
    })
    return NextResponse.json({
        newNote
    }, {
        status: 201
    })
}

export async function GET(){
    const note = await prismaClient.note.findMany()
    return NextResponse.json({
        note
    })
}