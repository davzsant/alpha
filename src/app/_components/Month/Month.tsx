import { IDayEvents } from "@/functions/DataManipulate";

/**
 * Reendeniza um mes com seus respectivos dias, semelhante a uma pagina de um calendario
 */
export default function Month({monthDays}:{monthDays:IDayEvents[]}){
   return(
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 p-3 m-5 border gap-5">
            {monthDays.map((day)=>(
                <div key={day.dayId} className="border border-red-400">
                    {day.dayStr} | {day.weekdayStr} | {day.monthStr}
                </div>
            ))}
        </div>
   )
}