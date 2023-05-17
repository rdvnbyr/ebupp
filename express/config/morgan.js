const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

module.exports = (app) => {
  const accessLogStream = fs.createWriteStream(path.join(__dirname, "..",  'logs', 'application.log'), {
    flags: 'a',
  });

  app.use(morgan('combined', { stream: accessLogStream }));
};
