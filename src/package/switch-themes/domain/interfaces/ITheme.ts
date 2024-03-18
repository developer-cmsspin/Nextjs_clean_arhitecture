import { Metadata } from 'next';
import { ReactNode } from 'react';
import RouteTheme from '../routeTheme';

/**
 * Represents a theme in the application.
 */
export default interface ITheme {
  /**
   * An array of RouteTheme objects that define the themes for different routes.
   */
  routes: RouteTheme[];

  /**
   * The name of the theme.
   */
  name: string;

  /**
   * Retrieves the layout component for rendering the children.
   * @param children - The ReactNode representing the content to be rendered within the layout.
   * @returns A JSX.Element representing the layout component with the provided children.
   */
  getLayout(children: ReactNode): JSX.Element;

  /**
   * Retrieves the metadata associated with the theme.
   * @returns The Metadata object containing information about the theme, such as title and meta tags.
   */
  getMetadata(): Metadata;
}
