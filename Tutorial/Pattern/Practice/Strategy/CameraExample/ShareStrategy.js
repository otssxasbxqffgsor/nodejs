var IShareStrategy = require('./IShareStrategy');
class ShareStrategy extends IShareStrategy{
    constructor(description){
        super();
        this.description = description || 'Share Strategy';
    }
    // Abstract Method to be implemented in the driven class
    share(){}
}

module.exports = ShareStrategy;