import { useContext } from "react";

import { UserContext } from "./UserContext";

import styles from "../header.module.css";

import image from "../assets/newsbase_logo.png"

function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.Header}>
      <h1 className={styles.Head}>Newsbase</h1>
      <h2>Current articles on trending topics</h2>
      <img className={styles.img} src={image}/>
      <p>Logged in as {user.name}</p>
    </div>
  );
}

export default Header;
