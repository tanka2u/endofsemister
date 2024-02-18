import Layout from "../Layout";
import profilecss from "../../components/profile.css";
import { useEffect, useState } from "react";
const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Function to fetch users from the server
    const getUser = () => {
      const userJSON = localStorage.getItem('user');
      const user = JSON.parse(userJSON);
      setUser(user);
    }
    // Call the fetchUsers function when the component mounts
    getUser();

    // Clean up function (optional)
    // This function will be called when the component unmounts
    return () => {
      // Any cleanup code (if needed)
    };
  }, []);
  
  return (
    <>
    <Layout>
      <div className="container">
      <div className="list-item">
        {user !== null ? (
          <ul className="email">
          <li className="em">Email: {user.email}</li>
          <li className="name">Name: {user.name}</li>
          <li className="dob">Date of Birth : {user.dateOfBirth}</li>
          <li className="address">Address : {user.address}</li>
        </ul>
        ): (
          <ul className="email">
            <li className="em">Email: </li>
            <li className="name">Name: </li>
            <li className="dob">Date of Birth : </li>
            <li className="address">Address : </li>
          </ul>
        )}
        </div>
      </div>
    </Layout>
    </>
  );
}

export default Profile;
