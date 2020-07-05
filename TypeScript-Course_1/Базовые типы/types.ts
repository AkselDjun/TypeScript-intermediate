// Булиновый тип данных
const isFetching: boolean = true
const isLoading: boolean = false


// Числовой тип данных
const int: number = 42
const float: number = 4.2
const num: number = 3e10


// Строковый тип данных
const message: string = "Hello TypeScript!"


// Указывание типа днных для массива
const numberArray: number[] = [1, 1, 4, 5, 8, 3, 9]
const numberArray2: Array<number> = [1, 1, 4, 5, 8, 3, 9]

const words: string[] = ["Hello", "Hi"]


// Тип данных Tuple(кортеж)
const contact: [string, number] = ["Alexei", 3543536]


// Тип данных Any()
let variable: any = 42
// ...
variable = "new string"
variable = []
