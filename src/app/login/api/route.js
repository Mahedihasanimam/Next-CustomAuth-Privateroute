// src/app/api/users/route.js

import { connectDB } from '@/app/lib/connectDB';
import { NextResponse } from 'next/server';

export async function GET(request) {
    
  try {
    const db = await connectDB();
    const userCollection = db.collection('nextusers');
    
    // Fetch all users from the 'users' collection
    const users = await userCollection.find({}).toArray();

    // Return the fetched users
    return NextResponse.json(users, { status: 200 });

  } catch (error) {
    console.log(error);

    // Return an error response
    return NextResponse.json({ message: 'An error occurred!' }, { status: 500 });
  }
}
