
import Destinations from './Components/Destinations';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Promo from './Components/Promo';
import WhyUs from './Components/WhyUs';


function App() {
  return (
    <>
      <Navbar activePage="home" />
      <div className='landing-page-content'>
        <Header />
        <Destinations />
        <Promo />
        <WhyUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
