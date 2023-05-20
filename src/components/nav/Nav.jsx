import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styles from "./Nav.module.css"


const Nav = (props) => {
  const { onSearch } = props;
  return (<div>
    <SearchBar onSearch={onSearch} />
  </div>);
}
export default Nav;