import NextAuth from "next-auth";
import { authOptions } from "./options"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } // Export the NextAuth handler for both GET and POST requests

