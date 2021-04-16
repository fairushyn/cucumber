# cucumber test tool

> https://regexr.com/
##### for making expressions
### script to run tests: 
> ./node_modules/.bin/wdio ./wdio.conf.js

### in case you want to test specific feature: 
> ./node_modules/.bin/wdio ./wdio.conf.js --spec ./features/Navigation/MenuNavigation.feature 

### Steps to write automation test 
1. Create Login.feature
2. Create Login.js
3. Steps as for Login page <code>|Login</code>
``` 
Given(/^the browser is at the "(Home|Login)" page$/, page => {
    goToPage(page);
});
 ```
a.Then add in <code>goToPage(page);</code> 
```
case "Login":
browser.url(login.url);
break;
```
4. Create Login steps
   - given.js
   - then.js
   - when.js
    

5. Create <code>actions/signIn.js</code> action in support/actions
6. Create credentials.js in previously created data folder.
7. Create .env file 
8. install dotenv by <code>npm i dotenv</code> command
9. add <code>require("dotenv").config();</code> to wdio.conf.js
