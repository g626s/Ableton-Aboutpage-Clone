import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import App from './App'

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Router>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </Router>
);