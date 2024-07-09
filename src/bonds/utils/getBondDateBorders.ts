import { Bond } from '#/api/tinkoff/proto/instruments_pb';
import { getDateByTimestamp } from '#/utils/time';
import { getLastPrice } from '#/api/tinkoff';

export const getBondDateBorders = async (bond: Bond) => {
  const { time } = await getLastPrice(bond);
  const currentDate = time;
  const maturityDate = getDateByTimestamp(bond.getMaturityDate());

  return {
    currentDate,
    maturityDate,
  };
};
