import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

reportWebVitals();

{/* <BrowserRouter>
    <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route path="/about" element={<ArtistDetails/>} />
    </Routes>
</BrowserRouter> */}