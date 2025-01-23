import jwt from "jsonwebtoken"
import User from "../models/usermodel.js"
export const verifyToken = async (req, res) => {


    const token = req.cookies?.token
    try {

        const decoded = jwt.verify(token, `${process.env.SECRET_KEY}`)


        if (!decoded) {

            return res.status(400).json({ success: false, message: "invalid token" })

        }


        const user = await User.findById(decoded.userId)

        if (!user) {
            return res.status(400).json({ success: false, message: "user is not valid" })

        }


        return res.status(200).json({ success: true, message: "User is authenticated" })

    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }

}