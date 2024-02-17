import { useEffect, useState } from "react";
import styles from "../eventDetails.css"
import Layout from "./Layout";
import axios from 'axios';
import { Link } from "react-router-dom";

function EventList({ children }) {
    const [allEvents, setAllEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () =>{
            const Events= await axios.get('http://localhost:3001/events');
            setAllEvents(Events.data); 
        }
        fetchEvents();

        return () => {
            
        };
    }, []);

    function formatDate(dateString) {
        const date = new Date(dateString);

        // Format the date using toLocaleDateString()
        return date.toLocaleDateString();
    }
  return(
    <>
    <Layout>
    <div class="container">
        <div class="event-header">
            <h1> <b>Event List</b></h1>
        </div>
        <div>
      {allEvents.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allEvents.map((event) => (
              <tr key={event._id}>
                <td>{event.eventName}</td>
                <td>{formatDate(event.eventDate)}</td>
                {/* Add more table cells with event data as needed */}
                <td>
                  <Link to={`/events/${event._id}`}><u>View Detail</u></Link> {/* Link to detail page */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No events available</p>
      )}
    </div>
    </div>
    </Layout>
    </>
);
}
export default EventList;
