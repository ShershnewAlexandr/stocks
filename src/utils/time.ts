import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

export const getDateByTimestamp = (timestamp: Timestamp | undefined): Date => {
  if (timestamp === undefined) {
    throw new Error('timestamp = undefined');
  }

  return timestamp.toDate();
};
