//
//    we want to show in e.g. M if there is at least 1 M, that is, optimal so that
//        number/(1000^optimalExp) >= 1
//    mathematics->logarithms->
//        optimalExp = log(number) / log(1000);
//
const units = ['','k','M','G','T','P','E','Z','Y'];
const formatNumber = (number, decimals = 2) => {
  const optimalExp = Math.floor( Math.log(number) / Math.log(1000) );
  number = number / (1000 ** optimalExp);
  number = number.toFixed(decimals) + units[optimalExp];
  return number;
};