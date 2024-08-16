import { storeProductValidator } from '#validators/product'
import type { HttpContextWithPrisma } from '#prisma/index'

export default class ProductController {
  async index({ params, prisma }: HttpContextWithPrisma) {
    const { search } = params
    return prisma.product.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
    })
  }

  async store({ request, prisma }: HttpContextWithPrisma) {
    const product = await request.validateUsing(storeProductValidator)

    return prisma.product.create({
      data: {
        productId: crypto.randomUUID(),
        ...product,
      },
    })
  }
}
