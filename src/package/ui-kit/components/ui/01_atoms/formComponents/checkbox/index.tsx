import React from 'react';
import './index.css';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Control, useController } from 'react-hook-form';
import Yup from '@/package/ui-kit/global/utilities/validator';

/**
 * @interface CustomCheckboxProps - Interface que define las propiedades del componente checkbox
 */
interface CustomCheckboxProps {
  label?: string;
  name: string;
  control: Control<any>;
  schema: Yup.AnySchema;
  error?: string;
}

/**
 * Checkbox component.
 *
 * @remarks
 * This functional component renders a input field. It accepts required and optionals props for works with react-hook-form and customization:
 * - `label` (string): Sets the field label title.
 * - `name` (string): Sets variable name inside react-hook-form control .
 * - `control` (Control from react-hook-from): It is responsible for the process of registering the field in the form.
 * - `schema` (Control from react-hook-from): It is responsible for validating the field
 * - `rest` (Any): Any other prop that goes directly to the input.
 */
export const CustomCheckbox = (props: CustomCheckboxProps) => {
  const { label, control, schema, name, ...rest } = props;

  /**
   * @function onChange - Función que se encarga de registrar  el valor del checkbox en el formulario
   * @param e - Evento del input
   */
  const onChange = (e: CheckboxChangeEvent) => {
    // eslint-disable-next-line no-console
    console.log(`checked = ${e.target.checked}`);
  };

  /**
   * @function useController - Función que se encarga de registrar el valor del checkbox en el formulario
   */
  const { field } = useController({
    name,
    control,
    rules: {
      validate: (val) => schema.validate(val).catch((error) => error.message)
    },
    defaultValue: ''
  });

  return (
    <div className="custom-checkbox-wrapper">
      <Checkbox {...rest} {...field} name={name} onChange={onChange}>
        {label}
      </Checkbox>
    </div>
  );
};
