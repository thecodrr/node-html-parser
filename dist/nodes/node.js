"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("entities");
/**
 * Node Class as base class for TextNode and HTMLElement.
 */
var Node = /** @class */ (function () {
    function Node(parentNode, range) {
        if (parentNode === void 0) { parentNode = null; }
        this.parentNode = parentNode;
        this.childNodes = [];
        Object.defineProperty(this, 'range', {
            enumerable: false,
            writable: true,
            configurable: true,
            value: range !== null && range !== void 0 ? range : [-1, -1],
        });
    }
    Object.defineProperty(Node.prototype, "innerText", {
        get: function () {
            return this.rawText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "textContent", {
        get: function () {
            return (0, entities_1.decodeHTML5)(this.rawText);
        },
        set: function (val) {
            this.rawText = (0, entities_1.encodeHTML5)(val);
        },
        enumerable: false,
        configurable: true
    });
    return Node;
}());
exports.default = Node;
