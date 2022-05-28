const express = require('express');
const app = express();
const cors = require('cors');
const {DBconnect} = require('./config/db');
const {Port} = require('./config/index');
const HttpError = require('./utils/error');

const userRoutes = require('./routes/routes');

app.use(express.json());
app.use(cors());
app.use(userRoutes);

app.use((err, req, res, next) => {
    if(req.headerSent) {
        throw new HttpError(err);
    }
    res.status(err.code || 500);
    res.json({message: err.message});
});

try {
    DBconnect().then(() => {
        app.listen(Port, () => {
            console.log(`Database connected on ${Port}`);
        });
    })
} catch (err) {
    console.log(err);
};