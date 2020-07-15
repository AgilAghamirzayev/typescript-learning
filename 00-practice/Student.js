"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(_firstName, _lastName, _age) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
    }
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            this._firstName = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (v) {
            this._lastName = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (v) {
            this._age = v;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
