const s = "2[b3[a]]";


function decodeString(s) {
  let arr = [];
  let str = '';

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      arr.push(s[i]);
    }else {
      let temp = '';
      while (arr[arr.length - 1] !== '[') {
        temp = arr.pop() + temp;
      }

      arr.pop();
      let count = 0;
      if (arr.length > 0 && arr[arr.length - 1].match(/[0-9]+/)) {
        count = parseInt(arr.pop());
      }

      str = temp.repeat(count);
      arr.push(str);
    }
  }

  console.log(str);
  return str;
}

decodeString(s)
