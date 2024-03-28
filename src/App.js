import './App.css';
import { AllRoutes } from './components/AllRoutes';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;