'use client'
import { FaGraduationCap , FaRegCalendarCheck ,FaHouse ,FaUnlock , FaWallet , FaRegPenToSquare, FaRegSquareCheck, FaDumbbell, FaGear  } from "react-icons/fa6";
import { IconType } from "react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './Navbar.module.css'
interface iLinks{
    path:string;
    text:string;
    icon?:IconType
}

const links:iLinks[] = [
    {
        path: "/",
        text: "Home",
        icon:  FaHouse
    },
    {
        path:"/tasks",
        text: "Tasks",
        icon: FaRegSquareCheck
    },
    {
        path: "/gym",
        text: "Gym",
        icon: FaDumbbell 
    },
    {
        path: "/calendar",
        text: "Calendario",
        icon: FaRegCalendarCheck
    },
    {
        path:"/wallet",
        text: "Wallet",
        icon: FaWallet
    },
    {
        path: "/notes",
        text: "Notes",
        icon: FaRegPenToSquare
    },
    {
        path: "/study",
        text: "Study",
        icon: FaGraduationCap
    },
    {
        path: "/passwords",
        text: "Passwords",
        icon: FaUnlock
    },
    {
        path: "/config",
        text: "Configuration",
        icon: FaGear 
    },

]

const user = {
    isLogged: false
}

export default function Navbar(){
    const route = usePathname()
    return(
        <nav>
            <ul className={styles.linksContainer}>
                {links.map((link)=>(
                    <li key={link.path}>
                        <Link href={link.path}
                            className={`${styles.link} ${(route === link.path ? styles.active : "")}`}
                        >
                            {link.icon &&
                                <link.icon className={styles.icon}
                            />}

                            <p className={styles.text}>
                                {link.text}
                            </p>
                        </Link>
                    </li>
                ))}
                <li className={styles.logButton}>
                    {user.isLogged ?
                     <button>LogOff</button> 
                     : 
                     <Link href={"/log"}>Login</Link>}
                </li>
            </ul>
        </nav>
    )
}