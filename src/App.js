import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AboutMe from './components/Aboutme';
import Experience from './components/Experience'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <AboutMe/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
