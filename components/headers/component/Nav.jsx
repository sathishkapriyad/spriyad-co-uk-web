"use client";
import { menuItems } from "@/data/menu";
import React from 'react';

export default function Nav() {
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

  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        {menuItems.map((item) => (
          <li 
            key={item.id}
            style={{
              marginRight: '20px', // Adds space between items
              fontSize: '18px', // Increases the font size
              display: 'flex', // Optional, for vertical alignment if needed
              alignItems: 'center', // Optional, for vertical alignment if needed
            }}
            className={`nav-item ${item.subMenuItems ? "menu-item-has-children" : ""}`}
          >
            {item.subMenuItems ? (
              // Render sub-menu items here if they exist
              <a href="#" className="inactive">{item.title}</a>
            ) : (
              // Use onClick handler for navigation without the hash
              <a href={`/${item.link}`} onClick={(e) => handleNavClick(item.link, e)}>
                <span className="link-effect">
                  <span className="effect-1">{item.title}</span>
                  <span className="effect-1">{item.title}</span>
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
