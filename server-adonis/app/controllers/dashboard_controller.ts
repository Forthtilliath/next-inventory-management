import type { HttpContextWithPrisma } from '#prisma/index'

const last5Items = {
  take: 5,
  orderBy: {
    date: 'desc',
  },
} as const

export default class DashboardController {
  async index({ prisma }: HttpContextWithPrisma) {
    const [
      popularProducts,
      salesSummary,
      purchasesSummary,
      expensesSummary,
      expensesSummaryByCategory,
    ] = await Promise.all([
      prisma.product.findMany({
        take: 15,
        orderBy: {
          stockQuantity: 'desc',
        },
      }),
      prisma.saleSummary.findMany(last5Items),
      prisma.purchaseSummary.findMany(last5Items),
      prisma.expenseSummary.findMany(last5Items),
      prisma.expenseSummaryByCategory.findMany(last5Items),
    ])

    return {
      popularProducts,
      salesSummary,
      purchasesSummary,
      expensesSummary,
      expensesSummaryByCategory,
    }
  }
}
