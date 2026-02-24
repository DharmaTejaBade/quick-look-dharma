import React from "react";

// Dummy Ticket Data
const ticketData = [
  { id: "#TK-1024", subject: "Login API failure", category: "Technical", priority: "High", status: "Open", assignee: "Sarah Jenkins", date: "Jan 21, 2026" },
  { id: "#TK-1025", subject: "Refund request for Order #55", category: "Billing", priority: "Medium", status: "In Progress", assignee: "Mike Thompson", date: "Jan 21, 2026" },
  { id: "#TK-1026", subject: "Typography looks blurry on mobile", category: "Design", priority: "Low", status: "Resolved", assignee: "Emily Rivera", date: "Jan 20, 2026" },
  { id: "#TK-1027", subject: "How to export CSV data?", category: "Support", priority: "Low", status: "Closed", assignee: "David Chen", date: "Jan 19, 2026" },
  { id: "#TK-1028", subject: "Server latency in EU region", category: "Technical", priority: "High", status: "Open", assignee: "Sarah Jenkins", date: "Jan 21, 2026" },
];

export default function Tickets() {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "open": return "status-active";      // Green
      case "in progress": return "status-purple"; // Purple
      case "resolved": return "status-blue";    // Blue (We'll add this)
      case "closed": return "status-inactive";  // Gray/Orange
      default: return "";
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case "high": return "text-red fw-bold";
      case "medium": return "text-warning fw-bold";
      case "low": return "text-muted fw-bold";
      default: return "";
    }
  };

  return (
    <div className="fade-in">
      {/* 1. Page Header */}
      <div className="page-header-wrapper">
        <h1 className="page-title">Tickets</h1>
        <div className="header-actions">
          <button className="btn btn-outline">
            <i className="fa fa-file-export"></i> Reports
          </button>
          <button className="btn btn-primary">
            <i className="fa fa-ticket-alt"></i> Create Ticket
          </button>
        </div>
      </div>

      {/* 2. Search Bar */}
      <div className="search-container">
        <i className="fa fa-search text-muted"></i>
        <input 
          type="text" 
          placeholder="Search tickets by ID, subject, or assignee..." 
          className="search-input" 
        />
      </div>

      {/* 3. Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <span className="stat-label">All Tickets</span>
          <div className="stat-value">
            254 <span className="stat-subtext text-muted" style={{fontSize: '1rem'}}>🏷️</span>
          </div>
        </div>
        
        <div className="stat-card red">
          <span className="stat-label">Urgent (High Priority)</span>
          <div className="stat-value">
            12 <span className="stat-subtext text-red">Requires Action</span>
          </div>
        </div>

        <div className="stat-card green">
          <span className="stat-label">Resolved Today</span>
          <div className="stat-value">
             38 <span className="stat-subtext text-green">↑ 15%</span>
          </div>
        </div>

        <div className="stat-card purple">
          <span className="stat-label">Avg. Response Time</span>
          <div className="stat-value">
             1.2h <span className="stat-subtext text-muted" style={{fontSize: '0.8rem'}}>Last 24hrs</span>
          </div>
        </div>
      </div>

      {/* 4. Data Table Section */}
      <div className="table-card">
        <div className="table-filters">
           <span className="text-muted small">Filter: <b>All Open</b> <i className="fa fa-chevron-down ms-1"></i></span>
           <span className="text-muted small">Category: <b>All Categories</b> <i className="fa fa-chevron-down ms-1"></i></span>
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th>ID & Subject</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map((ticket) => (
              <tr key={ticket.id}>
                <td>
                  <div className="d-flex flex-column">
                    <span className="text-primary extra-small fw-bold">{ticket.id}</span>
                    <span className="user-name">{ticket.subject}</span>
                  </div>
                </td>
                <td><span className="text-muted small">{ticket.category}</span></td>
                <td>
                  <span className={`small ${getPriorityClass(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="text-muted small">{ticket.assignee}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>
                  <i className="fa fa-eye text-primary me-3" style={{cursor:'pointer'}} title="View"></i>
                  <i className="fa fa-reply text-muted" style={{cursor:'pointer'}} title="Reply"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="text-muted small">Showing last 5 tickets</span>
          <div className="d-flex gap-2">
            <button className="btn btn-outline py-1 px-3">Archive</button>
            <button className="btn btn-outline py-1 px-3">Next Page</button>
          </div>
        </div>
      </div>
    </div>
  );
}