const { Client , Pool } =  require('pg');
/* POOL EXAMPLE */
poolExample = () =>{
    const pool = new Pool({
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      role:'postgres',
      database: 'master',
      schema: 'public',
      port: '5432',
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
    pool.query('SELECT NOW()', (err, res)=>{
        if(err){
            console.error(err);
        } else {
            console.log(res);
        }
        pool.end();
    });
}

  setTimeout(() => {
    console.log('====== POOL  START=====') ;
    poolExample();
    console.log('====== POOL END =====') ;
  }, 1000);



/* CLIENT EXAMPLE */
  clientExample = () =>{
    const client = new Client({
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      role:'postgres',
      database: 'master',
      schema: 'public',
      port: '5432',
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
    client.connect();
    client.query('SELECT NOW()', (err, res)=>{
        if(err){
            console.error(err);
        } else {
            console.log(res);
        }
        client.end();
    });
}

  setTimeout(() => {
    console.log('====== Client  START=====') ;
    clientExample();
    console.log('====== Client END =====') ;
  }, 2000);
