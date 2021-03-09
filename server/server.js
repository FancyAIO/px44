let express = require('express');

let app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("test");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
