const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.createUser)
//   .post(booksController.create);

// Matches with "/api/users/dms"
router.route("/dms")
  .get(usersController.findAllDms)


// Matches with "/api/users/:id"
router.route("/:id")
.get(usersController.findById)
.put(usersController.updateField)
.delete(usersController.remove)
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
