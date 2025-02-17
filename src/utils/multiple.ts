import { sum } from '@/utils/sum';

export const multiple = (a: number, b: number): number => {
  for (let i = 1; i <= b; i++) {
    a = sum(a, a);
  }
  return a;
};
