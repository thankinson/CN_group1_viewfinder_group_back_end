const { Router } = require("express");
const {
    addUser,
    login,
    updateUser,
    deleteUser,
    // getWatchlist,
    addMovie,
    deleteMovie
} = require("./userControllers");
const { hashPass, checkToken } = require("../middleware");
const userRouter = Router();

//User creation, login, updating, and deletion
userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", updateUser);
userRouter.delete("/user/:filterKey/:filterVal", deleteUser);

//Watchlist addition and deletion
// userRouter.get("/watchlist", getWatchlist);
userRouter.put("/watchlist", addMovie);
userRouter.patch("/watchlist", deleteMovie)

module.exports = userRouter;
