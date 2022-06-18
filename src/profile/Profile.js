import React from "react";
import PropTypes from "prop-types";

function Profile({ fullName, bio, profession, children, handleName }) {
  return (
    <div
      onLoad={handleName(fullName)}
      style={{
        minHeight: "100vh",
        padding: "80px",
        color: "white",
        backgroundColor: "#282c34",
        textAlign: "center",
      }}
    >
      <div>
        <img
          src={children}
          alt="profile-pic"
          style={{ width: 230, borderRadius: "50%" }}
        />
      </div>
      <div>
        <h1>{fullName}</h1>
      </div>
      <div>
        <h3>{bio}</h3>
      </div>
      <div>
        <h3>{profession}</h3>
      </div>
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.string,
};

Profile.defaultProps = {
  fullName: "FullName",
  bio: "Recent graduate",
  profession: "Unemployed",
  children:
    "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
};

export default Profile;
