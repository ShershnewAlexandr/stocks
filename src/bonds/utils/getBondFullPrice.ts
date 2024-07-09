import { Bond } from '#/api/tinkoff/proto/instruments_pb';
import { getLastPrice } from '#/api/tinkoff';
import { getFloatMoney } from '#/utils/money';

export const getBondFullPrice = async (bond: Bond) => {
  const { price: bondPrice } = await getLastPrice(bond);
  const bondAci = getFloatMoney(bond.getAciValue());

  return bondPrice + bondAci;
};
