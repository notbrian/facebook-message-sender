var login = require("facebook-chat-api");

var multiple = ["notbriann", "omarqureshi786"];
// Put your targets messenger names in here. Format: ["notbriann", "omarqureshi786", "jevinsidhu3", "ani.srikanth"]


login({email: "Email Here", password: "Password Here"}, function callback (err, api) {
  // Email and Pass Here^
    if(err) return console.error(err);

  
  multiple.forEach(function(currentValue) {
    
    if (isNaN(currentValue)) {
      api.getUserID(currentValue, function(err, data) {
      var userID = data[0].userID;
      api.getUserInfo(userID, function(err, obj) {
        var firstName = obj[userID].firstName;
        
        if (obj[userID].gender == 1) {  // Female = 1
          var msg = {
            body: "Hey" + " " + firstName + "!" + " " + "You should check out Campfire '16: https://www.facebook.com/events/115350342236759/ :)"
            // Customize the message that is sent to girls here^
          };
          api.sendMessage(msg, userID);
        }
        else {
          var msg = {
            body: "Yooo" + " " + firstName + "!" + " " + "Reach Campfire '16: https://www.facebook.com/events/115350342236759/",
            // Customize the message that is sent to guys here^
            // Remember to do the same thing below!
          };
          api.sendMessage(msg, userID);
        }
      });
    })}
    
    
    else {
      api.getUserInfo(currentValue, function(err, obj) {
        var userID = currentValue;
        var firstName = obj[userID].firstName;
        if (obj[userID].gender == 1) {  // Female = 1
          var msg = {
            body: "Hey" + " " + firstName + "!" + " " + "You should check out Campfire '16: https://www.facebook.com/events/115350342236759/ :)"
            // Customize the message that is sent to girls here^
          };
          api.sendMessage(msg, userID);
        }
        else {
          var msg = {
            body: "Yooo" + " " + firstName + "!" + " " + "Reach Campfire '16: https://www.facebook.com/events/115350342236759/",
            // Customize the message that is sent to guys here^
          };
          api.sendMessage(msg, userID);
        }
      });
    }
});
});