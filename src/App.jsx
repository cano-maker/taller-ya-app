import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WorkshopListPage from './pages/WorkshopListPage';
import WorkshopDetailPage from './pages/WorkshopDetailPage';
import BookingPage from './pages/BookingPage';
import OnsiteServicePage from './pages/OnsiteServicePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/workshops" element={<WorkshopListPage />} />
          <Route path="/workshop/:id" element={<WorkshopDetailPage />} />
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="/onsite-service" element={<OnsiteServicePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;