const fs = require('fs');
const expect = require('expect.js');

describe('Find a single product', () => {
    it('Add controler to pull a single item @controller-single', (done) => {
        try {
            expect(fs.readFileSync('src/controllers/controllers.js').toString())
                .to.contain("export const getProductById = (req, res) => {")
            expect(fs.readFileSync('src/controllers/controllers.js').toString())
                .to.contain("Product.findById(req.params.productId, (err, product) => {")
            done();
        } catch (error) {
            done(new Error("No controllers for GET specific ID endpoint detected"));
        }
    })

    it('Add route to pull a single item @route-single', (done) => {
        try {
            expect(fs.readFileSync('src/routes/routes.js').toString())
                .to.contain("app.route('/products/:productId')")
            expect(fs.readFileSync('src/routes/routes.js').toString())
                .to.contain(".get(getProductById)")
            done();
        } catch (error) {
            done(new Error("No routes for GET endpoint detected"));
        }
    })
});
