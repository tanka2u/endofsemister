import { Link } from "react-router-dom";
import styles from "../dashboard.css"
import Layout from "./Layout";
import axios from 'axios';
import { useEffect, useState } from "react";
function Dashboard() {
  const [allEvents, setAllEvents] = useState([]);
  const [allTasks, setTasks] = useState([]);

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
      const fetchTasks = async () =>{
          const Tasks= await axios.get('http://localhost:3001/tasks');
          setTasks(Tasks.data); 
      }
      fetchTasks();

      return () => {
          
      };
  }, []);

    function formatDate(dateString) {
        const date = new Date(dateString);

        // Format the date using toLocaleDateString()
        return date.toLocaleDateString();
    }
  return (
    <>
    <Layout>
    <div className="container">
    <div class="dashboard-header">
                  <h1>Welcome, [User Name]</h1>
                  <Link class="button" to="/event/create">Create New Event</Link>
              </div>
              <div class="dashboard-section">
                  <h2>Upcoming Events</h2>
                  {allEvents.map((event, i) => (
                    <p>Event {++i}: {event.eventName} - Date: {formatDate(event.eventDate)}</p>
                  ))}
              </div>
              <div class="dashboard-section">
                  <h2>Your Tasks</h2>
                  {allTasks.map((task, i) => (
                    <div class="task-item">Task {++i}: {task.taskTitle}</div>
                  ))}
              </div>
    </div>
    </Layout>
    </>
  );
}

export default Dashboard;