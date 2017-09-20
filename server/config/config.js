//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there


module.exports = {
  db: {
    uri: 'mongodb://yilu0331:yilu1234@ds036967.mlab.com:36967/cen3031'//place the URI of your mongo database here.
  },
  googleMaps: {
    key: ''
  },
  port: 8080
};