import { Bond } from '#/api/tinkoff/proto/instruments_pb';
import { getYTM } from '#/bonds/math/getYTM';
import { getBondCouponPaymentStreams } from '#/bonds/utils/getBondPaymentStreams';
import { getYTMPerHours } from '#/bonds/utils/getYTMPerHours';

export const getDuration = async (bond: Bond) => {
  const ytm = await getYTM(bond);
  const ytmPerHours = getYTMPerHours(ytm);

  let numerator = 0;
  let denominator = 0;

  const bondCouponPaymentStreams = await getBondCouponPaymentStreams(bond);

  bondCouponPaymentStreams.forEach(({ payment, diffInHours }) => {
    numerator += (payment / Math.pow(ytmPerHours, diffInHours)) * diffInHours;
    denominator += payment / Math.pow(ytmPerHours, diffInHours);
  });

  return numerator / denominator;
};
