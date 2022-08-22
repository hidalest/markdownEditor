import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
import HamburgerButton from '../../UI/Hamburger/Hamburger';
import Button from '../../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { filesActions } from '../../../store';

const Navbar = ({ isActive, onClick }) => {
  const files = useSelector((state) => state.files.files);
  const selectedFile = files.find((file) => file.isActive === true);
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [fileName, setFileName] = useState(selectedFile.name);

  const onSaveClickHandler = () => {
    localStorage.setItem('files', JSON.stringify(files));
  };

  useEffect(() => {
    setFileName(selectedFile.name);
  }, [selectedFile]);

  const editFileNameHandler = (e) => {
    setShowInput(true);
  };

  const saveFileNameHandler = (e) => {
    e.preventDefault();

    dispatch(
      filesActions.updateFileProperty({
        property: 'name',
        value: fileName,
      })
    );
    setShowInput(false);
  };

  const updateFileNameHandler = (e) => {
    setFileName(e.target.value);
  };

  const handleFocus = (e) => e.target.select();

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
        <div className='navbar__current-file'>
          {showInput && (
            <form onSubmit={saveFileNameHandler}>
              <input
                type='text'
                value={fileName}
                onChange={updateFileNameHandler}
                autoFocus
                onFocus={handleFocus}
                onBlur={() => setShowInput(false)}
              />
              <button
                className='material-symbols-outlined'
                onClick={saveFileNameHandler}
                type='submit'
              >
                save
              </button>
            </form>
          )}
          {!showInput && (
            <>
              <p onDoubleClick={editFileNameHandler}>{selectedFile.name}</p>

              <button
                class='material-symbols-outlined'
                onClick={editFileNameHandler}
              >
                edit
              </button>
            </>
          )}
        </div>
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

export default Navbar;
