import EventLabel from "@/app/_components/EventLabel/Event"
import DateFunctions from "@/functions/DateManipulate"
import TaskManager from "@/functions/TaskManager"

interface IParams{
    dayId:string 
}

export default async function DayId({params}:{params:IParams}){
    const dateObj = DateFunctions.convertToDate(Number(params.dayId))
    const dateInformation = await DateFunctions.getInfoByDay(dateObj,'pt')
    const task = TaskManager.getDailyTaskByWeekDay(Number(params.dayId))
    return(
        <div className="bg-gray-950 min-h-screen">
            <h2 className="text-rainbowTheme-orange-high font-extrabold text-center">
                {dateInformation.dayStr}
            </h2>
            <h3 className="text-rainbowTheme-orange-low text-center">
                {dateInformation.weekdayStr}
            </h3>
            <div>{dateInformation.events?.map(event=>(
                <EventLabel event={event} key={event.eventId}/>
            ))}</div>
            <div className="border text-white">
                <h2>Tarefas do dia:</h2>
                {task?.map((task)=>(
                    <div key={task.taskId}>
                        <div>{task.topic}</div>
                        <div>{task.link1}</div>
                        <div>{task.category}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}