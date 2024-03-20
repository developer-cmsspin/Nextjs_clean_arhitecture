import 'reflect-metadata';
import { container } from 'tsyringe';
import ITheme from './domain/interfaces/ITheme';

/**
 * Represents the Miles theme manager.
 */
export default class SwitchTheme {
  /**
   * An array of registered themes.
   */
  private static themes: ITheme[] = [];

  /**
   * Sets the specified theme as the active theme.
   * @param themeName - The name of the theme to be used.
   * @returns The active theme set for the application.
   * @throws Throws an error if the themeName parameter is undefined.
   */
  public static UseThemes(themeName?: string): ITheme {
    if (themeName === undefined) throw new Error('Theme is undefined');

    const theme = SwitchTheme.findTheme(themeName);
    container.register<ITheme>('ITheme', {
      useValue: theme
    });
    return theme;
  }

  /**
   * Loads a theme into the available themes list.
   * @param theme - The theme to be loaded.
   */
  public static LoadThemes(theme: ITheme): void {
    this.themes.push(theme);
  }

  /**
   * Finds and returns the active theme.
   * @returns The active theme instance.
   * @throws Throws an error if the active theme cannot be found.
   */
  private static findTheme(nameTheme: string): ITheme {
    const theme = this.themes.find((theme) => theme.name === nameTheme);
    if (theme === undefined) throw new Error('Theme ' + nameTheme + ' not found');
    else return theme;
  }

  /**
   * Retrieves the active theme.
   * @returns The active theme instance.
   */
  public static getTheme(): ITheme {
    return container.resolve<ITheme>('ITheme');
  }

  /**
   * Retrieves the theme associated with the specified route path.
   * @param path - The route path for which to retrieve the theme.
   * @returns The theme associated with the specified route path, or undefined if not found.
   */
  public static getRouteTheme(path: string) {
    return SwitchTheme.getTheme().routes.find((route) => route.path === path);
  }
}
