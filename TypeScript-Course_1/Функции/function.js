// Указание типа данных для возвращаемого параметра
function sayMyName(name) {
    console.log(name);
}
sayMyName("Alex");
// Never тип данных(никогда не выполниться)
function throwError(message) {
    throw new Error(message);
}
