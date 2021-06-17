export const NAVIGATION = [
  {
    name: 'team',
    route: '/team'
  },
  {
    name: 'contact',
    route: '/contact'
  },
];

export const INTERNS = [
  {name: "britney", position: "pm"},
  {name: "anya", position: "swe"},
  {name: "saiful", position: "swe"},
  {name: "michelle", position: "swe"},
  {name: "kara", position: "swe"},
];

export const LANGS = [
  {code: 'en', name: 'English'},
  {code: 'es', name: 'Español'},
  {code: 'fr', name: 'Français'},
  {code: 'ar', name: 'عربى'},
  {code: 'zh', name: '中文'},
  {code: 'de', name: 'Deutsche'},
];

export const LOCALES = LANGS.map(({code}) => code);