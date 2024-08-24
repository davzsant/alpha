

type TInputType = "text" | "number" | "password" | "email"

export default function Body(
    {
        inputType = "text",
        placeholder = ""
    }
    :
    {
        inputType:TInputType,
        placeholder:string
    }){
    return(
        <input type={inputType} placeholder={placeholder}/>
    )
}