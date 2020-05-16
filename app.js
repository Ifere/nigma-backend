import express from "express";
import logger from "morgan";
import mongo from "./config/db";
const logStream = fs.createWriteStream(path.join(__dirname, 'request.log'), { flags: "a" });



const app = express();
app.use(logger(":method :url :status :response-time ms", { stream: logStream }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// connects to mongodb instance
mongo();

// register question service
import Handle from "./pkgs/questions/router"


// register logs service
const logController = (req, res) => {
    res.type('text/*');
    res.sendFile(path.join(__dirname, 'access.log'));
};

// mount controller
app.use("/v1", Handle);
app.use("/v1/logs", logController)

app.listen(
    // process.env.PORT ||
    8088, () => console.log("server running...."));
