const express = require('express');
const { protectToken } = require('../middlewares/usersMiddlewares');
const { protectProductsOwner } = require('../middlewares/productsMiddlewares');

const {
  createProductValidations,
  checkValidations,
} = require('../middlewares/validationsMiddlewares');

const {
  getAllCategories,
  createCategory,
  updateCategory,
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productsController');

const router = express.Router();

router.get('/', getAllProducts); 

router.get('/categories', getAllCategories);

router.use(protectToken); //cuando esté en producción, debe estar protegida por: protectAdmin ya que sólo el admin puede crear categorías y productos

router.post('/categories', createCategory);

router.patch('/categories/:id', updateCategory);

router.get('/:id', getProductById);

router.post('/', createProductValidations, checkValidations, createProduct);

router
  .route('/:id')
  .patch(protectProductsOwner, updateProduct) //cambiar para que sólo el admin pueda hacer esto, ya que sólo admin puede crear productos
  .delete(protectProductsOwner, deleteProduct);

module.exports = { productsRouter: router };
