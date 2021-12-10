let fs = require("fs")
let express = require("express");
let app = express();
const PORT = 8080;
let path = require("path");

app.use(express.urlencoded());
app.use(express.json());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./routes/index')(app);

app.listen(PORT, () => {
  console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
});

