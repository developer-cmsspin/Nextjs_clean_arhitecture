//import '@/globalStyles/ui-kit.scss';
//import '@/shared/themes/test/assets/scss/testGlobalTheme.scss';

import testTheme from '@/package/switch-themes/switchTheme';
import Themetest from '@/shared/themes/test-theme/theme';
import type { Metadata, Viewport } from 'next';
import React from 'react';
import 'reflect-metadata';
const env = process.env;

//Load Themes
testTheme.LoadThemes(new Themetest());

const theme = testTheme.UseThemes(env.NEXT_PUBLIC_THEME);

//https://github.com/khj0426/HJ_Devlog/blob/main/src/app/layout.tsx
//https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0

export const metadata: Metadata = theme.getMetadata();
export const viewport: Viewport = {
  themeColor: 'black'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return theme.getLayout(children);
}
