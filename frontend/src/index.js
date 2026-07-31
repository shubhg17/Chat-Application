import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Toaster} from "react-hot-toast"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* //idhar isse component ki tarah call krdenge isko hum kahi bhi call krskte hain but app me kayi nah kayi hona chaiye  */}
    <Toaster/>
  </React.StrictMode>
);


