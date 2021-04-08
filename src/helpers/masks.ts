export const celularMask = [
  '(',
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const telefoneMask = [
  '(',
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const dateMask = [
  /[0-9]/,
  /\d/,
  '/',
  /[0-1]/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const horaMask = [/[0-9]/, /\d/, ':', /\d/, /\d/];
