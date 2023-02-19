const { User } = require('../models');
module.exports = {
addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      {  new: true }
    )
      .then((friendData) =>
        !friendData
          ? res.status(404).json({ message: 'No video with this id!' })
          : res.json(friendData)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Remove reaction
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      {  new: true }
    )
    .then((friendData) =>
    !friendData
      ? res.status(404).json({ message: 'No video with this id!' })
      : res.json(friendData)
  )
  .catch((err) => res.status(500).json(err));
  },
};
