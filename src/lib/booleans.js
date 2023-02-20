function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

// eslint-disable-next-line consistent-return
function none(a, b) {
  if (a || b) {
    return false;
  }
  if (!a || !b) {
    return true;
  }
}

function one(a, b) {
  return (a && !b) || (!a && b);
}

function truthiness(a) {
  if (a) {
    return true;
  }
  return false;
}

//   if (a) {
//     return true;
//   }
//   if (!a) {
//     return false;
//   }
// }

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  if (a % 2) {
    return true;
  }
  return false;
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
}

function startsWith(char, string) {
  if (char === string[0]) {
    return true;
  }
  return false;
}

function containsVowels(string) {
  if (string.match(/[aeiou]/gi)) {
    return true;
  }
  return false;
}

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
