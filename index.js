global.fetch = require('node-fetch'); // CC need this module
// import indicators and exchange
const indicators = require("./indicators");
const exchange = require("./exchange");

var hasPosition = false;

function strategy() {
  // if BTC price < 100 h MA => buy
  // if BTC price > 100 h MA => sell
  console.log("");
  console.log("=======================");
  console.log("Execute Strategy");
  // 1. first look at indicators
  indicators.hourlyMovingAverage("BTC","USD", 100, function(ma) {
    // 2. get BTC price
    exchange.bitcoinPrice()
    .then(tickerRes => {
      btcPrice = tickerRes.last;
      console.log("MA: " + ma);
      console.log("BTC price: " + btcPrice);
      // 3. compare prise and set order
      if(btcPrice < ma && ! hasPosition){
        //buy
        exchange.marketBuyBitcoin()
        .then(res => {
          console.log("Buy successfully");
          hasPosition = true;
          setTimeout(strategy, 1000);
        })
        .catch(console.error);
      } else if (btcPrice > ma && hasPosition) {
        //sell
        exchange.marketSellBitcoin()
        .then(res => {
          console.log("Sell successfully");
          hasPosition = false;
          setTimeout(strategy, 1000);
        })
        .catch(console.error);
      }else {
        console.log("HODL");
        setTimeout(strategy, 1000);
      }

    })
    .catch(console.error);
  });

}


strategy();
