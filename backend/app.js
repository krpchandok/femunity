const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log();
    res.send("Hello, world!");  // Send response to the browser
});

app.post('/', (req, res) => {
    console.log(req.body); // Should log the data sent by the client
    res.send("Data posted");
});

app.listen(port, () => {
    console.log("Listening on port 3000");
});

