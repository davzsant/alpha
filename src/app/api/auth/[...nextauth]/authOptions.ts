import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GitHubProvider from "next-auth/providers/github";

const prisma = new PrismaClient()

export const authOptions = {
    providers: [
        GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    adapter: PrismaAdapter(prisma), // Adicionando o adapter aqui
    secret: process.env.NEXTAUTH_SECRET!,
    session: {
        strategy: "database", // Opcional, se você deseja armazenar sessões no banco de dados
    },
};
