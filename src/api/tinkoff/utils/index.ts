import { Metadata } from 'grpc';

import { Bond } from '#/api/tinkoff/proto/instruments_pb';

import { API_SANDBOX_BEARER_TOKEN } from '../constants';

export const getAuthMetadata = () => {
  const metadata = new Metadata();
  metadata.set('Authorization', API_SANDBOX_BEARER_TOKEN);

  return metadata;
};

export let networkCallsCount = 0;

export const promiseCallback =
  (resolve: any, reject: any) => (error: any, response: any) => {
    if (error) {
      reject(error);
    } else {
      networkCallsCount++;
      resolve(response);
    }
  };

export const getBondCashKey = (bond: Bond) => bond.getFigi();

export const getCashRequest = <TResponse, TArguments>(
  getCashKey: (args: TArguments) => string,
  request: (args: TArguments) => Promise<TResponse>
) => {
  const cashMap: Record<string, TResponse | undefined> = {};

  return async (args: TArguments) => {
    const cashKey = getCashKey(args);
    const value = cashMap[cashKey];

    if (value) {
      return value;
    }

    const response = await request(args);
    cashMap[cashKey] = response;

    return response;
  };
};
