function Add(a) {
  let sum = a;

  function inner(b) {
    if (b === undefined) {
      return sum;
    }

    sum += b;
    return inner;
  }

  return inner;
}
