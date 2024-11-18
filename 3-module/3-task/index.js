function camelize(str) {
  let newStr;
  if (str[0] === '-') {
    return str.slice(1).split('-').map(item => item[0].toUpperCase() + item.slice(1)).join('');
  } else if (str.length === 0) {
    return str;
  }
  newStr = str.split('-').map(item => item[0].toUpperCase() + item.slice(1)).join('');
  return newStr.charAt(0).toLowerCase() + newStr.slice(1);
}
