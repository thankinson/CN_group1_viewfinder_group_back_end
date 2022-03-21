const jwt = require("jsonwebtoken");
const User = require("./userModel");

exports.addUser = async (req, res) =>{
    try {
        const newUser = await User.create(req.body);
        const token = await jwt.sign({_id: newUser._id}, process.env.SECRET);
        res.status(200).send({User: newUser.usermae, token});
    } catch (error) {
        console.log(error)
        res.status(500).send({err: error.message});
    }
};

exports.login = async (req, res) => {
    try {
        const token = await jwt.sign({_id: req.user._id}, process.env.SECRET);
        res.status(200).send({err: error.message});
    } catch (error) {
        console.log(error);
        
    }
};

exports.updateUser = async (req, res) => {
    try {
        const update = await User.updateOne(
            { username: req.user.username },
            { pass: req.body.pass }
        );
        if (update.matchedCount){
            res.status(200).send({msg: "Update Succesfull"});
        } else {
            throw new Error("Did not Update");
        }
    } catch (error) {
        console.log(error);
        res.status(500);
    } 
};

exports.deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({
            [req.params.filterKey]: req.params.filterVal,
        });
        if (deleteUser.deletedCount > 0) {
            res.status(200).send({msg: "Successfully removed User"});
        } else {
            throw new Error("Did not remove user");
        };
    } catch (error) {
        console.log( {error: error.message} );
    };
};

exports.addMovie = async (req, res) =>{
    try {
        const newMovie = await User.updateOne(
            { [req.body.filterKey]: req.body.filterVal },
            { [req.body.updateKey]: req.body.updateVal } 
            );
        res.status(200).send({watchlist: newMovie.watchlist});
    } catch (error) {
        console.log(error)
        res.status(500).send({err: error.message});
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const deleteMovie = await User.deleteOne({
            [req.params.filterKey]: req.params.filterVal,
        });
        if (deleteMovie.deletedCount > 0) {
            res.status(200).send({msg: "Successfully removed movie"});
        } else {
            throw new Error("Did not remove user");
        };
    } catch (error) {
        console.log( {error: error.message} );
    };
};