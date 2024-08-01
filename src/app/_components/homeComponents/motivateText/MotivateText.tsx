import styles from './MotivateText.module.css'


const getText = async() => {
    try{
        const request = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        if(!request.ok){
            return {
                body: "Have a good day, you are amazing :)"
            }
        }
    
        return await request.json()
    }catch{
        return {
            body: "Have a good day, you are amazing :)"
        }
    }
    
    
}

export default async function MotivateText(){
    const res = await getText()
    const text = res.body
    

    return(
        <div className={styles.textContainer}>
            <h2 className={styles.title}>A text to you🍃</h2>
            <p className={styles.textBody}>{text}</p>
        </div>
    )
}