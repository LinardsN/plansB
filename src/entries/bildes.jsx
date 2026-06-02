import React from 'react';
import { createRoot } from 'react-dom/client';
import Photos from '../pages/Photos.jsx';
import '../shared/fonts.css';
import '../shared/global.css';
import '../shared/responsive.css';

createRoot(document.getElementById('root')).render(
  <Photos lang="lv" grain={0.08} />
);
