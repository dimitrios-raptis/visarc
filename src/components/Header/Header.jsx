import { useState } from 'react';
import data from '../../assets/data/mainNavData.js';
import { filter } from 'lodash';
import mainLogo from '../../assets/images/logo.svg';
import burgerIcon from '../../assets/images/burger.svg';
import closeIcon from '../../assets/images/close.svg';
import MegaNav from '../MegaNav/MegaNav.jsx';
import batur from '../../assets/images/batur.png';

const Header = () => {
  const [activeMegaNav, setActiveMegaNav] = useState(false);
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(false);
  const [subItemIndex, setSubItemIndex] = useState(null);
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const [megaImage, setMegaImage] = useState(batur);

  // Get the data only of the first 4 PrimaryNav items for layout safety
  const primaryNavData = filter(data, 'isPrimaryNav').slice(0, 4);

  const handleBurgerClick = () => {
    setActiveMegaNav(((state) => !state));
    if (activeMegaNav === false) {
      setBurgerClicked(true); // Set burgerClicked to true only when megaNav is opened
      setActiveSubMenu(false);
      setMegaImage(batur);
    } else {
      setBurgerClicked(false); // Reset burgerClicked to false when megaNav is closed
      setActiveSubMenu(true);
    }
  };

  const handleSubMenu = (item, index) => {
    const hasSubMenu = !!item.submenu;
    if (hasSubMenu) {
      const clickedItemData = data.find((navItem) => navItem.label === item.label);

      // For PrimaryNav items
      if (clickedItemData.isPrimaryNav && window.innerWidth > 768) {
        setActiveSubMenu(false);
      } else {
        setActiveSubMenu((state) => !state);
      }
      // Get the index of the selected item
      // in order to get the relative data
      setSubItemIndex(index);
    }

    if (hasSubMenu && item.isPrimaryNav && window.innerWidth > 768) {
      setActiveMegaNav(true);
      setBurgerClicked(false);
      setSelectedNavItem(item.label);
    }
  };

  const htmlElement = document.body;
  if (activeMegaNav) {
    htmlElement.classList.add('megaNav-open');
  } else {
    htmlElement.classList.remove('megaNav-open');
  }

  return (
    <header className='header'>
      <nav className='header__primary-nav'>
        <ul className='header__list'>
          {primaryNavData.map((item, index) => (
            <li key={index} className={`header__list-item ${item.isPrimaryNav ? 'header__list-item--desktop': ''}`}>
              {item.link ? (
                <a
                  href={item.link}
                  className='megaNav__list-item-content'
                >
                  {item.label}
                </a>
              ): (
                <div
                  className='megaNav__list-item-content'
                  onClick={() => handleSubMenu(item, index)}>
                  {item.label}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <img src={mainLogo} alt='Bentley site logo' className='header__logo' />
      <div className='header__secondary-nav'>
        <div className='header__burgerBtn' onClick={handleBurgerClick}>
          <img src={activeMegaNav ? closeIcon : burgerIcon } alt='Burger icon' className='header__burger' />
        </div>
      </div>
      <MegaNav
        active={activeMegaNav}
        data={data}
        activeSubMenu={activeSubMenu}
        setActiveSubMenu={setActiveSubMenu}
        subItemIndex={subItemIndex}
        handleSubMenu={handleSubMenu}
        burgerClicked={burgerClicked}
        selectedNavItem={selectedNavItem}
        megaImage={megaImage}
        setMegaImage={setMegaImage}
      />
    </header>
  );
};

export default Header;
