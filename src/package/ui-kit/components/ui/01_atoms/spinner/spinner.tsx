import styled from './Style.module.scss';

/**
 * Spinner component.
 *
 * @remarks
 * This functional component renders a spinner animation. It accepts optional props for customization:
 * - `micro` (boolean): Sets the spinner size to micro.
 * - `small` (boolean): Sets the spinner size to small.
 * - `className` (string): Additional class name(s) to apply to the top-level span element.
 *
 * Example usage:
 * ```tsx
 * <Spinner micro className="custom-spinner" />
 * ```
 */
export function Spinner({ micro, small, className }: ISpinner) {
  return (
    <span className={`${className ? className : ''}`}>
      <span className={`${styled.loader} ${micro ? styled.micro : ''} ${small ? styled.small : ''}`}></span>
    </span>
  );
}

/**
 * Props interface for the Spinner component.
 */
interface ISpinner {
  micro?: boolean;
  small?: boolean;
  className?: string;
}
