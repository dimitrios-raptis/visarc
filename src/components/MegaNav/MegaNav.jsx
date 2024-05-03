import PropTypes from 'prop-types';
import batur from '../../assets/images/batur.png';
import rectangle from '../../assets/images/rectangle.svg';
import MegaSubNav from './MegaSubNav';

const MegaNav = ({
  active,
  data,
  activeSubMenu,
  setActiveSubMenu,
  subItemIndex,
  handleSubMenu,
  burgerClicked,
  selectedNavItem,
}) => {
  const handleBackBtn = () => {
    setActiveSubMenu(false);
  };

  let megaNavData;
  // Determine which submenu items to render
  if (active && burgerClicked) {
    megaNavData = data;
  } else if (!active || burgerClicked) {
    megaNavData = [];
  } else {
    // Get the data of the PrimaryNav item that was clicked
    const selectedPrimaryNavData = data.find(item => item.label === selectedNavItem && item.isPrimaryNav);
    megaNavData = selectedPrimaryNavData ? selectedPrimaryNavData.submenu || [] : []; [];
  }

  return (
    <div className={`megaNav ${active ? 'megaNav--active': ''}`}>
      <div className='megaNav__wrapper'>
        <div className='megaNav__menus-container'>
          <nav className='megaNav__menus'>
            <ul className='megaNav__list'>
              {megaNavData.map((item, index) => {
                const hasSubMenu = !!item.submenu;
                const isItemIndex = subItemIndex === index;
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
                        className={`megaNav__list-item-content ${activeSubMenu ? 'megaNav__list-item-content--active-submenu': ''}`}
                        onClick={() => handleSubMenu(item, index)}
                      >
                        {activeSubMenu && (
                          <img src={rectangle} alt='Submenu is open' className='megaNav__subMenu-icon' />
                        )}
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
  activeSubMenu: PropTypes.bool,
  setActiveSubMenu: PropTypes.func,
  subItemIndex: PropTypes.number,
  handleSubMenu: PropTypes.func,
  burgerClicked: PropTypes.bool,
  selectedNavItem: PropTypes.string,
};

export default MegaNav;

