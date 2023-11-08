"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    console.log("this is app");
    var x = 3;
    function onClickButton() {
        console.log("user clicked " + x + " times");
        x++;
        console.log(x);
        setCounter(counter + 1);
    }
    var date = new Date();
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("h1", null, "Example"),
        react_1["default"].createElement("p", null, "this is paragraph"),
        react_1["default"].createElement("p", null,
            "x:",
            x),
        react_1["default"].createElement("p", null,
            "counter: ",
            counter),
        react_1["default"].createElement("button", { onClick: onClickButton }, "Test"),
        react_1["default"].createElement("h2", null,
            "It is now: ",
            date.toLocaleTimeString())));
}
exports["default"] = App;
