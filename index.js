import express, { json } from "express";
import router from "./routes/UserRoutes.js";
import loginRouter from "./routes/login.js";
const app = express();

app.use(json());

app.use("/api/user", router);
app.use("/api/login", loginRouter);


app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

export default app;
