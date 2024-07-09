import { Bond } from '#/api/tinkoff/proto/instruments_pb';
import { getBondPaymentStreams } from '#/bonds/utils/getBondPaymentStreams';
import { getYTMPerHours } from '#/bonds/utils/getYTMPerHours';
import { binarySearchByDelta } from '#/utils/binarySearchByDelta';

const getNominalByYTM = async (ytm: number, bond: Bond) => {
  const ytmPerHours = getYTMPerHours(ytm);
  let realNominal = 0;
  const allYTMPayments = await getBondPaymentStreams(bond);

  allYTMPayments.forEach(({ payment, diffInHours }) => {
    realNominal += payment / Math.pow(ytmPerHours, diffInHours);
  });

  return realNominal;
};

export const getYTM = async (bond: Bond) => {
  const maxDelta = 0.000001;
  const getValue = (currentYTM: number) => getNominalByYTM(currentYTM, bond);
  const endCondition = (value: number) => Math.abs(value) < maxDelta;
  const comparator = (value: number) => value < 0;

  return binarySearchByDelta(1, 10, getValue, endCondition, comparator);
};
