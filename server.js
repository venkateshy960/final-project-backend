let express = require("express");
let app = express();
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);
const corsOptions = {
  origin: "http://localhost:4200",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const mongodb = "mongodb://localhost/userHobbies";
const mongo = mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongo.then(
  () => {
    console.log("connected");
  },
  (error) => {
    console.log(error, "error");
  }
);

app.listen(3000, function () {
  console.log("App listening on 3000 port");
});
