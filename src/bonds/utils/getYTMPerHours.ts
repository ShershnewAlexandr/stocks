export const getYTMPerHours = (ytm: number): number =>
  Math.pow(ytm, 1 / (365 * 24));
