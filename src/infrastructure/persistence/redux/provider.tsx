'use client';
import { Provider } from 'react-redux';
import { store } from './store';

/**
 * The Providers component.
 *
 * @param children - The child components to be wrapped by the Provider component.
 * @returns A JSX element wrapping the child components with the Redux Provider.
 *
 * @remarks
 * The Providers component is responsible for providing the Redux store to its child components. It utilizes the `Provider` component
 * from the React Redux library. The Redux store, obtained from the './store' module, is passed as a prop to the Provider component.
 * This allows all child components within the Providers component's hierarchy to access the Redux store and dispatch actions.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
