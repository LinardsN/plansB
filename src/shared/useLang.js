// LV/EN language preference, persisted in localStorage so it survives across
// the multi-page navigation between /, /galerija/, /bildes/.

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'plansb-lang';
const FALLBACK = 'lv';

function readStored() {
  if (typeof window === 'undefined') return FALLBACK;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === 'lv' || v === 'en' ? v : FALLBACK;
  } catch {
    return FALLBACK;
  }
}

export function useLang() {
  const [lang, setLang] = useState(readStored);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage disabled (private browsing) — fine, choice just doesn't persist
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return [lang, setLang];
}
