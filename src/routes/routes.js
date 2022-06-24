import {
  addNewProduct,
  getProductById,
  getProducts
} from '../controllers/controllers';

const routes = (app) => {
  app.route('/products').post(addNewProduct).get(getProducts);

  app.route('/products/:productId').get(getProductById);
};

export default routes;
