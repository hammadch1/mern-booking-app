import express, { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express() // it created an express app for us
app.use(express.json()) // helps converting body of API requests into JSON, so we don't have to handle that in each of our endpoint
app.use(express.urlencoded({ extended: true })) // helps us parse URL to get parameters
app.use(cors()) // cors is a security thing, will prevent certain requests from certain URL if it doesn't agrees with them, e.g., if our UI is going to be on diff port to our backend, then cors is going to find it funny and block the request, helps us configure to stop it from happening

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "hello from express endpoint!" })
}) // add an test endpoint just to see if it is working

app.listen(7001, () => {
  // start the server
  console.log("server is running on localhost:7001") // should print this for us after express starts the server
})
