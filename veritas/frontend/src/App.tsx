import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Placeholder Pages
const MissionControl = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Mission Control</h1><p className="text-text-secondary">Engine online.</p></div>;
const AttackLab = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Attack Lab</h1><p className="text-text-secondary">Simulated scenarios.</p></div>;
const ReviewInbox = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Human Review</h1><p className="text-text-secondary">Queue empty.</p></div>;
const Audit = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Audit Ledger</h1><p className="text-text-secondary">Tamper-evident logs.</p></div>;
const Policies = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Policy Studio</h1><p className="text-text-secondary">Policy as code.</p></div>;
const Agents = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Agent Registry</h1><p className="text-text-secondary">RBAC controls.</p></div>;
const Benchmark = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Evaluation Lab</h1><p className="text-text-secondary">Benchmarking suite.</p></div>;
const Gateway = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Developer Gateway</h1><p className="text-text-secondary">API & SDK.</p></div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MissionControl />} />
          <Route path="lab" element={<AttackLab />} />
          <Route path="review" element={<ReviewInbox />} />
          <Route path="audit" element={<Audit />} />
          <Route path="policies" element={<Policies />} />
          <Route path="agents" element={<Agents />} />
          <Route path="benchmark" element={<Benchmark />} />
          <Route path="integrate" element={<Gateway />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
