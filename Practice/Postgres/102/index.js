const {Pool} = require('pg');

const config = {
    host:'localhost',
    user:'postgres',
    password:'postgres',
    role:'postgres',
    database:'master',
    schema:'public',
    port: 5432,
    max : 20, 
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis:2000
};

const pool = new Pool(config);
pool.on('error', (err, client)=>{
    console.log(`ERROR creating new pool: ${error}`);
    process.exit(-1);
});

pool.connect((error, client, done ) => {
    if(error){
        console.log(`Error Connecting to pool ${error}`);
    } else{
        
        setTimeout(()=>{
            console.log('==== QUERY BEING EXECUTED');
            pool.query(`SELECT NOW()`, (error, response)=>{
                if(error){
                    console.error(error);
                } else{
                    console.log(`QUERY RESPONSE = > \n \n ${JSON.stringify(response)} \n`);
                }
                pool.end();
                done();
                process.exit(1);
            });
        }, 2000);

    }
});