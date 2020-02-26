import React from "react";

export default function UserCard({ users }) {
  return (
    <div className="users-wrapper">
      {users.map(user => (
        <div>
          <h3>
            First Name: <span>{user.firstName}</span>
          </h3>
          <h3>
            First Name: <span>{user.lastName}</span>
          </h3>
          <h3>
            First Name: <span>{user.email}</span>
          </h3>
        </div>
      ))}
    </div>
  );
}
