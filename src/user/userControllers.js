const jwt = require("jsonwebtoken");
const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = await jwt.sign({ _id: newUser._id }, process.env.SECRET);
    res.status(200).send({ User: newUser.username, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await jwt.sign({ _id: req.user._id }, process.env.SECRET);
    res.status(200).send({ user: req.user.username, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const update = await User.updateOne(
      { username: req.user.username },
      { pass: req.body.pass }
    );
    if (update.modifiedCount > 0) {
      res.status(200).send({ msg: "Update Successful" });
    } else {
      throw new Error("It didn't Update");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({
      [req.params.filterKey]: req.params.filterVal,
    });
    if (deleteUser.deletedCount > 0) {
      res.status(200).send({ msg: "Successfully removed User" });
    } else {
      throw new Error("Did not remove user");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

// userRouter.get("/watchlist", checkToken, listFilms);
exports.listFilms = async (req, res) => {
  try {
    const returnedUser = await User.findOne({
      username: req.user.username,
    });
    console.log("watchlist=", returnedUser.watchlist);
    res.status(200).send(returnedUser.watchlist);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.addFilm = async (req, res) => {
  try {
    console.log(req.body);
    const newFilm = req.body.newFilm;
    console.log(newFilm);
    const foundUser = await User.findOne({ username: req.body.username });
    console.log(foundUser);
    const updatedList = await User.updateOne(
      {
        _id: foundUser.id,
      },
      { $addToSet: { watchlist: newFilm } }
    );
    res.status(200).send(updatedList);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.removeFilm = async (req, res) => {
  try {
    console.log("userController- removeFilm");
    const removeFilm = req.body.removefilm;
    console.log(removeFilm);
    const foundUser = await User.findOne({ username: req.body.username });
    console.log(foundUser);
    const updatedList = await User.updateOne(
      {
        _id: foundUser.id,
      },
      { $pull: { watchlist: removeFilm } }
    );
    res.status(200).send(updatedList);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

//Test functionality

exports.getUserTest = async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    console.log(foundUser);
    res.status(200).send(foundUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
