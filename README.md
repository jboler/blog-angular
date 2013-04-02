# Blog App — a basic app I built to learn AngularJS

A simple blog with a that uses localStorage instead of a remote back end so I could focus on learning AngularJS client side.

---

The app was built using the Yeoman AngularJS generator - http://yeoman.io/

First you will need to install Node.js then `npm install -g yo grunt-cli bower`

Clone this repo then run `npm install && bower install` in the project directory to install the dependencies.

There is partial unit & e2e test coverage.

`grunt test` is configured to stay running and watch files for changes.

You can access the e2e tests on the test server at http://localhost:9001/e2e/runner.html

## Resources used to learn AngularJS

* http://docs.angularjs.org/tutorial - The official tutorial. It's helpful but they don't actually follow their own best practices
* http://egghead.io/ - Excellent screencasts
* http://stackoverflow.com/questions/14994391/how-do-i-think-in-angularjs-if-i-have-a-jquery-background - How do I think in AngularJS if I have a jQuery background?
* http://deansofer.com/posts/view/14/AngularJs-Tips-and-Tricks-UPDATED - Some useful tips
* https://github.com/angular/angular.js/wiki/JsFiddle-Examples - Huge list of angularJS examples
* http://jsbin.com/ohamub/1/edit - Great example of the differences
* http://addyosmani.com/resources/essentialjsdesignpatterns/book/ - Essential reading if you're less familiar with object oriented Javascript design patterns
* http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-testacular.html - A good intro to testing