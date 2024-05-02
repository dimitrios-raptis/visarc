const mainNavData = [
  { label: 'News', link: '#', isPrimaryNav: true },
  { label: 'Models',
    isPrimaryNav: true,
    submenu: [
      { label: 'Bentayga', link: '#' },
      { label: 'Bentayga EWB', link: '#' },
      { label: 'Continental GT Convertible', link: '#' },
      { label: 'Continental GT', link: '#' },
      { label: 'Flying Spur', link: '#' },
      { label: 'Bacalar', link: '#' },
      { label: 'Blower', link: '#' },
      { label: 'Batur', link: '#' },
      { label: 'Speed Six', link: '#' },
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
