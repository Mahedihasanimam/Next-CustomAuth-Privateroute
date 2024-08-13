import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const db = await connectDB();
        const userCollection = db.collection('nextusers');
        const newUser = await request.json();
        
        // Fixed typo: 'insetOne' should be 'insertOne'
        await userCollection.insertOne({ ...newUser });

        // Return a successful response
        return NextResponse.json({ message: 'User created' }, { status: 200 });
    } catch (error) {
        console.log(error);

        // Return an error response
        return NextResponse.json({ message: 'An error occurred!' }, { status: 500 });
    }
}
