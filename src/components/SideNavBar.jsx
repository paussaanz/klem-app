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
    <div className="sidebar fixed-top border-end shadow vh-100 d-flex flex-column">
      <div className="sidebar-header p-3">
        <img src="../src/assets/dist/img/klem-logo.png" alt="Logo" />
      </div>
      <ul className="list-unstyled flex-grow-1 p-3">
        {navBarItems.map((item) => (
          <li key={item.text} className="nav-item pb-2">
            <NavLink 
              to={item.to} 
              className={({ isActive }) =>
                isActive
                  ? "nav-link active d-flex align-items-center justify-content-start px-3 py-2 bg-primary text-white w-100 rounded"
                  : "nav-link d-flex align-items-center justify-content-start px-3 py-2 text-dark w-100"
              }
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
