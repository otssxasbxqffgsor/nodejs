var { Pool } = require('pg');
const { promisify } = require('util');


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

let pool = new Pool(config);

// console.log(pool);
pool.connect()
.then(client => {
    client.query('SELECT NOW()')
    .then(res => {
        client.release();
        console.log('==========================================================================')
        console.log(`LOCAL TIME IS :${res.rows[0].now}`)
        console.log('==========================================================================\n')
      })
})
.catch((err)=>{
    console.log('==========================================================================')
    client.release()
    console.error('query error', err.message, err.stack)
    console.log('==========================================================================')
})
.finally(()=>{
    console.log('==========================================================================')
    console.log('END OF POOL');
    console.log('========================================================================== \n')
    pool.end()
});

/* Pool is already implementing Promise Interface */
/*
var pool = new Pool()
pool.connect().then(client => {
  client.query('select $1::text as name', ['pg-pool']).then(res => {
    client.release()
    console.log('hello from', res.rows[0].name)
  })
  .catch(e => {
    client.release()
    console.error('query error', e.message, e.stack)
  })
})

*/









// pool.connect()
// .then((response, error)=>{
//     if(error){
//         console.error(error);
//     }else {
//     // console.log(response);
    
//     client.query('SELECT NOW()')
//       .then((res,err)=>{
//            console.log(res);
//         })
//       .catch((err)=> {
//           console.log(err);
//           process.exit(-1);
//       }).finally(()=> pool.end());

// }})
// .catch((error)=>{
//      if (error){ 
//          console.error(error);
//          console.log ("=== ERROR ===");
//          process.exit(-1);
//     }})
// .finally(()=>{
//     console.log("== DONE ==")
//     pool.end();
// });