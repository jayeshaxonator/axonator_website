// create express server  
const express = require('express');
const app = express();
const port = 3000;
//serve static files
app.use(express.static('public'));
//start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
