const { about } = require("../controllers/about");
const {  attach, attachPost } = require("../controllers/details");
const { post: commentPost } = require("../controllers/comments");
const { notFound } = require("../controllers/notFound");
const { createAccessory, accessoryPost } = require("../controllers/accessory");

const productController = require("../controllers/productController");



module.exports = (app) => {
  app.get("/", (req,res)=>res.redirect('/products'));
  app.get("/about", about);
  app.use('/products', productController)

  app.post("/comments/:cubeId/create", commentPost);
  app.get("/accessory/create", createAccessory);
  app.post("/accessory/create", accessoryPost);
  app.get("/details/:id/attach", attach);
  app.post("/details/:cubeId/attach", attachPost);

  app.all("*", notFound);
};
