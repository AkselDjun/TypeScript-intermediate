// Указание типа данных для возвращаемого параметра
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName("Alex") 


// Never тип данных(никогда не выполниться)
function throwError(message: string): never {
    throw new Error(message)
}