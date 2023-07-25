import { pool } from "../config.js";
import { generateToken } from "../middleware/jwtToken.js";

export const loginUser = (req, res) => {
  const { name, email } = req.body;
  const query = "INSERT INTO auth (name, email) VALUES (?, ?)";
  pool.query(query, [name, email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error creating user");
    }
    res.send({
      data: {
        token: generateToken(email),
      },
      message: "Login Successfully",
      statusCode: 200,
    });
  });
};
