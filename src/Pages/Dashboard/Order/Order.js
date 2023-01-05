import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  console.log(user?.email);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orderRoom/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [user?.email]);

  return (
    <div>
      <h2>This is for all user roder</h2>
    </div>
  );
};

export default Order;
