const express = require("express");

const app = express();

const port = 4500;

app.use(express.static(`${__dirname}/public`))

app.listen(port, () => {
  console.log(`Server is up and running on http://127.0.0.1:${port}`);
});
