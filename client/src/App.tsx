
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Insights from './pages/insights';
import Settings from './pages/settings';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/insights' element={<Insights />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
