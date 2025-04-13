import cors from "cors";
import express from "express";
import { departmentRouter } from "./routes/DepartmentRoutes";

const app = express();
const port = 4300;
app.use(
    cors({
        origin: "http://localhost:4200",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        //allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use("/departments", departmentRouter);

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Now listening on port ${4300}\n`);
});
