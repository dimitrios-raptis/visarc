import './styles/global.scss';
import Header from './components/Header';
import car from './assets/images/car.jpeg';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Bentley"
          content="This is a React project for displaying a navigation system for the Bentley site."
        />
        <title>My Bentley navigation</title>
        <link rel="canonical" href="https://bentley.dimitriosraptis.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.00, maximum-scale=1.0" />
      </Helmet>
      <Header />
      <main>
        <img src={car} alt='Intro Bentley car' style={{width: '100%'}} />
      </main>
    </>
  );
}

export default App;
