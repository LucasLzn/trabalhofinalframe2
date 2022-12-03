import styles from '../styles/Navbar.module.css';

export default function Navbar(){
    return (
        <div> 
            <ul className={styles.navbar}> 

                <li> <a href='/'> Home </a> </li>
                <li> <a href='/produtos'> Produtos </a> </li>

            </ul>
        </div>
    )
}