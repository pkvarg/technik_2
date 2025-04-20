// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// declare global {
//   // eslint-disable-next-line
//   var prisma: undefined | ReturnType<typeof prismaClientSingleton>
// }

// const db = globalThis.prisma ?? prismaClientSingleton()

// export default db

// if (process.env.NODE_ENV !== 'production') globalThis.prisma = db

import { PrismaClient } from '@prisma/client'

// Define the type for the global prisma instance
declare global {
  // eslint-disable-next-line no-var
  var prisma: ReturnType<typeof prismaClientSingleton> | undefined
}

const prismaClientSingleton = () => {
  return new PrismaClient()
}

// Use existing global prisma instance or create a new one
const db = globalThis.prisma ?? prismaClientSingleton()

// Only update the global prisma instance in non-production environments
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db
}

export default db
