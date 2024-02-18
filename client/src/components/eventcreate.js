import { useEffect, useState } from "react";
import styles from "../eventDetails.css"
import Layout from "./Layout";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function EventCreate({ children }) {
    const navigate = useNavigate();
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

        const response = await axios.post('http://localhost:3001/events/create', data);
        alert('event created.');
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
                        <option value="Tanka">Tanka</option>
                        <option value="Thoma">Thoma</option>
                        <option value="Antony">Antony</option>
                        <option value="AANA">AANA</option>
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
export default EventCreate;
