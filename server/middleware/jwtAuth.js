const JWT = require("jsonwebtoken")

const jwtAuth = (req, res, next) => {
    // verify token
    const Authorization = (req.cookies && req.cookies.Authorization) || null
    console.log(req.cookies)
    console.log(req.cookies.Authorization)

    if (!Authorization) {
        return res.status(400).json({
            success: false,
            message: "polu"
        })
    }
    try {
        const payload = JWT.verify(Authorization, process.env.SECRET)
        req.user = {
            id: payload.id,
            email: payload.email

        }

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
    next()
}
module.exports = jwtAuth;