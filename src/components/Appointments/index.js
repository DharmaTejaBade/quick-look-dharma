import React from "react";

// Dummy Appointment Data
const appointmentData = [
  { id: 1, name: "John Smith", service: "AI Strategy Consultation", date: "Jan 22, 2026", time: "10:00 AM", status: "Upcoming", img: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Sara Lee", service: "Technical Support", date: "Jan 22, 2026", time: "01:30 PM", status: "Upcoming", img: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Michael Chen", service: "Onboarding Session", date: "Jan 21, 2026", time: "09:00 AM", status: "Completed", img: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Emily Davis", service: "Monthly Review", date: "Jan 20, 2026", time: "04:00 PM", status: "Completed", img: "https://i.pravatar.cc/150?u=4" },
  { id: 5, name: "David Wilson", service: "Sales Demo", date: "Jan 23, 2026", time: "11:00 AM", status: "Pending", img: "https://i.pravatar.cc/150?u=5" },
];

export default function Appointments() {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "upcoming": return "status-active"; // Reusing green/blue-ish
      case "completed": return "status-purple"; // We'll add this to CSS
      case "pending": return "status-inactive"; // Orange
      case "cancelled": return "status-churned"; // Red
      default: return "";
    }
  };

  return (
    <div className="fade-in">
      {/* 1. Page Header */}
      <div className="page-header-wrapper">
        <h1 className="page-title">Appointments</h1>
        <div className="header-actions">
          <button className="btn btn-outline">
            <i className="fa fa-calendar"></i> Calendar View
          </button>
          <button className="btn btn-primary">
            <i className="fa fa-plus"></i> Schedule New
          </button>
        </div>
      </div>

      {/* 2. Search Bar */}
      <div className="search-container">
        <i className="fa fa-search text-muted"></i>
        <input 
          type="text" 
          placeholder="Search appointments by client or service..." 
          className="search-input" 
        />
      </div>

      {/* 3. Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <span className="stat-label">Total Scheduled</span>
          <div className="stat-value">
            42 <span className="stat-subtext text-muted" style={{fontSize: '1rem'}}>📅</span>
          </div>
        </div>
        
        <div className="stat-card green">
          <span className="stat-label">Upcoming (Next 7 Days)</span>
          <div className="stat-value">
            12 <span className="stat-subtext text-green">↑ 3 today</span>
          </div>
        </div>

        <div className="stat-card purple">
          <span className="stat-label">Completed (Monthly)</span>
          <div className="stat-value">
             86 <span className="stat-subtext text-muted" style={{fontSize: '0.8rem'}}>98% success rate</span>
          </div>
        </div>

        <div className="stat-card red">
          <span className="stat-label">Cancellations</span>
          <div className="stat-value">
             4 <span className="stat-subtext text-red">↓ 2% decrease</span>
          </div>
        </div>
      </div>

      {/* 4. Data Table Section */}
      <div className="table-card">
        <div className="table-filters">
           <span className="text-muted small">Date: <b>This Week</b> <i className="fa fa-chevron-down ms-1"></i></span>
           <span className="text-muted small">Type: <b>All Services</b> <i className="fa fa-chevron-down ms-1"></i></span>
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Service Type</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointmentData.map((appt) => (
              <tr key={appt.id}>
                <td>
                  <div className="user-info">
                    <img src={appt.img} alt="av" className="user-avatar" />
                    <span className="user-name">{appt.name}</span>
                  </div>
                </td>
                <td className="text-muted fw-medium">{appt.service}</td>
                <td>
                    <div className="d-flex flex-column">
                        <span className="fw-bold small">{appt.date}</span>
                        <span className="text-muted extra-small">{appt.time}</span>
                    </div>
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(appt.status)}`}>
                    {appt.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-outline py-1 px-3 border-0 text-primary">Reschedule</button>
                  <i className="fa fa-ellipsis-h text-muted ms-2" style={{cursor:'pointer'}}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="text-muted small">Showing 5 upcoming appointments</span>
          <div className="d-flex gap-2">
            <button className="btn btn-outline py-1 px-3">View Full History</button>
          </div>
        </div>
      </div>
    </div>
  );
}