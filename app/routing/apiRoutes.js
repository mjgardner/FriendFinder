var path = require("path");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    // TODO: display a JSON of all possible friends
  });

  app.post("/api/friends", function(req, res) {
    // TODO: handle incoming survey results and compatibility logic
  });
};
