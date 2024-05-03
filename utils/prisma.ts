import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default prisma;

// https://stackoverflow.com/questions/77524872/nextjs-api-request-with-prisma-on-client-site-page
// https://mael.app/blog/nextjs-13-app-directory-prisma-3nnl/