'use client'
import React, { useState,useEffect } from 'react';
import { Navbar,NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from 'next/image'

interface HeaderProps {
  button1: string;
  button2: string;
  button3: string;
}

export const Header: React.FC<HeaderProps> = ({ button1, button2, button3 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [web, setWeb] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWeb(window.innerWidth >= 650);
      const handleResize = () => {
        setWeb(window.innerWidth >= 650);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    web ? (
      <div className="header">
      <div className="logo">
        <Image 
          src="/images/iconoMigrate.png" 
          alt="Logo" 
          className="w-40 h-17" 
          id="logoMigrate"
          width={500}
          height={500} 
          />
      </div>
      <div className="button-container">
        <Link href="/" className="header-button">
          {button1}
        </Link>
        <Link href="/Services" className="header-button">
          {button2}
        </Link>
        <Link href="/AboutUs" className="header-button">
          {button3}
        </Link>
        <Image 
          src="/icons/world 1.png" 
          alt="world" 
          id="world" 
          className={`w-12 h-12 ${'world'}`}
          width={500}
          height={500}
          />
      </div>
    </div>
    ) : (
      <div className="headerMovil">
        <div className="headerMovilElements">
        <Button onClick={toggleMenu} className="menuMovil">
        {menuOpen?
            (<Image 
                src="/icons/XMenu.png" 
                alt="menu"  
                className="MenuImgX" 
                width={500}
                height={500}
                />)
            :(<Image 
                src="/icons/menu.png" 
                alt="menu"  
                className= "MenuImg"
                width={500}
                height={500}
                />)}
        </Button>
        <div className="logoMovil">
          <Image 
            src="/images/iconoMigrate.png" 
            alt="Logo" 
            className="w-40 h-17" 
            id="logoMigrateMovil" 
            width={500}
            height={500}
            />
        </div>
        <Image 
          src="/icons/world 1.png" 
          alt="world" 
          id="worldMovil" 
          className={`w-12 h-12 ${'world'}`} 
          width={500}
          height={500}
          />
        </div>
        {menuOpen && (
          <Navbar>
            <NavbarContent >
            <div className='MenuMobil'>
              <NavbarItem>
                <Link href="/" className="MenuButtomMovil">
                  {button1}
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/Services" className="MenuButtomMovil">
                  {button2}
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/AboutUs" className="MenuButtomMovil">
                  {button3}
                </Link>
              </NavbarItem>
              </div>  
            </NavbarContent>
          </Navbar>
        )}
      </div>
    )
  ); 
}

export default Header;
