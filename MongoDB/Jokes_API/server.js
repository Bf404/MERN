const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./server/config/mongoose.config");
require("./server/routes/jokes.routes")(app);

app.listen( 8000, () => {console.log('Server running on port 8000')})