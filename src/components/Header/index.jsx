import React from "react";
import JestLogo from '../JestLogo';
import styles from './styles.module.scss';

const Header = (props) => {

    return (
        <header data-testid="Header-root">
            <div className={styles.wrap}>
                <JestLogo data-testid="JestLogo" className={styles.logo} />
            </div>
        </header>
    );
}

export default Header;