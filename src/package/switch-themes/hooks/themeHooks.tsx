import switchTheme from '@/package/switch-themes/switchTheme';

/**
 * Retrieves the base theme based on the provided source and checks if it exists.
 * @param source - The source used to determine the base theme.
 * @returns A boolean value indicating whether the base theme exists for the provided source.
 */
export default function useBaseTheme(source: string): boolean {
  const route = switchTheme.getRouteTheme(source);
  return route == undefined;
}
