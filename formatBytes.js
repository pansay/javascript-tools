//
//    we want to show in e.g. MB if there is at least 1 MB, that is, optimal so that
//        number/(1024^optimalExp) >= 1
//    mathematics->logarithms->
//        optimalExp = log(number) / log(1024);
//
const units = ['B','kB','MB','GB','TB','PB','EB','ZB','YB'];
const formatBytes = (number, decimals = 2) => {
  const optimalExp = Math.floor( Math.log(number) / Math.log(1024) );
  const availabeExp = optimalExp < units.length - 1 ? optimalExp : units.length - 1;
  number = number / (1024 ** availabeExp);
  number = number.toFixed(decimals) + units[availabeExp];
  return number;
};
