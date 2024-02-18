import { useEffect, useState } from "react";
import styles from "../eventDetails.css"
import axios from 'axios';
import Layout from "./Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
function EventDetail({ children }) {
  
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/events/${id}`);
      console.log('Data deleted successfully');
      navigate("/home");
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  



    const { id } = useParams();
  const [event, setEvent] = useState(null);
  function formatDate(dateString) {
    const date = new Date(dateString);

    // Format the date using toLocaleDateString()
    return date.toLocaleDateString();
}
    useEffect(() => {
        const fetchEvent = async () => {
          try {
            const response = await axios(`http://localhost:3001/events/${id}`);
            const eventData = await response.data;
            setEvent(eventData);
            console.log(eventData);
          } catch (error) {
            console.error('Error fetching event:', error);
          }
        };
    
        fetchEvent();
    
        // Cleanup function (optional)
        return () => {
          // Cleanup code (if needed)
        };
      }, [id]);
    
      if (!event) {
        return <p>Event not found</p>;
      }
  return(
    <>
    <Layout>
    <div class="container">
        <div class="event-header">
            <h1> <b>Event Details</b></h1>
        </div>
        <div class="event-section">
            <div class="event-info">
                <label>Event Name:</label>
                <div>{event.eventName}</div>
            </div>
            <div class="event-info">
                <label>Event Date:</label>
                <div>{formatDate(event.eventDate)}</div>
            </div>
            <div class="event-info">
                <label>Location:</label>
                <div>{event.location}</div>
            </div>
            <div class="event-info">
                <label>Description:</label>
                <div>{event.eventDescription}</div>
            </div>
            <div class="event-info">
                <label>Event Responsible:</label>
                <div>{event.eventResponsible.name}</div>
            </div>
            <div class="event-info">
                <label>Participants:</label>
                <div>{event.participants.join(", ")}</div>
            </div>
            <div class="event-info">
                <Link to={`/events/edit/${id}`} class="button">Edit Event</Link>
                <button class="button" onClick={handleDelete}>Delete Event</button>
            </div>
        </div>
    </div>
    </Layout>
    </>
);
  }
export default EventDetail;
