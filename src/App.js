import logo from './logo.svg';
import background from './background.png';

import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Home />
    // <Router>
    //   <Routes>
    //     <Route path="/about" element={<About />}></Route>
    //     <Route path="/users" element={<Users />}></Route>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="/djpromodownload" element={<DJPromoDownload />} />
    //   </Routes>
    // </Router>
  );
}
const DJPromoDownload = () => {
  useEffect(() => {
    window.location.replace('https://serioushots.carrd.co');
  });
};
function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const Home = () => {
  return (
    <a
      href="https://serioushots.bandcamp.com/"
      style={{
        textDecoration: 'none',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        width: '100vw',
        backgroundColor: '#96DEE8',
        height: '100vh',
      }}
    >
      <h1
        style={{
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 60,
          fontStyle: 'italic',
          fontWeight: 'lighter',
          textAlign: 'center',
          color: '#FAFE1B',
          backgroundColor: '#FD7614',
          marginTop: 0,
          height: '100vh',
          paddingTop: '30px',
        }}
      >
        Serious Hots
      </h1>
    </a>
  );
};
