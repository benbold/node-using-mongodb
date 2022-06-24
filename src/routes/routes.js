import {
  addNewProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct
} from '../controllers/controllers';

const routes = (app) => {
  app.route('/products').post(addNewProduct).get(getProducts);

  app.route('/products/:productId')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);
};

export default routes;
