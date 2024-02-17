import Layout from "../Layout";
import profilecss from "../../components/profile.css";
const Profile = () => {
  return (
    <>
    <Layout>
      <div className="container">
      <div className="list-item">
          <ul className="email">
            <li className="em">Email: Tanka prasad poudel</li>
            <li className="name">Name: </li>
            <li className="dob">Date of Birth : </li>
            <li className="address">Address : </li>
          </ul>
        </div>
      </div>
    </Layout>
    </>
  );
}

export default Profile;
