var productService = require("../services/product.service");

module.exports = router => {
  /* GET product list */
  router.get("/products", async function(req, res) {
    try {
      const { data } = await productService.getProducts(req.body, res);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  // Below routes are for modifying data in product list
  /* POST  add new product */
  router.post("/product", async function(req, res) {
    try {
      console.log("create method route", req.body);
      const { data } = await productService.create(req.body, res);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  /* PUT  update selected product */
  router.put("/product/:title", async function(req, res) {
    try {
      const { data, message } = await productService.update(req.body, res);
      return res.status(200).json({ data, message });
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  /* DELETE selected product */
  router.delete("/product/:title", async function(req, res) {
    try {
      const { data, message } = await productService.deleteProduct(
        req.params.title,
        res
      );
      return res.status(200).json({ data, message });
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
