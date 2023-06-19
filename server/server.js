const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const userRouts = require('./routes/userRouter');
const aboutUsRouts = require('./routes/aboutUsRouter');
const paymentRouts = require('./routes/paymentRouter');
const BlogRouts = require('./routes/blogRouter');

const beneficiaryRouter = require('./routes/beneficiaryRouter');
const dbURI ="mongodb+srv://majdishomali1997:uVxsL6cXyv6CIZv8@cluster0.pacgw6a.mongodb.net/charity"
const notFoundHandler = require('./middlewares/404');
const errorHandler = require('./middlewares/500');
const Protected = require('./middlewares/Protected');

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));


// app.get('/', (req,res) => {
//     res.send("Welcome");
// });

app.use(userRouts);
app.use(beneficiaryRouter);
app.use(aboutUsRouts);
app.use(paymentRouts);
app.use(BlogRouts);
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