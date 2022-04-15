
import './App.css';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Recommend from './components/Recommend';
import Testimonials from './components/Testimonials';
import Footer from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
