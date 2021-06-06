const mongoose = require("mongoose");

const db = "jokesDB"
mongoose.connect("mongodb://localhost/" + db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));