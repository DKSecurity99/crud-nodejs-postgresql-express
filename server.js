const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/tutorial.routes.js')(server);

const db = require('./app/models/');

db.sequelize.sync({ force: true}).then(() => {
    console.log('Drop and re-sync db.');
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server on PORT ${PORT}`))

