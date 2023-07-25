import { pool } from "../config.js";




const createUser = (req, res) => {
  const { name, address } = req.body;
  const query = "INSERT INTO user (name, address) VALUES (?, ?)";
  pool.query(query, [name, address], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error creating user");
    }
    res.send("User created successfully");
  });
};

const getUser = (req, res) => {
  const query = "SELECT * FROM user";
  pool.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching users");
    }
    res.json(rows);
  });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM user WHERE id = ?";
  pool.query(query, [id], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching user");
    }
    if (rows.length === 0) {
      return res.status(404).send("User not found");
    }
    res.json(rows[0]);
  });
};


const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;
  const query = "UPDATE user SET name = ?, address = ? WHERE id = ?";
  pool.query(query, [name, address, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error updating user");
    }
    if (result.affectedRows === 0) {
      return res.status(404).send("User not found");
    }
    res.send("User updated successfully");
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM user WHERE id = ?";
  pool.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error deleting user");
    }
    if (result.affectedRows === 0) {
      return res.status(404).send("User not found");
    }
    res.send("User deleted successfully");
  });
};

export { getUser, getUserById, createUser, updateUser, deleteUser };
