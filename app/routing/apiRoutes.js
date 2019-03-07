var path = require("path");
var fs = require("fs");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "data", "friends.js"));
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    newFriend.scores = newFriend.scores.map(function(value) {return parseInt(value)});
    fs.readFile(
      path.join(__dirname, "..", "data", "friends.js"),
      { encoding: "utf8" },
      function(err, data) {
        if (err) res.sendStatus(500);

        var friends = JSON.parse(data);
        if (!Array.isArray(friends)) res.sendStatus(500);

        // starting value is one higher than the highest possible difference
        var leastTotalDifference = (5 - 1) * newFriend.scores.length + 1;
        var closestFriend = { name: "", photo: "" };
        friends.forEach(function(friend) {
          var differences = [];
          for (var i = 0; i < newFriend.scores.length; i++) {
            differences.push(Math.abs(friend.scores[i] - newFriend.scores[i]));
          }
          var totalDifference = differences.reduce(function(
            previousValue,
            currentValue
          ) {
            return previousValue + currentValue;
          });
          if (totalDifference < leastTotalDifference) {
            leastTotalDifference = totalDifference;
            closestFriend = friend;
          }
        });
        res.json({ name: closestFriend.name, photo: closestFriend.photo });

        friends.push(newFriend);
        fs.writeFile(
          path.join(__dirname, "..", "data", "friends.js"),
          JSON.stringify(friends),
          function(err) {
            if (err) res.sendStatus(500);
          }
        );
      }
    );
  });
};
