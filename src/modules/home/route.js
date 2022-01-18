const router = require("express").Router();
const { GET, POST } = require("./controller");

router.get("/", GET);
router.post("/", POST);
module.exports = router;