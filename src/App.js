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
    <div>
      <a
        href="https://serious-hots.bandcamp.com/album/serious-hots-ep"
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
            backgroundColor: '#F9500F',
            marginTop: 0,
            marginBottom: 0,
            // height: '100vh',
            paddingTop: '30px',
          }}
        >
          Serious Hots
        </h1>
        <h2
          style={{
            fontFamily:
              'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
            fontSize: 40,
            fontStyle: 'italic',
            fontWeight: 'lighter',
            textAlign: 'center',
            color: '#96DEE8',
            backgroundColor: '#F9500F',
            marginTop: 0,
            marginBottom: 0,
            padding: '40px',
          }}
        >
          Electronic dance music
        </h2>
        <p
          style={{
            fontFamily:
              'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
            fontSize: 40,
            fontStyle: 'italic',
            fontWeight: 'lighter',
            textAlign: 'center',
            color: '#00ff00',
            backgroundColor: '#F9500F',
            marginTop: 0,
            marginBottom: 0 - 1,
            height: '40vh',
            padding: '40px',
            paddingTop: 0,
          }}
        >
          Debut EP available on Bandcamp 27/10/2022
        </p>
      </a>
      <a
        style={{
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 40,
          fontStyle: 'italic',
          fontWeight: 'lighter',
          textAlign: 'center',
          color: '#FFFFFF',
          backgroundColor: '#F9500F',
          marginTop: 0,
          height: '40vh',
          paddingTop: 0,
          textDecoration: 'none',
          width: '100vw',
          display: 'block',
        }}
        href="mailto:info@serioushots.com"
      >
        info@serioushots.com
      </a>
    </div>
  );
};
