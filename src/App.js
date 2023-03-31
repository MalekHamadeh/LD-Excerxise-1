import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication";
import Home from "./Pages/Home";
import { SignUpProvider } from "./Utils/SignUpContext/SignUpContext";

function App() {
  return (
    <Router>
      <SignUpProvider>
        <Routes>
          <Route exact path='/' Component={Authentication} />
          <Route exact path='/home' Component={Home} />
        </Routes>
      </SignUpProvider>
    </Router>
  );
}

export default App;
