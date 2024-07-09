import { writeFileSync } from 'node:fs';

import beautify from 'json-beautify';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const JSONBeautify = (object: object) => beautify(object, null, 2);

export const saveScriptResponse = (
  response: object,
  additionalName?: string
) => {
  try {
    writeFileSync(
      `src/scripts/responses/testResponse${
        additionalName ? `_${additionalName}` : ''
      }.json`,
      JSONBeautify(response)
    );
  } catch (e) {
    console.log('error save test response: ', e);
  }
};
