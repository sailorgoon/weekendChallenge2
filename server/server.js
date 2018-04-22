const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const allCalculations = require('./modules/calcmod')
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/calculations', (req, res) => {
 res.send(allCalculations); 
});

app.post('/addCalc', (req, res) => {
    console.log(req.body);
    allCalculations.push(req.body);
        res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log('listening on 5000');
    });