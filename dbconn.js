const { Client } = require('@prismicio/client');
const { Pool }   = require('pg');

// Prismic Client Configuration
const prismicClient = new Client();

// PostgreSQL Client Configuration
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "root",
  database: "postgres"
});

// Connect to PostgreSQL
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  
  // Query PostgreSQL
  client.query('SELECT * FROM users', (err, result) => {
    release(); // release the client to the pool

    if (err) {
      return console.error('Error executing query', err.stack);
    }
    
    console.log(result.rows);
  });
});
