
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Insights from './pages/insights';
import Settings from './pages/settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
