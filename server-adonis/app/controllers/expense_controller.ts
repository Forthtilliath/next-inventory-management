import type { HttpContextWithPrisma } from '#prisma/index'

export default class ExpenseController {
  async index({ prisma }: HttpContextWithPrisma) {
    return prisma.expenseSummaryByCategory.findMany({
      orderBy: {
        date: 'desc',
      },
    })
  }
}
