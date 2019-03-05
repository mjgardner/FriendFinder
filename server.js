var express = require("express"),
  app = express();
var path = require("path");
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, "app", "routing", "htmlRoutes"))(app);
require(path.join(__dirname, "app", "routing", "apiRoutes"))(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
