"use client";

import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import ExamHeader from './components/exam/ExamHeader';
import ExamCard from './components/exam/ExamCard';
import StatusCard from './components/exam/StatusCard';

export default function Home() {
  const examData: any = [
    {
      status: 'conducted',
      subjectCode: '4110343181',
      subjectName: 'Introduction to Functional English',
      examDate: '01-01-2025',
      attendance: { total: 58, present: 52, absent: 2 }
    },
    {
      status: 'not-conducted',
      subjectCode: '4110343181',
      subjectName: 'Introduction to Functional English',
      examDate: '01-01-2025',
      attendance: { total: 52, present: 0, absent: 0 }
    },
    {
      status: 'conducted',
      subjectCode: '4110343181',
      subjectName: 'Introduction to Functional English',
      examDate: '01-01-2025',
      attendance: { total: 62, present: 57, absent: 5 },
      marked: true
    }
  ];

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <ExamHeader />
          <ExamCard />
          <div className="status-cards-grid">
            {examData.map((exam:any, index:Number) => (
              <StatusCard key={index} {...exam} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}