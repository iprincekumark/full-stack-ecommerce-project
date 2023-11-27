import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Make an API call to fetch user information from the backend
    fetch("http://your-api-url/user-profile-endpoint")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user profile:", error));
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>
      {/* Other user information */}
    </div>
  );
}

export default Profile;
