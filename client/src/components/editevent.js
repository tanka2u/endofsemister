import { useEffect, useState } from "react";
import styles from "../eventDetails.css"
import Layout from "./Layout";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function EventEdit({ children }) {
  const navigate = useNavigate();
    const { id } = useParams();
  const [event, setEvent] = useState(null);
    const [selectedMultipleOptions, setSelectedMultipleOptions] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const [formData, setFormData] = useState({
        eventName: '',
        eventDate: '',
        location: '',
        eventDescription: '',
        eventResponsible: ''
      });

      useEffect(() => {
        const fetchEvent = async () => {
          try {
            const response = await axios(`http://localhost:3001/events/${id}`);
            const eventData = await response.data;
            setFormData({
                eventName: eventData.eventName,
                eventDate: DateDisplay(eventData.eventDate),
                location: eventData.location,
                eventDescription: eventData.eventDescription,
                eventResponsible: eventData.eventResponsible
              });
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

      useEffect(() => {
        // Function to fetch users from the server
        const fetchUsers = async () => {
            const users = await axios.get('http://localhost:3001/users');
            setAllUsers(users.data);
          }
    
        // Call the fetchUsers function when the component mounts
        fetchUsers();
    
        // Clean up function (optional)
        // This function will be called when the component unmounts
        return () => {
          // Any cleanup code (if needed)
        };
      }, []);

      const handleSelectChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedMultipleOptions(selectedValues);
      };

      const DateDisplay = (dateString) => {
        const date = new Date(dateString);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();

        // Format the date into "mm/dd/yyyy" format
        return `${month}/${day}/${year}`;
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const data = { ...formData, ...{ 'participants': selectedMultipleOptions}};
        console.log(data);

        const response = await axios.put(`http://localhost:3001/events/${id}`, data);
        alert('event updated.');
        console.log(response);
        navigate("/home");
        // You can send the form data to an API, etc.
      };
  return(
    <>
    <Layout>
    <div class="container">
        <div class="form-header">
            <h1>Create New Event</h1>
        </div>
        <div class="form-section">
            <form onSubmit={handleSubmit}>
                <div class="form-field">
                    <label for="eventName">Event Name</label>
                    <input type="text" id="eventName" 
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    />
                </div>
                <div class="form-field">
                    <label for="eventDate">Event Date</label>
                    <input type="date" id="eventDate" name="eventDate" value={formData.eventDate}
                    onChange={handleChange}/>
                </div>
                <div class="form-field">
                    <label for="location">Location</label>
                    <input type="text" id="location" name="location" value={formData.location}
                    onChange={handleChange}/>
                </div>
                <div class="form-field">
                    <label for="eventDescription">Event Description</label>
                    <textarea id="eventDescription" name="eventDescription" value={formData.eventDescription}
                    onChange={handleChange}></textarea>
                </div>
                <div class="form-field">
                    <label for="eventResponsible">Event Responsible</label>
                    <select id="eventResponsible" name="eventResponsible" required value={formData.eventResponsible}
                    onChange={handleChange}>
                        <option>Select one</option>
                        {allUsers.length > 0 ? (
                            allUsers.map((user) => (
                                <option key={user._id} value={user._id}>{user.name}</option>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </select>
                </div>
                <div class="form-field">
                    <label for="eventParticipants">Participants</label>
                    <select id="eventParticipants" name="eventParticipants" multiple onChange={handleSelectChange} value={selectedMultipleOptions}>
                        <option value="participant1">Participant 1</option>
                        <option value="participant2">Participant 2</option>
                        <option value="participant3">Participant 3</option>
                    </select>
                </div>
                <div class="form-field">
                    <button type="submit" class="button">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </Layout>
    </>
);
}
export default EventEdit;
