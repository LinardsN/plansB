import React from 'react';
import { createRoot } from 'react-dom/client';
import Photos from '../pages/Photos.jsx';
import { useLang } from '../shared/useLang.js';
import '../shared/fonts.css';
import '../shared/global.css';
import '../shared/responsive.css';

function App() {
  const [lang] = useLang();
  return <Photos lang={lang} grain={0.08} />;
}

createRoot(document.getElementById('root')).render(<App />);
