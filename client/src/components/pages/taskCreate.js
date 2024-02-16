import styles from "../taskCreate.css"
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
  

    <div class="container">
        <div class="form-header">
            <h1>Create New Task</h1>
        </div>
        <div class="form-section">
            <form>
                <div class="form-field">
                    <label for="relatedEvent">Related Event</label>
                    <select id="relatedEvent" name="relatedEvent">
                        <option value="event1">Event 1: Tech Conference</option>
                        <option value="event2">Event 2: Annual Meetup</option>
                    </select>
                </div>
                <div class="form-field">
                    <label for="taskTitle">Task Title</label>
                    <input type="text" id="taskTitle" name="taskTitle"/>
                </div>
                <div class="form-field">
                    <label for="taskDescription">Task Description</label>
                    <textarea id="taskDescription" name="taskDescription"></textarea>
                </div>
                <div class="form-field">
                    <label for="taskDeadline">Deadline</label>
                    <input type="date" id="taskDeadline" name="taskDeadline"/>
                </div>
                <div class="form-field">
                    <label for="taskAssignee">Assignee</label>
                    <select id="taskAssignee" name="taskAssignee">
                        <option value="user1">User 1</option>
                        <option value="user2">User 2</option>
                        <option value="user3">User 3</option>

                    </select>
                </div>
                <div class="form-field">
                    <button type="submit" class="button">Create Task</button>
                </div>
            </form>
        </div>
    </div>


