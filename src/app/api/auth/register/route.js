import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
export const POST = async (request) => {
    const { name, email, password } = await request.json();
    await connect();
    const hashedPassword = await bcrypt.hash(password, 5)//5 here is salt length
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        return new NextResponse("User has been created", {
            status: 201,
        })

    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        })
    }

}