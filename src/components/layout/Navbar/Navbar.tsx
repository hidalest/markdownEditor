import React, { MouseEventHandler } from 'react';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
import HamburgerButton from '../../UI/Hamburger/Hamburger';
import Button from '../../UI/Button/Button';

const Navbar: React.FC<NavbarProps> = ({ isActive, onClick }) => {
  const onSaveClickHandler = () => {};

  return (
    <nav className='navbar'>
      <Sidebar isActive={isActive} />
      <div className='navbar__actions'>
        <HamburgerButton
          isActive={isActive}
          className={'navbar__hamburger'}
          onClick={onClick}
        />
        <h1 className='navbar__title'>Markdown</h1>
        <span className='navbar__separator'></span>
      </div>

      <div className='navbar__actions'>
        <button className='navbar__actions-btnDelete'>
          <span className='material-symbols-outlined '>delete</span>
        </button>
        <Button
          className='navbar__actions-btnSave '
          buttonType='save'
          onClick={onSaveClickHandler}
        >
          {'Save Changes'}
        </Button>
      </div>
    </nav>
  );
};

interface NavbarProps {
  isActive: boolean;
  onClick: MouseEventHandler;
}

export default Navbar;
