import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Modal from 'react-modal'
import './index.css'
import App from './App.jsx'

// Modal.setAppElement("#modal-root");
Modal.setAppElement("#app");

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

