import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { prismaClient } from '@/app/lib/db'
import { Provider } from '@prisma/client'
import { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET ?? "secret",
    callbacks: {
        async signIn({ user, account }){
            if(!user.email){
                return false
            }
            try{
                const existingUser = await prismaClient.user.findUnique({
                    where: {
                        email: user.email
                    }
                })
                if(existingUser){
                    return true
                }

                const userProvider = account?.provider === 'github' ? Provider.GitHub : Provider.Google

                const newUser = await prismaClient.user.create({
                    data: {
                        email: user.email,
                        name: user.name ?? "",
                        userImage: user.image,
                        provider: userProvider,
                    }
                })
                console.log(newUser)
                return true
            }catch(e){
                console.error(e)
            }
            return true
        },

        async session({ session, token }){
            if(session.user){
                const existingUser = await prismaClient.user.findFirst({
                    where: {
                        email: session.user.email || ""
                    }
                })
                token.sub = existingUser?.id
                session.user.id = token.sub || ""
            }
            return session
        }
    }
}