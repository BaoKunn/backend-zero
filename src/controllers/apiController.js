const User = require("../models/users");

const getUsersAPI = async (req, res) => {
    let results = await User.map((x) => x);
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    let user = await User.create({
        id: id,
        name: name,
        email: email,
        city: city
    })
    return res.status(200).json(
        {
            success: true,
            data: user
        }
    )
}

const putUpdateUserAPI = async (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    let user = await User.updateOne({
        id: id,
        name: name,
        email: email,
        city: city
    })

    return res.status(200).json(
        {
            success: true,
            data: user
        }
    )
}

const deleteUserAPI = async (req, res) => {
    const id = req.body.id;

    let results = await User.deleteOne({
        id: id,
    })

    return res.status(200).json(
        {
            success: true,
            data: user
        }
    )
}

module.exports = {
    getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI
}