const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;

app.use(bodyParser.json());

const usersFilePath = path.join(__dirname, 'users.json');

// Create users.json file if it doesn't exist
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, '[]');
}

// Read existing users from the file
const getUsers = () => JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

// Write users to the file
const saveUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;

  // Simulated validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const existingUsers = getUsers();

  // Check if the username is already taken
  if (existingUsers.some((user) => user.username === username)) {
    return res.status(400).json({ error: 'Username already taken' });
  }

  // Simulated user object
  const newUser = { username, password };

  // Add the user to the existing users
  const updatedUsers = [...existingUsers, newUser];
  saveUsers(updatedUsers);

  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
