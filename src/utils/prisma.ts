// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "@prisma/client/extension"; 
// declare global { var db: PrismaClient | undefined; }

// let db: PrismaClient;


// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// const prisma = new PrismaClient({adapter});

// if (process.env.NODE_ENV === 'production') {
//   db = new PrismaClient();
// } else {
//   if (!global.db) {
//     global.db = new PrismaClient();
//   }
//   db = global.db;
// }

// export const prisma = db;