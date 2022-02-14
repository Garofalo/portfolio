import {Routes, Route} from "react-router-dom"
import Home from "./screens/Home/Home";

import Head from "./components/Head/Head";

function App() {
  return (
    <div className="App">
      < Head/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
