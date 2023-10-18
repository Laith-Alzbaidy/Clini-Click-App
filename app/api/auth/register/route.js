import { NextResponse } from "next/server";
//IMPORT User FROM MODEL
//IMPORT CONNECT FROM DB

export const POST = async (request) => {
  const { firstName, lastName, email } = await request.json();
  // FROM DB
  await connect();
  const newUser = new User({
    firstName,
    lastName,
    email,
  });
  try {
    await newUser.save();
    return NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return NextResponse(error.message, {
      status: 500,
    });
  }
};
