var MallarDock = require('./MallarDock');
var ModelDock = require('./ModelDock');
const mallerDock = new MallarDock('mallerDock');
mallerDock.performQuack();
mallerDock.performFly();
mallerDock.display();

const model = new ModelDock('ModelDock');
model.performFly();
model.performQuack();
model.display();