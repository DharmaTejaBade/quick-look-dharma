import React from "react";

// Dummy Team Data
const teamData = [
  { id: 1, name: "Sarah Jenkins", role: "Support Lead", email: "sarah.j@aiagent.com", status: "Active", img: "https://i.pravatar.cc/150?u=11" },
  { id: 2, name: "Mike Thompson", role: "Developer", email: "mike.t@aiagent.com", status: "Active", img: "https://i.pravatar.cc/150?u=12" },
  { id: 3, name: "Emily Rivera", role: "UI Designer", email: "emily.r@aiagent.com", status: "Inactive", img: "https://i.pravatar.cc/150?u=13" },
  { id: 4, name: "David Chen", role: "Product Manager", email: "david.c@aiagent.com", status: "Active", img: "https://i.pravatar.cc/150?u=14" },
];

export default function TeamMembers() {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "active": return "status-active";
      case "inactive": return "status-inactive";
      default: return "";
    }
  };

  return (
    <div className="fade-in">
      {/* 1. Page Header - Reusing common header classes */}
      <div className="page-header-wrapper">
        <h1 className="page-title">Team Members</h1>
        <div className="header-actions">
          <button className="btn btn-outline">
            <i className="fa fa-filter"></i> Filters
          </button>
          <button className="btn btn-primary">
            <i className="fa fa-plus"></i> Add Member
          </button>
        </div>
      </div>

      {/* 2. Search Bar - Reusing common search classes */}
      <div className="search-container">
        <i className="fa fa-search text-muted"></i>
        <input 
          type="text" 
          placeholder="Search team members by name or role..." 
          className="search-input" 
        />
      </div>

      {/* 3. Stats Grid - Reusing your pastel card classes */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <span className="stat-label">Total Staff</span>
          <div className="stat-value">
            24 <span className="stat-subtext text-muted" style={{fontSize: '1rem'}}>👥</span>
          </div>
        </div>
        
        <div className="stat-card green">
          <span className="stat-label">Currently Online</span>
          <div className="stat-value">
            18 <span className="stat-subtext text-green">● Live</span>
          </div>
        </div>

        <div className="stat-card purple">
          <span className="stat-label">Pending Invites</span>
          <div className="stat-value">
             3 <span className="stat-subtext text-muted" style={{fontSize: '0.8rem'}}>Awaiting response</span>
          </div>
        </div>

        <div className="stat-card red">
          <span className="stat-label">On Leave</span>
          <div className="stat-value">
             2 <span className="stat-subtext text-red">this week</span>
          </div>
        </div>
      </div>

      {/* 4. Data Table Section - Reusing common table classes */}
      <div className="table-card">
        <div className="table-filters">
           <span className="text-muted small">Role: <b>All Roles</b> <i className="fa fa-chevron-down ms-1"></i></span>
           <span className="text-muted small">Department: <b>Engineering</b> <i className="fa fa-chevron-down ms-1"></i></span>
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Role</th>
              <th>Email Address</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((member) => (
              <tr key={member.id}>
                <td>
                  <div className="user-info">
                    <img src={member.img} alt="av" className="user-avatar" />
                    <span className="user-name">{member.name}</span>
                  </div>
                </td>
                <td className="text-muted font-medium">{member.role}</td>
                <td className="text-muted">{member.email}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(member.status)}`}>
                    {member.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-outline py-1 px-3 border-0 text-primary">Edit</button>
                  <i className="fa fa-ellipsis-v text-muted ms-2" style={{cursor:'pointer', fontSize: '12px'}}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="text-muted small">Showing {teamData.length} team members</span>
          <div className="d-flex gap-2">
            <button className="btn btn-outline py-1 px-3">Next <i className="fa fa-chevron-right ms-1" style={{fontSize: '10px'}}></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}