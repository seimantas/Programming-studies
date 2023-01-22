import { renderAllGroups } from "./renderAllGroups.js";
import { renderUserGroups } from "./renderUsergroups.js";

await renderAllGroups();
await renderUserGroups();

const addUserToGroup = document.querySelector("#addUserToGroup");

addUserToGroup.addEventListener("submit", async (event) => {
  event.preventDefault();

  const groupIdInputvalue = document.querySelector("#userInputId").value.trim();

  try {
    const respons = await fetch("http://localhost:5000/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ group_id: groupIdInputvalue }),
    });

    if (respons.ok) {
      alert("User succsefuly added to group.");
    }

    if (!respons.ok) {
      return alert(respons.statusText);
    }
  } catch (error) {
    return console.error(error);
  }
});
