import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Authentication} />
        <Route exact path='/home' Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
