const pool = require("../../database");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await pool.query("SELECT * FROM User WHERE username = ?", [
        username,
    ]);


    if (user.length === 0) {
        return res.json({
            status: 401,
            message: "Username or password incorrect",
        });
    }

    const validPassword = await bcrypt.compare(password, user[0]?.password);

    if (!validPassword) {
        return res.json({
            status: 401,
            message: "Username or password incorrect",
        });
    }

    const hashUser = {
        id: user[0].user_id,
        username: user[0].username
    }

    const token = jsonwebtoken.sign(hashUser, "secretkey");

    if (user.length > 0) {
        res.json({
            status: 200,
            token,
        });
    } else {
        res.json({
            status: 401,
            message: "Username or password incorrect",
        });
    }
};

const register = async (req, res) => {
    const { username, password } = req.body;
    const newUser = {
        username,
        password,
    };

    newUser.password = await bcrypt.hash(password, 10);

    try {
        await pool.query("INSERT INTO User SET ?", [newUser]);
    } catch (error) {
        return res.json({
            status: 500,
            message: "Username already exists",
        });
    }

    res.json({
        status: 200,
        message: "User created",
    });
};

module.exports = {
    login,
    register,
};
