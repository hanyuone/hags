import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Insights from './pages/insights';
import Settings from './pages/settings';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/ui/layout';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout><Home /></Layout>} />
              <Route path='/insights' element={<Layout><Insights /></Layout>} />
              <Route path='/settings' element={<Layout><Settings /></Layout>} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
    </div>
  );
}

export default App;