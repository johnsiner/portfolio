import React from 'react';
import './Header.css';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import { Squash as Hamburger } from 'hamburger-react';
import resume from '../assets/Resume-Fabiyi-Johnson.pdf';

export default function Header() {
   const [navOpened, setNavOpened] = useState(false);

   return (
      <header>
         <div className="container">
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <nav>
               <ul className={navOpened ? 'opened' : ''}>
                  <li>
                     <a href="#home">Home</a>
                  </li>
                  <li>
                     <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                     <a href="#contact">Contact</a>
                  </li>
                  <li>
                     <a href={resume} download="Resume-Fabiyi-Johnson">
                        Download my Resume
                     </a>
                  </li>
               </ul>
            </nav>
            <div className="menu-icon">
               <Hamburger
                  toggled={navOpened}
                  toggle={() => setNavOpened((state) => !state)}
               />
            </div>
            <a
               href={resume}
               download="Resume-Fabiyi-Johnson"
               className="download-resume"
            >
               Download my Resume
            </a>
         </div>
      </header>
   );
}
