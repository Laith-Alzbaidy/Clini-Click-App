import { NextResponse } from "next/server";
//WE SHOULD IMPORT THE CONNECT FROM DB 
//WE SHOULD IMPORT THE MODAL NAME FROM DB

export const GET = async (request) => {
  try {
    await connect(); // DB CONNICTION
    const categories = await Category.find() //MODAL NAME

    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(
      JSON.stringify(
        {
          error: "An error occurred",
          message: error.message,
        },
        { status: 500 }
      )
    );
  }
};
