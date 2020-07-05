var rect1 = {
    id: "Hi",
    size: {
        width: 20,
        height: 30
    },
    color: "#ccc"
};
var rect2 = {
    id: "Hello",
    size: {
        width: 200,
        height: 10
    }
};
rect2.color = "black";
// Приведение объекта к определенному типу
var rect3 = {};
var rect5 = {
    id: "Square",
    size: {
        width: 50,
        height: 50
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var css = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px"
};
