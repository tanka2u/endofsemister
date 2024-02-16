import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Auth from "../Auth";
import profile from "../../components/profile.css";
const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {!user ? (
        <Auth />
      ) : (
        <div className="list-item">
          <ul className="email">
            <li className="em">Email: {user.userEmail}</li>
            <li className="name">Name: {user.name}</li>
            <li className="dob">Date of Birth : {user.dob}</li>
            <li className="address">Address : {user.address}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Profile;
