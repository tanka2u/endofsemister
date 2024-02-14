import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import Auth from "./Auth";
import ProfileModal from "./ProfileModal";
import styles from "../dashboard.css"

function Layout({ children }) {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
  }

  return (
    <>
    <>
          <div class="navbar">
              <a href="#">Home</a>
              <a href="#">Events</a>
              <a href="#">Tasks</a>
              <a href="#">Profile</a>
              <a href="#">Logout</a>
          </div>
          <div class="container">
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
    </>
  );
}

export default Layout;