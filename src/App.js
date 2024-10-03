import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Admin from './components/pages/Admin';
import Header from './components/semantics/Header';
import Footer from './components/semantics/Footer';
import About from './components/pages/About';
import './Styles.css';

function App() {
  return (
    <div className='text-center'>

      <div className='flex text-slate-50 w-auto h-full bg-slate-800'>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/admin" element={<Admin/>} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer/>
    </div>
    
  );
}

export default App;
