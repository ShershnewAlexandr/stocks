import { Bond } from '#/api/tinkoff/proto/instruments_pb';

export const OFZFilter = (bond: Bond): boolean =>
  bond.getName().includes('ОФЗ 26');
