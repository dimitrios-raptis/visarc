import PropTypes from 'prop-types';
import arrowLeft from '../../assets/images/arrow-right.svg';

const MegaSubNav = ({ item, isItemIndex, activeSubMenu, handleBackBtn }) => {
  return (
    <div className={`megaNav__submenu-wrapper ${isItemIndex && activeSubMenu ? 'megaNav__submenu-wrapper--active': ''}`}>
      <div
        className='megaNav__submenu-back-btn'
        onClick={handleBackBtn}
      >
        <img src={arrowLeft} alt='Go back to submenu' className='megaNav__submenu-back-arrow' />
        Back
      </div>
      {isItemIndex && (
        <ul className={`megaNav__submenu ${isItemIndex && activeSubMenu ? 'megaNav__submenu--active': ''}`}>
          {item.submenu.map((la, index) => (
            <li key={index} className='megaNav__submenu-item'>
              <a
                href={la.link}
                className='megaNav__list-item-content'
              >
                {la.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

MegaSubNav.propTypes = {
  item: PropTypes.object,
  isItemIndex: PropTypes.bool,
  activeSubMenu: PropTypes.bool,
  handleBackBtn: PropTypes.func,
};

export default MegaSubNav;
