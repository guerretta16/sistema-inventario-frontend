import React, { useState } from "react";
import portLogo from "../../assets/img/open-box.png";
import { Link } from "react-router-dom";
import iconMenu from "../../assets/icons/icon-menu.svg";
import "./style.css";
import NavBar from "../../Components/NavBar/NavBar";

const Header = () => {

  const [btnMenu, setBtnMenu] = useState(false);

  const handleClick = () =>{
    setBtnMenu(!btnMenu)
  }

  return (
    <header className="header">
      <Link to={"/"} className="btn-logo">
        <img src={portLogo} alt="portoLogo" className="header_logo"/>
      </Link>
      <div className="btn-menu" onClick={handleClick}>
        <img src={iconMenu} alt="portoLogo" className="header_logo"/>
      </div>
      <NavBar btnMenu={btnMenu}/>
    </header>
  );
};

export default Header;
