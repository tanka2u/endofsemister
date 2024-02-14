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
}

module.exports = EventService;