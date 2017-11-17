const path = require('path');
const express = require('express');

let app = express();
let port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');


app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is started at port ${port}`);
});

