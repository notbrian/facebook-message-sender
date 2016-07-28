## Setup

Step 1. Clone this repository in your Cloud9

Step 2. Type the command below into your Cloud9 workspace terminal
```bash
npm install facebook-chat-api
```

Step 3. Add your facebook email and password to the login line
```js
login({
  email: "Email Here",
  password: "Password Here"
```

Step 4. Save your file
##Usage
Step 1. Find the messenger name of who you want to message by going to their profile.

E.g My messenger name is notbriann, my profile URL is https://www.facebook.com/notbriann

The messenger name is always first and before the ? in the url 

https://www.facebook.com/omarqureshi786?fref=hovercard 
The messenger name for this is omarqureshi786

Step 2. Add it to the `multiple` variable found at the top of the javascript file
```js
var multiple = ["Name1", "Name2", "Name3", etc];
```

Step 3. Save your file

Step 4. Click run at the top of your workspace and hope no errors show up!

Note: The first time you run it, it will not work. Simply go to www.facebook.com to approve the login request.

##Customizing Messages

To customize messages sent to people of different genders, edit the `body` fields in the code
```js
body: "Yooo" + " " + firstName + "!" + " " + "Reach Campfire '16: https://www.facebook.com/events/115350342236759/"
```
