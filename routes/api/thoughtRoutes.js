const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/videos
router.route('/').get(getThought).post(createThought);

// /api/videos/:videoId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/videos/:videoId/responses
router.route('/:thoughtId/reaction').post(addReaction);

// /api/videos/:videoId/responses/:responseId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
