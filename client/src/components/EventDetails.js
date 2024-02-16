import styles from "../eventDetails.css"
function Events({ children }) {
  return(
    <>
    <div class="container">
        <div class="event-header">
            <h1> <b>Event Details</b></h1>
        </div>
        <div class="event-section">
            <div class="event-info">
                <label>Event Name:</label>
                <div>Conference on Web Development</div>
            </div>
            <div class="event-info">
                <label>Event Date:</label>
                <div>2024-02-15</div>
            </div>
            <div class="event-info">
                <label>Location:</label>
                <div>Techville Convention Center</div>
            </div>
            <div class="event-info">
                <label>Description:</label>
                <div>This conference will cover various aspects of web development...</div>
            </div>
            <div class="event-info">
                <label>Event Responsible:</label>
                <div>User 2</div>
            </div>
            <div class="event-info">
                <label>Participants:</label>
                <div>John Doe, Jane Smith, Alex Johnson</div>
            </div>
            <div class="event-info">
                <button class="button">Edit Event</button>
                <button class="button">Delete Event</button>
            </div>
        </div>
    </div>

    </>
);
}
export default Events;
