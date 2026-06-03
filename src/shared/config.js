// Used by the form onSubmit guard: humans take longer than this to fill out
// the contact form. Anything faster is almost certainly an automated submit.
export const FORM_MIN_DWELL_MS = 2000;

// Form submissions go through FormSubmit.co — free, no signup, the form
// posts directly here and the service forwards the message to the
// recipient. First submission triggers a one-time verification email to
// the recipient address; after they click confirm, all future submissions
// land in their inbox. To change the recipient: replace the address below,
// commit, push. Cloudflare Pages auto-rebuilds.
export const FORM_RECIPIENT = 'linardsn@gmail.com';
export const FORM_ACTION = `https://formsubmit.co/${FORM_RECIPIENT}`;
export const FORM_SUCCESS_URL = 'https://plans-b.lv/paldies/';

export const SITE = {
  url: 'https://plans-b.lv',
  name: 'Plāns B',
  description: {
    lv: 'Plāns B — dzīva mūzika kāzām, korporatīviem un privātām ballītēm. Piecu cilvēku sastāvs no Liepājas.',
    en: 'Plāns B — live music for weddings, corporate events and private parties. Five-piece from Liepāja, Latvia.',
  },
  ogImage: '/photos/band-hero.jpg',
};
