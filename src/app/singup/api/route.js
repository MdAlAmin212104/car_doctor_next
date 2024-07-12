import { connectDB } from "@/lib/connectDB";

export const POST = async(req) =>{
    const newUser = await req.json();
    try {
        const db = await connectDB()
        const userCollections = db.collection('users');
        const exist = await userCollections.findOne({email : newUser.email});
        if(exist) {
            return Response.json({message : 'Email already exists'}, {status : 409})
        }
        const resp = await userCollections.insertOne(newUser);
        return Response.json({message : 'User created successfully'}, {status : 200})
    } catch (error) {
        return Response.json({message : 'Something want error', error}, {status : 500})
    }
}