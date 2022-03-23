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
const { hashPass, checkToken } = require("../middleware");
const userRouter = Router();

//User creation, login, updating, and deletion
userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", updateUser);
userRouter.delete("/user/:filterKey/:filterVal", deleteUser);

//Watchlist addition and deletion
userRouter.get("/watchlist", listFilms);
userRouter.put("/watchlist", addFilm);
userRouter.patch("/watchlist", removeFilm);

//Admin testing routes
userRouter.get("/test", getUserTest);

module.exports = userRouter;
