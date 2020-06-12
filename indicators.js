// import Keys
const CcKeys = require("./.keys");
// iport Croptocompare
const CryptoCompareAPI = require("cryptocompare");

//init cryptoCompare
CryptoCompareAPI.setApiKey(CcKeys.CcKey);

module.exports =
{

  /*
  * mobing Average
  * @fSym: From Symbol
  * @tSym: to Symbol
  * @hours: Hours to calculate MA
  * @callback: callback function to return MA value
  */
  hourlyMovingAverage:function (fSym, tSym, hours, callback) {

    if (hours > 168 || isNaN(hours)) {
      console.log("Only up to 169 hours allowed");
      return;
    }
    var movAvg = 0;

    CryptoCompareAPI.histoHour(fSym, tSym)
    .then(data => { // data contains 169 elements -> each one represents a hour //console.log(data.length); //console.log(data[0].time < data[168].time);
      // the first element is 169 hrs ago -> we want the the first element ist one hr ago
      data.reverse();  //console.log(data[0].time < data[168].time); //console.log(data[0]);

      // sum the close price fore the last 100 items an d then divide trought 100 to get 100 hr ma
      sum = 0;
      for (var i = 0; i < hours; i++) {
        sum += data[i].close;
      }
      movAvg = sum / hours;    // console.log("Moving Average: " + mA100Hr);
      callback(movAvg);

    })
    .catch(console.error)

  },

  dailyMovingAverage:function (fSym, tSym, days, callback) {

    if (days > 31 || isNaN(days)) {
      console.log("Only up to 31 days allowed");
      return;
    }
    var movAvg = 0;

    CryptoCompareAPI.histoDay(fSym, tSym)
    .then(data => { // data contains 169 elements -> each one represents a hour //console.log(data.length); //console.log(data[0].time < data[168].time);
      // the first element is 169 hrs ago -> we want the the first element ist one hr ago
      data.reverse();  //console.log(data[0].time < data[168].time); //console.log(data[0]);
      // sum the close price fore the last 100 items an d then divide trought 100 to get 100 hr ma
      sum = 0;
      for (var i = 0; i < days; i++) {
        sum += data[i].close;
      }
      movAvg = sum / days;    // console.log("Moving Average: " + mA100Hr);
      callback(movAvg);

    })
    .catch(console.error)

  },

  minutelyMovingAverage:function (fSym, tSym, minutes, callback) {

    if (minutes > 1441 || isNaN(minutes)) {
      console.log("Only up to 1441 minutes allowed");
      return;
    }
    var movAvg = 0;

    CryptoCompareAPI.histoMinute(fSym, tSym)
    .then(data => { // data contains 169 elements -> each one represents a hour //console.log(data.length); //console.log(data[0].time < data[168].time);
      // the first element is 169 hrs ago -> we want the the first element ist one hr ago
      data.reverse();  //console.log(data[0].time < data[168].time); //console.log(data[0]);
      // sum the close price fore the last 100 items an d then divide trought 100 to get 100 hr ma
      console.log(data.length);
      sum = 0;
      for (var i = 0; i < minutes; i++) {
        sum += data[i].close;
      }
      movAvg = sum / minutes;    // console.log("Moving Average: " + mA100Hr);
      callback(movAvg);

    })
    .catch(console.error)

  },


  // some CryptoCompare examples https://www.npmjs.com/package/cryptocompare
    getBTCPrice: () => {
      // BTC Price
      CryptoCompareAPI.price('BTC', ['USD', 'EUR'])
      .then(prices => {
        console.log(prices)
        // -> { USD: 1100.24, EUR: 1039.63 }
      })
      .catch(console.error)
    },

    getHistorycalPriceOfBTC: (date) => { // e.g. '2017-01-01'
    // price of BTC on a special date
    CryptoCompareAPI.priceHistorical('BTC', ['USD', 'EUR'], new Date(date))
    .then(prices => {
      console.log(prices)
      // -> { BTC: { USD: 997, EUR: 948.17 } }
    })
    .catch(console.error)
  }

}
