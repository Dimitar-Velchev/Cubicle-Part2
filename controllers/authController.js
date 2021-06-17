const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render("register", { title: "Register Page" });
});

router.post("/register", async (req, res) => {
  try {
    await req.auth.register(req.body);
    res.redirect("/products");
  } catch (err) {
    console.log(req.body);
    res.render("register", { title: "Register", error: err.message });
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});

router.post("/login", (req, res) => {
  res.redirect("/auth/register");
});

module.exports = router;
