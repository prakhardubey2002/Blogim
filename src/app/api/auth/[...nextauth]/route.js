import NextAuth from "next-auth"
import GoogleProviders from "next-auth/providers/google"

const handler= NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})
export {handler as GET,handler as POST}// because when we pass our username and password it will be POST method and when we fetch our session and user information it will be get method 