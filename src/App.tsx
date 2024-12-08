import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Contacts from "./components/Contacts/Contacts";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './i18n';
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

function App() {
   useEffect(() => {
      AOS.init({
         duration: 300,
         once: false,
         mirror: true,
      });
   }, []);

   return (
      <ThemeProvider>
         <div>
            <Navbar />
            <ThemeToggle />
            <Banner />
            <Partners />
            <Projects />
            <Services />
            <Feedbacks />
            <Contacts />
         </div>
      </ThemeProvider>
   );
}

export default App;
