import { verifyJWTToken } from '../controllers/auth.controller'

export function verifyJWT_MW(req, res, next) {
    let token = (req.method === 'POST') ? req.body.token : req.query.token
    console.log("token : " + token);

    verifyJWTToken(token)
        .then((decodedToken) => {
            req.user = decodedToken
            next()
        })
        .catch((err) => {
            res.status(400)
                .json({ message: "Invalid auth token provided." })
        })
}