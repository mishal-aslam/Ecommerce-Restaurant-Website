import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Special from './Components/Special'
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
  <Navbar />
  <Hero />
  <Categories />
  <Special />
  <AboutUs />
  <Services />
  <Footer />
    </div>
  );
}

export default App;
