const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const Calculator = require('./modules/calcmod');
const allCalculations = new Calculator();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/calculations', (req, res) => {
 res.send(allCalculations.history); 
});

app.post('/addToHistory', (req, res) => {
    allCalculations.x = req.body.x;
    allCalculations.y = req.body.y;
    allCalculations.type = req.body.type;
    console.log(allCalculations);
    allCalculations.compute();
    console.log(allCalculations);
    res.sendStatus(200);
});


app.get('/clear-all', (req, res) => {
    allCalculations.history = [];
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log('listening on 5000');
    });

   