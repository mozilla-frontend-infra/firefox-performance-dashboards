import isEqual from 'lodash.isequal';

const hasSameExtraOptions = (signatureExtraOptions, extraOptions, ignoredExtraOptions) => {
  console.log('signatureExtraOptions, extraOptions, ignoredExtraOptions', signatureExtraOptions, extraOptions, ignoredExtraOptions);
  if (!signatureExtraOptions && !extraOptions) {
    return true;
  }

  let filteredSignatureExtraOptions = [];
  const requestedExtraOptions = !extraOptions ? [] : extraOptions;

  if (signatureExtraOptions) {
    if (ignoredExtraOptions) {
      filteredSignatureExtraOptions = signatureExtraOptions.filter(
        (extraOption) => !ignoredExtraOptions.includes(extraOption),
      );
    } else {
      filteredSignatureExtraOptions = signatureExtraOptions;
    }
  }

  return isEqual(filteredSignatureExtraOptions.sort(), requestedExtraOptions.sort());
};

export default hasSameExtraOptions;
