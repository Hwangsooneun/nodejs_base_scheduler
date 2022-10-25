const toCamelCase = (str) => {
  if (str.includes('_')) {
    return str.replace(/_./g, (match) => {
      return match[1].toUpperCase();
    });
  } else {
    return str;
  }
};

module.exports = { toCamelCase }
