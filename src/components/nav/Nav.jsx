import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styles from "./Nav.module.css";

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div className={styles.nav}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};
export default Nav;
