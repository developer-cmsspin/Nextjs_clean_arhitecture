import ITheme from '@/package/switch-themes/domain/interfaces/ITheme';
import RouteTheme from '@/package/switch-themes/domain/routeTheme';
import { Metadata } from 'next';
import { ReactNode } from 'react';

//import Slider from '../test/components/slider/slider';
import layout from './layout';
import Page from './page';

export default class ThemeTest implements ITheme {
  public routes: RouteTheme[];
  public name: string;

  public constructor() {
    this.name = 'test';

    this.routes = [
      new RouteTheme(`page:/`, Page)
      //new RouteTheme(`page:/security`, Page)

      //new RouteTheme('component:/location/locationComplete', LocationComplete),
      //new RouteTheme('component:/header/header', Header)
      //new RouteTheme('component:/slider/slider', Slider)
    ];
  }

  public getLayout(children: ReactNode): JSX.Element {
    return layout(children);
  }

  public getMetadata(): Metadata {
    return {
      title: 'test',
      description: ' test',
      icons: {
        icon: '/themes/test/img/favicon/favicon.ico'
      },
      metadataBase: new URL('https://www.google.com/'),
      openGraph: {
        url: 'https://www.google.com',
        title: 'Test',
        images: [
          {
            url: 'https://test.com/wp-content/uploads/2023/06/Logo-wo_Mesa-de-trabajo-1.png',
            width: 800,
            height: 600
          },
          {
            url: 'https://test.com/wp-content/uploads/2023/06/Logo-wo_Mesa-de-trabajo-1.png',
            width: 1800,
            height: 1600,
            alt: 'My custom alt'
          }
        ],
        type: 'website'
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true
        }
      },
      viewport: {
        width: 'device-width',
        initialScale: 1
      },
      verification: {
        google: 'XXXXXXXXXX'
      }
    };
  }
}