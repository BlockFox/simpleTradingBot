// import Keys
const GemKeys = require("./.keys");
//set secret and key
const secret = GemKeys.GemSec;
const key = GemKeys.GemKey;

// import Gemeni api -> is the same as the package name in node_module
const GemeniAPI = require("gemini-api").default;
//initialize the REST Client (GemeniAPI is a Class -> so we have to create a new instance)
const restClient = new GemeniAPI({key, secret, sandbox:true});

module.exports = {

  //buy btc at market price
  marketBuyBitcoin: () => {
    return restClient.newOrder({ // send the request to gemeni
      amount:1,
      price:50000,
      side:"buy",
      symbol:"BTCUSD",
      options:["immediate-or-cancel"]
    });
  },

  //sell btc at market price
  marketSellBitcoin: () => {
    return restClient.newOrder({ // send the request to gemeni
      amount:1,
      price:1,
      side:"sell",
      symbol:"BTCUSD",
      options:["immediate-or-cancel"]
    });
  },

  bitcoinPrice: () => {
    return restClient.getTicker("BTCUSD");
  }

}

/* ++++++++++++++++++++++ some tests ++++++++++++++++++++++++++++++++++++++*/

/*
// get Balances
restClient.getMyAvailableBalances()
.then(res=> {
  console.log("Balances:");
  console.log(res);
  console.log("");
})
.catch(
  error => console.error(error)
);


//execute Orders
var order1 = restClient.newOrder({ // send the request to gemeni
  amount:10,
  price:100,
  side:"buy",
  symbol:"BTCUSD"
})
.catch(
  error => console.error(error)
);

var order2 = restClient.newOrder({
  amount:10,
  price:10,
  side:"buy",
  symbol:"ETHUSD"
})
.catch(
  error => console.error(error)
);

var order3 =   restClient.newOrder({
  amount:10,
  price:10,
  side:"buy",
  symbol:"LTCUSD"
})
.catch(
  error => console.error(error)
);

Promise.all([order1, order2, order3]).then(
  values => {
    console.log("Orders");
    console.log(values);
    console.log("");
    restClient.getMyActiveOrders()
    .then(
      response => {
        console.log("Active Orders ");
        console.log(response);
        console.log("");
        restClient.cancelAllActiveOrders()
    .then(
      response => {
        console.log("cancel Orders ");
        console.log(response);
        console.log("");
        restClient.getMyActiveOrders()
      .then(
        response => {
          console.log("active Orders ");
          console.log(response);
          console.log("");
        })
      })
    })
  })
.catch(
  error => console.error(error)
);

*/
