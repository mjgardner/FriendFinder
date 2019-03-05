var path = require("path");
var fs = require("fs");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "data", "friends.js"));
  });

  app.post("/api/friends", function(req, res) {
    fs.readFile(
      path.join(__dirname, "..", "data", "friends.js"),
      { encoding: "utf8" },
      function(err, data) {
        if (err) res.sendStatus(500);

        var friends = JSON.parse(data);
        if (!Array.isArray(friends)) res.sendStatus(500);
        friends.push(req.body);
        fs.writeFile(
          path.join(__dirname, "..", "data", "friends.js"),
          JSON.stringify(friends),
          function(err) {
            if (err) res.sendStatus(500);

            // TODO: compatibility logic
          }
        );
      }
    );
  });
};
