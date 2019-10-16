const dbPool = require('./dbPool');



for ( let i = 0 ; i<10; i++){
    console.log('===================\n' + i);
    let pool =  dbPool.getPool();
    pool.connect();
    console.log(pool.totalCount);
}
dbPool.closeConnection();

