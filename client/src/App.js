import Home from "./screens/Home/Home";
import NavBar from "./components/Nav/Nav";
import { useEffect } from "react";
import ReactGA from "react-ga"
function App() {
   
  useEffect(()=>{

    ReactGA.initialize("UA-220602629-1")
    ReactGA.pageview(window.location.pathname + window.location.search)
  })



  
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
