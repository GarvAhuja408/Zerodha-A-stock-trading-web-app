require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

async function main() {
    await mongoose.connect(url);
}

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
    

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});