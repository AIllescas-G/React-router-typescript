import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from '../logo.svg'; // Ajusta según tu estructura

export const Navigation = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
