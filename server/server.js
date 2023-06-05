import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import dbConnect from './config/dbConnect.js'
import userAuthRouter from './routers/userAuthRouter.js'
import adminAuthRouter from './routers/adminAuthRouter.js'
import hospitalAuthRouter from './routers/hospitalAuthRouter.js'
import adminRouter from './routers/adminRouter.js'
import verifyAdmin from './middlewares/verifyAdmin.js'
import verifyHospital from './middlewares/verifyHospital.js'
import hospitalRouter from './routers/hospitalRouter.js'
import doctorAuthRouter from './routers/doctorAuthRouter.js'
import userRouter from './routers/userRouter.js'
import verifyUser from './middlewares/verifyUser.js'
import doctorRouter from "./routers/doctorRouter.js"
import verifyDoctor from './middlewares/verifyDoctor.js'
import chatRouter from './routers/chatRouter.js'
import messageRouter from './routers/messageRouter.js'
import http from "http"
import { Server } from "socket.io";
import socketConnect from './config/socketConnect.js'

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
let activeUsers={}
socketConnect(io, activeUsers)

app.use(express.json({ limit: '50mb' }))
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve() + "/public"))
app.use(
  cors({
    origin: [
      "http://localhost:3000", "https://doconline.netlify.app"
    ],
    credentials: true,
  })
);
dbConnect();


app.use("/user/auth/", userAuthRouter)
app.use("/admin/auth/", adminAuthRouter)
app.use("/hospital/auth/", hospitalAuthRouter)
app.use("/doctor/auth", doctorAuthRouter)
app.use("/admin/", verifyAdmin, adminRouter)
app.use("/hospital/", verifyHospital, hospitalRouter)
app.use("/user/", verifyUser, userRouter)
app.use("/doctor/", verifyDoctor, doctorRouter)
app.use("/chat", chatRouter)
app.use("/message", messageRouter)

server.listen(5000, () => {
  console.log("server running on port 5000")
})