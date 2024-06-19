import { useContext } from "react";

import { UserContext } from "./UserContext";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="Header">
      <h1>Newsbase</h1>
      <p>Logged in as {user.name}</p>
    </div>
  );
}

export default Header;
