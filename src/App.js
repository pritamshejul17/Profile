
import Main from './Components/Main.js'
import Connect from './Components/Connect.js'
import Projects from './Components/Projects.js'
import About from './Components/About.js'
import {Router, Route, Link, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <nav> 
        <ul className = "flex justify-center pt-8 pb-4 border-b-2 border-blacks mx-40">
          <li className = "text-md font-normal ml-5 sm:ml-10 text-stone-600"><Link to = "/">Home</Link></li>
          <li className = "text-md font-normal ml-5 sm:ml-10 text-stone-600"><Link to = "/projects">Projects</Link></li>
          <li className = "text-md font-normal ml-5 sm:ml-10 text-stone-600"><Link to={{ pathname: "https://drive.google.com/file/d/17EJ7gzVMoqNdbg9Pi_3uqNLuOOSgQMME/view?usp=sharing" }} target="_blank">Resume</Link></li>
          <li className = "text-md font-normal ml-5 sm:ml-10 text-stone-600"><Link to = "/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path = "/" element = {
          <>
            <Main />
            <Connect/>
          </>
        } />
        <Route path = "/projects" element = {
          <>
            <Projects />
          </>
        } />
        <Route path = "/about" element = {
          <>
            <About />
          </>
        } />

      </Routes>
    </>
  );
}

export default App;
