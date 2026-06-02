import React from 'react';
import { createRoot } from 'react-dom/client';
import ThankYou from '../pages/ThankYou.jsx';
import { useLang } from '../shared/useLang.js';
import '../shared/fonts.css';
import '../shared/global.css';

function App() {
  const [lang] = useLang();
  return <ThankYou lang={lang} />;
}

createRoot(document.getElementById('root')).render(<App />);
