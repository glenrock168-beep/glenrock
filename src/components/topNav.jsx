import { useEffect, useRef, useState } from 'react';
import './components.css';

const TopNav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const menuRef = useRef(null);

  const lock = () => {
    if (isLocked) return false;
    setIsLocked(true);
    setTimeout(() => setIsLocked(false), 350);
    return true;
  };

  const showMenu = () => {
    if (lock()) {
      setIsMenuVisible(true);
    }
  };

  const hideMenu = () => {
    if (lock()) {
      setIsMenuVisible(false);
    }
  };

  const toggleMenu = () => {
    if (lock()) {
      setIsMenuVisible(!isMenuVisible);
    }
  };

  const handleMenuClick = (event) => {
    event.stopPropagation();
    hideMenu();
  };

  const handleCloseClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    hideMenu();
  };

  const handleLinkClick = (event) => {
    const href = event.currentTarget.getAttribute('href');
    event.preventDefault();
    event.stopPropagation();
    hideMenu();
    setTimeout(() => {
      window.location.href = href;
    }, 350);
  };

  const handleMenuButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleMenu();
  };

  const handleBodyClick = (event) => {
    if (event.target.matches('a[href="#menu"]')) {
      event.stopPropagation();
      event.preventDefault();
      toggleMenu();
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) { // Escape key
      hideMenu();
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick);
    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isMenuVisible) {
      document.body.classList.add('is-menu-visible');
    } else {
      document.body.classList.remove('is-menu-visible');
    }
  }, [isMenuVisible]);

  return (
    <>
      <header id="header">
        <h1><a href="index.html">Glenrock</a></h1>
        <nav>
          <a href="#menu" onClick={handleMenuButtonClick} aria-label="Menu"></a>
        </nav>
      </header>
      <nav id="menu" ref={menuRef} onClick={handleMenuClick}>
        <a href="#" className="close" onClick={handleCloseClick}>Close</a>
        <div className="inner">
          <h2>Menu</h2>
          <ul className="links">
            <li><a href="index.html" onClick={handleLinkClick}>Home</a></li>
            <li><a href="generic.html" onClick={handleLinkClick}>Generic</a></li>
            <li><a href="elements.html" onClick={handleLinkClick}>Elements</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
