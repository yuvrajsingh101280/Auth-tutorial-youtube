import express from "express"
import dotenv from "dotenv"
import connectToDB from "./database/db.js";
import auth from "./routes/authRoute.js"
import cookieParser from "cookie-parser";

dotenv.config()
const app = express();

const port = process.env.PORT

connectToDB()
app.use(express.json())
app.use(cookieParser())
// routes

app.use("/api/auth", auth)



app.listen(port, () => {

    console.log(`server running  at http://localhost:${port}`)


})
