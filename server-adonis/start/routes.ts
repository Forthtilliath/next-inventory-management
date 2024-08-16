/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ExpenseController = () => import('#controllers/expense_controller')
const UserController = () => import('#controllers/user_controller')
const DashboardController = () => import('#controllers/dashboard_controller')
const ProductController = () => import('#controllers/product_controller')

// Dashboard group
router
  .group(() => {
    router.get('/', [DashboardController, 'index'])
  })
  .prefix('/dashboard')

// Product group
router
  .group(() => {
    router.get('/', [ProductController, 'index']).where('search', 'string')
    router.post('/', [ProductController, 'store'])
  })
  .prefix('/products')

// User group
router
  .group(() => {
    router.get('/', [UserController, 'index'])
  })
  .prefix('/users')

// Expense group
router
  .group(() => {
    router.get('/', [ExpenseController, 'index'])
  })
  .prefix('/expenses')
