import { useState } from 'react';
import data from '../../assets/data/mainNavData.js';
import { filter } from 'lodash';
import mainLogo from '../../assets/images/logo.svg';
import burgerIcon from '../../assets/images/burger.svg';
import closeIcon from '../../assets/images/close.svg';
import MegaNav from '../MegaNav/MegaNav.jsx';

const Header = () => {
  const [activeMegaNav, setActiveMegaNav] = useState(false);
  const primaryNav = filter(data, 'isPrimaryNav');

  const handleBurgerClick = () => {
    setActiveMegaNav(((state) => !state));
  };

  return (
    <header className='header'>
      <nav className='header__primary-nav'>
        <ul className='header__list'>
          {primaryNav.map((item, index) => (
            <li key={index} className={`header__list-item ${item.isPrimaryNav ? 'header__list-item--desktop': ''}`}>
              <a
                href={item.link}
              >
                {item.label}
              </a>
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
      <MegaNav active={activeMegaNav} data={data} />
    </header>
  );
};

export default Header;
