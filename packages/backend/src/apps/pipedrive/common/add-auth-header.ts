import { TBeforeRequest } from '@automatisch/types';

const addAuthHeader: TBeforeRequest = ($, requestConfig) => {
  if (requestConfig.additionalProperties?.skipAddingAuthHeader)
    return requestConfig;

  if ($.auth.data?.accessToken) {
    requestConfig.headers.Authorization = `${$.auth.data.tokenType} ${$.auth.data.accessToken}`;
  }

  return requestConfig;
};

export default addAuthHeader;
