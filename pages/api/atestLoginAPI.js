// import mongoose from "mongoose";
import connectMONGODB from "../../atestDB/aimportDatabase";
import loginSchema from "../../backend/loginSchema";

connectMONGODB();

export default async function handler(req,res){
    const {username, password} = req.body
    const login = await loginSchema.findOne({username,password})
    // res.setHeader('Custom-Header', username)

    // req.cookies
    if(!login){
        return res.json({status: "incorrect password"})
    }
    else{
        // jsonfile.writeFile('./backend/fromDatabase.json', login)
        return res.json({status: "success"})
        // res.setHeader('Set-Cookie',username)
        // console.log("User logged in")
        // res.redirect('../')

    }
}