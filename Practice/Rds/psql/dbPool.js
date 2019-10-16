const { Pool, Client } = require('pg')

class DbPool{
    constructor(){
        if(!this.instance){
            this.instace = new Pool({
                user: 'postgres',
                host: 'localhost',
                database: 'drvr2813',
                password: 'postgres',
                port: 5432,
                max: 1000
                // idleTimeoutMillis: 30000,
                // connectionTimeoutMillis: 2000,
              });
        }
    }
    getPool(){
        return this.instace;
    }
    closeConnection(){
        this.instace.end().then(() => console.log('pool has ended'))
    }
}

module.exports = new DbPool();