import jwt from "jsonwebtoken";

const secretKey = "abc";


export const generateToken = (email) => {
  // Validate User Here
  // Then generate JWT Token

  let data = {
      time: Date(),
      email: email,
  }

  const token = jwt.sign(data, secretKey);

  return token
}


export const jwtToken = (req, res, next) => {

  // Check if the request has a JWT token in the Authorization header

  const authHeader = req.headers.authorization;


  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {

      // Verify the token using the secret key

      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
    } catch (err) {

      // Token verification failed
      return res.status(401).send("Invalid token");
      
    }
  } else {
    // No token provided
    return res.status(401).send("Unauthorized");
  }
  next();
};
