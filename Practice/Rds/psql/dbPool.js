const { Pool, Client } = require('pg')

class DbPool{
    constructor(){
        if(!this.instance){
            this.instace = new Pool({
                host: 'localhost',
                user: 'postgres',
                password: 'postgres',
                database: 'drvr2813',
                port: 5432,
                max: 100,
                idleTimeoutMillis: 30000,
                connectionTimeoutMillis: 2000,
              });
        }
        else console.log('sorry cant issue new instance')
    }
    getPool(){
        return this.instace;
    }
    closeConnection(){
        this.instace.end().then(() => console.log('pool has ended'))
    }
}

module.exports = new DbPool();