import mysql from 'mysql2'; 
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

async function getNotes() {
    const [rows] = await pool.query('SELECT * FROM notes');
    return rows;
}

async function getNote(id) {
    const [rows] = await pool.query('SELECT * FROM notes WHERE id = ?', [id]);
    return rows[0];
}

async function createNote(title, content) {
    const [result] = await pool.query(
        'INSERT INTO notes (title, contents) VALUES (?, ?)', 
        [title, content]
    );
    return result.insertId; // Correct way to get inserted ID
}

// Exporting functions
export { getNotes, getNote, createNote };

// Uncomment this if you want to test `createNote`, but do it inside an async function
// async function test() {
//     const result = await createNote('Note ', 'Content of Note 1');
//     console.log(result);
// }
// test();
