/**
 * Retorna a tarefa de acordo com o dia da semana
 */
function getDailyTaskByWeekDay(dayId:number){
    const tasks = [
        {
            taskId:'229182',
            dayId:19938,
            category: "Aula de quimica",
            topic: "Hidrocarbonetos",
            link1: "https://www.youtube.com/watch?v=xTM9D-OS1ag"
        },
        {
            taskId:'229182',
            dayId:19967,
            category: "Aula de quimica",
            topic: "Hidrocarbonetos",
            link1: "https://www.youtube.com/watch?v=xTM9D-OS1ag"
        },
        {
            taskId:'229182',
            dayId:19948,
            category: "Aula de quimica",
            topic: "Hidrocarbonetos",
            link1: "https://www.youtube.com/watch?v=xTM9D-OS1ag"
        },
    ]
    console.log("---------------")
    return tasks.filter((task)=>{
        if(task.dayId == dayId){
            return true
        }
    })
}


const TaskManager = {
    getDailyTaskByWeekDay
}

export default TaskManager