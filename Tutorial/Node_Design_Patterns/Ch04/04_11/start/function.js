class ClassA{
    get hello(){
        console.log('hello from class A');
    }
    world(){
        return  "World from class A"
    }
}

var classA = new ClassA();
console.log(classA['hello']);
console.log(classA['world']());