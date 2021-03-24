let express = require('express');
const { exec } = require("child_process");

let app = express();
const port = 5000;

app.use(express.static('../'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })


setInterval(pull, 5000);

function pull() {
  exec("cd ..; git pull", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    console.log(stdout);
});
}