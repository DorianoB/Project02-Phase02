import Nav from "./nav.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1 className="title">homebound</h1>
        </Link>

        <Nav />
      </div>
    </>
  );
}
export default Header;
