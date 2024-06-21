import { useContext } from "react";

import { UserContext } from "./UserContext";

import styles from "../header.module.css";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.Header}>
      <h1 className={styles.Head}>Newsbase</h1>
      <p>Logged in as {user.name}</p>
    </div>
  );
}

export default Header;
