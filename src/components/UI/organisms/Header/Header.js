import styles from './Header.module.scss'
import Logo from '../../../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} className={styles.header_logo}/>
            <nav className={styles.header_container}>
                <Link className={styles.header_link} to="signUp">sign up </Link>
            </nav>
        </header>
    )
}

export default Header