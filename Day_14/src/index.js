import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fc from './fc';
import CaseConverter from './cls';
// import Calculator from './cal';
// import Fact from './fact';
// import Fun1, {fun1, fun2} from './mul';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Fun1/>
          <Fact num="5"/>
    <Calculator num1="11" num2="9" op="2"/> */}

    <CaseConverter/>
    <App />
    <Fc/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
