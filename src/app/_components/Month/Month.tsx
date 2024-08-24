import { IDayEvents } from "@/functions/DateManipulate";
import Link from "next/link";

/**
 * Reendeniza um mes com seus respectivos dias, semelhante a uma pagina de um calendario
 */
export default function Month({monthDays}:{monthDays:IDayEvents[]}){
   return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 p-3 m-5 gap-5">
            {monthDays.map((day)=>(
                <Link href={`/schedule/${day.dayId}`} key={day.dayId} 
                className="h-[28vh] p-5 border border-white bg-rainbowTheme-orange-low rounded items-center">
                    <p className="text-black font-bold text-center">{day.dayStr}</p>
                    <p className="text-rainbowTheme-orange-high font-bold text-center text-sm lg:text-lg">{day.weekdayStr}</p>
                    <div className="mx-auto gap-3 overflow-hidden">
                        {day.events?.map(event=>(
                            <div key={event.eventId} className="bg-rainbowTheme-orange-mid p-1 lg:p-2 text-xs  my-4">{event.text}</div>
                        ))}
                    </div>
                </Link>
            ))}
        </div>
   )
}