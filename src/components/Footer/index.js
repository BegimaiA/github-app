import React from 'react';
import "./footer.css"
import github from "../../views/MainPage/github.png";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer>
<nav >
  <ul className="d-flex justify-content-between align-items-center">
    <li>&copy; {new Date().getFullYear()} GitHub, Inc. </li>
    <li>Terms </li>
    <Link to="/"> <img src={github} width={40}className="mx-auto logo-img" alt=""/> </Link>
    <li>Security </li>
    <li>Privacy </li>


  </ul>
</nav>

    </footer>
  );
};

export default Footer;