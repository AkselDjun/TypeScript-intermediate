const arrayOfNumbers: Array<number> = [1, 2, 54, 3, 7, 3]
const arrayOfStrings: Array<string> = ["ts", "html", "js", "css"]


function reverse<T>(array: T[]): T[] {
    return array.reverse()
}
reverse(arrayOfNumbers)
reverse(arrayOfStrings)