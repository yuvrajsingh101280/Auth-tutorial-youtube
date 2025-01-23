import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = async (res, userId) => {

    const token = jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: "7d" })

    res.cookie("token", token, {

        httpOnly: true,
        samesite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000//7d

    })

    return token

}
export default generateTokenAndSetCookie