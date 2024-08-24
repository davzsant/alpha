import { NextResponse } from "next/server";
import { IEvents } from "@/functions/DateManipulate";
export async function GET(){
    return NextResponse.json<IEvents[]>([
        {
            text:"Aniversario Julia",
            category:"Aniversario",
            dayId: 19939,
            eventId:1,
            info:"Levar um presente a ela",
            time:"20:00:00",
            importance: 'medium'
        },
        {
            text:"Ir ao exercito",
            category:"Compromisso",
            dayId: 19937,
            eventId:1,
            info:"Ir bem vestido",
            time:"08:00:00",
            importance: 'high'
        },
        {
            text:"Falar com Ana",
            category:"Amizade",
            dayId: 19937,
            eventId:1,
            info:"Levar um presente a ela",
            time:"13:30:00",
            importance: 'medium'
        },

    ])
}