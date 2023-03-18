let value = process.argv.slice(2);

const odev1 = (r) => {
  console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI * r * r}.`);
};

odev1(value);
