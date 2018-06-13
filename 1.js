const sortByStrings = (s, t) => {
  let arrS = s.split('');
  let arrT = t.split('');
  let arrSorted = [];
  let leftovers = [];

  for (var i = 0; i < arrT.length; i++) {
    for (var j = 0; j < arrS.length; j++) {
      if (arrT[i] === arrS[j]) {
        arrSorted.push(arrT[i]);
      }
    }
  }

  return arrSorted;
};

sortByStrings(s, t);
