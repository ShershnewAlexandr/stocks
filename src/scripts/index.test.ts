import { getBond, getBonds, getCoupons, getLastPrice } from '#/api/tinkoff';
import { OFZFilter } from '#/bonds/utils/filters';
import { saveScriptResponse } from '#/utils/fs';
import {
  comparatorDirection,
  EComparatorDirection,
  nominalComparator,
} from '#/bonds/utils/comparators';
import { getYTM } from '#/bonds/math/getYTM';
import { getDuration } from '#/bonds/math/getDuration';

jest.setTimeout(60000);

describe('bonds', () => {
  it('get ofz simple bonds', async () => {
    const bonds = await getBonds();
    const ofzBonds = bonds
      .filter(OFZFilter)
      .sort(comparatorDirection(EComparatorDirection.ASK, nominalComparator));
    const ofzInfo = ofzBonds.map((bond) => ({
      figi: bond.getFigi(),
      currency: bond.getCurrency(),
      name: bond.getName(),
      bondType: bond.getBondType(),
      nominalUnits: bond.getNominal()?.getUnits(),
      nominalNano: bond.getNominal()?.getNano(),
    }));
    saveScriptResponse(ofzInfo, 'ofz');
  });

  it('get bond', async () => {
    const figi = 'TCS00A1074G2';
    const bond = await getBond(figi);
    const price = bond?.getRealExchange().toLocaleString();
    saveScriptResponse(
      {
        price,
        ...bond?.toObject(),
      } ?? {},
      'bond'
    );
  });

  it('get bond coupons', async () => {
    const figi = 'TCS00A1074G2';
    const bond = await getBond(figi);
    const coupons = (await getCoupons(bond)).map((coupon) => {
      return {
        type: coupon.getCouponType(),
        date: coupon.getCouponDate()?.toDate().toDateString(),
        nominal: coupon.getPayOneBond()?.getUnits(),
        couponNumber: coupon.getCouponNumber(),
      };
    });
    saveScriptResponse(coupons, 'coupons');
  });

  it('get ytm', async () => {
    const figi = 'BBG00NQBGZX5';
    const bond = await getBond(figi);
    const price = await getLastPrice(bond);
    const ytm = await getYTM(bond);
    console.log('price ', price);
    console.log(bond.getName(), ytm);
  });

  it('get duration', async () => {
    const figi = 'BBG00PBZNWM4';
    const bond = await getBond(figi);
    const duration = await getDuration(bond);
    console.log(bond.getName(), duration);
  });

  it('get last bond price', async () => {
    const figi = 'BBG00PBZNWM4';
    const bond = await getBond(figi);
    const lastPrice = await getLastPrice(bond);

    saveScriptResponse({ lastPrice }, 'lastPrice');
  });

  it('ofz ytms', async () => {
    const bonds = await getBonds();
    const ofzBonds = bonds
      .filter(OFZFilter)
      .sort(comparatorDirection(EComparatorDirection.ASK, nominalComparator));
    const res = [];
    for (let i = 0; i < ofzBonds.length; i++) {
      const ytm = await getYTM(ofzBonds[i]);
      const duration = await getDuration(ofzBonds[i]);

      res.push({
        ytm,
        duration,
        name: ofzBonds[i].getName(),
      });
    }

    res.sort((a, b) => (a.duration > b.duration ? 1 : -1));

    saveScriptResponse({ res }, 'ofz_ytms');
  });

  it('test', () => {
    console.log('kek');
  });
});
