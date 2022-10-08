import styles from './Header.module.scss'
import Logo from '../../../../assets/icons/logo.svg'
const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} className={styles.header_logo}/>
            <div className={styles.header_container}></div>
        </header>
    )
}

export default Header