// User.jsx

import React from "react";
import { useParams } from "react-router";

const User = () => {
 
    const { fname, lname } = useParams();

  return (
    <>
      <h1> user { fname } { lname} page</h1>
   
    </>
  );
};

export default User;

// App.jsx

<Route path='/user/:fname/:lname' element={<User/>} />
