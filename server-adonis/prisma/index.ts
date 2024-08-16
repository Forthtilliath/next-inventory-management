import { PrismaClient } from '@prisma/client'
import { HttpContext } from '@adonisjs/core/http'

export interface HttpContextWithPrisma extends HttpContext {
  prisma: PrismaClient
}
