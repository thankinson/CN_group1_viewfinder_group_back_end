const { Router } = require("express");
const {
    addUser,
    login,
    updateUser,
    deleteUser,
    getWatchlist,
    updateWatchlist,
} = require("./userControllers");
const { hashPass, checkToken } = require("../middleware");

//User creation, login, updating, and deletion
userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", updateUser);
userRouter.delete("/user/:filterKey/:filterVal", deleteUser);

//Watchlist addition and deletion
userRouter.get("/watchlist", getWatchlist);
userRouter.patch("/watchlist", updateWatchlist);

module.exports = userRouter;
