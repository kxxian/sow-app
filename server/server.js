import express from "express";
import cors from "cors";
import loginRouter from "./routes/loginRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Server is live!"));

app.use("/api/login", loginRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
