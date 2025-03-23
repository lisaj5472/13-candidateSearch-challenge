import { Link } from "react-router-dom";

const Nav = () => {

  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>Nav
      <ul>
        <li><Link to="/search">Candidate Search</Link></li>
        <li><Link to="/results">Saved Candidates</Link></li>
      </ul>
    </div>
  )
};

export default Nav;
