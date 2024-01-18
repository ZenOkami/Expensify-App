const isHex = (str) => str.match(/^.{3}$|^.{6}$/) ? true : false;

console.log(isHex('isHex'));

console.log(isHex('ff00ff'));

console.log(isHex('f0f'));