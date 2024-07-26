import { useContext } from "react";

import { UserContext } from "./UserContext";

import styles from "../header.module.css";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.Header}>
      <h1 className={styles.Head}>Newsbase</h1>
      <h2>Current articles on trending topics</h2>
      <p>Logged in as {user.name}</p>
    </div>
  );
}

export default Header;
