import express from "express";
import { body, validationResult } from "express-validator";

const app = express();
app.use(express.json());

app.post("/users", body("name").isLength({ min: 2 }), (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ message: errors.array() });
    }
    console.log(req.body);
    res.status(201);
});

app.get("/:email", (req, res, next) => {
    res.send("✉️");
});

app.listen(8080);
