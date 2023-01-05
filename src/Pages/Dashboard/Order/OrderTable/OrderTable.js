import React from "react";

const OrderTable = ({bookingProduct, ind}) => {
    console.log(bookingProduct);
  const {name,userEmail, date} = bookingProduct;

    return (
    <tr>
      <th>{ind + 1}</th>
      <td>{name}</td>
      <td>{userEmail}</td>
      <td>{date}</td>
      <td>Canada</td>
      <td>12/16/2020</td>
      <td>Blue</td>
    </tr>
  );
};

export default OrderTable;
