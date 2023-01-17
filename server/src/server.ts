import FastiFy from 'fastify'
import cors from '@fastify/cors'
import {PrismaClient} from '@prisma/client'

const app = FastiFy()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})

const serverPort = 3333

app.listen({
  port: serverPort,
}).then(() => {
  console.log(`Server running in port ${serverPort}!`)
})