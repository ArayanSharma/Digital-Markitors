import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, useNavigate } from 'react-router-dom'

function GlobalLinkHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const shouldRouteToContact = (href) => {
      if (!href) return true;

      const normalized = href.trim();
      return normalized === '#' || normalized === '/#' || normalized === 'javascript:void(0)' || normalized === 'javascript:void(0);' || normalized === 'javascript:;';
    };

    const handleClick = (event) => {
      const link = event.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      if (shouldRouteToContact(href)) {
        event.preventDefault();
        navigate('/contact');
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalLinkHandler />
      <App />
    </BrowserRouter>
  </StrictMode>
)
