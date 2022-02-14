import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";
import ProjDetail from "./components/ProjDetail/ProjDetail";
import Head from "./components/Head/Head";

function App() {
  return (
    <div className="App">
      < Head/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<ProjDetail/>}/> 
      </Routes>

    </div>
  );
}

export default App;
