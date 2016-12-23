var log = require('./ruh-roh');


var emails = (function () {
  //private variable
  var emails = {};

  //public method
  function getEmails() {
    //loops through all the emails
    for (var i = 0; i < log.emails.length; i++){
      //checks to see if emails{} already has this property
      if (!emails.hasOwnProperty(log.emails[i].email)){
        // sets that email to 1
        emails[log.emails[i].email] = 1;
      } else {
        //if it already has the property, continues to add 1
        emails[log.emails[i].email] += 1;
      }
    }
      return emails;
  }
  return {
    getEmails: getEmails
  }

})();

console.log(emails.getEmails());