"use client";

import { MoreVertical } from "lucide-react";

interface StatusCardProps {
  status: 'conducted' | 'not-conducted';
  subjectCode: string;
  subjectName: string;
  examDate: string;
  attendance: {
    total: number;
    present: number;
    absent: number;
  };
  marked?: boolean;
}

export default function StatusCard({
  status,
  subjectCode,
  subjectName,
  examDate,
  attendance,
  marked
}: StatusCardProps) {
  return (
    <div className={`status-card ${status}`}>
      <div className="card-header">
        <div className="subject-info">
          <span className="status-icon">{status === 'conducted' ? 'S' : 'G'}</span>
          <span className="subject-code">Subject Code: {subjectCode}</span>
        </div>
        <button className="more-options">
          <MoreVertical size={16} />
        </button>
      </div>

      <h3 className="subject-name">{subjectName}</h3>
      <div className="exam-date">Exam Date: {examDate}</div>

      <div className="attendance-section">
        <h4>Student Attendance {marked && <span className="marked-badge">Marked</span>}</h4>
        <div className="attendance-grid">
          <div className="stat-box">
            <span className="label">Total Students</span>
            <span className="value">{attendance.total}</span>
          </div>
          <div className="stat-box">
            <span className="label">Present Students</span>
            <span className="value">{attendance.present}</span>
          </div>
          <div className="stat-box">
            <span className="label">Absent Students</span>
            <span className="value">{attendance.absent}</span>
          </div>
        </div>
        <button className="mark-attendance-button">
          Mark / Edit Student's Attendance
        </button>
      </div>
    </div>
  );
}