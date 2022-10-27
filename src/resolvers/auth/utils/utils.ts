import jwt from "jsonwebtoken"

export const generateJWT = (user:{id:number,
    firstName:string,
    lastName:string,
    password:string,
    email:string}):string=>{
    return jwt.sign({
        id:user.id,
        email:user.email,
        firstName:user.firstName,
        lastName:user.lastName,
        password:user.password
    },
    process.env.JWT_SECRET,
    {expiresIn:"3d"}
    )
}