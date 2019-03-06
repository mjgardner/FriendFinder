# FriendFinder

[FriendFinder](https://friendfinder-2.herokuapp.com/) is a simple application
that presents a survey of ten questions. Based on your answers, it then
selects a potential friend based on their responses to the same questions.
It demonstrates usage of the [Express](https://expressjs.com/) web framework,
as well as using AJAX techniques to submit form data as JSON to an API
endpoint.

Note that due to limitations with the [Heroku](https://heroku.com) platform,
the `friends.js` file used to save survey results will periodically be reset
to its initial values and new survey results will be lost. A future version
of this application might use an external database to store survey results.

## Libraries used

* [Express](https://expressjs.com/)
* [Bootstrap](https://getbootstrap.com/)
