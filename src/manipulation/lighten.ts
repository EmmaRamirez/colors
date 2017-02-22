import { HSLColorObject } from '../interfaces';
import { convertPercentageToDecimal } from './utils';

export const lighten = (color:HSLColorObject, percentage):HSLColorObject => {
  const amount = typeof percentage === 'string' ? convertPercentageToDecimal(percentage) : percentage;
  let newLight = color.l + (amount * 100);
  return {
    h: color.h,
    s: color.s,
    l: newLight,
    a: color.a
  };
};
