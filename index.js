import express from 'express'; //import the library express
import bodyParser from 'body-parser'; // import body parser 

import usersRoutes from './routes/users.js'; // UserRoutes it´s a arbitrary name to import and use user.js file

const app = express(); // app is a variable that call express method
const PORT = 5000; // definition of the port 

app.use(bodyParser.json()); // app call the use method to call body parser and json method

app.use('/users', usersRoutes); // definition of the path and method

app.get('/', (req, res) => {res.send('Hello from Home page.')}); // first route 


app.listen(PORT, () => console.log(`Srever Running on port: http://localhost:${PORT}`)) // listen method to app on port previusly defined

