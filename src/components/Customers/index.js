import React, { useState, useRef, useEffect } from "react";
import "./style.css"
const customerData = [
  { id: 1, name: "John Smith", email: "john.smith@gmail.com", location: "New York, USA", status: "Active", img: "https://i.pravatar.cc/150?u=1", date: "2026-01-15" },
  { id: 2, name: "Sara Lee", email: "sara.lee@gmail.com", location: "Los Angeles, USA", status: "Active", img: "https://i.pravatar.cc/150?u=2", date: "2026-01-20" },
  { id: 3, name: "Michael Chen", email: "m.chen@gmail.com", location: "Toronto, Canada", status: "Active", img: "https://i.pravatar.cc/150?u=3", date: "2026-01-18" },
  { id: 4, name: "Emily Davis", email: "emily.d@gmail.com", location: "London, UK", status: "Active", img: "https://i.pravatar.cc/150?u=4", date: "2026-01-10" },
  { id: 5, name: "David Wilson", email: "david.w@gmail.com", location: "Austin, USA", status: "Inactive", img: "https://i.pravatar.cc/150?u=5", date: "2026-01-12" },
  { id: 6, name: "Anna Johnson", email: "anna.j@gmail.com", location: "Berlin, Germany", status: "Active", img: "https://i.pravatar.cc/150?u=6", date: "2026-01-22" },
  { id: 7, name: "James Brown", email: "j.brown@gmail.com", location: "Paris, France", status: "Active", img: "https://i.pravatar.cc/150?u=7", date: "2026-01-19" },
  { id: 8, name: "Lisa Wong", email: "lisa.w@gmail.com", location: "Singapore", status: "Churned", img: "https://i.pravatar.cc/150?u=8", date: "2026-01-05" },
];

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Recent");

  const [statusOpen, setStatusOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const statusRef = useRef(null);
  const sortRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (statusRef.current && !statusRef.current.contains(e.target)) setStatusOpen(false);
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "active": return "status-active";
      case "inactive": return "status-inactive";
      case "churned": return "status-churned";
      default: return "";
    }
  };

  const filteredCustomers = customerData
    .filter(c => statusFilter === "All" || c.status === statusFilter)
    .filter(c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "Recent") return new Date(b.date) - new Date(a.date);
      if (sortOrder === "Old") return new Date(a.date) - new Date(b.date);
      if (sortOrder === "Name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="fade-in">
      <div className="page-header-wrapper">
        <h1 className="page-title">Customers</h1>
        <div className="header-actions">
          <button className="btn btn-outline"><i className="fa fa-download"></i> Export</button>
          <button className="btn btn-primary"><i className="fa fa-plus"></i> Add Customer</button>
        </div>
      </div>

      <div className="search-container">
        <i className="fa fa-search text-muted"></i>
        <input
          type="text"
          placeholder="Search customers..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <span className="stat-label">Total Customers</span>
          <div className="stat-value">1,280 <span className="stat-subtext text-muted">👥</span></div>
        </div>
        <div className="stat-card green">
          <span className="stat-label">Active Customers</span>
          <div className="stat-value">850 <span className="stat-subtext text-green">↑ 12.5%</span></div>
        </div>
        <div className="stat-card purple">
          <span className="stat-label">New Customers</span>
          <div className="stat-value">45 <span className="stat-subtext text-muted">+10 this week</span></div>
        </div>
        <div className="stat-card red">
          <span className="stat-label">Churned</span>
          <div className="stat-value">18 <span className="stat-subtext text-red">↓ 5 this month</span></div>
        </div>
      </div>

      {/* Table Filters */}
      <div className="table-card">
        <div className="table-filters d-flex gap-3 mb-2">
          {/* Status */}
          <div className="dropdown-text" ref={statusRef}>
            <span onClick={() => setStatusOpen(!statusOpen)}>Status: <b>{statusFilter}</b> <i className={`fa fa-chevron-down ${statusOpen ? "rotate" : ""}`}></i></span>
            {statusOpen && (
              <ul className="dropdown-menu">
                {["All", "Active", "Inactive", "Churned"].map(opt => (
                  <li key={opt} onClick={() => { setStatusFilter(opt); setStatusOpen(false); }}>{opt}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Sort */}
          <div className="dropdown-text" ref={sortRef}>
            <span onClick={() => setSortOpen(!sortOpen)}>Sort: <b>{sortOrder}</b> <i className={`fa fa-chevron-down ${sortOpen ? "rotate" : ""}`}></i></span>
            {sortOpen && (
              <ul className="dropdown-menu">
                {["Recent", "Old", "Name"].map(opt => (
                  <li key={opt} onClick={() => { setSortOrder(opt); setSortOpen(false); }}>{opt}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Table */}
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map(c => (
                <tr key={c.id}>
                  <td>
                    <div className="user-info">
                      <img src={c.img} alt="av" className="user-avatar" />
                      <span className="user-name">{c.name}</span>
                    </div>
                  </td>
                  <td className="text-muted">{c.email}</td>
                  <td className="text-muted">{c.location}</td>
                  <td><span className={`status-badge ${getStatusClass(c.status)}`}>{c.status}</span></td>
                  <td>
                    <a href="#view" className="text-primary fw-bold small me-3">View</a>
                    <i className="fa fa-ellipsis-h text-muted" style={{cursor:'pointer'}}></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="5" className="text-center text-muted">No customers found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
