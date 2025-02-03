"use client";

import { Download, MoreVertical } from "lucide-react";

export default function ExamHeader() {
  return (
    <div className="exam-header-container">
      <div className="exam-title">
        <h2>Exam</h2>
        <div className="breadcrumb">
          Exam / Dashboard / BMU_Mid_CIA2_APR24&BVOC&PAT1&1&3&5
        </div>
      </div>
      
      <div className="exam-actions">
        <button className="action-button create">
          <span>+</span> Create Exam
        </button>
        <button className="action-button history">
          <span>↻</span> Exam History
        </button>
      </div>
    </div>
  );
}