const express = require("express")

const scraper = require("./scraper")

const app = express();

app.get("/", (req,res) => {
	scraper.getDataJ().then(numGames =>{
		res.json(numGames);
	})
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log("Listening on ${port}")
})
