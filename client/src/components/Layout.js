import styles from "../createNewEvent.css"
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
        <div class="form-header">
            <h2><b>Create New Event</b></h2>
        </div>
        <div class="form-section">
            <form>
                <div class="form-field">
                    <label for="eventName">Event Name</label>
                    <input type="text" id="eventName" name="eventName"/>
                </div>
                <div class="form-field">
                    <label for="eventDate">Event Date</label>
                    <input type="date" id="eventDate" name="eventDate"/>
                </div>
                <div class="form-field">
                    <label for="eventLocation">Location</label>
                    <input type="text" id="eventLocation" name="eventLocation"/>
                </div>
                <div class="form-field">
                    <label for="eventDescription">Event Description</label>
                    <textarea id="eventDescription" name="eventDescription"></textarea>
                </div>
                <div class="form-field">
                    <label for="eventResponsible">Event Responsible</label>
                    <select id="eventResponsible" name="eventResponsible">
                        <option value="user1">User 1</option>
                        <option value="user2">User 2</option>
                        <option value="user3">User 3</option>
                    </select>
                </div>
                <div class="form-field">
                    <label for="eventParticipants">Participants</label>
                    <select id="eventParticipants" name="eventParticipants" multiple>
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

    </>
</>
);
}
export default Layout;
