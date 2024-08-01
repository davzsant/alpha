import Link from 'next/link'
import Task, { iTask } from '../../Task/Task'
import styles from './MainTasks.module.css'

export default async function MainTasks(){
    const tasks:iTask[] = [
        {
            body:"Regar plantas",
            id: "1",
            category: "Home"
        },
        {
            body:"Estudar Ingles",
            id: "2",
            category: "Idiomas"
        },
        {
            body:"Exercicio de fixacao em Quimica inorganica",
            id: "3",
            category: "Enem - Quimica"
        },
        {
            body:"Corrigir bug em aplicacao next",
            id: "4",
            category: "Programacao"
        },
        {
            body:"Ir ao banco",
            id: "5",
        },
    ]
    
    return(
        <div className={styles.tasksContainer}>
            <h2 className={styles.title}>Main tasks 😅</h2>
            {tasks.map((task)=>(
                <Task task={task} key={task.id}/>
            ))}
            <div className={styles.linkButton}>
                <Link href={"/tasks"} >...All tasks</Link>
            </div>
        </div>
    )
}