// Web3Forms access keys are public by design — they identify the form, not
// authenticate the sender. The real anti-abuse is configured at the Web3Forms
// dashboard (Allowed Domains = https://plans-b.lv, https://www.plans-b.lv)
// plus the hidden `botcheck` field and the submit-time honeypot in the form.
// See README → "Web3Forms hardening" for the dashboard checklist.

export const WEB3FORMS_KEY = '761a9037-6dc9-44a3-bece-ba7b93847c69';

// Used by the form onSubmit guard: humans take longer than this to fill out
// the contact form. Anything faster is almost certainly an automated submit.
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
