const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const dbURI = process.env.URI
const notFoundHandler = require('./middlewares/404');
const errorHandler = require('./middlewares/500');
const Protected = require('./middlewares/Protected');

const app = express();
app.use(cors());
app.use(express.json());


// app.get('/', (req,res) => {
//     res.send("Welcome");
// });

app.use('*', notFoundHandler);
app.use(errorHandler);
app.use(Protected);



module.exports = {
    /// ASK ABOUT IT
    server: app,
    start: () => { 
        mongoose
        .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> {
            app.listen(PORT, () => {
                console.log(`listening on ${PORT}`);
            });
        });
    },
};