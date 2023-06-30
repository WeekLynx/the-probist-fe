import { useAuth0 } from "@auth0/auth0-react";
// import React, { useState } from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const [formData, setFormData] = useState({});

  // const handleInputChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   // Add the email and name to the formData object
  //   const dataToSave = {
  //     email: user.email,
  //     name: user.name,
  //     ...formData,
  //   };

  //   // Make an API call to save the data to the database
  //   // Replace "/api/save-data" with your backend endpoint
  //   fetch("/api/save-data", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(dataToSave),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       // Handle the server response
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //       console.error(error);
  //     });
  // };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;













// import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";

// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <div>
//         <img src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     )
//   );
// };

// export default Profile;


