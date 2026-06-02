import React from 'react';
import { createRoot } from 'react-dom/client';
import Privacy from '../pages/Privacy.jsx';
import { useLang } from '../shared/useLang.js';
import '../shared/fonts.css';
import '../shared/global.css';

function App() {
  const [lang] = useLang();
  return <Privacy lang={lang} />;
}

createRoot(document.getElementById('root')).render(<App />);
