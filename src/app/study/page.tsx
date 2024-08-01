import Link from 'next/link'
import styles from './study.module.css'

let allSubjects = [
    {
        subject: "Matematica",
        id:"matematica",
    }
]
export default function Study(){
    
    return(
        <div className={styles.subjectContainer}>
            {allSubjects.map(subject=>(
                <div className={styles.subject}>
                    <h2 className={styles.title}>{subject.subject}</h2>
                    <Link href={"/study/"+subject.id}>
                        <div className={styles.linkContainer}></div>
                    </Link>
                    <button className={styles.buttonTest}>Do a test</button>
                    
                </div>
            ))}
        </div>
    )
}