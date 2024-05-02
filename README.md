
# Bentley Site

This is a React project for displaying a navigation system for the Bentley site.

## Project Structure

- `App.jsx`: The main component of the application, rendering the header and main content.
- `Header.jsx`: Component responsible for rendering the site header and primary navigation.
- `MegaNav.jsx`: Component for the mega navigation menu, which includes submenus for navigation.
- `MegaSubNav.jsx`: Component for rendering submenus within the mega navigation menu.

## Usage

The project consists of the following components:

- **Header**: Renders the site header with primary navigation and a burger menu for mobile.
- **MegaNav**: Displays the mega navigation menu with primary and secondary navigation items. The primary navigation is being displayed only on mobile screens.
- **MegaSubNav**: Renders submenus within the mega navigation menu.

The navigation items are loaded dynamically from the `data` prop passed to the `Header` component.

## Features

- Responsive design: The navigation adapts to different screen sizes, providing a seamless user experience across devices.
- Dynamic navigation: Navigation items are loaded dynamically from data, allowing for easy updates and maintenance.
- Mega navigation menu: The mega navigation menu displays additional navigation options and submenus when activated.
- Submenu navigation: Users can navigate through submenus within the mega navigation menu for enhanced browsing.

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server with `npm start`.

