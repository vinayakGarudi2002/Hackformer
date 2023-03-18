

const express = require("express");
const router = express.Router();
const User = require("../models/User");

const fetchUser = require('../middleware/fetchuser');

const HostEventModel = require('../models/Event');


router.post("/register-event/:eventId", fetchUser, async (req, res) => {
    try {
      const userId = req.user.id;
      const eventId = req.params.eventId;
  
      // Find the event by its id
      const event = await HostEventModel.findById(eventId);

      const userid = req.user.id;
      const data = await User.findById(userid)
  
      // Check if the event is already full
      if (event.no_people >= event.limit) {
        return res.status(400).json({ msg: "Event is already full" });
      }
  
      // Check if the user is already registered for the event
      if (event.people.includes(userId)) {
        return res.status(400).json({ msg: "User is already registered for the event" });
      }
  
      // Update the event's no_people and people fields
      event.no_people += 1;
      event.people.push(userId);
      data.register.push(eventId);
      // Save the updated event to the database
      const updatedEvent = await event.save();
  
      // Return a response with the updated event object
      return res.json(updatedEvent);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Error Occurred");
    }
  });
module.exports = router;
  