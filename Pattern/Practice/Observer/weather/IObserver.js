class IObserver{
    update(){}
    display(){}
}

// class Observer extends IObserver{
//     constructor(description){
//         super();
//         this.description = description;
//     }
//     update() {
//         super.update();
//     }
//     display() {
//         super.display();
//     }
// }
module.exports = IObserver;