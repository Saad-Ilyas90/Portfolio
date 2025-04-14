import './App.css';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Service from './Components/MyService.jsx';
import Resume from './Pages/Resume.jsx';
import Projects from './Pages/Projects.jsx';
import ContactMe from './Pages/ContactMe.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Service />
      <Resume />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;