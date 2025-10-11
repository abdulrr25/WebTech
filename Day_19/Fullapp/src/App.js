import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login'
import About from './About';
import Contact from './ContactUs';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
<div >

     <nav>
  <ul >
    <li>
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/463/890/non_2x/ethereum-logo-color-crypto-currency-symbol-isolated-vector.jpg"
        alt="logo"
        href="/"
        width="30px" // corrected spelling from 'widht'
        height="30px"
      
      />
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About Us</Link>
    </li>
    <li>
      <Link to="/contact">Contact Us</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </ul>
</nav>

      </div>
     <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}
            >
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login/>} />
              </Routes>

            </div>
    </div>
              </BrowserRouter>
  );
}
//
export default App;