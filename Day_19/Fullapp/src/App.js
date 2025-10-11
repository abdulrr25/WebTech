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

    <header className="navbar">
  <Link to="/" className="logo-link">
    <img
      src="https://static.vecteezy.com/system/resources/previews/002/463/890/non_2x/ethereum-logo-color-crypto-currency-symbol-isolated-vector.jpg"
      alt="logo"
      className="logo"
    />
  </Link>
  <nav className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/login">Login</Link>
  </nav>
</header>

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