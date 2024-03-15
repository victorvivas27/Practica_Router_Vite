import React from 'react'
import { ArrayNavBar } from '../../../util/ArrayNavBar'
import { Link} from "react-router-dom"
import "./NavBar.css"

const Navbar = () => {
  const nav = ArrayNavBar;

  return (
    <div className="nav-bar">
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            {item.internal ? (
              <Link to={item.url}>{item.label}</Link>
            ) : (
              <a href={item.url} target="_blank">{item.label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar