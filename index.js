require("dotenv").config();
const express = require("express")
const connectDB = require("./db")


const app = express()

app.use(express.json())

connectDB()

//app.use((req, res, next) => {
//   console.log(`[${req.method}] ${req.url}`);
//   next();
// });


app.use("/api/interviews", require("./routes/interviewRoutes"))


app.get("/", (req, res) => {
    res.send("Interview API is running...")
});

//app.use((req, res) => {
//res.status(404).json({ error: `Route ${req.method} ${req.url} not found` });
//});


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
