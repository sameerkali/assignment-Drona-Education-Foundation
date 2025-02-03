"use client";

import { Search, Bell, ShoppingCart, User, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <h1>Hello Priyam!</h1>
        <p>Welcome to Skill College</p>
      </div>
      
      <div className="header-right">
        <div className="search-container">
          <Search className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        
        <div className="header-actions">
          <button className="icon-button">
            <Bell />
            <span className="badge">5</span>
          </button>
          <button className="icon-button">
            <ShoppingCart />
            <span className="badge">157</span>
          </button>
          <button className="profile-button">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" 
                 alt="Profile" 
                 className="profile-image" />
            <span>Student Profile</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}