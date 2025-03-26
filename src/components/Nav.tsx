import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div>Nav
      <nav className='nav'>
      <ul>
        <li className='nav-link'><Link to="/">Candidate Search</Link></li>
        <li className='nav-link'><Link to="/SavedCandidates">Saved Candidates</Link></li>
      </ul>
      </nav>
    </div>
  )
};

export default Nav;
