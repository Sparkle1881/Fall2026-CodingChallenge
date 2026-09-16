const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors({origin:'http://localhost:5173'}));

app.get('/api', (req,res) => {

    res.json({message: "This is a test"});
});

const port = 5001;
app.listen(port, () => {
    console.log("Listening on port " + port);
});