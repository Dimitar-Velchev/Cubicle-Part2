module.exports = {
  createAccessory(req, res) {
    res.render("createAccessory", { title: "Create new Accessory" });
  },
};
