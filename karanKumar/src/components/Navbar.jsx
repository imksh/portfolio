import styles from "./Navbar.module.css";
import { NavLink } from "react-router";
import { Contact } from '../pages/Contact';
import { Portfolio } from '../pages/Portfolio';
import { About } from '../pages/About';
import { Home } from '../pages/Home';

export const Navbar = () => {
    return(
        <div className={styles.nav}>
            <div className={styles.name}>
                <NavLink to="/">
                    <h1>Karan Sharma</h1>
                </NavLink>
            </div>
            <div className={styles.lists}>
                <ul>
                    <li>
                        <NavLink to="/">
                            {({ isActive }) => (
                                <span className={isActive ? styles.active : styles.inactive}>Home</span>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            {({ isActive }) => (
                                <span className={isActive ? styles.active : styles.inactive}>About</span>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/myportfolio">
                            {({ isActive }) => (
                                <span className={isActive ? styles.active : styles.inactive}>Portfolio</span>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            {({ isActive }) => (
                                <span className={isActive ? styles.active : styles.inactive}>Contact</span>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}