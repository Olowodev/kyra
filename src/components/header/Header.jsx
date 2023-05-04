import Navbar from "../navbar/Navbar";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <Navbar />
            <div className={styles.headerCont}>
                    <img className={styles.headerBg} src="/headerImg.png" />
                <div className={styles.headerP}>
                    <p>authentically</p>
                    <p>connect</p>
                    <p>with the next</p>
                    <p>generation</p>
                </div>
                <a className={styles.headerButton}>
                    sign up today
                </a>
            </div>
        </div>
    );
}

export default Header;