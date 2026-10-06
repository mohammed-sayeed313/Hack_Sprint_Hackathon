import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MissionControl from './pages/MissionControl';
import VerifyAction from './pages/VerifyAction';
import AttackLab from './pages/AttackLab';
import Audit from './pages/Audit';
import PolicyStudio from './pages/PolicyStudio';

// Placeholder Pages
const ReviewInbox = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Human Review</h1><p className="text-text-secondary">Queue empty.</p></div>;
const Agents = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Agent Registry</h1><p className="text-text-secondary">RBAC controls.</p></div>;
const Benchmark = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Evaluation Lab</h1><p className="text-text-secondary">Benchmarking suite.</p></div>;
const Gateway = () => <div className="p-8"><h1 className="text-3xl font-heading mb-4">Developer Gateway</h1><p className="text-text-secondary">API & SDK.</p></div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MissionControl />} />
          <Route path="verify" element={<VerifyAction />} />
          <Route path="lab" element={<AttackLab />} />
          <Route path="review" element={<ReviewInbox />} />
          <Route path="audit" element={<Audit />} />
          <Route path="policies" element={<PolicyStudio />} />
          <Route path="agents" element={<Agents />} />
          <Route path="benchmark" element={<Benchmark />} />
          <Route path="integrate" element={<Gateway />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
