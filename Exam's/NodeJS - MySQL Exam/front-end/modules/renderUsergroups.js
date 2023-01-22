const renderUserGroups = async () => {
  try {
    const response = await fetch("http://localhost:5000/account", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    const data = await response.json();

    if (response.ok) {
      data.forEach((group) => {
        const { id, name } = group;

        const maneGroupContainer = document.querySelector("#userGroups");

        const groupContainer = document.createElement("div");

        groupContainer.setAttribute("id", "userGroupContainer");

        const groupIdelement = document.createElement("h2");
        groupIdelement.innerText = id;

        const groupNameElement = document.createElement("p");
        groupNameElement.innerText = name;

        groupContainer.append(groupIdelement, groupNameElement);
        maneGroupContainer.append(groupContainer);
      });
    }

    if (!response.ok) {
      return alert(response.statusText);
    }
  } catch (error) {
    alert(error.message);
  }
};

export { renderUserGroups };
