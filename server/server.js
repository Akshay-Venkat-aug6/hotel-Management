const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

require('./config/dbconfig');

const Credentialsrouter = require('./router/customerRouter/Credentialsrouter');
const Searchrouter = require('./router/searchRouter/Searchrouter');

const app = express();
const PORT = process.env.PORT ||  4000;

app.use(bodyparser.json());
app.use(cors())

// Custom Router
  // POST
  app.use(Credentialsrouter);
  // GET
  app.use(Searchrouter)

app.listen(PORT, ()=>{
  console.log(`Server Running on ${PORT}`)
})