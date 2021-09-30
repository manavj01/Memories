"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var CONNECTION_URL = "mongodb+srv://manavj0120:manavj0120@cluster0.uugto.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var PORT = process.env.PORT || 5000;

_mongoose["default"].connect(CONNECTION_URL).then(function () {
  return app.listen(PORT, function () {
    return console.log("Server Running on port: ".concat(PORT));
  });
})["catch"](function (error) {
  return console.log(error.message);
});

app.use(_express["default"].json({
  limit: "30mb",
  extended: true
}));
app.use(_express["default"].urlencoded({
  limit: "30mb",
  extended: true
}));
app.use((0, _cors["default"])());
app.get('/test', function (req, res) {
  res.json({
    hi: "there"
  });
}); // mongoose.set('useFindAndModify', false);