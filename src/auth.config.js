import Google from "next-auth/providers/google";

const authConfig = {
  providers: [Google],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.createdAt = user.createdAt;
      }
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.provider = token.provider;
      session.user.id = token.id;
      session.user.createdAt = token.createdAt;
      return session;
    },
  },
};

export default authConfig;
