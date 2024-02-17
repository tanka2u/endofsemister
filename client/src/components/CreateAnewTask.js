import { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from 'axios';

function Tasks({ children }) {
    const [allEvents, setAllEvents] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const [formData, setFormData] = useState({
        event: '',
        taskTitle: '',
        taskDescription: '',
        deadline: '',
        assignee : ''
    });

    useEffect(() => {
        const fetchEvents = async () =>{
            const Events= await axios.get('http://localhost:3001/events');
            setAllEvents(Events.data); 
        }
        fetchEvents();

        return () => {
            
        };
    }, []);

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
   const response = await axios.post('http://localhost:3001/tasks/create', formData)
   console.log(formData);
   alert('event created.');
   console.log(response);
    };
  return(
    <>
    <Layout>
    <div className="container">
        <div className="form-header">
            <h1><b>Create New Task</b></h1>
        </div>
        <div className="form-section">
            <form onSubmit={handleSubmit}>
            <div className="form-field">
                    <label for="event">Related Events</label>
                    <select id="event" name="event" required value={formData.event}
                    onChange={handleChange}>
                        <option>Select one</option>
                        {allEvents.length > 0 ? (
                            allEvents.map((event_data) => (
                                <option key={event_data._id} value={event_data._id}>{event_data.eventName}</option>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </select>
                    </div>
                <div className="form-field">
                    <label for="taskTitle">Task Title</label>
                    <input type="text" id="taskTitle" name="taskTitle"
                    value={formData.taskTitle}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-field">
                    <label for="taskDescription">Task Description</label>
                    <textarea id="taskDescription" name="taskDescription"  
                    value={formData.taskDescription}
                    onChange={handleChange}
                    ></textarea>
                </div>
                <div className="form-field">
                    <label for="deadline">deadline</label>
                    <input type="date" id="deadline" name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-field">
                    <label for="assignee">assignee</label>
                    <select id="assignee" name="assignee" required value={formData.assignee}
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
                <div className="form-field">
                    <button type="submit" className="button">Create Task</button>
                </div>
            </form>
        </div>
    </div>
    </Layout>
    </>
);
}
export default Tasks;
