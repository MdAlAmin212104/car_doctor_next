import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async(req) =>{
    const newUser = await req.json();
    try {
        const db = await connectDB()
        const userCollections = db.collection('users');
        const exist = await userCollections.findOne({email : newUser.email});
        if(exist) {
            return Response.json({message : 'Email already exists'}, {status : 409})
        }
        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const resp = await userCollections.insertOne({...newUser, password : hashPassword});
        return Response.json({message : 'User created successfully'}, {status : 200})
    } catch (error) {
        return Response.json({message : 'Something want error', error}, {status : 500})
    }
}