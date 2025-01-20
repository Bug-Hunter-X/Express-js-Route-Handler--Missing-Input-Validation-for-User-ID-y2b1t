const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

//Problem: The code doesn't handle non-numeric user IDs.
//If a user sends a request with a non-numeric ID (e.g., '/users/abc'), the database query might fail or return unexpected results, leading to incorrect data or errors.  There is no explicit input validation. 