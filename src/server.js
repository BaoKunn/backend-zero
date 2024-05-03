const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 8080;

//config template engine
configViewEngine(app);

app.use('/', webRouter);
app.use('/v1/api/', apiRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})