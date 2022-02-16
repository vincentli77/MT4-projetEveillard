import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";


type Props = {

}

const Header = (props: Props) => {

    const [menu, setMenu] = useState(true);

    return (
        <div>
            <div className={ styles.container + ' ' + (menu ? styles.closeMenu : styles.openMenu)}>
                <nav>
                    <ul className={styles.navbar}>
                        <li>
                            <Link to="/add-card">Ajouter une carte</Link>
                        </li>
                        <li>
                            <Link to="/">Voir Carte</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/training">Training</Link>
                        </li>
                        <li>
                            <Link to="/quiz">QUIZ</Link>
                        </li>
                    </ul>
                </nav>

                <button className={styles.hamburger + ' ' + (menu ? ' ' : styles.closeBurger )} onClick={() => setMenu(!menu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>


            </div>
        </div>

    )
}

export default Header
