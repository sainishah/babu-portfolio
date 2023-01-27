import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
