import React, { useState } from 'react';
import './index.css';
import { Control, useController } from 'react-hook-form';
import { Select } from 'antd';
import validator from '@/package/ui-kit/global/utilities/validator';

/**
 * @interface CustomSelectProps - Interface que define las propiedades del componente del select
 */
interface CustomSelectProps {
  options: { value: number; label: string }[];
  control: Control<any>;
  // schema: validator.AnySchema;
  schema: any;
  name: string;
  keyValue?: string;
  keyLabel: string;
  multiple?: boolean;
  label: string;
  disabled?: boolean;
}

/**
 * Select component.
 *
 * @remarks
 * This functional component renders a select field. It accepts required and optionals props for works with react-hook-form and customization:
 * - `label` (string): Sets the field label title.
 * - `name` (string): Sets variable name inside react-hook-form control .
 * - `control` (Control from react-hook-from): It is responsible for the process of registering the field in the form.
 * - `schema` (Control from react-hook-from): It is responsible for validating the field
 * - `rest` (Any): Any other prop that goes directly to the input.
 * - `options` (Array): Sets the options of the select.
 * - `keyValue` (Any): Sets the key of the value of the select.
 * - `keyLabel` (Any): Sets the key of the label of the select.
 * - `multiple` (Any): Sets the select to multiple.
 * - `disabled` (Any): Enable or disable the select field.
 */
export const CustomSelect = (props: CustomSelectProps) => {
  const { label, options, control, schema, name, disabled, multiple, keyValue, ...rest } = props;

  /**
   * @function useController - Función que se encarga de registrar el valor del select en el formulario
   */
  const { field } = useController({
    name,
    control,
    rules: {
      // validate: (val) => schema.validate(val).catch((error) => error.message)
      validate: (val) => (schema as validator.AnySchema).validate(val).catch((error) => error.message)
    },
    defaultValue: ''
  });

  const [value, setValue] = useState<string | number | null>(null);

  /**
   * @function filterOption - Función que se encarga de filtrar las opciones del select con el valor del input
   * @param input Captura el valor del input del select para filtrar las opciones.
   * @param option Array de opciones del select.
   * @returns
   */
  const filterOption = (input: string, option?: { label: string; value: string | number | null }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div className={`custom-select-wrapper ${value ? 'has-value' : ''}`}>
      <Select
        {...rest}
        showSearch
        ref={field.ref}
        optionFilterProp="children"
        onChange={(event, value: any) => {
          if (!disabled) {
            if (!multiple) {
              setValue(value);
              return field.onChange(keyValue ? value[keyValue as any] : value);
            }
            return field.onChange(keyValue ? value?.map((x: any) => x?.[keyValue]) : value);
          }
        }}
        value={value}
        options={options}
        filterOption={filterOption}
        style={{ width: '300px' }}
      />
      <label className="custom-placeholder">{label}</label>
    </div>
  );
};
