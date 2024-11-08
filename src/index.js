import express from "express";
import bodyParser from "body-parser";

const app = express();

const PORT = 3001;

app.use(bodyParser.json());

const router = express.Router();

router.post("/",(req, res)=>{
    console.log("req.body", req.body)
    res.send(req.body).status(200);
});


app.use("/api/v1/students", router)


app.listen(PORT, ()=>{
    console.log('Server running on port number ${PORT}');
});