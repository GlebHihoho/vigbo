/* eslint-disable import/prefer-default-export */
export const getId = string => (string ? string.match(/\d+/)[0] : null);
