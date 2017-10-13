import * as React from 'react';

const styles = require('./Header.css');

const chuck = require('./chuck.png');

const Header = () => (
  <div className={styles.header}>
    <img src={chuck} className={styles.header__logo} alt="Chuck approved" />
  </div>
);

export default Header;