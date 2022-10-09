import styles from './Header.module.scss'
import Logo from '../../../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../store/user/userSlice'

const Header = () => {
    const user = useSelector(selectUser)

    return (
        <header className={styles.header}>
            <img src={Logo} className={styles.header_logo}/>
            <nav className={styles.header_container}>
                <Link className={styles.header_link} to="signUp">sign up </Link>
                {user.email && <Link className={styles.header_link}  to="personalInfo">personal info</Link>}
            </nav>
        </header>
    )
}

export default Header