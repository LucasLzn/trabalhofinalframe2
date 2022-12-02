import styles from '../styles/Navbar.module.css';

export default function Navbar(){
    return (
        <div> 
            <ul className={styles.navbar}> 

                <li> <a href='/'> Home </a> </li>
                <li> <a href='/produtos'> Produtos </a> </li>
                <li> <a href='/supreme'> Supreme </a> </li>

            </ul>
        </div>
    )
}