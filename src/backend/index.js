//run by: node index.js
//stop by ctrl c

const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors({origin:'http://localhost:5173'}));

//basic GET
app.get('/api', (req,res) => {
    res.json({message: "Welcome to the api"});
});

app.get('/api/photos/:search', (req,res) => {
    const search = req.params.search;

    res.json({message: search});
});


const port = 5001;
app.listen(port, () => {
    console.log("Listening on port " + port);
});