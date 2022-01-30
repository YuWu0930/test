import React from 'react';
import {Link} from "react-router-dom"

const NavBar: React.FC = () => {
    return (
      <div>
        <ul>
          
          <li>
            <Link to="/" >
              Introduction
            </Link>
          </li>
          <li>
            <Link to="/question1">question1</Link>
          </li>
          <li>
            <Link to="/question2">question2</Link>
          </li> 
        </ul>
      </div>
    );
}

export default NavBar