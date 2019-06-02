const fetch = require("node-fetch"); //be able to  pull from the website
const cheerio = require("cheerio");

const url = "https://www.jeopardy.com/contestant-zone/james-holzhauer-tracker"; // load in the website


function getDataJ() {
  
return fetch(url)
.then(response => response.text())
.then(body => {
  const $ = cheerio.load(body);

  var numGames = $(".field--name-field-games-won .field__item").text();
  var totalMoney = $(".field--name-field-total-money-earned .field__item").text();
  var currentDate = $(".field--name-field-as-of .field__item").text();

  const jamesData = {
  	numGames,
  	totalMoney,
  	currentDate
  }
  return jamesData;
});



// const gamesWon = db.collection("James Info").doc();
// gamesWon.set(jamesData);


}
getDataJ()
module.exports = {
  getDataJ
}
