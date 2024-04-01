import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

/*
const arquitecta = localFont({
  src: [
    {
      path: '../assets/fonts/arquitecta/ArquitectaBold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/arquitecta/ArquitectaHeavy.woff',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--arquitecta'
});
*/

/**
 * Initializes the Icomoon font.
 */
/*
const icomoon = localFont({
  src: [
    {
      path: '../../energizeeUI/assets/fonts/icomoon/icomoon.woff',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-icommon'
});
*/

export function fonts() {
  //return { inter, arquitecta, icomoon };
  return { inter };
}
