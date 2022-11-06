import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Skills from './Components/Skills'; 
import ContactForm from './Components/Contactform';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import WhoAmI from './Components/WhoAmI';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Banner/>
      <WhoAmI/>
      <Skills/>
      <Experience/>
      <ContactForm/>
      <Footer/>
      
    </div>
  );
}


export default App;
