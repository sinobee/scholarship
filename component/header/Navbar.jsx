import Link from "next/link";
import Search from '@/component/header/Search';
import React, { useState } from "react";
import style from "../../styles/headerNav.module.css";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/About" },
  { text: "Contact", href: "/Contact" },
  { text: "Details", href: "/Details" },
  { text: "Login/Sign Up", href: "/Registration" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"} >
        <a onClick={() => setActiveIdx(0)}>
        <div class={style.footerdistributed}>
        <h3>Scholarship<span>_Portal</span></h3>
        </div> </a> 
        </Link>
        <Search />

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
        
          <div></div>     
          <div></div>     
          <div></div>
          <div></div>
          
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;