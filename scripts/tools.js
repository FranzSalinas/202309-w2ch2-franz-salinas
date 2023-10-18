export const strictEquals = (a, b) => {
  const restOfResults = Object.is(a, b);

  if (Object.is(a, NaN) || Object.is(NaN, b)) {
    // Versión de Alenjandro:  if (isNan(a)) || isNan(b)){ return false;}
    return false;
  }

  if (Object.is(a, -0) && Object.is(0, b)) {
    return true;
  }

  if (Object.is(-0, b) && Object.is(a, 0)) {
    return true;
  }

  return restOfResults;
};
