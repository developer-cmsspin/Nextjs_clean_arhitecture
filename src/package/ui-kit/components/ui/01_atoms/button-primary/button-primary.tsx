import { Button } from 'antd';
import React from 'react';
import { Spinner } from '../spinner';
import Styled from './Style.module.scss';

/**
 * Represents a primary button component with customizable styles and functionality.
 */
interface IButton {
  /**
   * The content to be displayed inside the button.
   */
  children: React.ReactNode;

  /**
   * Indicates whether the button should have a small size.
   */
  small?: boolean;

  /**
   * Indicates whether the button is disabled.
   */
  disabled?: boolean;

  /**
   * Indicates whether the button is in a loading state.
   */
  loading?: boolean;

  /**
   * Indicates whether the button should be responsive.
   */
  responsive?: boolean;

  /**
   * Specifies whether the button should occupy the full width of its container.
   */
  dataFullSize?: boolean;

  /**
   * A string representing the track for a modal component associated with the button.
   */
  dataModalTrack?: string;

  /**
   * A string representing the identifier of a modal component associated with the button.
   */
  dataModal?: string;

  /**
   * Additional CSS class name(s) to apply to the button.
   */
  className?: string;

  /**
   * A ref object that can be used to reference the HTML button element.
   */
  ref?: React.Ref<HTMLButtonElement>;

  /**
   * Event handler for the click event on the button.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Event handler for the mouseover event on the button.
   */
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Event handler for the mouseout event on the button.
   */
  onMouseOut?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Event handler for the mouseup event on the button.
   */
  onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Event handler for the mouseenter event on the button.
   */
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Event handler for the mouseleave event on the button.
   */
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Represents a primary button component with customizable styles and functionality.
 *
 * @remarks
 * This component combines the provided properties to render a button with specified styles, data attributes, and event handlers.
 */
const ButtonPrimary = ({
  children,
  small,
  disabled,
  loading,
  responsive,
  dataFullSize,
  dataModalTrack,
  dataModal,
  className,
  ref,
  onClick,
  onMouseOver,
  onMouseOut,
  onMouseUp,
  onMouseEnter,
  onMouseLeave
}: IButton) => {
  const combinedClasses = `
    ${className ? className : ''}
    ${small ? Styled.small : ''}
    ${responsive ? Styled.responsive : ''}
    ${Styled.button}`.trim();

  return (
    <Button
      disabled={disabled}
      data-fullsize={dataFullSize}
      data-modaltrack={dataModalTrack}
      data-modal={dataModal}
      ref={ref}
      className={combinedClasses}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={`${loading ? Styled.label_hide : ''}`}>{children}</span>
      {loading && <Spinner micro className={Styled.spinner} />}
    </Button>
  );
};

export { ButtonPrimary };
