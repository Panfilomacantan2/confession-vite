const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/product', (req, res) => {
  res.status(200).send('Hello World')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }
);
console.log(123)