const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Errorr");
  }
});

// Configurações do banco de dados
const pool = new Pool({
  user: "myuser",
  host: "db",
  database: "mydb",
  password: "mypassword",
  port: 5432,
});

// Rota GET para pegar dados da tabela users
app.get("/users", async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const { rows } = await pool.query(query);
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
