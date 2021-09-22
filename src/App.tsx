import React, {useEffect} from 'react';
import './App.css';
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRoute from "./AppRoute";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  useEffect(()=>{
    AOS.init()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <AppRoute />
          <ToastContainer style={{ fontSize: 16 }}/>
      </header>
    </div>
  );
}

export default App;
