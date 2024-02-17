const Event = require("../model/event.model");

class EventService {
    async create(event) {
        return event.save()
        .then(savedEvent => {
            console.log('Event saved:', savedEvent);
            return true;
        })
        .catch(err => {
            console.error('Error saving event:', err);
            return false;
        });

    }

    async getEvents() {
        const events = await Event.find();
        return events;
    }
}

module.exports = EventService;