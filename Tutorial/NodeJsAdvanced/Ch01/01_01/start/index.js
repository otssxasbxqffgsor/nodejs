function hideString(str) {
    return str.replace(/[a-z]|[A-Z]|[0-9]/g, 'X');
}
var hidden = hideString('Hello World');
console.log(hidden);