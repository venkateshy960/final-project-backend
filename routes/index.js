const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/add-hobbie", async (req, res) => {
  userController.create(req.body, (err, userResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.send({
      response: userResponse,
    });
  });
});

router.post("/update-hobbie", (req, res) => {
  let data = req.body;
  userController.findOneAndUpdate(
    { name: req.body.name },
    data,
    (err, updatedUser) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
      res.send({
        response: updatedUser,
      });
    }
  );
});

router.get("/find-user", (req, res) => {
  userController.find({ name: req.body.name }, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.delete("/delete-user", (req, res) => {
  userController.findOneAndRemove(
    { name: req.body.name },
    (err, deletedUser) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

      res.send({
        response: deletedUser,
      });
    }
  );
});

router.get("/list-all-users", (req, res) => {
  userController.find({}, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

module.exports = router;
