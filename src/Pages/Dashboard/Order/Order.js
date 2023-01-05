import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import OrderTable from "./OrderTable/OrderTable";

const Order = () => {
  const [user] = useAuthState(auth);
  const [bookingOrder, setBookingOrder] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order/${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          // if (res.status(401) || res.status(401)) {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken")
            navigate('/')
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setBookingOrder(data);
          console.log("order", data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2>This is for all user roder {bookingOrder?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {bookingOrder?.map((bookingProduct, ind) => (
              <OrderTable bookingProduct={bookingProduct} ind={ind}></OrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
