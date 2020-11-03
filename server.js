const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();

// this will become process.env.PORT || 3001
const PORT = process.env.PORT || 3000;



app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// this will be come app.use(express.static("client/build")) for react app
app.use(express.static("public"));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/only-dungeons-practice", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", ()=>{
    console.log("Mongoose succcessfully connected");
})

connection.on("error", (err)=>{
    console.log("Mongoose connection error: ", err);
})

app.get("/api/config", (req,res)=>{
    res.json({
        success:true
    });
});

// app.get("/api/users", (req,res)=>{
//     db.User.find({})
//     .then((res)=>{
//         res.json(res)
//     })
//     .catch((err)=>{
//         res.status(422).json(err)
//     })
// })

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})
