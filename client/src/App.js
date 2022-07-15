import Home from "./screens/Home/Home";
import NavBar from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import ReactGA from "react-ga"
function App() {
   
  useEffect(()=>{

    ReactGA.initialize("UA-220602629-1")
    ReactGA.pageview(window.location.pathname + window.location.search)
  })


  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className="App">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Home darkMode={darkMode}/>
    </div>
  );
}

export default App;
