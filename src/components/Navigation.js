import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <h1>React Router Mini</h1>
      <div className="Nav">
        <div className="Nav-link">
          <Link to="/" >Home</Link>
        </div>
        <div className="Nav-link">
        <Link to="/about" >About</Link>
        </div>
        <div className="Nav-link">
        <Link to="/contact" >Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
