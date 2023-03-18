const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const fetchUser = require('../middleware/fetchuser');
const HostEventModel = require('../models/Event');

// Create a new hostEvent
router.post(
  '/host-events',
  fetchUser,
  [
    check('event_name', 'Please enter a valid event name').isLength({ min: 1 }),
    check('name_host', 'Please enter a valid host name').isLength({ min: 1 }),
    check('place', 'Please enter a valid event place').isLength({ min: 1 }),
    check('limit', 'Please enter a valid event limit').isInt({ min: 1 }),
    check('category', 'Please enter a valid event category').isLength({ min: 1 }),
    check('contact', 'Please enter a valid contact information').isLength({ min: 1 }),
    check('description', 'Please enter a valid event description').isLength({ min: 1 }),
    check('images', 'Please enter a valid image URL').isArray(),
    check('budget', 'Please enter a valid event budget').isInt({ min: 1 }),
    check('verification_status', 'Please enter a valid verification status')
  ],
  async (req, res) => {
    // Check if there are any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return a response with a status code of 400 (Bad Request) and the errors array
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract the fields from the request body
    const {price, event_name, name_host, place, limit, category, contact, description, images, budget, verification_status,date,no_people,people } = req.body;

    try {
      // Create a new hostEvent object with the extracted fields
      id = req.user.id
      const hostEvent = new HostEventModel({
        event_name,
        name_host,
        place,
        limit,
        category,
        contact,
        description,
        images,
        budget,
        verification_status,
        date,
        no_people,
        people,
        user: id,
        price
      });

      // Save the hostEvent object to the database
      const savedHostEvent = await hostEvent.save();

      // Return a response with a status code of 201 (Created) and the saved hostEvent object
      return res.status(201).json(savedHostEvent);
    } catch (err) {
      // Return a response with a status code of 500 (Internal Server Error) and an error message
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

router.get("/fetch_event", fetchUser, async (req, res) => {
  try {
    const data = await HostEventModel.find({ user: req.user.id });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send("Internal error ocurred");
    console.log(err);
  }
});



// Get all events
router.get('/events',fetchUser, async (req, res) => {
  try {

    const events = await HostEventModel.find().populate();
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
