// Задание для типа объекта
interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: "Hi",
    size: {
        width: 20,
        height: 30
    },
    color: "#ccc"
}

const rect2: Rect = {
    id: "Hello",
    size: {
        width: 200,
        height: 10
    }
}
rect2.color = "black"


// Приведение объекта к определенному типу
const rect3 = {} as Rect



// ---------------------
// Наследование интерфейсов
interface RectWithArea extends Rect {
    getArea: () => number
}
const rect5: RectWithArea = {
    id: "Square",
    size: {
        width: 50,
        height: 50
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}



//----------------
// Задане типа данных для всего объекта
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px"
}