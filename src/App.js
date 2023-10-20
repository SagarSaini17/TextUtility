import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Testimonial from './components/Testimonial';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const togglemode1 = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'darkGreen';
      showAlert("Dark mode has been enabled", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
     <Navbar title="Text Tools" mode={mode} togglemode={togglemode} togglemode1={togglemode1} />
      <div className='container '>
       <Alert alert={alert} />
       </div>
       <div className="container my-3">
        <Routes>
          <Route path="/" element={<Form showAlert={showAlert} heading="Enter text hear to analyze" mode={mode} />} />
          <Route path="About/*" element={<About mode={mode} />} />
          <Route path="Login/*" element={<Login mode={mode}/>}/>
          <Route path="Signup/*" element={<SignUp mode={mode}/>}/>
          <Route path='Testimonial/*' element={<Testimonial mode={mode}/>}/>

        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;