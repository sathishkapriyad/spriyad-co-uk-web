"use client";
import { menuItems } from "@/data/menu";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {

   // Smooth scroll to section
   const handleNavClick = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      // Scroll to the section smoothly
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });

      // Optionally update the state or context if you need to highlight the active section
      // setActiveSection(sectionId);
    }
  };

  const [currentHash, setCurrentHash] = useState('');
  const [activeMenu, setActiveMenu] = useState([-1, false]);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', onHashChange, false);

    return () => {
      window.removeEventListener('hashchange', onHashChange, false);
    };
  }, []);

  const isCurrentHash = (link) => {
    if (!link) return false;
    const linkHash = link.startsWith('/') ? link.split('#').pop() : link;
    return currentHash === `#${linkHash}`;
  };

  return (
    <nav style={{ display: 'block' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {menuItems.map((item, index) => (
          <li 
          key={index} 
          className={`${item.subMenuItems ? "menu-item-has-children submenu-item-has-children" : ""} ${activeMenu[0] === index ? "active-class" : ""}`} 
          style={{
            marginRight: '20px', // Adjust based on your mobile design
            fontSize: '16px', // Adjust for mobile font size
          }}
          >
            {item.subMenuItems ? (
              <>
                <a 
                href="#" 
                onClick={() => setActiveMenu(prev => prev[0] === index ? [-1, false] : [index, false])}
                className={`${isCurrentHash(item.link) ? "activeMenu" : ""}`}
                style={{ cursor: 'pointer' }}
                >
                  {item.title}
                </a>
                <ul 
                className="sub-menu submenu-class" 
                style={activeMenu[0] === index ? { display: 'block' } : { display: 'none' }} // Adjust for mobile submenu display
                >
                  {/* Submenu items here */}
                </ul>
              </>
            ) : (
              // For items without submenus, check for valid link
              item.link ? (
                <Link href={item.link} legacyBehavior>
                  <a href={`/${item.link}`} onClick={(e) => handleNavClick(item.link, e)}>
                    {item.title}
                  </a>
                </Link>
              ) : (
                <a className="inactive">{item.title}</a>
              )
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
