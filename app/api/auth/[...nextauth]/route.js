import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// IMPORT THE USING crypt LAIBRARY IN BACKEND
export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    // WE CAN ADD ANY PROVIDER (EX: GOOGLE)
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // EMAIL & PASSWORD PROVIDER
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        await connect();
        try {
          // User FROM DB SCHEMA
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            //compare password
            const CorrectPassword = bcrypt.compare(
              credentials.password,
              user.password
            );
            if (CorrectPassword) {
              return user;
            } else {
              throw new Error("Password not correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/profile",
  },
});

export { authOptions as GET, authOptions as POST };
