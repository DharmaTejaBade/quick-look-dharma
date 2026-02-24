import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="power-sidebar">
      {/* Brand Section */}
      <div className="brand-section">
        <i className="fas fa-brain text-primary" style={{fontSize: '1.5rem'}}></i>
        <span className="link-label fw-bold text-white h5 m-0">Nexus AI</span>
      </div>
      
      <nav className="d-flex flex-column gap-2">
        <NavLink to="/dashboard" className="power-link">
          <i className="fas fa-layer-group"></i>
          <span className="link-label">Command Center</span>
        </NavLink>
        
        <NavLink to="/team" className="power-link">
          <i className="fas fa-user-shield"></i>
          <span className="link-label">Agent Team</span>
        </NavLink>
        
        <NavLink to="/customers" className="power-link">
          <i className="fas fa-id-card"></i>
          <span className="link-label">Client Directory</span>
        </NavLink>
        
        <NavLink to="/appointments" className="power-link">
          <i className="fas fa-clock-rotate-left"></i>
          <span className="link-label">Schedule Log</span>
        </NavLink>
        
        <NavLink to="/tickets" className="power-link">
          <i className="fas fa-bug"></i>
          <span className="link-label">Support Queue</span>
        </NavLink>
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto border-top pt-3" style={{borderColor: 'rgba(255,255,255,0.08) !important'}}>
        <NavLink to="/settings" className="power-link">
          <i className="fas fa-gears"></i>
          <span className="link-label">Config</span>
        </NavLink>
        
        <div className="power-link" style={{cursor: 'pointer', color: '#ff4d4d'}}>
          <i className="fas fa-power-off"></i>
          <span className="link-label">Terminate</span>
        </div>
      </div>
    </aside>
  );
}