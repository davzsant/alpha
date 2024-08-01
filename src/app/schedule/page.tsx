import DataFunctions from "@/functions/DataManipulate"
import Month from "../_components/Month/Month"


/**
 * Rota que reendeniza um calendario com os proximos 30 dias, buscando todas as inforamações que são necessarias
 */
export default function Schedule(){
    const allDays = DataFunctions.getAllNextDaysAndInfo(30,'eng')

    return(
        <div>
            {Object.entries(allDays).map(([monthName,monthDays])=>(
                <div key={monthName}>
                    <p>{monthName}</p>
                    <Month monthDays={monthDays}/>
                </div>
            ))}
        </div>
    )
}