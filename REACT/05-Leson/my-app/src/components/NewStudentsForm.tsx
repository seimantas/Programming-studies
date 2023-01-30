import axios from "axios";
import { useState } from "react";

export const NewStudentsForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState<null | number>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    axios
      .post("", { firstName, lastName, age })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={firstName} onChange={(e) => setfirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setlastName(e.target.value)} />
      <input
        value={age ?? ""}
        onChange={(e) => setage(+e.target.value)}
        type="number"
      />
      <button>ADD</button>
    </form>
  );
};
