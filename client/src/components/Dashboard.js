import styles from "../dashboard.css"
function Dashboard() {
  return (
    <>
    <div className="container">
    <div class="dashboard-header">
                  <h1>Welcome, [User Name]</h1>
                  <button class="button">Create New Event</button>
              </div>
              <div class="dashboard-section">
                  <h2>Upcoming Events</h2>
                  <p>Event 1: Conference on Web Development - Date: 2024-02-15</p>
                  <p>Event 2: Tech Networking Meetup - Date: 2024-03-05</p>
              </div>
              <div class="dashboard-section">
                  <h2>Your Tasks</h2>
                  <div class="task-item">Task 1: Prepare presentation for the conference</div>
                  <div class="task-item">Task 2: Coordinate with tech meetup speakers</div>
              </div>
    </div>
      
    </>
  );
}

export default Dashboard;