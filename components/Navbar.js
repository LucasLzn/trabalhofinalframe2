import styles from '../styles/Navbar.module.css';

export default function Navbar(){
    return (
        <div  className={styles.navbar}> 

            <a className={styles.logo} href="/">SUPREME<span>!</span></a>

            <ul className={styles.navlinks}> 
                <li> <a href='/'> HOME </a> </li>
                <li> <a href='/produtos'> PRODUTOS </a> </li>

            </ul>
        </div>
    )
}