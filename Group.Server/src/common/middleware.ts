import { verifyJWTToken } from '../controllers/auth.controller'

export function verifyJWT_MW(req, res, next) {
    if (req.baseUrl == "/_api/auth/facebook") {
        return next();
    }

    let webToken = (req.method === 'POST') ? req.body.webToken : req.query.webToken

    verifyJWTToken(webToken)
        .then((decodedToken) => {
            req.user = decodedToken
            next()
        })
        .catch((err) => {
            res.status(400)
                .json({ message: "Invalid auth webToken provided." })
        })
}