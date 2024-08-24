
type TSubText = "error" | "ok"

interface InputSubTextProps{
    text : string;
    error?: Record<Partial<TSubText>,string>;
}

export default function ErrorSubText(
    {
        text
    }
    :
    {
        text:string
    }
){
    return(
        <p>{text}</p>
    )
}