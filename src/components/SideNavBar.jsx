import React from 'react';
import { NavLink } from 'react-router-dom';

const navBarItems = [
  { to: "/", icon: "", text: "FC - Forma Corp" },
  { to: "/ranking", icon: "", text: "KLEM Ranking" },
  { to: "/talento", icon: "", text: "Talento" },
  { to: "/reunion-rrhh", icon: "", text: "Reunión RRHH" },
  { to: "/responder", icon: "", text: "Responder" },
];

const SideNavBar = () => {
  return (
    <div className="sidebar fixed-top bg-light border-end shadow vh-100 d-flex flex-column">
      <div className="sidebar-header p-3">
        <img src="../src/assets/dist/img/klem-logo.png" alt="Logo" />
      </div>
      <ul className="list-unstyled flex-grow-1 p-3">
        {navBarItems.map((item, index) => (
          <li 
            key={item.text}
            className="nav-item py-2 d-flex align-items-center btn-link text-black text-decoration-none"
            onClick={() => setActiveTab(index)}
          >
            <NavLink 
              to={item.to} 
              className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}
            >
              <div className="me-2" style={{ verticalAlign: 'text-bottom' }}>
                {item.icon}
              </div>
              <span className="nav-item-text">{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
