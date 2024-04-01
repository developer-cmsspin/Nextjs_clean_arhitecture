/* eslint-disable no-template-curly-in-string */
import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    default: 'Campo inválido',
    required: 'Campo requerido',
    oneOf: 'Debe ser uno de los siguientes valores: ${values}',
    notOneOf: 'No puede ser uno de los siguientes valores: ${values}',
    defined: 'Debe estar definido',
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg =
        `${path} debe ser un \`${type}\` tipo, ` +
        `pero el valor final era: \`${JSON.stringify(value)}\`${
          isCast ? ` (con el valor original \`${JSON.stringify(originalValue)}\`).` : '.'
        }`;

      if (value === null) {
        msg +=
          `\n Si "null" es intencional como valor vacío ` +
          `considere usar el tipo \`mixed.null()\``;
      }

      return msg;
    },
  },
  string: {
    length: 'Debe tener exactamente ${length} caracteres',
    min: 'Debe tener al menos ${min} caracteres',
    max: 'Debe tener como máximo ${max} caracteres',
    email: 'Debe ser un correo electrónico válido',
    url: 'Debe ser una URL válida',
    trim: 'No debe contener espacios en blanco al principio o al final',
    lowercase: 'Debe estar en minúsculas',
    uppercase: 'Debe estar en mayúsculas',
    matches: 'Debe coincidir con el siguiente: "${regex}"',
    uuid: 'Debe ser un UUID válido',
  },
  number: {
    min: 'Debe ser mayor o igual a ${min}',
    max: 'Debe ser menor o igual a ${max}',
    lessThan: 'Debe ser menor a ${less}',
    moreThan: 'Debe ser mayor a ${more}',
    positive: 'Debe ser un número positivo',
    negative: 'Debe ser un número negativo',
    integer: 'Debe ser un número entero',
  },
  date: {
    min: 'Debe ser posterior a ${min}',
    max: 'Debe ser anterior a ${max}',
  },
  boolean: {
    isValue: 'Debe ser verdadero o falso',
  },
  object: {
    noUnknown: 'No se permiten propiedades desconocidas',
  },
  array: {
    min: 'Debe tener al menos ${min} elementos',
    max: 'Debe tener como máximo ${max} elementos',
    length: 'Debe tener exactamente ${length} elementos',
  },
});

export default Yup;
