"use strict";

var _server = _interopRequireDefault(require("./server.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_server["default"].listen(_server["default"].get('port'), function () {
  console.log('Server on port ', _server["default"].get('port'));
});