import { useState } from 'react';
import PropTypes from 'prop-types';
import batur from '../../assets/images/batur.png';
import MegaSubNav from './MegaSubNav';

const MegaNav = ({ active, data }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState('');

  const handleSubMenu = (hasSubMenu, index) => {
    if(hasSubMenu){
      setActiveSubMenu(((state) => !state));
      setShowSubMenu(index);
    }
  };

  const handleBackBtn = () => {
    setActiveSubMenu(false);
  };

  // Add a class on html in order to avoid overflow
  const htmlElement = document.body;
  if (active) {
    htmlElement.classList.add('megaNav-open');
  } else {
    htmlElement.classList.remove('megaNav-open');
  }

  return (
    <div className={`megaNav ${active ? 'megaNav--active': ''}`}>
      <div className='megaNav__wrapper'>
        <div className='megaNav__menus-container'>
          <nav className='megaNav__menus'>
            <ul className='megaNav__list'>
              {data.map((item, index) => {
                const hasSubMenu = !!item.submenu;
                const isItemIndex = showSubMenu === index;
                return (
                  <li
                    key={index}
                    className={`megaNav__list-item ${item.isPrimaryNav ? 'megaNav__list-item--primary-nav-item': ''}`}
                  >
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
                        onClick={() => handleSubMenu(hasSubMenu, index)}>
                        {item.label}
                      </div>
                    )}
                    {hasSubMenu && (
                      <MegaSubNav
                        item={item}
                        isItemIndex={isItemIndex}
                        activeSubMenu={activeSubMenu}
                        handleBackBtn={handleBackBtn}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
            <div className='megaNav__login-section'>
              <a href='#' className='megaNav__login-link'>Login</a>
              <a href='#' className='megaNav__login-link'>Register</a>
            </div>
          </nav>
        </div>
        <div className='megaNav__content'>
          <img src={batur} alt='Mega menu Batur car image' className='megaNav__content-img' />
        </div>
      </div>
    </div>
  );
};

MegaNav.propTypes = {
  active: PropTypes.bool,
  data: PropTypes.array,
};

export default MegaNav;

