import React from "react";
import JestLogo from '../JestLogo';
import styles from './styles.module.scss';

const Header = (props) => {

    console.log(styles);

    return (
        <header>
            <div className={styles.wrap}>
                <JestLogo className={styles.logo} foo="test" />
            </div>
        </header>
    );
}

export default Header;