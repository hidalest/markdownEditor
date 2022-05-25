import react from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <aside className='navbar__aside'>
        <h2>My Documents</h2>
      </aside>
    </nav>
  );
};

export default Navbar;
