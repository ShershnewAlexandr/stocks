export const binarySearchByDelta = async (
  min: number,
  max: number,
  getValue: (current: number) => Promise<number>,
  endCondition: (lastValue: number) => boolean,
  comparator: (lastValue: number) => boolean
) => {
  let current;
  let lastValue;

  do {
    current = (min + max) / 2;
    lastValue = await getValue(current);

    if (comparator(lastValue)) {
      max = current;
    } else {
      min = current;
    }
  } while (!endCondition(lastValue));

  return current;
};
