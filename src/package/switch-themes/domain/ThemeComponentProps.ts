/**
 * Represents the props for a themed component.
 */
export type ThemeComponentProps = {
  /**
   * The children nodes to be rendered within the themed component.
   */
  children: React.ReactNode;

  /**
   * The source of the theme for the component.
   */
  source: string;

  params?: any;
};
