class ISubject{
    register(observer){}
    remove(observer){}
    notify(){}
}

// class Subject extends ISubject{
//     constructor(description) {
//         super();
//         this.description = description;
//     }
//     register(observer) {
//         super.register(observer);
//     }
//     remove(observer) {
//         super.remove(observer);
//     }
//     notify() {
//         super.notify();
//     }
// }

module.exports = ISubject;