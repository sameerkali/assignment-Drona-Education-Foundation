"use client";

import { Book, Users, Calendar, Clock, HelpCircle, 
         Briefcase, FolderOpen, PenTool } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    { icon: Book, label: "Overview", active: false },
    { icon: Users, label: "Manage User", active: false },
    { icon: PenTool, label: "Academic", active: false },
    { icon: Calendar, label: "Time Table", active: false },
    { icon: Clock, label: "Attendance", active: false },
    { icon: HelpCircle, label: "Help Desk", active: false },
    { icon: Briefcase, label: "Task", active: false },
    { icon: FolderOpen, label: "Placement", active: false },
    { icon: Book, label: "Directory", active: false },
    { icon: Book, label: "Exam", active: true },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src="/skill-college-logo.png" alt="Skill College" className="logo" />
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <Link href="#" key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="add-new-button">
        <button type="button" className="add-btn">
          <span>+</span>
          <span>Add New</span>
        </button>
      </div>
    </aside>
  );
}