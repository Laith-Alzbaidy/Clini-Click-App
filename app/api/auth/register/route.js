import { NextResponse } from "next/server";
//IMPORT User FROM MODEL
//IMPORT CONNECT FROM DB

export const POST = async (request) => {
  const { firstname, lastname, email } = await request.json();
  // FROM DB
  await connect();
  const newUser = new User({
    firstname,
    lastname,
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
