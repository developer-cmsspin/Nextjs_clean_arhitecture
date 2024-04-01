export const regex = {
    alphanumeric: { execute: /^[a-zA-Z0-9\s]*$/, message: 'Solo se permiten caracteres alfanuméricos' },
    noSpaces: { execute: /^[^\s]*$/, message: 'No se permiten espacios' },
    trim: { execute: /^(?!\s)[\w\s\S]*(?<!\s)$/, message: 'No se permiten espacios en principio y final' },
    onlyLetters: { execute: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]*$/, message: 'Solo se permiten letras' },
    onlyNumbers: { execute: /^[0-9]*$/, message: 'Solo se permiten números' }
  };
  