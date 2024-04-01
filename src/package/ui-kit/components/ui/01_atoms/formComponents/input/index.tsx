import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';
import Yup from 'yup';
import { Input } from 'antd';
import { Control, useController } from 'react-hook-form';
import './index.css';
import { regex } from '@/package/ui-kit/global/utilities/regex';
import { lowercase, upperCase } from '@/package/ui-kit/global/utilities/functions';

/**
 * @interface CustomInputProps - Interface que define las propiedades del componente de input
 */
interface CustomInputProps {
  label: string;
  name: string;
  upperCase?: boolean;
  lowerCase?: boolean;
  onlyLetters?: boolean;
  alphanumeric?: boolean;
  noSpaces?: boolean;
  max?: number;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: 'filled' | 'outlined' | 'standard';
  control: Control<any>;
  schema: any;
  type?: 'text' | 'number' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'date' | 'time' | 'datetime-local';
  error?: string;
  disabled?: boolean;
  value?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

/**
 * Input component.
 *
 * @remarks
 * This functional component renders a input field. It accepts required and optionals props for works with react-hook-form and customization:
 * - `label` (string): Sets the field label title.
 * - `name` (string): Sets variable name inside react-hook-form control .
 * - `control` (Control from react-hook-from): It is responsible for the process of registering the field in the form.
 * - `schema` (Control from react-hook-from): It is responsible for validating the field
 * - `onBlur` (Control from react-hook-from): Its function is to validate the field when it loses focus
 * - `value` (Control from react-hook-from): Sets the field value.
 * - `startIcon` (Control from react-hook-from): Sets the prefix icon.
 * - `endIcon` (Control from react-hook-from): Sets the suffix icon
 * - `type` (Control from react-hook-from): Sets the input type (text, number, date, file, etc.).
 * - `disabled` (boolean): Enable or disable the input field.
 * - `rest` (Any): Any other prop that goes directly to the input.
 */
export const CustomInput = (props: CustomInputProps) => {
  const { label, name, control, schema, onBlur, value: fieldValue, startIcon, type, endIcon, disabled, ...rest } = props;

  /**
   * @function useController - Función que se encarga de registrar el input en el formulario
   */
  const {
    field: { onChange, onBlur: onInputBlur, value, ref }
    // fieldState: { invalid, error: err }
  } = useController({
    control,
    rules: {
      // validate: (val) => schema.validate(val).catch((error) => error.message)
      validate: (val) => (schema as Yup.AnySchema).validate(val).catch((error) => error.message)
    },
    defaultValue: '',
    name
  });

  /**
   * Función que se ejecuta al perder el foco del input
   * @param e Recibe el evento cuando se pierde el foco del input
   */
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onInputBlur();
    if (onBlur) {
      onBlur(e);
    }
  };

  /**
   * @function handleChange - Función que se ejecuta al cambiar el valor del input
   * @param event
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!disabled) {
      switch (type) {
        case 'text':
          // máximo de caracteres
          if (!!rest?.max && event?.target?.value?.length > rest?.max) break;
          // Solo letras
          if (!regex?.onlyLetters?.execute.test(event?.target?.value) && rest?.onlyLetters) break;
          // Solo caracteres alfanuméricos
          if (!regex?.alphanumeric?.execute.test(event?.target?.value) && rest?.alphanumeric) break;
          // Sin espacios
          if (!regex?.noSpaces?.execute.test(event?.target?.value) && rest?.noSpaces) break;
          if (rest?.upperCase) {
            event.target.value = upperCase(event?.target?.value);
          } else if (rest?.lowerCase) {
            event.target.value = lowercase(event?.target?.value);
          }
          onChange(event);
          break;
        case 'number':
          // máximo de dígitos
          if (!!rest?.max && event?.target?.value?.length > rest?.max) break;
          // Solo números
          if (regex?.onlyNumbers?.execute?.test(event?.target?.value)) onChange(event);
          break;
        default:
          onChange(event);
      }
    }
  };
  return (
    <div className={`custom-input-wrapper ${(value || type === 'date') && 'active'}`}>
      <Input
        {...rest}
        name={name}
        ref={ref}
        type={type === 'number' ? 'text' : type}
        value={fieldValue ? fieldValue : value}
        placeholder=" "
        onChange={handleChange}
        style={{ width: '300px' }}
        onBlur={handleBlur}
        prefix={startIcon}
        suffix={endIcon}
      />
      <label className="custom-placeholder">{label}</label>
    </div>
  );
};
