import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import './index.css';
// import App from './App';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';
import ContactUs from './ContactUs';
import Home from './Home';
import reportWebVitals from './reportWebVitals';


export default function App() {
  return (
    //
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          {/* <Route exact path="/contact" component={<Contact/>} /> */}
          <Route path="/contactus" element={<ContactUs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




