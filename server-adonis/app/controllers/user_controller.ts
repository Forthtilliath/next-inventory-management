import type { HttpContextWithPrisma } from '#prisma/index'

export default class UserController {
  async index({ prisma }: HttpContextWithPrisma) {
    return prisma.user.findMany()
  }
}
