import React from 'react';
import { createRoot } from 'react-dom/client';
import Gallery from '../pages/Gallery.jsx';
import '../shared/fonts.css';
import '../shared/global.css';
import '../shared/responsive.css';

createRoot(document.getElementById('root')).render(
  <Gallery lang="lv" grain={0.08} />
);
