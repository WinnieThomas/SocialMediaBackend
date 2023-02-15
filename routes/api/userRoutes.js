// const router = require('express').Router();
// const {
//   getUsers,
//   getSingleUser,
//   createUser,
// } = require('../../controllers/userController');

// // /api/users
// router.route('/').get(getUsers).post(createUser);

// // /api/users/:userId
// router.route('/:userId').get(getSingleUser);

// ///api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// // /api/users/:userId
// router.route('/:userId').get(getUser).delete(deleteUser).put(updateUser);
const router = require('express').Router();

const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

const {
  addFriend,
  removeFriend,
} = require('../../controllers/friendController.js');

// /api/users
router.route('/').post(createUser).get(getUsers);

 ///api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);


module.exports = router;
