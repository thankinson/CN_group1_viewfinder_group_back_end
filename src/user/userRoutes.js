const { Router } = require("express");
const {
    addUser,
    login,
    updateUser,
    deleteUser,
    addMovie,
    deleteMovie,
} = require("./userControllers");
const { hashPass, checkToken } = require("../middleware");

//User creation, login, updating, and deletion
userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", updateUser);
userRouter.delete("/user/:filterKey/:filterVal", deleteUser);

//Watchlist addition and deletion
userRouter.post("/watchlist", addMovie);
userRouter.delete("/watchlist/:filterKey/:filterVal", deleteMovie);

module.exports = userRouter;
