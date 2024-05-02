import './styles/global.scss';
import Header from './components/Header';
import car from './assets/images/car.jpeg';

function App() {
  return (
    <>
      <Header />
      <main>
        <img src={car} alt='Intro Bentley car' style={{width: '100%'}} />
      </main>
    </>
  );
}

export default App;
