import TopHeader from './components/TopHeader';
import MainHeader from './components/MainHeader';
import HomePage from './pages/HomePage';
import Countries from './components/Countries';
import About from "./components/About"
import Choose from "./components/Choose"
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import Footer from "./components/Footer"                                                              
function App() {
  return (
    <div className="App">
      <TopHeader />
      <MainHeader />
      <HomePage/>
      <Countries/>
      <About/>
      <Choose/>
      <Solutions/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
