/**
 * Represents a theme for a specific route in the application.
 */
export default class RouteTheme {
  /**
   * Constructs a new RouteTheme instance with the specified path and component.
   * @param path - The path of the route associated with this theme.
   * @param component - The component that should be rendered for this route.
   */
  public constructor(path: string, component: any) {
    this.path = path;
    this.component = component;
  }

  /**
   * The path of the route associated with this theme.
   */
  public path: string;

  /**
   * The component that should be rendered for this route.
   */
  public component: any;
}
