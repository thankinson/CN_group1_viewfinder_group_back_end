const { Router } = require("express");
const {
  addUser,
  login,
  updateUser,
  deleteUser,
  listFilms,
  addFilm,
  removeFilm,
  getUserTest,
} = require("./userControllers");
const { hashPass, checkToken, decryptPass } = require("../middleware");
const userRouter = Router();

//User creation
userRouter.post("/create", hashPass, addUser);

//User login, updating, and deletion
userRouter.post("/user", decryptPass, login);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", checkToken, hashPass, updateUser);
userRouter.delete("/user/:filterKey/:filterVal", deleteUser);

//Watchlist addition and deletion
userRouter.get("/watchlist", checkToken, listFilms);
userRouter.put("/watchlist", addFilm);
userRouter.patch("/watchlist", removeFilm);

//Admin testing routes
userRouter.get("/test", getUserTest);

module.exports = userRouter;
