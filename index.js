const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'aulaback',
    password: 'ds564',
    port: 5432,
    });

const app = express();
const PORT = 3000;

app.use(express.json(''));

app.get('/', (req, res) => {
    res.send('Hello World');
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

