import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Partners />
      <Projects />
      <Services />
    </div>
  );
}

export default App;
