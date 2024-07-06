// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Add other providers here if needed
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      // Add a custom field to the session object
      session.user.username = session.user.name
        .split(' ')
        .join('.')
        .toLocaleLowerCase()
      return session
    },
  },
  // Additional NextAuth.js configuration
})
