import { ReactNode} from "react"

interface IInputProps{
    children:ReactNode
}

export default function Main({children}:IInputProps){
    return(
        <div>
            {children}
        </div>
    )
}