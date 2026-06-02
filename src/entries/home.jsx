import React from 'react';
import { createRoot } from 'react-dom/client';
import ConceptAnomaly from '../pages/ConceptAnomaly.jsx';
import MobileAnomaly from '../pages/MobileAnomaly.jsx';
import '../shared/fonts.css';
import '../shared/global.css';

function App() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' && window.innerWidth <= 768
  );
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile
    ? <MobileAnomaly lang="lv" />
    : <ConceptAnomaly lang="lv" grain={0.08} theme="dark" />;
}

createRoot(document.getElementById('root')).render(<App />);
