import React from 'react'
import './Navbar.css'
import logo from '../../assets/group23.svg'
const Navbar = () =>{
  return ( 
    <div className='Navbar'>
      <img src={logo} alt="" />
     
        <ul><div className="nav-menu">Home</div></ul>
        <ul><div className="nav-menu">Services</div></ul>
        <ul><div className="nav-menu">Portfolio</div></ul>
        <ul><div className="nav-menu">Contact</div></ul>
      
      <div className="nav-connect">Connect</div>
    </div>
  );
}

export default Navbar;