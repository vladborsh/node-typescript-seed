"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        router.get('/', function (req, res) {
            res.json({
                message: 'Hello World!'
            });
        });
        this.app.use('/', router);
    };
    return App;
}());
exports["default"] = new App().app;
