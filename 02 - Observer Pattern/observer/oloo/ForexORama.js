const axios = require('axios');

const ForexORama = {

  init(forexData) {
    this.forexData = forexData;
    this.USDtoJPY = 0;

    setInterval(
      this.getDataFromAPI.bind(this),
      15000
    )
  },

  async getDataFromAPI() {
    try {
      // free api key only gives 5 requests per minute max
      const response = await axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=N3AT6ETKF5AFZYB9');
      this.USDtoJPY = response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
      this.forexData.exchangeRateChanged();
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  display() {
    console.log(`USD to JPY exchange rate: ${this.USDtoJPY}`);
  },

  getUSDtoJPYExchangeRate() {
    return this.USDtoJPY;
  },

}

module.exports = ForexORama;
