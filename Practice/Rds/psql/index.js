const Pool = require('./dbPool');

const pool = Pool.getPool();


for (let i =0; i<10; i++){
  
  console.log(pool.totalCount );
  console.log('count \n');
// promise - checkout a client
if(pool.totalCount < 5){
    pool
      .connect()
      .then(client => {
        return client
          .query(' SELECT * FROM transportiq."BuildCounter"')
          .then(res => {
            console.log('count is ' + pool.totalCount );
            client.release()
            console.log(res.rows[0])
          })
          .catch(e => {
            console.log('count is ' + pool.totalCount );
            client.release()
            console.log(err.stack)
          })
      })
    }
  

    else {
      console.log('there are too many connections will terminate this request');
      pool
      .connect()
      .then(client => {
        return client
          // .query("SELECT pg_terminate_backend(pid)  FROM pg_stat_activity  WHERE datname = 'drvr2813'")
          .query("SELECT pg_terminate_backend(pid)  FROM pg_stat_activity  WHERE pid = (SELECT pg_backend_pid())")
          .then(res => {
            console.log('count is ' + pool.totalCount );
            client.release()
            console.log(res.rows[0])
          })
          .catch(e => {
            console.log('count is ' + pool.totalCount );
            // console.warn(e.stack)
            client.release()
          })
      })
    }
      console.log(pool.totalCount);
    
  }
  
  
  console.log(Pool.totalCount);
  Pool.closeConnection();