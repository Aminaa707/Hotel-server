const router = require("express").Router();
const ctrl = require("../controllers/Auth");

// router.route("/").get(log.view_all).post(log.view_add);

router.route("/:msg").get(ctrl.view);

module.exports = router;
