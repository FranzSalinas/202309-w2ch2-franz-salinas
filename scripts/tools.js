export const strictEquals = (a, b) => {
  const restOfResults = Object.is(a, b);

  if (Object.is(a, NaN) || Object.is(NaN, b)) {
    console.log(false);
  } else if (Object.is(a, -0) && Object.is(0, b)) {
    console.log(true);
  } else if (Object.is(-0, b) && Object.is(a, 0)) {
    console.log(true);
  } else {
    console.log(restOfResults);
  }
};
