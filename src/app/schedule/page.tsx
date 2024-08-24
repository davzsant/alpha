import DateFunctions from "@/functions/DateManipulate"
import Month from "../_components/Month/Month"


/**
 * Rota que reendeniza um calendario com os proximos 30 dias, buscando todas as inforamações que são necessarias
 */
export default async function Schedule(){
    const allDays = await DateFunctions.getAllNextDaysAndInfo(30,'pt')

    return(
        <div className="bg-gray-950 text-white">
            {Object.entries(allDays).map(([monthName,monthDays])=>(
                <div key={monthName}>
                    <p className={`text-rainbowTheme-orange-low text-4xl text-center`}>{monthName}</p>
                    <Month monthDays={monthDays}/>
                </div>
            ))}
        </div>
    )
}