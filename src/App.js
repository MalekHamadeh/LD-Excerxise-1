import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication";
import Home from "./Pages/Home/Home";
import { DrawerProvider } from "./Utils/DrawerContext";

function App() {
  return (
    <DrawerProvider>
      <Router>
        <Routes>
          <Route exact path='/' Component={Authentication} />
          <Route exact path='/home' Component={Home} />
        </Routes>
      </Router>
    </DrawerProvider>
  );
}

export default App;
