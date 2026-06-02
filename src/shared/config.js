// Used by the form onSubmit guard: humans take longer than this to fill out
// the contact form. Anything faster is almost certainly an automated submit.
// (Form submissions are handled by Netlify Forms — see README.)
export const FORM_MIN_DWELL_MS = 2000;

export const SITE = {
  url: 'https://plans-b.lv',
  name: 'Plāns B',
  description: {
    lv: 'Plāns B — dzīva mūzika kāzām, korporatīviem un privātām ballītēm. Piecu cilvēku sastāvs no Liepājas.',
    en: 'Plāns B — live music for weddings, corporate events and private parties. Five-piece from Liepāja, Latvia.',
  },
  ogImage: '/photos/band-hero.jpg',
};
