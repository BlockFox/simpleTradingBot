# Simple Trading Bot
This is a simple example of a trading bot programmed in js.
As trading platform gemeni sandbox is used. You can find the api documentation on "https://docs.gemini.com/rest-api/"
For price ticker and inidcators "CryptoCompare" is used ("https://min-api.cryptocompare.com/").

## Acknowledgement
Many thanks to Ivan and Filip for the great course "Ethereum Game Programming" in your academy on "https://academy.ivanontech.com/"

## Requirements
1. Install node.js

2. Install yarn package manager
    ```
    npm install yarn -g
    ```

3. Install node.js modules
  - Gemeni API "https://github.com/mjesuele/gemini-api-node":
    ```
    yarn add gemini-api
    ```
  - CryptoCompare API "https://github.com/exodusmovement/cryptocompare"
    ```
    yarn add cryptocompare

    yarn add node-fetch
    ```

### Create API Key
You habe to sign up on Gemeni and Crypto Compare and create API Keys. echange.js and indicators.js access constants in .keys.js to retrieve the keys. So I have stored the API keys in the .keys.js. As an example see in example.keys.js

## How to Use
1. Open the Power Shell or another terminal in the project folder

2. Run index.js with node.js
    ```
    node .\index.js
    ```
