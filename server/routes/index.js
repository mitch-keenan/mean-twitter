const fs = require('fs');
const excluded = ['index'];

module.exports = function(app) {
  // Runs through files in the current directory and includes them
  //  as routes.
  fs.readdirSync(__dirname).forEach(file => {
    let basename = file.split('.')[0]; // strip extension
    let isDirectory = fs.lstatSync(__dirname + '/' + file).isDirectory();
    let isExcluded = excluded.some(x => x == basename);

    if (!isDirectory && !isExcluded) {
      app.use('/api/v1/' + basename, require('./' + file));
    }
  });

  // Catch unauthorised errors
  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
  });
};