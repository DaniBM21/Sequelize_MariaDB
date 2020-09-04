const express  = require('express');

const db = require('./sequelize.config');

// force: true -> will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
});

// Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middleware
app.use(express.json());

// Routes
app.use(require('./routes/index'));

// Starting to server
app.listen(app.get('port'), () => {
    console.log('Server on port: ' + app.get('port'));
});