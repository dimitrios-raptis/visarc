const mainNavData = [
  { label: 'News', link: '#', isPrimaryNav: true },
  { label: 'Models',
    isPrimaryNav: true,
    submenu: [
      { label: 'Bentayga', img: 'car3.jpg' },
      { label: 'Bentayga EWB', img: 'car1.jpg' },
      { label: 'Continental GT Convertible', img: 'car2.jpg' },
      { label: 'Continental GT', img: 'car3.jpg' },
      { label: 'Flying Spur', img: 'car1.jpg' },
      { label: 'Bacalar', img: 'car2.jpg' },
      { label: 'Blower', img: 'car3.jpg' },
      { label: 'Batur', img: 'car1.jpg' },
      { label: 'Speed Six', img: 'car2.jpg' },
    ],
    subSubMenu: [
      { label: 'Technical Specifications', link: '#' },
      { label: 'Heritage Collection', link: '#' },
      { label: 'Configurator', link: '#' },
    ],
  },
  { label: 'Images', link: '#', isPrimaryNav: true },
  { label: 'Bentley TV', link: '#', isPrimaryNav: true },
  { label: 'Beyond100', link: '#', isPrimaryNav: false },
  { label: 'The team', link: '#', isPrimaryNav: false },
  { label: 'Company',
    isPrimaryNav: false,
    submenu: [
      { label: 'The Bentley board', link: '#' },
      { label: 'Factory', link: '#' },
      { label: 'Facts and figures', link: '#' },
      { label: 'Heritage', link: '#' },
      { label: 'Mulliner', link: '#' },
    ]
  },
  { label: 'Le Mans History', link: '#', isPrimaryNav: false },
];

export default mainNavData;
