const express = require('express');
const router = express.Router();
const { VotingBoxModel } = require('../database');

/* GET closer voting box. */
router.get('/closer', async (req, res, next) => {
  const lat = req.query.lat;
  const lng = req.query.lng;
  const distance = Number(req.query.distance || 1000);

  if (!lat || !lng) {
    return res.status(422).json({
      message: 'Must include latitude and longitude',
    })
  }
  if (![100, 200, 500, 1000, 3000, 5000].includes(distance)) {
    return res.status(422).json({
      message: 'Invalid distance'
    })
  }

  const near = await VotingBoxModel.find({
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [
            lng, lat,
          ]
        },
        $maxDistance: distance,
      }
    }
  })
  res.json(near);
});

router.get('/search', async (req, res, next) => {
  const state = req.query.state;
  const section = req.query.section;
  if (!state || !section) {
    return res.status(422).json({
      message: 'Must include state and section',
    });
  }

  const votingBoxes = await VotingBoxModel.find({
    state: Number(state),
    section: Number(section),
  })

  return res.json(votingBoxes)
});

module.exports = router;
