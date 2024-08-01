'use client'
import styles from './Task.module.css'
import { useState } from "react";

export interface iTask{
    body:string;
    category?:string;
    id:string;
}


export default function Task({task}:{task:iTask}){
    const [isCompleted,setIsCompleted] = useState<boolean>(false)

    return(
        <div className={styles.taskContainer}>
            <input type="checkbox" 
                id={task.id} 
                checked={isCompleted} 
                onChange={()=>setIsCompleted(value=>!value)}
            />
            <label htmlFor={task.id}>{task.body}</label>
            {task.category&&
                <span>{task.category}</span>
            }
        </div>
    )
}