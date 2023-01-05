import React from 'react';

const UserRow = ({user, ind}) => {
    const {email} = user;
    console.log(user);
    return (
        <tr>
        <th>{ind + 1}</th>
        <td>{email}</td>
      </tr>
    );
};

export default UserRow;