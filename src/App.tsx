import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Contacts from "./components/Contacts/Contacts";
import "./App.css";

function App() {
   return (
      <div>
         <Navbar />
         <Banner />
         <Partners />
         <Projects />
         <Services />
         <Feedbacks />
         <Contacts />
      </div>
   );
}

export default App;
