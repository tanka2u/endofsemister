import styles from "../eventDetails.css"
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import Auth from "./Auth";
import ProfileModal from "./ProfileModal";
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
  
  return(
    <>
      <>
      <div class="navbar">
        <a href="/">Home</a>
        <a href="/">Events</a>
        <a href="/">Tasks</a>
        <a href="/">Profile</a>
        <a href="/">Logout</a>
    </div>
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
</>
);
}
export default Layout;
