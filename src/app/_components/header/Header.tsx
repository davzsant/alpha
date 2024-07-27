import Navbar from "./navbar/Navbar";
import styles from './Header.module.css'

export default function Header(){
    return(
        <div className={styles.headerContainer}>
            <div>
                <p>Alpha</p>
            </div>
            <Navbar/>
        </div>
    )
}