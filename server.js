const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require('./server/config/mongoose.config')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const userRoutes = require('./server/routes/User.routes');
const ideasRoutes = require('./server/routes/Idea.routes');
userRoutes(app);
ideasRoutes(app);
app.listen(port, ()=> {
    console.log("The server listening on port " + port);
});