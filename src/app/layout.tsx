import { Providers } from '@/infrastructure/persistence/redux/provider';
import SwitchTheme from '@/package/switch-themes/switchTheme';
import '@/package/ui-kit/global/ui-kit.scss';
import { fonts } from '@/shared/hooks/design/font';
import ThemeTest from '@/shared/themes/test-theme/theme';
import { default as StyleUtils } from '@/utilities/utils.module.scss';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import { Metadata } from 'next';
import React from 'react';

//Load Themes
const env = process.env;
SwitchTheme.LoadThemes(new ThemeTest());

const theme = SwitchTheme.UseThemes(env.NEXT_PUBLIC_THEME);

//https://github.com/khj0426/HJ_Devlog/blob/main/src/app/layout.tsx
//https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0

export const metadata: Metadata = theme.getMetadata();

/**
 * RootLayout Component
 *
 * This component represents the root layout of a web application.
 * It defines the main structure and styling of the application's UI.
 *
 * @param children The content to be rendered within the layout.
 */
export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  // Retrieve the `inter` font class name using the `fonts()` hook
  const { inter } = fonts();

  return (
    <html lang="es" className={`${inter.className}`}>
      <body>
        {/* Ant Design Layout component */}
        <Layout className={StyleUtils.layout}>
          {/* Main content area */}
          <Content className={StyleUtils.layout__main}>
            {/* Redux Providers component */}
            <Providers>{children}</Providers>
          </Content>

          {/* Footer */}
          <Footer className={StyleUtils.footer}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </body>
    </html>
  );
}
