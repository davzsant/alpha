"use client"
import { IEvents } from "@/functions/DateManipulate";
import { useRef, useState } from "react";
import CustomInput from "../Input";

/**
 * Reendiza um Componente que carrega as informações de Event
 * @param event dados do evento
 */
export default function EventLabel({event}:{event:IEvents}){
    
    return(
        <div className="border w-full text-white my-10">
            {event.text}
        </div>
    )
}