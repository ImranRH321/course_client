import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Sheard/Footer/Loading";
import UserRow from "../UserRow/UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );

  if (isLoading) return <Loading></Loading>;

  return (
    <div>
      <h2>all user {users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, ind) => (
              <UserRow user={user} ind={ind}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
