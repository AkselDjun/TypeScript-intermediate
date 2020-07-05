var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: TypeScript version is " + this.version;
    };
    return Typescript;
}());
// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
