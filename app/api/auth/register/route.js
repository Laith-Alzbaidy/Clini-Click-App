import { NextResponse } from "next/server";
//IMPORT User FROM MODEL
//IMPORT CONNECT FROM DB

export const POST = async (request) => {
  const { username, password, email } = await request.json();
  // FROM DB
  await connect();
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    password: hashPassword,
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
