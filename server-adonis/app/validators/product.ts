import vine from '@vinejs/vine'

export const storeProductValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3),
    price: vine.number().decimal([0, 2]).positive(),
    rating: vine.number().decimal([0, 2]).range([0, 5]),
    stockQuantity: vine.number().positive().withoutDecimals(),
  })
)
