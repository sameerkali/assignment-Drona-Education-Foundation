"use client";

import { useState } from "react";
import { MoreVertical, Users, Clock } from "lucide-react";

export default function ExamCard() {
  const [currentTab, setCurrentTab] = useState("examPanel");
  
  const tabs = [
    "Exam Panel", "Timetable", "Eligibility Checker", "Hall Ticket",
    "Supervisors", "Paper Print", "Signature Sheet", "Paper Check", "Mark Entry"
  ];

  return (
    <div className="exam-detail-card">
      <div className="card-header">
        <div className="university-info">
          <img src="/university-logo.png" alt="University" className="university-logo" />
          <div className="exam-info">
            <h3>Bhagwan Mahavir University</h3>
            <h4>Mid Term CIA 2 Exam April - 2024</h4>
            <div className="meta-info">
              <span>Semester 1</span>
              <span className="separator">|</span>
              <span>Batch 2022-25</span>
            </div>
          </div>
        </div>
        
        <div className="card-actions">
          <button className="postpone-button">Postpone</button>
          <button className="export-button">
            Export Data <MoreVertical size={16} />
          </button>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-info">
          <span>Pre exam task :</span>
          <span className="progress-numbers">41 / 94</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "44%" }}></div>
        </div>
        <div className="progress-icons">
          <Users size={20} />
          <Clock size={20} />
        </div>
      </div>

      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${currentTab === tab ? 'active' : ''}`}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}