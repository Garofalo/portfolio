import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<h1>profect</h1>}/> 
      </Routes>

    </div>
  );
}

export default App;
