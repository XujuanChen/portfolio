import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div>
    <div className='main'>
      <div className='nav' id='home'>
          <a className='underline' href="#about"><h3> About </h3> </a>
          <a className='underline' href="#projects"><h3> Projects </h3> </a>
          <a className='underline' href="#contact"><h3>Contact </h3> </a>
      </div>
      <div className='margin-between'>
      <Home />
      <About />
      <Projects />
      <Contact />
      </div>
    </div>
      <div className='footer op75'>
          <p>© 2023 | Designed & coded with ❤️ by Xujuan Chen </p>
      </div>
    </div>

  );
}

export default App;
