const { Pool } = require('pg');


const pool = new Pool({
    user: 'postgres',                  
    host: 'localhost',
    database: 'mahasiswa',
    password: 'Magelang2005', 
    max: 10,
    idleTimeoutMillis: 30000,
});

pool.on('connect', () => {
    console.log('Connection Pool ke PostgreSQL berhasil anjay.');
});

module.exports = pool;