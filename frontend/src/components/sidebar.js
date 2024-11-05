import { Link } from 'react-router-dom';
import './sidebar.css'

function Sidebar() {
    return (
      <>
        <nav className="navbar">
        <div className="brandname"><p>Preserve</p></div>
           <ul>
            <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
            <li>Home</li>
            </Link>
            <Link to='/grocery' style={{ color: 'inherit', textDecoration: 'none' }}>
            <li>Grocery Book</li>
            </Link>
            <Link to='/grocery' style={{ color: 'inherit', textDecoration: 'none' }}>
            <li>Medicine Book</li>
            </Link>
            <Link to='/grocery' style={{ color: 'inherit', textDecoration: 'none' }}>
            <li>Recipe Book</li>
            </Link>
            <Link to='/grocery' style={{ color: 'inherit', textDecoration: 'none' }}>
            <li>Community</li>
            </Link>
            <Link to='/grocery' style={{ color: 'inherit', textDecoration: 'none' }}>
            <li>Profile</li>
            </Link>
           </ul>
        </nav>
      </>
    );
  }
  
  export default Sidebar;