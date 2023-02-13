import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Docker learning...</h1>');
});

app.listen(3000);
