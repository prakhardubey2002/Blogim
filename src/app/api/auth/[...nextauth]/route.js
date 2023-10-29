import NextAuth from "next-auth"
import GoogleProviders from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db"
import bcrypt from "bcryptjs";
import User from "@/models/User"
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        await connect();
        try {
          //to check if user exist or not
          const user = await User.findOne({
            email: credentials.email
          });
          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User Not found ")
          }

        } catch (err) {
          throw new Error(err);
        }
      }
    })
  ],
  pages: {
    error : "/dashboard/login"//redirect to this page when error is detected
  },
})
export { handler as GET, handler as POST }// because when we pass our username and password it will be POST method and when we fetch our session and user information it will be get method 