import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Skills from './Components/Skills'; 

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Banner/>
      <Skills/>
    </div>
  );
}


export default App;
