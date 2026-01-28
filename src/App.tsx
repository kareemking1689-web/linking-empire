import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SuppliesPage from './pages/SuppliesPage';
import ContractingPage from './pages/ContractingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/supplies" element={<SuppliesPage />} />
        <Route path="/contracting" element={<ContractingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
