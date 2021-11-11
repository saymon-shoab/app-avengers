import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


  

export default function Header  () {
  //We will use react hooks for toggling the menu
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

  const showSideMenu = () => {
      (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
  }

    return (
        <>
            <div className="fixed w-full h-20 borderBottom bg-white text-gray-900 flex flex-row justify-between font-extrabold items-center">
            <div className="brand-logo text-lg font-bold px-8 py-8"><i>App Avengers</i></div>
            <ul className="hidden menu-list lg:flex lg:flex-row text-md space-x-4 px-8 font-bold">
            <li className="menu-list-item px-3"><Link to="/">Home</Link> </li>
                <li className="menu-list-item px-3"><Link to="/about">About</Link> </li>
                <li className="menu-list-item px-3"><Link to="/project">Projects</Link></li>
                <li className="menu-list-item px-3"><Link to="/blog">Blogs</Link></li>
                <li className="menu-list-item px-3"><Link to="/contact">Contact</Link></li>
                <button className="menu-list-item px-3 py-1 flex font-semibold text-white hover:bg-green-500 bg-green-700 rounded-md" type="">
                <a href="" target="blank" alt="/"> Learn More- </a>
                </button>
            </ul>
            
            <button onClick={()=>{showSideMenu()}} className="lg:hidden menu-button">
                {(isSideMenuOpen) ? <FontAwesomeIcon className="w-8 h-8" icon={faTimes} /> : <FontAwesomeIcon className="w-8 h-8" icon={faBars} /> }
            </button>
            {(isSideMenuOpen) ? SideMenu() : ''}
        </div>
        </>
    );
};

function SideMenu(){
  return(
      <div className="fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-white top-14">
          <ul className="menu-list flex flex-col text-md font-bold">
          <Link to="/"><li className="menu-list-item py-2 px-10 hover:bg-white hover:text-blue-700">Home</li></Link>    
          <Link to="about"><li className="menu-list-item py-2 px-10 hover:bg-white hover:text-blue-700">About</li></Link>
          <Link to="/project"><li className="menu-list-item py-2 px-10 hover:bg-white hover:text-blue-700">Projects</li></Link>
          <Link to="/blog"> <li className="menu-list-item py-2 px-10 hover:bg-white hover:text-blue-700">Blogs</li></Link>
          <Link to="/contact"><li className="menu-list-item py-2 px-10 hover:bg-white hover:text-blue-700">Contact us</li></Link>
              <button className="menu-list-item px-3 py-3 font-semibold hover:bg-green-500 bg-green-700 rounded-md" type=""> 
              <a href="" target="" alt="/"> Learn More </a>
              </button>
          </ul>
      </div>
  )
}