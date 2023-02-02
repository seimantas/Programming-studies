import { useEffect, useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  const getUsers = () => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.error(err.message);
      });

    console.log(users);
    return (
      <>
        <p>labas</p>
      </>
    );
  };
};
