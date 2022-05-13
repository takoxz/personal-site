import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AboutMe from './components/Aboutme';
import Experience from './components/Experience'
import Contact from './components/Contact';
import Projects from './components/Projects';
import { navLinks } from "./config"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <AboutMe title={navLinks[0]['title']} id={navLinks[0]['url']}/>
      <Experience title={navLinks[1]['title']} id={navLinks[1]['url']}/>
      <Projects title={navLinks[2]['title']} id={navLinks[2]['url']}/>
      <Contact title={navLinks[3]['title']} id={navLinks[3]['url']}/>
      <Footer/>
    </div>
  );
}

export default App;
