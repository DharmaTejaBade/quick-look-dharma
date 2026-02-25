import React from "react";

export default function Dashboard() {
  return (
    <div className="animate-fade-up px-4">
      {/* 1. Futuristic Header */}
      <header className="d-flex justify-content-between align-items-center py-4 mb-4">
        <div>
          <h2 className="fw-bold m-0" style={{letterSpacing: '-1px'}}>System Overview</h2>
          <span className="text-muted extra-small">
            <span className="pulse-online"></span>CORE ENGINE: OPERATIONAL
          </span>
        </div>
        <div className="header-actions d-flex gap-3">
          <div className="search-pill glass-card d-flex align-items-center px-3">
             <i className="fas fa-terminal me-2 text-primary small"></i>
             <input type="text" placeholder="Run command..." className="bg-transparent border-0 text-white small outline-none" style={{outline:'none'}} />
          </div>
          <button className="btn btn-primary rounded-pill px-4 shadow-sm">
             <i className="fas fa-bolt me-2"></i> Deploy
          </button>
        </div>
      </header>

      {/* 2. Advanced Grid */}
      <div className="bento-grid">
        
        {/* Main Health Card */}
        <div className="bento-item large-tile glass-card">
          <div className="d-flex justify-content-between mb-4">
             <h5 className="fw-bold">Neural Load Analysis</h5>
             <i className="fas fa-chart-line text-muted"></i>
          </div>
          <div className="d-flex align-items-end gap-2" style={{height: '180px'}}>
             {[30, 45, 60, 25, 80, 95, 40, 55, 70, 90, 35, 50].map((h, i) => (
               <div key={i} className="flex-grow-1 bg-primary" style={{
                 height: `${h}%`, 
                 borderRadius: '6px 6px 2px 2px',
                 opacity: 0.3 + (h/150),
                 transition: 'all 0.5s ease'
               }}></div>
             ))}
          </div>
          <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center" style={{borderColor: 'rgba(0,0,0,0.05) !important'}}>
             <div>
                <div className="h4 fw-bold m-0">94.2%</div>
                <div className="extra-small text-muted">Processing Speed</div>
             </div>
             <div className="text-end">
                <div className="h4 fw-bold m-0 text-success">0.2ms</div>
                <div className="extra-small text-muted">Latency</div>
             </div>
          </div>
        </div>

        {/* Status Card 1 */}
        <div className="bento-item glass-card d-flex flex-column justify-content-between">
           <div>
              <i className="fas fa-shield-halved text-primary mb-3 h4"></i>
              <h6 className="text-muted small fw-bold">Active Shield</h6>
           </div>
           <div className="h2 fw-bold">Live</div>
           <div className="extra-small text-success fw-bold">Encrypted Link</div>
        </div>

        {/* Status Card 2 */}
        <div className="bento-item glass-card d-flex flex-column justify-content-between">
           <div>
              <i className="fas fa-headset text-primary mb-3 h4"></i>
              <h6 className="text-muted small fw-bold">Avg Response</h6>
           </div>
           <div className="h2 fw-bold">1.4m</div>
           <div className="extra-small text-primary fw-bold">↑ 6% vs Last Week</div>
        </div>

        {/* Status Card 3 (Timeline/Logs) */}
        <div className="bento-item glass-card" style={{gridColumn: 'span 2'}}>
            <h6 className="fw-bold mb-3"><i className="fas fa-list-ul me-2"></i>Live System Logs</h6>
            <div className="extra-small font-monospace text-muted">
               <div className="mb-2"><span className="text-primary">[14:30]</span> - Request received from Client #1024</div>
               <div className="mb-2"><span className="text-success">[14:31]</span> - AI Agent generated response (98% confidence)</div>
               <div><span className="text-warning">[14:32]</span> - Token usage approaching limit for Node-04</div>
            </div>
        </div>
      </div>
    </div>
  );
}