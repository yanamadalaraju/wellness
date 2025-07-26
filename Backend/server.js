const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",  // default for XAMPP
  database: "wellness", // create this in phpMyAdmin
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

// Register endpoint
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

  db.query(sql, [username, email, hashed], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User registered successfully" });
  });
});

// Login endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(401).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, results[0].password);
    if (!valid) return res.status(401).json({ message: "Incorrect password" });

    res.json({ message: "Login successful", user: results[0] });
  });
});

// Add this to your server.js after your other endpoints
app.post('/api/contacts', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = `
    INSERT INTO contacts 
    (name, email, phone, subject, message, created_at) 
    VALUES (?, ?, ?, ?, ?, NOW())
  `;

  db.query(sql, [name, email, phone, subject, message], (err, result) => {
    if (err) {
      console.error('Error saving contact:', err);
      return res.status(500).json({ error: 'Failed to save contact' });
    }
    res.json({ message: 'Contact form submitted successfully', id: result.insertId });
  });
});


// Get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Delete a contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const [result] = await db.promise().query('DELETE FROM contacts WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error('Error deleting contact:', err);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});


app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
