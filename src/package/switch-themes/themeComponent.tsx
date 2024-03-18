import { ThemeComponentProps } from './domain/ThemeComponentProps';
import switchTheme from './switchTheme';

/**
 * Represents a themed component that renders different content based on the specified source.
 * @param children - The children nodes to be rendered within the themed component.
 * @param source - The source used to determine the theme for the component.
 * @returns JSX.Element representing the rendered content based on the theme. If the theme is not found,
 * it renders the provided children; otherwise, it renders the component associated with the theme.
 */
const ThemeComponent = ({ children, source, params }: ThemeComponentProps) => {
  const route = switchTheme.getRouteTheme(source);
  if (route === undefined) {
    return <>{children}</>;
  } else {
    return <>{route.component(params)}</>;
  }
};

export default ThemeComponent;
