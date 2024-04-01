//import StyleUtils from '@/utilities/utils.module.scss';
import { dependencyInjection } from '@/shared/hooks/architecture/dependency';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

/*
const arquitecta = localFont({
  src: [
    {
      path: './assets/fonts/arquitecta/ArquitectaBold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: './assets/fonts/arquitecta/ArquitectaHeavy.woff',
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
      path: '../testUI/assets/fonts/icomoon/icomoon.woff',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-icommon'
});
*/
//const requestDtoMessage = new RequestContentSiteDto('en/', 'test', 'US', 'EN');

/**
 * Renders the layout component.
 *
 * @param {ReactNode} children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered layout component.
 */
export default function Layout(children: ReactNode): JSX.Element {
  dependencyInjection();

  /**
   * Represents the layout structure for a web page.
   *
   * The layout includes a header, main content area, and an empty aside element.
   */
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <div>
          <main>{children}</main>
          <aside></aside>
        </div>
      </body>
    </html>
  );
}
