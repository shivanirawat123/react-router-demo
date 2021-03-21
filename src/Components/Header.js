import React from 'react';
import {Link} from "react-router-dom";

function Header(){
    return(
        <>
        <h3>this is header</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
        <hr />
        </>
    )
}

export default Header;