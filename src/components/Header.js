import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="header">
          <div className="logo">
            <Link to="/" className="item">
            <img src={process.env.PUBLIC_URL + '/pok-logo.png'} alt="logo" width="200px"/>
            <h1 className="title">POKEDEX</h1>
            </Link>
        </div>
     </header>

    );
  };
  
  export default Header;