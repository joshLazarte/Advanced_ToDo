const express = require('express');
const app = express();



app.get('/', (req, res) => res.send('hello Dan'));

app.listen(process.env.PORT, () => console.log('server is running'));