import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div>Nav
      <nav>
      <ul>
        <li><Link to="/">Candidate Search</Link></li>
        <li><Link to="/SavedCandidates">Saved Candidates</Link></li>
      </ul>
      </nav>
    </div>
  )
};

export default Nav;
